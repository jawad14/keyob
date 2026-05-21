import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';

const insights = [
  {
    kind: 'Framework',
    title: 'The Business Visibility Maturity Model: where does your organization sit?',
    excerpt:
      "Most leaders believe they see what's happening in their business. The evidence says otherwise. A framework defining five levels of business visibility maturity — and the difference each level makes.",
    readTime: '15 min read',
    featured: true,
  },
  {
    kind: 'Transformation Perspective',
    title: 'Why most digital transformations fail before they begin.',
    readTime: '9 min read',
    featured: false,
  },
  {
    kind: 'Problem Diagnosis',
    title: 'The hidden cost of fragmented systems: a framework for quantification.',
    readTime: '11 min read',
    featured: false,
  },
];

export function InsightsSection() {
  return (
    <Section spacing="none" as="section" className="insights" id="insights">
      <div className="wrap">
        <div className="head">
          <H2>
            Perspectives worth <em>your time.</em>
          </H2>
          <Link href="#" className="btn-ghost">
            All perspectives
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </Link>
        </div>
        <div className="insights-grid">
          {insights.map((item) => (
            <article key={item.title} className={`insight${item.featured ? ' feat' : ''}`}>
              <div className="ithumb" />
              <div className="ibody">
                <span className="ikind">{item.kind}</span>
                <Heading level={4}>{item.title}</Heading>
                {item.excerpt && <Text as="p" className="iexcerpt">{item.excerpt}</Text>}
                <div className="ifoot">
                  <span>{item.readTime}</span>
                  <span className="read">{item.featured ? 'Read the framework →' : 'Read →'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
