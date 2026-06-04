import type { NewsVisual } from '@/config/keyob-news';

export function NewsMotif({ kind, gradientId }: { kind: NewsVisual; gradientId: string }) {
  return (
    <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="340" fill="#07101E" />
      <rect width="600" height="340" fill={`url(#${gradientId})`} />
      <defs>
        <radialGradient id={gradientId} cx="80%" cy="20%" r="90%">
          <stop offset="0%" stopColor="#19C6E8" stopOpacity=".28" />
          <stop offset="100%" stopColor="#07101E" stopOpacity="0" />
        </radialGradient>
      </defs>
      {kind === 'flow' && (
        <>
          <path
            d="M120 240 L120 180 L220 180 L220 130 L320 130 L320 100 L440 100"
            fill="none"
            stroke="#123C8C"
            strokeWidth="1.5"
          />
          <g fill="#19C6E8">
            <circle cx="120" cy="240" r="5" />
            <circle cx="120" cy="180" r="5" />
            <circle cx="220" cy="180" r="5" />
            <circle cx="220" cy="130" r="5" />
            <circle cx="320" cy="130" r="5" />
            <circle cx="320" cy="100" r="5" />
          </g>
        </>
      )}
      {kind === 'grid' && (
        <g>
          {Array.from({ length: 3 }).flatMap((_, a) =>
            Array.from({ length: 3 }).map((__, b) => (
              <rect
                key={`${a}-${b}`}
                x={180 + b * 70}
                y={110 + a * 54}
                width={60}
                height={44}
                rx={3}
                fill={(a + b) % 2 === 0 ? '#123C8C' : 'none'}
                stroke="#2563D9"
                strokeOpacity={0.5}
              />
            )),
          )}
        </g>
      )}
      {kind === 'hub' && (
        <>
          <circle cx="300" cy="170" r="42" fill="#123C8C" />
          <circle cx="300" cy="170" r="56" fill="none" stroke="#2563D9" strokeOpacity={0.55} />
          <g stroke="#19C6E8" strokeWidth="1.5" strokeDasharray="4 5" fill="none">
            <path d="M262 150 L170 105" />
            <path d="M262 190 L170 235" />
            <path d="M338 150 L430 105" />
            <path d="M338 190 L430 235" />
          </g>
          <g fill="#19C6E8">
            <circle cx="170" cy="105" r="6" />
            <circle cx="170" cy="235" r="6" />
            <circle cx="430" cy="105" r="6" />
            <circle cx="430" cy="235" r="6" />
          </g>
        </>
      )}
    </svg>
  );
}
