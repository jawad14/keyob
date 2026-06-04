export type WwdStage = {
  title: string;
  label: 'Start here' | 'Enter here' | 'Connect next' | 'Scale with AI';
  who: string;
  services: string[];
  outcome: string;
};

export type WwdStageCard = { question: string; startWith: string };
export type WwdPath = { eyebrow: string; title: string; steps: string[]; body: string };
export type WwdFaqItem = { q: string; a: string };
export type WwdMethodStep = { n: string; name: string; body: string };

export const wwdStages: WwdStage[] = [
  {
    title: 'Brand & Positioning',
    label: 'Start here',
    who: 'Businesses that need clarity before they scale their digital presence.',
    services: [
      'Brand strategy',
      'Logo & visual identity',
      'Messaging & positioning',
      'Business narrative',
      'Website content direction',
      'Founder/CEO positioning',
    ],
    outcome: 'Your business becomes easier to understand, trust, and remember.',
  },
  {
    title: 'Website & Digital Presence',
    label: 'Enter here',
    who: 'Businesses that need a professional digital front door.',
    services: [
      'Website design',
      'UI/UX design',
      'Website development',
      'Landing pages',
      'Story pages',
      'Conversion-focused pages',
      'Performance & structure',
    ],
    outcome: 'Your website becomes a business asset, not just an online brochure.',
  },
  {
    title: 'Search, Visibility & Authority',
    label: 'Enter here',
    who: 'Businesses that need to be found, trusted, and recommended.',
    services: [
      'SEO',
      'AEO — Answer Engine Optimization',
      'GEO — Generative Engine Optimization',
      'Technical SEO audits',
      'Content strategy',
      'News & insight pages',
      'Local search',
      'Authority content',
    ],
    outcome:
      'Your business becomes discoverable across search engines, AI answer engines, and industry conversations.',
  },
  {
    title: 'Social Media & Demand Generation',
    label: 'Connect next',
    who: 'Businesses that need consistent market presence and lead generation.',
    services: [
      'Social media management',
      'Campaign content',
      'Brand storytelling',
      'Founder-led content',
      'Case study posts',
      'Lead capture flows',
      'Paid campaign support',
      'Content calendars',
    ],
    outcome:
      'Your digital presence starts attracting, educating, and converting the right audience.',
  },
  {
    title: 'CRM, Sales & Customer Systems',
    label: 'Enter here',
    who: 'Businesses that receive leads but do not manage them properly.',
    services: [
      'CRM setup',
      'Custom CRM development',
      'Existing CRM integration',
      'Lead management workflows',
      'Sales pipeline automation',
      'Customer communication flows',
      'CRM dashboards',
      'Form & campaign integrations',
    ],
    outcome:
      'Every lead, customer, and opportunity becomes visible, trackable, and manageable.',
  },
  {
    title: 'ERP & Operational Systems',
    label: 'Connect next',
    who: 'Businesses that need control over daily operations.',
    services: [
      'ERP implementation',
      'Custom ERP development',
      'Existing ERP enhancement',
      'Inventory systems',
      'Finance & accounting workflows',
      'Procurement systems',
      'HR & payroll integrations',
      'Warehouse, logistics & reporting',
      'System-to-system integration',
    ],
    outcome:
      'Your business operations become structured, measurable, and easier to scale.',
  },
  {
    title: 'AI Workflows & Intelligent Automation',
    label: 'Scale with AI',
    who: 'Businesses that want AI to create real operational value, not just experiments.',
    services: [
      'AI opportunity assessment',
      'Workflow automation',
      'AI assistants',
      'Document automation',
      'Reporting automation',
      'RAG knowledge systems',
      'Customer support automation',
      'Internal process automation',
      'AI + CRM/ERP/web integration',
    ],
    outcome:
      'Your team gets time back, processes become faster, and your systems start doing more of the work.',
  },
  {
    title: 'Business Intelligence & Decision Systems',
    label: 'Scale with AI',
    who: 'Businesses that need real-time visibility and better decision-making.',
    services: [
      'Dashboards',
      'KPI tracking',
      'Operational reporting',
      'Sales analytics',
      'Customer health scores',
      'Financial visibility',
      'Executive dashboards',
      'Multi-platform data consolidation',
    ],
    outcome:
      'Leadership can see what is happening, understand what matters, and act earlier.',
  },
];

export const wwdStageCards: WwdStageCard[] = [
  { question: 'We need to look more professional.', startWith: 'Branding & Website' },
  { question: 'People visit our website but do not convert.', startWith: 'UX, Website & Conversion Strategy' },
  { question: 'We are not visible enough online.', startWith: 'SEO, AEO, GEO & Content' },
  { question: 'We get leads but cannot manage them properly.', startWith: 'CRM & Sales Automation' },
  { question: 'Our operations are too manual.', startWith: 'ERP, Workflow & Process Automation' },
  { question: 'Our systems do not talk to each other.', startWith: 'Integration & Data Architecture' },
  { question: 'We want to use AI but do not know where to begin.', startWith: 'Free AI Assessment' },
  { question: 'We need better dashboards and reporting.', startWith: 'Business Intelligence' },
];

