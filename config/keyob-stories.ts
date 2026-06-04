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

export type Story = Outcome & {
  category: StoryCategory;
  categoryLabel: string;
  featured?: boolean;
  headline: StoryHeadline;
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
  'reclaiming-senior-hours': {
    category: 'professional',
    categoryLabel: 'Professional Services Firm · 200 Staff',
    headline: { pre: 'Senior hours, reclaimed from ', em: 'manual reporting.' },
    body: [
      "Every Monday, senior staff spent the first part of the week pulling numbers from project management, time tracking and billing tools that didn't talk to each other, and stitching the result into a weekly report. The numbers were accurate — eventually — but the cost of producing them was paid in lost billable hours.",
      'We unified the existing project management, time tracking and billing systems into a single operational layer. Definitions for utilization, margin and pipeline are agreed once and applied everywhere; the weekly report now assembles itself overnight.',
      "The work the team was already doing didn't change. The friction around proving it did.",
    ],
    keyOutcomes: [
      '68% reduction in time spent on manual weekly reporting',
      'One consistent definition of utilization, margin and pipeline',
      'Senior consulting hours reclaimed for client-facing work',
    ],
    facts: [
      { k: 'Industry', v: 'Professional services' },
      { k: 'Scale', v: '200 staff' },
      { k: 'Capability', v: 'Reporting automation' },
      { k: 'Outcome', v: '68% time saved' },
    ],
    challenges: [
      'Project management, time tracking and billing tools running independently of each other.',
      'Senior consultants assembling Monday reports by hand from three sources every week.',
      'Different definitions of utilization and margin across departments — every meeting started with a reconciliation.',
      'Numbers always one week old by the time leadership saw them.',
      'No way to roll partial-period data into a forward view without manual work.',
    ],
    approachIntro:
      "We didn't replace the tools the consultants already used. We connected them — and put one definition of every metric in the layer above.",
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: 'Weekly reporting automated',
        body: 'The Monday report now generates itself overnight; senior staff review it instead of building it.',
      },
      {
        title: 'One consistent metric definition',
        body: 'Utilization, margin and pipeline are agreed once and applied everywhere — no reconciliation arguments.',
      },
      {
        title: 'Senior hours back to client work',
        body: 'The hours that used to vanish into report assembly went back into billable, client-facing work.',
      },
    ],
    humanIntro:
      "The clearest sign of success wasn't on a dashboard. It was that Mondays stopped starting with three CSV exports and a spreadsheet.",
    humanQuote:
      '"We used to spend the start of every week building the numbers. Now we spend it talking about what they mean."',
    humanRole: 'Partner · National consulting firm',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'How were the metric definitions agreed?',
        a: 'In the architecture phase. Each department defined how it measured utilization and margin, then we facilitated a single shared definition that everyone aligned to. That definition lives in the operating layer, not in any one tool.',
      },
    ],
  },
  'compressed-onboarding': {
    category: 'financial',
    categoryLabel: 'Investment Markets · Financial Services',
    headline: { pre: 'Onboarding, ', em: 'compressed and connected.' },
    body: [
      'A new client meant fourteen days of paperwork moving between five disconnected platforms — CRM, KYC, custody, advice and reporting — each requesting some of the same information and none of them confident they had it all.',
      "We didn't replace the underlying tools. We built one unified onboarding architecture above them: structured intake captures every required field once, validates as it goes, and routes it to the right system in the right format. Compliance evidence is captured as part of the workflow, not assembled afterwards.",
      'Onboarding now completes in under five days, and the audit trail is no longer something the operations team has to reconstruct in retrospect.',
    ],
    keyOutcomes: [
      'Client onboarding lifecycle compressed 3.2× — from 14 days to under 5',
      'Single source of truth across CRM, KYC, custody, advice and reporting',
      'Audit-ready compliance evidence captured automatically at each step',
    ],
    facts: [
      { k: 'Industry', v: 'Investment markets' },
      { k: 'Scale', v: '5 platforms' },
      { k: 'Capability', v: 'Workflow orchestration' },
      { k: 'Outcome', v: '3.2× faster onboarding' },
    ],
    challenges: [
      'Five disconnected systems each holding part of the onboarding record.',
      'Client details re-keyed across CRM, KYC, custody, advice and reporting.',
      'Compliance evidence assembled retrospectively from email and document trails.',
      'Operations team chasing missing fields rather than progressing files.',
      'Audit preparation taking a full quarter each time it came around.',
    ],
    approachIntro:
      'We built one orchestration layer over the five tools. Every required field is captured once, validated on entry, and routed automatically.',
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: 'Onboarding cycle 3.2× faster',
        body: 'Fourteen days compressed to under five — without changing any of the underlying platforms.',
      },
      {
        title: 'Single source of truth',
        body: 'CRM, KYC, custody, advice and reporting now reference one canonical client record.',
      },
      {
        title: 'Compliance evidence by default',
        body: 'Audit trail is captured as the work happens, not reconstructed afterwards.',
      },
    ],
    humanIntro:
      'The operations team used to spend their week chasing missing fields. Now they spend it onboarding clients.',
    humanQuote:
      '"The audit trail used to be a project we ran at the end. Now it just exists, because the system captured it as we went."',
    humanRole: 'Head of operations · Boutique investment firm',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'How were regulatory requirements handled?',
        a: "Every regulatory field is modelled in the orchestration layer with its source-of-truth platform and validation rules. The system enforces them on intake and routes the canonical value into each underlying system — and the audit trail captures who entered, validated and approved each one.",
      },
    ],
  },
  'real-time-control-warehouses': {
    category: 'distribution',
    categoryLabel: 'Automotive Parts · Distribution',
    featured: true,
    headline: { pre: 'Real-time control across ', em: 'twelve warehouses.' },
    body: [
      'When the leadership team wanted to know what was in stock, where it was, and what was selling, they were waiting hours for answers. Each warehouse ran its own systems, transferred data on its own schedule, and reconciled on its own terms. Decisions were being made on yesterday.',
      'KEYOB built the integration and reporting layer that connects inventory, transfers, sales and demand into one event-driven backbone. Reporting now runs continuously instead of nightly, transfers reconcile in minutes instead of days, and demand signals reach the right warehouse without anyone having to call ahead.',
      'The visible change is speed. The deeper change is confidence: every team, from purchasing to the front counter, is now looking at the same number at the same moment.',
    ],
    keyOutcomes: [
      'Real-time stock visibility across all 12 warehouses',
      'Transfer reconciliation reduced from days to minutes',
      'Single live dashboard replacing four separate reporting streams',
    ],
    facts: [
      { k: 'Industry', v: 'Auto-parts distribution' },
      { k: 'Scale', v: '12 warehouses' },
      { k: 'Capability', v: 'Systems integration' },
      { k: 'Outcome', v: 'Real-time visibility' },
    ],
    challenges: [
      'Inventory, transport and sales systems with no shared real-time view across the network.',
      'Stock counts reconciled manually — accurate the moment they were taken, wrong soon after.',
      'Transfers between warehouses tracked over email and spreadsheets rather than system logic.',
      'Demand signals arriving too late to influence purchasing or rebalancing decisions.',
      'Operational reporting assembled by hand, days after the events it described.',
    ],
    approachIntro:
      "KEYOB's first move is never to replace. We built the operating layer between the systems they already ran — so teams kept the tools they knew, while gaining a single live view across all of them.",
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
        title: 'Centralised reporting',
        body: 'Operational reports drawn from one connected source, available on demand instead of assembled by hand.',
      },
    ],
    humanIntro:
      "The clearest sign of success wasn't on a dashboard. It was that branch managers stopped starting their day with a round of phone calls — and started spending that time on the work only they could do.",
    humanQuote:
      "\"We used to manage by phone call. Now the answer's already on the screen — so we can actually get on with running the business instead of chasing it.\"",
    humanRole: 'Operations lead · National parts distributor',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'Could this approach work for a different industry?',
        a: 'Yes. The same pattern — connecting fragmented systems into one operating layer with live visibility — applies anywhere disconnected tools carry a real operational cost. We have used it across professional services, healthcare, financial services and more.',
      },
    ],
  },
  'customer-operations-capacity': {
    category: 'service',
    categoryLabel: 'Customer Operations · Service Business',
    headline: { pre: 'More requests handled, ', em: 'without the overhead.' },
    body: [
      "Inbound requests were arriving in five different places — email, web form, phone notes, third-party platforms, and a shared inbox no one really owned. Senior staff spent more time triaging than resolving, and SLAs slipped quietly because nothing was measuring them in one place.",
      "We built a single intake and routing layer that takes every request, classifies it, routes it to the right person, and surfaces the whole queue on a live operational board. Routing rules now encode the business policies that used to live in someone's head; escalations happen automatically when an item ages past its target.",
      "The team didn't have to work faster. They just stopped losing time to coordination — and that gave them back enough capacity to handle 42% more customer requests without adding management overhead.",
    ],
    keyOutcomes: [
      '42% increase in service handling capacity without additional staff',
      'All inbound channels consolidated into a single routed queue',
      'Live SLA tracking with automatic escalation on aging requests',
    ],
    facts: [
      { k: 'Industry', v: 'Customer operations' },
      { k: 'Scale', v: '5 channels' },
      { k: 'Capability', v: 'Routing & queueing' },
      { k: 'Outcome', v: '+42% capacity' },
    ],
    challenges: [
      'Requests arriving across five separate channels, with no central queue.',
      'Senior staff spending more time triaging than resolving.',
      "Routing rules living in people's heads, applied inconsistently under load.",
      'SLAs slipping because nothing measured them in one place.',
      'No visibility into the size or age of the backlog at any point in time.',
    ],
    approachIntro:
      "We built one intake and routing layer above the existing channels. Every request is classified, routed, queued — and visible — the moment it lands.",
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: '42% more capacity',
        body: 'The team absorbed a 42% larger workload without adding people or management overhead.',
      },
      {
        title: 'One routed queue',
        body: 'Five inbound channels consolidated into a single classified, prioritised queue.',
      },
      {
        title: 'Live SLA tracking',
        body: 'Aging requests escalate automatically — slipping SLAs surface before they become problems.',
      },
    ],
    humanIntro:
      "Coordination was the silent tax on the team's day. Removing it gave the same people meaningful new capacity.",
    humanQuote:
      "\"We didn't need to work faster. We just needed to stop losing time figuring out who was meant to handle what.\"",
    humanRole: 'Customer ops manager · National service business',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'How are routing rules maintained over time?',
        a: 'The rules live in the operating layer, not in code. Operations leads can update routing logic, priority bands and escalation thresholds themselves — without engineering involvement.',
      },
    ],
  },
  'multi-tool-consolidation': {
    category: 'multi',
    categoryLabel: 'Growing Business · Multi-Department Operations',
    headline: { pre: 'Four scattered tools, ', em: 'one operating view.' },
    body: [
      "Each department had picked the tool that suited it best — CRM here, project tracker there, an approval system bolted on, a separate reporting layer that pulled from all three. Each tool was fine in isolation. Together, they meant nobody had the whole picture.",
      "KEYOB connected the workflow into one clearer operating layer. Records, events and state changes that matter are now synchronised across all four tools — leadership sees one operating view, individual teams keep the tools they prefer.",
      'Decisions used to wait on someone exporting a CSV. Now they wait on nothing.',
    ],
    keyOutcomes: [
      'Four department tools consolidated into a single operating view',
      'Cross-team handoffs visible in real time, no exports required',
      'Leadership dashboards reflect the business as it changes, not as of yesterday',
    ],
    facts: [
      { k: 'Industry', v: 'Multi-department ops' },
      { k: 'Scale', v: '4 tools' },
      { k: 'Capability', v: 'Operating layer' },
      { k: 'Outcome', v: 'One operating view' },
    ],
    challenges: [
      "Sales, project, approvals and customer records each living in their own tool.",
      'Each tool fine on its own — together, no one had the whole picture.',
      'Handoffs between departments happening over CSV exports and Slack.',
      'Leadership dashboards always one export behind reality.',
      'No way to track an account end-to-end across the four systems.',
    ],
    approachIntro:
      'We left every team with the tool they preferred. The integration backbone underneath synchronises the records, events and state changes that actually need to flow across departments.',
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: 'One operating view',
        body: 'Four department tools synchronised into a single live operating view for leadership.',
      },
      {
        title: 'Visible handoffs',
        body: 'Cross-team handoffs now show up in real time — no CSV exports, no Slack chasing.',
      },
      {
        title: 'Live leadership dashboards',
        body: 'Dashboards reflect the business as it changes, not as of the last export.',
      },
    ],
    humanIntro:
      'Each department got to keep the tool it liked. The change was that the four tools finally cooperated.',
    humanQuote:
      "\"We kept everything we already had. We just stopped having to mash it together by hand.\"",
    humanRole: 'COO · Mid-market business',
    faq: [
      ...SHARED_FAQ,
      {
        q: "What happens when a team switches tools later?",
        a: 'The integration backbone exposes a stable interface to each tool. Swapping a CRM or a project tracker means replacing one adapter, not rebuilding the operating layer.',
      },
    ],
  },
  'back-office-automation': {
    category: 'backoffice',
    categoryLabel: 'Back Office · Finance & Operations',
    headline: { pre: 'Routine admin, ', em: 'quietly automated.' },
    body: [
      "The back office had quietly become a queue of small, repetitive tasks: chasing approvals, validating documents, updating status fields, copying numbers from one system to another. Each task was trivial; together they consumed senior operational time the business couldn't afford to lose.",
      "KEYOB mapped every recurring task, ranked them by frequency and time cost, and automated the top tier. Approval follow-ups now happen on their own. Document checks run against a defined rule set. Status updates flow from the underlying systems instead of being typed in by hand.",
      "The team didn't shrink — but the kind of work it does changed. Sixty percent of the routine load disappeared, and the hours that returned went into work that genuinely needed human judgment.",
    ],
    keyOutcomes: [
      '60% reduction in repetitive admin work',
      'Approval follow-ups, document checks and status updates run hands-free',
      'Operational team capacity redirected to higher-judgment work',
    ],
    facts: [
      { k: 'Industry', v: 'Finance & operations' },
      { k: 'Scale', v: 'Multi-team back office' },
      { k: 'Capability', v: 'Process automation' },
      { k: 'Outcome', v: '60% admin removed' },
    ],
    challenges: [
      'Recurring tasks consuming senior operational time across multiple teams.',
      'Approval follow-ups handled by hand, often slipping past their target dates.',
      'Document validation done on intuition rather than against a defined rule set.',
      'Status fields kept current by manual updates, drifting whenever workload spiked.',
      'No clear measure of how much time the routine load was actually costing.',
    ],
    approachIntro:
      'We mapped every recurring task, ranked them by frequency and time cost, and automated the top tier. The remaining work shifted to where human judgment actually mattered.',
    pullquote: SHARED_PULLQUOTE,
    outcomeCards: [
      {
        title: '60% admin removed',
        body: 'The routine load on the operational team dropped by sixty percent in the first phase.',
      },
      {
        title: 'Hands-free routines',
        body: 'Approval follow-ups, document checks and status updates run on their own — no manual nudges.',
      },
      {
        title: 'Capacity redirected',
        body: 'The hours that returned went into work that genuinely needed human judgment.',
      },
    ],
    humanIntro:
      "The team didn't get smaller. The kind of work it does got bigger.",
    humanQuote:
      "\"The trivial work just stopped landing on us. What's left is the work that actually needs us.\"",
    humanRole: 'Finance operations lead · Mid-market organisation',
    faq: [
      ...SHARED_FAQ,
      {
        q: 'How were the automation targets chosen?',
        a: 'We ranked every recurring task by frequency and time cost, then automated the highest-value tier first. The remaining work was reviewed for whether it still made sense as a manual process — most of it did.',
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
