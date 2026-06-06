'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { submitContact, type ContactState } from '@/app/actions/contact';

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

const initialState: ContactState = { ok: false };

function SubmitButton({ sent }: { sent: boolean }) {
  const { pending } = useFormStatus();
  const label = pending ? 'Sending…' : sent ? 'Sent — thank you ✓' : 'Book your free assessment';
  return (
    <button type="submit" disabled={pending}>
      {label}
      {!sent && !pending && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const sent = state.ok === true;
  const errors = state.fieldErrors ?? {};

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
                <span className="row-ic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </span>
                <span className="row-col">
                  <span className="row-label">Office</span>
                  <span>Level 1, 67 Springwood Road, Springwood QLD 4127</span>
                </span>
              </div>
              <div className="row">
                <span className="row-ic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>
                  </svg>
                </span>
                <span className="row-col">
                  <span className="row-label">Phone</span>
                  <span>
                    <a href="tel:+61433278992">+61 433 278 992</a>
                    {' / '}
                    <a href="tel:+61415373506">+61 415 373 506</a>
                  </span>
                </span>
              </div>
              <div className="row">
                <span className="row-ic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                  </svg>
                </span>
                <span className="row-col">
                  <span className="row-label">Response time</span>
                  <span>Within one business day</span>
                </span>
              </div>
              <div className="row">
                <span className="row-ic">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>
                  </svg>
                </span>
                <span className="row-col">
                  <span className="row-label">No obligation</span>
                  <span>Free assessment — we evaluate before we recommend</span>
                </span>
              </div>
            </div>
          </div>

          <form className="cf" action={formAction} noValidate>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
            />
            <div>
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="name" placeholder="Full name" required aria-invalid={!!errors.name} />
              {errors.name && <span className="cf-err">{errors.name}</span>}
            </div>
            <div>
              <label htmlFor="cf-org">Organization</label>
              <input id="cf-org" name="organization" placeholder="Company / organization" required aria-invalid={!!errors.organization} />
              {errors.organization && <span className="cf-err">{errors.organization}</span>}
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
              <input id="cf-email" name="email" type="email" placeholder="name@company.com" required aria-invalid={!!errors.email} />
              {errors.email && <span className="cf-err">{errors.email}</span>}
            </div>
            <div className="full">
              <label htmlFor="cf-challenge">Where would you most like AI to help in your business?</label>
              <textarea
                id="cf-challenge"
                name="challenge"
                placeholder="A few sentences about your business and what you're hoping AI could help with."
                required
                aria-invalid={!!errors.challenge}
              />
              {errors.challenge && <span className="cf-err">{errors.challenge}</span>}
            </div>
            <SubmitButton sent={sent} />
            {state.message && !sent && (
              <Text as="p" className="cf-error is-visible" role="alert">
                {state.message}
              </Text>
            )}
            <Text as="p" className={`cf-success${sent ? ' is-visible' : ''}`}>
              {sent
                ? state.message ?? "Thank you. We'll be in touch within one business day to set up your free AI assessment."
                : "Thank you. We'll be in touch within one business day to set up your free AI assessment."}
            </Text>
          </form>
        </div>
      </div>
    </Section>
  );
}
