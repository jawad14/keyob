// app/news/rss.xml/route.ts — crawlable RSS feed
import { articles } from "@/data/articles";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const items = [...articles]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .map((a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE.url}/news/${a.slug}</link>
      <guid>${SITE.url}/news/${a.slug}</guid>
      <category>${escapeXml(a.category)}</category>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(a.summary)}</description>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>KEYOB — News &amp; Perspectives on AI Operations</title>
  <link>${SITE.url}/news</link>
  <description>Practical insights on AI operations, workflow automation, ERP systems and operational intelligence.</description>
  <language>en-au</language>${items}
</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml" } });
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}
