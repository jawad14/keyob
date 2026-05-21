'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { industries } from '@/config/keyob-data';

export function IndustriesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section spacing="none" as="section" className="faq" id="industries">
      <div className="wrap">
        <div className="grid">
          <div>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
              Where we go to work
            </span>
            <H2>
              What industries do <em>we serve?</em>
            </H2>
            <Text
              variant="lead"
              className="!text-base !leading-[1.6] mt-6 max-w-[42ch]"
            >
              We work in environments where fragmented systems have a real cost — in billable hours,
              patient experience, compliance risk, or scale capacity.
            </Text>
          </div>

          <div className="qs">
            {industries.map((industry, i) => (
              <div key={industry.title} className={`q${openIndex === i ? ' is-open' : ''}`}>
                <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className="qtitle">{industry.title}</span>
                    <span className="qsub">{industry.subtitle}</span>
                  </span>
                  <span className="qsign">+</span>
                </button>
                <div className="a">
                  <Text as="p">{industry.body}</Text>
                  <span className="eyebrow" style={{ display: 'block', margin: '12px 0 6px' }}>
                    Operational Challenges
                  </span>
                  <ul>
                    {industry.challenges.map((ch) => (
                      <li key={ch}>{ch}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
