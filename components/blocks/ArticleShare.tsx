'use client';

import { useState } from 'react';

type Props = { url: string; title: string; className?: string };

export function ArticleShare({ url, title, className }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (!navigator.clipboard) return;
    void navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <div className={className}>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47C22.4 7.73 24 10.1 24 14.6V24h-5v-8.3c0-2-.04-4.5-2.75-4.5-2.75 0-3.17 2.14-3.17 4.36V24h-5V8z" />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 1.5h3.7l-8 9.1L24 22.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.5h7.6l5.2 6.9 6.1-6.9zm-1.3 18.8h2L6.5 3.6H4.3l13.3 16.7z" />
        </svg>
      </a>
      <button type="button" onClick={copy} aria-label="Copy link">
        {copied ? '✓' : '↗'}
      </button>
    </div>
  );
}
