import Image from 'next/image';
import Link from 'next/link';
import { NewsMotif } from '@/components/blocks/NewsMotif';
import type { NewsArticle } from '@/config/keyob-news';

export function NewsFeatured({ article }: { article: NewsArticle }) {
  return (
    <section className="news-featured-sec">
      <div className="wrap">
        <p className="news-sec-label">Featured</p>
        <Link href={`/news/${article.slug}`} className="news-feat">
          <div className="news-feat-vis">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(min-width: 960px) 50vw, 100vw"
                priority
              />
            ) : (
              <NewsMotif kind={article.visual} gradientId="news-feat-gradient" />
            )}
          </div>
          <div className="news-feat-body">
            <div className="news-tag">
              <span className="news-tag-dot" />
              Featured · {article.category}
            </div>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <div className="news-feat-meta">
              <span>
                {article.date} · {article.readTime}
              </span>
              <span className="news-read">
                Read the story <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
