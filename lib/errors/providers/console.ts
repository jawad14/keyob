import type { ErrorReporter } from '../types';

export function createConsoleErrorReporter(): ErrorReporter {
  return {
    capture: (err, ctx) => console.error('[error]', err, ctx ?? {}),
    captureMessage: (msg, ctx) => console.error('[error]', msg, ctx ?? {}),
  };
}
