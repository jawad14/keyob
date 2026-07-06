import { ImageResponse } from 'next/og';

import { getLeaderArticle, leaderArticleParams } from '@/config/keyob-leader-articles';
import { getLeaderProfile } from '@/config/keyob-leader-profiles';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'KEYOB article';

export function generateStaticParams() {
  return leaderArticleParams;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; article: string }>;
}) {
  const { slug, article } = await params;
  const found = getLeaderArticle(slug, article);
  const profile = getLeaderProfile(slug);

  const title = found?.article.title ?? 'From the desk';
  const topic = found?.article.topic ?? 'Perspective';
  const authorName = found?.page.author.name ?? 'KEYOB';
  const authorRole = found?.page.author.role ?? '';
  const accent = profile?.accent.plum ?? '#19C6E8';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #12305F 0%, #07101E 62%)',
          position: 'relative',
        }}
      >
        <div
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 14, background: '#19C6E8' }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: 8, color: '#FFFFFF' }}>
            KEYOB
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#19C6E8',
              fontWeight: 700,
            }}
          >
            {topic}
          </span>
          <span
            style={{
              fontSize: 66,
              lineHeight: 1.08,
              fontWeight: 700,
              color: '#FFFFFF',
              marginTop: 22,
              maxWidth: 980,
            }}
          >
            {title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: 60, height: 4, background: accent, marginRight: 24 }} />
          <span style={{ fontSize: 30, color: '#C2D3EE' }}>
            {authorRole ? `${authorName} · ${authorRole}` : authorName}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
