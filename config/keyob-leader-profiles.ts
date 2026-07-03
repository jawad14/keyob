// Leadership detail-page profiles (per leader). Ported from the
// jawad-siddique and saad-khalid reference HTMLs. Add new leaders by
// appending a record and an entry to `leaderProfiles`.

export type LeaderJourneyStep = { n: string; title: string; body: string };
export type LeaderPrinciple = {
  n: string;
  title: string;
  body: string;
  emph: string;
  variant: 'ice' | 'navy' | 'plum';
};
export type LeaderWorkItem = {
  slug: string;
  url: string;
  tag: string;
  name: string;
  copy: string;
};
export type LeaderArticle = {
  category?: string;
  title: string;
  excerpt?: string;
  date?: string;
  readingTime?: string;
  url?: string;
  featured?: boolean;
};
export type LeaderEvent = {
  name: string;
  type?: string;
  location?: string;
  date?: string;
  role?: string;
  reflection?: string;
  link?: string;
  visible?: boolean;
};
export type LeaderResource = {
  title: string;
  type: string;
  url?: string | null;
};
export type LeaderPathway = {
  startLineA: string;
  startLineB: string;
  loopLabel: string;
  branches: string[];
};
export type LeaderHumanSection = {
  eyebrow: string;
  headingPrefix: string;
  headingEm: string;
  paragraphs: string[];
  quote: string;
  photoAlt: string;
  photoNote: string;
};
export type LeaderSnapshotItem = { icon: 'pin' | 'building' | 'list' | 'globe' | 'governance'; text: string };
export type LeaderSnapshotLink = { href: string; label: string; icon: 'linkedin' | 'articles' | 'events' | 'chat'; accent?: boolean };

export type LeaderProfile = {
  slug: string;
  name: string;
  role: string;
  regionLabel: string;
  identityStatement: string;
  portraitAlt: string;
  portraitNote: string;
  accent: { plum: string; plumMist: string; plumSoft: string };
  thought: { quote: string; emphasis: string; caption: string };
  snapshot: { items: LeaderSnapshotItem[]; links: LeaderSnapshotLink[] };
  nav: { label: string; section: string }[];
  story: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    paragraphs: string[];
    steps: LeaderJourneyStep[];
    highlight: string;
  };
  philosophy: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    principles: LeaderPrinciple[];
  };
  keyob: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    paragraphs: string[];
    phrasePrefix: string;
    phraseEm: string;
    pathway: LeaderPathway;
  };
  articles: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    lead?: string;
    items: LeaderArticle[];
    emptyMessage: string;
    featuredCta: string;
  };
  events: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    items: LeaderEvent[];
    emptyMessage: string;
  };
  work: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    items: LeaderWorkItem[];
  };
  human: LeaderHumanSection;
  media: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    speakingTopics: string[];
    resources: LeaderResource[];
    note: string;
  };
  connect: {
    eyebrow: string;
    headingPrefix: string;
    headingEm: string;
    lead: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    tertiaryCta: { href: string; label: string };
    closing: string;
  };
};

const SHARED_NAV = [
  { label: 'Story', section: 'story' },
  { label: 'Philosophy', section: 'philosophy' },
  { label: 'KEYOB', section: 'keyob' },
  { label: 'Articles', section: 'articles' },
  { label: 'Events', section: 'events' },
  { label: 'Selected Work', section: 'work' },
  { label: 'Media', section: 'media' },
  { label: 'Connect', section: 'connect' },
];

