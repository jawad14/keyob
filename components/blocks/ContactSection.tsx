'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clientValidate: Record<string, (v: string) => string | null> = {
  name: (v) => (!v.trim() ? 'Please tell us your name' : null),
  organization: (v) => (!v.trim() ? 'Which organization are you with?' : null),
  email: (v) => {
    if (!v.trim()) return 'We need your email to follow up';
    if (!EMAIL_RE.test(v.trim())) return "That doesn't look like a valid email";
    return null;
  },
  challenge: (v) => (!v.trim() ? 'A few sentences help us prepare' : null),
};

function Spinner() {
  return (
    <svg
      className="cf-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v5" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-busy={pending}>
      {pending ? (
        <>
          <Spinner />
          <span>Sending…</span>
        </>
      ) : (
        <>
          <span>Book your free assessment</span>
          <ArrowIcon />
        </>
      )}
    </button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const sent = state.ok === true;
  const formRef = useRef<HTMLFormElement>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors: Record<string, string | undefined> = {
    ...clientErrors,
    ...(state.fieldErrors ?? {}),
  };

  useEffect(() => {
    if (sent) {
      formRef.current?.reset();
      setClientErrors({});
      setTouched({});
    }
  }, [sent]);

  useEffect(() => {
    if (!state.fieldErrors) return;
    const keys = Object.keys(state.fieldErrors);
    if (keys.length === 0) return;
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${keys[0]}"]`);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [state.fieldErrors]);

  function validateField(name: string, value: string) {
    const rule = clientValidate[name];
    if (!rule) return;
    setClientErrors((prev) => {
      const next = { ...prev };
      const msg = rule(value);
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    validateField(name, value);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    if (touched[name]) validateField(name, value);
  }

  const serverError = state.message && !sent;

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

          {sent ? (
            <div className="cf-success-card" role="status" aria-live="polite">
              <div className="cf-success-card-ic" aria-hidden="true">
                <CheckCircleIcon />
              </div>
              <h3>Message received</h3>
              <p>
                {state.message ??
                  "Thank you. We'll be in touch within one business day to set up your free AI assessment."}
              </p>
              <p className="cf-success-card-meta">
                A confirmation copy has been sent to the email you provided.
              </p>
            </div>
          ) : (
            <form ref={formRef} className="cf" action={formAction} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
              />
              <div className={`cf-field${errors.name ? ' is-invalid' : ''}`}>
                <label htmlFor="cf-name">Your name</label>
                <input
                  id="cf-name"
                  name="name"
                  placeholder="Full name"
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'cf-name-err' : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span id="cf-name-err" className="cf-err" role="alert">
                    <AlertIcon />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>
              <div className={`cf-field${errors.organization ? ' is-invalid' : ''}`}>
                <label htmlFor="cf-org">Organization</label>
                <input
                  id="cf-org"
                  name="organization"
                  placeholder="Company / organization"
                  required
                  aria-invalid={!!errors.organization}
                  aria-describedby={errors.organization ? 'cf-org-err' : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.organization && (
                  <span id="cf-org-err" className="cf-err" role="alert">
                    <AlertIcon />
                    <span>{errors.organization}</span>
                  </span>
                )}
              </div>
              <div className="cf-field">
                <label htmlFor="cf-industry">Industry</label>
                <select id="cf-industry" name="industry" defaultValue="">
                  <option value="" disabled>Select industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-size">Team size</label>
                <select id="cf-size" name="teamSize" defaultValue="">
                  <option value="" disabled>Select size</option>
                  {teamSizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className={`cf-field full${errors.email ? ' is-invalid' : ''}`}>
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'cf-email-err' : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span id="cf-email-err" className="cf-err" role="alert">
                    <AlertIcon />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>
              <div className={`cf-field full${errors.challenge ? ' is-invalid' : ''}`}>
                <label htmlFor="cf-challenge">Where would you most like AI to help in your business?</label>
                <textarea
                  id="cf-challenge"
                  name="challenge"
                  placeholder="A few sentences about your business and what you're hoping AI could help with."
                  required
                  aria-invalid={!!errors.challenge}
                  aria-describedby={errors.challenge ? 'cf-challenge-err' : undefined}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.challenge && (
                  <span id="cf-challenge-err" className="cf-err" role="alert">
                    <AlertIcon />
                    <span>{errors.challenge}</span>
                  </span>
                )}
              </div>
              {serverError && (
                <div className="cf-banner cf-banner--error" role="alert">
                  <AlertIcon />
                  <span>{state.message}</span>
                </div>
              )}
              <SubmitButton />
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
