import { aboutOldList, aboutKeyobList } from '@/config/keyob-about';

export function AuShift() {
  return (
    <section className="au-shift">
      <div className="wrap">
        <div className="au-shift-head">
          <div className="au-eyebrow">The shift</div>
          <h2 className="au-h2">
            Our work changed because <em>business changed.</em>
          </h2>
          <p className="au-lead">
            A customer may discover a business through search or social, enter through a website,
            move into a CRM, flow through operations, appear in reporting, and be supported by
            AI-enabled workflows. When those layers are disconnected, the business slows down. We
            modernized our services around that reality.
          </p>
          <div className="au-shift-key">
            We no longer think in isolated deliverables. We think in connected business journeys.
          </div>
        </div>

        <div className="au-compare">
          <div className="au-comp-card au-comp-card--old">
            <h3>The old IT model</h3>
            <ul>
              {aboutOldList.map((item) => (
                <li key={item}>
                  <span className="au-comp-mk" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="au-comp-card au-comp-card--keyob">
            <h3>The KEYOB model</h3>
            <ul>
              {aboutKeyobList.map((item) => (
                <li key={item}>
                  <span className="au-comp-mk" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
