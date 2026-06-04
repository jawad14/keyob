// app/sitemap.ts — includes /news and every article
import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/news`, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${SITE.url}/news/${a.slug}`,
      lastModified: a.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
