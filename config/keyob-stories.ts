import { outcomes, type Outcome } from '@/config/keyob-data';

export type StoryCategory =
  | 'professional'
  | 'financial'
  | 'distribution'
  | 'service'
  | 'multi'
  | 'backoffice';

export type StoryFact = { k: string; v: string };
export type StoryOutcomeCard = { title: string; body: string };
export type StoryFaqItem = { q: string; a: string };
export type StoryHeadline = { pre: string; em: string; post?: string };

export type StorySectionHeading = { pre: string; em: string; post?: string };

export type StoryMethodStep = { n: string; name: string; body: string };
export type StoryRelatedCard = {
  type: 'Capability' | 'Story';
  title: string;
  cta: string;
  href: string;
};
export type StoryBottomCta = {
  headline: StoryHeadline;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Story = Outcome & {
  category: StoryCategory;
  categoryLabel: string;
  featured?: boolean;
  headline: StoryHeadline;
  // body, approachIntro, fact `v` and facts may contain inline <strong>/<em>;
  // StoryDetail renders them with dangerouslySetInnerHTML (content is authored
  // by us, not user input).
  body: string[];
  keyOutcomes: string[];
  facts: StoryFact[];
  challenges: string[];
  approachIntro: string;
  pullquote: string;
  outcomeCards: StoryOutcomeCard[];
  humanIntro: string;
  humanQuote: string;
  humanRole: string;
  faq: StoryFaqItem[];
  // Optional per-story overrides.
  situationHeading?: StorySectionHeading;
  challengesHeading?: StorySectionHeading;
  approachHeading?: StorySectionHeading;
  breadcrumbLabel?: string;
  hasDiagram?: boolean;
  methodSteps?: StoryMethodStep[];
  related?: StoryRelatedCard[];
  bottomCta?: StoryBottomCta;
};

export const storyCategories: { key: StoryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All stories' },
  { key: 'professional', label: 'Professional Services' },
  { key: 'financial', label: 'Financial Services' },
  { key: 'distribution', label: 'Logistics & Distribution' },
  { key: 'service', label: 'Customer Operations' },
  { key: 'multi', label: 'Multi-Department' },
  { key: 'backoffice', label: 'Back Office' },
];

type Extra = Omit<Story, keyof Outcome>;

const SHARED_PULLQUOTE =
  "Most business owners know AI could help them. What they're missing is someone who can show them exactly where — and then build it properly.";

const SHARED_FAQ: StoryFaqItem[] = [
  {
    q: 'Did KEYOB replace the existing systems?',
    a: 'No. We built an operating layer between the tools the business already ran. Teams kept the systems they knew, while gaining a single live view across all of them — modernisation without the rebuild.',
  },
  {
    q: 'How long did the engagement take?',
    a: "We followed KEYOB's five-phase method — discovery, architecture, build, calibrate, evolve — with delivery in measured stages so live operations were never interrupted.",
  },
];

const storyExtras: Record<string, Extra> = {
  'investment-markets-australia': {
    category: 'financial',
    categoryLabel: 'Investment Markets Australia · Financial Services',
    headline: {
      pre: 'Making launch possible for an investment platform that ',
      em: 'could not afford to miss its moment.',
    },
    body: [
      'Investment Markets Australia was preparing to bring its investor platform to market. The idea was strong, the launch window was near, but the portal was carrying thousands of unresolved issues across usability, state management, broken flows, missing links, dependencies, and overall stability.',
      'KEYOB was brought in to help turn the platform from launch risk into launch readiness.',
      'KEYOB approached the engagement with structure. The first priority was to understand where the portal was breaking, which issues mattered most for launch, and how the system could be stabilized without losing time. The team performed detailed QA, reviewed Redux behavior, identified functional and UX gaps, upgraded required dependencies, resolved critical issues, connected missing links, improved broken flows, and modernized key parts of the portal experience.',
      'As QA, analysis, and fixes progressed, the portal became more stable. User journeys became clearer. Missing connections were restored. Technical issues were reduced. The platform moved from a problem list toward a usable, launch-ready product — and the client gained the confidence they needed to go live.',
    ],
    keyOutcomes: [
      'Launch readiness achieved within the required timeline',
      'Critical portal issues identified, prioritized and resolved',
      'Clearer user journeys across search, compare and investor flows',
    ],
    facts: [
      { k: 'Industry', v: 'Financial services' },
      { k: 'Engagement', v: 'QA + technical stabilization' },
      { k: 'Capability', v: 'Launch readiness' },
      { k: 'Outcome', v: 'Launch-ready portal' },
    ],
    challenges: [
      'Thousands of unresolved portal issues close to launch.',
      'Broken or incomplete user flows across the investor journey.',
      'Redux / state management issues causing inconsistent behaviour.',
      'Missing links and disconnected areas of the portal.',
      'Outdated or unstable dependencies adding technical risk.',
      'Usability and manageability problems making the platform harder to operate.',
      'A launch timeline that could not keep moving indefinitely.',
    ],
    approachIntro:
      'KEYOB moved quickly from diagnosis to stabilization — structured QA, Redux analysis, dependency upgrades, issue resolution, and UX improvements, prioritized against launch impact.',
    pullquote:
      '"Some projects need more than development. They need structure, priority, and a team that can stay calm when the launch window is close."',
    outcomeCards: [
      {
        title: 'Launch-ready within the timeline',
        body: 'The portal became usable, manageable and reliable in time for go-live — without slipping the launch window.',
      },
      {
        title: 'Clearer user journeys',
        body: 'Search, compare and investor flows became easier to follow; missing links and broken paths were restored.',
      },
      {
        title: 'Stable technical foundation',
        body: 'Dependencies upgraded, Redux state issues resolved, and critical defects burned down to a launch-ready baseline.',
      },
    ],
    humanIntro:
      'This engagement reflected the kind of work KEYOB is built for: stepping into complex business-critical systems, understanding the pressure, identifying what matters, and moving quickly without losing professionalism.',
    humanQuote:
      '"Some projects need more than development. They need structure, priority, and a team that can stay calm when the launch window is close."',
    humanRole: 'KEYOB — internal reflection on the engagement',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'What did KEYOB actually deliver?',
        a: 'Structured QA across user journeys, a Redux / state management review, prioritized defect resolution, dependency upgrades, repaired flows and links, and targeted UX improvements — all sequenced against launch impact rather than ticket order.',
      },
      {
        q: 'How was launch readiness measured?',
        a: 'We tracked open issues against a launch-ready baseline and worked the burndown by priority. The portal had to be stable, navigable end-to-end, and manageable by the client team — those were the gates we drove toward.',
      },
    ],
  },
  'best-value-custom-erp': {
    category: 'financial',
    categoryLabel: 'Best Value · Aftermarket Auto Parts · USA',
    headline: {
      pre: 'From off-the-shelf frustration to a custom ERP ',
      em: 'powering a decade of growth.',
    },
    body: [
      'Best Value Auto Body Supply was looking for an ERP system that could support the realities of the aftermarket auto parts industry. Off-the-shelf systems were not fitting their processes, and the business needed a platform that could handle the way they actually worked.',
      'KEYOB started with discovery, moved through analysis, design, and development, and built a custom ERP that became the operational backbone of the business.',
      'The ERP connected sales, inventory, purchasing, pricing, warehouse, delivery, RMA, accounting, and reporting into one operational platform — designed around the way Best Value actually operates, not around generic templates.',
      'Nearly a decade later, the system is still in production — continuously improved as Best Value grows and modernizes. The relationship has since expanded into branding and web presence modernization.',
    ],
    keyOutcomes: [
      'Custom ERP designed around aftermarket auto parts operations',
      'Core workflows connected into one operational platform',
      'Nearly a decade in production, continuously evolving with the business',
    ],
    facts: [
      { k: 'Industry', v: 'Aftermarket auto parts' },
      { k: 'Engagement', v: 'Custom ERP development + long-term support' },
      { k: 'Partnership', v: '~10 years and counting' },
      { k: 'Scope', v: '110,000+ OEM parts' },
    ],
    challenges: [
      'Off-the-shelf ERP solutions did not match aftermarket auto parts workflows.',
      'Inventory complexity required industry-specific logic.',
      'Sales, purchasing, warehouse, delivery, and accounting needed to work together.',
      'Generic systems could not properly support operational rules and exceptions.',
      'Reporting and visibility needed to reflect the real business, not generic templates.',
      'The business needed a system that could evolve as requirements changed.',
      'Best Value needed a technology partner, not just software installation.',
    ],
    approachIntro:
      'KEYOB started where serious ERP work should start: discovery. The work began with understanding how Best Value actually operated — how parts moved, how sales worked, how purchasing decisions were made, how warehouses functioned, how delivery was managed — and shaped the ERP design from there.',
    pullquote:
      '"Best Value did not need software that looked good in a demo. They needed a system that could survive real operations — every order, every part, every route, every report."',
    outcomeCards: [
      {
        title: 'Built around the business',
        body: 'A custom ERP designed to fit aftermarket auto parts operations — not the other way around.',
      },
      {
        title: 'One operational platform',
        body: 'Sales, inventory, purchasing, warehouse, delivery, RMA, accounting and reporting connected into a single backbone.',
      },
      {
        title: 'A decade of evolution',
        body: 'The system has stayed in production and kept evolving with the business — now extending into brand and web presence modernization.',
      },
    ],
    humanIntro:
      'Long-term partnerships are not created by contracts alone. They are created by years of communication, delivery, support, problem-solving, and shared understanding.',
    humanQuote:
      '"Best Value did not need software that looked good in a demo. They needed a system that could survive real operations — every order, every part, every route, every report."',
    humanRole: 'KEYOB — internal reflection on the engagement',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'Why custom ERP instead of off-the-shelf?',
        a: 'Best Value had explored over-the-counter ERP software, but the assumptions baked into generic systems did not match aftermarket auto parts workflows — inventory complexity, interchange logic, pricing rules, warehouse scanning, route operations, RMAs. A custom build let the system be shaped around the business instead of forcing the business to compromise its process.',
      },
      {
        q: 'How has the relationship changed over time?',
        a: 'It started as a custom ERP build. It became continuous improvement as Best Value grew. It has since expanded into branding and web presence modernization. KEYOB has stayed close to the business across all of it — meeting the client where they are and supporting whatever the business needs next.',
      },
    ],
  },
  'real-time-control-warehouses': {
    category: 'distribution',
    categoryLabel: 'Logistics & Distribution · Aftermarket Auto Parts',
    headline: { pre: 'From delayed updates to ', em: 'real-time control', post: ' across twelve warehouses.' },
    // body[0..1] = Situation paragraphs, body[2..] = Approach continuation.
    // Inline <strong> matches story.html emphasis.
    body: [
      'The distributor had grown the way successful businesses do — by adding warehouses, sales channels and product lines faster than the systems underneath could keep up. Inventory lived in one place, transfers in another, sales and demand in a third. None of them spoke the same language at the same time.',
      "The result was a business making real decisions on stale information. Stock figures were reconciled by hand. A part could show as available in the system and be gone from the shelf. Branch managers spent mornings on the phone confirming what they should have been able to see on a screen. <strong>The cost wasn't dramatic — it was constant.</strong> A steady drag of manual coordination, double-handling and missed demand that scaled with every new site.",
      "Through systems integration and ecosystem design, we connected the warehouse, transfer, sales and demand systems into one synchronised flow. On top of it sat an operational reporting and intelligence layer — so the data wasn't just connected, it was visible, live, to the people who needed to act on it.",
    ],
    situationHeading: { pre: 'A growing network, running on ', em: "yesterday's numbers." },
    challengesHeading: { pre: 'Where the friction ', em: 'actually lived.' },
    approachHeading: { pre: 'We connected what was already ', em: 'there.' },
    breadcrumbLabel: 'Real-time inventory control',
    hasDiagram: true,
    keyOutcomes: [
      'Real-time stock visibility across all 12 warehouses',
      'Transfer reconciliation reduced from days to minutes',
      'Single live dashboard replacing four separate reporting streams',
    ],
    facts: [
      { k: 'Industry', v: 'Auto-parts distribution' },
      { k: 'Scale', v: '<em>12</em> warehouses' },
      { k: 'Capability', v: 'Systems integration' },
      { k: 'Outcome', v: '<em>Real-time</em> visibility' },
    ],
    challenges: [
      'Inventory, transport and sales systems with no shared, real-time view across the network.',
      'Stock counts reconciled manually — accurate the moment they were taken, wrong soon after.',
      'Transfers between warehouses tracked over email and spreadsheets rather than system logic.',
      'Demand signals arriving too late to influence purchasing or rebalancing decisions.',
      'Operational reporting assembled by hand, days after the events it described.',
    ],
    approachIntro:
      "KEYOB's first move is never to replace. The distributor's teams knew their tools, and ripping them out would have meant months of disruption for a business that couldn't afford to pause. Instead, we did what we do best: <strong>we built the operating layer between the systems they already ran.</strong>",
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: 'Real-time stock visibility',
        body: 'Live inventory across all twelve warehouses, replacing counts that were out of date the moment they were taken.',
      },
      {
        title: 'Reduced manual coordination',
        body: 'Teams stopped phoning between branches to confirm stock — the system showed them what they needed to know.',
      },
      {
        title: 'Centralized reporting',
        body: 'Operational reports drawn from one connected source, available on demand instead of assembled by hand.',
      },
    ],
    humanIntro:
      "The clearest sign of success wasn't on a dashboard. It was that branch managers stopped starting their day with a round of phone calls — and started spending that time on the work only they could do.",
    humanQuote:
      "\"We used to manage by phone call. Now the answer's already on the screen — so we can actually get on with running the business instead of chasing it.\"",
    humanRole: 'Operations Lead · National parts distributor',
    methodSteps: [
      { n: '01', name: 'Discovery', body: 'Mapped every system, transfer and decision point across the network.' },
      { n: '02', name: 'Architecture', body: 'Designed the integration and reporting layer to sit over existing tools.' },
      { n: '03', name: 'Build', body: 'Connected systems in stages, with no disruption to live operations.' },
      { n: '04', name: 'Calibrate', body: 'Tuned the data flows and reporting against how teams actually work.' },
      { n: '05', name: 'Evolve', body: 'Left a foundation ready for automation and operational intelligence next.' },
    ],
    faq: [
      {
        q: "Did KEYOB replace the distributor's existing systems?",
        a: 'No. We built an integration and reporting layer that connected the existing warehouse, sales and demand systems. The business kept the tools its teams already knew, while gaining a single live view across all of them — modernisation without the rebuild.',
      },
      {
        q: 'How long did the transformation take?',
        a: 'The engagement followed our five-phase method — discovery, architecture, build, calibrate and evolve. The integration and reporting layer was delivered in measured stages so live operations were never interrupted.',
      },
      {
        q: 'What changed for the team day to day?',
        a: "Teams stopped reconciling stock by hand and chasing transfers across systems. They could see live inventory across every warehouse, which reduced manual coordination and let them act on current demand rather than yesterday's data.",
      },
      {
        q: 'Could this approach work for a different industry?',
        a: "Yes. The same pattern — connecting fragmented systems into one operating layer with live visibility — applies anywhere disconnected tools carry a real operational cost. We've used it across professional services, healthcare, financial services and more.",
      },
    ],
    related: [
      {
        type: 'Capability',
        title: 'Systems Integration & Ecosystem Design',
        cta: 'See how we connect tools →',
        href: '/#capabilities',
      },
      {
        type: 'Capability',
        title: 'AI-Powered Operational Intelligence',
        cta: 'Turn data into decisions →',
        href: '/#capabilities',
      },
      {
        type: 'Story',
        title: 'Reclaiming senior hours from manual reporting',
        cta: 'Professional services →',
        href: '/stories/reclaiming-senior-hours',
      },
    ],
    bottomCta: {
      headline: { pre: 'Where is your business ', em: 'running on stale data?' },
      body:
        'A free AI assessment is the same first step every one of these stories began with — a focused look at where intelligence and integration would earn their place. No obligation.',
      ctaLabel: 'Book your free AI assessment',
      ctaHref: '/contact',
    },
  },
  'automart-nationwide': {
    category: 'service',
    categoryLabel: 'Automart Nationwide · Aftermarket Auto Parts · USA',
    headline: {
      pre: 'From scattered requests to ',
      em: 'one connected service queue.',
    },
    body: [
      "Automart Nationwide operates in a demanding aftermarket auto parts environment, where customers need fast answers, accurate part handling, reliable delivery coordination, and clear communication. The business already trusted KEYOB's industry-specific ERP foundation for automotive parts operations, but as customer activity grew, a new challenge appeared: inbound requests were arriving from too many places, and the team needed a smarter way to manage them.",
      'KEYOB helped Automart move beyond scattered communication by building a single intake and routing layer that brought requests, rules, queues, ownership, and escalation into one connected operational view.',
      'Every request is now captured, classified, routed, queued, and made visible the moment it lands. Routing rules encode the business policies that used to live in senior staff heads. Escalations trigger automatically when an item ages past its target.',
      'The team did not have to work faster. They stopped losing time to coordination — and that gave them back enough capacity to handle 42% more customer requests without adding management overhead.',
    ],
    keyOutcomes: [
      '42% more customer request capacity without added management overhead',
      'Five inbound channels consolidated into one routed, measurable queue',
      'Live SLA visibility with automatic escalation on aging requests',
    ],
    facts: [
      { k: 'Industry', v: 'Aftermarket auto parts' },
      { k: 'Starting point', v: "KEYOB's automotive ERP foundation" },
      { k: 'Scope', v: '5 request channels' },
      { k: 'Outcome', v: '+42% request capacity' },
    ],
    challenges: [
      'Requests arriving across five separate channels, with no central queue.',
      'Senior staff spending more time triaging than resolving.',
      "Routing rules living in people's heads, applied inconsistently under load.",
      'SLAs slipping because nothing measured them in one place.',
      'No visibility into the size or age of the backlog at any point in time.',
      'Customer service activity not fully connected to the wider ERP-driven operation.',
      'Growth creating more coordination pressure instead of more clarity.',
    ],
    approachIntro:
      'We built one intake and routing layer above the existing channels. Every request is captured, classified, routed, queued — and visible — the moment it lands. The system sits alongside the KEYOB automotive ERP foundation so customer service activity finally connects to the wider operation.',
    pullquote:
      "\"Most business owners know AI could help them. What they're missing is someone who can show them exactly where — and then build it properly.\"",
    outcomeCards: [
      {
        title: '42% more capacity',
        body: 'Automart absorbed a 42% larger request workload without adding people or management overhead.',
      },
      {
        title: 'One routed queue',
        body: 'Five inbound channels consolidated into a single classified, prioritised queue on a live operational board.',
      },
      {
        title: 'SLA visibility by default',
        body: 'Aging requests escalate automatically — slipping SLAs surface before they become problems.',
      },
    ],
    humanIntro:
      'Automart already used the KEYOB automotive-parts ERP foundation. The intake and routing layer extended that relationship into customer service operations — meeting the business where its next pressure point actually was.',
    humanQuote:
      '"We did not need to work faster. We needed one controlled way to see, route, and manage the work."',
    humanRole: 'Service operations lead · Automart Nationwide',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'How does the intake layer relate to the existing ERP?',
        a: "The intake and routing layer sits above the channels and alongside KEYOB's automotive-parts ERP foundation. Customer service activity is captured, routed and measured in the new layer; the ERP continues to own parts, inventory, sales, purchasing, warehouse and delivery — and the two work together as one operational view.",
      },
      {
        q: 'How are routing rules maintained over time?',
        a: 'Routing logic, priority bands and escalation thresholds live in the operating layer, not in code. Operations leads can update them themselves without engineering involvement.',
      },
    ],
  },
  'international-coaching-institute': {
    category: 'multi',
    categoryLabel: 'International Coaching Institute · Coaching & Education',
    headline: {
      pre: 'Building one source of truth for a coaching business running on ',
      em: 'thirteen disconnected systems.',
    },
    body: [
      'International Coaching Institute was scaling across paid acquisition, landing pages, CRM workflows, course delivery, finance, sales activity, and team communication. Each tool held part of the truth, but no single system showed the whole business clearly.',
      'KEYOB designed and built a consolidated BI platform that connected thirteen separate systems — Meta Ads, Unbounce, GoHighLevel, Thinkific, a legacy CRM, Xero, Outlook, Facebook surfaces, social scheduling tools and more — into one trusted view.',
      'The first major insight came when the platform surfaced the real return on Meta ad spend measured against CRM-recorded revenue. Meta’s pixel could only see part of the journey. Once KEYOB connected the data, ICI could see that the real return was significantly higher than what the ad platform had been reporting.',
      'ICI gained live visibility into real ROAS, funnel health, sales performance, source attribution, and the student journey — without manual weekly reconciliation.',
    ],
    keyOutcomes: [
      'Thirteen disconnected systems consolidated into one unified BI platform',
      'True ROAS surfaced against CRM-recorded revenue, not pixel-only attribution',
      'Role-based access so sales, marketing, ops and leadership work from one view',
    ],
    facts: [
      { k: 'Industry', v: 'Coaching & education' },
      { k: 'Scope', v: '13 connected systems' },
      { k: 'Capability', v: 'BI platform & data architecture' },
      { k: 'Outcome', v: 'One trusted view' },
    ],
    challenges: [
      'Thirteen disconnected systems held different parts of the business picture.',
      'Platform dashboards disagreed with one another.',
      'Leadership had no single trusted KPI view.',
      'Real ROAS was hidden behind incomplete pixel-only attribution.',
      'Funnel performance was scattered across landing pages, CRM, sales, and finance.',
      'Sales activity and performance were hard to compare objectively.',
      'Lead journeys were fragmented across forms, notes, opportunities, and won deals.',
      'Reporting required manual weekly reconciliation.',
      'Different roles needed different views, but everyone was working from scattered data.',
    ],
    approachIntro:
      'KEYOB did not simply build another report. The real problem was not lack of dashboards — it was lack of a trusted data model. We mapped every system, defined a canonical model for leads, conversions and revenue, then built the connector layer, BI dashboards, role-based access, and production infrastructure needed to turn fragmented data into a daily decision platform.',
    pullquote:
      '"Some businesses do not need another report. They need to see one number they trust, on one screen, every day."',
    outcomeCards: [
      {
        title: 'One trusted view',
        body: 'Thirteen disconnected systems consolidated into one consolidated BI platform leadership can rely on.',
      },
      {
        title: 'True ROAS surfaced',
        body: 'Real return measured against CRM-recorded revenue and collected payments — not pixel-only attribution.',
      },
      {
        title: 'Live, role-based access',
        body: 'Sales, marketing, operations, managers and founders each see the view that fits their work — refreshed automatically.',
      },
    ],
    humanIntro:
      'ICI was not short of tools. It was short of clarity. The value of the platform was not just technical integration — it gave leadership confidence to make decisions from the data already inside the business.',
    humanQuote:
      '"Some businesses do not need another report. They need to see one number they trust, on one screen, every day."',
    humanRole: 'KEYOB — internal reflection on the engagement',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'Why a BI platform instead of buying an off-the-shelf dashboard?',
        a: 'Off-the-shelf dashboards solve display, not definition. ICI’s real problem was that each system disagreed about what a lead, conversion or revenue actually meant. The platform we built starts from a canonical model — one shared definition of every metric — and only then surfaces it as dashboards.',
      },
      {
        q: 'How were the thirteen systems kept in sync?',
        a: 'We engineered an API connector layer with scheduled syncs and sync-health monitoring. When a source changes — Meta Ads, GoHighLevel, Xero, Thinkific and the rest — the platform refreshes on a schedule, with visibility into when each source last updated and whether the sync succeeded.',
      },
    ],
  },
  'aleesa-ai': {
    category: 'service',
    categoryLabel: 'Aleesa.ai · AI Receptionist & Automated Office',
    featured: true,
    headline: {
      pre: 'From AI receptionist to a ',
      em: '24/7 automated office',
      post: ' on the cloud.',
    },
    body: [
      'Aleesa.ai started with a focused requirement from an Australian health clinic: handle customer calls more intelligently, reduce missed inquiries, and make sure every potential lead was captured properly.',
      'What began as an AI receptionist has now evolved into an automated small office — a cloud-based business layer that listens, captures, organizes, assigns, and follows up on leads from every major channel: phone calls, website forms, WhatsApp, social media forms, Facebook messages, Instagram messages, and more.',
      'KEYOB developed Aleesa.ai as a cloud-based automated office that captures leads from multiple sources and brings them into one manageable system. The product evolved from an AI receptionist into a broader operating layer for small offices — combining intake, CRM, task assignment, follow-up, and automation.',
      'Aleesa.ai does not replace the business team. It gives the team a system that keeps working even when people are busy, offline, or away from the desk.',
    ],
    keyOutcomes: [
      'Customer inquiries captured from calls, web forms, WhatsApp and social channels',
      'Every lead organized inside one CRM with clear source, status, owner and next step',
      '24/7 cloud office layer that keeps working when the team is busy or offline',
    ],
    facts: [
      { k: 'Origin', v: 'Australian health clinic' },
      { k: 'Starting point', v: 'AI receptionist' },
      { k: 'Evolution', v: 'Automated office' },
      { k: 'Availability', v: '24/7 cloud layer' },
    ],
    challenges: [
      'Customer inquiries arriving across too many channels.',
      'Missed calls and after-hours inquiries not always captured.',
      'Manual copying of lead details into spreadsheets or CRM.',
      'Follow-ups depending on staff memory.',
      'No single view of source, status, owner, and next step.',
      'Teams checking inboxes instead of serving customers.',
      'Small offices needing automation without hiring more admin staff.',
    ],
    approachIntro:
      'KEYOB built Aleesa.ai as an automated office layer above the channels — not a replacement for the team. Calls, forms, WhatsApp and social messages flow into one CRM, with classification, ownership, tasks and follow-up applied automatically.',
    pullquote:
      '"Aleesa.ai started as an AI receptionist. It became something bigger: an automated office that keeps capturing, organizing, and assigning work even when the business is closed."',
    outcomeCards: [
      {
        title: 'Multi-channel lead capture',
        body: 'Calls, website forms, WhatsApp, Facebook, Instagram and social leads all captured into one system.',
      },
      {
        title: 'One CRM, one source of truth',
        body: 'Every lead organized with source, status, owner, and next action visible in one place.',
      },
      {
        title: '24/7 cloud office',
        body: 'The intake and follow-up layer keeps working outside office hours — no inquiry is lost to a busy team.',
      },
    ],
    humanIntro:
      'Most small businesses do not need more inboxes. They need one intelligent place where every lead becomes visible, owned, and actionable.',
    humanQuote:
      '"Aleesa.ai started as an AI receptionist. It became something bigger: an automated office that keeps capturing, organizing, and assigning work even when the business is closed."',
    humanRole: 'KEYOB — internal reflection on the product',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'Which channels does Aleesa.ai capture leads from?',
        a: 'Phone calls, website forms, WhatsApp, Facebook messages, Instagram messages, social media lead forms, contact forms, missed calls, and after-hours inquiries — all consolidated into one CRM.',
      },
      {
        q: 'Does Aleesa.ai replace the team?',
        a: 'No. Aleesa.ai is an operating layer above the business — it captures, organizes, assigns and follows up so the team can focus on serving customers instead of checking inboxes.',
      },
    ],
  },
};

export const stories: Story[] = outcomes.map((o) => {
  const extra = storyExtras[o.slug];
  if (!extra) {
    throw new Error(`Missing story extras for slug "${o.slug}"`);
  }
  return { ...o, ...extra };
});

export const keyobMethodSteps = [
  { n: '01', name: 'Discovery', body: 'Mapped every system, workflow and decision point that touched the problem.' },
  { n: '02', name: 'Architecture', body: 'Designed the operating layer to sit over the existing tools, not replace them.' },
  { n: '03', name: 'Build', body: 'Connected systems in stages, with no disruption to live operations.' },
  { n: '04', name: 'Calibrate', body: 'Tuned the flows and reporting against how teams actually work.' },
  { n: '05', name: 'Evolve', body: 'Left a foundation ready for the next layer of automation and intelligence.' },
];
