'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';

const industries = [
  'Professional Services',
  'Healthcare Operations',
  'Financial Services',
  'Logistics & Distribution',
  'Technology',
  'Education',
  'Manufacturing',
  'Other',
];

const teamSizes = [
  'Under 50',
  '50 – 200',
  '200 – 500',
  '500 – 1,000',
  'Over 1,000',
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section spacing="none" as="section" className="contact" id="contact">
      <div className="wrap">
        <div className="grid">
          <div>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
              Book Your Free Assessment
            </span>
            <H2>
              Let&apos;s find <em>your AI opportunity.</em>
            </H2>
            <Text as="p" className="lede">
              Book a free AI assessment with us. We&apos;ll explore where AI could create the next
              opportunity in your business — simple, practical ways to save time, reduce costs, and
              support growth. No obligation, just a real conversation.
            </Text>
            <div className="info">
              <div className="row">
                <strong>Office</strong>
                <span>333 Ann Street, Brisbane, Australia</span>
              </div>
              <div className="row">
                <strong>Response time</strong>
                <span>Within one business day</span>
              </div>
              <div className="row">
                <strong>First conversation</strong>
                <span>Free AI assessment — no obligation</span>
              </div>
              <div className="row">
                <strong>No obligation</strong>
                <span>We assess before we recommend anything</span>
              </div>
            </div>
          </div>

          <form className="cf" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="name" placeholder="Full name" required />
            </div>
            <div>
              <label htmlFor="cf-org">Organization</label>
              <input id="cf-org" name="organization" placeholder="Company / organization" required />
            </div>
            <div>
              <label htmlFor="cf-industry">Industry</label>
              <select id="cf-industry" name="industry" defaultValue="">
                <option value="" disabled>Select industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cf-size">Team size</label>
              <select id="cf-size" name="teamSize" defaultValue="">
                <option value="" disabled>Select size</option>
                {teamSizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="full">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" placeholder="name@company.com" required />
            </div>
            <div className="full">
              <label htmlFor="cf-challenge">Where would you most like AI to help in your business?</label>
              <textarea
                id="cf-challenge"
                name="challenge"
                placeholder="A few sentences about your business and what you're hoping AI could help with."
                required
              />
            </div>
            <button type="submit">
              {submitted ? 'Sent — thank you ✓' : 'Book your free assessment'}
              {!submitted && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>
            <Text as="p" className={`cf-success${submitted ? ' is-visible' : ''}`}>
              Thank you. We&apos;ll be in touch within one business day to set up your free AI assessment.
            </Text>
          </form>
        </div>
      </div>
    </Section>
  );
}
