// ERP practice pages — ported from erp-implementations.html, sap-business-one.html
// and odoo.html. Three routes share these shapes:
//   /what-we-do/erp-implementations
//   /what-we-do/erp-implementations/sap-business-one
//   /what-we-do/erp-implementations/odoo

/** Section heading split around its italic accent: lead <em>em</em> tail. */
export type ErpHead = { lead: string; em: string; tail?: string };

export type ErpCrumb = { label: string; href?: string };
export type ErpCta = { label: string; href: string; external?: boolean };

export type ErpHero = {
  crumbs: ErpCrumb[];
  eyebrow: string;
  heading: ErpHead;
  /** `**bold**` marks a bright inline emphasis. */
  intro: string[];
  primaryCta: ErpCta;
  secondaryCta: ErpCta;
  caption: string;
};

export type ErpSectionHead = { eyebrow: string; heading: ErpHead; sub?: string };
export type ErpDoor = { k: string; title: string; body: string; go: string; href: string };
export type ErpWhy = { n: string; title: string; body: string };
export type ErpStep = { k: string; title: string; body: string };
export type ErpFaqItem = { q: string; a: string };
export type ErpModule = { icon: string; title: string; body: string };
export type ErpPlatformCard = {
  id: 'sap' | 'odoo';
  badge: string;
  name: string;
  tagline: string;
  fitKicker: string;
  fits: string[];
  go: string;
  note: string;
  href: string;
};
export type ErpFitCard = { title: string; items: string[] };
export type ErpFinalCta = { heading: ErpHead; body: string; primary: ErpCta; secondary: ErpCta };

/* ======================================================================
   HUB — /what-we-do/erp-implementations
   ====================================================================== */

export const erpHubHero: ErpHero = {
  crumbs: [{ label: 'What we do', href: '/what-we-do' }, { label: 'ERP Implementations' }],
  eyebrow: 'ERP Implementations',
  heading: { lead: 'Two proven ERP paths.', em: 'One', tail: 'delivery discipline.' },
  intro: [
    'An ERP decides how your business records a sale, releases stock, pays a supplier and closes a month. Get it right and the whole organisation moves faster. Get it wrong and everyone works around it for a decade.',
    'KEYOB implements **SAP Business One** and **Odoo** — chosen on fit, not on preference — and connects each one to the rest of your operating layer.',
  ],
  primaryCta: { label: 'Talk about your ERP', href: '/contact#contact' },
  secondaryCta: { label: 'Compare the two paths', href: '#platforms' },
  caption: 'Your processes → the right ERP → one operating layer',
};

export const erpHubDoors: ErpDoor[] = [
  {
    k: '01 · The practice',
    title: 'Who leads your implementation',
    body: 'The person accountable for delivery, from first assessment to long-term support.',
    go: 'Meet the lead',
    href: '#lead',
  },
  {
    k: '02 · Platform',
    title: 'SAP Business One',
    body: "SAP's ERP for small and mid-sized businesses — finance-first, tightly integrated.",
    go: 'Explore SAP B1',
    href: '#sap-b1',
  },
  {
    k: '03 · Platform',
    title: 'Odoo',
    body: 'A modular open-source suite — broad app range, highly flexible and extensible.',
    go: 'Explore Odoo',
    href: '#odoo',
  },
];

export const erpHubWhyHead: ErpSectionHead = {
  eyebrow: 'Why it matters who implements it',
  heading: { lead: "Most ERP projects don't struggle on", em: 'software.' },
  sub: 'They struggle on the parts either side of it — the processes nobody documented, the data quality discovered too late, the integrations left until last, and the support that ended the week after go-live.',
};

export const erpHubWhy: ErpWhy[] = [
  {
    n: '01',
    title: 'Platform chosen on fit',
    body: 'We implement both SAP Business One and Odoo, so the recommendation follows your processes, complexity and budget — not whichever product we happen to sell.',
  },
  {
    n: '02',
    title: 'Integration designed in',
    body: 'Websites, CRMs, warehouses, dashboards and automations are planned into the architecture from day one, not bolted on after go-live.',
  },
  {
    n: '03',
    title: 'Support that continues',
    body: 'Go-live is where value begins, not where the engagement ends. Enhancements, training and roadmap work carry on with the same team.',
  },
];

