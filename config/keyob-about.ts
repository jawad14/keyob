// Data for /about — ported from about-us.html.

export const aboutThread = ['People', 'Systems', 'Data', 'AI', 'Trust', 'Growth'];

export const aboutOldList = [
  'Website, separate',
  'CRM, separate',
  'ERP, separate',
  'Reports, separate',
  'AI experiment, separate',
  'Data, scattered',
  'Ownership, unclear',
];

export const aboutKeyobList = [
  'Brand connected to website',
  'Website connected to lead capture',
  'CRM connected to the customer journey',
  'ERP connected to operations',
  'Dashboards connected to decision-making',
  'AI connected to real workflows',
  'Data connected across systems',
];

export const aboutBecameChips = [
  'Brand & website',
  'SEO / AEO / GEO',
  'CRM & customers',
  'ERP & operations',
  'Dashboards',
  'AI workflows',
  'Integration',
  'Full transformation',
];

export const aboutLayerNodes = [
  'Digital Presence',
  'Customer Systems',
  'Operational Systems',
  'Data & Dashboards',
  'AI Workflows',
  'Integrations',
  'Long-term Support',
];

export const aboutTrustSteps = ['Understand', 'Build', 'Support', 'Improve', 'Expand'];

export type AuPrinciple = { n: string; title: string; body: string };
export const aboutPrinciples: AuPrinciple[] = [
  { n: '01', title: 'Business before technology', body: 'We do not begin with tools. We begin with how the business actually works.' },
  { n: '02', title: 'Practical AI, not AI theatre', body: 'AI only matters when it saves time, improves decisions, reduces cost, or creates new business capacity.' },
  { n: '03', title: 'Systems should connect', body: 'A website, CRM, ERP, dashboard, and AI workflow should not live in separate worlds.' },
  { n: '04', title: 'Clarity creates speed', body: 'When processes, ownership, and data are clear, teams move faster with less stress.' },
  { n: '05', title: 'Long-term thinking wins', body: 'We build with the next stage in mind, not only the current task.' },
  { n: '06', title: 'Stay close to the client', body: 'Good technology work requires communication, honesty, and partnership — not distance.' },
];

export type AuPhase = { phase: string; title: string; body: string };
export const aboutJourney: AuPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Building reliable software',
    body: 'We began by solving practical software problems: portals, systems, workflows, integrations, and business applications.',
  },
  {
    phase: 'Phase 2',
    title: 'Understanding operations deeply',
    body: 'Working closer with clients, we saw that many problems were not only technical but operational: scattered data, manual work, unclear processes, disconnected tools, and delayed reporting.',
  },
  {
    phase: 'Phase 3',
    title: 'Connecting systems',
    body: 'We moved toward building connected environments: CRM, ERP, dashboards, automation, cloud, and integrations working together.',
  },
  {
    phase: 'Phase 4',
    title: 'Bringing AI into real workflows',
    body: 'As AI became practical, we focused on where it creates measurable value: repetitive work, decision support, customer service, reporting, documentation, knowledge access, and operational intelligence.',
  },
  {
    phase: 'Phase 5',
    title: 'Becoming the operating-layer partner',
    body: 'Today, KEYOB helps businesses modernize across the full journey — from digital presence to internal systems, AI workflows, dashboards, and long-term technology evolution.',
  },
];

export const aboutPhilosophyQuestions = [
  'Will this save time?',
  'Will this reduce confusion?',
  'Will this help the team?',
  'Will this improve customer experience?',
  'Will this make the business easier to manage?',
  'Will this create measurable value?',
];

export type AuRelLayer = { n: string; title: string; body: string };
export const aboutRelationshipLayers: AuRelLayer[] = [
  { n: '01', title: 'Project', body: 'Solve the immediate need.' },
  { n: '02', title: 'Platform', body: 'Connect the core systems.' },
  { n: '03', title: 'Partnership', body: 'Improve continuously.' },
  { n: '04', title: 'Transformation', body: 'Build long-term business capability.' },
];

export const aboutDifferentNodes = [
  'Branding',
  'Website',
  'SEO',
  'Social',
  'CRM',
  'ERP',
  'Dashboards',
  'AI',
  'Integrations',
];

export const aboutFounderList = [
  'Stay close to clients',
  'Stay ahead of change',
  'Keep every solution connected to real business value',
];

export type AuFaqItem = { q: string; a: string };
export const aboutFaq: AuFaqItem[] = [
  { q: 'What does KEYOB do?', a: 'KEYOB helps businesses modernize through connected software, websites, CRM, ERP, automation, dashboards, integrations and practical AI workflows.' },
  { q: 'Is KEYOB only an AI consulting company?', a: "No. AI is one part of KEYOB's work. We also help with business systems, software development, websites, CRM, ERP, automation, reporting and system integration. The focus is using the right technology in the right place." },
  { q: 'Can KEYOB work with our existing systems?', a: 'Yes. We can integrate, improve or extend existing systems such as CRMs, ERPs, websites, dashboards and operational tools.' },
  { q: 'Does KEYOB build custom software?', a: 'Yes. We build custom software where off-the-shelf systems do not fit the business process or operational need.' },
  { q: 'Why do clients stay with KEYOB long-term?', a: "Because we work closely, communicate clearly, understand business context, and continue improving systems as the client's needs evolve." },
  { q: 'How does KEYOB approach AI?', a: 'Practically. The focus is on saving time, reducing manual work, improving decisions, supporting teams, and creating measurable business value.' },
];
