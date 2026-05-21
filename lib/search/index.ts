import { siteConfig } from '@/config/site.config';
import { createPagefindSearch } from './providers/pagefind';
import type { Search } from './types';

function create(): Search {
  switch (siteConfig.providers.search) {
    case 'pagefind':
    default:
      return createPagefindSearch();
  }
}

export const search: Search = create();
export type { Search, SearchResult } from './types';