export const erpHubLeadHead: ErpSectionHead = {
  eyebrow: '01 · The practice lead',
  heading: { lead: 'Every implementation has', em: 'one name', tail: 'on it.' },
  sub: 'ERP programmes fail quietly when accountability is spread thin. Ours sits with one person, from the first fit assessment to the support model years later.',
};

export const erpHubLead = {
  kicker: 'Leading ERP implementations at KEYOB',
  name: 'Waqas Athar',
  role: 'ERP Implementations Lead · KEYOB',
  photo: '/waqas-athar-pk.webp',
  photoAlt: 'Waqas Athar, ERP Implementations Lead at KEYOB',
  paragraphs: [
    'Waqas Athar leads ERP implementations at KEYOB, giving the practice its direction, delivery standards and technical judgement. His remit spans the full arc of an engagement — the first fit assessment, platform recommendation, implementation and data migration, then the support model that carries a client long after go-live.',
    'His focus is the difference between a system that is installed and one that is genuinely adopted: process clarity first, honest platform advice, integration designed in, and a team that stays present once the business starts depending on it.',
  ],
  quote: {
    lead: "An ERP isn't a project you finish. It's an operating capability you",
    em: 'keep earning',
    tail: '— every release, every process change, every year after go-live.',
  },
  profileCta: { label: 'View full profile', href: '/leadership-team/waqas-athar' },
  linkedin: {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/iamwaqasathar/',
  },
};

export const erpHubPlatformsHead: ErpSectionHead = {
  eyebrow: '02 & 03 · The platforms',
  heading: { lead: 'Two paths. The right one depends on', em: 'your business.' },
  sub: 'Both are capable, proven ERP platforms with very different characters. Part of our job is telling you plainly which one fits — and occasionally, that neither does.',
};

export const erpHubPlatforms: ErpPlatformCard[] = [
  {
    id: 'sap',
    badge: 'Platform 02',
    name: 'SAP Business One',
    tagline:
      "SAP's ERP built for small and mid-sized businesses — a tightly integrated, finance-first core backed by SAP's global ecosystem.",
    fitKicker: 'Typically the better fit when',
    fits: [
      'Finance and compliance rigour lead the requirement',
      'You want a single vendor-backed suite with a mature partner network',
      'Processes suit a proven standard more than heavy customisation',
      'You may grow into the wider SAP ecosystem over time',
    ],
    go: 'Explore SAP Business One',
    note: 'Implementation · migration · support',
    href: '/what-we-do/erp-implementations/sap-business-one',
  },
  {
    id: 'odoo',
    badge: 'Platform 03',
    name: 'Odoo',
    tagline:
      'A modular open-source business suite — a broad range of apps and an architecture built to be extended around how you actually work.',
    fitKicker: 'Typically the better fit when',
    fits: [
      'Your processes are distinctive and need real flexibility',
      'You want to start with a few apps and expand module by module',
      'Open-source extensibility and lower licence entry matter',
      'Tight custom integration with existing tools is central',
    ],
    go: 'Explore Odoo',
    note: 'Implementation · customisation · support',
    href: '/what-we-do/erp-implementations/odoo',
  },
];

export const erpHubDeliveryHead: ErpSectionHead = {
  eyebrow: 'How we deliver',
  heading: { lead: 'The same discipline,', em: 'whichever platform wins.' },
  sub: 'Platforms differ. The way a serious implementation is run does not.',
};

export const erpHubSteps: ErpStep[] = [
  {
    k: 'Stage 01',
    title: 'Discover',
    body: 'Understand the business, the current landscape and the value at stake — then recommend a platform, including the honest answer when neither is right.',
  },
  {
    k: 'Stage 02',
    title: 'Design',
    body: 'Fit-to-standard workshops against your real processes. Gaps identified honestly, integration architecture and data strategy set early.',
  },
  {
    k: 'Stage 03',
    title: 'Build',
    body: 'Iterative configuration, extensions and integrations — validated with real users in short cycles, never one distant demo at the end.',
  },
  {
    k: 'Stage 04',
    title: 'Migrate',
    body: 'Data cleansing, mapping and rehearsed migration runs. Data quality is treated as its own workstream, not a task someone squeezes in.',
  },
  {
    k: 'Stage 05',
    title: 'Go live',
    body: 'Cutover, readiness checks, training and launch support — the unglamorous discipline that decides how go-live week actually feels.',
  },
  {
    k: 'Stage 06',
    title: 'Run & improve',
    body: 'Hypercare into steady-state support, then continuous improvement — the stage where the investment finally compounds.',
  },
];

