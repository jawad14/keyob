import Link from 'next/link';
import { contactQuickInfo } from '@/config/keyob-contact';

// Animated background grid + accent nodes — deterministic precomputed points.
const gridXs = Array.from({ length: 19 }, (_, i) => i * 80);
const gridYs = Array.from({ length: 11 }, (_, i) => i * 80);
const accentPts: Array<[number, number]> = [
  [220, 180],
  [540, 130],
  [820, 220],
  [1140, 160],
  [1280, 320],
  [660, 380],
  [320, 440],
  [1020, 420],
];

export function CtHero() {
  return (
    <header className="ct-hero">
      <div className="ct-hero-mesh" aria-hidden="true" />
      <svg
        className="ct-hero-grid"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {gridXs.map((x) => (
          <line key={`gx-${x}`} x1={x} y1={0} x2={x} y2={700} stroke="rgba(245,248,250,.04)" />
        ))}
        {gridYs.map((y) => (
          <line key={`gy-${y}`} x1={0} y1={y} x2={1440} y2={y} stroke="rgba(245,248,250,.04)" />
        ))}
        {accentPts.map((p, i) => {
          const n = accentPts[(i + 1) % accentPts.length];
          return (
            <line
              key={`ln-${i}`}
              x1={p[0]}
              y1={p[1]}
              x2={n[0]}
              y2={n[1]}
              stroke="rgba(25,198,232,.16)"
            />
          );
        })}
        {accentPts.map((p, i) => (
          <circle key={`cp-${i}`} cx={p[0]} cy={p[1]} r={4} fill="#19C6E8" opacity={0.7}>
            <animate
              attributeName="opacity"
              values="0.25;0.9;0.25"
              dur={`${3 + i * 0.35}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className="wrap ct-hero-in">
        <div className="ct-eyebrow ct-eyebrow--cyan">Begin a conversation</div>
        <h1>
          Tell us where you are. <em>We&apos;ll help you see what&apos;s possible.</em>
        </h1>
        <p className="ct-hero-sub">
          Whether you&apos;re weighing up an AI assessment, looking to connect the tools you already
          run, or starting from scratch — KEYOB meets you where you are and helps you take the
          right next step. No obligation, just a real conversation.
        </p>
        <div className="ct-hero-ctas">
          <Link href="#contact" className="ct-btn">
            Book a free AI assessment <span aria-hidden="true">→</span>
          </Link>
          <a href={`mailto:${contactQuickInfo.email}`} className="ct-btn ct-btn--ghost">
            {contactQuickInfo.email}
          </a>
        </div>
        <div className="ct-hero-pills">
          <span>Within one business day</span>
          <span>No obligation</span>
          <span>Australia · US · Sweden · Pakistan · KSA · UAE</span>
        </div>
      </div>
    </header>
  );
}
