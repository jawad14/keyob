import { capabilities, capabilityGridSpans } from '@/config/keyob-data';
import { H2, Heading, Text } from '@/components/ui/typography';

export function CapabilitiesGrid() {
  return (
    <section className="caps" id="capabilities">
      <div className="wrap">
        <div className="header">
          <H2>
            Seven places we <em>move the needle.</em>
          </H2>
          <div>
            <Text variant="body" className="!text-[17px] !leading-[1.6] max-w-[56ch]">
              Across workflow, data, visibility, automation, intelligence, integration, and
              end-to-end digital transformation — we design the system, then build it.
            </Text>
          </div>
        </div>

        <div className="cap-grid">
          {capabilities.map((d, i) => (
            <article
              key={d.n}
              className={`cap${i === 4 ? ' cap--dark' : ''}`}
              style={{ gridColumn: `span ${capabilityGridSpans[i]}` }}
            >
              <span className="glyph">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: d.iconPath }} />
              </span>
              <span className="tag cap-num">{d.n}</span>
              <Heading level={3} dangerouslySetInnerHTML={{ __html: d.titleHtml }} />
              <Text as="p" className={i === 4 ? '!text-white' : undefined}>{d.problem}</Text>
              <div className="cap-outcome">
                <span className="eyebrow cap-outcome-label">Outcome</span>
                <span className="cap-outcome-text">{d.outcome}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
