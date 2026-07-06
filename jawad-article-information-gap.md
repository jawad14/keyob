# Article ready to add — "The information gap we are not measuring"

**Author: Jawad Siddique** · Route: `/leadership-team/jawad-siddique/articles/information-gap-community-intelligence`

Everything below is formatted for the system you already built. No code changes needed to the template — just paste the data entry.

---

## 1. Paste this into `lib/articles.ts`

Add this object to the `ARTICLES` array. **Put it first** (position 0) so it becomes the featured article on the hub — its `pull` quote is what shows on the main articles page featured card. Because it's marked `featured: true`, remove `featured: true` from the previous featured article ("partners-not-vendors") so only one is featured.

```ts
  {
    slug: "information-gap-community-intelligence",
    featured: true,
    topic: "Community Intelligence",
    title: "The information gap we are not measuring",
    dek: "A message does not need to be true to become trusted — it only needs to arrive from someone we trust. The real challenge is not that false information exists, but that trusted information is slower, harder to understand and less connected to how communities actually communicate.",
    pull: "The future of communication will not belong to those who speak the loudest. It will belong to those who understand first.",
    date: "2026",
    read: "3 min read",
    body: [
      { t: "p", v: "A message does not need to be true to become trusted. It only needs to arrive from someone we trust." },
      { t: "p", v: "Imagine a voice note appearing in a family WhatsApp group. It is spoken in a familiar language. It is shared by a relative, a neighbour or a respected member of the community. It warns people about a new government rule, a health risk, an immigration change or a financial scam. Nobody knows where it originally came from — but people begin forwarding it." },
      { t: "p", v: "Not because they want to spread misinformation. Because they want to protect someone. That is what makes today's information challenge so difficult." },
      { t: "p", v: "The problem is not simply that false information exists. The deeper problem is that trusted information is often slower, harder to understand and less connected to the way communities communicate." },
      { t: "h", v: "We measure communication, but do we measure understanding?" },
      { t: "p", v: "Organisations regularly measure website visits, campaign impressions, social media engagement and email opens. These numbers tell us whether information was delivered. They do not tell us whether it was understood." },
      { t: "p", v: "Did people believe the message? Was the language accessible? Did the community interpret it differently from what was intended? What questions remained unanswered? What information did people receive from other sources?" },
      { t: "p", v: "These are not minor communication details. They are knowledge gaps. And knowledge gaps can quickly become trust gaps." },
      { t: "h", v: "Translation alone is not enough" },
      { t: "p", v: "Multicultural communication is often treated as a translation exercise. An English announcement is translated into several languages, uploaded to a website and distributed through established channels. That is useful. But translation does not automatically create understanding." },
      { t: "p", v: "A message may be linguistically correct while still being culturally unclear. It may use unfamiliar institutional language. It may not address the questions people are actually asking. It may reach the community after another explanation has already become widely accepted." },
      { t: "p", v: "Inclusive communication must begin before translation. It must begin with listening." },
      { t: "h", v: "From fact-checking to Community Intelligence" },
      { t: "p", v: "Fact-checking remains important. But it usually begins after a questionable claim has already attracted attention. What if organisations could understand the conditions that allow misinformation to spread?" },
      { t: "p", v: "What if they could identify recurring confusion before it developed into distrust? What if a council could see that residents were repeatedly misunderstanding a new service? What if a health organisation could recognise growing uncertainty within a particular language community? What if community leaders could see which questions were increasing before rumours became widespread?" },
      { t: "p", v: "This is the opportunity behind Community Intelligence. Community Intelligence is not about monitoring individuals. It is about recognising patterns in community questions, concerns, sentiment and knowledge gaps." },
      { t: "q", v: "Knowledge gaps can quickly become trust gaps — and by the time a rumour is spreading, the moment to build understanding has already passed." },
      { t: "p", v: "It can help organisations understand what communities are discussing, what they are uncertain about, which information they trust, where confusion is increasing, and how communication should be improved." },
      { t: "p", v: "Technology can help process these signals across languages and channels. But technology is not the hero. Trust is still built through people. Community leaders, multicultural organisations, local services and trusted institutions remain essential. AI can help them see more clearly and respond more quickly." },
      { t: "h", v: "We need to understand before we communicate" },
      { t: "p", v: "The future of public communication will require more than producing accurate information. Organisations will need to understand how information moves through communities. They will need to recognise the difference between delivering a message and creating understanding. They will need to treat community sentiment, trust and awareness as essential decision-making information." },
      { t: "p", v: "The organisations that succeed will not necessarily be those that publish the most content. They will be those that understand where uncertainty exists and respond before uncertainty becomes distrust." },
      { t: "p", v: "The future of communication will not belong to those who speak the loudest. It will belong to those who understand first." }
    ],
  },
```

