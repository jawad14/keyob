// Article data ported from keyob-news-nextjs template (SEO/AEO-tuned content,
// per-article related solutions + related-article slugs, evergreen vs news kind).

export type NewsCategory =
  | 'AI Operations'
  | 'Workflow Automation'
  | 'ERP Systems'
  | 'Business Process Automation'
  | 'Systems Integration'
  | 'Operational Intelligence'
  | 'Industry Notes'
  | 'KEYOB Updates'
  | 'Case Story Notes';

export type NewsVisual = 'flow' | 'grid' | 'hub';

export type NewsBodySection =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'quote'; text: string; cite?: string }
  | { kind: 'takeaway'; text: string };

export type NewsArticle = {
  slug: string;
  kind: 'evergreen' | 'news';
  title: string;
  excerpt: string;
  summary: string;
  category: NewsCategory;
  tags: string[];
  date: string;
  dateIso: string;
  updatedIso?: string;
  readTime: string;
  author: string;
  featured?: boolean;
  seoTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  visual: NewsVisual;
  body: NewsBodySection[];
  takeaway: string;
  relatedSolutions: string[];
  relatedArticles: string[];
};

export const newsCategories: { key: NewsCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'AI Operations', label: 'AI Operations' },
  { key: 'Workflow Automation', label: 'Workflow Automation' },
  { key: 'ERP Systems', label: 'ERP Systems' },
  { key: 'Business Process Automation', label: 'Business Process Automation' },
  { key: 'Systems Integration', label: 'Systems Integration' },
  { key: 'Operational Intelligence', label: 'Operational Intelligence' },
  { key: 'Industry Notes', label: 'Industry Notes' },
  { key: 'KEYOB Updates', label: 'KEYOB Updates' },
];

export const newsAEO: { q: string; a: string }[] = [
  {
    q: 'What is AI workflow automation?',
    a: "AI workflow automation is the use of AI to run the repetitive, rule-based steps inside a business process — routing, updates, follow-ups — and to handle lightly interpretive steps like classifying a request, so work flows end to end with less manual effort.",
  },
  {
    q: 'What is operational intelligence?',
    a: 'Operational intelligence is the ability to understand and act on what is happening in a business right now, using live data from the systems that run operations — rather than relying on reports assembled after the fact.',
  },
  {
    q: 'What is business process automation for SMEs?',
    a: 'For small and growing businesses, business process automation means letting software perform routine, repeatable tasks consistently — reducing manual effort and errors, and creating a live record of each step that gives leaders real operational visibility.',
  },
];

// Map category → motif for inline SVG visual when image is missing.
const motifByCategory: Record<NewsCategory, NewsVisual> = {
  'AI Operations': 'hub',
  'Workflow Automation': 'flow',
  'ERP Systems': 'grid',
  'Business Process Automation': 'flow',
  'Systems Integration': 'hub',
  'Operational Intelligence': 'hub',
  'Industry Notes': 'grid',
  'KEYOB Updates': 'hub',
  'Case Story Notes': 'grid',
};

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

type ArticleSeed = Omit<NewsArticle, 'date' | 'visual'>;

