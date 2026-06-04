import Link from 'next/link';

export function LtFinalCta() {
  return (
    <section className="lt-final">
      <div className="lt-final-mesh" aria-hidden="true" />
      <div className="wrap lt-final-in">
        <h2 className="lt-h2 lt-h2--on-dark lt-final-h2">
          Meet the people who can help <em>move your business forward.</em>
        </h2>
        <p>
          Whether you are exploring AI, improving your website, connecting CRM, modernizing ERP,
          or building better dashboards, KEYOB&apos;s leadership and team are ready to help you
          find the right next step.
        </p>
        <div className="lt-final-cta">
          <Link href="/#contact" className="lt-btn">
            Book a free AI assessment <span aria-hidden="true">→</span>
          </Link>
          <Link href="/what-we-do" className="lt-btn lt-btn--ghost">
            Explore what we do
          </Link>
        </div>
      </div>
    </section>
  );
}
