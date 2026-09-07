import 'server-only';
import { env } from '@/lib/env';
import { logger } from '@/lib/logger';

const VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// Cloudflare answers in tens of milliseconds. A wait longer than this means
// the service is unreachable, not that the visitor is slow.
const VERIFY_TIMEOUT_MS = 5000;

export type CaptchaVerdict =
  | { ok: true }
  | { ok: false; reason: 'missing' | 'rejected' };

/**
 * Both halves of the key pair have to be present for the check to mean
 * anything: without the site key the widget never renders, so every visitor
 * would arrive tokenless and be turned away.
 */
export function isCaptchaConfigured(): boolean {
  return Boolean(
    env.TURNSTILE_SECRET_KEY && env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );
}

type SiteverifyResponse = {
  success?: boolean;
  'error-codes'?: string[];
};

/**
 * Verifies a Cloudflare Turnstile token against the siteverify API.
 *
 * Tokens are single use and expire 300 seconds after issue, so a caller that
 * gets `rejected` must have the widget issue a fresh one before retrying.
 *
 * Unconfigured is a pass, so local development and any fork that has not set
 * up Turnstile still works — the honeypot and timing checks remain the floor.
 */
export async function verifyCaptcha(
  token: string | undefined,
  remoteIp?: string,
): Promise<CaptchaVerdict> {
  if (!isCaptchaConfigured()) {
    logger.warn('captcha not configured — skipping verification');
    return { ok: true };
  }

  if (!token) return { ok: false, reason: 'missing' };

  const body = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY as string,
    response: token,
  });
  if (remoteIp) body.set('remoteip', remoteIp);

  let response: Response;
  try {
    response = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(VERIFY_TIMEOUT_MS),
      cache: 'no-store',
    });
  } catch (error) {
    // An attacker cannot make Cloudflare unreachable, so an outage here says
    // nothing about this visitor — turning them away would cost real leads to
    // punish someone else's downtime. Let it through, loudly.
    logger.error('captcha verification unreachable — allowing submission', error);
    return { ok: true };
  }

  const result = (await response.json().catch(() => ({}))) as SiteverifyResponse;

  if (!response.ok) {
    // Not a verdict on the visitor: siteverify answers 400 when our own
    // request is malformed, and a mistyped secret is the way that happens.
    // Deterministic and permanent, so it would silently disable the check for
    // every visitor from here on — fatal, because only a human can clear it.
    logger.fatal('captcha misconfigured — verification is not running', undefined, {
      status: response.status,
      errorCodes: result['error-codes'] ?? [],
    });
    return { ok: true };
  }

  if (!result.success) {
    logger.warn('captcha rejected a submission', {
      errorCodes: result['error-codes'] ?? [],
    });
    return { ok: false, reason: 'rejected' };
  }

  return { ok: true };
}