export const erpHubFaqHead: ErpSectionHead = {
  eyebrow: 'Common questions',
  heading: { lead: 'ERP, answered', em: 'plainly.' },
};

export const erpHubFaq: ErpFaqItem[] = [
  {
    q: "What's the difference between SAP Business One and Odoo?",
    a: "SAP Business One is SAP's ERP built for small and mid-sized businesses, offering a tightly integrated finance-first suite backed by SAP's global ecosystem. Odoo is a modular open-source business suite with a broad app range and a highly flexible, extensible architecture. The right choice depends on process complexity, regulatory requirements, budget and how much customisation the business genuinely needs.",
  },
  {
    q: 'How long does an ERP implementation take?',
    a: "It depends on scope: the number of processes involved, entities and locations, data quality, integrations required and how much customisation is needed. A focused single-entity rollout is considerably shorter than a multi-entity programme with complex integrations. Scoping during discovery is what produces a realistic timeline — and we'd rather give you that than an optimistic one.",
  },
  {
    q: 'What usually causes ERP projects to struggle?',
    a: 'Most difficulties come from outside the software: undocumented business processes, poor data quality discovered late, integrations left until the end, insufficient user training, and support that stops shortly after go-live. Addressing these deliberately is what separates a system that is installed from one that is genuinely adopted.',
  },
  {
    q: 'Can the ERP connect to the systems we already use?',
    a: "Yes. Both platforms support integration with CRM, e-commerce, warehouse and logistics systems, reporting tools and custom applications through APIs and integration services. At KEYOB, integration is designed into the architecture from the start rather than treated as a late-stage task — that's the difference between an ERP that sits in the business and one that sits beside it.",
  },
  {
    q: "We already have an ERP that isn't working. Can you help?",
    a: "Often, yes. Sometimes the issue is configuration, process fit, integration or training rather than the platform itself — and a re-implementation isn't always the answer. We start with an assessment of what's actually causing the friction before recommending anything.",
  },
];

export const erpHubCta: ErpFinalCta = {
  heading: { lead: 'Not sure which ERP fits?', em: 'Start there.' },
  body: "Whether you're choosing a platform, replacing something that never quite worked, or planning a migration — a conversation costs nothing and usually clarifies a great deal.",
  primary: { label: 'Talk about your ERP', href: '/contact#contact' },
  secondary: { label: 'Explore what else we do', href: '/what-we-do' },
};

/* ======================================================================
   SAP BUSINESS ONE — /what-we-do/erp-implementations/sap-business-one
   ====================================================================== */

export const sapHero: ErpHero = {
  crumbs: [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'ERP Implementations', href: '/what-we-do/erp-implementations' },
    { label: 'SAP Business One' },
  ],
  eyebrow: 'Platform · SAP Business One',
  heading: { lead: 'The discipline of SAP,', em: 'sized for your business.' },
  intro: [
    "SAP Business One is SAP's ERP for small and mid-sized businesses — financials, sales, purchasing, inventory and reporting in one integrated system, backed by a global vendor and partner ecosystem.",
    'KEYOB implements it end to end, then connects it to the website, CRM, data and automation your business already runs on.',
  ],
  primaryCta: { label: 'Talk about SAP B1', href: '/contact#contact' },
  secondaryCta: { label: 'Compare with Odoo', href: '/what-we-do/erp-implementations/odoo' },
  caption: 'One integrated core → your operating layer',
};

export const sapWhatHead: ErpSectionHead = {
  eyebrow: 'What it is',
  heading: { lead: 'One system for the', em: 'whole business.' },
};

