import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';

const methodPhases = [
  {
    n: '01',
    name: 'Discovery',
    desc: 'A full operational audit. We map workflows, systems, data flows and decision points — and find where intelligence belongs.',
  },
  {
    n: '02',
    name: 'Architecture',
    desc: 'Target operating model and blueprint. Workflow design, integration layer, and automation logic — built against outcomes, not technical convenience.',
  },
  {
    n: '03',
    name: 'Build',
    desc: 'Configure, integrate, automate. Phased activation — never big-bang. Each phase activates measurable capacity before the next one begins.',
  },
  {
    n: '04',
    name: 'Calibrate',
    desc: 'Test and refine against real performance data. Ensure adoption, process adherence, and the outcomes the system was built to create.',
  },
  {
    n: '05',
    name: 'Evolve',
    desc: 'Expand automation, integrate new data sources, adapt as you grow. Quarterly reviews keep the system ahead of organizational demand.',
  },
];

export function MethodologySection() {
  return (
    <Section spacing="none" as="section" className="method" id="methodology">
      <div className="wrap">
        <div className="method-head">
          <span className="sec-label">The method</span>
          <H2>
            Five phases. <em>One disciplined path</em> from where you are to intelligent.
          </H2>
        </div>

        <div className="phase-flow" aria-hidden="true">
          <div className="flowline" />
          <div className="flowline-fill" />
          <div className="flow-dots">
            {methodPhases.map((p) => (
              <div key={p.n}>
                <div className="flow-dot">{p.n}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="phases">
          {methodPhases.map((p) => (
            <div key={p.n} className="phase">
              <div className="pn">{p.n}</div>
              <Heading level={4}>{p.name}</Heading>
              <Text as="p">{p.desc}</Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
