export type NewsCategory =
  | 'AI Operations'
  | 'Workflow Automation'
  | 'ERP Systems'
  | 'Business Process Automation'
  | 'Systems Integration'
  | 'Industry Notes'
  | 'KEYOB Updates';

export type NewsVisual = 'flow' | 'grid' | 'hub';

export type NewsBodySection =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] };

export type NewsArticle = {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  updatedIso?: string;
  readTime: string;
  tags: string[];
  visual: NewsVisual;
  featured?: boolean;
  author: string;
  summary: string;
  body: NewsBodySection[];
  takeaway: string;
};

export const newsCategories: { key: NewsCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'AI Operations', label: 'AI Operations' },
  { key: 'Workflow Automation', label: 'Workflow Automation' },
  { key: 'ERP Systems', label: 'ERP Systems' },
  { key: 'Business Process Automation', label: 'Business Process Automation' },
  { key: 'Systems Integration', label: 'Systems Integration' },
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

export const relatedSolutions = [
  { label: 'AI Workflow Automation', href: '/#capabilities' },
  { label: 'Custom ERP Systems', href: '/#capabilities' },
  { label: 'Business Systems Integration', href: '/#capabilities' },
  { label: 'Operational Dashboards', href: '/#capabilities' },
];

export const newsArticles: NewsArticle[] = [
  {
    slug: 'what-is-ai-operations-for-smes',
    category: 'AI Operations',
    title: 'What Is AI Operations for SMEs?',
    excerpt:
      'AI operations is the practical discipline of putting AI to work inside how a business actually runs — its workflows, data and decisions — rather than bolting on tools for their own sake.',
    date: '12 May 2026',
    dateIso: '2026-05-12',
    updatedIso: '2026-05-20',
    readTime: '6 min read',
    tags: ['AI operations', 'SME', 'operational clarity'],
    visual: 'hub',
    featured: true,
    author: 'KEYOB Editorial Team',
    summary:
      "AI operations is the practical discipline of putting AI to work inside how a business actually runs — its workflows, data and decisions — rather than bolting on tools for their own sake.",
    body: [
      { kind: 'p', text: "AI operations is the practical work of applying AI inside the systems a business already runs — its workflows, its data, and the decisions people make every day. It is not a product you buy. It is a way of running operations so that repetitive work is automated, information is visible in real time, and decisions are made on current data rather than last week's reports." },
      { kind: 'h2', text: 'How is AI operations different from "using AI"?' },
      { kind: 'p', text: "Most businesses encounter AI as a feature inside a single tool. AI operations is broader: it looks across the whole business, finds where time is lost and where systems don't connect, and puts intelligence where it changes an outcome. The goal is a connected operating layer, not a collection of disconnected clever features." },
      { kind: 'h2', text: 'Where does it help an SME first?' },
      {
        kind: 'list',
        items: [
          'Automating manual, rule-based work that drains staff hours',
          "Connecting tools that don't talk to each other today",
          'Turning operational data into live visibility instead of manual reports',
          'Reducing the coordination overhead that grows with every new hire or site',
        ],
      },
      { kind: 'h3', text: 'A simple example' },
      { kind: 'p', text: "A distribution business reconciling stock by hand across several systems doesn't need a chatbot. It needs its inventory, sales and transfer data connected into one live view. That is AI operations: the unglamorous, high-leverage work of making the business legible to itself." },
    ],
    takeaway:
      "AI operations is applying AI inside a business's real workflows, data and decisions — automating repetitive work, connecting fragmented tools, and making operations visible in real time. For SMEs it starts with clarity, not with buying more software.",
  },
  {
    slug: 'ai-workflow-automation-reduces-manual-work',
    category: 'Workflow Automation',
    title: 'How AI Workflow Automation Reduces Manual Work',
    excerpt: 'AI workflow automation handles the repetitive, rule-based steps that consume staff time, so people can focus on the work that needs judgement.',
    date: '8 May 2026',
    dateIso: '2026-05-08',
    readTime: '5 min read',
    tags: ['workflow automation', 'productivity', 'AI'],
    visual: 'flow',
    author: 'KEYOB Editorial Team',
    summary: 'AI workflow automation handles the repetitive, rule-based steps that consume staff time, so people can focus on the work that needs judgement.',
    body: [
      { kind: 'p', text: "The hours a team loses to manual work are rarely lost to single big tasks. They are lost to thousands of small ones: pulling a number from one system into another, chasing an approval, updating a status field, writing the same short reply for the fifth time today." },
      { kind: 'h2', text: 'What workflow automation actually does' },
      { kind: 'p', text: "Workflow automation takes the rule-based parts of these tasks and lets software do them. AI extends that — it can classify a request, draft a sensible first response, or route an item to the right person based on its content. The combination removes the friction without removing the human from the work that needs them." },
      { kind: 'h2', text: 'Where to start' },
      {
        kind: 'list',
        items: [
          'Find the tasks that happen most often and take the longest in aggregate.',
          'Map the rule-based steps inside each one — the parts a person does the same way every time.',
          'Automate those steps first; reserve human judgement for the parts that actually need it.',
        ],
      },
    ],
    takeaway: "Automate the repetitive, rule-based steps a person does the same way every time. Keep humans on the parts that need judgement.",
  },
  {
    slug: 'custom-erp-vs-off-the-shelf',
    category: 'ERP Systems',
    title: 'Custom ERP vs Off-the-Shelf Software: What Growing Businesses Should Know',
    excerpt: 'Off-the-shelf is faster to start; custom ERP fits your actual operations. The right choice depends on how unusual your workflows are.',
    date: '2 May 2026',
    dateIso: '2026-05-02',
    readTime: '7 min read',
    tags: ['ERP', 'custom software', 'scaling'],
    visual: 'grid',
    author: 'KEYOB Editorial Team',
    summary: 'Off-the-shelf is faster to start; custom ERP fits your actual operations. The right choice depends on how unusual your workflows are.',
    body: [
      { kind: 'p', text: "Off-the-shelf ERPs work best when a business operates close to the patterns the software was designed around. Custom systems pay off when the gap between how the business runs and how the software thinks it should run becomes the most expensive thing in the room." },
      { kind: 'h2', text: 'When off-the-shelf is the right call' },
      {
        kind: 'list',
        items: [
          'The business is small enough that no department has carved out unusual workflows.',
          'Compliance, accounting and stock control follow industry-standard patterns.',
          'Speed of setup matters more than fit.',
        ],
      },
      { kind: 'h2', text: 'When a custom ERP earns its place' },
      {
        kind: 'list',
        items: [
          'Workarounds inside the off-the-shelf system cost more time than configuration ever did.',
          'Reports require manual exports because the standard ones do not match how the business measures itself.',
          'Growth introduces new product lines or sites the standard model was never designed for.',
        ],
      },
    ],
    takeaway: 'Default to off-the-shelf until the workarounds outpace the configuration. The trigger to go custom is operational cost, not preference.',
  },
  {
    slug: 'disconnected-tools-slow-growth',
    category: 'Systems Integration',
    title: 'Why Disconnected Tools Slow Down Business Growth',
    excerpt: "When your tools don't talk to each other, people become the integration layer — and that hidden coordination cost scales with you.",
    date: '26 Apr 2026',
    dateIso: '2026-04-26',
    readTime: '5 min read',
    tags: ['systems integration', 'data silos', 'growth'],
    visual: 'hub',
    author: 'KEYOB Editorial Team',
    summary: "When your tools don't talk to each other, people become the integration layer — and that hidden coordination cost scales with you.",
    body: [
      { kind: 'p', text: 'Every new tool you adopt without integrating it adds a small ongoing tax: someone exports a CSV, someone copies a number, someone phones a branch to confirm. None of these tasks look expensive on their own. Added up across a year, they consume more hours than a properly built integration ever would.' },
      { kind: 'h2', text: 'The pattern to watch for' },
      { kind: 'p', text: "When you find yourself hiring a coordinator whose main job is to keep two systems in sync, the integration cost has already exceeded the cost of building the integration. That is the signal." },
      { kind: 'h2', text: 'What integration buys you' },
      {
        kind: 'list',
        items: [
          'Records that match across systems without manual reconciliation.',
          'Handoffs that happen in seconds rather than days.',
          'Reports that reflect today, not the last export.',
        ],
      },
    ],
    takeaway: "Disconnected tools turn people into the integration layer. The coordination cost is real, hidden, and grows faster than the business does.",
  },
  {
    slug: 'bpa-improves-operational-visibility',
    category: 'Business Process Automation',
    title: 'How Business Process Automation Improves Operational Visibility',
    excerpt: 'When a process runs through a system instead of by hand, every step leaves a trace — turning automation into a live picture.',
    date: '20 Apr 2026',
    dateIso: '2026-04-20',
    readTime: '5 min read',
    tags: ['BPA', 'visibility', 'reporting'],
    visual: 'flow',
    author: 'KEYOB Editorial Team',
    summary: 'When a process runs through a system instead of by hand, every step leaves a trace — turning automation into a live picture.',
    body: [
      { kind: 'p', text: "Manual processes can be efficient, but they are usually invisible. The work gets done, but leaders only see the result — not the steps, not the timing, not the bottlenecks." },
      { kind: 'h2', text: 'Why automation changes that' },
      { kind: 'p', text: "When a process runs through a system, every step is timestamped and traceable. You can see what is in progress, where things are stuck, and how long each step actually takes. The reporting is no longer something built after the fact — it is a byproduct of the work itself." },
      { kind: 'h2', text: 'Where this shows up first' },
      {
        kind: 'list',
        items: [
          'Approval workflows where you can see exactly who is sitting on what.',
          'Order fulfilment with live status across every stage.',
          'Customer requests with measurable SLAs.',
        ],
      },
    ],
    takeaway: 'Automate a process and you get visibility for free — every step leaves a trace, and reporting becomes a byproduct of the work.',
  },
  {
    slug: 'what-is-operational-intelligence',
    category: 'AI Operations',
    title: 'What Is Operational Intelligence?',
    excerpt: "Operational intelligence is the ability to understand and act on what's happening in your business right now, using live data.",
    date: '14 Apr 2026',
    dateIso: '2026-04-14',
    readTime: '6 min read',
    tags: ['operational intelligence', 'real-time'],
    visual: 'hub',
    author: 'KEYOB Editorial Team',
    summary: "Operational intelligence is the ability to understand and act on what's happening in your business right now, using live data.",
    body: [
      { kind: 'p', text: "Operational intelligence is not analytics-after-the-fact. It is the live view of the business in motion: what is happening right now, what is changing, and what needs attention before it becomes a problem." },
      { kind: 'h2', text: 'What separates it from reporting' },
      { kind: 'p', text: "Traditional reporting answers questions about yesterday. Operational intelligence answers questions about right now — and surfaces the ones you should be asking but did not think to." },
      { kind: 'h2', text: 'How it gets built' },
      {
        kind: 'list',
        items: [
          'Connect the operational systems so the same record means the same thing across every tool.',
          'Stream the changes that matter into one place.',
          'Surface them in a view that fits how the business actually makes decisions.',
        ],
      },
    ],
    takeaway: 'Operational intelligence is the present-tense view of the business. It complements reporting; it does not replace it.',
  },
  {
    slug: 'ai-assistants-customer-communication',
    category: 'AI Operations',
    title: 'How AI Assistants Help Businesses Manage Customer Communication',
    excerpt: 'AI assistants handle routine messages and route the rest with context — improving response times without losing the human touch.',
    date: '8 Apr 2026',
    dateIso: '2026-04-08',
    readTime: '5 min read',
    tags: ['AI assistant', 'customer service'],
    visual: 'flow',
    author: 'KEYOB Editorial Team',
    summary: 'AI assistants handle routine messages and route the rest with context — improving response times without losing the human touch.',
    body: [
      { kind: 'p', text: "Most customer messages fall into a handful of categories. AI assistants are good at the routine ones — confirmations, status questions, simple FAQs — and at preparing the rest for a person to handle quickly." },
      { kind: 'h2', text: 'Where they pay off' },
      {
        kind: 'list',
        items: [
          'Routine queries answered immediately, around the clock.',
          'Inbound messages classified and routed to the right person on first contact.',
          'Conversation context summarised before a human ever opens the thread.',
        ],
      },
      { kind: 'h2', text: 'Where humans stay in the loop' },
      { kind: 'p', text: "Sensitive cases, complaints, and anything where the relationship matters more than the message itself. The point is not to replace the person — it is to remove the friction around them." },
    ],
    takeaway: 'AI assistants take routine messages off the team and prepare the rest with context. Response times go up; human judgement stays where it matters.',
  },
  {
    slug: 'when-growing-business-needs-custom-erp',
    category: 'ERP Systems',
    title: 'When Does a Growing Business Need a Custom ERP System?',
    excerpt: 'A growing business needs a custom ERP when standard tools cost more in workarounds and manual coordination than a tailored system would.',
    date: '2 Apr 2026',
    dateIso: '2026-04-02',
    readTime: '6 min read',
    tags: ['ERP', 'scaling', 'operations'],
    visual: 'grid',
    author: 'KEYOB Editorial Team',
    summary: 'A growing business needs a custom ERP when standard tools cost more in workarounds and manual coordination than a tailored system would.',
    body: [
      { kind: 'p', text: "Custom is rarely the first answer. It usually becomes the right answer after a business has spent a year or two patching gaps in a standard tool and is starting to see the patch tax in its operating margin." },
      { kind: 'h2', text: 'Three signals it is time' },
      {
        kind: 'list',
        items: [
          'Quarterly reporting starts with a CSV export and a spreadsheet that lives in someone\'s head.',
          'Teams use shared inboxes or chat groups as a workflow tool because the system has no place to track the work.',
          'New product lines, sites or business units do not fit the standard data model.',
        ],
      },
      { kind: 'h2', text: 'What custom does well' },
      { kind: 'p', text: "A custom system encodes the way this business actually runs — including the parts that make it distinctive. The tool stops being a constraint and starts being a multiplier." },
    ],
    takeaway: 'Standard ERPs are great until the workarounds become the operating model. Custom earns its place when the patch tax exceeds the build cost.',
  },
  {
    slug: 'integration-helps-teams-work-better',
    category: 'Systems Integration',
    title: 'How Systems Integration Helps Teams Work Better',
    excerpt: 'Systems integration connects the tools a business already uses so data flows automatically — removing manual handoffs.',
    date: '27 Mar 2026',
    dateIso: '2026-03-27',
    readTime: '5 min read',
    tags: ['integration', 'collaboration'],
    visual: 'hub',
    author: 'KEYOB Editorial Team',
    summary: 'Systems integration connects the tools a business already uses so data flows automatically — removing manual handoffs.',
    body: [
      { kind: 'p', text: "Integration is unglamorous and high-leverage. Done well, you stop noticing it — work simply moves from one place to another without anyone copying a value." },
      { kind: 'h2', text: 'The day-to-day impact' },
      {
        kind: 'list',
        items: [
          'Sales orders move into operations without re-keying.',
          'Customer records update everywhere when changed in one place.',
          'Finance sees the picture without chasing weekly exports.',
        ],
      },
      { kind: 'h2', text: 'Why teams feel it first' },
      { kind: 'p', text: "Integration removes the small interruptions that fragment a working day: the moment you stop what you are doing to update a field, to confirm a number, to forward an email. Those small interruptions are where focus dies." },
    ],
    takeaway: "Integration removes the small handoffs that fragment a team's day. Less context-switching, more time on the work itself.",
  },
  {
    slug: 'distribution-inventory-visibility',
    category: 'Industry Notes',
    title: 'How Distribution Businesses Can Improve Inventory Visibility',
    excerpt: "Connect stock, sales, transfers and demand into one live view — so what the system shows matches what's actually on the shelf.",
    date: '21 Mar 2026',
    dateIso: '2026-03-21',
    readTime: '6 min read',
    tags: ['distribution', 'inventory', 'logistics'],
    visual: 'grid',
    author: 'KEYOB Editorial Team',
    summary: "Connect stock, sales, transfers and demand into one live view — so what the system shows matches what's actually on the shelf.",
    body: [
      { kind: 'p', text: "Distribution businesses live or die on inventory accuracy. The moment what the system says diverges from what is on the shelf, every downstream decision starts working with bad data." },
      { kind: 'h2', text: 'The fastest fix' },
      { kind: 'p', text: "Most accuracy problems trace back to disconnected systems rather than counting errors. Connect inventory, sales, transfers and demand into one live source of truth and the gap closes." },
      { kind: 'h2', text: 'What changes for the team' },
      {
        kind: 'list',
        items: [
          'Branch managers see live stock without phone calls.',
          'Transfers reconcile automatically as they happen.',
          'Demand signals reach purchasing in time to act on them.',
        ],
      },
    ],
    takeaway: 'Inventory accuracy is a connectivity problem more than a counting problem. Wire the systems together and the numbers stabilise.',
  },
  {
    slug: 'ai-automation-service-businesses-start',
    category: 'Workflow Automation',
    title: 'AI Automation for Service Businesses: Where to Start',
    excerpt: 'Start automation where work is repetitive and visible to customers — request intake, routing and status updates.',
    date: '15 Mar 2026',
    dateIso: '2026-03-15',
    readTime: '5 min read',
    tags: ['service business', 'automation'],
    visual: 'flow',
    author: 'KEYOB Editorial Team',
    summary: 'Start automation where work is repetitive and visible to customers — request intake, routing and status updates.',
    body: [
      { kind: 'p', text: "Service businesses see the biggest gains where customers are watching: response times, follow-throughs, status updates. These are the moments where automation has the most visible payoff." },
      { kind: 'h2', text: 'Three good starting points' },
      {
        kind: 'list',
        items: [
          'Request intake — single channel, classified and routed on arrival.',
          'Status updates — proactive, not on demand.',
          'Follow-up cadence — handled by the system, supervised by a person.',
        ],
      },
      { kind: 'h2', text: 'What good looks like' },
      { kind: 'p', text: "Customers do not see the automation; they see faster responses and consistent follow-through. The team does not feel replaced; they feel less buried." },
    ],
    takeaway: "Service automation wins where customers can feel the difference: faster acknowledgement, predictable updates, and no requests falling through.",
  },
  {
    slug: 'operational-clarity-before-automation',
    category: 'KEYOB Updates',
    title: 'Why KEYOB Focuses on Operational Clarity Before Automation',
    excerpt: "Automating a process you don't understand just makes a mess run faster. Clarity comes first, then the right automation.",
    date: '9 Mar 2026',
    dateIso: '2026-03-09',
    readTime: '5 min read',
    tags: ['operational clarity', 'method'],
    visual: 'hub',
    author: 'KEYOB Editorial Team',
    summary: "Automating a process you don't understand just makes a mess run faster. Clarity comes first, then the right automation.",
    body: [
      { kind: 'p', text: "We start every engagement the same way: by understanding what the business actually does, step by step, before we touch a tool. Skipping that step is the most reliable way to automate the wrong thing." },
      { kind: 'h2', text: 'Why clarity is the first deliverable' },
      { kind: 'p', text: "An accurate map of how work flows today tells us where the actual cost lives — and where automation will earn its place. Without it, every decision is a guess." },
      { kind: 'h2', text: 'How we make the map' },
      {
        kind: 'list',
        items: [
          'Sit with each team that touches the process.',
          'Track each step end to end, including the workarounds.',
          'Quantify the time and money the workarounds cost today.',
        ],
      },
    ],
    takeaway: 'Clarity is the first deliverable. Automation comes second. Skip the first and you accelerate the wrong things.',
  },
];
