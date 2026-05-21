import { siteConfig } from '@/config/site.config';
import { createConsoleErrorReporter } from './providers/console';
import type { ErrorReporter } from './types';

function create(): ErrorReporter {
  switch (siteConfig.providers.errors) {
    case 'console':
    default:
      return createConsoleErrorReporter();
  }
}

export const errorReporter: ErrorReporter = create();
export type { ErrorReporter, ErrorContext } from './types';
