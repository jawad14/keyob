import type { LogContext, Logger } from '../types';

function serializeError(err: unknown) {
  if (err instanceof Error) {
    return { name: err.name, message: err.message, stack: err.stack };
  }
  return err;
}

function format(msg: string, ctx?: LogContext) {
  if (!ctx || Object.keys(ctx).length === 0) return msg;
  return `${msg} ${JSON.stringify(ctx)}`;
}

export function createConsoleLogger(bindings: LogContext = {}): Logger {
  const merge = (ctx?: LogContext): LogContext => ({ ...bindings, ...(ctx ?? {}) });

  return {
    debug: (msg, ctx) => console.debug(format(msg, merge(ctx))),
    info: (msg, ctx) => console.info(format(msg, merge(ctx))),
    warn: (msg, ctx) => console.warn(format(msg, merge(ctx))),
    error: (msg, err, ctx) =>
      console.error(format(msg, merge({ ...(ctx ?? {}), err: serializeError(err) }))),
    fatal: (msg, err, ctx) =>
      console.error(format(msg, merge({ ...(ctx ?? {}), err: serializeError(err), fatal: true }))),
    child: (b) => createConsoleLogger({ ...bindings, ...b }),
  };
}
