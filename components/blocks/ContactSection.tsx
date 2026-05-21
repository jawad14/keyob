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
              Strategic Inquiry
            </span>
            <H2>
              Begin a <em>conversation.</em>
            </H2>
            <Text as="p" className="lede">
              We work with leaders for whom this matters as a real strategic priority — not buyers
              looking for a vendor. Tell us about the challenge you&apos;re working through. We&apos;ll
              respond within one business day with a perspective worth your time.
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
                <span>Strategic discovery — not a sales call</span>
              </div>
              <div className="row">
                <strong>No obligation</strong>
                <span>Assessment before engagement</span>
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
              <label htmlFor="cf-challenge">The challenge you&apos;re working through</label>
              <textarea
                id="cf-challenge"
                name="challenge"
                placeholder="A few sentences describing what you are working through."
                required
              />
            </div>
            <button type="submit">
              {submitted ? 'Sent — thank you ✓' : 'Submit inquiry'}
              {!submitted && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>
            <Text as="p" className={`cf-success${submitted ? ' is-visible' : ''}`}>
              Thank you. We have received your inquiry and will respond within one business day with
              a considered perspective on how to proceed.
            </Text>
          </form>
        </div>
      </div>
    </Section>
  );
}
