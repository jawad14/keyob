/* Static content data for KEYOB website */

export type Domain = {
  n: string;
  titleHtml: string;
  tag: string;
  problem: string;
  outcome: string;
  iconPath: string;
};

export type Phase = {
  tag: string;
  titleHtml: string;
  summary: string;
  capabilities: string[];
  deliverableLabel: string;
  deliverables: { title: string; meta: string; paletteIndex: number }[];
};

export type Industry = {
  title: string;
  subtitle: string;
  body: string;
  challenges: string[];
};

export type Outcome = {
  industry: string;
  tag: string;
  stat: string;
  statSub: string;
  story: string;
  paletteIndex: number;
  image: string;
  imageAlt: string;
  slug: string;
};

export type ValueCard = {
  tag: string;
  heading: string;
  body: string;
  href: string;
  variant: 'vcard--cool' | 'vcard--warm' | 'vcard--lime';
  wide?: boolean;
  svgPaths: string;
};

export const palettes: [string, string][] = [
  ['#07101E', '#19C6E8'],
  ['#123C8C', '#19C6E8'],
  ['#07101E', '#2563D9'],
  ['#0E2150', '#5EE0FF'],
  ['#123C8C', '#2563D9'],
  ['#07101E', '#7BB4FF'],
  ['#0E1A30', '#19C6E8'],
];

export function getThumbBg([dark, accent]: [string, string]): string {
  return `radial-gradient(120% 80% at 20% 20%, ${accent}38, transparent 60%), radial-gradient(80% 100% at 90% 100%, ${accent}55, transparent 60%), linear-gradient(140deg, ${dark} 0%, #050912 100%)`;
}

export function getMiniBg([dark, accent]: [string, string]): string {
  return `radial-gradient(100% 100% at 20% 20%, ${accent}55, transparent 60%), linear-gradient(140deg, ${dark}, #050912)`;
}

/** @deprecated use getThumbBg */
export function paintThumb(p: [string, string]): string {
  return `background: ${getThumbBg(p)};`;
}

/** @deprecated use getMiniBg */
export function paintMini(p: [string, string]): string {
  return `background: ${getMiniBg(p)};`;
}

export const valueCards: ValueCard[] = [
  {
    tag: 'Customer Experience',
    heading: 'Acquire new customers, predictably.',
    body: 'Build the next generation of customer experiences through agentic AI and intelligent agent development — turning attention into pipeline.',
    href: '#capabilities',
    variant: 'vcard--cool',
    wide: true,
    svgPaths: '<circle cx="58" cy="32" r="9"/><path d="M58 41 L58 78"/><path d="M40 56 L58 60 L78 50"/><path d="M58 78 L46 110 M58 78 L72 110"/><path d="M100 28 L100 38 M95 33 L105 33"/><path d="M108 68 L108 74 M105 71 L111 71"/><path d="M30 92 L30 98 M27 95 L33 95"/><path d="M82 24 L82 30 M79 27 L85 27"/>',
  },
  {
    tag: 'Growth & Innovation',
    heading: 'Close business gaps 10× faster.',
    body: 'Identify where AI creates measurable value across your organization — and execute against it at a step-change pace.',
    href: '#methodology',
    variant: 'vcard--warm',
    wide: true,
    svgPaths: '<path d="M88 28 L112 52 L82 82 L58 58 Z"/><circle cx="94" cy="46" r="5"/><path d="M58 72 L42 96 M64 78 L52 108 M70 84 L62 102"/><circle cx="28" cy="36" r="8"/><path d="M25 47 L31 47"/><path d="M28 28 L28 22 M22 36 L18 36 M34 36 L38 36 M23 30 L19 26 M33 30 L37 26"/><circle cx="108" cy="100" r="9"/><circle cx="108" cy="100" r="3"/><path d="M108 88 L108 92 M108 108 L108 112 M120 100 L116 100 M96 100 L100 100"/>',
  },
  {
    tag: 'Operations & Efficiency',
    heading: 'Modernise without the rebuild.',
    body: 'Modernise legacy assets and accelerate product team productivity with AI — lifting automation while taking cost out.',
    href: '#capabilities',
    variant: 'vcard--cool',
    svgPaths: '<rect x="18" y="20" width="34" height="20" rx="3"/><rect x="18" y="54" width="22" height="18" rx="3"/><circle cx="66" cy="63" r="9"/><path d="M52 30 L78 30 L78 54"/><path d="M40 63 L57 63"/><rect x="50" y="88" width="76" height="30" rx="3"/><path d="M58 98 L66 98 M72 98 L80 98 M86 98 L94 98 M100 98 L108 98 M114 98 L122 98"/><path d="M58 108 L66 108 M72 108 L100 108 M106 108 L122 108"/>',
  },
  {
    tag: 'Workflow Intelligence',
    heading: 'Automate to work smarter.',
    body: 'Optimise manual business processes through the power of AI and workflow intelligence.',
    href: '#capabilities',
    variant: 'vcard--cool',
    svgPaths: '<rect x="14" y="22" width="104" height="68" rx="6"/><path d="M14 36 L118 36"/><circle cx="22" cy="29" r="1.6"/><circle cx="28" cy="29" r="1.6"/><circle cx="34" cy="29" r="1.6"/><circle cx="38" cy="56" r="5"/><path d="M48 56 L102 56"/><circle cx="78" cy="76" r="5"/><path d="M38 76 L68 76 M88 76 L102 76"/><path d="M82 100 L82 122 L89 116 L93 124 L96 122 L92 114 L99 114 Z"/>',
  },
  {
    tag: 'Risk Mitigation',
    heading: 'Proactive risk reduction.',
    body: 'Secure your cloud, data, and models with rigorous cyber security and AI governance.',
    href: '#methodology',
    variant: 'vcard--lime',
    svgPaths: '<path d="M70 18 L104 30 L104 68 C104 92 88 108 70 116 C52 108 36 92 36 68 L36 30 Z"/><rect x="58" y="60" width="24" height="24" rx="3"/><path d="M62 60 L62 50 C62 44 65 40 70 40 C75 40 78 44 78 50 L78 60"/><circle cx="70" cy="72" r="1.8"/><path d="M114 52 L120 52 M117 49 L117 55"/><path d="M22 78 L28 78 M25 75 L25 81"/><path d="M108 96 L112 96 M110 94 L110 98"/>',
  },
];

