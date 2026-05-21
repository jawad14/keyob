import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';

const reasons = [
  'Fragmented workflows consume staff capacity on coordination that should be automated, not managed.',
  "Disconnected systems force manual data transfer between platforms that were never designed to communicate.",
  "Lagging visibility means decisions are made on last week's data, assembled manually by someone who should be doing something else.",
  'Automation in isolation creates efficiency in one area while creating bottlenecks in three others.',
  'Growth without architecture means every new tool adds complexity, not capacity.',
];

export function RealitySection() {
  return (
    <Section spacing="none" as="section" className="why" id="reality">
      <div className="wrap">
        <div className="grid">
          <div>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
              The honest picture
            </span>
            <H2>
              Your tools are not the problem. <em>The architecture is.</em>
            </H2>
            <Text variant="lead" className="!text-[17px] !leading-[1.6] mt-6 max-w-[44ch]">
              Most organizations are not failing because of their people or their strategy. They are
              failing because the systems connecting people to strategy were never designed together.
            </Text>
            <Link href="#methodology" className="cta-mini">
              See how we fix it
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Link>
          </div>
          <div className="reasons">
            {reasons.map((text, i) => (
              <div key={i} className="reason">
                <span className="num" />
                <Heading level={4}>{text}</Heading>
                <span className="plus">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
