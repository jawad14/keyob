import { wwdHubNodes } from '@/config/keyob-wwd';

// Hub visual — KEYOB Operating Layer at center with 10 capabilities around it.
const cx = 230;
const cy = 230;
const rFar = 210;
const rNear = 180;
const farLabels = new Set(['Brand', 'Website', 'Cloud', 'CRM', 'ERP', 'AI']);

export function WwdConnected() {
  const uniformW = Math.max(...wwdHubNodes.map((l) => l.length * 7 + 24));
  const nodes = wwdHubNodes.map((label, i) => {
    const a = ((-90 + i * (360 / wwdHubNodes.length)) * Math.PI) / 180;
    const r = farLabels.has(label) ? rFar : rNear;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const lx = cx + 62 * Math.cos(a);
    const ly = cy + 62 * Math.sin(a);
    return { label, x, y, lx, ly, w: uniformW, delay: i * 0.12 };
  });

  return (
    <section className="wwd-connected">
      <div className="wwd-connected-mesh" aria-hidden="true" />
      <div className="wrap wwd-connected-grid">
        <div>
          <div className="wwd-eyebrow wwd-eyebrow--cyan">One connected partner</div>
          <h2 className="wwd-h2 wwd-h2--on-dark">
            Not a vendor list. <em>One connected partner.</em>
          </h2>
          <p>
            Many businesses hire separate vendors for branding, websites, SEO, social media, CRM,
            ERP, dashboards, AI, and integrations. That usually creates fragmented messaging,
            disconnected systems, unclear ownership, and wasted effort.
          </p>
          <p>
            KEYOB&apos;s value is connecting these capabilities into one coherent business journey
            — so the pieces reinforce each other instead of pulling apart.
          </p>
          <div className="wwd-pquote">
            The real value is not in offering many services. The real value is in connecting them
            properly.
          </div>
        </div>

        <div className="wwd-hub-vis" aria-hidden="true">
          <svg viewBox="0 0 460 460">
            {nodes.map((n, i) => (
              <line
                key={`spoke-${i}`}
                className="wwd-hub-spoke wwd-hub-spoke--live"
                x1={n.lx}
                y1={n.ly}
                x2={n.x}
                y2={n.y}
                style={{ animationDelay: `${n.delay}s` }}
              />
            ))}
            <circle className="wwd-hub-core-ring" cx={cx} cy={cy} r={64} />
            <circle className="wwd-hub-core" cx={cx} cy={cy} r={48} />
            <text className="wwd-hub-core-label" x={cx} y={cy - 4} textAnchor="middle">
              KEYOB
            </text>
            <text
              className="wwd-hub-core-label"
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fontSize={10}
            >
              Operating Layer
            </text>
            {nodes.map((n, i) => (
              <g key={`node-${i}`}>
                <rect
                  className="wwd-hub-node"
                  x={n.x - n.w / 2}
                  y={n.y - 15}
                  width={n.w}
                  height={30}
                  rx={8}
                />
                <text className="wwd-hub-label" x={n.x} y={n.y + 4} textAnchor="middle">
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
