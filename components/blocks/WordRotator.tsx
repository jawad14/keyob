'use client';

import { useEffect, useRef } from 'react';

type Props = { words: string[] };

export function WordRotator({ words }: Props) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || words.length < 2) return;

    const interval = setInterval(() => {
      const current = el.querySelector('.word.is-current') as HTMLElement | null;
      if (!current) return;

      const next = document.createElement('span');
      next.className = 'word';
      next.textContent = words[(indexRef.current + 1) % words.length];
      indexRef.current = (indexRef.current + 1) % words.length;
      el.appendChild(next);

      void next.offsetWidth;
      current.classList.remove('is-current');
      current.classList.add('is-out');
      next.classList.add('is-current');

      setTimeout(() => current.remove(), 700);
    }, 2200);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="swap" ref={containerRef} aria-live="polite">
      <span className="word is-current">{words[0]}</span>
    </span>
  );
}