export const sapWhat = {
  paragraphs: [
    'SAP Business One brings the core functions of a business into a single application — accounting and financials, sales and customer management, purchasing, inventory and production, and reporting — so the same transaction is recorded once and visible everywhere.',
    'It is a different product from SAP S/4HANA, which serves large enterprises. Business One was designed specifically for smaller and mid-sized organisations: one integrated application rather than a suite of modules to assemble.',
    'It runs on-premise or in the cloud, supports multiple currencies and entities, and extends through user-defined fields, configurable workflows, its SDK and service layer APIs, plus a wide catalogue of partner add-ons for industry-specific needs.',
  ],
  factKicker: 'At a glance',
  facts: [
    'Built by SAP for small and mid-sized businesses',
    'Single integrated application, not assembled modules',
    'On-premise or cloud deployment',
    'Multi-currency and multi-entity capable',
    'Extensible via SDK, service layer and add-ons',
    "Backed by SAP's global partner ecosystem",
  ],
};

export const sapModulesHead: ErpSectionHead = {
  eyebrow: 'Core capability',
  heading: { lead: 'What it covers', em: 'out of the box.' },
  sub: 'The functional areas we configure against your actual processes — not an assumed template.',
};

export const sapModules: ErpModule[] = [
  {
    icon: '<path d="M12 3v18M7 7h10M7 12h10M7 17h10"/>',
    title: 'Financials & accounting',
    body: 'General ledger, journals, AR/AP, banking, fixed assets, multi-currency and period-end close.',
  },
  {
    icon: '<circle cx="9" cy="8" r="3"/><path d="M4 20c0-3 2.2-5 5-5s5 2 5 5M16 11h5M16 15h5"/>',
    title: 'Sales & customers',
    body: 'Quotes, orders, deliveries, invoicing and customer records connected straight to finance and stock.',
  },
  {
    icon: '<path d="M4 8h16v12H4zM8 8V5h8v3"/>',
    title: 'Purchasing & suppliers',
    body: 'Requests, purchase orders, goods receipt, supplier invoices and landed-cost handling.',
  },
  {
    icon: '<path d="M3 8l9-5 9 5-9 5-9-5zM3 8v8l9 5 9-5V8"/>',
    title: 'Inventory & warehouse',
    body: 'Stock across warehouses, batches and serials, transfers, stocktakes and valuation methods.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    title: 'Production & MRP',
    body: 'Bills of material, production orders and material requirements planning for makers and assemblers.',
  },
  {
    icon: '<path d="M4 19V9M10 19V5M16 19v-7M2 19h20"/>',
    title: 'Reporting & analytics',
    body: 'Operational reports and dashboards over live data — one version of the numbers.',
  },
];

export const sapFitHead: ErpSectionHead = {
  eyebrow: 'Honest fit',
  heading: { lead: "When SAP Business One is — and isn't —", em: 'the right answer.' },
  sub: 'We implement both SAP Business One and Odoo, so this assessment isn’t a sales pitch. Occasionally the honest answer is neither.',
};

export const sapFitYes: ErpFitCard = {
  title: 'Usually a strong fit when…',
  items: [
    'Financial rigour, audit and compliance lead the requirement',
    'You want one vendor-backed product with a long roadmap',
    'Your processes suit a proven standard more than heavy customisation',
    'Inventory, batches, serials or light manufacturing matter',
    'You operate multiple entities or currencies',
    'Stakeholders value the assurance of the SAP name',
  ],
};

export const sapFitNo: ErpFitCard = {
  title: 'Worth a second look when…',
  items: [
    'Your processes are highly unusual and need deep reshaping',
    'You want to start very small and add apps gradually',
    'Open-source flexibility is a stated priority',
    'Licence budget is the binding constraint',
    'The requirement is really CRM or a single workflow, not full ERP',
  ],
};

export const sapDeliveryHead: ErpSectionHead = {
  eyebrow: 'How we implement',
  heading: { lead: 'Six stages,', em: 'no theatre.' },
};

export const sapSteps: ErpStep[] = [
  {
    k: 'Stage 01',
    title: 'Discover & assess fit',
    body: 'Understand the business, current systems and the value at stake — and confirm SAP Business One is genuinely the right platform before anything is bought.',
  },
  {
    k: 'Stage 02',
    title: 'Design',
    body: 'Fit-to-standard workshops against your real processes. Chart of accounts, item and warehouse structures, workflows and integration architecture set early.',
  },
  {
    k: 'Stage 03',
    title: 'Configure & extend',
    body: 'Iterative configuration, user-defined fields, print layouts, approvals and any add-ons or custom extensions — validated with real users in short cycles.',
  },
  {
    k: 'Stage 04',
    title: 'Migrate data',
    body: 'Cleansing, mapping and rehearsed migration runs for masters, balances and open transactions. Data quality is its own workstream, never an afterthought.',
  },
  {
    k: 'Stage 05',
    title: 'Train & go live',
    body: 'Role-based training, cutover planning, readiness checks and launch support. The unglamorous discipline that decides how go-live week feels.',
  },
  {
    k: 'Stage 06',
    title: 'Support & improve',
    body: 'Hypercare into steady-state support, then enhancements and roadmap work — the stage where the investment finally compounds.',
  },
];

