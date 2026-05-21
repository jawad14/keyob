import type { Analytics } from '../types';

export function createNoneAnalytics(): Analytics {
  return {
    track: () => {},
    page: () => {},
    identify: () => {},
  };
}
