'use client';

import { useState } from 'react';

const leaders = [
  {
    initials: 'JS',
    name: 'Jawad Siddique',
    title: 'Founder & CEO',
    quote:
      'Most business owners have more on their plate than they should. The businesses that get ahead are the ones that stop doing manually what a well-designed system could do automatically. AI is not a novelty — it is a genuine way to give you and your team more time, more clarity, and more room to grow.',
    accent: 'var(--keyob-blue)',
  },
  {
    initials: 'AK',
    name: 'Aisha Khan',
    title: 'Head of AI Strategy',
    quote:
      'The businesses we work with do not just want AI — they want outcomes. More time. Less waste. Clearer decisions. Our job is to find exactly where in the business AI creates that, and build it properly. Not impressive demos. Operational results.',
    accent: 'var(--keyob-cyan)',
  },
  {
    initials: 'ML',
    name: 'Marcus Lee',
    title: 'Head of Delivery',
    quote:
      'A system going live is not success. Success is six months later when the business is running faster, the team is less stressed, and the owner has visibility they never had before. That is what we build toward from day one.',
    accent: 'var(--keyob-blue)',
  },
];

export function LeadersSlider() {
  const [active, setActive] = useState(0);
  const total = leaders.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  return (
    <section className="leaders">
      <div className="wrap">
        <div className="leaders-head">
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 8 }}>
            Our team
          </span>
          <h2 className="leaders-h2">
            Our leaders&apos; <em>vision.</em>
          </h2>
        </div>

        <div className="leaders-stage">
          {/* Prev ghost */}
          <button
            className="leaders-ghost leaders-ghost--prev"
            onClick={prev}
            aria-label="Previous leader"
          >
            <div className="leader-avatar" style={{ '--accent': leaders[prevIdx].accent } as React.CSSProperties}>
              {leaders[prevIdx].initials}
            </div>
            <span className="leader-ghost-name">{leaders[prevIdx].name}</span>
          </button>

          {/* Active card */}
          <div className="leaders-card" key={active}>
            <div className="leaders-card-avatar-wrap">
              <div
                className="leader-avatar leader-avatar--lg"
                style={{ '--accent': leaders[active].accent } as React.CSSProperties}
              >
                {leaders[active].initials}
              </div>
            </div>

            <div className="leaders-card-content">
              <span className="leaders-quote-mark">&ldquo;</span>
              <blockquote className="leaders-quote">
                {leaders[active].quote}
              </blockquote>
              <div className="leaders-who">
                <strong>{leaders[active].name}</strong>
                <span>{leaders[active].title}</span>
              </div>
              <div className="leaders-nav">
                <button onClick={prev} aria-label="Previous" className="leaders-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </button>
                <div className="leaders-dots">
                  {leaders.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to leader ${i + 1}`}
                      className={`leaders-dot${i === active ? ' is-active' : ''}`}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" className="leaders-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Next ghost */}
          <button
            className="leaders-ghost leaders-ghost--next"
            onClick={next}
            aria-label="Next leader"
          >
            <div className="leader-avatar" style={{ '--accent': leaders[nextIdx].accent } as React.CSSProperties}>
              {leaders[nextIdx].initials}
            </div>
            <span className="leader-ghost-name">{leaders[nextIdx].name}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
