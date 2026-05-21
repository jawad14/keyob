import Link from 'next/link';
import { Section } from '@/components/ui/layout';

const REPEAT = 12;

export function MarqueeBand() {
  const items = Array.from({ length: REPEAT }, (_, i) => i);
  return (
    <Section spacing="none" as="section" className="marquee" id="contact-prompt">
      <div className="marquee-track" aria-hidden="true">
        {items.map((i) => (
          <Link key={i} href="#contact">
            <span>Begin a conversation</span>
            <span className="dot" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
