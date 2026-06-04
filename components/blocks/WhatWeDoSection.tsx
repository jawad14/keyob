import Image from 'next/image';

import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';

export function WhatWeDoSection() {
  return (
    <Section spacing="none" as="section" className="wkd" id="what-we-do">
      <div className="wrap">
        <div className="wkd-grid">
          <div className="wkd-body">
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
              What we do
            </span>
            <H2>
              We put AI to work <em>in the right places.</em>
            </H2>
            <Text as="p">
              KEYOB doesn&apos;t add AI for the sake of it. We look at how your business actually
              runs — where time is being lost, where costs are creeping up, where your team is
              spending energy on things that could be automated — and we build practical solutions
              that make a real difference.
            </Text>
            <Text as="p" className="secondary">
              Our focus is always on outcomes you can measure: more time back for you and your
              team, lower operating costs, and stronger performance across the business. We start
              with a free assessment so we understand your situation before we recommend anything.
            </Text>
            <div className="wkd-distinction">
              <span className="eyebrow">The KEYOB Approach</span>
              <blockquote>
                &ldquo;Most business owners know AI could help them. What they&apos;re missing is
                someone who can show them exactly where — and then build it properly.&rdquo;
              </blockquote>
            </div>
          </div>
          <Image
            src="/keyob_ai_diagnostic_v3.svg"
            alt="KEYOB AI diagnostic map: business workflow nodes feeding through pain-point diagnostics into an AI intelligence layer, then out to measurable outcomes — time saved, lower cost, and better performance."
            width={680}
            height={560}
            className="wkd-diagram"
            unoptimized
          />
        </div>
      </div>
    </Section>
  );
}
