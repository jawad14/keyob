import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';

const reasons = [
  {
    headline: "You're spending too much time on tasks that could be automated.",
    body: "Time that should be going toward growing your business.",
  },
  {
    headline: "Your team is bogged down in manual processes.",
    body: "The frustration is starting to affect how people work together.",
  },
  {
    headline: "You've tried a tool or two, but nothing has really stuck.",
    body: "AI without a clear strategy doesn't deliver consistent results.",
  },
  {
    headline: "You're not sure where to invest.",
    body: "The risk of wasting money on the wrong thing is stopping you from moving forward.",
  },
  {
    headline: "Growth feels harder than it should.",
    body: "Your systems weren't built to scale with you.",
  },
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
              You know AI could help. <em>You just need the right approach.</em>
            </H2>
            <Text variant="lead" className="!text-[17px] !leading-[1.6] mt-6 max-w-[44ch]">
              Most business owners are already interested in AI — but between the hype, the cost,
              and the complexity, it&apos;s hard to know where to start. That&apos;s where we come in.
            </Text>
            <Link href="#contact" className="cta-mini">
              Book a free AI assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Link>
          </div>
          <div className="reasons">
            {reasons.map((item, i) => (
              <div key={i} className="reason">
                <span className="num" />
                <div>
                  <Heading level={4}>{item.headline}</Heading>
                  <Text as="p" className="reason-body">{item.body}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
