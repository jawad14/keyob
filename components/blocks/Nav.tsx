'use client';

import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { stories, type StoryCategory } from '@/config/keyob-stories';
import { newsArticles } from '@/config/keyob-news';

const storyCategoryIcons: Record<StoryCategory, string> = {
  professional: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 4 0v2M12 7v0M16 7V5a2 2 0 0 0-4 0"/>',
  financial: '<path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>',
  distribution: '<rect x="1" y="9" width="15" height="11" rx="1"/><path d="M16 12h3l4 5v3h-7"/><circle cx="5.5" cy="20" r="1.5"/><circle cx="18.5" cy="20" r="1.5"/>',
  service: '<path d="M3 11a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7h3"/><path d="M3 11v5a2 2 0 0 0 2 2h1v-7H3"/>',
  multi: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  backoffice: '<path d="M3 7h18M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M9 4h6v3H9z"/>',
};

const newsCategoryIcons: Record<string, string> = {
  'AI Operations': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'Workflow Automation': '<path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 8h7M8 12h9M8 16h6"/>',
  'ERP Systems': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  'Business Process Automation': '<path d="M3 12h18M12 3v18" opacity=".4"/><path d="M5 19l5-5 4 4 5-7"/>',
  'Systems Integration': '<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 10.5L15.5 7M8.5 13.5L15.5 17"/>',
  'Operational Intelligence': '<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/>',
  'Industry Notes': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
  'KEYOB Updates': '<path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z"/>',
  'Case Story Notes': '<path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h4"/>',
};
const navNewsItems = newsArticles.slice(0, 4);

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

  const contactHref = '/contact';

  useEffect(() => {
    const items = document.querySelectorAll('nav.top li.has-menu');
    itemsRef.current = items;

    const handleClick = (li: Element) => (e: Event) => {
      const target = e.target as Element;
      if (target.closest('.menu a') || target.closest('.has-menu-link')) return;
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
            src="/logo-final.svg"
            alt=""
            width={672}
            height={186}
            priority
            unoptimized
            className="logo-img"
          />
        </Link>

        <ul>
          <li><Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>

          <li><Link href="/what-we-do" style={{ color: 'inherit', textDecoration: 'none' }}>What We Do</Link></li>

          <li className="has-menu" data-menu="stories">
            <Link href="/stories" className="has-menu-link">
              Stories <span className="caret">▾</span>
            </Link>
            <div className="menu" role="menu">
              <span className="mhead">Client stories</span>
              {stories.map((s) => (
                <Link key={s.slug} href={`/stories/${s.slug}`} role="menuitem">
                  <span className="ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: storyCategoryIcons[s.category] ?? '' }} />
                  </span>
                  <span className="col">
                    <strong>{s.industry}</strong>
                    <span>{s.tag} · {s.stat}</span>
                  </span>
                  <span className="arr">{arrowSvg}</span>
                </Link>
              ))}
              <div className="sep" />
              <div className="foot">
                <span>{stories.length} stories</span>
                <Link href="/stories">View all stories →</Link>
              </div>
            </div>
          </li>

          <li className="has-menu" data-menu="news">
            <Link href="/news" className="has-menu-link">
              News <span className="caret">▾</span>
            </Link>
            <div className="menu" role="menu">
              <span className="mhead">Latest news</span>
              {navNewsItems.map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`} role="menuitem">
                  <span className="ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: newsCategoryIcons[item.category] ?? '' }} />
                  </span>
                  <span className="col">
                    <strong>{item.title}</strong>
                    <span>{item.date} · {item.category}</span>
                  </span>
                  <span className="arr">{arrowSvg}</span>
                </Link>
              ))}
              <div className="sep" />
              <div className="foot">
                <span>Updated weekly</span>
                <Link href="/news">All news &amp; perspectives →</Link>
              </div>
            </div>
          </li>

          {/* <li><Link href="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</Link></li> */}

          <li className="has-menu" data-menu="contact">
            <Link href="/contact" className="has-menu-link">
              Contact Us <span className="caret">▾</span>
            </Link>
            <div className="menu" role="menu">
              <span className="mhead">Begin a conversation</span>
              <Link href={contactHref} role="menuitem">
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
                <Link href={contactHref}>Open inquiry form →</Link>
              </div>
            </div>
          </li>
        </ul>

        <Link href={contactHref} className="nav-cta">
          <span className="dot" />
          Free AI assessment
        </Link>
      </div>
    </nav>
  );
}
