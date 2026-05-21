'use client';

import { useCallback, useEffect, useRef } from 'react';
import { capabilities, capabilityGridSpans } from '@/config/keyob-data';
import { H2, Heading, Text } from '@/components/ui/typography';

export function CapabilitiesGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const setMaxHeight = useCallback(() => {
    const body = bodyRef.current;
    const section = sectionRef.current;
    if (!body || !section?.classList.contains('is-collapsed')) {
      if (body) body.style.maxHeight = `${body.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    sectionRef.current = document.getElementById('capabilities') as HTMLElement;
    bodyRef.current = document.getElementById('caps-body') as HTMLDivElement;
    btnRef.current = document.getElementById('caps-toggle') as HTMLButtonElement;

    setMaxHeight();
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, [setMaxHeight]);

  const handleToggle = useCallback(() => {
    const section = sectionRef.current;
    const body = bodyRef.current;
    const btn = btnRef.current;
    if (!section || !body || !btn) return;

    const isOpen = !section.classList.contains('is-collapsed');
    if (isOpen) {
      body.style.maxHeight = `${body.scrollHeight}px`;
      requestAnimationFrame(() => {
        section.classList.add('is-collapsed');
        body.style.maxHeight = '0px';
      });
      btn.setAttribute('aria-expanded', 'false');
    } else {
      section.classList.remove('is-collapsed');
      body.style.maxHeight = `${body.scrollHeight}px`;
      body.addEventListener('transitionend', function clean() {
        body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', clean);
      });
      btn.setAttribute('aria-expanded', 'true');
    }
  }, []);

  return (
    <section className="caps" id="capabilities">
      <div className="wrap">
        <div className="header">
          <H2>
            Seven places we <em>move the needle.</em>
          </H2>
          <div>
            <Text variant="body" className="!text-[17px] !leading-[1.6] max-w-[56ch]">
              Across workflow, data, visibility, automation, intelligence, integration, and
              end-to-end digital transformation — we design the system, then build it.
            </Text>
            <button
              className="section-toggle"
              id="caps-toggle"
              type="button"
              aria-expanded="true"
              aria-controls="caps-body"
              onClick={handleToggle}
            >
              <span className="label-open">Collapse section</span>
              <span className="label-closed">Show the seven domains</span>
              <span className="sign">+</span>
            </button>
          </div>
        </div>

        <div className="section-body" id="caps-body">
          <div className="cap-grid">
            {capabilities.map((d, i) => (
              <article
                key={d.n}
                className={`cap${i === 4 ? ' cap--dark' : ''}`}
                style={{ gridColumn: `span ${capabilityGridSpans[i]}` }}
              >
                <span className="glyph">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: d.iconPath }} />
                </span>
                <span className="tag cap-num">{d.n}</span>
                <Heading level={3} dangerouslySetInnerHTML={{ __html: d.titleHtml }} />
                <Text as="p">{d.problem}</Text>
                <div className="cap-outcome">
                  <span className="eyebrow cap-outcome-label">Outcome</span>
                  <span className="cap-outcome-text">{d.outcome}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