const jawad: LeaderProfile = {
  slug: 'jawad-siddique',
  name: 'Jawad Siddique',
  role: 'Founder and CEO, KEYOB',
  regionLabel: 'Leadership · Australia',
  identityStatement:
    'Building technology partnerships that grow with the business — not around a fixed product.',
  portraitAlt: 'Jawad Siddique, Founder and CEO of KEYOB',
  portraitNote: 'Approved editorial portrait of Jawad Siddique',
  accent: { plum: '#34264f', plumMist: '#f2eef6', plumSoft: '#6b5a8a' },
  thought: {
    quote: 'Technology should not make a business more dependent on complexity. It should give people greater',
    emphasis: 'clarity, confidence and control.',
    caption: 'Jawad Siddique on practical transformation',
  },
  snapshot: {
    items: [
      { icon: 'pin', text: 'Based in Australia' },
      { icon: 'building', text: 'Founder and CEO of KEYOB' },
      { icon: 'list', text: 'Software, data and AI transformation' },
      { icon: 'globe', text: 'Long-term technology partnerships' },
      { icon: 'globe', text: 'Global delivery & business modernisation' },
    ],
    links: [
      { href: 'https://www.linkedin.com/in/jawad-siddique-80a4003b/', label: 'LinkedIn', icon: 'linkedin' },
      { href: '/leadership-team/jawad-siddique/articles', label: 'Articles', icon: 'articles' },
      { href: '#events', label: 'Events', icon: 'events' },
      { href: '#connect', label: 'Start a conversation', icon: 'chat', accent: true },
    ],
  },
  nav: SHARED_NAV,
  story: {
    eyebrow: 'The journey',
    headingPrefix: 'A business relationship should become',
    headingEm: 'more valuable with time.',
    paragraphs: [
      'Jawad Siddique founded KEYOB around a simple belief: businesses should not be forced to reshape themselves around rigid technology. Technology should adapt to the organisation, understand its operations and continue evolving as the business grows.',
      "That belief shaped KEYOB's approach from the beginning. Instead of entering client relationships with a fixed product or a narrow service boundary, Jawad encouraged the team to begin with the real business problem.",
      'Sometimes that starting point is an ERP. Sometimes it is a website, a CRM, a data platform, a customer workflow, an AI receptionist or an operational issue that has been slowing the organisation down for years. The entry point may change, but the responsibility remains the same: understand the business properly, build with care and stay close enough to support what comes next.',
    ],
    steps: [
      { n: '01', title: 'Understanding the business', body: 'Begin with the real problem, not a product.' },
      { n: '02', title: 'Building the right foundation', body: 'Design around how the organisation actually works.' },
      { n: '03', title: 'Supporting real operations', body: 'Prove value once it reaches daily work.' },
      { n: '04', title: 'Evolving with changing needs', body: 'Adapt as the business grows and shifts.' },
      { n: '05', title: 'Expanding into new areas', body: 'Move where the next value appears.' },
      { n: '06', title: 'Preparing for what comes next', body: 'Stay ready for the requirement after this one.' },
    ],
    highlight:
      'Clients may come to KEYOB for one requirement. The relationship should be ready for every requirement that follows.',
  },
  philosophy: {
    eyebrow: 'How he leads',
    headingPrefix: 'Calm thinking. Practical action.',
    headingEm: 'Long-term responsibility.',
    principles: [
      {
        n: '01',
        title: 'Understand before recommending',
        body: 'The most important part of a technology engagement often happens before development begins. Jawad places strong emphasis on discovery, business context and understanding where operational pressure actually exists.',
        emph: 'Listen first.',
        variant: 'ice',
      },
      {
        n: '02',
        title: 'Build around real work',
        body: 'Technology must support the way people sell, serve, manage, communicate and make decisions. A technically impressive system has little value if it creates more work for the people using it.',
        emph: 'Make it useful.',
        variant: 'navy',
      },
      {
        n: '03',
        title: 'Stay beyond launch',
        body: "A system begins proving its value after it enters real operations. KEYOB's long-term client relationships reflect Jawad's belief that improvement, support and adaptation are part of the work — not an afterthought.",
        emph: 'Stay involved.',
        variant: 'plum',
      },
      {
        n: '04',
        title: 'Prepare clients for change',
        body: 'AI, automation and data are changing how businesses operate. The responsibility is not merely to introduce new technology, but to help clients adopt it with confidence and purpose.',
        emph: 'Build for change.',
        variant: 'ice',
      },
    ],
  },
  keyob: {
    eyebrow: 'Building KEYOB',
    headingPrefix: 'From a software company to a',
    headingEm: 'lifelong business transformation partner.',
    paragraphs: [
      "Under Jawad's leadership, KEYOB has continued moving beyond conventional software delivery. The company now works across branding, web experiences, SEO, AEO, GEO, social presence, CRM, ERP, data platforms, workflow automation, AI operations and system integration.",
      'This expansion is not about offering an endless list of services. It reflects the reality that business challenges do not remain inside one category. A branding issue may become a website challenge. A website inquiry may become a CRM workflow. A CRM workflow may reveal a reporting gap. A reporting gap may lead to integration, automation or an AI-enabled operating layer.',
      "Jawad's view is that KEYOB should be able to join the client at any stage and move with them in whichever direction creates the greatest value.",
    ],
    phrasePrefix: 'Enter at any stage. Move in any direction.',
    phraseEm: 'Grow through one trusted partnership.',
    pathway: {
      startLineA: 'A real',
      startLineB: 'business need',
      loopLabel: '↻ Continuous modernisation',
      branches: [
        'Brand & market presence',
        'Digital experience',
        'CRM & customer operations',
        'ERP & core systems',
        'Data & business intelligence',
        'Automation & AI operations',
      ],
    },
  },
  articles: {
    eyebrow: "From Jawad's desk",
    headingPrefix: 'Ideas about business, technology',
    headingEm: 'and what comes next.',
    lead: 'Perspectives on partnership, clarity and practical transformation.',
    items: [],
    emptyMessage: 'More ideas from Jawad are being prepared.',
    featuredCta: 'Read article',
  },
  events: {
    eyebrow: 'In conversation',
    headingPrefix: 'The rooms, discussions and ideas',
    headingEm: 'shaping the future of business.',
    items: [],
    emptyMessage: 'Upcoming conversations and appearances will be shared here.',
  },
  work: {
    eyebrow: 'Work in practice',
    headingPrefix: 'Leadership becomes meaningful when it',
    headingEm: 'reaches real businesses.',
    items: [
      {
        slug: 'best-value-auto-body-supply',
        url: '/stories/best-value-custom-erp',
        tag: 'Custom ERP · Long-term partnership',
        name: 'Best Value Auto Body Supply',
        copy: 'A relationship that began with custom ERP development and continued through nearly a decade of operational evolution, system improvement and digital modernisation.',
      },
      {
        slug: 'investment-markets-australia',
        url: '/stories/investment-markets-australia',
        tag: 'Platform delivery · Launch readiness',
        name: 'Investment Markets Australia',
        copy: 'A time-sensitive platform engagement where structured delivery, technical focus and calm execution helped move a complex portal toward launch readiness.',
      },
      {
        slug: 'international-coaching-institute',
        url: '/stories/international-coaching-institute',
        tag: 'BI platform · One trusted view',
        name: 'International Coaching Institute',
        copy: 'A fragmented business-data landscape transformed into one trusted view for leadership, marketing, sales and operations.',
      },
      {
        slug: 'automart-auto-body-supply',
        url: '/stories/automart-nationwide',
        tag: 'Service automation · Routing',
        name: 'Automart Auto Body Supply',
        copy: 'An existing automotive ERP partnership extended into customer-service automation, queue visibility and smarter request routing.',
      },
      {
        slug: 'aleesa-ai',
        url: '/stories/aleesa-ai',
        tag: 'AI operations · Automated office',
        name: 'Aleesa.ai',
        copy: 'A real clinic requirement that evolved from an AI receptionist into a multi-channel automated office for growing businesses.',
      },
    ],
  },
  human: {
    eyebrow: 'Beyond the role',
    headingPrefix: 'Leadership is also about how people',
    headingEm: 'experience the journey.',
    paragraphs: [
      "Jawad's leadership style is grounded in relationships. He believes clients should feel that their technology partner understands the pressure behind the requirement — not only the technical specification.",
      'Internally, that same principle shapes how teams are encouraged to work: stay curious, communicate clearly, take responsibility and remember that every system ultimately affects real people doing real work.',
      'For Jawad, professionalism is not distance. It is reliability, clarity and the confidence that someone will still be present when the next challenge arrives.',
    ],
    quote:
      'The strongest technology relationships are built when the client knows they do not have to start again every time the business changes.',
    photoAlt: 'Jawad Siddique in conversation with the KEYOB team',
    photoNote: 'A natural, candid photo of Jawad with clients, partners or the KEYOB team — not a formal portrait.',
  },
  media: {
    eyebrow: 'Profile resources',
    headingPrefix: 'Media, profile',
    headingEm: 'and speaking.',
    speakingTopics: [
      'Practical AI for growing businesses',
      'Building technology partnerships that last',
      'From fragmented systems to operational clarity',
      'Custom software in an off-the-shelf world',
      'Preparing businesses for AI-enabled operations',
      'Why digital transformation must begin with the business process',
    ],
    resources: [
      { title: 'Professional biography', type: 'Profile', url: null },
      { title: 'Approved headshot', type: 'Image', url: null },
      { title: 'Media profile', type: 'PDF', url: null },
      { title: 'Speaking enquiries', type: 'Contact', url: '/contact#contact' },
      { title: 'LinkedIn profile', type: 'Link', url: 'https://www.linkedin.com/in/jawad-siddique-80a4003b/' },
    ],
    note: 'Media and profile assets are made available on request. Items appear here once approved and uploaded.',
  },
  connect: {
    eyebrow: 'Connect',
    headingPrefix: 'Start with the',
    headingEm: 'business conversation.',
    lead: 'Whether the challenge begins with software, data, AI, customer operations, business systems or digital growth, the first step is understanding where the organisation is today — and where it needs to move next.',
    primaryCta: { href: '/contact#contact', label: 'Start a conversation' },
    secondaryCta: { href: 'https://www.linkedin.com/in/jawad-siddique-80a4003b/', label: 'Connect on LinkedIn' },
    tertiaryCta: { href: '/', label: 'Explore KEYOB →' },
    closing: 'One conversation can become the beginning of a long-term transformation partnership.',
  },
};

