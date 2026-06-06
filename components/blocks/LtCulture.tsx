import Image from 'next/image';

export function LtCulture() {
  return (
    <section className="lt-culture">
      <div className="wrap lt-culture-grid">
        <div>
          <div className="lt-eyebrow">Culture</div>
          <h2 className="lt-h2">
            Professional by standard. <em>Human by nature.</em>
          </h2>
          <p>
            KEYOB&apos;s culture is shaped by responsibility, communication, and ownership. We
            work with clients who trust us with important business systems, so professionalism is
            not optional. It is part of how we operate.
          </p>
          <p>
            But we also believe technology work should feel human.{' '}
            <strong>Clients should feel heard. Teams should feel supported.</strong> And every
            system we build should reduce pressure, not add complexity.
          </p>
        </div>
        <div className="lt-culture-vis">
          <Image
            src="/team.jpg"
            alt="KEYOB team across Australia, the United States, Pakistan and Sweden"
            fill
            sizes="(min-width: 960px) 45vw, 100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
