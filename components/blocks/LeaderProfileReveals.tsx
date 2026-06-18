'use client';

import { useEffect } from 'react';

// Faithful port of the reveal-on-scroll, journey-line and pathway-dash
// IntersectionObservers from the reference HTML files.
export function LeaderProfileReveals() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll<HTMLElement>('.lp-reveal, .lp-journey, .lp-pathvis')
        .forEach((el) => el.classList.add('in'));
      return;
    }

    const generic = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            generic.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll<HTMLElement>('.lp-reveal:not(.in)')
      .forEach((el) => generic.observe(el));

    const progress = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            progress.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    document
      .querySelectorAll<HTMLElement>('.lp-journey, .lp-pathvis')
      .forEach((el) => progress.observe(el));

    return () => {
      generic.disconnect();
      progress.disconnect();
    };
  }, []);

  return null;
}
