'use server';

import { z } from 'zod';
import { email } from '@/lib/email';
import { env } from '@/lib/env';
import { logger } from '@/lib/logger';
import { siteConfig } from '@/config/site.config';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  organization: z.string().trim().min(1, 'Organization is required').max(200),
  industry: z.string().trim().max(80).optional().or(z.literal('')),
  teamSize: z.string().trim().max(40).optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email').max(200),
  challenge: z.string().trim().min(1, 'Please share a few sentences').max(5000),
  website: z.string().max(0).optional(),
});

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get('name'),
    organization: formData.get('organization'),
    industry: formData.get('industry'),
    teamSize: formData.get('teamSize'),
    email: formData.get('email'),
    challenge: formData.get('challenge'),
    website: formData.get('website'),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof contactSchema> | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, message: 'Please check the highlighted fields.', fieldErrors };
  }

  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    return { ok: true, message: 'Thank you.' };
  }

  const to = env.EMAIL_TO ?? siteConfig.contact.email;
  const subject = `New AI assessment request — ${data.name} (${data.organization})`;

  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Organization', data.organization],
    ['Email', data.email],
    ['Industry', data.industry || '—'],
    ['Team size', data.teamSize || '—'],
  ];

  const text = [
    `New free AI assessment request from ${siteConfig.shortName} website`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Where they would most like AI to help:',
    data.challenge,
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0b1320;max-width:560px;">
      <h2 style="margin:0 0 12px;font-size:18px;">New free AI assessment request</h2>
      <p style="margin:0 0 16px;color:#475569;">From the ${escapeHtml(siteConfig.shortName)} contact form.</p>
      <table style="border-collapse:collapse;font-size:14px;width:100%;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 10px 6px 0;color:#64748b;width:130px;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;">${escapeHtml(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:20px 0 6px;font-size:14px;color:#64748b;">Where they'd most like AI to help</h3>
      <p style="margin:0;white-space:pre-wrap;line-height:1.5;">${escapeHtml(data.challenge)}</p>
    </div>
  `;

  const result = await email.send({
    to,
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (!result.ok) {
    logger.error('contact form send failed', undefined, { error: result.error });
    return {
      ok: false,
      message: 'We could not send your message right now. Please email us directly.',
    };
  }

  return {
    ok: true,
    message: "Thank you. We'll be in touch within one business day.",
  };
}
