import 'server-only';
import { logger } from '@/lib/logger';
import type { Email } from '../types';

export function createNoneEmail(): Email {
  return {
    send: async (message) => {
      logger.warn('email provider not configured; message dropped', {
        to: message.to,
        subject: message.subject,
      });
      return { ok: false, error: 'email provider not configured' };
    },
  };
}
