'use client';

import { useState } from 'react';
import { wwdFaq } from '@/config/keyob-wwd';

export function WwdFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wwd-faq" id="faq">
      <div className="wrap">
        <div className="wwd-faq-head">
          <div className="wwd-eyebrow wwd-eyebrow--center">Common questions</div>
          <h2 className="wwd-h2">
            What businesses <em>ask us first.</em>
          </h2>
        </div>
        <div className="wwd-faq-wrap">
          {wwdFaq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`wwd-faq-item${open ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="wwd-faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="wwd-faq-pm" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="wwd-faq-a" style={{ maxHeight: open ? '500px' : '0' }}>
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
