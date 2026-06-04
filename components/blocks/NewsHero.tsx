import Link from 'next/link';

export function NewsHero() {
  return (
    <header className="news-hero">
      <div className="news-hero-mesh" aria-hidden="true" />
      <div className="wrap news-hero-inner">
        <p className="news-eyebrow">KEYOB · News &amp; Perspectives</p>
        <h1>
          News &amp; Perspectives on <em>AI Operations</em>
        </h1>
        <p className="news-hero-sub">
          Practical updates, ideas, and field notes on AI workflow automation, ERP systems,
          business process automation, operational intelligence, and the future of smarter business
          operations.
        </p>
        <div className="news-hero-ctas">
          <Link href="#feed" className="news-btn">
            Explore latest updates <span aria-hidden="true">→</span>
          </Link>
          <Link href="/#contact" className="news-btn news-btn--ghost">
            Book an operational clarity session
          </Link>
        </div>
      </div>
    </header>
  );
}
