import 'server-only';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { cms } from '@/lib/cms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = siteConfig.nav.map((item) => ({
    url: `${base}${item.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }));

  if (!siteConfig.features.blog) return staticEntries;

  const posts = await cms.listPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...postEntries,
  ];
}
