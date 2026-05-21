import Link from 'next/link';
import { Heading, Text } from '@/components/ui/typography';

export function HeroSection() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow-row">
          <span className="pulse" aria-hidden="true" />
          <span className="eyebrow">AI that actually pays off</span>
        </div>

        <Heading level={1} className="display">
          We use AI to help businesses build
          <br />
          <em>smarter, more profitable systems.</em>
        </Heading>

        <div className="hero-foot">
          <Text as="p" className="lede">
            We help business owners create more freedom in their business by using AI in the right
            places — improving profitability, making work easier for your team, and creating better
            collaboration across the business.
          </Text>
          <div className="meta">
            <div className="row">
              <strong>Save time</strong> on manual, repetitive work
            </div>
            <div className="row">
              <strong>Reduce costs</strong> through smart automation
            </div>
            <div className="row">
              <strong>Grow</strong> with confidence and clarity
            </div>
            <Link href="#contact" className="scroll-cue">
              Book a free AI assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
