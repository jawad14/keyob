/* eslint-disable no-restricted-syntax --
 * Matches the erp-* typographic scale used across the ERP pages. */
'use client';

import { useState } from 'react';
import type { ErpFaqItem, ErpSectionHead } from '@/config/keyob-erp';
import { ErpSecHead } from './ErpSections';

export function ErpFaq({ head, items }: { head: ErpSectionHead; items: ErpFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="erp-sct erp-sct--ice" id="faq">
      <div className="wrap">
        <ErpSecHead head={head} centered />
        <div className="erp-faq" data-reveal>
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`erp-fq${open ? ' is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="erp-fq-pm" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="erp-fq-a" style={{ maxHeight: open ? '520px' : '0' }}>
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
