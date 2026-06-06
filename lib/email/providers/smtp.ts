import 'server-only';
import nodemailer, { type Transporter } from 'nodemailer';
import { env } from '@/lib/env';
import { logger } from '@/lib/logger';
import type { Email } from '../types';

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (transporter) return transporter;
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) return null;

  const port = env.SMTP_PORT ?? 465;
  const secure = env.SMTP_SECURE ?? port === 465;

  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port,
    secure,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });

  return transporter;
}

export function createSmtpEmail(): Email {
  return {
    send: async (message) => {
      const t = getTransporter();
      if (!t) {
        logger.warn('smtp provider not configured; message dropped', {
          to: message.to,
          subject: message.subject,
        });
        return { ok: false, error: 'smtp not configured' };
      }

      try {
        const info = await t.sendMail({
          to: message.to,
          from: message.from ?? env.EMAIL_FROM ?? env.SMTP_USER,
          replyTo: message.replyTo,
          subject: message.subject,
          text: message.text,
          html: message.html,
        });
        return { ok: true, id: info.messageId };
      } catch (err) {
        const error = err instanceof Error ? err.message : 'unknown smtp error';
        logger.error('smtp send failed', err, { to: message.to, subject: message.subject });
        return { ok: false, error };
      }
    },
  };
}
