import { wwdMethodSteps } from '@/config/keyob-wwd';

export function WwdMethod() {
  return (
    <section className="wwd-method" id="method">
      <div className="wrap">
        <div className="wwd-eyebrow wwd-eyebrow--cyan">How KEYOB works</div>
        <h2 className="wwd-h2 wwd-h2--on-dark wwd-method-h2">
          We do not start with tools. We start with{' '}
          <em>how your business actually works.</em>
        </h2>
        <div className="wwd-method-steps">
          {wwdMethodSteps.map((s) => (
            <div key={s.n} className="wwd-mstep">
              <div className="wwd-mn">{s.n}</div>
              <h4>{s.name}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
