import { aboutBecameChips, aboutLayerNodes } from '@/config/keyob-about';

const cx = 230;
const cy = 230;
const r = 168;

export function AuBecame() {
  const nodes = aboutLayerNodes.map((label, i) => {
    const a = ((-90 + i * (360 / aboutLayerNodes.length)) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const sx = cx + 52 * Math.cos(a);
    const sy = cy + 52 * Math.sin(a);
    const w = label.length * 5.6 + 22;
    return { label, x, y, sx, sy, w, delay: i * 0.12 };
  });

  return (
    <section className="au-became" id="became">
      <div className="wrap au-became-grid">
        <div>
          <div className="au-eyebrow">What we became</div>
          <h2 className="au-h2">
            From technology delivery to <em>business operating systems.</em>
          </h2>
          <p>
            KEYOB still designs and builds software — but the value is now broader. We understand
            how customers come in, how work moves, how teams collaborate, how data flows, where
            manual effort is wasted, where AI can create practical value, and how systems should
            support growth.
          </p>
          <p className="au-became-key">
            KEYOB meets clients where they are — and helps them move forward.
          </p>
          <div className="au-became-chips">
            {aboutBecameChips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="au-layer-vis" aria-hidden="true">
          <svg viewBox="0 0 460 460">
            {nodes.map((n, i) => (
              <line
                key={`au-lyr-spoke-${i}`}
                className="au-lyr-spoke"
                x1={n.sx}
                y1={n.sy}
                x2={n.x}
                y2={n.y}
                style={{ animationDelay: `${n.delay}s` }}
              />
            ))}
            <circle className="au-lyr-core" cx={cx} cy={cy} r={52} />
            <text className="au-lyr-core-label" x={cx} y={cy - 4} textAnchor="middle">
              KEYOB
            </text>
            <text
              className="au-lyr-core-label"
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fontSize={10}
            >
              Operating Layer
            </text>
            {nodes.map((n, i) => (
              <g key={`au-lyr-node-${i}`}>
                <rect
                  className="au-lyr-node"
                  x={n.x - n.w / 2}
                  y={n.y - 14}
                  width={n.w}
                  height={28}
                  rx={8}
                />
                <text className="au-lyr-label" x={n.x} y={n.y + 4} textAnchor="middle">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