export const capabilities: Domain[] = [
  {
    n: '01 / 07',
    titleHtml: 'Architecture & <em>Automation</em>',
    tag: 'Workflow',
    problem: 'Manual, disconnected, or duplicated workflows that consume staff capacity and introduce operational variance at scale.',
    outcome: 'Teams focus on judgment, not administration. Operational capacity increases measurably. Without added headcount.',
    iconPath: '<path d="M3 6h13M3 12h18M3 18h10"/><circle cx="20" cy="6" r="2"/><circle cx="14" cy="18" r="2"/>',
  },
  {
    n: '02 / 07',
    titleHtml: 'CRM & <em>Data Integration</em>',
    tag: 'CRM & Data',
    problem: 'Customer data living in systems that do not communicate — sales teams without visibility, service teams without context.',
    outcome: 'Complete customer visibility across the sales and service lifecycle. Faster cycles. Consistent delivery.',
    iconPath: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>',
  },
  {
    n: '03 / 07',
    titleHtml: 'Operational <em>Reporting</em>',
    tag: 'Visibility',
    problem: 'Decisions based on lagging reports assembled manually from multiple sources, often days after the relevant events.',
    outcome: 'Decision-makers see what is happening now. Operational risks become visible before they become failures.',
    iconPath: '<path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>',
  },
  {
    n: '04 / 07',
    titleHtml: 'Business Process <em>Automation</em>',
    tag: 'Process',
    problem: 'Repetitive, rule-based processes consuming staff capacity and introducing inconsistency every time judgment replaces a rule.',
    outcome: 'Measurable reduction in process cycle times. Consistent outputs. Capacity redirected to higher-value work.',
    iconPath: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
  },
  {
    n: '05 / 07',
    titleHtml: 'AI-Powered <em>Operational Intelligence</em>',
    tag: 'AI Intelligence',
    problem: 'Enormous operational data volumes without the infrastructure to derive insight at the speed required for real decisions. What should be an organizational asset becomes a liability — reports that describe what happened days after the window to act has already closed.',
    outcome: 'Proactive operational management. Faster, better-informed decisions. Intelligence that acts within defined parameters. What once required a team of analysts and three days of consolidation happens continuously, automatically, and in time to change the outcome.',
    iconPath: '<path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0-3 4.6V14a5 5 0 0 0 4 4.9V21h8v-2.1a5 5 0 0 0 4-4.9v-.4a5 5 0 0 0-3-4.6V7a5 5 0 0 0-5-5z"/>',
  },
  {
    n: '06 / 07',
    titleHtml: 'Systems Integration & <em>Ecosystem Design</em>',
    tag: 'Integration',
    problem: 'Best-in-class tools operating in functional isolation — preventing the organization from functioning as a unified system. The architecture of the stack becomes the ceiling of the business. Capability without coherence.',
    outcome: 'Elimination of data silos. A business operating as a single, connected system rather than a collection of departments.',
    iconPath: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><path d="M14 3l7 7M3 14l7 7"/>',
  },
  {
    n: '07 / 07',
    titleHtml: 'Digital & <em>Operational Transformation</em>',
    tag: 'Transformation',
    problem: 'Organizations aware of the need to transform but without the strategic clarity and implementation capacity to do so safely. Urgency exists. A credible path forward does not.',
    outcome: 'An organization operating on modern infrastructure with the visibility, automation, and intelligence to compete.',
    iconPath: '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/>',
  },
];

