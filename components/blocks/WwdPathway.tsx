'use client';

import { useState } from 'react';
import { wwdStages } from '@/config/keyob-wwd';

export function WwdPathway() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wwd-pathway" id="pathway">
      <div className="wrap">
        <div className="wwd-pathway-head">
          <div className="wwd-eyebrow wwd-eyebrow--center">The KEYOB Pathway</div>
          <h2 className="wwd-h2">
            A practical route from <em>digital presence to intelligent operations.</em>
          </h2>
          <p className="wwd-lead">
            Eight stages, one connected direction. Start at the beginning, enter in the middle,
            or skip what you&apos;ve already built — the path still leads to the same connected
            business.
          </p>
        </div>

        <div className="wwd-legend">
          <span>Start here</span>
          <span>Enter here</span>
          <span>Skip if already mature</span>
          <span>Connect next</span>
          <span>Scale with AI</span>
        </div>

        <div className="wwd-stairs">
          {wwdStages.map((stage, i) => {
            const open = openIndex === i;
            return (
              <div
                key={stage.title}
                className={`wwd-stair${open ? ' is-open' : ''}`}
                data-i={i}
              >
                <div className="wwd-stair-num">{String(i + 1).padStart(2, '0')}</div>
                <button
                  type="button"
                  className="wwd-stair-head"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="wwd-stair-head-inner">
                    <span className="wwd-stair-title">{stage.title}</span>
                    <span className="wwd-stair-tagchip">{stage.label}</span>
                  </span>
                  <span className="wwd-stair-toggle" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  className="wwd-stair-body"
                  style={{ maxHeight: open ? '600px' : '0' }}
                >
                  <div className="wwd-stair-inner">
                    <div>
                      <div className="wwd-stair-who">
                        <span className="wwd-stair-k">Who it&apos;s for</span>
                        {stage.who}
                      </div>
                      <ul className="wwd-stair-services">
                        {stage.services.map((svc) => (
                          <li key={svc}>{svc}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="wwd-stair-out">
                      <span className="wwd-stair-k">Business outcome</span>
                      {stage.outcome}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