const seeds: ArticleSeed[] = [
  {
    slug: 'what-is-ai-operations-for-smes',
    kind: 'evergreen',
    title: 'What Is AI Operations for SMEs?',
    excerpt:
      "AI operations is the practical discipline of putting AI to work inside how a business actually runs — its workflows, data and decisions — rather than bolting on tools for their own sake.",
    summary:
      "AI operations is the practical discipline of putting AI to work inside how a business actually runs — its workflows, data and decisions — rather than bolting on tools for their own sake.",
    category: 'AI Operations',
    tags: ['AI operations', 'SME', 'automation', 'operational clarity'],
    dateIso: '2026-05-12',
    updatedIso: '2026-05-20',
    readTime: '6 min read',
    author: 'KEYOB Editorial Team',
    featured: true,
    seoTitle: 'What Is AI Operations for SMEs? A Practical Guide | KEYOB',
    metaDescription:
      "AI operations means applying AI inside your real workflows, data and decisions. Here's what it involves for small and growing businesses — and where it pays off.",
    image: '/news/ai-operations-team-dashboard.png',
    imageAlt: 'Operations team reviewing a connected business dashboard together',
    body: [
      { kind: 'p', text: "AI operations is the practical work of applying AI inside the systems a business already runs — its workflows, its data, and the decisions people make every day. It is not a product you buy. It is a way of running operations so that repetitive work is automated, information is visible in real time, and decisions are made on current data rather than last week's reports." },
      { kind: 'h2', text: "How is AI operations different from 'using AI'?" },
      { kind: 'p', text: "Most businesses encounter AI as a feature inside a single tool. AI operations is broader: it looks across the whole business, finds where time is lost and where systems don't connect, and puts intelligence where it changes an outcome. The goal is a connected operating layer, not a collection of disconnected clever features." },
      { kind: 'h2', text: 'Where does it help an SME first?' },
      { kind: 'list', items: ["Automating manual, rule-based work that drains staff hours", "Connecting tools that don't talk to each other today", 'Turning operational data into live visibility instead of manual reports', 'Reducing the coordination overhead that grows with every new hire or site'] },
      { kind: 'h3', text: 'A simple example' },
      { kind: 'p', text: "A distribution business reconciling stock by hand across several systems doesn't need a chatbot. It needs its inventory, sales and transfer data connected into one live view. That is AI operations: the unglamorous, high-leverage work of making the business legible to itself." },
    ],
    takeaway:
      "AI operations is applying AI inside a business's real workflows, data and decisions — automating repetitive work, connecting fragmented tools, and making operations visible in real time. For SMEs it starts with clarity, not with buying more software.",
    relatedSolutions: ['AI Workflow Automation', 'Custom ERP Systems', 'Operational Dashboards'],
    relatedArticles: [
      'how-ai-workflow-automation-reduces-manual-work',
      'what-is-operational-intelligence',
      'why-keyob-focuses-on-operational-clarity-before-automation',
    ],
  },
  {
    slug: 'how-ai-workflow-automation-reduces-manual-work',
    kind: 'evergreen',
    title: 'How AI Workflow Automation Reduces Manual Work',
    excerpt:
      'AI workflow automation handles the repetitive, rule-based steps that consume staff time, so people can focus on the work that needs judgement.',
    summary:
      'AI workflow automation handles the repetitive, rule-based steps that consume staff time, so people can focus on the work that needs judgement.',
    category: 'Workflow Automation',
    tags: ['workflow automation', 'productivity', 'process', 'AI'],
    dateIso: '2026-05-08',
    updatedIso: '2026-05-08',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'How AI Workflow Automation Reduces Manual Work | KEYOB',
    metaDescription:
      "AI workflow automation removes repetitive, rule-based steps from daily operations. Here's how it works and where growing businesses see the biggest gains.",
    image: '/news/workflow-automation-diagram.png',
    imageAlt: 'Workflow steps connected into an automated process flow',
    body: [
      { kind: 'p', text: 'AI workflow automation reduces manual work by taking over the repetitive, rule-based steps inside a process — data entry, routing, status updates, follow-ups, document checks — and running them consistently without a person doing each one by hand.' },
      { kind: 'h2', text: 'What kinds of work can be automated?' },
      { kind: 'p', text: 'The best early candidates are tasks that are frequent, rule-driven and low-judgement. Approvals that follow a fixed policy. Updates copied between systems. Notifications triggered by an event. These are where automation removes effort without removing human control.' },
      { kind: 'h2', text: 'Where does the AI part come in?' },
      { kind: 'p', text: 'Plain automation handles fixed rules. AI extends it to work that involves a little interpretation — reading an unstructured email, classifying a request, summarising a document — so more of the workflow can run end to end before a person needs to step in.' },
      { kind: 'list', items: ['Less double-handling between systems', 'Fewer errors from manual copying', 'Consistent outputs every time', 'Capacity redirected to higher-value work'] },
    ],
    takeaway:
      'AI workflow automation removes the repetitive, rule-based steps in a process and uses AI for the lightly interpretive ones, so teams spend less time on administration and more on judgement. Start with frequent, low-judgement tasks.',
    relatedSolutions: ['AI Workflow Automation', 'Business Systems Integration'],
    relatedArticles: [
      'how-business-process-automation-improves-operational-visibility',
      'what-is-ai-operations-for-smes',
      'how-systems-integration-helps-teams-work-better',
    ],
  },
  {
    slug: 'custom-erp-vs-off-the-shelf-software',
    kind: 'evergreen',
    title: 'Custom ERP vs Off-the-Shelf Software: What Growing Businesses Should Know',
    excerpt:
      "Off-the-shelf software is faster to start with; custom ERP fits your actual operations. The right choice depends on how unusual your workflows are and how much they cost you when they don't fit.",
    summary:
      "Off-the-shelf software is faster to start with; custom ERP fits your actual operations. The right choice depends on how unusual your workflows are and how much they cost you when they don't fit.",
    category: 'ERP Systems',
    tags: ['ERP', 'custom software', 'off-the-shelf', 'scaling'],
    dateIso: '2026-05-02',
    updatedIso: '2026-05-15',
    readTime: '7 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'Custom ERP vs Off-the-Shelf Software for Growing Businesses | KEYOB',
    metaDescription:
      'Should a growing business build a custom ERP or buy off-the-shelf? Compare fit, cost, speed and scale — and learn when each option makes sense.',
    image: '/news/erp-comparison-screens.png',
    imageAlt: 'Two business software interfaces shown side by side for comparison',
    body: [
      { kind: 'p', text: 'Off-the-shelf software is the faster, cheaper way to start, and for many businesses it is the right answer. A custom ERP makes sense when your operations are unusual enough that standard tools force your team to work around the software instead of with it.' },
      { kind: 'h2', text: 'When off-the-shelf is the right call' },
      { kind: 'p', text: 'If your processes are fairly standard, packaged software gives you proven features immediately, with support and updates handled for you. Fighting that with a custom build is usually a waste of money and time.' },
      { kind: 'h2', text: 'When a custom ERP earns its cost' },
      { kind: 'list', items: ['Your workflows are genuinely different from competitors', "You're stitching several tools together with manual effort", 'Standard software forces expensive workarounds at scale', "Your data is fragmented across systems that won't integrate"] },
      { kind: 'h3', text: 'The middle path' },
      { kind: 'p', text: 'It is rarely all-or-nothing. Often the strongest option is to keep the off-the-shelf tools your team knows and build an integration and intelligence layer between them — modernising without a full rebuild.' },
    ],
    takeaway:
      'Choose off-the-shelf when your processes are standard and speed matters; choose custom ERP when non-standard workflows cost you real money in workarounds and manual coordination. A connecting layer between existing tools is often the smartest middle ground.',
    relatedSolutions: ['Custom ERP Systems', 'Business Systems Integration'],
    relatedArticles: [
      'when-does-a-growing-business-need-a-custom-erp-system',
      'why-disconnected-tools-slow-down-business-growth',
      'what-is-ai-operations-for-smes',
    ],
  },
  {
    slug: 'why-disconnected-tools-slow-down-business-growth',
    kind: 'evergreen',
    title: 'Why Disconnected Tools Slow Down Business Growth',
    excerpt:
      "When your tools don't talk to each other, people become the integration layer — re-entering data, reconciling reports and chasing status. That hidden coordination cost scales with you.",
    summary:
      "When your tools don't talk to each other, people become the integration layer — re-entering data, reconciling reports and chasing status. That hidden coordination cost scales with you.",
    category: 'Systems Integration',
    tags: ['systems integration', 'data silos', 'growth', 'efficiency'],
    dateIso: '2026-04-26',
    updatedIso: '2026-04-26',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'Why Disconnected Tools Slow Down Business Growth | KEYOB',
    metaDescription:
      "Disconnected tools force staff to act as the integration layer, creating hidden coordination costs that grow with the business. Here's how to spot and fix it.",
    image: '/news/disconnected-tools-collaboration.png',
    imageAlt: 'Team members coordinating across multiple separate software systems',
    body: [
      { kind: 'p', text: "Disconnected tools slow growth because, when systems don't share data, people fill the gap. Staff re-enter the same information in three places, reconcile reports by hand, and chase status across apps. That coordination cost is invisible on any invoice — and it grows with every new hire, site and product line." },
      { kind: 'h2', text: 'The tell-tale signs' },
      { kind: 'list', items: ['The same data is typed into more than one system', 'Reports are assembled manually before meetings', 'People email or call to confirm what a system should show', "No single place answers 'what is happening right now?'"] },
      { kind: 'h2', text: 'Why it gets worse at scale' },
      { kind: 'p', text: 'Manual coordination is roughly linear with headcount and volume. Double the activity and you roughly double the reconciling. Connected systems break that link, so the business can grow without the overhead growing in lockstep.' },
    ],
    takeaway:
      'Disconnected tools turn your people into the integration layer, creating hidden manual-coordination costs that scale with the business. Connecting systems lets activity grow without the overhead growing with it.',
    relatedSolutions: ['Business Systems Integration', 'Operational Dashboards'],
    relatedArticles: [
      'how-systems-integration-helps-teams-work-better',
      'custom-erp-vs-off-the-shelf-software',
      'how-business-process-automation-improves-operational-visibility',
    ],
  },
  {
    slug: 'how-business-process-automation-improves-operational-visibility',
    kind: 'evergreen',
    title: 'How Business Process Automation Improves Operational Visibility',
    excerpt:
      "When a process runs through a system instead of by hand, every step leaves a trace — turning automation into a live, accurate picture of what's happening.",
    summary:
      "When a process runs through a system instead of by hand, every step leaves a trace — turning automation into a live, accurate picture of what's happening.",
    category: 'Business Process Automation',
    tags: ['business process automation', 'visibility', 'reporting', 'operations'],
    dateIso: '2026-04-20',
    updatedIso: '2026-04-20',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'How Business Process Automation Improves Operational Visibility | KEYOB',
    metaDescription:
      'Automating a business process does more than save time — it creates a live, accurate record of every step, giving leaders real operational visibility.',
    image: '/news/process-visibility-reporting.png',
    imageAlt: 'Manager viewing live operational reporting on a screen',
    body: [
      { kind: 'p', text: 'Business process automation improves visibility because a process that runs through a system records itself. Every step leaves a timestamped trace, so instead of asking people for a status update, leaders can see the current state directly — accurately and in real time.' },
      { kind: 'h2', text: 'From manual reports to live state' },
      { kind: 'p', text: 'Manual reporting describes the past: someone assembles numbers after the fact. Automated processes expose the present, because the data is a by-product of the work itself rather than a separate task.' },
      { kind: 'h2', text: 'What leaders gain' },
      { kind: 'list', items: ['Bottlenecks become visible while they can still be fixed', "Reporting stops depending on one person's spreadsheet", "Decisions rest on current data, not last week's", 'Operational risk surfaces before it becomes failure'] },
    ],
    takeaway:
      'Automating a process makes it record itself, turning automation into live operational visibility. Leaders see the present state directly instead of waiting for manually assembled reports.',
    relatedSolutions: ['Business Process Automation', 'Operational Dashboards'],
    relatedArticles: [
      'what-is-operational-intelligence',
      'how-ai-workflow-automation-reduces-manual-work',
      'why-disconnected-tools-slow-down-business-growth',
    ],
  },
  {
    slug: 'what-is-operational-intelligence',
    kind: 'evergreen',
    title: 'What Is Operational Intelligence?',
    excerpt:
      "Operational intelligence is the ability to understand and act on what's happening in your business right now, using live data instead of after-the-fact reports.",
    summary:
      "Operational intelligence is the ability to understand and act on what's happening in your business right now, using live data instead of after-the-fact reports.",
    category: 'Operational Intelligence',
    tags: ['operational intelligence', 'real-time data', 'decisions', 'analytics'],
    dateIso: '2026-04-14',
    updatedIso: '2026-04-22',
    readTime: '6 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'What Is Operational Intelligence? Definition & Examples | KEYOB',
    metaDescription:
      "Operational intelligence is understanding and acting on what's happening in your business in real time. Learn what it means and how growing businesses use it.",
    image: '/news/operational-intelligence-dashboard.png',
    imageAlt: 'Live operations dashboard showing current business activity',
    body: [
      { kind: 'p', text: 'Operational intelligence is the ability to understand and act on what is happening in your business right now. It uses live data drawn from the systems running your operations, so decisions are based on the current state rather than a report assembled days later.' },
      { kind: 'h2', text: 'How is it different from business intelligence?' },
      { kind: 'p', text: 'Business intelligence usually looks backward — analysing historical data to explain what happened. Operational intelligence looks at the present, so a team can respond while a situation is still unfolding.' },
      { kind: 'h2', text: 'What it looks like in practice' },
      { kind: 'list', items: ['A live view of orders, stock or cases across the business', 'Alerts when something moves outside normal bounds', 'Decisions made in hours, not after month-end', 'Intelligence that can act automatically within set limits'] },
    ],
    takeaway:
      "Operational intelligence means understanding and acting on what's happening now, using live operational data. Unlike backward-looking business intelligence, it lets teams respond while a situation can still be changed.",
    relatedSolutions: ['Operational Dashboards', 'AI Workflow Automation'],
    relatedArticles: [
      'how-business-process-automation-improves-operational-visibility',
      'what-is-ai-operations-for-smes',
      'how-distribution-businesses-can-improve-inventory-visibility',
    ],
  },
  {
    slug: 'how-ai-assistants-help-manage-customer-communication',
    kind: 'evergreen',
    title: 'How AI Assistants Help Businesses Manage Customer Communication',
    excerpt:
      'AI assistants help by handling routine, repeatable customer messages and routing the rest to the right person with context — so response times improve without losing the human touch.',
    summary:
      'AI assistants help by handling routine, repeatable customer messages and routing the rest to the right person with context — so response times improve without losing the human touch.',
    category: 'AI Operations',
    tags: ['AI assistant', 'customer service', 'communication', 'support'],
    dateIso: '2026-04-08',
    updatedIso: '2026-04-08',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'How AI Assistants Help Manage Customer Communication | KEYOB',
    metaDescription:
      'AI assistants handle routine customer messages and route complex ones with context, improving response times while keeping a human in the loop where it matters.',
    image: '/news/customer-communication-team.png',
    imageAlt: 'Service team handling customer enquiries with system support',
    body: [
      { kind: 'p', text: "AI assistants help manage customer communication by handling the routine, repeatable enquiries automatically and routing everything else to the right person — with the relevant history already attached. The aim is faster responses and less manual triage, not removing people from the relationship." },
      { kind: 'h2', text: 'What should an assistant handle — and not handle?' },
      { kind: 'p', text: 'Let it handle frequent, well-understood questions and the first step of triage. Keep people firmly in the loop for anything sensitive, ambiguous or high-value. Clear boundaries are what make this safe and useful.' },
      { kind: 'list', items: ['Faster first responses, including out of hours', 'Consistent answers to common questions', 'Context gathered before a person takes over', 'Staff time freed for complex conversations'] },
    ],
    takeaway:
      'AI assistants improve customer communication by automating routine messages and routing complex ones with full context to a person. Set clear boundaries so people stay in control of sensitive and high-value conversations.',
    relatedSolutions: ['AI Workflow Automation', 'Business Systems Integration'],
    relatedArticles: [
      'ai-automation-for-service-businesses-where-to-start',
      'how-ai-workflow-automation-reduces-manual-work',
      'what-is-ai-operations-for-smes',
    ],
  },
  {
    slug: 'when-does-a-growing-business-need-a-custom-erp-system',
    kind: 'evergreen',
    title: 'When Does a Growing Business Need a Custom ERP System?',
    excerpt:
      'A growing business needs a custom ERP when standard tools and spreadsheets start costing more in workarounds and manual coordination than a tailored system would.',
    summary:
      'A growing business needs a custom ERP when standard tools and spreadsheets start costing more in workarounds and manual coordination than a tailored system would.',
    category: 'ERP Systems',
    tags: ['ERP', 'scaling', 'custom software', 'operations'],
    dateIso: '2026-04-02',
    updatedIso: '2026-04-02',
    readTime: '6 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'When Does a Growing Business Need a Custom ERP System? | KEYOB',
    metaDescription:
      'Not every business needs a custom ERP. Here are the clear signals that standard tools have become the bottleneck — and a tailored system is worth the investment.',
    image: '/news/erp-comparison-screens.png',
    imageAlt: 'ERP modules arranged as connected building blocks for a growing business',
    body: [
      { kind: 'p', text: "A growing business needs a custom ERP when the workarounds keeping standard tools alive start costing more — in time, errors and coordination — than a tailored system would. Until then, packaged software and good integration usually win." },
      { kind: 'h2', text: "Signals it's time to consider one" },
      { kind: 'list', items: ['Spreadsheets have become load-bearing infrastructure', 'The same data is maintained in several disconnected tools', 'Onboarding a new hire means teaching a web of manual workarounds', 'Reporting takes days and is out of date when it arrives', 'Growth is being held back by operations, not demand'] },
      { kind: 'h2', text: 'How to approach it without overbuilding' },
      { kind: 'p', text: "Start with discovery, not software. Map how the business actually runs, find the highest-cost friction, and build only what removes it. Often the first phase isn't a full ERP at all — it's an integration layer that buys time and clarity." },
    ],
    takeaway:
      'A custom ERP is justified when workarounds for standard tools cost more than a tailored system would. Watch for load-bearing spreadsheets, duplicated data and operations capping growth — then start with discovery, not a big-bang build.',
    relatedSolutions: ['Custom ERP Systems', 'Business Systems Integration'],
    relatedArticles: [
      'custom-erp-vs-off-the-shelf-software',
      'why-disconnected-tools-slow-down-business-growth',
      'why-keyob-focuses-on-operational-clarity-before-automation',
    ],
  },
  {
    slug: 'how-systems-integration-helps-teams-work-better',
    kind: 'evergreen',
    title: 'How Systems Integration Helps Teams Work Better',
    excerpt:
      'Systems integration connects the tools a business already uses so data flows automatically — removing the manual handoffs that cause delays, errors and friction between teams.',
    summary:
      'Systems integration connects the tools a business already uses so data flows automatically — removing the manual handoffs that cause delays, errors and friction between teams.',
    category: 'Systems Integration',
    tags: ['systems integration', 'collaboration', 'data flow', 'teams'],
    dateIso: '2026-03-27',
    updatedIso: '2026-03-27',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'How Systems Integration Helps Teams Work Better | KEYOB',
    metaDescription:
      'Systems integration connects existing tools so data flows automatically, removing manual handoffs and giving teams a shared, accurate view to work from.',
    image: '/news/disconnected-tools-collaboration.png',
    imageAlt: 'Separate tools converging into one connected system for teams',
    body: [
      { kind: 'p', text: 'Systems integration helps teams work better by connecting the tools they already use, so information moves between systems automatically instead of being carried by hand. When sales, service and operations share one accurate view, the friction between them largely disappears.' },
      { kind: 'h2', text: 'Why handoffs are where work breaks' },
      { kind: 'p', text: "Most delays and errors happen at the seams between teams — where one system ends and another begins. Integration closes those seams, so a customer's history, an order's status or a job's progress is visible to everyone who needs it." },
      { kind: 'list', items: ['No re-entering the same data across systems', 'A shared, current view across departments', 'Fewer errors and less back-and-forth', 'Faster cycles from one team to the next'] },
    ],
    takeaway:
      'Systems integration connects existing tools so data flows automatically, closing the seams between teams where delays and errors usually occur. The result is a shared, accurate view and far less manual handoff.',
    relatedSolutions: ['Business Systems Integration', 'Operational Dashboards'],
    relatedArticles: [
      'why-disconnected-tools-slow-down-business-growth',
      'how-ai-workflow-automation-reduces-manual-work',
      'what-is-ai-operations-for-smes',
    ],
  },
  {
    slug: 'how-distribution-businesses-can-improve-inventory-visibility',
    kind: 'evergreen',
    title: 'How Distribution Businesses Can Improve Inventory Visibility',
    excerpt:
      "Distribution businesses improve inventory visibility by connecting stock, sales, transfers and demand into one live view — so what the system shows matches what's actually on the shelf.",
    summary:
      "Distribution businesses improve inventory visibility by connecting stock, sales, transfers and demand into one live view — so what the system shows matches what's actually on the shelf.",
    category: 'Industry Notes',
    tags: ['distribution', 'inventory', 'visibility', 'logistics'],
    dateIso: '2026-03-21',
    updatedIso: '2026-03-21',
    readTime: '6 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'How Distribution Businesses Can Improve Inventory Visibility | KEYOB',
    metaDescription:
      "Distribution businesses gain real inventory visibility by connecting stock, sales, transfers and demand into one live view. Here's the practical approach.",
    image: '/news/operational-intelligence-dashboard.png',
    imageAlt: 'Inventory and operations data flowing into a unified visibility dashboard',
    body: [
      { kind: 'p', text: 'Distribution businesses improve inventory visibility by connecting the systems that hold stock, sales, transfers and demand into one synchronised, live view. The goal is simple: what the system shows should match what is actually on the shelf, at every site, right now.' },
      { kind: 'h2', text: 'Why visibility breaks across multiple sites' },
      { kind: 'p', text: 'Each warehouse often runs its own counts and updates on its own rhythm. Reconciled by hand, the numbers are right for a moment and drift out of date quickly. Across a dozen sites, that drift becomes daily firefighting.' },
      { kind: 'list', items: ['Connect stock, transfer and sales data into one source', 'Replace manual reconciliation with automatic updates', 'Surface demand signals early enough to act on', 'Give every site the same live picture'] },
    ],
    takeaway:
      'Distribution businesses get real inventory visibility by connecting stock, sales, transfers and demand into one live view, replacing manual reconciliation so the system always matches the shelf across every site.',
    relatedSolutions: ['Business Systems Integration', 'Operational Dashboards', 'Custom ERP Systems'],
    relatedArticles: [
      'what-is-operational-intelligence',
      'why-disconnected-tools-slow-down-business-growth',
      'how-business-process-automation-improves-operational-visibility',
    ],
  },
  {
    slug: 'ai-automation-for-service-businesses-where-to-start',
    kind: 'evergreen',
    title: 'AI Automation for Service Businesses: Where to Start',
    excerpt:
      'Service businesses should start automation where work is repetitive and visible to customers — request intake, routing and status updates — before anything more ambitious.',
    summary:
      'Service businesses should start automation where work is repetitive and visible to customers — request intake, routing and status updates — before anything more ambitious.',
    category: 'Workflow Automation',
    tags: ['service business', 'automation', 'where to start', 'operations'],
    dateIso: '2026-03-15',
    updatedIso: '2026-03-15',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'AI Automation for Service Businesses: Where to Start | KEYOB',
    metaDescription:
      "For service businesses, the best place to start with AI automation is request intake, routing and status updates. Here's a practical, low-risk first step.",
    image: '/news/customer-communication-team.png',
    imageAlt: 'Customer requests across channels routed into one service workflow',
    body: [
      { kind: 'p', text: "Service businesses should start AI automation where the work is repetitive and customer-facing: how requests come in, how they're routed, and how status is communicated. These are high-frequency, rule-based steps where automation improves the experience quickly and at low risk." },
      { kind: 'h2', text: 'A sensible first sequence' },
      { kind: 'list', items: ['Centralise incoming requests into one place', 'Automate routing to the right person or team', 'Give customers automatic, accurate status updates', 'Then automate the follow-ups and reminders around them'] },
      { kind: 'h2', text: 'Why start here' },
      { kind: 'p', text: "Intake and routing touch every job, so improvements compound. They're also low-judgement, which keeps risk down — and the customer-facing benefit is immediate, which builds momentum for the next step." },
    ],
    takeaway:
      'Service businesses should begin AI automation with request intake, routing and status updates — high-frequency, low-judgement steps that improve the customer experience fast and build momentum for more.',
    relatedSolutions: ['AI Workflow Automation', 'Business Process Automation'],
    relatedArticles: [
      'how-ai-assistants-help-manage-customer-communication',
      'how-ai-workflow-automation-reduces-manual-work',
      'what-is-ai-operations-for-smes',
    ],
  },
  {
    slug: 'why-keyob-focuses-on-operational-clarity-before-automation',
    kind: 'evergreen',
    title: 'Why KEYOB Focuses on Operational Clarity Before Automation',
    excerpt:
      "Automating a process you don't fully understand just makes a mess run faster. KEYOB starts by making operations clear, then automates the right things in the right order.",
    summary:
      "Automating a process you don't fully understand just makes a mess run faster. KEYOB starts by making operations clear, then automates the right things in the right order.",
    category: 'KEYOB Updates',
    tags: ['operational clarity', 'methodology', 'discovery', 'automation'],
    dateIso: '2026-03-09',
    updatedIso: '2026-03-18',
    readTime: '5 min read',
    author: 'KEYOB Editorial Team',
    seoTitle: 'Why KEYOB Focuses on Operational Clarity Before Automation | KEYOB',
    metaDescription:
      "Automating a process you don't understand just makes a mess run faster. Learn why KEYOB establishes operational clarity before automating anything.",
    image: '/news/ai-operations-team-dashboard.png',
    imageAlt: 'Central operations hub bringing disparate business signals into one clear view',
    body: [
      { kind: 'p', text: "KEYOB focuses on operational clarity first because automating a process you don't fully understand only makes a mess run faster. Clarity comes first: map how the business actually works, find where the real friction is, then automate the right things in the right order." },
      { kind: 'h2', text: 'Clarity before tools' },
      { kind: 'p', text: "It's tempting to buy software and hope it imposes order. In practice the order has to come first. Once a process is understood and the highest-cost friction is identified, the choice of what to automate — and what to leave alone — becomes obvious." },
      { kind: 'quote', text: "Most business owners know AI could help them. What they're missing is someone who can show them exactly where — and then build it properly.", cite: 'Jawad Siddique, Founder — KEYOB' },
      { kind: 'h2', text: 'How this shows up in our method' },
      { kind: 'p', text: "It's why our work begins with Discovery and Architecture before any Build. The first deliverable is usually understanding, not software — a clear picture of the operation and a sequenced plan for improving it." },
    ],
    takeaway:
      'KEYOB establishes operational clarity before automating, because automating a misunderstood process just accelerates the problem. Understand the operation first, then automate the right things in the right order.',
    relatedSolutions: ['AI Workflow Automation', 'Custom ERP Systems', 'Business Systems Integration'],
    relatedArticles: [
      'what-is-ai-operations-for-smes',
      'when-does-a-growing-business-need-a-custom-erp-system',
      'how-business-process-automation-improves-operational-visibility',
    ],
  },
];

export const newsArticles: NewsArticle[] = seeds.map((s) => ({
  ...s,
  date: fmtDate(s.dateIso),
  visual: motifByCategory[s.category],
}));