export const capabilityGridSpans = [4, 4, 4, 4, 8, 7, 5];

export const phases: Phase[] = [
  {
    tag: 'Phase 01',
    titleHtml: 'Discovery &mdash; <em>operational audit and diagnostic.</em>',
    summary: 'A comprehensive operational audit mapping current workflows, systems, data flows, and decision points. We identify fragmentation, redundancy, and automation opportunity across the entire organization.',
    capabilities: ['Workflow mapping', 'System inventory', 'Data flow analysis', 'Decision point audit', 'Fragmentation diagnostic', 'Automation opportunity'],
    deliverableLabel: 'Deliverable',
    deliverables: [
      { title: 'Operational Intelligence Report', meta: 'A complete picture of your current operational infrastructure', paletteIndex: 0 },
      { title: 'Gap analysis to target operating model', meta: 'Where you are vs. where you should be', paletteIndex: 4 },
      { title: 'Prioritized transformation roadmap', meta: 'Sequenced by impact and dependency', paletteIndex: 2 },
    ],
  },
  {
    tag: 'Phase 02',
    titleHtml: 'Architecture &mdash; <em>system design and blueprint.</em>',
    summary: 'Define the target operating model. Design the workflow architecture, integration layer, and automation logic. Every design decision is made against operational outcomes, not technical convenience.',
    capabilities: ['Target operating model', 'Workflow architecture', 'Integration layer design', 'Automation logic', 'Reporting architecture', 'System selection'],
    deliverableLabel: 'Deliverable',
    deliverables: [
      { title: 'Operational Blueprint', meta: 'The specification for how your business will function', paletteIndex: 1 },
      { title: 'Integration map', meta: 'Every system, every data flow, every dependency', paletteIndex: 3 },
      { title: 'Approved before a single system is configured', meta: 'Reviewed across business and technical', paletteIndex: 4 },
    ],
  },
  {
    tag: 'Phase 03',
    titleHtml: 'Build &mdash; <em>system construction and activation.</em>',
    summary: 'Configure, integrate, and automate the designed architecture. Build reporting and visibility infrastructure. Every component tested in isolation and as part of the complete operational system.',
    capabilities: ['Phased activation', 'Configuration & integration', 'Automation build', 'Reporting infrastructure', 'Component testing', 'System testing'],
    deliverableLabel: 'Deliverable',
    deliverables: [
      { title: 'Activated Operating System', meta: 'The architecture, functioning and integrated', paletteIndex: 0 },
      { title: 'Phased — never big-bang', meta: 'Each phase activates measurable capacity', paletteIndex: 2 },
      { title: 'Early evidence of transformation impact', meta: 'Limiting disruption, proving value', paletteIndex: 5 },
    ],
  },
  {
    tag: 'Phase 04',
    titleHtml: 'Calibrate &mdash; <em>optimization and performance.</em>',
    summary: 'Test, refine, and adjust the operational system against real performance data. Ensure adoption, process adherence, and that the system performs against the outcomes it was built to create.',
    capabilities: ['Performance testing', 'Adoption monitoring', 'Process adherence', 'System refinement', 'Outcome measurement', 'Calibration cycles'],
    deliverableLabel: 'Deliverable',
    deliverables: [
      { title: 'Performance Baseline Report', meta: 'Measured operational metrics vs. designed targets', paletteIndex: 3 },
      { title: 'Evidence base for ongoing management', meta: 'A foundation for future investment decisions', paletteIndex: 1 },
      { title: 'Designed → realized performance', meta: "Where most transformations fail. We don't.", paletteIndex: 4 },
    ],
  },
  {
    tag: 'Phase 05',
    titleHtml: 'Evolve &mdash; <em>continuous advancement.</em>',
    summary: 'Expand automation scope, integrate new data sources, and adapt the system as the organization grows. Quarterly operational reviews ensure the system evolves ahead of organizational demand, not behind it.',
    capabilities: ['Automation expansion', 'Data source integration', 'Capability development', 'Quarterly reviews', 'Demand forecasting', 'Long-term partnership'],
    deliverableLabel: 'Deliverable',
    deliverables: [
      { title: 'Quarterly Operational Reviews', meta: 'Structured assessments and forward planning', paletteIndex: 0 },
      { title: 'Operational infrastructure is not a project', meta: 'It is a permanent organizational capability', paletteIndex: 5 },
      { title: 'Strategic partner — not a vendor', meta: 'Ongoing relationship beyond initial engagement', paletteIndex: 2 },
    ],
  },
];

