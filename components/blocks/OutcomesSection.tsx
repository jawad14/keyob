import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { outcomes, palettes, getThumbBg } from '@/config/keyob-data';

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
          What this work creates for the organizations we partner with. Measurable. Durable.
          Designed against business outcomes — not technical convenience.
        </Text>

        <div className="case-grid">
          {outcomes.map((o, idx) => {
            const palette = palettes[o.paletteIndex % palettes.length];
            return (
              <article key={idx} className="case-card">
                <div className="case-thumb">
                  <div className="grad" style={{ background: getThumbBg(palette) }} />
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

