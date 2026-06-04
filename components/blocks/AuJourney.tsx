import { aboutJourney } from '@/config/keyob-about';

export function AuJourney() {
  return (
    <section className="au-journey" id="journey">
      <div className="au-journey-mesh" aria-hidden="true" />
      <div className="wrap">
        <div className="au-journey-head">
          <div className="au-eyebrow au-eyebrow--cyan">The modernization journey</div>
          <h2 className="au-h2 au-h2--on-dark">
            How KEYOB evolved with <em>the businesses we serve.</em>
          </h2>
        </div>
        <div className="au-jpath">
          {aboutJourney.map((p) => (
            <div key={p.phase} className="au-jphase">
              <div className="au-jphase-ph">{p.phase}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
