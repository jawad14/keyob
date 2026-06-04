'use client';

import { useState } from 'react';
import type { StoryFaqItem } from '@/config/keyob-stories';

export function StoryFaq({ items }: { items: StoryFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="story-faq-list">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={`story-faq-item${open ? ' is-open' : ''}`} key={i}>
            <button
              type="button"
              className="story-faq-q"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className="story-faq-pm" aria-hidden="true">+</span>
            </button>
            <div className="story-faq-a" style={{ maxHeight: open ? '500px' : '0' }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
