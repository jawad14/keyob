// components/CategoryVisual.tsx
// On-brand structural SVG used as a fallback/placeholder card visual.
// No robots, brains or stock photos — geometry in the KEYOB palette.
// Swap for a real <Image> (business teams, dashboards, warehouses) at launch.
const motifs: Record<string, JSX.Element> = {
  hub: (
    <>
      <circle cx="300" cy="170" r="46" fill="#1b3a5b" />
      <circle cx="300" cy="170" r="60" fill="none" stroke="#3d6a99" strokeOpacity=".5" />
      {[[160,100],[160,240],[440,100],[440,240]].map(([x,y],i)=>(
        <g key={i}>
          <path d={`M${300+(x>300?40:-40)} ${170+(y>170?20:-20)} L${x} ${y}`} stroke="#1d9bd1" strokeWidth="1.5" strokeDasharray="4 5" fill="none"/>
          <circle cx={x} cy={y} r="6" fill="#4fb6e0"/>
        </g>
      ))}
    </>
  ),
  flow: (
    <>
      <path d="M120 240 L120 180 L220 180 L220 130 L320 130 L320 100 L440 100" fill="none" stroke="#3d6a99" strokeWidth="1.5"/>
      {[[120,240],[120,180],[220,180],[220,130],[320,130],[320,100]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="#1d9bd1"/>
      ))}
    </>
  ),
  grid: (
    <>
      {[0,1,2].map(r=>[0,1,2].map(c=>(
        <rect key={`${r}-${c}`} x={180+c*70} y={110+r*54} width="60" height="44" rx="3"
          fill={(r+c)%2===0?"#1b3a5b":"none"} stroke="#3d6a99" strokeOpacity=".5"/>
      )))}
    </>
  ),
};

export function CategoryVisual({ variant = "hub", className = "" }: { variant?: keyof typeof motifs; className?: string }) {
  return (
    <svg viewBox="0 0 600 340" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="600" height="340" fill="#0d1b2a" />
      <rect width="600" height="340" fill="url(#cv-glow)" />
      <defs>
        <radialGradient id="cv-glow" cx="80%" cy="20%" r="90%">
          <stop offset="0%" stopColor="#1d9bd1" stopOpacity=".30" />
          <stop offset="100%" stopColor="#0d1b2a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {motifs[variant]}
    </svg>
  );
}