export const wwdPaths: WwdPath[] = [
  {
    eyebrow: 'Journey 1 · New or repositioning business',
    title: 'Look credible, communicate clearly',
    steps: ['Branding', 'Website', 'SEO/AEO', 'Social', 'Lead capture', 'CRM'],
    body: 'For businesses that need to look credible, communicate clearly, and begin attracting the right audience.',
  },
  {
    eyebrow: 'Journey 2 · Growing business, manual processes',
    title: 'Take the pressure off a busy team',
    steps: ['CRM', 'Workflow automation', 'ERP integration', 'Dashboards', 'AI assistants'],
    body: 'For businesses where the team is busy, processes are manual, and growth is creating operational pressure.',
  },
  {
    eyebrow: 'Journey 3 · Established business, existing systems',
    title: 'Connect what you already run',
    steps: ['System audit', 'CRM/ERP integration', 'Data layer', 'Reporting', 'AI workflows'],
    body: 'For businesses that already use tools but need them connected into one reliable operating layer.',
  },
  {
    eyebrow: 'Journey 4 · AI-ready business',
    title: 'Explore AI practically and safely',
    steps: ['AI assessment', 'Process mapping', 'Automation design', 'Pilot workflow', 'Scale'],
    body: 'For businesses ready to explore AI practically, safely, and with measurable outcomes.',
  },
];

export const wwdMethodSteps: WwdMethodStep[] = [
  { n: '01', name: 'Discover', body: 'We understand your current business stage, systems, processes, and goals.' },
  { n: '02', name: 'Map', body: 'We identify gaps, duplication, manual work, and missed opportunities.' },
  { n: '03', name: 'Design', body: 'We design the right pathway — website, CRM, ERP, AI, dashboards, or integration.' },
  { n: '04', name: 'Build', body: 'We develop, configure, integrate, and automate the required systems.' },
  { n: '05', name: 'Improve', body: 'We measure results, refine workflows, and help your systems evolve as you grow.' },
];

export const wwdFaq: WwdFaqItem[] = [
  {
    q: 'Can KEYOB help if we only need a website?',
    a: "Yes. We take on single projects such as a website, CRM integration, SEO or an AI workflow — you can start with exactly what you need today. We just build it so it can connect to the rest of your systems later, so a one-off project never becomes a dead end.",
  },
  {
    q: 'Can KEYOB integrate with our existing CRM or ERP?',
    a: 'Yes. We frequently keep the CRM and ERP tools you already use and connect them, rather than forcing a migration. The focus is linking disconnected systems into one reliable operating layer so data flows automatically between them.',
  },
  {
    q: 'Do we need to be ready for AI before working with KEYOB?',
    a: 'No. We often start by establishing operational clarity, then identify where AI would genuinely help. A free AI assessment is a low-commitment way to find out where automation would pay off.',
  },
  {
    q: 'What is the best starting point for a growing business?',
    a: 'It depends where the pressure is. Getting leads but struggling to manage them usually points to CRM and sales automation; operational strain points to ERP and workflow automation. A short discovery conversation finds the highest-impact first step.',
  },
  {
    q: 'Does KEYOB build custom software?',
    a: "Yes — including custom CRM and ERP systems when off-the-shelf tools don't fit your operations. We also enhance and integrate existing systems where that's the smarter, lower-risk option.",
  },
  {
    q: 'Can KEYOB help with SEO, AEO, and GEO?',
    a: "Yes. We cover traditional SEO, Answer Engine Optimization for AI assistants, and Generative Engine Optimization, plus technical audits and content strategy — so you're discoverable across search engines and AI answer engines.",
  },
  {
    q: 'How does KEYOB decide what to automate first?',
    a: 'We start with how the business actually works, then prioritise by impact: frequent, rule-based, time-consuming tasks come first because they deliver the clearest return at the lowest risk. The right things, in the right order.',
  },
];

export const wwdHubNodes = [
  'Brand',
  'Website',
  'Search',
  'Social',
  'CRM',
  'ERP',
  'AI',
  'Dashboards',
  'Integrations',
  'Cloud',
];

export const wwdEcoNodes = [
  'Branding & Positioning',
  'Web Design & Dev',
  'SEO / AEO / GEO',
  'Social & Content',
  'CRM & Customers',
  'ERP & Operations',
  'AI Automation',
  'Data & Dashboards',
  'Integrations & Cloud',
  'Cybersecurity & Governance',
];

export const wwdLadderStages = [
  'Brand Foundation',
  'Digital Presence',
  'Visibility & Growth',
  'CRM & Customers',
  'ERP & Operations',
  'AI Automation',
  'Intelligence & Scale',
];

export const wwdIntroItems = [
  { icon: '<path d="M4 12h16M14 6l6 6-6 6"/>', text: 'Some need branding and a better website.' },
  { icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>', text: 'Some need SEO, AEO, GEO, or content visibility.' },
  { icon: '<path d="M3 6h18M3 12h18M3 18h12"/>', text: 'Some are getting leads but cannot manage them properly.' },
  { icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M6.5 10v4"/>', text: 'Some have CRM or ERP systems but they are disconnected.' },
  { icon: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1"/><circle cx="12" cy="12" r="3"/>', text: 'Some want AI but do not know where to apply it.' },
  { icon: '<path d="M21 21H4V3"/><path d="M7 14l3-4 3 3 5-7"/>', text: 'Some need dashboards and leadership visibility.' },
  { icon: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>', text: 'Some need a full digital transformation partner.' },
];
