// Data for /contact — patterns consistent with /about and /what-we-do.

export type CtFaqItem = { q: string; a: string };

export const contactFaq: CtFaqItem[] = [
  {
    q: 'How quickly will you respond?',
    a: "We reply within one business day. If your message arrives over the weekend, you'll hear back first thing Monday.",
  },
  {
    q: 'What happens in the free AI assessment?',
    a: "A focused 45–60 minute conversation: we listen to how your business runs today, find where time is lost, and walk you through where AI, automation or integration would earn its place. You leave with a clear next step — there's no obligation.",
  },
  {
    q: 'Do we need to be AI-ready already?',
    a: 'No. Most clients start by establishing operational clarity before adopting AI. The assessment is the right place to find out where you are and what the practical next move looks like.',
  },
  {
    q: 'Can KEYOB work with our existing CRM, ERP or website?',
    a: "Yes. We frequently keep the tools you already use and connect them, rather than forcing a migration. The focus is linking disconnected systems into one reliable operating layer — modernisation without the rebuild.",
  },
  {
    q: 'Do you take on single projects or only long engagements?',
    a: "Both. You can start with a single piece of work — a website, a CRM integration, an automation, an AI workflow — and we build it so it can connect to the rest of your systems later. A one-off project never becomes a dead end.",
  },
  {
    q: 'What information should I bring to the call?',
    a: "Nothing formal. A brief picture of what your business does, the tools you use, and where the biggest friction lives is enough. We'll structure the conversation from there.",
  },
];

export const contactQuickInfo = {
  email: 'info@keyob.com',
  phones: [
    { display: '+61 433 278 992', href: 'tel:+61433278992' },
    { display: '+61 415 373 506', href: 'tel:+61415373506' },
  ],
  office: 'Level 1, 67 Springwood Road, Springwood QLD 4127',
  responseTime: 'Within one business day',
};
