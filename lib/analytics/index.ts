import { siteConfig } from '@/config/site.config';
import { createNoneAnalytics } from './providers/none';
import type { Analytics } from './types';

function create(): Analytics {
  switch (siteConfig.providers.analytics) {
    case 'none':
    default:
      return createNoneAnalytics();
  }
}

export const analytics: Analytics = create();
export type { Analytics, AnalyticsEvent } from './types';
