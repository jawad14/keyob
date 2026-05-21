import 'server-only';
import { siteConfig } from '@/config/site.config';
import { createConsoleLogger } from './providers/console';
import { createPinoLogger } from './providers/pino';
import type { Logger } from './types';

function create(): Logger {
  switch (siteConfig.providers.logger) {
    case 'pino':
      return createPinoLogger();
    case 'console':
    default:
      return createConsoleLogger();
  }
}

export const logger: Logger = create();
export type { Logger, LogLevel, LogContext } from './types';
