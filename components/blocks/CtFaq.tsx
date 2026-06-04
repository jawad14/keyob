'use client';

import { useState } from 'react';
import { contactFaq } from '@/config/keyob-contact';

export function CtFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="ct-faq" id="contact-faq">
      <div className="wrap">
        <div className="ct-faq-head">
          <div className="ct-eyebrow">Before you book</div>
          <h2 className="ct-h2">
            What people <em>ask us</em> first.
          </h2>
        </div>
        <div className="ct-faq-wrap">
          {contactFaq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`ct-faq-item${open ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="ct-faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="ct-faq-pm" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="ct-faq-a" style={{ maxHeight: open ? '500px' : '0' }}>
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
