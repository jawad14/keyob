export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  tags: string[];
  cover?: { src: string; alt: string };
  cta?: { heading: string; body: string; label: string; href: string };
  content: string;
};

export type PostSummary = Omit<Post, 'content'>;

export interface Cms {
  listPosts(): Promise<PostSummary[]>;
  getPost(slug: string): Promise<Post | null>;
}
