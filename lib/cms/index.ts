import 'server-only';
import { siteConfig } from '@/config/site.config';
import { createMdxCms } from './providers/mdx';
import type { Cms } from './types';

function create(): Cms {
  switch (siteConfig.providers.cms) {
    case 'mdx':
    default:
      return createMdxCms();
  }
}

export const cms: Cms = create();
export type { Cms, Post, PostSummary } from './types';
