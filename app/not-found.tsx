import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';

export const metadata: Metadata = {
  title: 'Page not found | KEYOB',
  description:
    "The page you're looking for has moved or never existed. Find your way back from here.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
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
              404
            </div>
            <h1>
              We couldn&apos;t find <em>that page.</em>
            </h1>
            <p>
              The link is broken, the page has moved, or it never existed. No
              harm done — pick a fresh direction from below and we&apos;ll get
              you to the right place.
            </p>

            <div className="oops-actions">
              <Link href="/" className="oops-btn oops-btn-primary">
                Back to home
              </Link>
              <Link href="/stories" className="oops-btn oops-btn-ghost">
                Explore client stories
              </Link>
              <Link href="/contact" className="oops-btn oops-btn-ghost">
                Talk to us
              </Link>
            </div>

            <div className="oops-links">
              <span className="oops-links-label">Looking for something specific?</span>
              <ul>
                <li>
                  <Link href="/what-we-do">What we do</Link>
                </li>
                <li>
                  <Link href="/leadership-team">Leadership &amp; team</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
