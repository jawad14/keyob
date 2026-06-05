import Image from 'next/image';

export function WwdHuman() {
  return (
    <section className="wwd-human">
      <div className="wrap wwd-human-grid">
        <div>
          <div className="wwd-eyebrow">The human side</div>
          <h2 className="wwd-h2">
            Technology should make business feel <em>lighter, not heavier.</em>
          </h2>
          <p>
            Business owners do not need more tools to manage. They need systems that reduce
            pressure, remove repetitive work, make information visible, and help teams move with
            confidence.
          </p>
          <p>
            <strong>KEYOB builds technology around real business life</strong> — not around
            software for the sake of software. The goal is not more software. The goal is a
            business that runs with more clarity, speed, and control.
          </p>
        </div>
        <div className="wwd-human-vis">
          <Image
            src="/wwd-human-team.png"
            alt="KEYOB team collaborating on business technology solutions"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="wwd-human-photo"
          />
        </div>
      </div>
    </section>
  );
}
