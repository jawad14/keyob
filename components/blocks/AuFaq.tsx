'use client';

import { useState } from 'react';
import { aboutFaq } from '@/config/keyob-about';

export function AuFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="au-faq" id="faq">
      <div className="wrap">
        <div className="au-faq-head">
          <div className="au-eyebrow au-eyebrow--center">Common questions</div>
          <h2 className="au-h2">
            About KEYOB, <em>answered.</em>
          </h2>
        </div>
        <div className="au-faq-wrap">
          {aboutFaq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`au-faq-item${open ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="au-faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="au-faq-pm" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="au-faq-a" style={{ maxHeight: open ? '500px' : '0' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
