export type ErrorContext = Record<string, unknown>;

export interface ErrorReporter {
  capture(err: unknown, ctx?: ErrorContext): void;
  captureMessage(msg: string, ctx?: ErrorContext): void;
}
