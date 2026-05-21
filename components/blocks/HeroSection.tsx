import Link from 'next/link';
import { Heading, Text } from '@/components/ui/typography';
import { heroWords } from '@/config/keyob-data';
import { WordRotator } from './WordRotator';

export function HeroSection() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow-row">
          <span className="pulse" aria-hidden="true" />
          <span className="eyebrow">AI that actually pays off</span>
        </div>

        <Heading level={1} className="display">
          A decade of{' '}
          <WordRotator words={heroWords} />
          <br />
          enterprise AI
          <br />
          solutions.
        </Heading>

        <div className="hero-foot">
          <Text as="p" className="lede">
            KEYOB is Australia&apos;s leading enterprise AI consultancy. We move businesses from AI
            experimentation to scalable execution — through agentic development, legacy
            modernisation, and rigorous AI governance.
          </Text>
          <div className="meta">
            <div className="row">
              <strong>900+</strong> bold tech experts
            </div>
            <div className="row">
              <strong>9</strong> AU/NZ hubs
            </div>
            <div className="row">
              <strong>5×</strong> Great Place to Work®
            </div>
            <Link href="#capabilities" className="scroll-cue">
              Explore our AI services
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
