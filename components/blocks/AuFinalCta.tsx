import Link from 'next/link';

export function AuFinalCta() {
  return (
    <section className="au-final">
      <div className="au-final-mesh" aria-hidden="true" />
      <div className="wrap au-final-in">
        <h2 className="au-h2 au-h2--on-dark au-final-h2">
          The next version of your business needs{' '}
          <em>the right technology partner beside it.</em>
        </h2>
        <p className="au-final-copy">
          Whether you are improving your website, strengthening your visibility, connecting your
          CRM, modernizing your ERP, automating manual work, or exploring AI, KEYOB can help you
          take the next step with clarity.
          <span className="au-final-seq">
            We meet you where you are. We help you see what is possible. Then we build the systems
            that move you forward.
          </span>
        </p>
        <div className="au-final-cta">
          <Link href="/contact#contact" className="au-btn">
            Book a free AI assessment <span aria-hidden="true">→</span>
          </Link>
          <Link href="/what-we-do" className="au-btn au-btn--ghost">
            Explore what we do
          </Link>
        </div>
      </div>
    </section>
  );
}
