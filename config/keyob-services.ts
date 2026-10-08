/* Service pages under /what-we-do/<slug>.
 *
 * Content is ported from the reference HTML in the repo root (one page per
 * service, all on a single template). Section structure is faithful to those
 * files; presentation lives in app/what-we-do/[slug]/page.module.css and
 * follows the site's own design tokens, so every service page leads with the
 * KEYOB cyan and carries the KEYOB blue as its secondary accent.
 *
 * `heroSvg` holds the inner markup of each hero diagram and is rendered with
 * dangerouslySetInnerHTML — authored by us, not user input, in the same way as
 * `iconPath` / `svgPaths` in keyob-data.ts. */

export type ServiceHeadline = { pre: string; em: string; post?: string };
export type ServiceSectionHead = { eyebrow: string; h2: ServiceHeadline; sub?: string };
export type ServiceLink = { label: string; href: string };
export type ServiceCard = { n: string; title: string; body: string };
export type ServiceStep = { k: string; title: string; body: string };
export type ServiceFaqItem = { q: string; a: string };
export type ServiceProofCard = {
  badge: string;
  title: string;
  tagline: string;
  listLabel: string;
  items: string[];
  cta: string;
  note: string;
  href: string;
};

export type Service = {
  slug: string;
  /** Pathway stage this service belongs to, e.g. "Stage 05 · CRM, Sales & Customer Systems". */
  stage: string;
  crumb: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  headline: ServiceHeadline;
  intro: string[];
  cta: { primary: ServiceLink; secondary: ServiceLink };
  heroSvgViewBox: string;
  heroSvg: string;
  heroCaption: string;
  definition: { head: ServiceSectionHead; label: string; body: string[] };
  why: { head: ServiceSectionHead; cards: ServiceCard[] };
  signals: { head: ServiceSectionHead; items: string[] };
  deliverables: { head: ServiceSectionHead; cards: ServiceCard[] };
  process: { head: ServiceSectionHead; steps: ServiceStep[] };
  comparison: { head: ServiceSectionHead; columns: string[]; rows: string[][] };
  connection: {
    head: ServiceSectionHead;
    steps: ServiceStep[];
    tail?: { text: string; link?: ServiceLink };
  };
  proof?: { head: ServiceSectionHead; cards: ServiceProofCard[] };
  faq: { head: ServiceSectionHead; items: ServiceFaqItem[] };
  closing: {
    h2: ServiceHeadline;
    body: string;
    primary: ServiceLink;
    secondary: ServiceLink;
  };
  /** Authored Service schema, emitted as JSON-LD on the page. */
  serviceLd: Record<string, unknown>;
};

