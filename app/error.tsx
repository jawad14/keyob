'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { logger } from '@/lib/logger/client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('segment error boundary', error, { digest: error.digest });
  }, [error]);

  return (
    <>
      <Nav />
      <main>
        <section className="phead">
          <div className="phead-mesh" aria-hidden="true" />
          <div className="wrap phead-inner">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span>/</span>
              Error
            </div>
            <h1>
              Something went <em>off-script.</em>
            </h1>
            <p>
              An unexpected error stopped this page from loading. It&apos;s on
              our side, not yours. You can try again — if it keeps happening,
              get in touch and we&apos;ll sort it.
            </p>

            <div className="oops-actions">
              <button
                type="button"
                onClick={reset}
                className="oops-btn oops-btn-primary"
              >
                Try again
              </button>
              <Link href="/" className="oops-btn oops-btn-ghost">
                Back to home
              </Link>
              <Link href="/contact" className="oops-btn oops-btn-ghost">
                Report the issue
              </Link>
            </div>

            {error.digest ? (
              <p className="oops-ref">
                Reference: <code>{error.digest}</code>
              </p>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
