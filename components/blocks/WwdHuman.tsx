export function WwdHuman() {
  return (
    <section className="wwd-human">
      <div className="wrap wwd-human-grid">
        <div>
          <div className="wwd-eyebrow">The human side</div>
          <h2 className="wwd-h2">
            Technology should make business feel <em>lighter, not heavier.</em>
          </h2>
          <p>
            Business owners do not need more tools to manage. They need systems that reduce
            pressure, remove repetitive work, make information visible, and help teams move with
            confidence.
          </p>
          <p>
            <strong>KEYOB builds technology around real business life</strong> — not around
            software for the sake of software. The goal is not more software. The goal is a
            business that runs with more clarity, speed, and control.
          </p>
        </div>
        <div className="wwd-human-vis" aria-hidden="true">
          <svg viewBox="0 0 480 360">
            <rect width="480" height="360" fill="#EEF2F7" />
            <rect
              x="60"
              y="50"
              width="360"
              height="220"
              rx="14"
              fill="#FFFFFF"
              stroke="#D8DEE6"
            />
            <rect x="84" y="74" width="120" height="12" rx="6" fill="#07101E" opacity=".85" />
            <rect x="84" y="98" width="80" height="8" rx="4" fill="#4B5563" opacity=".55" />
            <polyline
              points="84,210 130,190 176,196 222,160 268,168 314,120 360,96"
              fill="none"
              stroke="#19C6E8"
              strokeWidth="2.5"
            />
            <g fill="#19C6E8">
              <circle cx="314" cy="120" r="4" />
              <circle cx="360" cy="96" r="4" />
            </g>
            <rect x="84" y="226" width="60" height="20" rx="5" fill="#EEF2F7" />
            <rect x="156" y="226" width="60" height="20" rx="5" fill="#EEF2F7" />
            <rect x="228" y="226" width="60" height="20" rx="5" fill="#EEF2F7" />
            <g fill="#07101E" opacity=".88">
              <circle cx="180" cy="306" r="18" />
              <path d="M150 360 c0-22 14-30 30-30 16 0 30 8 30 30 z" />
              <circle cx="300" cy="306" r="18" />
              <path d="M270 360 c0-22 14-30 30-30 16 0 30 8 30 30 z" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
