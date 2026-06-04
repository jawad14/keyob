import { wwdPaths } from '@/config/keyob-wwd';

export function WwdPaths() {
  return (
    <section className="wwd-paths">
      <div className="wrap">
        <div className="wwd-paths-head">
          <div className="wwd-eyebrow wwd-eyebrow--center">Engagement path examples</div>
          <h2 className="wwd-h2">
            Different starting points. <em>One smarter direction.</em>
          </h2>
        </div>
        <div className="wwd-paths-grid">
          {wwdPaths.map((p) => (
            <div key={p.title} className="wwd-path-card">
              <div className="wwd-path-pn">{p.eyebrow}</div>
              <h3>{p.title}</h3>
              <div className="wwd-path-flow">
                {p.steps.map((step, i) => (
                  <span key={`${p.title}-${i}`} className="wwd-path-step-wrap">
                    <span className="wwd-path-step">{step}</span>
                    {i < p.steps.length - 1 ? (
                      <span className="wwd-path-sep" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
