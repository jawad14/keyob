import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/typography';

const whatWeDo = [
  { label: 'Workflow Automation', href: '#capabilities' },
  { label: 'CRM & Data Integration', href: '#capabilities' },
  { label: 'Operational Visibility', href: '#capabilities' },
  { label: 'Process Automation', href: '#capabilities' },
  { label: 'AI Intelligence', href: '#capabilities' },
  { label: 'Systems Integration', href: '#capabilities' },
];

const company = [
  { label: 'About KEYOB', href: '#what-we-do' },
  { label: 'How We Work', href: '#methodology' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Strategic Inquiry', href: '#contact' },
];

const perspectives = [
  { label: 'Operational Frameworks', href: '#insights' },
  { label: 'Transformation Perspective', href: '#insights' },
  { label: 'Industry Intelligence', href: '#insights' },
  { label: 'Problem Diagnosis', href: '#insights' },
  { label: 'Technology Context', href: '#insights' },
];

export function Footer() {
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
            <Heading level={5}>What We Do</Heading>
            <ul>
              {whatWeDo.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
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
            <Heading level={5}>Perspectives</Heading>
            <ul>
              {perspectives.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div>© 2026 KEYOB. All rights reserved. Evolve your business.</div>
          <div className="bottom-links">
            <Link href="https://linkedin.com/company/keyob">LinkedIn</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
