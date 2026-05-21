import { Section } from '@/components/ui/layout';

export function FounderQuote() {
  return (
    <Section spacing="none" as="section" className="quote">
      <div className="wrap">
        <div className="quote-card">
          <div className="avatar" aria-hidden="true">JS</div>
          <div>
            <blockquote>
              &ldquo;Most business owners have more on their plate than they should. AI, used in
              the right places, gives you back your time — and gives your team the tools to do
              their best work. That&apos;s what KEYOB is here to do.&rdquo;
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
