import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { logger } from '@/lib/logger';
import { postFrontmatterSchema } from '../schemas';
import type { Cms, Post, PostSummary } from '../types';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

async function readPostFile(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(raw);
    const parsed = postFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      logger.error('invalid frontmatter', parsed.error, { slug });
      return null;
    }
    return { slug, ...parsed.data, content };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw err;
  }
}

export function createMdxCms(): Cms {
  return {
    listPosts: async (): Promise<PostSummary[]> => {
      let entries: string[];
      try {
        entries = await fs.readdir(POSTS_DIR);
      } catch (err) {
        if ((err as NodeJS.ErrnoException).code === 'ENOENT') return [];
        throw err;
      }
      const slugs = entries.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''));
      const posts = await Promise.all(slugs.map(readPostFile));
      return posts
        .filter((p): p is Post => p !== null && !p.draft)
        .map(({ content: _content, ...summary }) => summary)
        .sort((a, b) => +new Date(b.date) - +new Date(a.date));
    },
    getPost: readPostFile,
  };
}
