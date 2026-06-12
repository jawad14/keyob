'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links: { href: string; label: string }[] = [
  { href: '/about', label: 'About Us' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/leadership-team', label: 'Leadership & Team' },
  { href: '/stories', label: 'Stories' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const contactHref = pathname === '/contact' ? '#contact' : '/contact#contact';

  // Same-URL clicks don't fire `hashchange`, so HashScroll won't run.
  // When already on /contact, scroll explicitly.
  const onContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== '/contact') return;
    const el = document.getElementById('contact');
    if (!el) return;
    e.preventDefault();
    history.replaceState(null, '', '#contact');
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + Escape to close while overlay is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <nav className="top">
        <div className="wrap inner">
          <Link href="/" className="logo" aria-label="KEYOB — home">
            <Image
              src="/logo-keyob.png"
              alt=""
              width={2114}
              height={570}
              priority
              className="logo-img"
            />
          </Link>

          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href === '/contact' ? contactHref : l.href}
                  onClick={l.href === '/contact' ? onContactClick : undefined}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={contactHref} className="nav-cta" onClick={onContactClick}>
            <span className="dot" />
            Free AI assessment
          </Link>

          <button
            type="button"
            className={`nav-burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-overlay"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        id="nav-overlay"
        className={`nav-overlay${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="nav-overlay-mesh" aria-hidden="true" />
        <div className="nav-overlay-grid" aria-hidden="true" />

        <div className="nav-overlay-top wrap">
          <Link
            href="/"
            className="nav-overlay-logo"
            aria-label="KEYOB — home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-keyob-white.png"
              alt=""
              width={2114}
              height={570}
            />
          </Link>
          <button
            type="button"
            className="nav-overlay-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span>Close</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <div className="nav-overlay-body">
          <p className="nav-overlay-eyebrow">Where do you want to go?</p>
          <ul>
            {links.map((l, i) => {
              const active =
                pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href));
              return (
                <li
                  key={l.href}
                  className={active ? 'is-active' : ''}
                  style={{ ['--i' as string]: i }}
                >
                  <Link
                    href={l.href === '/contact' ? contactHref : l.href}
                    onClick={l.href === '/contact' ? onContactClick : () => setOpen(false)}
                  >
                    <span className="nav-overlay-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="nav-overlay-label">{l.label}</span>
                    <span className="nav-overlay-arr" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-overlay-foot wrap">
          <Link
            href={contactHref}
            className="nav-overlay-cta"
            onClick={onContactClick}
          >
            <span className="dot" />
            Free AI assessment
            <span aria-hidden="true">→</span>
          </Link>
          <div className="nav-overlay-meta">
            <a href="mailto:info@keyob.com">info@keyob.com</a>
            <span className="nav-overlay-sep" aria-hidden="true">·</span>
            <span>Within one business day</span>
          </div>
        </div>
      </div>
    </>
  );
}
