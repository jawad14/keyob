'use client';

import { useState } from 'react';
import Link from 'next/link';
import { phases, palettes, getMiniBg } from '@/config/keyob-data';
import { Heading, Text } from '@/components/ui/typography';

export function MethodologyTabs() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <>
      <div className="tabs" id="tabs">
        {phases.map((p, i) => (
          <button
            key={p.tag}
            className={`tab${active === i ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {`0${i + 1} · ${p.tag.split(' ')[1] ?? p.tag}`}
          </button>
        ))}
      </div>

      <div className="panel">
        <div className="panel-left">
          <span className="tag-pill">{phase.tag}</span>
          <Heading level={3} dangerouslySetInnerHTML={{ __html: phase.titleHtml }} />
          <Text as="p" className="summary">{phase.summary}</Text>
          <Heading level={5}>What you&apos;ll know</Heading>
          <ul className="caps-list">
            {phase.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
        <div className="panel-right">
          <div className="mini-cases">
            <Heading level={5}>{phase.deliverableLabel}</Heading>
            {phase.deliverables.map((d) => {
              const palette = palettes[d.paletteIndex % palettes.length];
              return (
                <Link key={d.title} href="#" className="mini-case">
                  <div className="mc-thumb" style={{ background: getMiniBg(palette) }} />
                  <div>
                    <Heading level={6}>{d.title}</Heading>
                    <div className="mc-meta">{d.meta}</div>
                  </div>
                  <span className="arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
