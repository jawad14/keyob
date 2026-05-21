import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';

export function ClosingCTA() {
  return (
    <Section spacing="none" as="section" className="wp" id="closing">
      <div className="wrap">
        <div className="card">
          <div>
            <span className="eyebrow">Free AI Assessment</span>
            <H2>
              Let&apos;s explore where AI could{' '}
              <em>create the next opportunity</em> in your business.
            </H2>
            <Text as="p">
              We&apos;ll help you identify simple, practical ways to save time, reduce costs,
              improve performance, and support growth. No obligation — just a focused conversation
              about where you are and what&apos;s possible.
            </Text>
            <div className="wp-ctas">
              <Link href="#contact" className="btn-primary">
                Book your free AI assessment
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
            <span className="pdf-tag">KEYOB · Free Assessment</span>
            <span className="pdf-title">
              Your AI
              <br />
              Opportunity
              <br />
              Report.
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