export const services: Service[] = [
  {
    slug: "brand-positioning",
    stage: "Stage 01 · Brand & Positioning",
    crumb: "Brand Positioning",
    title: "Brand Positioning Services Australia | Strategy, Messaging & Identity",
    description: "Brand positioning services for Australian businesses. KEYOB defines what you stand for, who you are for and why you are the better choice, then turns it into messaging, identity and a website that sells it.",
    ogTitle: "Brand Positioning Services",
    ogDescription: "Work out what you stand for, who you are for, and why you are the better choice. Then make every page say it.",
    headline: { pre: "Before anyone buys from you, they have to ", em: "understand", post: " you." },
    intro: [
      "Brand positioning is the decision about what your business stands for, who it is for, and why it is the better choice. Every other investment, your website, your search visibility, your sales conversations, is built on top of that decision.",
      "KEYOB works out the position with you, writes the language that carries it, and makes sure it shows up everywhere your business is seen.",
    ],
    cta: {
      primary: { label: "Start a positioning conversation", href: "/contact#contact" },
      secondary: { label: "What is brand positioning?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs> <linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"> <stop offset=\"0\" stop-color=\"#5EE0FF\"/><stop offset=\"1\" stop-color=\"#7BB4FF\"/> </linearGradient> </defs> <text x=\"92\" y=\"36\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">UNDIFFERENTIATED</text> <g fill=\"none\" stroke=\"rgba(255,255,255,.26)\" stroke-width=\"1.3\"> <circle cx=\"40\" cy=\"86\" r=\"13\"/><circle cx=\"76\" cy=\"72\" r=\"13\"/><circle cx=\"112\" cy=\"88\" r=\"13\"/> <circle cx=\"52\" cy=\"124\" r=\"13\"/><circle cx=\"92\" cy=\"118\" r=\"13\"/><circle cx=\"130\" cy=\"126\" r=\"13\"/> <circle cx=\"36\" cy=\"162\" r=\"13\"/><circle cx=\"74\" cy=\"158\" r=\"13\"/><circle cx=\"114\" cy=\"166\" r=\"13\"/> <circle cx=\"56\" cy=\"200\" r=\"13\"/><circle cx=\"98\" cy=\"202\" r=\"13\"/><circle cx=\"136\" cy=\"196\" r=\"13\"/> </g> <text x=\"92\" y=\"246\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"rgba(255,255,255,.4)\">\"WE DO QUALITY WORK\"</text> <path class=\"travel\" d=\"M172 140 H214\" stroke=\"url(#g1)\" stroke-width=\"1.8\" fill=\"none\"/> <g> <rect x=\"214\" y=\"106\" width=\"68\" height=\"68\" rx=\"34\" fill=\"rgba(37,99,217,.12)\" stroke=\"#7BB4FF\" stroke-width=\"1.6\"/> <text x=\"248\" y=\"136\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#7BB4FF\">POSITION</text> <text x=\"248\" y=\"150\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#7BB4FF\">ING</text> </g> <path class=\"travel\" d=\"M282 140 H322\" stroke=\"url(#g1)\" stroke-width=\"1.8\" fill=\"none\"/> <circle cx=\"386\" cy=\"140\" r=\"26\" fill=\"rgba(25,198,232,.16)\" stroke=\"#5EE0FF\" stroke-width=\"2.2\"/> <circle cx=\"386\" cy=\"140\" r=\"38\" fill=\"none\" stroke=\"rgba(94,224,255,.35)\" stroke-width=\"1.2\"/> <circle class=\"pulse\" cx=\"386\" cy=\"140\" r=\"50\" fill=\"none\" stroke=\"rgba(94,224,255,.18)\" stroke-width=\"1\"/> <text x=\"386\" y=\"206\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"#5EE0FF\">CHOSEN</text> <text x=\"386\" y=\"246\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"rgba(255,255,255,.5)\">FOR A REASON</text>",
    heroCaption: "SAME MARKET · SAME SERVICES · ONE IS UNDERSTOOD FIRST",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What is ", em: "brand positioning?" },
      },
      label: "Definition",
      body: [
        "Brand positioning is the place your business occupies in a customer's mind relative to the alternatives. It answers three questions: who you are for, what you do better or differently, and why that matters to the person choosing.",
        "Positioning is a decision about meaning, not a logo or a tagline. A logo identifies you. A tagline repeats you. A position is the reason someone picks you over the firm next door that offers the same list of services at a similar price.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "Weak positioning is expensive, but the ", em: "cost is invisible." },
        sub: "It rarely shows up as a line item. It shows up as effort that does not convert.",
      },
      cards: [
        { n: "01", title: "You compete on price", body: "When a buyer cannot tell the difference between two providers, the only remaining variable is cost. Discounting is usually a positioning problem wearing a commercial disguise." },
        { n: "02", title: "Marketing works harder for less", body: "A website, a campaign and a content plan all amplify a message. If the message is vague, better execution simply distributes the vagueness faster and at greater expense." },
        { n: "03", title: "The wrong enquiries arrive", body: "Businesses without a clear position attract everyone and convert few. Time goes into quoting work you did not want and were never going to win." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs the problem is positioning, ", em: "not marketing." },
        sub: "Most businesses arrive asking for a new website. Often the website is not the issue.",
      },
      items: [
        "Three people in your business describe what you do three different ways.",
        "Your website would still make sense with a competitor's name on it.",
        "Proposals come back compared on price alone.",
        "You say \"we do quality work\" because the real difference is hard to put into words.",
        "Sales conversations start by explaining what category you are in.",
        "Your best clients are a specific type, but nothing on your site says so.",
        "You have added services over the years and the story no longer holds together.",
        "Referrals describe you accurately, but strangers do not understand you at all.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "Positioning you can actually ", em: "use on Monday." },
        sub: "Strategy that stays in a slide deck changes nothing. Every deliverable here is written to be applied.",
      },
      cards: [
        { n: "01", title: "Positioning statement", body: "One paragraph defining who you serve, what you do, and why it is the better choice for them. The sentence everything else is checked against." },
        { n: "02", title: "Audience definition", body: "Who the business is genuinely for, and just as usefully, who it is not for. The second half is what makes the first half credible." },
        { n: "03", title: "Competitive view", body: "What everyone else in your market is claiming, so your position stands on ground that is actually unoccupied rather than crowded." },
        { n: "04", title: "Messaging framework", body: "Your core message, the supporting points beneath it, and the proof for each one. This is the deliverable teams feel first, because it changes how everyone talks." },
        { n: "05", title: "Value proposition per service", body: "Each service explained in terms of what the client receives, not what you perform. Written for the page, ready to publish." },
        { n: "06", title: "Visual identity direction", body: "Logo, palette, typography and imagery rules that express the position rather than decorate around it." },
        { n: "07", title: "Website content direction", body: "What each page needs to say and in what order, so the build starts from a message instead of a template." },
        { n: "08", title: "Founder and leadership positioning", body: "For businesses where the founder is part of the credibility, a clear line on what they are known for and how that is expressed publicly." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Positioning is found, ", em: "not invented." },
        sub: "The answer is usually already inside the business. Our job is to notice which part of it a buyer would find remarkable, and then say that part plainly.",
      },
      steps: [
        { k: "Stage 01", title: "Listen", body: "Sessions with the founder and the people who sell and deliver. What clients ask, what they worry about, what gets said in the room that never makes it onto the website. Most positions are hiding in a sentence someone says offhand." },
        { k: "Stage 02", title: "Look outward", body: "Your market, your competitors, and the words they all use. Differentiation is relative, so a claim only counts if it is a claim others are not already making." },
        { k: "Stage 03", title: "Decide", body: "Choosing a position means giving something up. We work through the options with you and pick one that is true, provable and narrow enough to mean something." },
        { k: "Stage 04", title: "Write it", body: "The position becomes language: statement, messaging framework, proof points and service propositions. Written in your voice, in plain words, ready to use." },
        { k: "Stage 05", title: "Show it", body: "Visual identity and content direction, so what people see matches what they read. A premium position undermined by amateur design does not survive first contact." },
        { k: "Stage 06", title: "Apply it everywhere", body: "Website, search content, proposals, social profiles and sales material. Positioning only pays once it is consistent across every surface a buyer touches." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Positioning, branding and marketing are ", em: "not the same thing." },
        sub: "They run in that order, and skipping the first makes the other two cost more.",
      },
      columns: ["Discipline", "What it answers", "What it produces", "If you skip it"],
      rows: [
        ["Positioning", "Who are we for, and why us?", "A decision, a statement, a messaging framework", "Everything downstream says a lot and means little"],
        ["Branding", "What do we look and sound like?", "Identity, voice, design system", "The business looks inconsistent and harder to trust"],
        ["Marketing", "How do we reach and persuade people?", "Website, content, campaigns, search visibility", "Nobody hears you, however good the position is"],
      ],
    },
    connection: {
      head: {
        eyebrow: "Why it is stage one",
        h2: { pre: "Positioning decides what everything else ", em: "is able to say." },
      },
      steps: [
        { k: "Feeds", title: "Your website", body: "A website is positioning made visible. With a clear position, page structure and copy are largely decided before design begins. Without one, the build stalls on what the homepage should say." },
        { k: "Feeds", title: "Search, AEO and GEO", body: "Search engines and AI assistants both reward specificity. Positioning determines which terms you are genuinely credible for and whether your pages answer a question better than a generic competitor. Vague businesses are hard to rank and harder to cite." },
        { k: "Feeds", title: "Content and social", body: "A position gives you something to say consistently rather than posting into the void. It is the difference between a content plan and a content habit." },
        { k: "Feeds", title: "Sales and proposals", body: "When the team shares one way of explaining the business, sales conversations get shorter and enquiries arrive better qualified. This is usually where clients notice the change first." },
      ],
      tail: {
        text: "This is why Brand & Positioning sits at stage one of the KEYOB pathway. You can enter at any stage, but the earlier stages make the later ones cheaper.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    proof: {
      head: {
        eyebrow: "In practice",
        h2: { pre: "What this looks like ", em: "on real work." },
      },
      cards: [
        {
          badge: "Story",
          title: "A science practice that needed the world to see it",
          tagline: "Formulyn is a boutique formulation consultancy with genuine depth and, at the time, nothing a prospective client could look at. We found the position, wrote the language and built the presence around it.",
          listLabel: "What positioning decided",
          items: [
            "Leading with the structural difference rather than the service list",
            "Naming the client's real fear instead of describing a process",
            "A site that answers questions in the order they are actually asked",
          ],
          cta: "Read the story",
          note: "Branding · Website · Content",
          href: "/stories",
        },
        {
          badge: "Story",
          title: "Forty-five years of trust, now easy to find",
          tagline: "East St Kilda Dental had a reputation built entirely on word of mouth. The work was deciding who the site should speak to first, then building search and AI visibility on top of that decision.",
          listLabel: "What positioning decided",
          items: [
            "Writing for the patient who has avoided the dentist for years",
            "Addressing cost openly rather than hiding it",
            "A tone of voice that carries four decades of care",
          ],
          cta: "Read the story",
          note: "Website · Content · SEO, AEO & GEO",
          href: "/stories",
        },
      ],
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "Brand positioning, ", em: "answered plainly." },
      },
      items: [
        { q: "What is brand positioning?", a: "Brand positioning is the place your business occupies in a customer's mind relative to the alternatives. It answers who you are for, what you do better or differently, and why that matters to the person choosing. It is a decision about meaning, not a logo or a tagline, although both should express it." },
        { q: "What is the difference between brand positioning and branding?", a: "Positioning is the strategic decision about what you stand for and who you are for. Branding is the expression of that decision through name, identity, voice and design. Positioning comes first. Branding without positioning produces work that looks considered but says nothing specific, which is why so many rebrands change how a business looks without changing how it sells." },
        { q: "What is included in a brand positioning project?", a: "A positioning statement, an audience definition, a competitive view, a messaging framework with proof points, a value proposition for each service, website content direction and visual identity direction. The deliverable most businesses feel immediately is the messaging framework, because it changes how the whole team talks about the business." },
        { q: "How long does brand positioning take?", a: "Scope decides it. A focused engagement for a single-service business is considerably shorter than one for a multi-service firm with several audiences and an existing identity to carry forward. We set a realistic range during discovery rather than quoting a number before we understand the business." },
        { q: "Does brand positioning affect SEO?", a: "Yes, more than most businesses expect. Positioning determines which terms you are genuinely credible for, what your pages are actually about, and whether your content answers a question better than a generic competitor. Search engines and AI assistants both reward specificity, and specificity is a positioning outcome rather than a writing trick." },
        { q: "Do we need positioning if we already have a logo?", a: "Possibly. A logo is an identifier, not a position. If your team describes the business differently in every meeting, if proposals come back compared on price alone, or if your website would still make sense with a competitor's name on it, the gap is positioning rather than design." },
        { q: "How is brand positioning measured?", a: "In the behaviour it changes. Whether sales conversations get shorter, whether enquiries arrive better qualified, whether price objections fall, and whether people describe your business back to you the way you intended. For most small and mid-sized firms those shifts matter more than brand recall surveys." },
        { q: "Can KEYOB apply the positioning as well as define it?", a: "Yes, and that is usually the point. We build the website, the content, the search visibility and the systems that carry the position into daily operation. Strategy handed over as a document tends to stay a document." },
      ],
    },
    closing: {
      h2: { pre: "Hard to explain in one sentence? ", em: "Start there." },
      body: "If describing your business takes a paragraph and still leaves people unsure, that is a fixable problem, and usually a quicker one than people expect.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Brand Positioning",
      "name": "Brand Positioning Services",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Brand positioning, messaging and identity services: defining what a business stands for, who it is for and why it is the better choice, then applying it across website, content and sales material.",
      "url": "/what-we-do/brand-positioning",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Brand positioning deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Positioning statement"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Messaging framework"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Visual identity"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Website content direction"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "website-design-development",
    stage: "Stage 02 · Website & Digital Presence",
    crumb: "Website Design & Development",
    title: "Website Design & Development Australia | Custom Business Websites",
    description: "Website design and development for Australian businesses. KEYOB designs, writes and builds custom websites that load fast, rank well and turn visitors into enquiries. Brisbane based, working nationally.",
    ogTitle: "Website Design & Development",
    ogDescription: "A website is not a brochure. It is the hardest working part of your sales process.",
    headline: { pre: "Your website is the only salesperson that ", em: "never sleeps." },
    intro: [
      "Most business websites are built as online brochures, then quietly judged as sales tools. The gap between the two is where enquiries are lost, usually without anyone noticing.",
      "KEYOB designs, writes and builds custom websites for Australian businesses: fast, clear, structured around how buyers actually decide, and built so search engines and AI assistants can understand them.",
    ],
    cta: {
      primary: { label: "Talk about your website", href: "/contact#contact" },
      secondary: { label: "What makes a website work?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs><linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#5EE0FF\"/><stop offset=\"1\" stop-color=\"#7BB4FF\"/></linearGradient></defs> <g font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"rgba(255,255,255,.72)\"> <text x=\"14\" y=\"52\">ARRIVES</text><text x=\"14\" y=\"110\">UNDERSTANDS</text> <text x=\"14\" y=\"168\">TRUSTS</text><text x=\"14\" y=\"226\">ENQUIRES</text> </g> <g class=\"travel\" stroke=\"rgba(25,198,232,.45)\" stroke-width=\"1.3\" fill=\"none\"> <path d=\"M100 48 C 150 48 160 150 196 150\"/><path d=\"M100 106 C 150 106 168 150 196 150\"/> <path d=\"M100 164 C 150 164 172 150 196 150\"/><path d=\"M100 222 C 150 222 164 150 196 150\"/> </g> <rect x=\"196\" y=\"78\" width=\"150\" height=\"146\" rx=\"12\" fill=\"rgba(37,99,217,.16)\" stroke=\"url(#g1)\" stroke-width=\"1.8\"/> <rect x=\"196\" y=\"78\" width=\"150\" height=\"22\" rx=\"12\" fill=\"rgba(255,255,255,.08)\"/> <circle cx=\"210\" cy=\"89\" r=\"3\" fill=\"rgba(255,255,255,.4)\"/><circle cx=\"220\" cy=\"89\" r=\"3\" fill=\"rgba(255,255,255,.28)\"/> <rect x=\"210\" y=\"116\" width=\"76\" height=\"8\" rx=\"4\" fill=\"rgba(255,255,255,.76)\"/> <rect x=\"210\" y=\"132\" width=\"110\" height=\"6\" rx=\"3\" fill=\"rgba(255,255,255,.3)\"/> <rect x=\"210\" y=\"146\" width=\"92\" height=\"6\" rx=\"3\" fill=\"rgba(255,255,255,.3)\"/> <rect x=\"210\" y=\"168\" width=\"64\" height=\"18\" rx=\"9\" fill=\"#7BB4FF\"/> <rect x=\"210\" y=\"198\" width=\"120\" height=\"6\" rx=\"3\" fill=\"rgba(255,255,255,.18)\"/> <path class=\"travel\" d=\"M346 150 H392\" stroke=\"#7BB4FF\" stroke-width=\"1.6\" fill=\"none\"/> <circle cx=\"416\" cy=\"150\" r=\"22\" fill=\"rgba(123,180,255,.18)\" stroke=\"#7BB4FF\" stroke-width=\"1.8\"/> <text x=\"416\" y=\"154\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#9fd3cb\">LEAD</text> <text x=\"230\" y=\"282\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">EVERY PAGE HAS A JOB TO DO</text>",
    heroCaption: "DESIGN, CONTENT AND CODE SOLVING ONE PROBLEM TOGETHER",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What makes a ", em: "business website", post: " work?" },
      },
      label: "Definition",
      body: [
        "A business website works when it answers, in order, the questions a buyer is actually asking: what do you do, is it for someone like me, can I trust you, what does it cost, and what happens next. Design, copy and page structure all exist to move someone through those questions without friction.",
        "Everything else, the animation, the stock photography, the clever menu, is only useful if it helps that sequence. A site that looks impressive but answers the questions out of order will lose to a plain one that answers them properly.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "A slow or unclear site is a ", em: "tax on everything else." },
        sub: "Your website sits downstream of every marketing dollar you spend and upstream of every sales conversation you have.",
      },
      cards: [
        { n: "01", title: "Paid traffic lands on it", body: "Advertising spend is only as good as the page it points at. A weak landing page quietly raises the cost of every click you buy." },
        { n: "02", title: "Search depends on it", body: "Page speed, structure and content quality are ranking factors. A slow, thin site limits how far search and AI visibility work can take you." },
        { n: "03", title: "Buyers judge it in seconds", body: "People decide whether a business is credible long before they read a case study. That judgement is made on design, clarity and load time." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs your website is ", em: "working against you." },
        sub: "These are the patterns we see most often when a business asks for a rebuild.",
      },
      items: [
        "Visitors arrive, look at one page, and leave without contacting you.",
        "Your phone enquiries outnumber your website enquiries by a wide margin.",
        "The site takes more than a few seconds to load on a phone.",
        "Nobody internally can update a page without asking a developer.",
        "The homepage explains who you are but never says who you are for.",
        "Your best services are buried three clicks deep.",
        "The contact page asks for everything and explains nothing.",
        "It was built years ago for a business that has since changed.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What we actually ", em: "deliver." },
        sub: "Design, content and build handled by one team, so nothing gets lost between them.",
      },
      cards: [
        { n: "01", title: "Information architecture", body: "What pages exist, how they relate, and in what order a visitor meets them. Decided before any design begins." },
        { n: "02", title: "UX and interface design", body: "Layouts designed around reading and deciding rather than around a template's available blocks." },
        { n: "03", title: "Website copywriting", body: "Every page written to answer a real question. Content written by the people who designed the structure, not retrofitted into it." },
        { n: "04", title: "Custom development", body: "A fast, secure, maintainable build. No page builder sprawl that becomes someone else's problem in two years." },
        { n: "05", title: "Mobile-first delivery", body: "Most of your visitors are on a phone. The phone layout is designed first, not squeezed down afterwards." },
        { n: "06", title: "Performance and Core Web Vitals", body: "Image handling, caching and code discipline so the site loads quickly on a real connection, not just on a developer's machine." },
        { n: "07", title: "Technical SEO foundations", body: "Clean markup, structured data, sensible URLs and metadata so the site is readable by search engines and AI assistants from day one." },
        { n: "08", title: "Conversion paths", body: "Clear next steps on every page, with forms, booking and click-to-call placed where the decision actually happens." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Structure first, ", em: "pixels second." },
        sub: "Most website projects stall because design starts before anyone decides what the site needs to say.",
      },
      steps: [
        { k: "Stage 01", title: "Understand the business", body: "Who buys, what they ask, what objections come up, and which services actually matter commercially. The brief comes from the business, not from a questionnaire." },
        { k: "Stage 02", title: "Plan the structure", body: "Page map and content outline. What each page must achieve and what a visitor should do next. Agreed before design starts." },
        { k: "Stage 03", title: "Write the content", body: "Copy drafted against the structure, in your voice. Writing early means design fits real words rather than placeholder text." },
        { k: "Stage 04", title: "Design the interface", body: "Visual design applied to real content, mobile layouts first, with a system that stays consistent as pages are added later." },
        { k: "Stage 05", title: "Build and optimise", body: "Development, performance tuning, accessibility, structured data and testing across real devices." },
        { k: "Stage 06", title: "Launch and improve", body: "Deployment, analytics, search setup, and the ongoing changes that keep a site earning rather than ageing." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Website builder, agency template, or ", em: "custom build?" },
        sub: "All three are valid in the right situation. The cost differences are obvious; the trade-offs are less so.",
      },
      columns: ["Approach", "Best when", "Strength", "The catch"],
      rows: [
        ["DIY builder", "You need presence quickly and budget is the binding constraint", "Low cost, immediate, no dependency on anyone", "Performance and structure limits appear exactly when you start spending on traffic"],
        ["Agency template", "Your requirements are standard and speed matters more than fit", "Fast, predictable, visually polished", "Your business gets shaped to the template, and so does everyone else using it"],
        ["Custom build", "The site is a commercial asset and needs to fit how you actually sell", "Built around your content, your buyers and your systems", "Costs more up front and needs a partner who will still be there later"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "A website is where every other ", em: "stage becomes visible." },
      },
      steps: [
        { k: "Needs", title: "Brand positioning", body: "A site cannot say something clear if the business has not decided what it stands for. Projects that stall at the homepage are usually stalled on positioning." },
        { k: "Feeds", title: "Search, AEO and GEO", body: "Technical structure, page speed and content quality decide how far search and AI visibility work can go. The site is the foundation that work is built on." },
        { k: "Feeds", title: "CRM and lead capture", body: "A form that posts into an inbox is a lost opportunity. Enquiries should arrive in a system that tracks and follows them." },
        { k: "Feeds", title: "Reporting", body: "Properly instrumented, a website tells you which pages create enquiries and which ones quietly do nothing." },
      ],
      tail: {
        text: "Website and Digital Presence is stage two of the KEYOB pathway, sitting between positioning and visibility.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "Website design, ", em: "answered plainly." },
      },
      items: [
        { q: "How much does a business website cost in Australia?", a: "It depends on scope: the number of pages, whether content is written for you, how much custom design and development is involved, and what it needs to integrate with. A focused site for a single-service business sits well below a multi-service site with custom functionality. We scope properly and quote once we understand what the site has to do, rather than quoting a number before that." },
        { q: "How long does a website take to build?", a: "Typically it is governed by content rather than code. Projects move quickly when decisions and material arrive on time, and slowly when copy is still being written during the build. We write the content as part of the project precisely to avoid that stall." },
        { q: "Do you write the content or do we?", a: "We write it. Copy drafted against the page structure, in your voice, and reviewed with you. Websites built around placeholder text almost always launch late and read like a template." },
        { q: "What platform do you build on?", a: "We choose based on who will maintain the site and what it needs to connect to. The important thing is that you own it, your team can update ordinary content without a developer, and it performs well. We will tell you plainly when a simpler platform is the better answer." },
        { q: "Will the website be good for SEO?", a: "The foundations are built in: clean structure, fast loading, sensible URLs, metadata and structured data. That is the groundwork rather than the whole job. Ranking also needs content and authority over time, which is the search stage of our pathway." },
        { q: "Can you redesign our existing website?", a: "Yes. Sometimes a rebuild is the right answer and sometimes the issue is structure, content or performance rather than the design itself. We look at what is actually causing the problem before recommending a full rebuild." },
        { q: "Do you provide ongoing support after launch?", a: "Yes. Hosting, maintenance, content updates and performance monitoring. A site that is looked after keeps improving; one that is left alone starts falling behind the week after launch." },
      ],
    },
    closing: {
      h2: { pre: "Getting traffic but not ", em: "enquiries?" },
      body: "If people are visiting and leaving, the problem is usually structure or clarity rather than design taste. It is worth finding out which.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Website Design and Development",
      "name": "Website Design and Development",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Custom website design, UX design, copywriting and web development for Australian businesses, built for speed, search visibility and conversion.",
      "url": "/what-we-do/website-design-development",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Design and Development deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Website design"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "UX and UI design"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Website development"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Landing pages"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Website copywriting"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Performance optimisation"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "seo-aeo-geo",
    stage: "Stage 03 · Search, Visibility & Authority",
    crumb: "SEO, AEO & GEO",
    title: "SEO, AEO & GEO Services Australia | Rank, Answer & Get Cited by AI",
    description: "SEO, Answer Engine Optimisation and Generative Engine Optimisation for Australian businesses. KEYOB helps you rank in Google, win the answer box, and get cited by AI assistants like ChatGPT, Claude, Perplexity and AI Overviews.",
    ogTitle: "SEO, AEO & GEO Services",
    ogDescription: "Three ways people now find a business. We build for all three.",
    headline: { pre: "People now find you three ways. ", em: "Most sites", post: " are built for one." },
    intro: [
      "Search has split. Some people still type a query and click a result. Many read the answer at the top and never click at all. A growing number ask an AI assistant and act on whatever it recommends.",
      "SEO, AEO and GEO are the three disciplines that cover those routes. KEYOB builds for all three together, because the same work that earns a ranking is what makes you quotable to an AI.",
    ],
    cta: {
      primary: { label: "Check where you stand", href: "/contact#contact" },
      secondary: { label: "SEO vs AEO vs GEO", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<g font-family=\"JetBrains Mono,monospace\" font-size=\"9\"> <rect x=\"14\" y=\"34\" width=\"156\" height=\"42\" rx=\"9\" fill=\"rgba(25,198,232,.10)\" stroke=\"rgba(25,198,232,.5)\"/> <text x=\"92\" y=\"52\" text-anchor=\"middle\" fill=\"#7fd8fb\">SEO</text> <text x=\"92\" y=\"66\" text-anchor=\"middle\" fill=\"rgba(255,255,255,.5)\" font-size=\"8\">\"seo agency brisbane\"</text> <rect x=\"14\" y=\"134\" width=\"156\" height=\"42\" rx=\"9\" fill=\"rgba(123,180,255,.14)\" stroke=\"rgba(123,180,255,.55)\"/> <text x=\"92\" y=\"152\" text-anchor=\"middle\" fill=\"#c9a4de\">AEO</text> <text x=\"92\" y=\"166\" text-anchor=\"middle\" fill=\"rgba(255,255,255,.5)\" font-size=\"8\">\"what is answer engine opt?\"</text> <rect x=\"14\" y=\"234\" width=\"156\" height=\"42\" rx=\"9\" fill=\"rgba(123,180,255,.14)\" stroke=\"rgba(123,180,255,.55)\"/> <text x=\"92\" y=\"252\" text-anchor=\"middle\" fill=\"#c9a4de\">GEO</text> <text x=\"92\" y=\"266\" text-anchor=\"middle\" fill=\"rgba(255,255,255,.5)\" font-size=\"8\">asked to an AI assistant</text> </g> <g class=\"travel\" stroke=\"rgba(123,180,255,.55)\" stroke-width=\"1.4\" fill=\"none\"> <path d=\"M170 55 C 230 55 240 155 290 155\"/><path d=\"M170 155 H290\"/><path d=\"M170 255 C 230 255 240 155 290 155\"/> </g> <rect x=\"290\" y=\"118\" width=\"110\" height=\"74\" rx=\"14\" fill=\"rgba(37,99,217,.18)\" stroke=\"#7BB4FF\" stroke-width=\"1.8\"/> <text x=\"345\" y=\"148\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"10\" fill=\"#fff\">YOUR</text> <text x=\"345\" y=\"166\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"10\" fill=\"#fff\">BUSINESS</text> <circle class=\"pulse\" cx=\"345\" cy=\"155\" r=\"62\" fill=\"none\" stroke=\"rgba(123,180,255,.22)\" stroke-width=\"1\"/> <text x=\"230\" y=\"312\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">RANKED &middot; QUOTED &middot; RECOMMENDED</text>",
    heroCaption: "THREE ROUTES TO THE SAME BUSINESS",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What are ", em: "SEO, AEO and GEO?" },
      },
      label: "Definition",
      body: [
        "SEO (search engine optimisation) is the work of ranking in a results page. AEO (answer engine optimisation) is the work of being the source a search engine lifts into a direct answer or featured snippet. GEO (generative engine optimisation) is the work of being recommended and cited by AI assistants such as ChatGPT, Claude, Perplexity and Google's AI Overviews.",
        "They overlap but they are not the same job. Ranking rewards authority and relevance. Being the answer rewards clear, extractable, well structured content. Being cited by an AI rewards consistency, verifiable facts and substance an assistant can trust. A site can do one well and the other two badly.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "A click is no longer the only ", em: "way to be found." },
        sub: "If your visibility strategy assumes everyone clicks through to your site, it is measuring a shrinking part of the picture.",
      },
      cards: [
        { n: "01", title: "Answers are given before clicks", body: "Search results increasingly answer the question on the page. Being the source of that answer is visibility even when nobody clicks." },
        { n: "02", title: "AI assistants make shortlists", body: "People ask an assistant who to use, then contact one or two names. If you are not in that answer, you are not in the consideration set at all." },
        { n: "03", title: "Authority compounds slowly", body: "Search visibility is cumulative. The work done this quarter pays over the following year, which is why starting late is expensive." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs your visibility work is ", em: "incomplete." },
        sub: "Most Australian businesses have some SEO in place and nothing at all for the other two.",
      },
      items: [
        "You rank for your business name and very little else.",
        "Competitors appear when you ask an AI assistant for recommendations, and you do not.",
        "Your traffic is flat while impressions are rising, which usually means answers without clicks.",
        "Your site has no structured data beyond whatever the theme added.",
        "Your content answers questions nobody is actually asking.",
        "You serve several suburbs or regions but have one generic location page.",
        "Nobody has looked at a technical crawl of the site in over a year.",
        "Your best expertise lives in people's heads and has never been published.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What the work actually ", em: "involves." },
        sub: "Three disciplines, run as one programme rather than three separate retainers.",
      },
      cards: [
        { n: "01", title: "Technical SEO audit", body: "Crawl, indexation, page speed, Core Web Vitals, mobile usability, internal linking and the structural issues that cap everything else." },
        { n: "02", title: "Keyword and question research", body: "What your buyers actually search and ask, including the question-shaped queries that drive answers and AI responses." },
        { n: "03", title: "On-page optimisation", body: "Titles, headings, metadata, internal links and content depth, aligned to intent rather than to keyword density." },
        { n: "04", title: "Structured data", body: "Schema markup for organisation, services, FAQs, articles and local business, so engines and assistants can parse what each page is." },
        { n: "05", title: "Answer-led content", body: "Articles and FAQs written so a clear, accurate answer can be lifted directly, which is the mechanism behind featured snippets and AI summaries." },
        { n: "06", title: "Local SEO", body: "Google Business Profile, consistent business details, and genuine location pages for each area you serve rather than one page with the suburb swapped." },
        { n: "07", title: "Authority and content strategy", body: "A publishing plan that builds subject credibility over time, because both search engines and AI systems weigh how substantive a source is." },
        { n: "08", title: "Measurement", body: "Rankings, impressions, clicks and enquiries tracked together, so you can see visibility turning into business rather than just traffic." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Fix the foundations, ", em: "then build authority." },
        sub: "Publishing more content on a technically weak site is the most common way to waste a search budget.",
      },
      steps: [
        { k: "Stage 01", title: "Audit", body: "Technical health, current visibility, content inventory and a look at what competitors are ranking and being cited for." },
        { k: "Stage 02", title: "Fix the foundations", body: "Crawl and indexation issues, speed, structure and metadata. The unglamorous work that determines whether anything else can succeed." },
        { k: "Stage 03", title: "Structure the site for intent", body: "Service pages, location pages and supporting content organised around how people actually search rather than around your internal org chart." },
        { k: "Stage 04", title: "Add structured data", body: "Schema across the site so engines and AI assistants can identify your organisation, services and answers without guessing." },
        { k: "Stage 05", title: "Publish answers", body: "Question-led content that resolves real queries clearly enough to be quoted, with the depth that earns subject authority." },
        { k: "Stage 06", title: "Measure and iterate", body: "Monthly review of rankings, impressions, AI citations where observable, and enquiries, with the plan adjusted on evidence." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "SEO, AEO and GEO: ", em: "what each one does." },
        sub: "The simplest way to see why they need to be run together.",
      },
      columns: ["Discipline", "The question it answers", "Where you appear", "What wins it"],
      rows: [
        ["SEO", "How do we rank for what people search?", "The list of blue links", "Technical health, relevance, authority, links"],
        ["AEO", "How do we become the answer itself?", "Featured snippets, answer boxes, AI Overviews", "Clear, extractable answers plus structured data"],
        ["GEO", "How do we get recommended by AI assistants?", "ChatGPT, Claude, Perplexity, Gemini responses", "Consistent facts, substance, verifiable credibility"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "Visibility work depends on what ", em: "sits underneath it." },
      },
      steps: [
        { k: "Needs", title: "Brand positioning", body: "Specificity is what ranks and what gets cited. A business that cannot say precisely who it serves is hard to rank and harder to recommend." },
        { k: "Needs", title: "A technically sound website", body: "Page speed, structure and crawlability cap what search work can achieve. Fixing those is usually the first month of any engagement." },
        { k: "Feeds", title: "Content and social", body: "A search strategy gives your content plan a reason to exist beyond posting regularly." },
        { k: "Feeds", title: "Lead capture and CRM", body: "Visibility creates enquiries. Those enquiries need somewhere to land so you can tell which search work actually produced revenue." },
      ],
      tail: {
        text: "Search, Visibility and Authority is stage three of the KEYOB pathway, directly after the website it depends on.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "Search visibility, ", em: "answered plainly." },
      },
      items: [
        { q: "What is the difference between SEO and AEO?", a: "SEO is about ranking in the list of results. AEO is about being the source that gets lifted into a direct answer, featured snippet or AI Overview. AEO rewards content that states a clear answer near the top and uses structured data, so a machine can extract it confidently." },
        { q: "What is GEO, or generative engine optimisation?", a: "GEO is the work of being recommended and cited by AI assistants when someone asks for a provider or an explanation. It depends less on traditional ranking signals and more on whether your facts are consistent across the web, whether your content is substantive, and whether an assistant can verify who you are." },
        { q: "How do I get my business recommended by ChatGPT or Claude?", a: "Be consistent and be substantive. State the same business facts the same way everywhere, publish content that genuinely answers questions in your field, use structured data so machines can identify your organisation and services, and build the kind of third-party presence that makes those claims verifiable. There is no submission form; it is earned the slow way." },
        { q: "How long does SEO take to work?", a: "Technical fixes can show results within weeks. Authority and content work usually takes months, and compounds after that. Anyone promising rankings in a fixed short timeframe is describing a sales pitch rather than how search works." },
        { q: "Is SEO still worth it with AI answers taking traffic?", a: "Yes, though the goal has shifted. The work that earns rankings is largely the same work that gets you quoted in answers and cited by assistants. What changes is how you measure success: visibility and enquiries matter more than raw sessions." },
        { q: "Do you do local SEO for specific suburbs?", a: "Yes. Genuine location pages with real detail about serving that area, consistent business information, and Google Business Profile work. We do not publish twenty near-identical pages with the suburb name swapped, because that approach stopped working and now carries risk." },
        { q: "How do you measure AEO and GEO results?", a: "Through a combination of impressions versus clicks, featured snippet and answer-box appearances, branded search growth, and periodic testing of how AI assistants answer the questions your buyers ask. Measurement here is less mature than traditional SEO, and we are straight about which numbers are solid and which are directional." },
      ],
    },
    closing: {
      h2: { pre: "Invisible in search, or invisible ", em: "to the AI?" },
      body: "Both are fixable, and the work overlaps more than most people expect. A short audit will show you exactly where you stand today.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Search Engine Optimisation",
      "name": "SEO, AEO and GEO Services",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Search engine optimisation, answer engine optimisation and generative engine optimisation: technical SEO, local SEO, content strategy, structured data and AI search visibility for Australian businesses.",
      "url": "/what-we-do/seo-aeo-geo",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SEO, AEO and GEO Services deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Technical SEO audit"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Local SEO"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Content strategy"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Structured data"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Answer engine optimisation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Generative engine optimisation"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "social-media-demand-generation",
    stage: "Stage 04 · Social Media & Demand Generation",
    crumb: "Social Media & Demand Generation",
    title: "Social Media Management & B2B Demand Generation Australia",
    description: "Social media management and demand generation for Australian businesses. KEYOB builds founder-led content, campaign material and lead capture that turns attention into qualified enquiries, not just impressions.",
    ogTitle: "Social Media & Demand Generation",
    ogDescription: "Attention is easy to buy and hard to convert. Demand generation is the difference.",
    headline: { pre: "Posting is not a strategy. ", em: "Demand", post: " is." },
    intro: [
      "Plenty of businesses post consistently and generate nothing. The content is fine, the frequency is fine, and the enquiries never come. The missing piece is almost never effort.",
      "Demand generation is the work of building awareness among people who will eventually buy, then giving them an obvious way to raise their hand. KEYOB builds the content, the proof and the capture path as one system.",
    ],
    cta: {
      primary: { label: "Talk about demand generation", href: "/contact#contact" },
      secondary: { label: "What is demand generation?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs><linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#7BB4FF\"/><stop offset=\"1\" stop-color=\"#5EE0FF\"/></linearGradient></defs> <text x=\"230\" y=\"34\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">AUDIENCE</text> <g fill=\"none\" stroke=\"rgba(123,180,255,.5)\" stroke-width=\"1.2\"> <circle cx=\"70\" cy=\"74\" r=\"9\"/><circle cx=\"118\" cy=\"66\" r=\"9\"/><circle cx=\"166\" cy=\"76\" r=\"9\"/><circle cx=\"214\" cy=\"64\" r=\"9\"/> <circle cx=\"262\" cy=\"76\" r=\"9\"/><circle cx=\"310\" cy=\"66\" r=\"9\"/><circle cx=\"358\" cy=\"76\" r=\"9\"/><circle cx=\"400\" cy=\"66\" r=\"9\"/> </g> <path d=\"M60 110 H400 L318 186 H142 Z\" fill=\"rgba(123,180,255,.10)\" stroke=\"rgba(123,180,255,.45)\" stroke-width=\"1.3\"/> <text x=\"230\" y=\"152\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#e9a8c4\">CONTENT THAT EARNS ATTENTION</text> <path d=\"M142 186 H318 L268 244 H192 Z\" fill=\"rgba(123,180,255,.16)\" stroke=\"rgba(123,180,255,.6)\" stroke-width=\"1.3\"/> <text x=\"230\" y=\"220\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#f0c2d7\">PROOF THAT BUILDS TRUST</text> <path class=\"travel\" d=\"M230 244 V276\" stroke=\"url(#g1)\" stroke-width=\"1.8\" fill=\"none\"/> <rect x=\"166\" y=\"276\" width=\"128\" height=\"34\" rx=\"17\" fill=\"rgba(25,198,232,.16)\" stroke=\"#5EE0FF\" stroke-width=\"1.6\"/> <text x=\"230\" y=\"298\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"#7fd8fb\">QUALIFIED ENQUIRY</text>",
    heroCaption: "ATTENTION IS ONLY USEFUL IF IT HAS SOMEWHERE TO GO",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What is ", em: "demand generation?" },
      },
      label: "Definition",
      body: [
        "Demand generation is the work of creating awareness and trust among people who are not ready to buy yet, so that when they are ready, you are the business they already have a view about. It covers content, proof, distribution and the capture path that lets interest become an enquiry.",
        "It is different from lead generation, which collects contact details from people already looking. Demand generation builds the pool that lead generation draws from. Businesses that only run lead generation find the pool keeps getting more expensive.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "Consistency without a point is ", em: "just noise." },
        sub: "Three reasons most B2B social activity produces attention but not enquiries.",
      },
      cards: [
        { n: "01", title: "The content has no position", body: "Generic industry posts could come from any competitor. Content only compounds when it is recognisably yours and says something specific." },
        { n: "02", title: "There is no proof layer", body: "People buy from businesses they believe can do the work. Case studies, client stories and real results do more than volume of posts ever will." },
        { n: "03", title: "There is nowhere to land", body: "Interest arrives and finds no obvious next step. A profile that leads nowhere converts attention into nothing." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs the activity is not ", em: "generating demand." },
        sub: "Common patterns we see before starting this work.",
      },
      items: [
        "You post regularly and cannot point to one enquiry it produced.",
        "Engagement comes mostly from other people in your own industry.",
        "Your content is accurate and useful but could be posted by any competitor.",
        "The founder has the best insight in the business and never publishes it.",
        "You have delivered excellent projects that have never been written up.",
        "Your social profiles do not link anywhere specific.",
        "Paid campaigns perform until you stop paying, then nothing remains.",
        "Nobody can say which content topic actually brings in work.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What we ", em: "produce and run." },
        sub: "Content with a point, proof that earns trust, and a path that captures interest.",
      },
      cards: [
        { n: "01", title: "Content strategy", body: "Themes tied to your positioning and to what buyers actually need to understand before they can buy." },
        { n: "02", title: "Founder-led content", body: "The most effective B2B content in most markets. We help the founder publish their thinking without it becoming a second full-time job." },
        { n: "03", title: "Case study and story content", body: "Client work written up properly, then cut into the formats each channel needs. One project becomes months of credible material." },
        { n: "04", title: "Social media management", body: "Planning, writing, scheduling and publishing, with a calendar you can see in advance rather than content invented the night before." },
        { n: "05", title: "Campaign content", body: "Material for specific pushes: a new service, an event, a market or a season, built to a defined objective." },
        { n: "06", title: "Lead capture flows", body: "The path from interest to enquiry: landing pages, forms, booking links and follow-up, connected to your CRM rather than an inbox." },
        { n: "07", title: "Paid campaign support", body: "Creative and landing pages for paid activity, so the spend points at something built to convert." },
        { n: "08", title: "Performance review", body: "What is being seen, what is being acted on, and which themes produce enquiries, reviewed regularly and used to adjust the plan." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Build the engine, ", em: "then feed it." },
        sub: "Content is the visible part. Most of the value comes from the decisions made before anything is published.",
      },
      steps: [
        { k: "Stage 01", title: "Define the audience and the point of view", body: "Who you are talking to and what you believe that is worth hearing. Content without a point of view is content nobody remembers." },
        { k: "Stage 02", title: "Build the proof library", body: "Client work, results and stories captured properly. This becomes the backbone of credible content for the next year." },
        { k: "Stage 03", title: "Plan the content system", body: "Themes, formats, channels and a realistic cadence. Realistic matters: a plan nobody can sustain is worse than a smaller one that runs." },
        { k: "Stage 04", title: "Build the capture path", body: "Landing pages, forms and CRM connection, so an interested reader has a clear, tracked next step." },
        { k: "Stage 05", title: "Publish and distribute", body: "Consistent output across the channels where your buyers actually are, rather than all of them at once." },
        { k: "Stage 06", title: "Measure what converts", body: "Which themes and formats produce enquiries, not just impressions. The plan follows the evidence." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Demand generation, lead generation and ", em: "brand awareness." },
        sub: "Three different jobs that get called marketing and then measured the same way, which is where frustration starts.",
      },
      columns: ["Activity", "Who it targets", "What it produces", "How to judge it"],
      rows: [
        ["Brand awareness", "People who do not know you", "Recognition and recall", "Reach and prompted awareness, measured over long periods"],
        ["Demand generation", "People with the problem but no active search", "Trust, preference and inbound interest", "Branded search growth, direct enquiries, shorter sales cycles"],
        ["Lead generation", "People actively looking right now", "Contact details and booked conversations", "Cost per qualified enquiry and conversion rate"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "Content only works when it has ", em: "something to stand on." },
      },
      steps: [
        { k: "Needs", title: "Brand positioning", body: "A point of view comes from a position. Businesses without one end up posting industry news, which builds nothing." },
        { k: "Needs", title: "A website that converts", body: "Social creates interest. The website decides whether it becomes an enquiry. Driving traffic to a weak site wastes the attention you earned." },
        { k: "Feeds", title: "Search and AI visibility", body: "Published expertise supports search authority and gives AI assistants substance to cite. The same work serves both." },
        { k: "Feeds", title: "CRM and sales", body: "Enquiries need tracking from first touch so you can see which content themes actually produce revenue." },
      ],
      tail: {
        text: "Social Media and Demand Generation is stage four of the KEYOB pathway, where presence starts producing pipeline.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "Demand generation, ", em: "answered plainly." },
      },
      items: [
        { q: "What is the difference between demand generation and lead generation?", a: "Lead generation collects details from people already looking for what you sell. Demand generation builds awareness and trust among people who have the problem but are not searching yet, so the pool of future buyers keeps growing. Businesses that run only lead generation usually find costs climb as the available pool stays the same size." },
        { q: "Which social platform matters most for B2B in Australia?", a: "Usually LinkedIn, because that is where business audiences and decision makers are reachable and where founder-led content performs. The honest answer depends on your buyers, and we would rather you do one channel properly than four badly." },
        { q: "Does founder-led content actually work?", a: "In most B2B markets, yes. People follow and trust people more readily than company pages, and a founder's view is the one thing a competitor cannot copy. The practical problem is sustainability, which is why we build a process around it rather than relying on the founder finding time." },
        { q: "How often should we post?", a: "Consistently enough to stay familiar and sustainably enough to keep going. A cadence you can hold for a year beats an ambitious schedule abandoned after six weeks. We set the frequency against the capacity that actually exists." },
        { q: "How do you measure social media results?", a: "By enquiries and pipeline where we can attribute them, supported by branded search growth and direct traffic as indicators that awareness is building. Impressions and follower counts are context rather than outcomes." },
        { q: "Can you use our existing client work as content?", a: "Yes, with permission, and it is usually the most valuable material available. Projects you have already delivered are proof you have already earned. Most businesses are sitting on a year of credible content they have never written up." },
        { q: "Do we need paid advertising as well?", a: "Not necessarily. Paid works best once the organic foundations are in place, because it amplifies a message that is already converting. Paying to distribute a message that does not work simply gets you to the wrong answer faster." },
      ],
    },
    closing: {
      h2: { pre: "Posting consistently, but ", em: "nothing is happening?" },
      body: "That usually means the content lacks a point of view, the proof is missing, or there is no path from interest to enquiry. All three are fixable.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Social Media Marketing",
      "name": "Social Media and Demand Generation",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Social media management, founder-led content, campaign content and lead capture flows for Australian businesses, built to generate qualified enquiries.",
      "url": "/what-we-do/social-media-demand-generation",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Social Media and Demand Generation deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Social media management"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Founder-led content"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Campaign content"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Case study content"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Lead capture flows"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Content calendars"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "crm-development",
    stage: "Stage 05 · CRM, Sales & Customer Systems",
    crumb: "CRM Development & Integration",
    title: "Custom CRM Development & Integration Australia | Sales Systems",
    description: "Custom CRM development, CRM setup and CRM integration for Australian businesses. KEYOB builds and connects sales systems so every lead, customer and opportunity is visible, tracked and followed up.",
    ogTitle: "CRM Development & Integration",
    ogDescription: "Leads are expensive to generate and easy to lose. A CRM is where that stops.",
    headline: { pre: "You pay to generate leads. ", em: "Then what happens", post: " to them?" },
    intro: [
      "Most businesses can tell you what a lead costs. Far fewer can tell you what happened to the one that came in three weeks ago, who followed it up, or why it went quiet.",
      "KEYOB sets up, customises, builds and connects CRM systems so every enquiry is captured, assigned, followed and measurable, from first contact to signed work.",
    ],
    cta: {
      primary: { label: "Talk about your CRM", href: "/contact#contact" },
      secondary: { label: "What does a CRM actually do?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs><linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#5EE0FF\"/><stop offset=\"1\" stop-color=\"#7BB4FF\"/></linearGradient></defs> <g font-family=\"JetBrains Mono,monospace\" font-size=\"8.5\" fill=\"rgba(255,255,255,.72)\"> <text x=\"14\" y=\"46\">WEBSITE FORM</text><text x=\"14\" y=\"86\">PHONE CALL</text><text x=\"14\" y=\"126\">EMAIL</text> <text x=\"14\" y=\"166\">REFERRAL</text><text x=\"14\" y=\"206\">SOCIAL DM</text><text x=\"14\" y=\"246\">CAMPAIGN</text> </g> <g class=\"travel\" stroke=\"rgba(25,198,232,.45)\" stroke-width=\"1.2\" fill=\"none\"> <path d=\"M104 42 C 150 42 160 146 192 146\"/><path d=\"M104 82 C 150 82 166 146 192 146\"/> <path d=\"M104 122 C 150 122 172 146 192 146\"/><path d=\"M104 162 C 150 162 172 146 192 146\"/> <path d=\"M104 202 C 150 202 166 146 192 146\"/><path d=\"M104 242 C 150 242 160 146 192 146\"/> </g> <rect x=\"192\" y=\"112\" width=\"96\" height=\"68\" rx=\"14\" fill=\"rgba(37,99,217,.18)\" stroke=\"url(#g1)\" stroke-width=\"1.9\"/> <text x=\"240\" y=\"142\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"11\" fill=\"#fff\">CRM</text> <text x=\"240\" y=\"160\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"rgba(255,255,255,.6)\">ONE RECORD</text> <g font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"#9fd4b8\"> <rect x=\"330\" y=\"60\" width=\"112\" height=\"26\" rx=\"7\" fill=\"rgba(123,180,255,.12)\" stroke=\"rgba(123,180,255,.45)\"/><text x=\"386\" y=\"77\" text-anchor=\"middle\">ASSIGNED</text> <rect x=\"330\" y=\"100\" width=\"112\" height=\"26\" rx=\"7\" fill=\"rgba(123,180,255,.12)\" stroke=\"rgba(123,180,255,.45)\"/><text x=\"386\" y=\"117\" text-anchor=\"middle\">FOLLOWED UP</text> <rect x=\"330\" y=\"140\" width=\"112\" height=\"26\" rx=\"7\" fill=\"rgba(123,180,255,.12)\" stroke=\"rgba(123,180,255,.45)\"/><text x=\"386\" y=\"157\" text-anchor=\"middle\">QUOTED</text> <rect x=\"330\" y=\"180\" width=\"112\" height=\"26\" rx=\"7\" fill=\"rgba(123,180,255,.12)\" stroke=\"rgba(123,180,255,.45)\"/><text x=\"386\" y=\"197\" text-anchor=\"middle\">WON OR LOST</text> <rect x=\"330\" y=\"220\" width=\"112\" height=\"26\" rx=\"7\" fill=\"rgba(123,180,255,.12)\" stroke=\"rgba(123,180,255,.45)\"/><text x=\"386\" y=\"237\" text-anchor=\"middle\">MEASURED</text> </g> <g class=\"travel\" stroke=\"rgba(123,180,255,.5)\" stroke-width=\"1.2\" fill=\"none\"> <path d=\"M288 146 C 310 146 312 73 330 73\"/><path d=\"M288 146 C 310 146 314 113 330 113\"/> <path d=\"M288 146 H330\"/><path d=\"M288 146 C 310 146 314 193 330 193\"/><path d=\"M288 146 C 310 146 312 233 330 233\"/> </g> <text x=\"230\" y=\"302\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">NOTHING ARRIVES AND QUIETLY DISAPPEARS</text>",
    heroCaption: "FROM SCATTERED ENQUIRIES TO ONE TRACKED PIPELINE",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What does a ", em: "CRM", post: " actually do?" },
      },
      label: "Definition",
      body: [
        "A CRM (customer relationship management system) is the single record of every lead, customer and opportunity your business has. It captures enquiries from every channel, assigns them to someone, tracks each conversation and quote, and shows you what is in the pipeline and what has gone quiet.",
        "The value is not the software. It is that nothing depends on who happened to answer the phone, who remembers to follow up, or whose inbox the enquiry landed in. A CRM turns a set of individual habits into a process the business owns.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "Lost leads rarely announce ", em: "themselves." },
        sub: "The cost of a weak sales system shows up as capacity problems, not as a missing line item.",
      },
      cards: [
        { n: "01", title: "You are paying twice", body: "Generating a lead costs money. Losing it to a missed follow-up means paying again to replace it, which is the most expensive way to grow." },
        { n: "02", title: "Follow-up decides most deals", body: "A large share of enquiries convert on the second or third contact rather than the first. Without a system, the second contact depends on someone remembering." },
        { n: "03", title: "You cannot improve what you cannot see", body: "Without pipeline data you cannot tell which services sell, which sources are worth the spend, or where deals stall." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs you have outgrown your ", em: "current setup." },
        sub: "Most businesses reach this point quietly, usually while growing.",
      },
      items: [
        "Enquiries arrive in an inbox and get handled from memory.",
        "Your pipeline is a spreadsheet one person maintains.",
        "Nobody can say how many open opportunities exist right now.",
        "A salesperson leaving would take client history with them.",
        "Website form submissions go to email and nowhere else.",
        "Quotes are tracked in a folder of documents.",
        "You cannot tell which marketing source produced which customer.",
        "You bought a CRM and the team quietly went back to spreadsheets.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What we ", em: "build and connect." },
        sub: "From configuring a platform you already pay for, to building something custom when nothing fits.",
      },
      cards: [
        { n: "01", title: "CRM selection advice", body: "An honest view on whether an off-the-shelf platform fits or whether your process genuinely needs something custom. Often the cheaper answer is the right one." },
        { n: "02", title: "CRM setup and configuration", body: "Pipelines, stages, fields, permissions and automations configured around how your business actually sells rather than the default template." },
        { n: "03", title: "Custom CRM development", body: "When your process does not fit a standard product, we build one that does, owned by you and extendable as you grow." },
        { n: "04", title: "Lead capture integration", body: "Website forms, landing pages, phone, email and campaigns feeding into the CRM automatically, so capture does not rely on manual entry." },
        { n: "05", title: "Sales pipeline automation", body: "Assignment rules, follow-up reminders, task creation and status changes handled by the system instead of by memory." },
        { n: "06", title: "Customer communication flows", body: "Acknowledgements, follow-up sequences and reminders that keep enquiries warm without anyone having to remember to send them." },
        { n: "07", title: "System integration", body: "Connecting the CRM to your website, accounting, ERP, marketing tools and anything else holding customer data, so the record is complete." },
        { n: "08", title: "CRM dashboards", body: "Pipeline value, conversion by stage, source performance and activity, visible to the people who need to act on them." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Configure around the process, ", em: "not the product." },
        sub: "The most common cause of CRM failure is a good platform configured around nobody's actual workflow.",
      },
      steps: [
        { k: "Stage 01", title: "Map how you sell", body: "How an enquiry arrives, who touches it, what decisions happen at each step, and where deals currently stall. The real process, not the tidy version." },
        { k: "Stage 02", title: "Choose the approach", body: "Configure an existing platform, extend one you already own, or build custom. We make the case either way and tell you when custom is not worth it." },
        { k: "Stage 03", title: "Design the pipeline", body: "Stages that match real decisions, fields that will actually be filled in, and automation placed where it removes work rather than adding clicks." },
        { k: "Stage 04", title: "Build and integrate", body: "Configuration or development, plus the connections to your website, campaigns and other systems so data arrives without manual entry." },
        { k: "Stage 05", title: "Migrate and launch", body: "Existing contacts and open opportunities brought across cleanly, with role-based training so each person learns the part they use." },
        { k: "Stage 06", title: "Support and refine", body: "Adjustments once it meets real use, plus the reporting layer that turns pipeline activity into decisions." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Off-the-shelf CRM, configured CRM, or ", em: "custom build?" },
        sub: "We implement all three, so the recommendation follows your process rather than our catalogue.",
      },
      columns: ["Approach", "Best when", "Strength", "The catch"],
      rows: [
        ["Off-the-shelf, as supplied", "Your sales process is fairly standard", "Fast to start, low cost, well supported", "Your team bends to the product, and adoption suffers if the fit is poor"],
        ["Configured and integrated", "You want a proven platform shaped to your workflow", "Familiar tool, your process, connected to your other systems", "Platform limits still apply, and licence costs grow with headcount"],
        ["Custom built", "Your process is a genuine competitive difference", "Fits exactly, you own it, no per-seat ceiling", "Higher up-front investment, and it needs a partner who stays"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "A CRM is where marketing becomes ", em: "measurable." },
      },
      steps: [
        { k: "Needs", title: "A website that captures properly", body: "Forms that post to an inbox lose the data trail. Capture has to be connected for anything downstream to work." },
        { k: "Closes the loop on", title: "Search, social and campaigns", body: "Once enquiries are tracked to source, you can finally see which visibility work produces revenue instead of guessing." },
        { k: "Feeds", title: "ERP and operations", body: "A won deal becomes a job. Connecting the CRM to operational systems stops the business re-entering the same information twice." },
        { k: "Feeds", title: "Dashboards and AI automation", body: "Clean pipeline data is what makes reporting meaningful and what gives automation something reliable to act on." },
      ],
      tail: {
        text: "CRM, Sales and Customer Systems is stage five of the KEYOB pathway, where generated demand stops leaking.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "CRM systems, ", em: "answered plainly." },
      },
      items: [
        { q: "What is a CRM and do we need one?", a: "A CRM is the single record of every lead, customer and opportunity, with the follow-up built in. You need one when enquiries are being handled from memory or spreadsheets, when more than one person touches a deal, or when you cannot say what is in the pipeline right now." },
        { q: "Should we buy a CRM or build a custom one?", a: "Buy if your process is reasonably standard, because a configured platform is faster and cheaper. Build when your process is genuinely distinctive, when per-seat licensing becomes the dominant cost, or when the system needs to work the way your operations do rather than the reverse. We implement both and will tell you plainly which applies." },
        { q: "Can you integrate with the CRM we already use?", a: "Yes, and that is often the better option. Keeping a platform your team knows and connecting it properly to your website, campaigns and other systems usually delivers more value than a migration." },
        { q: "How long does a CRM implementation take?", a: "It depends on how many processes are in scope, how much data needs migrating, and how many integrations are involved. A focused single-pipeline setup is considerably quicker than a multi-team configuration with several connected systems." },
        { q: "Why do CRM projects fail?", a: "Almost always adoption rather than technology. If the system is slower than the spreadsheet it replaces, asks for fields nobody values, or was configured around a process that does not exist, people quietly stop using it. We design against that specifically." },
        { q: "Can the CRM connect to our website and accounting system?", a: "Yes. Website forms, landing pages, email, campaign tools, accounting and ERP can all feed the same record. The point of the work is that the customer picture is complete rather than spread across systems." },
        { q: "Do you provide training and support?", a: "Yes, role-based training so each person learns the part of the system they use, plus support afterwards as real use surfaces adjustments." },
      ],
    },
    closing: {
      h2: { pre: "Getting leads but ", em: "losing track of them?" },
      body: "That is usually the cheapest problem in your business to fix and the most expensive one to leave alone.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "CRM Development and Integration",
      "name": "CRM Development and Integration",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Custom CRM development, CRM implementation and integration of existing CRM platforms, including lead management, sales pipeline automation and CRM dashboards for Australian businesses.",
      "url": "/what-we-do/crm-development",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "CRM Development and Integration deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Custom CRM development"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "CRM setup and implementation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "CRM integration"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Lead management workflows"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Sales pipeline automation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "CRM dashboards"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "ai-automation",
    stage: "Stage 07 · AI Workflows & Intelligent Automation",
    crumb: "AI Automation",
    title: "AI Automation & Business Process Automation Australia",
    description: "AI automation and business process automation for Australian businesses. KEYOB finds where automation genuinely saves time, then builds it: workflow automation, document processing, AI assistants and reporting automation.",
    ogTitle: "AI Automation for Australian Businesses",
    ogDescription: "Not experiments. Automation applied where it measurably removes work.",
    headline: { pre: "The question is not whether to use AI. It is ", em: "where it pays." },
    intro: [
      "Plenty of businesses have tried AI and ended up with a few impressive demonstrations and no change to how the week actually runs. The technology was never the problem.",
      "KEYOB starts with your processes, finds the repetitive work that costs real hours, and automates the parts where the return is clear and the risk is manageable. Practical automation, measured in time returned.",
    ],
    cta: {
      primary: { label: "Book a free AI assessment", href: "/contact#contact" },
      secondary: { label: "Where does AI actually help?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs><linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#5EE0FF\"/><stop offset=\"1\" stop-color=\"#19C6E8\"/></linearGradient></defs> <text x=\"104\" y=\"34\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">A WEEK OF WORK</text> <g font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"rgba(255,255,255,.62)\"> <rect x=\"24\" y=\"52\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(255,255,255,.07)\" stroke=\"rgba(255,255,255,.2)\"/><text x=\"104\" y=\"69\" text-anchor=\"middle\">RE-KEYING DATA</text> <rect x=\"24\" y=\"88\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(255,255,255,.07)\" stroke=\"rgba(255,255,255,.2)\"/><text x=\"104\" y=\"105\" text-anchor=\"middle\">CHASING APPROVALS</text> <rect x=\"24\" y=\"124\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(255,255,255,.07)\" stroke=\"rgba(255,255,255,.2)\"/><text x=\"104\" y=\"141\" text-anchor=\"middle\">BUILDING REPORTS</text> <rect x=\"24\" y=\"160\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(255,255,255,.07)\" stroke=\"rgba(255,255,255,.2)\"/><text x=\"104\" y=\"177\" text-anchor=\"middle\">SORTING DOCUMENTS</text> <rect x=\"24\" y=\"196\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(25,198,232,.14)\" stroke=\"rgba(25,198,232,.5)\"/><text x=\"104\" y=\"213\" text-anchor=\"middle\" fill=\"#7fd8fb\">JUDGEMENT CALLS</text> <rect x=\"24\" y=\"232\" width=\"160\" height=\"26\" rx=\"6\" fill=\"rgba(25,198,232,.14)\" stroke=\"rgba(25,198,232,.5)\"/><text x=\"104\" y=\"249\" text-anchor=\"middle\" fill=\"#7fd8fb\">CLIENT RELATIONSHIPS</text> </g> <g class=\"travel\" stroke=\"url(#g1)\" stroke-width=\"1.3\" fill=\"none\"> <path d=\"M184 65 C 220 65 232 120 262 120\"/><path d=\"M184 101 C 220 101 238 120 262 120\"/> <path d=\"M184 137 C 220 137 240 120 262 120\"/><path d=\"M184 173 C 220 173 238 120 262 120\"/> </g> <rect x=\"262\" y=\"96\" width=\"112\" height=\"48\" rx=\"12\" fill=\"rgba(25,198,232,.14)\" stroke=\"#5EE0FF\" stroke-width=\"1.7\"/> <text x=\"318\" y=\"118\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"#fff\">AUTOMATED</text> <text x=\"318\" y=\"133\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"rgba(255,255,255,.6)\">RULE-BASED, REPETITIVE</text> <path d=\"M184 209 H262 M184 245 H262\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.2\" stroke-dasharray=\"4 5\" fill=\"none\"/> <rect x=\"262\" y=\"194\" width=\"112\" height=\"66\" rx=\"12\" fill=\"rgba(255,255,255,.05)\" stroke=\"rgba(255,255,255,.26)\" stroke-width=\"1.3\"/> <text x=\"318\" y=\"222\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9\" fill=\"rgba(255,255,255,.8)\">STAYS HUMAN</text> <text x=\"318\" y=\"238\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"rgba(255,255,255,.5)\">AND SHOULD</text> <text x=\"230\" y=\"306\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">TIME BACK FOR THE WORK THAT NEEDS A PERSON</text>",
    heroCaption: "FIND THE REPETITIVE WORK FIRST, AUTOMATE IT SECOND",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What is ", em: "AI automation", post: " for a business?" },
      },
      label: "Definition",
      body: [
        "AI automation is the use of software, including AI models, to carry out repetitive business processes that previously needed a person. In practice that means things like reading and sorting documents, extracting data from emails and invoices, drafting routine responses, generating reports, and moving information between systems that do not talk to each other.",
        "The useful distinction is between automation and judgement. Rule-based, repetitive, high-volume work is where automation pays quickly and safely. Work that needs context, relationships or accountability should stay with people, and a good automation project is clear about which is which.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "Most AI projects fail for ", em: "ordinary reasons." },
        sub: "Rarely because the technology did not work. Usually because of how the project was chosen.",
      },
      cards: [
        { n: "01", title: "It started with the tool", body: "Buying a capability and then hunting for a use case produces demonstrations rather than outcomes. Useful projects start with a process that visibly costs hours." },
        { n: "02", title: "The data was not ready", body: "Automation acts on information. If that information lives in inboxes, spreadsheets and people's heads, the first real work is connecting it, not modelling it." },
        { n: "03", title: "Nobody owned the change", body: "A process that changes without training, ownership or a fallback plan gets quietly abandoned, and the old method returns within a month." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs automation would pay for ", em: "itself quickly." },
        sub: "These are the patterns with the clearest return and the lowest risk.",
      },
      items: [
        "Someone copies the same data between two systems every week.",
        "Reports are assembled by hand from several sources every month.",
        "Invoices, forms or documents are read and re-typed by a person.",
        "Routine enquiries get the same answer written fresh each time.",
        "Approvals get chased by email until somebody responds.",
        "Your team spends the first hour of the day on admin before real work starts.",
        "Information exists but is too slow to retrieve to be useful in a conversation.",
        "Growth means hiring purely to keep up with the paperwork.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What we ", em: "build." },
        sub: "Each one chosen because it removes measurable work, not because it demonstrates well.",
      },
      cards: [
        { n: "01", title: "AI opportunity assessment", body: "A structured look at where automation would genuinely pay in your business, with the options ranked by return and risk. This is the free AI assessment." },
        { n: "02", title: "Workflow automation", body: "Multi-step processes that run without someone pushing them along: routing, approvals, notifications and status changes between systems." },
        { n: "03", title: "Document automation", body: "Reading, extracting and filing information from invoices, forms, contracts and emails, so data arrives in your systems without re-typing." },
        { n: "04", title: "AI assistants", body: "Internal assistants that answer questions from your own documented knowledge, and customer-facing assistants where the use case genuinely suits one." },
        { n: "05", title: "Knowledge and retrieval systems", body: "Making your own documentation, procedures and history searchable in plain language, so expertise is available rather than buried." },
        { n: "06", title: "Reporting automation", body: "Reports that build themselves from source systems on a schedule, instead of a person assembling the same spreadsheet every month." },
        { n: "07", title: "Customer communication automation", body: "Acknowledgements, updates, reminders and routine responses handled consistently, with a person involved where it matters." },
        { n: "08", title: "Integration between systems", body: "The connective work that makes automation possible: CRM, ERP, website, accounting and operational tools exchanging data reliably." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Start with the process, ", em: "not the technology." },
        sub: "The order matters. Most of the value in an automation programme is decided before anything is built.",
      },
      steps: [
        { k: "Stage 01", title: "Assess", body: "Map how work actually moves through the business and find the repetitive, rule-based, time-consuming tasks. Frequency times effort is where the return sits." },
        { k: "Stage 02", title: "Prioritise honestly", body: "Rank opportunities by value and risk. Some of the best early wins are unglamorous, and some popular AI ideas are not worth doing yet. We say so." },
        { k: "Stage 03", title: "Prepare the ground", body: "Connect and clean the data the automation will rely on. This is usually the least exciting stage and the one that decides whether anything works." },
        { k: "Stage 04", title: "Pilot one process", body: "Build a single workflow end to end, measure the time it returns, and confirm it holds up under real conditions before expanding." },
        { k: "Stage 05", title: "Deploy with a fallback", body: "Roll out with training, clear ownership and a defined manual path if something fails. Automation that cannot be overridden is a liability." },
        { k: "Stage 06", title: "Measure and extend", body: "Track the hours returned and errors avoided, then apply the same approach to the next process once the first is proven." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Automation, AI, and ", em: "agents." },
        sub: "Three terms used interchangeably in sales conversations, with quite different risk and cost profiles.",
      },
      columns: ["Approach", "What it handles", "Why choose it", "What to watch"],
      rows: [
        ["Rule-based automation", "Predictable steps with clear logic", "Cheapest, fastest, completely predictable", "Breaks when the process has genuine exceptions"],
        ["AI-assisted automation", "Unstructured input like documents, emails and text", "Handles variation that rules cannot", "Needs review steps and clear accuracy expectations"],
        ["AI assistants and agents", "Open-ended tasks and question answering", "Flexible, useful for knowledge work", "Hardest to govern, so scope and oversight matter most"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "Automation needs ", em: "something to automate across." },
      },
      steps: [
        { k: "Needs", title: "Connected systems", body: "Automation moves information between systems. If those systems are isolated, integration is the real first project and we will tell you that early." },
        { k: "Needs", title: "CRM and operational data", body: "Reliable automation acts on reliable records. Clean pipeline and operations data is what makes the output trustworthy." },
        { k: "Feeds", title: "Dashboards and reporting", body: "Automated processes produce consistent data, which is what makes reporting meaningful rather than approximate." },
        { k: "Feeds", title: "Capacity", body: "The practical outcome is hours returned to the team, which usually shows up as growth handled without proportional hiring." },
      ],
      tail: {
        text: "AI Workflows and Intelligent Automation is stage seven of the KEYOB pathway, after the systems it depends on are connected.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "AI automation, ", em: "answered plainly." },
      },
      items: [
        { q: "What is the free AI assessment?", a: "A structured review of how work moves through your business, identifying where automation would genuinely save time and what it would take to implement. You get a prioritised view of the opportunities whether or not you go ahead with us." },
        { q: "Do we need to be a big business to use AI automation?", a: "No. Smaller businesses often see faster returns because a single automated process can give one person several hours back each week, and that is immediately noticeable. The deciding factor is whether repetitive, rule-based work exists, not headcount." },
        { q: "What should we automate first?", a: "Frequent, rule-based, time-consuming tasks, because they offer the clearest return at the lowest risk. Data entry between systems, document processing and recurring reports are usually the first candidates." },
        { q: "Is our data safe with AI tools?", a: "It depends entirely on the architecture, which is why we design it deliberately. That covers where data is processed and stored, what is sent to third-party models and what is not, access controls and retention. For sensitive information there are approaches that keep it inside your environment, and we will tell you which option your situation calls for." },
        { q: "Will automation replace our staff?", a: "That is not how these projects usually play out. The work that automates well is the repetitive admin people least want to do. The common outcome is that growth gets absorbed without proportional hiring, and that the team spends more time on work that needs judgement." },
        { q: "How do you measure whether automation worked?", a: "In hours returned, errors avoided, and turnaround time. We baseline before building so the comparison is real rather than anecdotal." },
        { q: "Can automation work with the systems we already use?", a: "Usually yes, through APIs and integration services. We prefer connecting what you already run over replacing it, because migration adds cost and risk that often is not necessary." },
      ],
    },
    closing: {
      h2: { pre: "Want AI, but not sure ", em: "where to start?" },
      body: "The free AI assessment answers exactly that question. You get a prioritised list of where automation would pay in your business, with no obligation attached.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Process Automation",
      "name": "AI Automation and Workflow Automation",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "AI opportunity assessment, workflow automation, document automation, AI assistants and reporting automation for Australian businesses, integrated with existing CRM, ERP and web systems.",
      "url": "/what-we-do/ai-automation",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Automation and Workflow Automation deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "AI opportunity assessment"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Workflow automation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Document automation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "AI assistants"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Reporting automation"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Knowledge and retrieval systems"
                        }
                  }
            ]
      }
    },
  },
  {
    slug: "business-intelligence-dashboards",
    stage: "Stage 08 · Business Intelligence & Decision Systems",
    crumb: "Business Intelligence & Dashboards",
    title: "Business Intelligence & Dashboard Development Australia | KPI Reporting",
    description: "Business intelligence and dashboard development for Australian businesses. KEYOB consolidates data from your CRM, ERP, finance and web systems into executive dashboards and KPI reporting you can act on.",
    ogTitle: "Business Intelligence & Dashboards",
    ogDescription: "Most businesses have the data. Few have it in one place, in time to act on it.",
    headline: { pre: "Every business has the numbers. Few have them ", em: "in time." },
    intro: [
      "The monthly report that arrives three weeks after month end is a history lesson. By the time it lands, the decisions it should have informed have already been made on instinct.",
      "KEYOB consolidates data from the systems you already run into dashboards that are current, trusted and specific enough to act on. Fewer numbers, better chosen, available when the decision is being made.",
    ],
    cta: {
      primary: { label: "Talk about your reporting", href: "/contact#contact" },
      secondary: { label: "What is business intelligence?", href: "#what" },
    },
    heroSvgViewBox: "0 0 460 340",
    heroSvg:
      "<defs><linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#5EE0FF\"/><stop offset=\"1\" stop-color=\"#7BB4FF\"/></linearGradient></defs> <g font-family=\"JetBrains Mono,monospace\" font-size=\"8.5\" fill=\"rgba(255,255,255,.7)\"> <text x=\"14\" y=\"52\">CRM</text><text x=\"14\" y=\"94\">ERP</text><text x=\"14\" y=\"136\">FINANCE</text> <text x=\"14\" y=\"178\">WEBSITE</text><text x=\"14\" y=\"220\">OPERATIONS</text><text x=\"14\" y=\"262\">SPREADSHEETS</text> </g> <g class=\"travel\" stroke=\"rgba(25,198,232,.42)\" stroke-width=\"1.2\" fill=\"none\"> <path d=\"M110 48 C 142 48 150 156 174 156\"/><path d=\"M110 90 C 142 90 154 156 174 156\"/> <path d=\"M110 132 C 142 132 160 156 174 156\"/><path d=\"M110 174 C 142 174 160 156 174 156\"/> <path d=\"M110 216 C 142 216 154 156 174 156\"/><path d=\"M110 258 C 142 258 150 156 174 156\"/> </g> <rect x=\"174\" y=\"128\" width=\"78\" height=\"56\" rx=\"12\" fill=\"rgba(37,99,217,.2)\" stroke=\"url(#g1)\" stroke-width=\"1.8\"/> <text x=\"213\" y=\"152\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8.5\" fill=\"#fff\">ONE DATA</text> <text x=\"213\" y=\"166\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8.5\" fill=\"#fff\">LAYER</text> <path class=\"travel\" d=\"M252 156 H286\" stroke=\"#7BB4FF\" stroke-width=\"1.6\" fill=\"none\"/> <rect x=\"286\" y=\"76\" width=\"158\" height=\"160\" rx=\"12\" fill=\"rgba(255,255,255,.05)\" stroke=\"rgba(123,180,255,.5)\" stroke-width=\"1.4\"/> <rect x=\"286\" y=\"76\" width=\"158\" height=\"22\" rx=\"12\" fill=\"rgba(123,180,255,.16)\"/> <text x=\"365\" y=\"91\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"8\" fill=\"#bcd4e4\">EXECUTIVE DASHBOARD</text> <g> <rect x=\"300\" y=\"112\" width=\"60\" height=\"30\" rx=\"6\" fill=\"rgba(123,180,255,.14)\"/> <text x=\"330\" y=\"132\" text-anchor=\"middle\" font-family=\"Fraunces,serif\" font-size=\"15\" fill=\"#fff\">&#9679;&#9679;&#9679;</text> <rect x=\"370\" y=\"112\" width=\"60\" height=\"30\" rx=\"6\" fill=\"rgba(123,180,255,.14)\"/> <text x=\"400\" y=\"132\" text-anchor=\"middle\" font-family=\"Fraunces,serif\" font-size=\"15\" fill=\"#fff\">&#9679;&#9679;&#9679;</text> </g> <polyline points=\"302,206 326,190 350,196 374,170 398,176 428,152\" fill=\"none\" stroke=\"#5EE0FF\" stroke-width=\"2\"/> <g fill=\"#5EE0FF\"><circle cx=\"326\" cy=\"190\" r=\"2.6\"/><circle cx=\"374\" cy=\"170\" r=\"2.6\"/><circle cx=\"428\" cy=\"152\" r=\"3\"/></g> <line x1=\"300\" y1=\"216\" x2=\"432\" y2=\"216\" stroke=\"rgba(255,255,255,.2)\"/> <text x=\"230\" y=\"310\" text-anchor=\"middle\" font-family=\"JetBrains Mono,monospace\" font-size=\"9.5\" fill=\"rgba(255,255,255,.5)\">ONE VERSION OF THE NUMBERS</text>",
    heroCaption: "MANY SOURCES, ONE TRUSTED VIEW, AVAILABLE IN TIME",
    definition: {
      head: {
        eyebrow: "The short answer",
        h2: { pre: "What is ", em: "business intelligence?" },
      },
      label: "Definition",
      body: [
        "Business intelligence is the practice of bringing data from the systems a business already runs into one consistent place, then presenting it so people can see what is happening and decide what to do. In practice that means consolidating CRM, ERP, finance, website and operational data, agreeing what each measure means, and building dashboards and reports on top of it.",
        "The hard part is rarely the chart. It is agreeing definitions, so that revenue means the same thing in two departments, and building the pipeline that keeps the numbers current without someone rebuilding a spreadsheet each month.",
      ],
    },
    why: {
      head: {
        eyebrow: "Why it matters",
        h2: { pre: "Decisions get made either way. The only question is ", em: "on what." },
        sub: "When data is slow or contested, businesses do not stop deciding. They decide on instinct and memory instead.",
      },
      cards: [
        { n: "01", title: "Late data means late reactions", body: "A problem visible in week one and reported in week six has had five weeks to compound. Most of the cost of poor reporting is delay." },
        { n: "02", title: "Conflicting numbers stall decisions", body: "When two reports disagree, meetings get spent reconciling figures rather than acting on them. Agreed definitions are worth more than better charts." },
        { n: "03", title: "Manual reporting is expensive and fragile", body: "Someone senior spends days each month assembling a report, and the method lives in their head. That is both a cost and a risk." },
      ],
    },
    signals: {
      head: {
        eyebrow: "How to tell",
        h2: { pre: "Signs your reporting has ", em: "stopped keeping up." },
        sub: "Common before a business invests in a proper data layer.",
      },
      items: [
        "The monthly report is assembled by hand from several exports.",
        "Two departments quote different numbers for the same measure.",
        "Leadership asks a simple question and waits days for the answer.",
        "Reporting depends on one person who knows where everything lives.",
        "You can see what happened, but not early enough to change it.",
        "Each system has its own dashboard and nothing joins them up.",
        "Nobody can state the current definition of a qualified lead.",
        "Decisions get framed as opinions because the evidence is contested.",
      ],
    },
    deliverables: {
      head: {
        eyebrow: "What you get",
        h2: { pre: "What we ", em: "build." },
        sub: "A data layer first, then dashboards worth looking at.",
      },
      cards: [
        { n: "01", title: "Data consolidation", body: "Bringing CRM, ERP, finance, website and operational data into one place on a reliable schedule, so reporting draws from a single source." },
        { n: "02", title: "Metric definitions", body: "Agreeing what each measure actually means and documenting it. Unglamorous, and the single biggest cause of reports people trust." },
        { n: "03", title: "Executive dashboards", body: "A small number of measures that tell leadership what is happening and what needs attention, without requiring interpretation." },
        { n: "04", title: "Operational dashboards", body: "Day-to-day views for the people doing the work: pipeline, workload, delivery status and exceptions that need action now." },
        { n: "05", title: "Sales and marketing analytics", body: "Pipeline value, conversion by stage, source performance and customer acquisition cost, joined up rather than reported separately." },
        { n: "06", title: "Financial visibility", body: "Revenue, margin, cash position and forecast drawn from source systems rather than rebuilt in spreadsheets each month." },
        { n: "07", title: "Automated reporting", body: "Scheduled reports that build and distribute themselves, removing the manual assembly that currently costs days." },
        { n: "08", title: "Alerting", body: "Notification when a measure crosses a threshold, so problems surface on their own rather than waiting for the next review." },
      ],
    },
    process: {
      head: {
        eyebrow: "How we work",
        h2: { pre: "Agree the questions, ", em: "then build the view." },
        sub: "Dashboards fail when they start with available data instead of with the decisions they are meant to support.",
      },
      steps: [
        { k: "Stage 01", title: "Define the decisions", body: "What choices does leadership actually make, and what would they need to see to make them earlier? That defines the measures, not the other way round." },
        { k: "Stage 02", title: "Audit the sources", body: "Where the data lives, how reliable it is, how often it updates, and what it would take to join it together. Realism here prevents disappointment later." },
        { k: "Stage 03", title: "Agree definitions", body: "Documented meaning for each measure, signed off across departments. This is what makes the numbers defensible in a meeting." },
        { k: "Stage 04", title: "Build the data layer", body: "Pipelines that consolidate and refresh the data on schedule, so the view is current without manual work." },
        { k: "Stage 05", title: "Design the dashboards", body: "Role-based views built for scanning and acting, with the small number of measures that matter rather than everything available." },
        { k: "Stage 06", title: "Review and refine", body: "Dashboards age as the business changes. We review which views get used, retire the ones that do not, and add what is missing." },
      ],
    },
    comparison: {
      head: {
        eyebrow: "Often confused",
        h2: { pre: "Reporting, dashboards and ", em: "analytics." },
        sub: "Three different jobs, and most businesses need the first two before the third is worth attempting.",
      },
      columns: ["Level", "The question", "Typical form", "What it needs"],
      rows: [
        ["Reporting", "What happened?", "Scheduled reports and summaries", "Consistent data and agreed definitions"],
        ["Dashboards", "What is happening now?", "Live role-based views", "A data layer that refreshes automatically"],
        ["Analytics", "Why is it happening, and what next?", "Analysis, segmentation, forecasting", "Enough clean history to find real patterns"],
      ],
    },
    connection: {
      head: {
        eyebrow: "How it connects",
        h2: { pre: "Dashboards are only as good as what ", em: "feeds them." },
      },
      steps: [
        { k: "Needs", title: "CRM and operational systems", body: "Reporting draws on records created elsewhere. If the pipeline data is incomplete, no dashboard can fix it." },
        { k: "Needs", title: "Integration", body: "The value comes from joining sources together. Separate dashboards in separate tools leave the same picture fragmented." },
        { k: "Feeds", title: "AI automation", body: "Consistent, well defined data is what makes automation and AI output trustworthy enough to act on." },
        { k: "Feeds", title: "Every other stage", body: "Visibility is how you find out whether the website, the search work, the CRM and the automation are actually producing results." },
      ],
      tail: {
        text: "Business Intelligence and Decision Systems is stage eight of the KEYOB pathway, where the whole operating layer becomes measurable.",
        link: { label: "See the full pathway", href: "/what-we-do" },
      },
    },
    faq: {
      head: {
        eyebrow: "Common questions",
        h2: { pre: "Business intelligence, ", em: "answered plainly." },
      },
      items: [
        { q: "What is the difference between a report and a dashboard?", a: "A report tells you what happened in a period and is usually produced on a schedule. A dashboard shows what is happening now and is designed for scanning and acting. Most businesses need reliable reporting before dashboards are worth building, because both depend on the same consolidated data." },
        { q: "Which dashboard tool do you use?", a: "We choose based on what you already run, where the data lives and who needs access. The tool matters far less than the data layer underneath it, and we will recommend the simpler option when it does the job." },
        { q: "Can you connect data from several different systems?", a: "Yes. Consolidating CRM, ERP, finance, website and operational data into one view is the core of this work. Joining those sources is usually where the real effort sits, and also where most of the value is." },
        { q: "How long does a dashboard project take?", a: "It depends on how many sources are involved and how clean the data is. A single-source dashboard is quick. A consolidated executive view across several systems takes longer, mostly in agreeing definitions and building reliable pipelines rather than in design." },
        { q: "Why do our two systems report different numbers?", a: "Nearly always because they define the measure differently, count at different moments, or include different records. The fix is agreeing and documenting definitions, which is a governance task rather than a technical one." },
        { q: "Do we need a data warehouse?", a: "Sometimes, and often not initially. Smaller businesses can get a long way with well built pipelines into a reporting layer. We recommend a warehouse when data volume, history or the number of sources genuinely justifies it, not by default." },
        { q: "Can dashboards update automatically?", a: "Yes. Scheduled refreshes mean the view is current without anyone assembling anything. Removing the manual monthly build is usually the first saving a business notices." },
      ],
    },
    closing: {
      h2: { pre: "Reporting after the fact, instead of ", em: "in time to act?" },
      body: "If assembling the monthly numbers costs days and the answers still arrive late, that is a fixable problem with a clear return.",
      primary: { label: "Start a conversation", href: "/contact#contact" },
      secondary: { label: "See the full pathway", href: "/what-we-do" },
    },
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Intelligence",
      "name": "Business Intelligence and Dashboard Development",
      "provider": {
            "@type": "Organization",
            "name": "KEYOB",
            "url": "https://www.keyob.com"
      },
      "areaServed": {
            "@type": "Country",
            "name": "Australia"
      },
      "description": "Dashboard development, KPI tracking, operational reporting and multi-platform data consolidation for Australian businesses, bringing CRM, ERP, finance and web data into one view.",
      "url": "/what-we-do/business-intelligence-dashboards",
      "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Business Intelligence and Dashboard Development deliverables",
            "itemListElement": [
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Executive dashboards"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "KPI tracking"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Operational reporting"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Sales analytics"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Financial visibility"
                        }
                  },
                  {
                        "@type": "Offer",
                        "itemOffered": {
                              "@type": "Service",
                              "name": "Data consolidation"
                        }
                  }
            ]
      }
    },
  },
];


export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
