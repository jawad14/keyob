import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';

export function WhatWeDoSection() {
  return (
    <Section spacing="none" as="section" className="wkd" id="what-we-do">
      <div className="wrap">
        <div className="wkd-grid">
          <div>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
              What KEYOB Does
            </span>
            <H2>
              We build the <em>backbone</em> that makes growth feel inevitable.
            </H2>
          </div>
          <div className="wkd-body">
            <Text as="p">
              KEYOB does not add more software to your stack. We redesign the architecture that
              determines how your business actually runs — connecting people, data, processes, and
              decisions into a single, coherent operating system.
            </Text>
            <Text as="p" className="secondary">
              We sit at the intersection of strategic consulting and intelligent technology: we think
              in systems, design for outcomes, and build with precision. Every engagement begins with
              understanding how your organization actually operates before we recommend or build
              anything.
            </Text>
            <div className="wkd-distinction">
              <span className="eyebrow">The KEYOB Distinction</span>
              <blockquote>
                &ldquo;Most organizations have the tools they need. What they lack is the
                architecture that connects them. KEYOB builds that architecture.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
