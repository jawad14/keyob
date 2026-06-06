'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Next.js App Router doesn't always honor `#hash` on initial load — the element
// can mount after the browser's fragment-scroll has already fired. This effect
// re-runs the scroll after the page has hydrated.
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Initial mount / route change — wait a frame so any conditional content
    // (forms, hydrated client components) has rendered.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHash);
    });

    window.addEventListener('hashchange', scrollToHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [pathname]);

  return null;
}