export const sapIntegration = {
  eyebrow: 'The KEYOB difference',
  heading: { lead: "An ERP that doesn't become", em: 'an island.' } as ErpHead,
  body: 'Most SAP B1 partners stop at the edge of the product. Because KEYOB already builds the systems around it, your ERP becomes the core of one connected operating layer instead of another system to reconcile.',
  items: [
    'E-commerce and websites transacting against live stock and pricing',
    'CRM joined to finance, so sales and accounts stop reconciling by hand',
    'Warehouse, logistics and scanning connected to inventory',
    'One reporting layer spanning SAP B1 and everything outside it',
    'Workflow automation removing manual steps between systems',
    'Practical AI applied where it measurably removes work or risk',
  ],
};

export const sapFaqHead: ErpSectionHead = {
  eyebrow: 'Common questions',
  heading: { lead: 'SAP Business One,', em: 'answered plainly.' },
};

export const sapFaq: ErpFaqItem[] = [
  {
    q: 'What is SAP Business One?',
    a: "SAP Business One is SAP's ERP solution designed for small and mid-sized businesses. It brings financials, sales, purchasing, inventory and reporting into a single integrated system, and runs either on-premise or in the cloud.",
  },
  {
    q: 'How is it different from SAP S/4HANA?',
    a: "They're different products for different markets. Business One is a single integrated application built for smaller and mid-sized organisations. S/4HANA is SAP's large-enterprise suite built on the HANA in-memory database, designed for far greater scale and process complexity. Choosing between them is a question of size and complexity, not ambition.",
  },
  {
    q: 'Can it be customised to how we work?',
    a: "Yes. It supports user-defined fields and tables, configurable workflows, approval procedures and print layouts, and extends through its SDK and service layer APIs. There's also a wide catalogue of partner add-ons for industry-specific requirements. That said, we generally recommend adopting the standard where it's sensible — customisation carries a maintenance cost forever.",
  },
  {
    q: 'Will it integrate with our other systems?',
    a: 'Yes. Its service layer and DI API allow connections to e-commerce platforms, CRM systems, warehouse and logistics tools, payment providers and custom applications. At KEYOB, integration is designed into the architecture from the start rather than treated as a late-stage task.',
  },
  {
    q: 'What happens after go-live?',
    a: 'Hypercare first, then a steady-state support model covering incidents, enhancements, user questions and roadmap work. The same team that implemented the system continues to support it.',
  },
];

export const sapCompare = {
  title: 'Still weighing it against Odoo?',
  body: 'The two suit different businesses. We implement both, so we can walk you through the honest trade-offs rather than the marketing.',
  cta: { label: 'Explore Odoo', href: '/what-we-do/erp-implementations/odoo' } as ErpCta,
};

export const sapCta: ErpFinalCta = {
  heading: { lead: 'Considering SAP Business One?', em: 'Start with a fit assessment.' },
  body: 'Before licences, before timelines — an honest read on whether this is the right platform for how your business actually runs.',
  primary: { label: 'Talk about SAP B1', href: '/contact#contact' },
  secondary: { label: 'Back to ERP Implementations', href: '/what-we-do/erp-implementations' },
};

/* ======================================================================
   ODOO — /what-we-do/erp-implementations/odoo
   ====================================================================== */

export const odooHero: ErpHero = {
  crumbs: [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'ERP Implementations', href: '/what-we-do/erp-implementations' },
    { label: 'Odoo' },
  ],
  eyebrow: 'Platform · Odoo',
  heading: { lead: 'Start with what you need.', em: 'Add the rest', tail: 'as you grow.' },
  intro: [
    'Odoo is a modular business suite — accounting, sales, CRM, inventory, manufacturing, projects, HR, website and e-commerce — where you adopt the apps you need and expand module by module.',
    'Its openness is the point: an architecture built to be extended around how your business actually works, rather than the other way round.',
  ],
  primaryCta: { label: 'Talk about Odoo', href: '/contact#contact' },
  secondaryCta: {
    label: 'Compare with SAP B1',
    href: '/what-we-do/erp-implementations/sap-business-one',
  },
  caption: 'Modular apps → one database → your operating layer',
};