> Type-checked against your `Article` interface in strict mode — it slots in with zero errors. 23 body blocks (18 paragraphs, 4 section headings, 1 in-body pull-quote). Language is unchanged from your draft; only sentence-grouping into paragraphs was applied so it renders as clean prose.

---

## 2. The featured quote (shows on the main articles page)

This is the strongest, most quotable line — the closing thesis — set as the `pull` field so it drives the featured card:

> **"The future of communication will not belong to those who speak the loudest. It will belong to those who understand first."**

A second strong line runs inside the article body as the pull-quote block, so the featured card and the article don't repeat the same sentence:

> *"Knowledge gaps can quickly become trust gaps — and by the time a rumour is spreading, the moment to build understanding has already passed."*

---

## 3. SEO / AEO / GEO — stronger metadata

Your route auto-generates title, canonical, Open Graph, Twitter, and Article + BreadcrumbList JSON-LD from the fields above. Here is what it will output, plus recommended additions to strengthen AI-answer visibility (AEO/GEO).

### Auto-generated (already handled by the template)
- **Title tag:** `The information gap we are not measuring — Jawad Siddique, KEYOB`
- **Canonical:** `https://www.keyob.com/leadership-team/jawad-siddique/articles/information-gap-community-intelligence`
- **Meta description (auto, from dek, 151 chars):**
  `A message does not need to be true to become trusted — it only needs to arrive from someone we trust. The real challenge is not that false information…`
- **OG + Twitter:** title, description, type=article, section=Community Intelligence, author=Jawad Siddique
- **JSON-LD:** Article + BreadcrumbList

### Recommended stronger meta description (hand-written, tighter for search + AI)
Replace the auto description with this in `generateMetadata` (or add a `metaDescription` field per article). It leads with the core idea, includes the key entity terms, and stays under 160 chars:

> `Trusted information is losing to misinformation not because it is false, but because it is slower and harder to understand. Why understanding must come first.`

### Keywords / entities to reinforce (for AEO + GEO)
These are the concepts AI answer engines will index this piece around. They already appear naturally in the body — no keyword stuffing needed:
Community Intelligence · multicultural communication · misinformation · trust gap · knowledge gap · inclusive communication · fact-checking · community sentiment · public communication · understanding before communicating.

### Extra JSON-LD to add (AEO/GEO booster)
Your Article schema is good. To improve eligibility for AI overviews and featured-answer surfaces, add a `FAQPage` or `speakable` block. The article's four section headings are already question/answer-shaped — ideal for this. Suggested `FAQPage` entries (drawn verbatim from the article's own points, no invented content):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is measuring communication the same as measuring understanding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Website visits, impressions, engagement and email opens show whether information was delivered, not whether it was understood. Knowledge gaps can quickly become trust gaps."
      }
    },
    {
      "@type": "Question",
      "name": "Is translation enough for multicultural communication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A message can be linguistically correct yet culturally unclear. Inclusive communication must begin before translation — it must begin with listening."
      }
    },
    {
      "@type": "Question",
      "name": "What is Community Intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Community Intelligence is not about monitoring individuals. It is about recognising patterns in community questions, concerns, sentiment and knowledge gaps, so organisations can respond before uncertainty becomes distrust."
      }
    }
  ]
}
```

Add it alongside the existing two JSON-LD blocks in `page.tsx` (extend the array returned by `jsonLd()`), only for articles that have an `faq` field, so it stays opt-in per article.

### `speakable` (voice-assistant / GEO)
Optionally add to the Article schema:
```json
"speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".dek"] }
```

---

## 4. One-line summary of what to do
1. Paste the object into `ARTICLES` (first position), remove `featured` from the old featured article.
2. Optionally swap in the stronger hand-written meta description.
3. Optionally add the `FAQPage` JSON-LD for AEO/GEO.
That's it — the page, breadcrumb, share links, prev/next, and featured card all wire up automatically.
