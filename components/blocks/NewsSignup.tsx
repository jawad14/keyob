'use client';

import { useState } from 'react';

export function NewsSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="news-signup">
      <div className="wrap news-signup-inner">
        <h2>
          Get practical AI operations insights from <em>KEYOB</em>
        </h2>
        <p>
          Receive short updates on workflow automation, ERP systems, AI implementation, and
          business process improvement.
        </p>
        <form
          className="news-signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="email"
            placeholder="you@company.com"
            aria-label="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="news-btn">
            {submitted ? 'Subscribed ✓' : 'Subscribe to updates'}
          </button>
        </form>
      </div>
    </section>
  );
}
