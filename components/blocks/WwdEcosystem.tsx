import { wwdEcoNodes } from '@/config/keyob-wwd';

const cx = 250;
const cy = 250;
const r = 150;

export function WwdEcosystem() {
  const nodes = wwdEcoNodes.map((label, i) => {
    const a = ((-90 + i * (360 / wwdEcoNodes.length)) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const sx = cx + 52 * Math.cos(a);
    const sy = cy + 52 * Math.sin(a);
    const w = label.length * 5.4 + 20;
    return { label, x, y, sx, sy, w };
  });

  return (
    <section className="wwd-eco">
      <div className="wrap wwd-eco-grid">
        <div>
          <div className="wwd-eyebrow">The service ecosystem</div>
          <h2 className="wwd-h2">
            Everything your business needs to become{' '}
            <em>smarter, clearer, and more connected.</em>
          </h2>
          <p>
            KEYOB can support an individual need — a website, a CRM, an automation. But the
            highest value comes when these layers work together as one system, with a single
            partner accountable for how they connect.
          </p>
          <p>Start with one project. Build toward one connected operating layer.</p>
        </div>
        <div className="wwd-eco-vis" aria-hidden="true">
          <svg viewBox="0 0 500 500">
            <circle className="wwd-eco-ring" cx={cx} cy={cy} r={150} />
            {nodes.map((n, i) => (
              <line
                key={`eco-spoke-${i}`}
                className="wwd-eco-spoke"
                x1={n.sx}
                y1={n.sy}
                x2={n.x}
                y2={n.y}
              />
            ))}
            <circle className="wwd-eco-core" cx={cx} cy={cy} r={52} />
            <text className="wwd-eco-core-label" x={cx} y={cy - 4} textAnchor="middle">
              KEYOB
            </text>
            <text
              className="wwd-eco-core-label"
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fontSize={10}
            >
              Operating Layer
            </text>
            {nodes.map((n, i) => (
              <g key={`eco-node-${i}`}>
                <rect
                  className="wwd-eco-node"
                  x={n.x - n.w / 2}
                  y={n.y - 13}
                  width={n.w}
                  height={26}
                  rx={7}
                />
                <text
                  className="wwd-eco-node-label"
                  x={n.x}
                  y={n.y + 3.5}
                  textAnchor="middle"
                >
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