export const odooWhatHead: ErpSectionHead = {
  eyebrow: 'What it is',
  heading: { lead: 'A suite you assemble', em: 'around your business.' },
};

export const odooWhat = {
  paragraphs: [
    'Odoo is a modular business management suite covering accounting, sales, CRM, inventory, manufacturing, purchasing, project management, HR, website and e-commerce — with a large catalogue of further apps beyond the core.',
    'Rather than deploying everything at once, most organisations start with the apps that address their sharpest problem and add others over time. Because the apps share one database, adding a module extends the same system rather than creating another silo.',
    "It comes in two editions: an open-source Community edition, and a commercial Enterprise edition adding further features, mobile support and Odoo's hosting and support services. Its architecture is built for extension — custom modules, adjusted views and workflows, automated actions and APIs for integration.",
  ],
  factKicker: 'At a glance',
  facts: [
    'Modular — adopt apps individually, expand over time',
    'Community (open-source) and Enterprise editions',
    'Shared database across apps, so modules connect natively',
    'Built to be extended with custom modules',
    'External APIs for integration',
    'Cloud or self-hosted deployment',
  ],
};

export const odooModulesHead: ErpSectionHead = {
  eyebrow: 'Core apps',
  heading: { lead: 'Where most implementations', em: 'begin.' },
  sub: 'The apps we most often configure first — chosen against your priorities, not deployed wholesale.',
};

export const odooModules: ErpModule[] = [
  {
    icon: '<path d="M12 3v18M7 7h10M7 12h10M7 17h10"/>',
    title: 'Accounting',
    body: 'Invoicing, bills, bank reconciliation, taxes and reporting at the centre of the system.',
  },
  {
    icon: '<path d="M4 19l5-6 4 3 7-9"/><path d="M16 7h4v4"/>',
    title: 'CRM & sales',
    body: 'Pipeline, quotations, orders and customer history joined straight to invoicing.',
  },
  {
    icon: '<path d="M3 8l9-5 9 5-9 5-9-5zM3 8v8l9 5 9-5V8"/>',
    title: 'Inventory',
    body: 'Multi-warehouse stock, lots and serials, transfers, replenishment and valuation.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    title: 'Manufacturing (MRP)',
    body: 'Bills of material, work orders, routings and planning for makers and assemblers.',
  },
  {
    icon: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    title: 'Projects & services',
    body: 'Tasks, timesheets and project profitability for services businesses billing time.',
  },
  {
    icon: '<path d="M4 7h16v13H4zM4 11h16"/><path d="M9 16h6"/>',
    title: 'Website & e-commerce',
    body: 'Storefront and site running against the same product, stock and customer data.',
  },
];

export const odooFitHead: ErpSectionHead = {
  eyebrow: 'Honest fit',
  heading: { lead: "When Odoo is — and isn't —", em: 'the right answer.' },
  sub: "We implement both Odoo and SAP Business One, so this isn't a pitch. Occasionally the honest answer is neither.",
};

export const odooFitYes: ErpFitCard = {
  title: 'Usually a strong fit when…',
  items: [
    'Your processes are distinctive and need genuine flexibility',
    "You'd rather start with a few apps than deploy everything",
    'Open-source extensibility is a stated priority',
    'Website or e-commerce should share the same data as operations',
    'You want lower licence entry with room to scale',
    'Custom integration with existing tools is central',
  ],
};

export const odooFitNo: ErpFitCard = {
  title: 'Worth a second look when…',
  items: [
    'Heavy financial, audit or compliance rigour leads everything',
    "Stakeholders specifically want a single global vendor's assurance",
    "You'd prefer a proven standard over configuring your own shape",
    'Nobody internally will own the flexibility once it exists',
  ],
};

export const odooDeliveryHead: ErpSectionHead = {
  eyebrow: 'How we implement',
  heading: { lead: 'Six stages,', em: 'no theatre.' },
};

