export function LtCulture() {
  return (
    <section className="lt-culture">
      <div className="wrap lt-culture-grid">
        <div>
          <div className="lt-eyebrow">Culture</div>
          <h2 className="lt-h2">
            Professional by standard. <em>Human by nature.</em>
          </h2>
          <p>
            KEYOB&apos;s culture is shaped by responsibility, communication, and ownership. We
            work with clients who trust us with important business systems, so professionalism is
            not optional. It is part of how we operate.
          </p>
          <p>
            But we also believe technology work should feel human.{' '}
            <strong>Clients should feel heard. Teams should feel supported.</strong> And every
            system we build should reduce pressure, not add complexity.
          </p>
        </div>
        <div className="lt-culture-vis" aria-hidden="true">
          <svg viewBox="0 0 480 360">
            <rect width={480} height={360} fill="#EEF2F7" />
            <g stroke="#19C6E8" strokeWidth={1.2} strokeDasharray="4 5" opacity={0.5}>
              <line x1={140} y1={130} x2={240} y2={180} />
              <line x1={340} y1={120} x2={240} y2={180} />
              <line x1={240} y1={180} x2={180} y2={270} />
              <line x1={240} y1={180} x2={320} y2={262} />
            </g>
            <g fill="#07101E">
              <circle cx={140} cy={118} r={16} />
              <path d="M116 156 q0-20 24-20 q24 0 24 20 z" />
              <circle cx={340} cy={108} r={16} />
              <path d="M316 146 q0-20 24-20 q24 0 24 20 z" />
              <circle cx={180} cy={258} r={16} />
              <path d="M156 296 q0-20 24-20 q24 0 24 20 z" />
              <circle cx={320} cy={250} r={16} />
              <path d="M296 288 q0-20 24-20 q24 0 24 20 z" />
            </g>
            <circle cx={240} cy={180} r={22} fill="#19C6E8" />
            <circle
              cx={240}
              cy={180}
              r={32}
              fill="none"
              stroke="#19C6E8"
              strokeOpacity={0.4}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
