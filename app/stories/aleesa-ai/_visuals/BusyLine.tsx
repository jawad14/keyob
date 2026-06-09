'use client';

/* Faithful React port of the `.busyvis` SVG + JS spawning-dot animation
 * from aleesa.html. Inquiries travel into the "LINE BUSY" node, stall,
 * turn red, drop away. A "Missed today" counter increments. */

import { useEffect, useRef, useState } from 'react';

const NODE = { x: 300, y: 210 };
const SOURCES = [{ y: 90 }, { y: 150 }, { y: 210 }, { y: 270 }, { y: 330 }];
const SVG_NS = 'http://www.w3.org/2000/svg';

export function BusyLine() {
  const dropsRef = useRef<SVGGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [missed, setMissed] = useState(0);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setMissed(12);
      return;
    }

    const drops = dropsRef.current;
    const wrap = wrapRef.current;
    if (!drops || !wrap) return;

    let interval: ReturnType<typeof setInterval> | null = null;

    const spawn = () => {
      const s = SOURCES[Math.floor(Math.random() * SOURCES.length)];
      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('r', '4.5');
      dot.setAttribute('fill', '#4fc8f8');
      dot.setAttribute('cx', '20');
      dot.setAttribute('cy', String(s.y));
      drops.appendChild(dot);

      const phase1 = dot.animate(
        [
          { transform: 'translate(0px,0px)' },
          { transform: `translate(212px,${NODE.y - s.y}px)` },
        ],
        { duration: 1100, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' },
      );

      phase1.onfinish = () => {
        dot.setAttribute('fill', '#e0503c');
        const fall = 120 + Math.random() * 70;
        const drift = Math.random() * 60 - 30;
        const phase2 = dot.animate(
          [
            { transform: `translate(212px,${NODE.y - s.y}px)`, opacity: 1, offset: 0 },
            { transform: `translate(212px,${NODE.y - s.y}px)`, opacity: 1, offset: 0.25 },
            { transform: `translate(${212 + drift}px,${NODE.y - s.y + fall}px)`, opacity: 0, offset: 1 },
          ],
          { duration: 1300, easing: 'cubic-bezier(.5,0,.7,1)', fill: 'forwards' },
        );
        phase2.onfinish = () => {
          dot.remove();
          setMissed((m) => m + 1);
        };
      };
    };

    const start = () => {
      if (interval) return;
      interval = setInterval(spawn, 850);
      spawn();
      const t = setTimeout(spawn, 300);
      return () => clearTimeout(t);
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

  const displayed = missed > 99 ? '99+' : String(missed);

  return (
    <div ref={wrapRef} className="busyvis" aria-hidden="true">
      <svg
        viewBox="0 0 440 420"
        role="img"
        aria-label="A single busy phone line where incoming inquiries queue up, stall and drop as missed because the team cannot keep up"
      >
        {/* incoming inquiry tracks (left) feeding the busy node */}
        <g fill="none" strokeWidth="1.6" strokeLinecap="round">
          {SOURCES.map((s) => (
            <path
              key={`track-${s.y}`}
              d={`M20 ${s.y} C 120 ${s.y} 150 ${NODE.y} 232 ${NODE.y}`}
              stroke="rgba(1,176,244,0.16)"
              strokeDasharray="4 5"
            />
          ))}
        </g>

        {/* the overwhelmed reception / phone node */}
        <g>
          <circle
            className="bz-ring"
            cx="300"
            cy="210"
            r="60"
            fill="none"
            stroke="rgba(224,80,60,.35)"
            strokeWidth="1.5"
          />
          <circle
            cx="300"
            cy="210"
            r="46"
            fill="#11263b"
            stroke="rgba(224,80,60,.6)"
            strokeWidth="1.5"
          />
          {/* phone glyph */}
          <path
            d="M286 196a2.5 2.5 0 0 1 2.5-2.5h3l2.4 6-2.4 1.2a13 13 0 0 0 6 6l1.2-2.4 6 2.4v3a2.5 2.5 0 0 1-2.5 2.5A19 19 0 0 1 286 196z"
            fill="none"
            stroke="#ff8a7a"
            strokeWidth="1.8"
          />
          {/* busy bars over the phone */}
          <g className="bz-busy">
            <rect x="293" y="226" width="4" height="9" rx="2" fill="#ff8a7a" />
            <rect x="300" y="222" width="4" height="13" rx="2" fill="#ff8a7a" />
            <rect x="307" y="228" width="4" height="7" rx="2" fill="#ff8a7a" />
          </g>
          <text
            x="300"
            y="288"
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="10"
            fill="#ff8a7a"
            letterSpacing="1"
          >
            LINE BUSY
          </text>
        </g>

        {/* queued inquiry dots waiting (stacked before the node) */}
        <g>
          {[0, 1, 2, 3].map((q) => (
            <circle
              key={`q-${q}`}
              cx={238 - q * 15}
              cy={NODE.y}
              r="4"
              fill="#ff8a7a"
              opacity={0.85 - q * 0.15}
            />
          ))}
        </g>

        {/* dropped / missed inquiries falling away */}
        <g ref={dropsRef} />

        {/* missed counter */}
        <g>
          <text
            x="300"
            y="356"
            textAnchor="middle"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            fontSize="11"
            fill="#5f6b7a"
          >
            Missed today
          </text>
          <text
            x="300"
            y="388"
            textAnchor="middle"
            fontFamily="Fraunces, var(--keyob-serif), serif"
            fontSize="34"
            fill="#e0503c"
          >
            {displayed}
          </text>
        </g>
      </svg>
    </div>
  );
}
