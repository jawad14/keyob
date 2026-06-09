'use client';

/* Faithful React port of the `.aivis2` SVG + JS lead-capture animation
 * from aleesa.html. Inquiries (including a recovered "missed calls" red
 * source) travel into the always-on Aleesa AI agent, then settle into a
 * stack of captured leads on the right. A counter increments. */

import { useEffect, useRef, useState } from 'react';

const NODE = { x: 220, y: 210 };
const SOURCES: { y: number; c: string }[] = [
  { y: 90, c: '#4fc8f8' },
  { y: 150, c: '#4fc8f8' },
  { y: 210, c: '#4fc8f8' },
  { y: 270, c: '#4fc8f8' },
  { y: 330, c: '#e0503c' }, // recovered missed calls
];
const SLOTS = [120, 156, 192, 228, 264, 300];
const MAX_STACK = 6;
const SVG_NS = 'http://www.w3.org/2000/svg';

export function AiCapture() {
  const flowRef = useRef<SVGGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [captured, setCaptured] = useState(0);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setCaptured(14);
      return;
    }

    const flow = flowRef.current;
    const wrap = wrapRef.current;
    if (!flow || !wrap) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const spawn = () => {
      const s = SOURCES[Math.floor(Math.random() * SOURCES.length)];
      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('r', '4.5');
      dot.setAttribute('fill', s.c);
      dot.setAttribute('cx', '16');
      dot.setAttribute('cy', String(s.y));
      flow.appendChild(dot);

      const phase1 = dot.animate(
        [
          { transform: 'translate(0px,0px)' },
          { transform: `translate(${NODE.x - 16}px,${NODE.y - s.y}px)` },
        ],
        { duration: 1000, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' },
      );

      phase1.onfinish = () => {
        dot.setAttribute('fill', '#4fc8f8');
        const targetY = SLOTS[0];
        const phase2 = dot.animate(
          [
            { transform: `translate(${NODE.x - 16}px,${NODE.y - s.y}px)`, opacity: 1, offset: 0 },
            { transform: `translate(${NODE.x - 16}px,${NODE.y - s.y}px)`, opacity: 1, offset: 0.18 },
            { transform: `translate(${348 - 16}px,${targetY - s.y}px)`, opacity: 1, offset: 0.92 },
            { transform: `translate(${348 - 16}px,${targetY - s.y}px)`, opacity: 0, offset: 1 },
          ],
          { duration: 1100, easing: 'cubic-bezier(.3,0,.4,1)', fill: 'forwards' },
        );
        phase2.onfinish = () => {
          dot.remove();
          setCaptured((c) => c + 1);
        };
      };
    };

    const start = () => {
      if (interval) return;
      interval = setInterval(spawn, 900);
      spawn();
      setTimeout(spawn, 400);
    };
    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    start();

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  const stackCount = Math.min(captured, MAX_STACK);
  const displayedCount = captured > 99 ? '99+' : String(captured);

  return (
    <div ref={wrapRef} className="aivis2" aria-hidden="true">
      <svg
        viewBox="0 0 440 420"
        role="img"
        aria-label="Incoming inquiries, including missed calls, routed into the Aleesa AI agent and converted into captured leads"
      >
        {/* incoming inquiry tracks (left) feeding the AI agent */}
        <g fill="none" strokeWidth="1.6" strokeLinecap="round">
          {SOURCES.map((s) => (
            <path
              key={`track-${s.y}`}
              d={`M16 ${s.y} C 90 ${s.y} 110 ${NODE.y} 168 ${NODE.y}`}
              stroke="rgba(1,176,244,.16)"
              strokeDasharray="4 5"
            />
          ))}
          <text
            x="18"
            y="346"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="8"
            fill="#e0503c"
          >
            missed calls
          </text>
        </g>

        {/* the AI agent node (calm, always-on) */}
        <g>
          <circle
            className="ai-ring"
            cx="220"
            cy="210"
            r="50"
            fill="none"
            stroke="rgba(1,176,244,.35)"
            strokeWidth="1.5"
          />
          <circle
            cx="220"
            cy="210"
            r="40"
            fill="#11263b"
            stroke="rgba(1,176,244,.6)"
            strokeWidth="1.5"
          />
          {/* soundwave / listening glyph */}
          <g className="ai-wave" stroke="#4fc8f8" strokeWidth="2.4" strokeLinecap="round">
            <line x1="206" y1="204" x2="206" y2="216" />
            <line x1="213" y1="198" x2="213" y2="222" />
            <line x1="220" y1="193" x2="220" y2="227" />
            <line x1="227" y1="198" x2="227" y2="222" />
            <line x1="234" y1="204" x2="234" y2="216" />
          </g>
          <text
            x="220"
            y="278"
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="9.5"
            fill="#5EE0FF"
            letterSpacing="1"
          >
            ALEESA AI
          </text>
          <text
            x="220"
            y="293"
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="8"
            fill="#34d399"
          >
            ● answering 24/7
          </text>
        </g>

        {/* captured lead cards stacking on the right */}
        <g>
          {Array.from({ length: stackCount }).map((_, i) => {
            const y = SLOTS[i];
            const opacity = i === 0 ? 1 : 0.55 + (stackCount - i) * 0.07;
            return (
              <g key={`lead-${i}`} opacity={opacity}>
                <rect
                  x="300"
                  y={y - 13}
                  width="118"
                  height="26"
                  rx="7"
                  fill="rgba(1,176,244,.08)"
                  stroke="rgba(1,176,244,.4)"
                />
                <circle cx="313" cy={y} r="3.5" fill="#34d399" />
                <rect x="324" y={y - 4} width="50" height="4.5" rx="2.25" fill="rgba(255,255,255,.45)" />
                <path d={`M404 ${y - 2} l3 3 5-5`} fill="none" stroke="#34d399" strokeWidth="1.6" />
              </g>
            );
          })}
        </g>

        {/* moving inquiries (added by useEffect) */}
        <g ref={flowRef} />

        {/* captured counter */}
        <g>
          <text
            x="356"
            y="356"
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="11"
            fill="#5f6b7a"
          >
            Leads captured
          </text>
          <text
            x="356"
            y="388"
            textAnchor="middle"
            fontFamily="Fraunces, var(--keyob-serif), serif"
            fontSize="34"
            fill="#19C6E8"
          >
            {displayedCount}
          </text>
        </g>
      </svg>
    </div>
  );
}
