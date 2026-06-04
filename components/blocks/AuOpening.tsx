// Animated grid background (faint lines + pulsing accent nodes) is precomputed
// from a fixed seed so the markup is deterministic and SSR-stable.
const gridXs = Array.from({ length: 19 }, (_, i) => i * 80);
const gridYs = Array.from({ length: 11 }, (_, i) => i * 80);
const accentPts: Array<[number, number]> = [
  [180, 200],
  [420, 140],
  [640, 300],
  [900, 180],
  [1120, 320],
  [1280, 160],
  [760, 520],
  [300, 560],
  [1040, 560],
];

export function AuOpening() {
  return (
    <header className="au-opening">
      <div className="au-opening-mesh" aria-hidden="true" />
      <svg
        className="au-opening-grid"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {gridXs.map((x) => (
          <line key={`gx-${x}`} x1={x} y1={0} x2={x} y2={800} stroke="rgba(245,248,250,.04)" />
        ))}
        {gridYs.map((y) => (
          <line key={`gy-${y}`} x1={0} y1={y} x2={1440} y2={y} stroke="rgba(245,248,250,.04)" />
        ))}
        {accentPts.map((p, i) => {
          const n = accentPts[(i + 1) % accentPts.length];
          return (
            <line
              key={`ln-${i}`}
              x1={p[0]}
              y1={p[1]}
              x2={n[0]}
              y2={n[1]}
              stroke="rgba(25,198,232,.18)"
              strokeWidth="1"
            />
          );
        })}
        {accentPts.map((p, i) => (
          <circle key={`cp-${i}`} cx={p[0]} cy={p[1]} r={4} fill="#19C6E8" opacity={0.7}>
            <animate
              attributeName="opacity"
              values="0.25;0.9;0.25"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className="wrap au-opening-in">
        <div className="au-manifesto-tag">
          About KEYOB · The operating layer behind modern business
        </div>
        <h1>
          Built for the businesses that know they need to change —{' '}
          <em>but need the right partner to do it properly.</em>
        </h1>
        <div className="au-opening-copy">
          <p>
            KEYOB was built around a simple belief: technology should make business clearer,
            faster, and easier to run.
          </p>
          <p>
            We started by solving real software problems for real businesses. Over time, those
            problems became bigger than code. Clients did not only need websites, portals, CRMs,
            ERPs, dashboards, or integrations. They needed someone who could understand how their
            business worked, connect the moving parts, and help them modernize without losing
            control.
          </p>
          <p className="au-opening-key">That is where KEYOB grew.</p>
          <p>
            Today, KEYOB helps businesses use software, data, automation, and AI to build smarter
            operating systems — not just isolated digital tools.
          </p>
        </div>
      </div>

      <div className="au-scrollcue" aria-hidden="true">
        <span>SCROLL</span>
        <span className="au-scrollcue-ln" />
      </div>
    </header>
  );
}
