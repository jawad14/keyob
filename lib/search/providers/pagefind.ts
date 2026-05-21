import type { Search } from '../types';

export function createPagefindSearch(): Search {
  return {
    query: async () => [],
  };
}