export const industries: Industry[] = [
  {
    title: 'Professional Services',
    subtitle: 'Law firms, accounting practices, and consulting organizations',
    body: 'Professional services firms run complex client engagements on fragmented project management, billing, and CRM systems that were never designed to work together. The result is operational friction that consumes billable hours and erodes service consistency.',
    challenges: [
      'Matter management disconnected from time tracking and billing',
      'Client communication histories scattered across email and CRM',
      'Resource allocation based on intuition rather than real-time visibility',
      'Reporting assembled manually at month-end, not available in real time',
    ],
  },
  {
    title: 'Healthcare Operations',
    subtitle: 'Clinics, hospital groups, and health networks',
    body: 'Healthcare organizations manage patient journeys across disconnected administrative, clinical, and communication systems — creating operational inefficiency that directly affects patient experience and staff capacity.',
    challenges: [
      'Appointment, billing, and clinical systems operating in isolation',
      'Manual patient communication workflows consuming administrative time',
      'Reporting on patient flow and operational performance delayed and fragmented',
      'Compliance documentation processes that are manual, slow, and inconsistent',
    ],
  },
  {
    title: 'Financial Services',
    subtitle: 'Wealth managers, insurance brokerages, and advisory firms',
    body: 'Financial services organizations operate compliance-heavy processes that are largely manual — creating risk, inefficiency, and an inability to scale without proportionally scaling headcount.',
    challenges: [
      'Client onboarding processes that are document-heavy and manual',
      'Compliance workflows without automated audit trails or escalation logic',
      'Client portfolio reporting assembled manually from multiple data sources',
      'Advisor activity without real-time visibility for operational management',
    ],
  },
  {
    title: 'Logistics & Distribution',
    subtitle: 'Supply chain operators and distribution businesses',
    body: 'Logistics organizations need real-time operational visibility across warehousing, transport, and last-mile delivery — but most are operating on systems that provide information hours or days after it would have been useful.',
    challenges: [
      'Inventory, transport, and delivery systems without unified visibility',
      'Customer communication workflows triggered manually rather than by system events',
      'Exception management based on email and spreadsheet rather than automated rules',
      'Operational reporting requiring manual data assembly across multiple platforms',
    ],
  },
  {
    title: 'Technology Businesses',
    subtitle: 'Scale-stage technology companies',
    body: 'Scale-stage technology businesses face a specific challenge: they have the sophistication to know that their operations are broken, but lack the bandwidth to redesign them while running at speed.',
    challenges: [
      'Customer success workflows operating through manual process and intuition',
      'Revenue operations without connected CRM, billing, and product usage data',
      'Internal tooling that has grown organically without architectural coherence',
      'Reporting infrastructure that cannot support the metrics a growing business demands',
    ],
  },
  {
    title: 'Education Administration',
    subtitle: 'Universities, training organizations, and educational institutions',
    body: 'Educational organizations manage complex student journeys, faculty workflows, and administrative operations across systems that are rarely designed to communicate — creating inefficiency that affects both institutional performance and student experience.',
    challenges: [
      'Enrolment, academic, and student services systems operating in silos',
      'Faculty resource allocation without real-time visibility or automation',
      'Student communication workflows that are manual and inconsistent',
      'Institutional reporting assembled from disconnected administrative systems',
    ],
  },
  {
    title: 'Manufacturing & Operations',
    subtitle: 'Production businesses and multi-facility operations',
    body: 'Manufacturing organizations manage complex supply chains, quality systems, and operational reporting across facilities — with operational visibility requirements that most operational infrastructure cannot meet in real time.',
    challenges: [
      'Production, quality, and supply chain systems without unified operational view',
      'Procurement workflows that are manual and disconnected from inventory intelligence',
      'Quality management processes based on paper and spreadsheet rather than system logic',
      'Multi-site reporting requiring manual consolidation at significant cost in time and accuracy',
    ],
  },
];

