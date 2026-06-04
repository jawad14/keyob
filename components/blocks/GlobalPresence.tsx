'use client';

import { useRef, useState } from 'react';
import { keyobLocations, keyobSpokes, type KeyobLocation } from '@/config/keyob-locations';

const points = ['Local conversations', 'Global delivery capability', 'Long-term client support'];

export function GlobalPresence() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [active, setActive] = useState<KeyobLocation | null>(null);
  const [tipPos, setTipPos] = useState<{ left: number; top: number } | null>(null);

  const showTip = (loc: KeyobLocation) => {
    const svg = svgRef.current;
    const wrap = wrapRef.current;
    if (!svg || !wrap) return;
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    const px = loc.x * (rect.width / vb.width);
    const py = loc.y * (rect.height / vb.height);
    const tipWidth = 248;
    const tipHeight = 130;
    const left = Math.min(Math.max(px + 18, 8), rect.width - tipWidth - 8);
    const top = Math.max(py - tipHeight / 2, 8);
    setActive(loc);
    setTipPos({ left, top });
  };

  const hideTip = () => {
    setActive(null);
    setTipPos(null);
  };

  return (
    <section className="gp-section" aria-labelledby="gp-heading">
      <div className="gp-mesh" aria-hidden="true" />
      <div className="wrap gp-wrap">
        <div className="gp-grid">
          {/* LEFT — copy */}
          <div className="gp-copy">
            <p className="gp-eyebrow">Global Presence</p>
            <h2 id="gp-heading" className="gp-h2">
              Built close to clients. <em>Supported by a global team.</em>
            </h2>
            <p className="gp-body">
              KEYOB works through a connected team model across multiple regions — giving clients
              the confidence of clear communication, practical delivery capacity, and long-term
              support as their business grows.
            </p>
            <p className="gp-body">
              <span className="gp-accent">
                Our clients do not experience disconnected offices. They experience one KEYOB team.
              </span>
            </p>
            <ul className="gp-points">
              {points.map((p) => (
                <li key={p}>
                  <span className="gp-tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="gp-tagline">One KEYOB team · Connected across regions</p>
          </div>

          {/* RIGHT — network map */}
          <div className="gp-mapwrap" ref={wrapRef}>
            <svg
              ref={svgRef}
              className="gp-map"
              viewBox="0 0 1000 520"
              preserveAspectRatio="xMidYMid meet"
              role="group"
              aria-label="KEYOB global network with the Australia head office at the centre, connected to the United States, Sweden, Pakistan, Dubai and Saudi Arabia"
            >
              {/* spokes */}
              <g aria-hidden="true">
                {keyobSpokes.map((s) => (
                  <path key={s.id} id={s.id} className="gp-link" d={s.d} />
                ))}
              </g>

              {/* bidirectional pulses */}
              <g aria-hidden="true">
                {keyobSpokes.map((s) => (
                  <circle key={`out-${s.id}`} className="gp-pulse" r={3.6}>
                    <animateMotion
                      dur={`${s.outDur}s`}
                      begin={`${s.outBegin}s`}
                      repeatCount="indefinite"
                    >
                      <mpath href={`#${s.id}`} />
                    </animateMotion>
                  </circle>
                ))}
                {keyobSpokes.map((s) => (
                  <circle key={`in-${s.id}`} className="gp-pulse gp-pulse--dim" r={3}>
                    <animateMotion
                      dur={`${s.inDur}s`}
                      begin={`${s.inBegin}s`}
                      repeatCount="indefinite"
                      keyPoints="1;0"
                      keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath href={`#${s.id}`} />
                    </animateMotion>
                  </circle>
                ))}
              </g>

              {/* dots */}
              {keyobLocations.map((loc) => {
                const isHq = !!loc.hq;
                return (
                  <g
                    key={loc.key}
                    className={`gp-dot${isHq ? ' gp-dot--hq' : ''}`}
                    tabIndex={0}
                    role="button"
                    aria-label={`${loc.name}. ${loc.role}.`}
                    onMouseEnter={() => showTip(loc)}
                    onMouseLeave={() => {
                      if (active?.key === loc.key) hideTip();
                    }}
                    onFocus={() => showTip(loc)}
                    onBlur={() => {
                      if (active?.key === loc.key) hideTip();
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (active?.key === loc.key) hideTip();
                      else showTip(loc);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (active?.key === loc.key) hideTip();
                        else showTip(loc);
                      }
                      if (e.key === 'Escape') hideTip();
                    }}
                  >
                    {isHq ? (
                      <>
                        <circle className="gp-hqping" cx={loc.x} cy={loc.y} r={11} />
                        <circle
                          className="gp-hqping gp-hqping--delay"
                          cx={loc.x}
                          cy={loc.y}
                          r={11}
                        />
                        <circle className="gp-focusring" cx={loc.x} cy={loc.y} r={22} />
                        <circle className="gp-hqring" cx={loc.x} cy={loc.y} r={17} />
                        <circle className="gp-core" cx={loc.x} cy={loc.y} r={10} />
                      </>
                    ) : (
                      <>
                        <circle className="gp-ping" cx={loc.x} cy={loc.y} r={6} />
                        <circle className="gp-ping gp-ping--delay" cx={loc.x} cy={loc.y} r={6} />
                        <circle className="gp-focusring" cx={loc.x} cy={loc.y} r={13} />
                        <circle className="gp-core" cx={loc.x} cy={loc.y} r={5.5} />
                      </>
                    )}
                  </g>
                );
              })}

              {/* labels */}
              {keyobLocations.map((loc) =>
                loc.hq ? (
                  <g key={`label-${loc.key}`}>
                    <text
                      className="gp-mlabel gp-hqname"
                      x={loc.labelX}
                      y={loc.labelY}
                      textAnchor="middle"
                    >
                      {loc.short}
                    </text>
                    <text
                      className="gp-hqlabel"
                      x={loc.x}
                      y={loc.y + 42}
                      textAnchor="middle"
                    >
                      HEAD OFFICE
                    </text>
                  </g>
                ) : (
                  <text
                    key={`label-${loc.key}`}
                    className="gp-mlabel"
                    x={loc.labelX}
                    y={loc.labelY}
                    textAnchor="middle"
                  >
                    {loc.short}
                  </text>
                ),
              )}
            </svg>

            <div
              className={`gp-tip${active ? ' is-show' : ''}`}
              role="status"
              aria-live="polite"
              style={{
                left: tipPos?.left,
                top: tipPos?.top,
              }}
            >
              {active ? (
                <>
                  <h4>{active.short}</h4>
                  <div className="gp-tip-sub">{active.role}</div>
                  <p className="gp-tip-desc">{active.description}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="gp-strip">
          {keyobLocations.map((loc) => (
            <div key={`card-${loc.key}`} className="gp-card" tabIndex={0}>
              <div className="gp-card-line" />
              <h4>{loc.name}</h4>
              <div className="gp-card-addr">{loc.address}</div>
              <div className="gp-card-role">{loc.role}</div>
              <p className="gp-card-desc">{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
