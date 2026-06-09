'use client';

/* Page-wide scroll-reveal observer. Mounted once near the top of a bespoke
 * story page; finds every element matching `[data-reveal]` inside `scopeRef`
 * (or the whole document if no scope is provided) and toggles a `data-in`
 * attribute when the element enters the viewport. CSS handles the fade.
 *
 * Faithful port of the IntersectionObserver pattern used in each story HTML:
 *   document.querySelectorAll('.reveal').forEach(el => io.observe(el));
 *   if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); }
 *
 * Respects `prefers-reduced-motion` by making everything reveal immediately.
 */

import { useEffect } from 'react';

type Props = {
  /** When set, only observe descendants of this selector (default: document). */
  rootSelector?: string;
  /** IntersectionObserver threshold (default: 0.1 to match HTML). */
  threshold?: number;
};

export function RevealOnScroll({ rootSelector, threshold = 0.1 }: Props) {
  useEffect(() => {
    const root: Document | Element = rootSelector
      ? document.querySelector(rootSelector) ?? document
      : document;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (targets.length === 0) return;

    if (reduced) {
      targets.forEach((el) => el.setAttribute('data-in', ''));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-in', '');
            io.unobserve(e.target);
          }
        });
      },
      { threshold },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootSelector, threshold]);

  return null;
}