const saad: LeaderProfile = {
  slug: 'saad-khalid',
  name: 'Saad Khalid',
  role: 'Director, Strategy and Partnerships · KEYOB',
  regionLabel: 'Leadership · Australia',
  identityStatement:
    'Working at the intersection of storytelling, strategy and systems change — so institutions connect with diverse communities at scale.',
  portraitAlt: 'Saad Khalid, Director of Strategy and Partnerships at KEYOB',
  portraitNote: 'Approved editorial portrait of Saad Khalid',
  accent: { plum: '#9a4f2a', plumMist: '#f7ede6', plumSoft: '#c77f54' },
  thought: {
    quote: 'The question that started everything was simple: whose stories are remembered in the national narrative — and',
    emphasis: 'whose are left out.',
    caption: 'Saad Khalid on multicultural media and memory',
  },
  snapshot: {
    items: [
      { icon: 'pin', text: 'Based in Australia' },
      { icon: 'building', text: 'Director, Strategy & Partnerships at KEYOB' },
      { icon: 'list', text: 'Multicultural & ethnic media leader' },
      { icon: 'globe', text: 'Strategy, storytelling & systems change' },
      { icon: 'governance', text: 'Board director & community advisor' },
    ],
    links: [
      { href: 'https://www.linkedin.com/in/saadkhalid2021/', label: 'LinkedIn', icon: 'linkedin' },
      { href: '#articles', label: 'Newsletter', icon: 'articles' },
      { href: '#events', label: 'Recognition', icon: 'events' },
      { href: '#connect', label: 'Start a conversation', icon: 'chat', accent: true },
    ],
  },
  nav: [
    { label: 'Story', section: 'story' },
    { label: 'Approach', section: 'philosophy' },
    { label: 'At KEYOB', section: 'keyob' },
    { label: 'Newsletter', section: 'articles' },
    { label: 'Recognition', section: 'events' },
    { label: 'Boards', section: 'work' },
    { label: 'Media', section: 'media' },
    { label: 'Connect', section: 'connect' },
  ],
  story: {
    eyebrow: 'The journey',
    headingPrefix: 'From a question about memory to',
    headingEm: 'a career in narrative and change.',
    paragraphs: [
      'Saad Khalid began his career as a content creator and podcaster, asking a question that has shaped everything since: who gets remembered as a pioneer in Australia, and whose stories are left out of the national narrative.',
      "That question took him across Outback Australia, listening to communities and uncovering the overlooked stories of multicultural heroes who helped shape the country during the 1800s. Born in Pakistan and having migrated to Australia in 2016, he understood first-hand how much of a nation's story lives in the communities its records tend to forget.",
      'Since then, his work has grown into leading communications, media, engagement and community-facing projects that help institutions connect more meaningfully with diverse communities at scale. He works at the intersection of strategy, storytelling, public-interest communication and systems change — and was named a 2024 Young Australian of the Year finalist.',
    ],
    steps: [
      { n: '01', title: 'Asking the question', body: 'Whose stories are remembered — and whose are left out.' },
      { n: '02', title: 'Listening on the ground', body: 'Across Outback Australia, uncovering overlooked histories.' },
      { n: '03', title: 'Telling them well', body: 'Content, podcasting and ethnic-media storytelling.' },
      { n: '04', title: 'Leading at scale', body: 'Communications, media and community engagement.' },
      { n: '05', title: 'Shaping systems', body: 'Boards, advisory groups and public-interest work.' },
      { n: '06', title: "Building what's next", body: 'Trust infrastructure for the age of narrative risk.' },
    ],
    highlight:
      'At the heart of the work is a single intention: to make a lasting impact — and to help boardrooms and institutions better reflect the communities they serve.',
  },
  philosophy: {
    eyebrow: 'How he works',
    headingPrefix: 'Listen deeply. Tell it honestly.',
    headingEm: 'Change the system.',
    principles: [
      {
        n: '01',
        title: 'Start with who is missing',
        body: 'The most important part of any narrative is often the part that has been left out. Saad begins with the communities and voices the national story tends to overlook — and builds the work around them.',
        emph: 'Find the gap.',
        variant: 'ice',
      },
      {
        n: '02',
        title: 'Storytelling as infrastructure',
        body: 'Stories are not decoration. They shape what institutions notice, trust and fund. Saad treats media and communication as serious infrastructure for how diverse communities are seen and served.',
        emph: 'Make it matter.',
        variant: 'navy',
      },
      {
        n: '03',
        title: 'Representation in the room',
        body: 'Across boards, advisory groups and committees, Saad is committed to strengthening governance and helping ensure boardrooms better reflect the diversity of the communities they serve.',
        emph: 'Change who decides.',
        variant: 'plum',
      },
      {
        n: '04',
        title: 'Build for lasting impact',
        body: 'From engagement projects to civic technology, the measure is not visibility but durability — work that keeps serving communities long after the campaign or the moment has passed.',
        emph: 'Make it last.',
        variant: 'ice',
      },
    ],
  },
  keyob: {
    eyebrow: 'At KEYOB',
    headingPrefix: 'Connecting technology to the',
    headingEm: 'communities it should serve.',
    paragraphs: [
      "As Director of Strategy and Partnerships, Saad brings a different lens to a technology company: the lens of communities, communication and public trust. KEYOB builds software, data and AI systems — and Saad helps make sure that work reaches, includes and earns the confidence of the diverse communities it ultimately touches.",
      "His background sits naturally alongside KEYOB's: storytelling shapes how a brand is understood, engagement shapes how a CRM is actually used, and trust shapes whether a community adopts a new digital service at all. Strategy and partnerships are where those threads meet.",
      'It is a continuation of the same intention that has run through his whole career — helping institutions connect more meaningfully with the people they exist to serve.',
    ],
    phrasePrefix: 'Start with the community. Build the trust.',
    phraseEm: 'Let the technology follow.',
    pathway: {
      startLineA: 'A community',
      startLineB: 'to reach',
      loopLabel: '↻ Trust, earned over time',
      branches: [
        'Strategy & partnerships',
        'Multicultural engagement',
        'Media & communications',
        'Public-interest comms',
        'Civic & gov technology',
        'Systems change',
      ],
    },
  },
  articles: {
    eyebrow: "From Saad's desk",
    headingPrefix: 'Making a Pioneer',
    headingEm: 'in Australia.',
    lead: "A biweekly newsletter unearthing the overlooked contributions of multicultural communities to Australia's past and present.",
    items: [
      {
        featured: true,
        category: 'Newsletter · Biweekly',
        title: 'Making a Pioneer in Australia',
        excerpt:
          "Unearthing the overlooked contributions of multicultural communities to Australia's past and present — published biweekly to a growing community of readers.",
        date: 'Biweekly',
        readingTime: 'Newsletter',
        url: 'https://www.linkedin.com/in/saadkhalid2021/',
      },
    ],
    emptyMessage: 'More writing from Saad is being prepared.',
    featuredCta: 'Read the newsletter',
  },
  events: {
    eyebrow: 'Recognition',
    headingPrefix: 'Work that has been',
    headingEm: 'seen and celebrated.',
    items: [
      {
        name: 'Young Australian of the Year — Finalist',
        type: 'Award · 2024',
        location: 'Australian of the Year Awards',
        role: 'National finalist',
        reflection:
          'Recognised nationally for work amplifying multicultural communities and media.',
      },
      {
        name: 'OECD Co-Creation Bootcamp — Winner',
        type: 'Award · 2025',
        location: 'Lisbon, Portugal',
        role: 'Winning team — "OnRecord"',
        reflection:
          'A prototype tool for empowering underrepresented voices in participatory processes.',
      },
      {
        name: 'Youth Presenter of the Year',
        type: 'Award',
        location: "NEMBC · Brisbane Town Hall Gala",
        role: "National Ethnic & Multicultural Broadcasters' Council",
        reflection:
          'Honoured for presenting and storytelling across ethnic and multicultural media.',
      },
      {
        name: 'Outstanding Contribution to Young People',
        type: 'Award · 2022',
        location: 'Youth Coalition of the ACT',
        role: 'Recipient',
        reflection:
          'Acknowledging sustained contribution to young people in the ACT community.',
      },
      {
        name: 'Neighbours Every Day — National Winner',
        type: 'Award · 2026',
        location: 'Relationships Australia',
        role: '"Tell Us Your Story" competition',
        reflection: 'A national story award celebrating connection and belonging.',
      },
      {
        name: 'Young Global Shaper',
        type: 'Appointment',
        location: 'World Economic Forum',
        role: 'Vice Curator',
        reflection:
          'Part of a global community of young leaders driving local and global change.',
      },
    ],
    emptyMessage: 'Upcoming conversations and appearances will be shared here.',
  },
  work: {
    eyebrow: 'Boards & advisory',
    headingPrefix: 'Strengthening governance,',
    headingEm: 'so boardrooms reflect their communities.',
    items: [
      {
        slug: 'relationships-australia',
        url: '#',
        tag: 'Board Member & Non-Executive Director',
        name: 'Relationships Australia (Canberra & Region)',
        copy: 'Governance oversight for an organisation delivering family and community services across the Canberra region.',
      },
      {
        slug: 'aaah',
        url: '#',
        tag: 'Board Member & Non-Executive Director',
        name: 'Australian Association for Adolescent Health',
        copy: 'Helping guide a national body focused on the health and wellbeing of young people.',
      },
      {
        slug: 'university-of-sydney',
        url: '#',
        tag: 'Inaugural Chair · Community Panel',
        name: 'University of Sydney — Health Literacy Lab',
        copy: 'Chairing the Community Advisory Panel for the Sydney Health Literacy Lab, bringing community voice into health research.',
      },
      {
        slug: 'community-broadcasting-foundation',
        url: '#',
        tag: 'Sector Investment Advisory Committee',
        name: 'Community Broadcasting Foundation',
        copy: 'Advising on allocation strategy for a national fund supporting community broadcasting across Australia.',
      },
      {
        slug: 'vicscreen',
        url: '#',
        tag: 'Board Observer · The Observership Program',
        name: 'VicScreen',
        copy: 'Contributing strategic insight on multicultural audiences and public investment in the screen sector.',
      },
      {
        slug: 'standards-australia',
        url: '#',
        tag: 'National Representative · Technical Committee',
        name: 'Standards Australia (SF047)',
        copy: 'Representing community perspectives in national standards-setting work.',
      },
    ],
  },
  human: {
    eyebrow: 'Beyond the role',
    headingPrefix: 'A migrant teenager who became a',
    headingEm: 'voice for many.',
    paragraphs: [
      "Saad's own journey — from arriving in Australia in 2016 to being named a 2024 Young Australian of the Year finalist — sits at the heart of his work. He understands, first-hand, what it means to look for yourself in a national story and not quite find it.",
      'That experience shapes how he leads: with curiosity, with care for the people behind every statistic, and with a belief that institutions become stronger when the communities they serve can see themselves reflected in the room.',
      "His causes run through everything — civil rights and social action, economic empowerment, human rights, and the simple conviction that no community should be left out of the country's memory.",
    ],
    quote:
      'At the heart of the work is one intention — to make a lasting impact, and to help ensure boardrooms better reflect the communities they serve.',
    photoAlt:
      'Saad Khalid with Rachel Stephen-Smith, Health Minister of the Australian Capital Territory',
    photoNote:
      'A natural, candid photo of Saad — speaking, with community members, or at a recognition moment — not a formal portrait.',
  },
  media: {
    eyebrow: 'Profile resources',
    headingPrefix: 'Media, profile',
    headingEm: 'and speaking.',
    speakingTopics: [
      'Multicultural and ethnic media in Australia',
      'Whose stories shape the national narrative',
      'Engaging migrant communities at scale',
      'Governance and boardroom diversity',
      'Storytelling as public-interest infrastructure',
      'Civic and government technology for trust',
    ],
    resources: [
      { title: 'Professional biography', type: 'Profile', url: null },
      { title: 'Approved headshot', type: 'Image', url: null },
      { title: 'Media profile', type: 'PDF', url: null },
      { title: 'Speaking enquiries', type: 'Contact', url: '/contact#contact' },
      { title: 'Making a Pioneer (newsletter)', type: 'Newsletter', url: 'https://www.linkedin.com/in/saadkhalid2021/' },
      { title: 'LinkedIn profile', type: 'Link', url: 'https://www.linkedin.com/in/saadkhalid2021/' },
    ],
    note: 'Media and profile assets are made available on request. Items appear here once approved and uploaded.',
  },
  connect: {
    eyebrow: 'Connect',
    headingPrefix: 'Start with the',
    headingEm: 'conversation that matters.',
    lead: 'Whether it begins with multicultural media, community engagement, governance, partnerships or civic technology, the first step is the same: understanding the people at the centre of it — and how to serve them better.',
    primaryCta: { href: '/contact#contact', label: 'Start a conversation' },
    secondaryCta: { href: 'https://www.linkedin.com/in/saadkhalid2021/', label: 'Connect on LinkedIn' },
    tertiaryCta: { href: '/', label: 'Explore KEYOB →' },
    closing: 'One conversation can become the beginning of work that lasts.',
  },
};

export const leaderProfiles: LeaderProfile[] = [jawad, saad];

export function getLeaderProfile(slug: string): LeaderProfile | undefined {
  return leaderProfiles.find((p) => p.slug === slug);
}

export const leaderProfileSlugs = leaderProfiles.map((p) => p.slug);
