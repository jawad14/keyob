export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export type LogContext = Record<string, unknown>;

export interface Logger {
  debug(msg: string, ctx?: LogContext): void;
  info(msg: string, ctx?: LogContext): void;
  warn(msg: string, ctx?: LogContext): void;
  error(msg: string, err?: unknown, ctx?: LogContext): void;
  fatal(msg: string, err?: unknown, ctx?: LogContext): void;
  child(bindings: LogContext): Logger;
}