export const outcomes: Outcome[] = [
  {
    industry: 'Automotive Parts · Distribution',
    tag: 'Inventory Visibility',
    stat: 'Real-time',
    statSub: 'stock visibility across 12 warehouses',
    story:
      'A national parts distributor was making operational decisions on inventory data that was already out of date. KEYOB connected the systems they already ran — and gave them a single, live picture of stock across the whole network.',
    paletteIndex: 0,
    image: '/cases/reclaiming-senior-hours.png',
    imageAlt: 'Warehouse aisles with stacked inventory and distribution logistics',
    slug: 'real-time-control-warehouses',
  },
  {
    industry: 'Investment Markets Australia · Financial Services',
    tag: 'Launch Readiness',
    stat: 'Launch-ready',
    statSub: 'investor portal stabilized within the timeline',
    story: 'KEYOB helped stabilize, modernize, and prepare a complex investment portal for launch through structured QA, Redux analysis, dependency upgrades, and issue resolution — turning launch risk into launch readiness.',
    paletteIndex: 1,
    image: '/cases/investment-markets-australia.png',
    imageAlt: 'Investment portal shown on laptop and mobile, with search and comparison cards',
    slug: 'investment-markets-australia',
  },
  {
    industry: 'Investment Markets · Financial Services',
    tag: 'Onboarding Speed',
    stat: '3.2×',
    statSub: 'faster client onboarding lifecycle',
    story: 'A boutique investment firm was onboarding clients across five disconnected platforms. KEYOB designed a unified onboarding architecture — reducing a fourteen-day process to under five.',
    paletteIndex: 2,
    image: '/cases/investment-markets.webp',
    imageAlt: 'Financial market charts and trading dashboards',
    slug: 'compressed-onboarding',
  },
  {
    industry: 'Customer Operations · Service Business',
    tag: 'Service Capacity',
    stat: '42%',
    statSub: 'increase in service handling capacity',
    story: 'By centralising requests, automating routing, and giving teams a live view of pending work, KEYOB helped a service business handle more customer requests without adding unnecessary management overhead.',
    paletteIndex: 3,
    image: '/cases/customer-operations.webp',
    imageAlt: 'Customer service team working at desks with multi-screen dashboards',
    slug: 'customer-operations-capacity',
  },
  {
    industry: 'Growing Business · Multi-Department Operations',
    tag: 'Tool Consolidation',
    stat: '4 tools',
    statSub: 'consolidated into one operating view',
    story: 'Sales, tasks, approvals, reporting, and customer records were scattered across separate tools. KEYOB connected the workflow into one clearer operating layer for leadership and teams.',
    paletteIndex: 4,
    image: '/cases/multi-department.webp',
    imageAlt: 'Cross-functional team collaborating around a unified operations dashboard',
    slug: 'multi-tool-consolidation',
  },
  {
    industry: 'Back Office · Finance & Operations',
    tag: 'Admin Automation',
    stat: '60%',
    statSub: 'reduction in repetitive admin work',
    story: 'KEYOB automated routine admin tasks, approval follow-ups, document checks, and status updates — giving the operations team more time to focus on work that actually needed human judgment.',
    paletteIndex: 5,
    image: '/cases/back-office.webp',
    imageAlt: 'Back-office finance operations with documents, laptops, and approval workflows',
    slug: 'back-office-automation',
  },
];

export const heroWords = ['pioneering', 'innovating', 'transforming', 'delivering'];
