export type ArticleBlock = { t: 'p' | 'h' | 'q'; v: string };

export type LeaderLongArticle = {
  slug: string;
  featured?: boolean;
  topic: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  image?: string;
  imageAlt?: string;
  body: ArticleBlock[];
};

export type LeaderArticleAuthor = {
  name: string;
  role: string;
  initial: string;
  linkedin: string;
};

export type LeaderArticlePage = {
  author: LeaderArticleAuthor;
  profilePath: string;
  hero: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    intro: string;
  };
  archive: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
  };
  subscribe: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    copy: string;
  };
  articles: LeaderLongArticle[];
};

const jawadArticles: LeaderArticlePage = {
  author: {
    name: 'Jawad Siddique',
    role: 'Founder & CEO · KEYOB',
    initial: 'J',
    linkedin: 'https://www.linkedin.com/in/jawad-siddique-80a4003b/',
  },
  profilePath: '/leadership-team/jawad-siddique',
  hero: {
    eyebrow: "From Jawad's desk",
    headingPrefix: 'Ideas about business, technology',
    headingEm: 'and what comes next.',
    intro:
      'Perspectives on partnership, clarity and practical transformation — written for the business owners and teams navigating real change, not the hype cycle.',
  },
  archive: {
    eyebrow: 'The archive',
    headingPrefix: 'Browse everything from',
    headingEm: "Jawad's desk.",
  },
  subscribe: {
    eyebrow: 'Stay close to the thinking',
    headingPrefix: 'New ideas,',
    headingEm: 'as they land.',
    copy: 'Occasional notes on partnership, systems and practical AI — sent only when there is something genuinely worth your time.',
  },
  articles: [
    {
      slug: 'information-gap-community-intelligence',
      featured: true,
      topic: 'Community Intelligence',
      title: 'The information gap we are not measuring',
      dek: 'A message does not need to be true to become trusted — it only needs to arrive from someone we trust. The real challenge is not that false information exists, but that trusted information is slower, harder to understand and less connected to how communities actually communicate.',
      date: '2026',
      read: '3 min read',
      image: '/articles/jawad-siddique/information-gap-community-intelligence.png',
      imageAlt:
        'A trusted source at the centre broadcasting information outward through a fan of light to interconnected community groups across a network',
      body: [
        {
          t: 'p',
          v: 'A message does not need to be true to become trusted. It only needs to arrive from someone we trust.',
        },
        {
          t: 'p',
          v: 'Imagine a voice note appearing in a family WhatsApp group. It is spoken in a familiar language. It is shared by a relative, a neighbour or a respected member of the community. It warns people about a new government rule, a health risk, an immigration change or a financial scam. Nobody knows where it originally came from — but people begin forwarding it.',
        },
        {
          t: 'p',
          v: 'Not because they want to spread misinformation. Because they want to protect someone. That is what makes today’s information challenge so difficult.',
        },
        {
          t: 'p',
          v: 'The problem is not simply that false information exists. The deeper problem is that trusted information is often slower, harder to understand and less connected to the way communities communicate.',
        },
        { t: 'h', v: 'We measure communication, but do we measure understanding?' },
        {
          t: 'p',
          v: 'Organisations regularly measure website visits, campaign impressions, social media engagement and email opens. These numbers tell us whether information was delivered. They do not tell us whether it was understood.',
        },
        {
          t: 'p',
          v: 'Did people believe the message? Was the language accessible? Did the community interpret it differently from what was intended? What questions remained unanswered? What information did people receive from other sources?',
        },
        {
          t: 'p',
          v: 'These are not minor communication details. They are knowledge gaps. And knowledge gaps can quickly become trust gaps.',
        },
        { t: 'h', v: 'Translation alone is not enough' },
        {
          t: 'p',
          v: 'Multicultural communication is often treated as a translation exercise. An English announcement is translated into several languages, uploaded to a website and distributed through established channels. That is useful. But translation does not automatically create understanding.',
        },
        {
          t: 'p',
          v: 'A message may be linguistically correct while still being culturally unclear. It may use unfamiliar institutional language. It may not address the questions people are actually asking. It may reach the community after another explanation has already become widely accepted.',
        },
        {
          t: 'p',
          v: 'Inclusive communication must begin before translation. It must begin with listening.',
        },
        { t: 'h', v: 'From fact-checking to Community Intelligence' },
        {
          t: 'p',
          v: 'Fact-checking remains important. But it usually begins after a questionable claim has already attracted attention. What if organisations could understand the conditions that allow misinformation to spread?',
        },
        {
          t: 'p',
          v: 'What if they could identify recurring confusion before it developed into distrust? What if a council could see that residents were repeatedly misunderstanding a new service? What if a health organisation could recognise growing uncertainty within a particular language community? What if community leaders could see which questions were increasing before rumours became widespread?',
        },
        {
          t: 'p',
          v: 'This is the opportunity behind Community Intelligence. Community Intelligence is not about monitoring individuals. It is about recognising patterns in community questions, concerns, sentiment and knowledge gaps.',
        },
        {
          t: 'q',
          v: 'Knowledge gaps can quickly become trust gaps — and by the time a rumour is spreading, the moment to build understanding has already passed.',
        },
        {
          t: 'p',
          v: 'It can help organisations understand what communities are discussing, what they are uncertain about, which information they trust, where confusion is increasing, and how communication should be improved.',
        },
        {
          t: 'p',
          v: 'Technology can help process these signals across languages and channels. But technology is not the hero. Trust is still built through people. Community leaders, multicultural organisations, local services and trusted institutions remain essential. AI can help them see more clearly and respond more quickly.',
        },
        { t: 'h', v: 'We need to understand before we communicate' },
        {
          t: 'p',
          v: 'The future of public communication will require more than producing accurate information. Organisations will need to understand how information moves through communities. They will need to recognise the difference between delivering a message and creating understanding. They will need to treat community sentiment, trust and awareness as essential decision-making information.',
        },
        {
          t: 'p',
          v: 'The organisations that succeed will not necessarily be those that publish the most content. They will be those that understand where uncertainty exists and respond before uncertainty becomes distrust.',
        },
        {
          t: 'p',
          v: 'The future of communication will not belong to those who speak the loudest. It will belong to those who understand first.',
        },
      ],
    },
    {
      slug: 'partners-not-vendors',
      topic: 'Partnership',
      title: 'Why businesses need technology partners, not software vendors',
      dek: 'A vendor sells you a product and moves on. A partner stays close enough to understand what changes next — and that difference decides whether technology keeps paying off.',
      date: '2026',
      read: '6 min read',
      image: '/articles/jawad-siddique/partners-not-vendors.png',
      imageAlt:
        'Illustration contrasting a one-off software vendor with a long-term technology partner working alongside a business',
      body: [
        {
          t: 'p',
          v: 'Most technology disappointment does not begin with bad software. It begins with the wrong relationship. A business buys a product to solve a problem, the product is delivered, and then everyone moves on. The trouble is that the business does not stand still.',
        },
        {
          t: 'p',
          v: "A vendor's job ends at delivery. A partner's job is only beginning. That distinction sounds small, but it shapes everything that follows: how the system is designed, how it is supported, and whether it can adapt when the business changes shape.",
        },
        { t: 'h', v: 'The cost of the hand-off' },
        {
          t: 'p',
          v: 'When technology is delivered and abandoned, the knowledge leaves with it. Six months later, when the business needs to adjust a workflow or connect a new channel, there is nobody left who understands why the system was built the way it was. Every change becomes a small excavation.',
        },
        {
          t: 'q',
          v: 'The strongest technology relationships are built when the client knows they do not have to start again every time the business changes.',
        },
        { t: 'h', v: 'What a partnership actually looks like' },
        {
          t: 'p',
          v: 'A partner begins with the business problem, not the product catalogue. They build with the next requirement already in mind. And they stay present — not to sell more, but because the system’s real value only shows once it is doing real work. That is when the useful questions appear.',
        },
        {
          t: 'p',
          v: 'None of this requires a bigger contract. It requires a different intent: to treat the relationship as the deliverable, and the software as one expression of it.',
        },
      ],
    },
    {
      slug: 'hidden-cost-disconnected-systems',
      topic: 'Systems',
      title: 'The hidden cost of disconnected systems',
      dek: 'Every tool works on its own. Together they quietly tax the business — in re-keyed data, conflicting numbers and decisions made a day too late.',
      date: '2026',
      read: '5 min read',
      image: '/articles/jawad-siddique/hidden-cost-disconnected-systems.png',
      imageAlt:
        'Illustration of disconnected business systems and the hidden coordination cost between them',
      body: [
        {
          t: 'p',
          v: 'Disconnected systems rarely fail loudly. They fail quietly, in the gaps between them — the report that takes a morning to assemble, the number that means one thing in sales and another in finance, the customer who has to repeat themselves because two teams cannot see the same record.',
        },
        { t: 'h', v: 'The tax nobody budgets for' },
        {
          t: 'p',
          v: 'Each of these gaps is small. Added up across a year, they become one of the largest costs a business never puts on a spreadsheet: the cost of coordination. People spend their attention holding systems together by hand instead of doing the work the systems were meant to free them for.',
        },
        { t: 'q', v: 'Your business does not need more software. It needs more clarity.' },
        {
          t: 'p',
          v: 'Connecting systems is not about buying another platform. It is about making sure the ones you already run tell the same story — so that a decision can be made once, from one trusted view, and trusted.',
        },
      ],
    },
    {
      slug: 'practical-ai-for-smes',
      topic: 'AI operations',
      title: 'What practical AI operations look like for small business',
      dek: 'Set aside the spectacle. For most businesses, useful AI is quiet: it captures what was being missed and hands people back their time.',
      date: '2026',
      read: '7 min read',
      image: '/articles/jawad-siddique/practical-ai-for-smes.png',
      imageAlt:
        'Illustration of quiet, practical AI operations capturing missed enquiries for a small business',
      body: [
        {
          t: 'p',
          v: 'The public conversation about AI is loud and abstract. Inside a small business, the useful version is quiet and specific. It is the enquiry that no longer slips through after hours. The lead that lands in one place with a clear next step. The follow-up that no longer depends on someone remembering.',
        },
        { t: 'h', v: 'Start where the pressure is' },
        {
          t: 'p',
          v: 'Practical AI does not begin with a model. It begins with a moment of operational pressure — a place where work piles up, or slips away, or wears the team down. The technology earns its place only if it relieves that pressure without adding new work of its own.',
        },
        { t: 'q', v: 'Your office should not stop working when your team is busy.' },
        {
          t: 'p',
          v: 'Introduced this way, AI is not a leap of faith. It is a series of small, provable improvements a business can actually feel — and that is what makes it worth adopting at all.',
        },
      ],
    },
    {
      slug: 'custom-in-a-saas-world',
      topic: 'Software',
      title: 'Why custom systems still matter in an off-the-shelf world',
      dek: 'Off-the-shelf software is excellent — until the business is asked to reshape itself around it. Sometimes the right fit has to be built.',
      date: '2025',
      read: '6 min read',
      image: '/articles/jawad-siddique/custom-in-a-saas-world.png',
      imageAlt:
        'Illustration contrasting off-the-shelf software with a custom system built to fit the business',
      body: [
        {
          t: 'p',
          v: 'Off-the-shelf software has never been better, and for many needs it is exactly the right answer. The problem appears when a business quietly starts bending its own operations to fit the tool — changing how it works so the software stays happy.',
        },
        {
          t: 'p',
          v: 'When that happens, the tool has stopped serving the business and the business has started serving the tool.',
        },
        { t: 'h', v: 'Fit is a business decision, not a technical one' },
        {
          t: 'p',
          v: 'Custom is not about building everything from scratch. It is about deciding, deliberately, which parts of the operation are distinctive enough to deserve a system shaped around them — and which are better handled by something proven and standard.',
        },
        {
          t: 'q',
          v: 'Technology should adapt to the business, not force the business to adapt to rigid software.',
        },
      ],
    },
    {
      slug: 'trust-before-automation',
      topic: 'AI operations',
      title: 'Building trust before introducing automation',
      dek: 'Automation only helps if people believe it. Trust is earned before the first workflow is switched on — not assumed after.',
      date: '2025',
      read: '5 min read',
      image: '/articles/jawad-siddique/trust-before-automation.png',
      imageAlt:
        'Illustration of a team building trust in automation before switching on the first workflow',
      body: [
        {
          t: 'p',
          v: 'The fastest way to make automation fail is to introduce it before people trust it. A team that does not believe the numbers will quietly keep their own spreadsheet on the side — and now the business has two sources of truth instead of none.',
        },
        { t: 'h', v: 'Trust is built in the open' },
        {
          t: 'p',
          v: 'Trust comes from showing the working: making it clear where data comes from, what the system does with it, and what happens when something looks wrong. Automation adopted with that confidence becomes part of how people work. Imposed without it, it becomes something to work around.',
        },
        {
          t: 'q',
          v: 'The responsibility is not merely to introduce new technology, but to help clients adopt it with confidence and purpose.',
        },
      ],
    },
    {
      slug: 'presence-to-operational-intelligence',
      topic: 'Systems',
      title: 'From digital presence to operational intelligence',
      dek: 'A brand gets a business noticed. Operational intelligence lets it respond — turning attention into something the whole team can act on.',
      date: '2025',
      read: '6 min read',
      image: '/articles/jawad-siddique/presence-to-operational-intelligence.png',
      imageAlt:
        'Illustration of a business moving from digital presence to operational intelligence it can act on',
      body: [
        {
          t: 'p',
          v: 'For years, digital effort meant presence: a good website, a strong brand, a visible social feed. That still matters — but presence only creates attention. What a business does with that attention is a different question entirely.',
        },
        { t: 'h', v: 'The quiet handover' },
        {
          t: 'p',
          v: 'A website enquiry becomes a CRM record. A CRM record reveals a pattern. A pattern exposes a reporting gap. Follow that thread and a business moves from simply being seen to actually understanding itself — from presence to operational intelligence.',
        },
        {
          t: 'q',
          v: 'KEYOB should be able to join the client at any stage and move with them in whichever direction creates the greatest value.',
        },
      ],
    },
  ],
};

