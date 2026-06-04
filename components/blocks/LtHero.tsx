import { ltRegions } from '@/config/keyob-leadership';

// Animated network bg — deterministic precomputed points.
const accentPts: Array<[number, number]> = [
  [200, 150],
  [520, 110],
  [820, 200],
  [1120, 140],
  [1280, 300],
  [640, 360],
  [980, 380],
  [360, 420],
];

export function LtHero() {
  return (
    <header className="lt-opening">
      <div className="lt-opening-mesh" aria-hidden="true" />
      <svg
        className="lt-opening-net"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {accentPts.map((p, i) => {
          const n = accentPts[(i + 1) % accentPts.length];
          return (
            <line
              key={`ln-${i}`}
              x1={p[0]}
              y1={p[1]}
              x2={n[0]}
              y2={n[1]}
              stroke="rgba(25,198,232,.14)"
            />
          );
        })}
        {accentPts.map((p, i) => (
          <circle key={`cp-${i}`} cx={p[0]} cy={p[1]} r={4} fill="#19C6E8" opacity={0.6}>
            <animate
              attributeName="opacity"
              values="0.25;0.85;0.25"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className="wrap lt-opening-in">
        <div className="lt-eyebrow lt-eyebrow--cyan">Leadership &amp; Team</div>
        <h1>
          Built by people who believe technology should make business{' '}
          <em>clearer, faster, and easier to run.</em>
        </h1>
        <div className="lt-opening-copy">
          <p>
            Behind every KEYOB project is a team that understands one thing clearly: businesses do
            not need more disconnected tools. They need thoughtful people who can understand the
            problem, design the right system, and stay close as the business evolves.
          </p>
          <p>
            KEYOB&apos;s leadership brings together experience across Australia, Sweden, the
            United States, Pakistan, and the Middle East — combining business strategy, software
            delivery, systems integration, AI adoption, and long-term client partnership.
          </p>
        </div>
        <div className="lt-region-row">
          {ltRegions.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
