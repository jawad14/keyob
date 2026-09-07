'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { env } from '@/lib/env';

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileProps = {
  /** Name of the hidden input carrying the token. Must match the server. */
  fieldName?: string;
  /**
   * Any value whose identity changes when the current token should be thrown
   * away and a fresh one issued — tokens are single use, so a resubmit after a
   * rejected attempt needs a new one. The first change after mount is ignored.
   */
  resetSignal?: unknown;
  className?: string;
};

export function Turnstile({
  fieldName = 'captchaToken',
  resetSignal,
  className,
}: TurnstileProps) {
  const siteKey = env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const widgetId = widgetIdRef.current;
    // Null on mount, because the script loads asynchronously and no widget
    // exists yet — so the first run of this effect is a no-op by construction.
    if (!widgetId) return;
    try {
      window.turnstile?.reset(widgetId);
    } catch {
      // The widget behind this id is already gone. Throwing out of an effect
      // would take the whole segment down over a captcha that just needs
      // re-rendering, so drop the stale id and let onReady mint a fresh one.
      widgetIdRef.current = null;
    }
  }, [resetSignal]);

  useEffect(
    () => () => {
      // Read at teardown, not at mount: at mount there is no id yet, so a
      // captured one would always be null and nothing would be cleaned up.
      const widgetId = widgetIdRef.current;
      widgetIdRef.current = null;
      if (widgetId) window.turnstile?.remove(widgetId);
    },
    [],
  );

  if (!siteKey) return null;

  function renderWidget() {
    const container = containerRef.current;
    if (!container || widgetIdRef.current) return;
    // A remount can leave the previous widget's iframe behind; Turnstile
    // refuses to render into a container that is not empty.
    container.replaceChildren();
    widgetIdRef.current =
      window.turnstile?.render(container, {
        sitekey: siteKey,
        // Turnstile writes the token into a hidden input of this name inside
        // the enclosing form, so it is submitted with the rest of the fields
        // and needs no wiring of its own.
        'response-field-name': fieldName,
        appearance: 'always',
        // Turnstile defaults to 'auto', which follows the visitor's OS. The
        // site is light-only (siteConfig.features.darkMode is false), so auto
        // would drop a dark widget into a white form.
        theme: 'light',
      }) ?? null;
  }

  return (
    <>
      {/* onReady, not onLoad: it also fires when this component remounts on a
          client navigation where the script is already in the document. */}
      <Script src={SCRIPT_SRC} strategy="afterInteractive" onReady={renderWidget} />
      <div ref={containerRef} className={className} />
    </>
  );
}
