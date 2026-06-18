'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger/client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.fatal('global error boundary', error, { digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          background: '#07101E',
          color: '#F5F8FA',
          fontFamily:
            "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(110% 80% at 85% 15%, rgba(25,198,232,.28), transparent 55%), radial-gradient(90% 90% at 8% 90%, rgba(18,60,140,.55), transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: 520,
            textAlign: 'left',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'rgba(245,248,250,.65)',
              marginBottom: 24,
            }}
          >
            KEY<span style={{ color: '#19C6E8' }}>OB</span> · CRITICAL ERROR
          </div>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(36px, 6vw, 60px)',
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              margin: 0,
            }}
          >
            Something went{' '}
            <em style={{ color: '#19C6E8', fontStyle: 'italic' }}>off-script.</em>
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(245,248,250,.74)',
              maxWidth: '44ch',
            }}
          >
            A critical error stopped the page from rendering. Reload to try
            again — if it persists, get in touch.
          </p>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                appearance: 'none',
                background: '#19C6E8',
                color: '#07101E',
                border: 'none',
                borderRadius: 999,
                padding: '12px 22px',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
            <a
              href="/"
              style={{
                appearance: 'none',
                background: 'transparent',
                color: '#F5F8FA',
                border: '1px solid rgba(245,248,250,.3)',
                borderRadius: 999,
                padding: '12px 22px',
                fontSize: 14,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Back to home
            </a>
          </div>
          {error.digest ? (
            <p
              style={{
                marginTop: 24,
                fontSize: 12,
                color: 'rgba(245,248,250,.5)',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
