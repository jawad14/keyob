import { aboutPhilosophyQuestions } from '@/config/keyob-about';

export function AuPhilosophy() {
  return (
    <section className="au-philo">
      <div className="wrap au-philo-grid">
        <div>
          <div className="au-eyebrow">Philosophy</div>
          <h2 className="au-h2">
            Forward-looking, but grounded in <em>real business life.</em>
          </h2>
          <p>
            We believe businesses should adopt change early, but not blindly. New technology is
            only useful when it fits the business, supports the team, and improves the way work
            gets done. We follow where software, data, automation, and AI are going — but always
            bring the conversation back to practical questions:
          </p>
          <ul className="au-qlist">
            {aboutPhilosophyQuestions.map((q) => (
              <li key={q}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                {q}
              </li>
            ))}
          </ul>
          <div className="au-philo-key">
            If the answer is yes, we build. If the answer is unclear, we investigate first.
          </div>
        </div>

        <div className="au-philo-vis" aria-hidden="true">
          <svg viewBox="0 0 400 500">
            <rect width={400} height={500} fill="#EEF2F7" />
            <rect x={40} y={50} width={320} height={150} rx={14} fill="#FFFFFF" stroke="#D8DEE6" />
            <rect x={62} y={72} width={120} height={12} rx={6} fill="#07101E" opacity={0.85} />
            <polyline
              points="62,160 110,140 158,148 206,112 254,120 302,82 338,70"
              fill="none"
              stroke="#19C6E8"
              strokeWidth={2.5}
            />
            <g fill="#19C6E8">
              <circle cx={302} cy={82} r={4} />
              <circle cx={338} cy={70} r={4} />
            </g>

            <rect x={40} y={220} width={152} height={110} rx={14} fill="#FFFFFF" stroke="#D8DEE6" />
            <rect x={208} y={220} width={152} height={110} rx={14} fill="#07101E" />
            <text
              x={62}
              y={258}
              fontFamily="var(--keyob-serif), Georgia, serif"
              fontSize={22}
              fill="#07101E"
            >
              87%
            </text>
            <rect x={62} y={276} width={80} height={7} rx={3} fill="#4B5563" opacity={0.45} />
            <rect x={62} y={292} width={64} height={7} rx={3} fill="#4B5563" opacity={0.32} />
            <text
              x={230}
              y={258}
              fontFamily="var(--keyob-serif), Georgia, serif"
              fontSize={22}
              fill="#FFFFFF"
            >
              Live
            </text>
            <rect x={230} y={276} width={80} height={7} rx={3} fill="#19C6E8" opacity={0.78} />
            <rect x={230} y={292} width={58} height={7} rx={3} fill="#19C6E8" opacity={0.45} />

            <rect x={40} y={350} width={320} height={110} rx={14} fill="#FFFFFF" stroke="#D8DEE6" />
            <g fill="#EEF2F7">
              <rect x={62} y={372} width={276} height={14} rx={7} />
              <rect x={62} y={396} width={220} height={14} rx={7} />
              <rect x={62} y={420} width={250} height={14} rx={7} />
            </g>
            <rect x={62} y={396} width={120} height={14} rx={7} fill="#19C6E8" opacity={0.55} />
          </svg>
        </div>
      </div>
    </section>
  );
}
