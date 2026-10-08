/* eslint-disable no-restricted-syntax --
 * Part of the bespoke service-page layout: typography is owned by the route's
 * CSS module rather than the shared primitives. */

'use client';

import { useState } from 'react';
import type { ServiceFaqItem } from '@/config/keyob-services';
import styles from '../page.module.css';

/** Accordion for the service-page FAQ, mirroring the reference .fq behaviour:
 *  one panel open at a time, clicking the open one closes it. */
export function ServiceFaq({ items }: { items: ServiceFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div data-reveal className={styles.faq}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={`${styles.fq}${open ? ` ${styles.open}` : ''}`}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.q}
            </button>
            <div className={styles.a} style={{ maxHeight: open ? '32rem' : 0 }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
