'use client';

import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { industries } from '@/config/keyob-data';

const industryIcons: Record<string, string> = {
  'Professional Services': '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 4 0v2M12 7v0M16 7V5a2 2 0 0 0-4 0"/>',
  'Healthcare Operations': '<path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z"/><path d="M9 12h6M12 9v6"/>',
  'Financial Services': '<path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>',
  'Logistics & Distribution': '<rect x="1" y="9" width="15" height="11" rx="1"/><path d="M16 12h3l4 5v3h-7"/><circle cx="5.5" cy="20" r="1.5"/><circle cx="18.5" cy="20" r="1.5"/>',
  'Technology Businesses': '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M12 8v8"/>',
  'Education Administration': '<path d="M22 9L12 5 2 9l10 4 10-4Z"/><path d="M6 11v5c0 2 2.7 4 6 4s6-2 6-4v-5"/>',
  'Manufacturing & Operations': '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>',
};

const newsItems = [
  {
    icon: '<path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 8h7M8 12h9M8 16h6"/>',
    title: 'KEYOB recognised in Forbes AI 50',
    meta: '2 days ago · Press release',
  },
  {
    icon: '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z"/>',
    title: 'New Brisbane operations hub opens',
    meta: '1 week ago · Company news',
  },
  {
    icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
    title: 'Speaking at Sydney AI Forum 2026',
    meta: '2 weeks ago · Events',
  },
  {
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    title: 'Q1 Operational Intelligence Briefing',
    meta: '3 weeks ago · Insights',
  },
];

const arrowSvg = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export function Nav() {
  const itemsRef = useRef<NodeListOf<Element> | null>(null);

  const closeAll = useCallback(() => {
    itemsRef.current?.forEach((el) => el.classList.remove('is-open'));
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('nav.top li.has-menu');
    itemsRef.current = items;

    const handleClick = (li: Element) => (e: Event) => {
      const target = e.target as Element;
      if (target.closest('.menu a')) return;
      e.stopPropagation();
      items.forEach((o) => { if (o !== li) o.classList.remove('is-open'); });
      li.classList.toggle('is-open');
    };

    const handlers = Array.from(items).map((li) => {
      const h = handleClick(li);
      li.addEventListener('click', h);
      return { li, h };
    });

    const handleDocClick = () => closeAll();
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };

    document.addEventListener('click', handleDocClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      handlers.forEach(({ li, h }) => li.removeEventListener('click', h));
      document.removeEventListener('click', handleDocClick);
      document.removeEventListener('keydown', handleEscape as EventListener);
    };
  }, [closeAll]);

  return (
    <nav className="top">
      <div className="wrap inner">
        <Link href="/" className="logo" aria-label="KEYOB — home">
          <Image
            src="/logo-blue.png"
            alt=""
            width={672}
            height={186}
            priority
            className="logo-img"
          />
        </Link>

        <ul>
          <li><Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>

          <li>What We Do <span className="caret">▾</span></li>

          <li className="has-menu" data-menu="industries">
            Industries <span className="caret">▾</span>
            <div className="menu" role="menu">
              <span className="mhead">Industries we serve</span>
              {industries.map((industry) => (
                <Link key={industry.title} href="#industries" role="menuitem">
                  <span className="ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: industryIcons[industry.title] ?? '' }} />
                  </span>
                  <span className="col">
                    <strong>{industry.title}</strong>
                    <span>{industry.subtitle}</span>
                  </span>
                  <span className="arr">{arrowSvg}</span>
                </Link>
              ))}
              <div className="sep" />
              <div className="foot">
                <span> </span>
                <Link href="#industries">View all industries →</Link>
              </div>
            </div>
          </li>

          <li className="has-menu" data-menu="news">
            News <span className="caret">▾</span>
            <div className="menu" role="menu">
              <span className="mhead">Latest news</span>
              {newsItems.map((item) => (
                <Link key={item.title} href="#" role="menuitem">
                  <span className="ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  </span>
                  <span className="col">
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </span>
                  <span className="arr">{arrowSvg}</span>
                </Link>
              ))}
              <div className="sep" />
              <div className="foot">
                <span>Updated daily</span>
                <Link href="#">All news &amp; press →</Link>
              </div>
            </div>
          </li>

          {/* <li><Link href="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</Link></li> */}

          <li className="has-menu" data-menu="contact">
            Contact Us <span className="caret">▾</span>
            <div className="menu" role="menu">
              <span className="mhead">Begin a conversation</span>
              <Link href="#contact" role="menuitem">
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 7h18M3 12h12M3 17h18" />
                  </svg>
                </span>
                <span className="col">
                  <strong>Strategic inquiry</strong>
                  <span>Submit a focused brief</span>
                </span>
                <span className="arr">{arrowSvg}</span>
              </Link>
              <Link href="mailto:hello@keyob.com.au" role="menuitem">
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="col">
                  <strong>hello@keyob.com.au</strong>
                  <span>Response within one business day</span>
                </span>
                <span className="arr">{arrowSvg}</span>
              </Link>
              <Link href="tel:+61433278992" role="menuitem">
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                </span>
                <span className="col">
                  <strong>+61 433 278 992</strong>
                  <span>Springwood · Mon–Fri</span>
                </span>
                <span className="arr">{arrowSvg}</span>
              </Link>
              <Link href="tel:+61415373506" role="menuitem">
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                </span>
                <span className="col">
                  <strong>+61 415 373 506</strong>
                  <span>Springwood · Mon–Fri</span>
                </span>
                <span className="arr">{arrowSvg}</span>
              </Link>
              <Link href="#" role="menuitem">
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span className="col">
                  <strong>67 Springwood Road, Springwood</strong>
                  <span>QLD 4127 · By appointment</span>
                </span>
                <span className="arr">{arrowSvg}</span>
              </Link>
              <div className="sep" />
              <div className="foot">
                <span>Within one business day</span>
                <Link href="#contact">Open inquiry form →</Link>
              </div>
            </div>
          </li>
        </ul>

        <Link href="#contact" className="nav-cta">
          <span className="dot" />
          Free AI assessment
        </Link>
      </div>
    </nav>
  );
}
