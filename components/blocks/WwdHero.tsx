import Link from 'next/link';
import { wwdLadderStages } from '@/config/keyob-wwd';

// Animated ladder hero visual — zig-zag climb through 7 maturity stages.
// Each segment is drawn in sequence with stroke-dashoffset, dots pop in,
// and a clip-path wipe types each label left-to-right.
const segmentCoords: Array<[number, number, number, number, number, number]> = [
  // [x1, y1, x2, y2, length, delay-s]
  [40, 430, 122, 372, 100, 0.95],
  [122, 372, 94, 314, 64, 2.05],
  [94, 314, 176, 256, 100, 3.15],
  [176, 256, 148, 198, 64, 4.25],
  [148, 198, 230, 140, 100, 5.35],
  [230, 140, 202, 82, 64, 6.45],
];

const stops: Array<{ x: number; y: number; popDelay: number; labelDelay: number; tickEnd: number; textX: number; clipX: number; clipW: number }> = [
  { x: 40, y: 430, popDelay: 0.4, labelDelay: 0.55, tickEnd: 150, textX: 158, clipX: 156, clipW: 170 },
  { x: 122, y: 372, popDelay: 1.5, labelDelay: 1.65, tickEnd: 154, textX: 162, clipX: 160, clipW: 170 },
  { x: 94, y: 314, popDelay: 2.6, labelDelay: 2.75, tickEnd: 204, textX: 212, clipX: 210, clipW: 180 },
  { x: 176, y: 256, popDelay: 3.7, labelDelay: 3.85, tickEnd: 208, textX: 216, clipX: 214, clipW: 180 },
  { x: 148, y: 198, popDelay: 4.8, labelDelay: 4.95, tickEnd: 258, textX: 266, clipX: 264, clipW: 180 },
  { x: 230, y: 140, popDelay: 5.9, labelDelay: 6.05, tickEnd: 262, textX: 270, clipX: 268, clipW: 150 },
  { x: 202, y: 82, popDelay: 7.0, labelDelay: 7.15, tickEnd: 234, textX: 242, clipX: 240, clipW: 190 },
];

export function WwdHero() {
  return (
    <header className="wwd-hero">
      <div className="wwd-hero-mesh" aria-hidden="true" />
      <div className="wrap wwd-hero-grid">
        <div>
          <div className="wwd-eyebrow">What we do</div>
          <h1>
            One partner for every stage of your <em>digital and AI journey.</em>
          </h1>
          <p className="wwd-hero-sub">
            KEYOB helps businesses move from scattered digital efforts to connected systems —
            combining branding, websites, SEO, AEO, GEO, CRM, ERP, automation, AI workflows,
            dashboards, and integration into one practical growth journey.
          </p>
          <div className="wwd-hero-ctas">
            <Link href="/#contact" className="wwd-btn">
              Book a free AI assessment <span aria-hidden="true">→</span>
            </Link>
            <Link href="#stages" className="wwd-btn wwd-btn--ghost">
              Find your stage
            </Link>
          </div>
        </div>

        <div className="wwd-ladder" aria-hidden="true">
          <svg viewBox="0 0 460 470">
            {segmentCoords.map(([x1, y1, x2, y2, len, d], i) => (
              <line
                key={`seg-${i}`}
                className="wwd-lad-seg"
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                style={{ ['--len' as string]: `${len}px`, ['--d' as string]: `${d}s` }}
              />
            ))}

            {stops.map((s, i) => (
              <g key={`stop-${i}`}>
                <circle
                  className="wwd-lad-dot wwd-lad-glow"
                  cx={s.x}
                  cy={s.y}
                  r={7}
                  style={{ ['--d' as string]: `${s.popDelay}s` }}
                />
                <g className="wwd-lad-text" style={{ ['--d' as string]: `${s.labelDelay}s` }}>
                  <line
                    className="wwd-lad-tick"
                    x1={s.x + 14}
                    y1={s.y}
                    x2={s.tickEnd}
                    y2={s.y}
                  />
                  <g clipPath={`url(#wwd-clip-${i})`}>
                    <text className="wwd-lad-label" x={s.textX} y={s.y + 4}>
                      {wwdLadderStages[i]}
                    </text>
                  </g>
                  <clipPath id={`wwd-clip-${i}`}>
                    <rect
                      className="wwd-lad-wipe"
                      x={s.clipX}
                      y={s.y - 7}
                      width={s.clipW}
                      height={16}
                      style={{ ['--d' as string]: `${s.labelDelay}s` }}
                    />
                  </clipPath>
                </g>
              </g>
            ))}

            <defs>
              <marker
                id="wwd-lad-arrow"
                viewBox="0 0 10 10"
                refX={7}
                refY={5}
                markerWidth={7}
                markerHeight={7}
                orient="auto-start-reverse"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="var(--keyob-cyan)" />
              </marker>
            </defs>
            <line
              className="wwd-lad-seg"
              x1={202}
              y1={82}
              x2={284}
              y2={24}
              style={{ ['--len' as string]: '100px', ['--d' as string]: '8s' }}
              markerEnd="url(#wwd-lad-arrow)"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
