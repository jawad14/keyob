'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef<number>(0);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);

  useEffect(() => {
    const cancelRaf = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const tick = (now: number) => {
      const elapsed = now - startedAtRef.current;
      const t = Math.min(elapsed / 6000, 1);
      const eased = 1 - Math.pow(1 - t, 2.5);
      setProgress(eased * 90);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (activeRef.current) return;
      activeRef.current = true;
      if (finishTimerRef.current) {
        clearTimeout(finishTimerRef.current);
        finishTimerRef.current = null;
      }
      setVisible(true);
      setProgress(0);
      startedAtRef.current = performance.now();
      cancelRaf();
      rafRef.current = requestAnimationFrame(tick);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
      try {
        const url = new URL(anchor.href);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }
      } catch {
        return;
      }
      start();
    };

    const onPop = () => start();

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPop);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPop);
      cancelRaf();
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeRef.current) return;
    activeRef.current = false;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setProgress(100);
    finishTimerRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);
  }, [pathname]);

  return (
    <div className={`toploader${visible ? ' is-visible' : ''}`} aria-hidden="true">
      <div
        className="toploader-bar"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
}
