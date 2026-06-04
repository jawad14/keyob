import { wwdIntroItems } from '@/config/keyob-wwd';

export function WwdIntro() {
  return (
    <section className="wwd-intro">
      <div className="wrap wwd-intro-grid">
        <div>
          <div className="wwd-eyebrow">The starting point</div>
          <h2 className="wwd-h2">
            You may enter at any stage. <em>We help you move forward.</em>
          </h2>
          <div className="wwd-intro-quote">
            You do not need to start from step one. We meet you at your current stage and help
            you move to the next one.
          </div>
        </div>
        <ul className="wwd-intro-list">
          {wwdIntroItems.map((item, i) => (
            <li key={i}>
              <svg
                className="wwd-intro-ic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
