import 'server-only';
import pino, { type Logger as PinoLogger } from 'pino';
import { env } from '@/lib/env';
import type { LogContext, Logger } from '../types';

function wrap(p: PinoLogger): Logger {
  return {
    debug: (msg, ctx) => p.debug(ctx ?? {}, msg),
    info: (msg, ctx) => p.info(ctx ?? {}, msg),
    warn: (msg, ctx) => p.warn(ctx ?? {}, msg),
    error: (msg, err, ctx) => p.error({ ...(ctx ?? {}), err }, msg),
    fatal: (msg, err, ctx) => p.fatal({ ...(ctx ?? {}), err }, msg),
    child: (b: LogContext) => wrap(p.child(b)),
  };
}

export function createPinoLogger(bindings: LogContext = {}): Logger {
  const isDev = env.NODE_ENV !== 'production';
  const instance = pino({
    level: env.LOG_LEVEL,
    base: bindings,
    transport: isDev
      ? { target: 'pino-pretty', options: { colorize: true, translateTime: 'SYS:HH:MM:ss' } }
      : undefined,
  });
  return wrap(instance);
}
