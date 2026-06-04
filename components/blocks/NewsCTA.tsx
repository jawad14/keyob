import Link from 'next/link';

export function NewsCTA() {
  return (
    <section className="news-cta">
      <div className="news-cta-mesh" aria-hidden="true" />
      <div className="wrap news-cta-in">
        <h2>
          Want to understand where AI can <em>improve your operations?</em>
        </h2>
        <p>
          KEYOB helps growing businesses identify workflow gaps, automation opportunities, and the
          systems needed to scale with clarity.
        </p>
        <Link href="/#contact" className="news-btn">
          Book an operational clarity session <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
