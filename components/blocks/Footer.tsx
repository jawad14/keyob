import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/typography';
import { siteConfig } from '@/config/site.config';

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Leadership & Team', href: '/leadership-team' },
  { label: 'Contact Us', href: '/contact' },
];

const resources = [
  { label: 'Stories', href: '/stories' },
  { label: 'News & Perspectives', href: '/news' },
];

export function Footer() {
  const primaryPhone = siteConfig.contact.phones[0];
  const phoneHref = `tel:${primaryPhone.replace(/\s+/g, '')}`;

  return (
    <footer className="keyob-footer">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="footer-logo-row">
              <Image
                src="/logo-keyob-white.png"
                alt=""
                width={2114}
                height={570}
                className="footer-logo"
              />
            </div>
            <div className="footer-bigmark">
              <em>the operating layer.</em>
            </div>
            <Text as="p" className="brand-desc">
              The backbone modern businesses run on. We design, integrate, and activate the systems
              that let organizations move with clarity, speed, and conviction.
            </Text>
          </div>

          <div>
            <Heading level={5}>Company</Heading>
            <ul>
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading level={5}>Resources</Heading>
            <ul>
              {resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading level={5}>Get in touch</Heading>
            <ul>
              <li>
                <Link href="/contact#contact">Book a free AI assessment</Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              <li>
                <a href={phoneHref}>{primaryPhone}</a>
              </li>
              <li className="footer-meta">Head office · Springwood, QLD</li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div>© {new Date().getFullYear()} KEYOB. All rights reserved.</div>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            {siteConfig.social.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
