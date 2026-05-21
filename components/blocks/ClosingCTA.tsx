import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';

export function ClosingCTA() {
  return (
    <Section spacing="none" as="section" className="wp" id="closing">
      <div className="wrap">
        <div className="card">
          <div>
            <span className="eyebrow">Begin the Conversation</span>
            <H2>
              If the systems beneath your business need a strategic look —{' '}
              <em>we&apos;d be glad to begin.</em>
            </H2>
            <Text as="p">
              We work with leaders ready to do the hard work — to see clearly, decide quickly, and
              move with conviction. The first step is a focused discovery conversation — not a sales
              pitch, not a vendor demo. A structured discussion about where you are, and where you
              want to be.
            </Text>
            <div className="wp-ctas">
              <Link href="#contact" className="btn-primary">
                Request a strategic assessment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="#methodology" className="btn-ghost">
                Understand how we work
              </Link>
            </div>
          </div>
          <div className="pdf-mock">
            <span className="pdf-tag">KEYOB · 2026</span>
            <span className="pdf-title">
              The Business
              <br />
              Visibility Maturity Model.
            </span>
            <div className="pdf-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
