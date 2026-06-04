// lib/types.ts
// Reusable data model for the KEYOB News section.
// `kind` distinguishes evergreen thought-leadership (Article schema)
// from timely items (NewsArticle schema) so we never mis-tag evergreen guides.

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "takeaway"; text: string };

export type NewsCategory =
  | "AI Operations"
  | "Workflow Automation"
  | "ERP Systems"
  | "Business Process Automation"
  | "Systems Integration"
  | "Operational Intelligence"
  | "Industry Notes"
  | "KEYOB Updates"
  | "Case Story Notes";

export type NewsArticle = {
  slug: string;
  kind: "evergreen" | "news"; // evergreen -> Article schema, news -> NewsArticle schema
  title: string;
  summary: string;
  category: NewsCategory;
  tags: string[];
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  readingTime: string; // e.g. "5 min read"
  author: string;
  featured: boolean;
  seoTitle: string;
  metaDescription: string;
  image: string; // hero/card image path
  imageAlt: string;
  content: ContentBlock[];
  relatedSolutions: string[]; // solution slugs/labels
  relatedArticles: string[]; // article slugs
};