export const odooSteps: ErpStep[] = [
  {
    k: 'Stage 01',
    title: 'Discover & select apps',
    body: 'Understand the business and the value at stake, then decide which apps to start with — and confirm Odoo is genuinely the right platform.',
  },
  {
    k: 'Stage 02',
    title: 'Design',
    body: 'Workshops against your real processes. Chart of accounts, product and warehouse structures, workflows and integration architecture set early.',
  },
  {
    k: 'Stage 03',
    title: 'Configure & customise',
    body: 'Standard configuration first, custom modules only where they earn their keep — validated with real users in short cycles. Every customisation carries maintenance forever, so we apply them deliberately.',
  },
  {
    k: 'Stage 04',
    title: 'Migrate data',
    body: 'Cleansing, mapping and rehearsed migration runs for masters, balances and open transactions. Data quality is its own workstream.',
  },
  {
    k: 'Stage 05',
    title: 'Train & go live',
    body: 'Role-based training, cutover planning, readiness checks and launch support — the discipline that decides how go-live week actually feels.',
  },
  {
    k: 'Stage 06',
    title: 'Support & expand',
    body: 'Hypercare into steady-state support, then the next apps and improvements as the business grows into them.',
  },
];

export const odooIntegration = {
  eyebrow: 'The KEYOB difference',
  heading: { lead: 'Flexibility is only useful', em: 'if someone shapes it.' } as ErpHead,
  body: "Odoo's openness is its strength and its risk — an extensible system with nobody guiding it becomes a tangle. Because KEYOB builds the surrounding systems too, your Odoo stays deliberate, documented and connected.",
  items: [
    'Storefront and website running on the same product and stock data',
    'Existing CRM or marketing tools joined to sales and invoicing',
    'Logistics, shipping and payment providers wired in',
    'One reporting layer spanning Odoo and everything outside it',
    'Custom modules built to upgrade cleanly, not to trap you',
    'Practical AI applied where it measurably removes work or risk',
  ],
};

export const odooFaqHead: ErpSectionHead = {
  eyebrow: 'Common questions',
  heading: { lead: 'Odoo,', em: 'answered plainly.' },
};

export const odooFaq: ErpFaqItem[] = [
  {
    q: 'What is Odoo?',
    a: 'Odoo is a modular business management suite covering accounting, sales, CRM, inventory, manufacturing, purchasing, projects, HR, website and e-commerce. Organisations typically start with the apps they need and add more over time, with all apps sharing one database.',
  },
  {
    q: "What's the difference between Community and Enterprise?",
    a: "Community is the free open-source edition. Enterprise is the paid edition, adding further features, mobile support, and access to Odoo's hosting and support services. Which one suits you depends on the functionality you need and how the system will be hosted and maintained — we'll give you a straight recommendation.",
  },
  {
    q: 'How much can it be customised?',
    a: 'A great deal — Odoo is designed to be extended through custom modules, adjusted fields and views, automated actions and workflow changes. That flexibility is a genuine strength, but it should be applied deliberately: every customisation carries maintenance and upgrade cost forever. We start from the standard and customise where it clearly earns its place.',
  },
  {
    q: 'Will it integrate with our other systems?',
    a: 'Yes. Odoo exposes external APIs commonly used to connect it with e-commerce platforms, payment providers, logistics services, reporting tools and custom applications. At KEYOB, integration is designed into the architecture from the start.',
  },
  {
    q: 'What happens after go-live?',
    a: 'Hypercare first, then steady-state support covering incidents, enhancements, user questions and the next apps as you grow into them. The same team that implemented the system continues to support it.',
  },
];

export const odooCompare = {
  title: 'Still weighing it against SAP Business One?',
  body: 'The two suit different businesses. We implement both, so we can walk you through the honest trade-offs rather than the marketing.',
  cta: {
    label: 'Explore SAP Business One',
    href: '/what-we-do/erp-implementations/sap-business-one',
  } as ErpCta,
};

export const odooCta: ErpFinalCta = {
  heading: { lead: 'Considering Odoo?', em: 'Start with a fit assessment.' },
  body: 'Before apps, before licences — an honest read on whether this is the right platform for how your business actually runs.',
  primary: { label: 'Talk about Odoo', href: '/contact#contact' },
  secondary: { label: 'Back to ERP Implementations', href: '/what-we-do/erp-implementations' },
};
