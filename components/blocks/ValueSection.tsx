import Link from 'next/link';
import { Section } from '@/components/ui/layout';
import { H2, Heading, Text } from '@/components/ui/typography';
import { valueCards } from '@/config/keyob-data';

export function ValueSection() {
  return (
    <Section spacing="none" as="section" className="value" id="value">
      <div className="wrap">
        <div className="value-head">
          <div>
            <span className="eyebrow">Where AI Creates Value</span>
            <H2>
              Five places AI <em>changes the business.</em>
            </H2>
          </div>
          <Text variant="lead">
            AI value isn&apos;t theoretical. It shows up in five places — how customers find you,
            how value is captured, how teams work, and how risk is held.
          </Text>
        </div>

        <div className="value-grid">
          {valueCards.map((card) => (
            <article
              key={card.tag}
              className={`vcard ${card.variant}${card.wide ? ' vcard--wide' : ''}`}
            >
              <div className="vbody">
                <span className="vtag">{card.tag}</span>
                <Heading level={3}>{card.heading}</Heading>
                <Text as="p">{card.body}</Text>
                <Link href={card.href} className="vmore">
                  Read more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </Link>
              </div>
              <div className="vart" aria-hidden="true">
                <svg
                  viewBox="0 0 140 140"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: card.svgPaths }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
