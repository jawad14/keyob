import Link from 'next/link';
import { wwdStageCards } from '@/config/keyob-wwd';

export function WwdStages() {
  return (
    <section className="wwd-stage-sec" id="stages">
      <div className="wrap">
        <div className="wwd-stage-head">
          <div className="wwd-eyebrow wwd-eyebrow--center">
            Where are you in the journey?
          </div>
          <h2 className="wwd-h2">
            Choose the situation closest to <em>your business.</em>
          </h2>
          <p className="wwd-lead">
            KEYOB can help you start from there — and connect the rest when you&apos;re ready.
          </p>
        </div>
        <div className="wwd-stage-grid">
          {wwdStageCards.map((c) => (
            <Link key={c.question} href="#pathway" className="wwd-stage-card">
              <div className="wwd-stage-qn">{c.question}</div>
              <div className="wwd-stage-start">
                Start with: <b>{c.startWith}</b>
              </div>
              <div className="wwd-stage-go">
                Explore this path <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
