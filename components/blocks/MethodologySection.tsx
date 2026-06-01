import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { MethodologyTabs } from './MethodologyTabs';

export function MethodologySection() {
  return (
    <Section spacing="none" as="section" className="deep" id="methodology">
      <div className="wrap">
        <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
          The KEYOB Methodology
        </span>
        <div className="deep-header">
          <H2>
            Our five-phase AI <em>business</em> plan
          </H2>
          <Text as="p" className="sub">
            Not a project plan — a method for understanding the business beneath the business,
            designing what it could become, and building it with you. Click each phase to explore.
          </Text>
        </div>
        <MethodologyTabs />
      </div>
    </Section>
  );
}
