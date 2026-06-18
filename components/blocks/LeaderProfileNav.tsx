'use client';

import { useEffect, useState } from 'react';

type NavItem = { label: string; section: string };

export function LeaderProfileNav({
  name,
  items,
}: {
  name: string;
  items: NavItem[];
}) {
  const [active, setActive] = useState<string>(items[0]?.section ?? '');

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.section))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="lp-pnav">
      <div className="wrap lp-pnav-inner">
        <span className="lp-pn-name">{name}</span>
        {items.map((i) => (
          <a
            key={i.section}
            href={`#${i.section}`}
            data-sec={i.section}
            className={active === i.section ? 'lp-pnav-link active' : 'lp-pnav-link'}
            aria-current={active === i.section ? 'true' : 'false'}
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}
