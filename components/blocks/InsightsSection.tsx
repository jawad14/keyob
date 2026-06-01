import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';

const insights = [
  {
    kind: 'Framework',
    title: 'The Business Visibility Maturity Model: where does your organization sit?',
    excerpt:
      'Most leaders believe they see what is happening in their business. The evidence often says otherwise. This framework defines five levels of business visibility maturity — and the difference each level makes.',
    readTime: '15 min read',
    href: '/blog/business-visibility-maturity-model',
    featured: true,
    image: '/business_visibility.jpg',
  },
  {
    kind: 'Transformation Perspective',
    title: 'Why most digital transformations fail before they begin.',
    excerpt: 'Technology projects often fail before development starts. The real problem is usually unclear business logic, weak process discovery, poor ownership, and a rush to buy tools before defining how the business should work.',
    readTime: '9 min read',
    href: '/blog/why-digital-transformations-fail',
    featured: false,
    image: '/transformation_perspective.jpg',
  },
  {
    kind: 'Problem Diagnosis',
    title: 'The hidden cost of fragmented systems: a framework for quantification.',
    readTime: '11 min read',
    href: '#',
    featured: false,
    image: '/fragmented_systems.jpg',
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
            <Link key={item.title} href={item.href} className={`insight${item.featured ? ' feat' : ''}`}>
              <div className="ithumb">
                {item.image && (
                  <Image src={item.image} alt="" fill style={{ objectFit: 'cover' }} />
                )}
              </div>
              <div className="ibody">
                <span className="ikind">{item.kind} · {item.readTime}</span>
                <Heading level={4}>{item.title}</Heading>
                {item.excerpt && <Text as="p" className="iexcerpt">{item.excerpt}</Text>}
                <div className="ifoot">
                  <span className="read">View story →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
