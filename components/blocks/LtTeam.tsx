import Image from 'next/image';
import { ltTiles } from '@/config/keyob-leadership';

// On-brand placeholder tile SVG — same generator pattern as the source HTML.
function TileSvg({ seed }: { seed: number }) {
  const fills = ['#07101E', '#0A1A30', '#0E223D'];
  const fill = fills[seed % fills.length];
  return (
    <svg viewBox="0 0 300 200" aria-hidden="true">
      <rect width={300} height={200} fill={fill} />
      <g stroke="#19C6E8" strokeOpacity={0.35} strokeWidth={1} fill="none">
        <circle cx={60 + seed * 18} cy={90} r={22} />
        <path d="M40 200 q0-46 70-46 q70 0 70 46" />
      </g>
      <g fill="#19C6E8" opacity={0.5}>
        <circle cx={230} cy={50} r={3} />
        <circle cx={255} cy={80} r={3} />
        <circle cx={210} cy={80} r={3} />
      </g>
    </svg>
  );
}

export function LtTeam() {
  return (
    <section className="lt-team" id="team">
      <div className="wrap">
        <div className="lt-team-grid">
          <div>
            <div className="lt-eyebrow">The team</div>
            <h2 className="lt-h2">
              The team that turns strategy into <em>working systems.</em>
            </h2>
          </div>
          <div className="lt-team-copy">
            <p>
              KEYOB&apos;s delivery team brings together software engineers, UI/UX designers, ERP
              specialists, CRM developers, AI workflow builders, cloud engineers, QA
              professionals, content strategists, and project leads.
            </p>
            <p>
              The team works behind the scenes to turn business conversations into practical
              systems — websites, dashboards, CRMs, ERPs, automations, integrations, and
              AI-enabled workflows that make work easier for clients.
            </p>
          </div>
        </div>

        <div className="lt-collage">
          {ltTiles.map((t, i) => (
            <div
              key={t.caption}
              className={`lt-tile${t.span !== 'none' ? ` lt-tile--${t.span}` : ''}`}
            >
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.caption}
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                />
              ) : (
                <TileSvg seed={i} />
              )}
              <span className="lt-tile-cap">{t.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
