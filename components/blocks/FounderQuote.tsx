import { Section } from '@/components/ui/layout';

export function FounderQuote() {
  return (
    <Section spacing="none" as="section" className="quote">
      <div className="wrap">
        <div className="quote-card">
          <div className="avatar" aria-hidden="true">JS</div>
          <div>
            <blockquote>
              &ldquo;Most organizations are not failing because of their people or their strategy.
              They are failing because the systems connecting people to strategy were never designed
              together. KEYOB exists to design them together — and then to build them.&rdquo;
            </blockquote>
            <div className="who">
              <strong>Jawad Siddique</strong> Founder — KEYOB
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
