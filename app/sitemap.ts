import 'server-only';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { cms } from '@/lib/cms';
import { newsArticles } from '@/config/keyob-news';
import { stories } from '@/config/keyob-stories';
import { leaderProfiles } from '@/config/keyob-leader-profiles';
import { leaderArticleSlugs, leaderArticleParams } from '@/config/keyob-leader-articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();
  const url = (path: string) => `${base}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/what-we-do'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: url('/what-we-do/erp-implementations'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/what-we-do/erp-implementations/sap-business-one'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: url('/what-we-do/erp-implementations/odoo'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: url('/stories'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: url('/leadership-team'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/news'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: url('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: url('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: url('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: url('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const posts = await cms.listPosts();
  const blogPages: MetadataRoute.Sitemap = posts
    .filter((p) => !p.draft)
    .map((p) => ({
      url: url(`/blog/${p.slug}`),
      lastModified: new Date(p.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  const newsPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: url(`/news/${a.slug}`),
    lastModified: new Date(a.updatedIso ?? a.dateIso),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const storyPages: MetadataRoute.Sitemap = stories.map((s) => ({
    url: url(`/stories/${s.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const leaderPages: MetadataRoute.Sitemap = leaderProfiles.map((p) => ({
    url: url(`/leadership-team/${p.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const leaderHubPages: MetadataRoute.Sitemap = leaderArticleSlugs.map((slug) => ({
    url: url(`/leadership-team/${slug}/articles`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const leaderArticlePages: MetadataRoute.Sitemap = leaderArticleParams.map(({ slug, article }) => ({
    url: url(`/leadership-team/${slug}/articles/${article}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...newsPages,
    ...storyPages,
    ...leaderPages,
    ...leaderHubPages,
    ...leaderArticlePages,
  ];
}
