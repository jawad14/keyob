import Link from 'next/link';

export function WwdCta() {
  return (
    <section className="wwd-final">
      <div className="wwd-final-mesh" aria-hidden="true" />
      <div className="wrap wwd-final-in">
        <h2 className="wwd-h2 wwd-h2--on-dark wwd-final-h2">
          Start where you are. <em>Build toward where your business needs to go.</em>
        </h2>
        <p>
          Whether you need a better website, stronger visibility, a CRM that actually works, an
          ERP that fits your operations, or AI workflows that save real time — KEYOB can help you
          identify the right next step.
        </p>
        <div className="wwd-final-cta">
          <Link href="/contact#contact" className="wwd-btn">
            Book a free AI assessment <span aria-hidden="true">→</span>
          </Link>
          <Link href="/contact#contact" className="wwd-btn wwd-btn--ghost">
            Tell us where you are stuck
          </Link>
        </div>
      </div>
    </section>
  );
}
