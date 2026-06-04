import { aboutTrustSteps } from '@/config/keyob-about';

const cx = 210;
const cy = 210;
const r = 150;

export function AuTrust() {
  const nodes = aboutTrustSteps.map((label, i) => {
    const a = ((-90 + i * (360 / aboutTrustSteps.length)) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const labelOffset = y < cy ? -34 : 46;
    return { label, x, y, num: i + 1, labelOffset };
  });

  return (
    <section className="au-trust">
      <div className="au-trust-mesh" aria-hidden="true" />
      <div className="wrap au-trust-grid">
        <div>
          <div className="au-eyebrow au-eyebrow--cyan">The trust loop</div>
          <h2 className="au-h2 au-h2--on-dark">
            Why clients trust us more <em>after the first engagement.</em>
          </h2>
          <p>
            Trust in technology work is not created by promises. It is created by how a team
            behaves when the work becomes real. KEYOB earns it by asking better questions,
            challenging unclear assumptions, explaining decisions, keeping business outcomes in
            view, communicating clearly — and not disappearing after delivery.
          </p>
          <p>
            The first project may begin with a website, a CRM, an integration, a dashboard, or an
            automation. But once clients experience how we work, the relationship usually becomes
            broader.
          </p>
          <div className="au-trust-key">
            Clients trust us with more because they see we are not only completing a task — we are
            making the business stronger.
          </div>
        </div>

        <div className="au-loop-vis" aria-hidden="true">
          <svg viewBox="0 0 420 420">
            <circle className="au-loop-ring" cx={cx} cy={cy} r={150} />
            <circle className="au-loop-pulse" cx={cx} cy={cy} r={40} />
            <text className="au-loop-center" x={cx} y={cy - 4} textAnchor="middle">
              Trust grows
            </text>
            <text className="au-loop-center" x={cx} y={cy + 12} textAnchor="middle">
              through delivery
            </text>
            {nodes.map((n) => (
              <g key={`loop-${n.num}`}>
                <circle className="au-loop-node" cx={n.x} cy={n.y} r={26} />
                <text className="au-loop-node-num" x={n.x} y={n.y + 4} textAnchor="middle">
                  {n.num}
                </text>
                <text
                  className="au-loop-node-label"
                  x={n.x}
                  y={n.y + n.labelOffset}
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
