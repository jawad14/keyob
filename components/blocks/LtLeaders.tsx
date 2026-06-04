import Image from 'next/image';
import { ltLeaders, type LtLeader } from '@/config/keyob-leadership';

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

function Monogram({ leader }: { leader: LtLeader }) {
  const ini = initials(leader.name);
  const gradId = `lt-mono-${ini}`;
  return (
    <svg viewBox="0 0 400 300" aria-label={leader.name}>
      <rect width={400} height={300} fill="#123C8C" />
      <rect width={400} height={300} fill={`url(#${gradId})`} />
      <defs>
        <radialGradient id={gradId} cx="50%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#19C6E8" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#07101E" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={200} cy={120} r={50} fill="rgba(245,248,250,.94)" />
      <path
        d="M120 300 q0-66 80-66 q80 0 80 66 z"
        fill="rgba(245,248,250,.94)"
      />
      <text
        x={200}
        y={135}
        textAnchor="middle"
        fontFamily="var(--keyob-serif), Georgia, serif"
        fontSize={44}
        fontWeight={500}
        fill="#07101E"
      >
        {ini}
      </text>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  );
}

export function LtLeaders() {
  return (
    <section className="lt-leaders" id="leaders">
      <div className="wrap">
        <div className="lt-leaders-head">
          <div className="lt-eyebrow">Leadership across regions</div>
          <h2 className="lt-h2">
            Leadership across regions. <em>One KEYOB standard.</em>
          </h2>
        </div>

        <div className="lt-lgrid">
          {ltLeaders.map((l) => (
            <article key={l.name} className="lt-lcard" tabIndex={0}>
              <div className="lt-lcard-photo">
                <span className="lt-lcard-region">{l.region}</span>
                {l.link ? (
                  <a
                    className="lt-lcard-link"
                    href={l.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.name} profile (opens in a new tab)`}
                  >
                    <LinkIcon />
                  </a>
                ) : null}

                {l.photo ? (
                  <Image
                    src={l.photo}
                    alt={`${l.name}, ${l.role}`}
                    fill
                    sizes="(min-width: 960px) 33vw, (min-width: 600px) 50vw, 100vw"
                    className="lt-lcard-photo-img"
                  />
                ) : (
                  <Monogram leader={l} />
                )}

                <div className="lt-lcard-reveal">
                  <p>&ldquo;{l.quote}&rdquo;</p>
                </div>
              </div>
              <div className="lt-lcard-body">
                <h3>{l.name}</h3>
                <div className="lt-lcard-role">{l.role}</div>
                <p className="lt-lcard-msg">{l.message}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
