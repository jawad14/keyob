import { outcomes, type Outcome } from '@/config/keyob-data';

export type StoryCategory =
  | 'professional'
  | 'financial'
  | 'distribution'
  | 'service'
  | 'multi'
  | 'backoffice';

export type Story = Outcome & {
  category: StoryCategory;
  categoryLabel: string;
  featured?: boolean;
  body: string[];
  keyOutcomes: string[];
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

type Extra = {
  category: StoryCategory;
  categoryLabel: string;
  featured?: boolean;
  body: string[];
  keyOutcomes: string[];
};

const storyExtras: Record<string, Extra> = {
  'reclaiming-senior-hours': {
    category: 'professional',
    categoryLabel: 'Professional Services Firm · 200 Staff',
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
  },
  'compressed-onboarding': {
    category: 'financial',
    categoryLabel: 'Investment Markets · Financial Services',
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
  },
  'real-time-control-warehouses': {
    category: 'distribution',
    categoryLabel: 'Automotive Parts · Distribution',
    featured: true,
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
  },
  'customer-operations-capacity': {
    category: 'service',
    categoryLabel: 'Customer Operations · Service Business',
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
  },
  'multi-tool-consolidation': {
    category: 'multi',
    categoryLabel: 'Growing Business · Multi-Department Operations',
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
  },
  'back-office-automation': {
    category: 'backoffice',
    categoryLabel: 'Back Office · Finance & Operations',
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
  },
};

export const stories: Story[] = outcomes.map((o) => {
  const extra = storyExtras[o.slug];
  if (!extra) {
    throw new Error(`Missing story extras for slug "${o.slug}"`);
  }
  return { ...o, ...extra };
});
