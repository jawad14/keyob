import 'server-only';
import { siteConfig } from '@/config/site.config';
import { createNoneEmail } from './providers/none';
import { createSmtpEmail } from './providers/smtp';
import type { Email } from './types';

function create(): Email {
  switch (siteConfig.providers.email) {
    case 'smtp':
      return createSmtpEmail();
    case 'none':
    default:
      return createNoneEmail();
  }
}

export const email: Email = create();
export type { Email, EmailMessage, EmailResult } from './types';
