import { aboutDifferentNodes } from '@/config/keyob-about';

const cx = 230;
const cy = 230;
const r = 172;

export function AuDifferent() {
  const nodes = aboutDifferentNodes.map((label, i) => {
    const a = ((-90 + i * (360 / aboutDifferentNodes.length)) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const sx = cx + 46 * Math.cos(a);
    const sy = cy + 46 * Math.sin(a);
    const w = label.length * 7 + 20;
    return { label, x, y, sx, sy, w, delay: i * 0.1 };
  });

  return (
    <section className="au-diff">
      <div className="au-diff-mesh" aria-hidden="true" />
      <div className="wrap au-diff-grid">
        <div>
          <div className="au-eyebrow au-eyebrow--cyan">What makes us different</div>
          <h2 className="au-h2 au-h2--on-dark">
            We connect what <em>most companies separate.</em>
          </h2>
          <p>
            A business may hire one team for branding, another for the website, another for SEO,
            another for CRM, another for ERP, another for dashboards, and another for AI. The
            result is often fragmentation.
          </p>
          <p>
            KEYOB brings these layers together. We understand how digital presence, customer
            systems, operational systems, reporting, automation, and AI depend on each other. We
            don&apos;t only ask, &ldquo;What do you want built?&rdquo;
          </p>
          <div className="au-diff-ask">
            &ldquo;How should this help the business run better?&rdquo;
          </div>
        </div>

        <div className="au-diff-vis" aria-hidden="true">
          <svg viewBox="0 0 460 460">
            {nodes.map((n, i) => (
              <line
                key={`dl-${i}`}
                className="au-dl-line"
                x1={n.sx}
                y1={n.sy}
                x2={n.x}
                y2={n.y}
                style={{ animationDelay: `${n.delay}s` }}
              />
            ))}
            <circle className="au-dl-core" cx={cx} cy={cy} r={46} />
            <text className="au-dl-core-label" x={cx} y={cy - 4} textAnchor="middle">
              KEYOB
            </text>
            <text className="au-dl-core-label" x={cx} y={cy + 12} textAnchor="middle" fontSize={10}>
              Operating Layer
            </text>
            {nodes.map((n, i) => (
              <g key={`dn-${i}`}>
                <rect
                  className="au-dl-node"
                  x={n.x - n.w / 2}
                  y={n.y - 14}
                  width={n.w}
                  height={28}
                  rx={8}
                />
                <text className="au-dl-label" x={n.x} y={n.y + 4} textAnchor="middle">
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
