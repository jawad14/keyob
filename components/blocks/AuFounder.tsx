import { aboutFounderList } from '@/config/keyob-about';

const accentPts: Array<[number, number]> = [
  [200, 160],
  [500, 120],
  [820, 240],
  [1120, 140],
  [1280, 300],
  [640, 420],
  [980, 440],
];

export function AuFounder() {
  return (
    <section className="au-founder">
      <svg
        className="au-founder-bg"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {accentPts.map((p, i) => {
          const n = accentPts[(i + 1) % accentPts.length];
          return (
            <line
              key={`fbg-${i}`}
              x1={p[0]}
              y1={p[1]}
              x2={n[0]}
              y2={n[1]}
              stroke="rgba(25,198,232,.1)"
            />
          );
        })}
        {accentPts.map((p, i) => (
          <circle key={`fbgp-${i}`} cx={p[0]} cy={p[1]} r={3} fill="#19C6E8" opacity={0.4} />
        ))}
      </svg>

      <div className="wrap au-founder-grid">
        <div>
          <div className="au-eyebrow">Leadership</div>
          <h2 className="au-h2">
            Leadership with a <em>builder&apos;s mindset.</em>
          </h2>
          <p>
            KEYOB is led with the belief that technology companies must do more than deliver
            features. They must understand business pressure, customer expectations, team
            limitations, and the speed at which markets change.
          </p>
          <ul className="au-founder-list">
            {aboutFounderList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <blockquote className="au-founder-quote">
            &ldquo;Most businesses do not need more disconnected tools. They need the right
            systems, connected properly, so their teams can work with more clarity and
            confidence.&rdquo;
            <span className="au-founder-by">Jawad Siddique · Founder, KEYOB</span>
          </blockquote>
        </div>

        <div className="au-founder-img">
          <video
            className="au-founder-video"
            src="/jawad-ceo-about.mp4"
            poster="/jawad-ceo.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Jawad Siddique, Founder of KEYOB"
          />
          <div className="au-founder-badge">
            <b>Jawad Siddique</b>
            <span>FOUNDER · KEYOB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
