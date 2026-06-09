// Data for /leadership-team — ported from leadership-team.html.

export type LtLeader = {
  name: string;
  region: string;
  role: string;
  quote: string;
  message: string;
  link?: string;
  photo?: string;
};

export const ltLeaders: LtLeader[] = [
  {
    name: 'Jawad Siddique',
    region: 'Australia',
    role: 'Founder / CEO — KEYOB',
    quote:
      'Most businesses do not need more disconnected tools. They need the right systems, connected properly, so their teams can work with more clarity and confidence.',
    message:
      'Jawad leads KEYOB with a focus on practical AI, long-term client trust, and technology that creates measurable business value.',
    photo: '/jawad-siddique-au.png',
  },
  {
    name: 'Ehsan Alvi',
    region: 'Australia',
    role: 'Strategic Leadership / Business Growth',
    quote:
      'The right technology partner does not simply deliver a project. It helps the client think clearly, move confidently, and prepare for what comes next.',
    message:
      "Ehsan contributes to KEYOB's Australian leadership presence, supporting strategic direction, client relationships, and business growth initiatives.",
    link: 'https://www.linkedin.com/in/ehsanalvi/',
    photo: '/ehsan-alvi-au.png',
  },
  {
    name: 'Saad Khalid',
    region: 'Australia',
    role: 'Director, Strategy and Partnerships — KEYOB Australia',
    quote:
      'Technology earns trust when people can understand it, use it, and see how it improves real lives.',
    message:
      'As Director, Strategy and Partnerships at KEYOB Australia, Saad helps bridge technology, trust, and real-world adoption — bringing strong experience across health, media, government, and social impact sectors.',
    photo: '/saad-khalid-au.png',
  },
  {
    name: 'Paul',
    region: 'Australia',
    role: 'Strategic Leadership / Business Growth',
    quote:
      'The right technology partner does not simply deliver a project. It helps the client think clearly, move confidently, and prepare for what comes next.',
    message:
      "Paul contributes to KEYOB's Australian leadership presence, supporting strategic direction, client relationships, and business growth initiatives.",
    photo: '/paul-au.png',
  },
  {
    name: 'Faris',
    region: 'Australia',
    role: 'Strategic Leadership / Business Growth',
    quote:
      'The right technology partner does not simply deliver a project. It helps the client think clearly, move confidently, and prepare for what comes next.',
    message:
      "Faris contributes to KEYOB's Australian leadership presence, supporting strategic direction, client relationships, and business growth initiatives.",
    photo: '/faris-au.png',
  },
  {
    name: 'Asif Malik',
    region: 'United States',
    role: 'Client Engagement / North America',
    quote:
      'Clients trust teams that listen carefully, respond professionally, and keep showing up after the first delivery.',
    message:
      "Asif represents KEYOB's client-facing presence in the United States, supporting business relationships, regional engagement, and long-term growth conversations.",
    link: 'https://www.facebook.com/asifmaliksh',
    photo: '/asif-malik-usa.png',
  },
  {
    name: 'Rehman Shafiq',
    region: 'Sweden',
    role: 'Regional Leadership / European Partnerships',
    quote:
      'Modern technology partnerships work best when they are built on clarity, communication, and a shared understanding of where the business is going.',
    message:
      "Rehman supports KEYOB's European presence with a focus on partnerships, strategic conversations, and helping clients approach technology decisions with confidence.",
    link: 'https://www.linkedin.com/in/rehmanshafiq/',
    photo: '/rehman-shafiq-se.png',
  },
  {
    name: 'Mansoor Ahmad Samar',
    region: 'Pakistan',
    role: 'Technology Leadership / Delivery Operations',
    quote:
      'Good software is not only about writing code. It is about understanding how a business works and building systems that make daily operations stronger.',
    message:
      "Mansoor supports KEYOB's technical delivery, software architecture, ERP systems, CRM integrations, automation, and operational technology execution.",
    link: 'https://www.linkedin.com/in/mansoor-ahmad-samar-564b8229/',
    photo: '/mansoor-ahmad-samar-pk.png',
  },
];

export type LtPhilosophy = { n: string; title: string; body: string };
export const ltPhilosophy: LtPhilosophy[] = [
  { n: '01', title: 'Stay close', body: 'We keep communication clear and remain involved when priorities shift.' },
  { n: '02', title: 'Think ahead', body: 'We help clients prepare for change instead of reacting late.' },
  { n: '03', title: 'Build properly', body: 'We do not rush into tools before understanding the business process.' },
  { n: '04', title: 'Improve continuously', body: 'We treat systems as living business assets, not one-time deliveries.' },
];

export type LtTile = {
  caption: string;
  span: 'wide' | 'tall' | 'none';
  image?: string;
};
export const ltTiles: LtTile[] = [
  { caption: 'Design reviews', span: 'tall', image: '/team-design-reviews.png' },
  { caption: 'Engineering delivery', span: 'wide', image: '/team-engineering-delivery.png' },
  { caption: 'AI workflow planning', span: 'none', image: '/team-ai-workflow.png' },
  { caption: 'Client support', span: 'none', image: '/team-client-support.png' },
  { caption: 'Inside the studio', span: 'none', image: '/keyob-pakistan-office.png' },
  { caption: 'Team culture', span: 'wide', image: '/keyob-pakistan-team.png' },
];

export type LtFlowStep = { n: string; title: string; body: string };
export const ltFlow: LtFlowStep[] = [
  { n: '01', title: 'Strategy', body: 'Understanding the business problem and the right path forward.' },
  { n: '02', title: 'Design', body: 'Creating interfaces and experiences that make systems easier to use.' },
  { n: '03', title: 'Engineering', body: 'Building reliable software, integrations, portals, CRMs, ERPs, and dashboards.' },
  { n: '04', title: 'Automation & AI', body: 'Applying AI where it creates practical value.' },
  { n: '05', title: 'Support', body: 'Staying close as systems evolve and clients grow.' },
];

export const ltRegions = ['Australia', 'United States', 'Sweden', 'Pakistan', 'KSA', 'UAE'];
