import Link from 'next/link';
import { Heading, Text } from '@/components/ui/typography';

export function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-orbit" aria-hidden="true">
        <svg viewBox="0 0 760 760" xmlns="http://www.w3.org/2000/svg">
          <circle className="ring" cx="380" cy="380" r="340" />
          <circle className="ring ring-2" cx="380" cy="380" r="250" />
          <circle className="ring" cx="380" cy="380" r="160" />
          <g className="spin-a">
            <circle className="orbit-dot" cx="380" cy="40" r="6" />
          </g>
          <g className="spin-b">
            <circle className="orbit-dot" cx="380" cy="130" r="4" opacity="0.7" />
          </g>
          <g className="spin-a">
            <circle className="orbit-dot" cx="720" cy="380" r="3" opacity="0.5" />
          </g>
        </svg>
      </div>
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
              <svg className="row-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              <span><strong>Save time</strong> on manual, repetitive work</span>
            </div>
            <div className="row">
              <svg className="row-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              <span><strong>Reduce costs</strong> through smart automation</span>
            </div>
            <div className="row">
              <svg className="row-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              <span><strong>Grow</strong> with confidence and clarity</span>
            </div>
            <Link href="#contact" className="scroll-cue">
              <span className="dot" />
              Book a free AI assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
