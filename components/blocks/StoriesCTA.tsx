import Link from 'next/link';

export function StoriesCTA() {
  return (
    <section className="stories-cta">
      <div className="wrap">
        <div className="stories-cta-card">
          <h2>
            Your story <em>starts with a conversation.</em>
          </h2>
          <p>
            Every one of these began with a free AI assessment — a focused look at where you are
            and where intelligence would actually earn its place. No obligation.
          </p>
          <Link href="/contact#contact" className="btn-cta">
            Book your free AI assessment <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
