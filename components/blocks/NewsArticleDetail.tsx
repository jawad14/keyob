import Link from 'next/link';
import { NewsMotif } from '@/components/blocks/NewsMotif';
import { newsArticles, type NewsArticle } from '@/config/keyob-news';

function isoToHuman(iso?: string) {
  if (!iso) return null;
  const d = new Date(iso);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function NewsArticleDetail({ article }: { article: NewsArticle }) {
  // Per-article related list (matches the template's data model).
  // Fall back to category mates + featured if any slug is missing.
  const pickFromSlugs = article.relatedArticles
    .map((slug) => newsArticles.find((a) => a.slug === slug))
    .filter((a): a is NewsArticle => Boolean(a));
  const related = pickFromSlugs.length
    ? pickFromSlugs
    : newsArticles
        .filter((a) => a.slug !== article.slug)
        .filter((a) => a.category === article.category || a.featured)
        .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <header className="news-ahero">
        <div className="news-ahero-mesh" aria-hidden="true" />
        <div className="wrap news-ahero-in">
          <div className="news-crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/news">News</Link>
            <span>/</span>
            {article.title}
          </div>
          <div className="news-ameta">
            <span>{article.category}</span>
            <span className="news-ameta-sep">·</span>
            <span>{article.date}</span>
            <span className="news-ameta-sep">·</span>
            <span>{article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="news-asummary">{article.summary}</p>
          <p className="news-aauthor">By {article.author}</p>
        </div>
      </header>

      {/* BODY */}
      <article className="news-body">
        <div className="news-narrow">
          {article.body.map((block, i) => {
            if (block.kind === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.kind === 'h3') return <h3 key={i}>{block.text}</h3>;
            if (block.kind === 'p') return <p key={i}>{block.text}</p>;
            if (block.kind === 'list') {
              return (
                <ul key={i} className="news-list">
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            }
            if (block.kind === 'quote') {
              return (
                <blockquote key={i} className="news-pullquote">
                  <span>{block.text}</span>
                  {block.cite ? <cite>— {block.cite}</cite> : null}
                </blockquote>
              );
            }
            // 'takeaway' inline blocks fall back to the styled takeaway box
            return (
              <div key={i} className="news-takeaway">
                <div className="news-takeaway-l">Key takeaway</div>
                <p>{block.text}</p>
              </div>
            );
          })}

          <div className="news-takeaway">
            <div className="news-takeaway-l">Key takeaway</div>
            <p>{article.takeaway}</p>
          </div>

          <p className="news-dates">
            Published {isoToHuman(article.dateIso)}
            {article.updatedIso ? ` · Updated ${isoToHuman(article.updatedIso)}` : ''}
          </p>

          <section className="news-solutions">
            <div className="news-takeaway-l">Related solutions</div>
            <div className="news-sol-grid">
              {article.relatedSolutions.map((label) => (
                <Link key={label} href="/#capabilities">
                  {label} <span className="news-ar">→</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="news-discuss">
            <h2>
              Discuss this with <em>KEYOB</em>
            </h2>
            <Link href="/#contact" className="news-btn">
              Discuss this with KEYOB <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="news-related">
          <div className="wrap">
            <div className="news-takeaway-l">Related articles</div>
            <h2>Keep exploring</h2>
            <div className="news-rgrid">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/news/${r.slug}`} className="news-rcard">
                  <div className="news-rcard-v">
                    <NewsMotif kind={r.visual} gradientId={`news-related-${i}`} />
                  </div>
                  <div className="news-rcard-b">
                    <div className="news-rcard-t">{r.category}</div>
                    <h3>{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