export const leaderArticlePages: Record<string, LeaderArticlePage> = {
  'jawad-siddique': jawadArticles,
};

export function getLeaderArticlePage(slug: string): LeaderArticlePage | undefined {
  return leaderArticlePages[slug];
}

export const leaderArticleSlugs = Object.keys(leaderArticlePages);

export function getLeaderArticle(
  leaderSlug: string,
  articleSlug: string,
): { page: LeaderArticlePage; article: LeaderLongArticle } | undefined {
  const page = leaderArticlePages[leaderSlug];
  const article = page?.articles.find((a) => a.slug === articleSlug);
  return page && article ? { page, article } : undefined;
}

export function getAdjacentArticles(
  leaderSlug: string,
  articleSlug: string,
): { prev: LeaderLongArticle | null; next: LeaderLongArticle | null } {
  const list = leaderArticlePages[leaderSlug]?.articles ?? [];
  const i = list.findIndex((a) => a.slug === articleSlug);
  return {
    prev: i > 0 ? list[i - 1] : null,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : null,
  };
}

export function articleMetaDescription(a: LeaderLongArticle): string {
  const text = a.dek || a.body.find((b) => b.t === 'p')?.v || '';
  return text.length > 158 ? `${text.slice(0, 155).trimEnd()}…` : text;
}

// Every (leaderSlug, articleSlug) pair — for the detail route's static params.
export const leaderArticleParams = Object.entries(leaderArticlePages).flatMap(
  ([slug, page]) => page.articles.map((a) => ({ slug, article: a.slug })),
);
