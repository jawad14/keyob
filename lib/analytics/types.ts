export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, unknown>;
};

export interface Analytics {
  track(event: AnalyticsEvent): void;
  page(path: string, properties?: Record<string, unknown>): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
}
