import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { outcomes } from '@/config/keyob-data';

export function OutcomesSection() {
  return (
    <Section spacing="none" as="section" className="cases" id="outcomes">
      <div className="wrap">
        <H2>
          Client <em>success stories.</em>
        </H2>
        <Text
          variant="lead"
          className="!text-[17px] !leading-[1.6] max-w-[60ch] !mt-[-12px] !mb-11"
        >
          Behind every system we build is a business problem that needed to become clearer, faster,
          and easier to manage. These stories show how better software, connected data, and practical
          automation create measurable operational impact.
        </Text>

        <div className="case-grid">
          {outcomes.map((o, idx) => {
            return (
              <Link key={idx} href={`/stories/${o.slug}`} className="case-card">
                <div className="case-thumb">
                  <Image
                    src={o.image}
                    alt={o.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="case-photo"
                  />
                  <span className="label">{o.tag}</span>
                  <div className="stat-display">
                    <div className="stat-num">{o.stat}</div>
                    <div className="stat-sub">{o.statSub}</div>
                  </div>
                  <span className="badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
                <div className="case-body">
                  <div className="industry">{o.industry}</div>
                  <Text as="p" className="story">{o.story}</Text>
                  <span className="case-cta">
                    View story
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

