import { createConsoleLogger } from './providers/console';
import type { Logger } from './types';

export const logger: Logger = createConsoleLogger();
export type { Logger, LogLevel, LogContext } from './types';
