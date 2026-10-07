export const profile = {
  name: "Evan Camire",
  location: "Charleston, South Carolina",
  linkedin: "https://www.linkedin.com/in/evan-camire/",
  github: "https://github.com/Ecamire",
  instagram: "https://www.instagram.com/evan.camire/",
  email: "evancamireventures@gmail.com",
  source: "https://github.com/Ecamire/evan-camire-portfolio",
  headline: "I build AI for real work and real people.",
  introduction:
    "From the first client conversation to the shipped product, I turn messy business problems into software people can actually use.",
  philosophy:
    "The model is one part of the product. The real value is in the workflow around it.",
};

export type CaseStudy = {
  slug: string;
  kind: "marketing" | "pricing";
  name: string;
  title: string;
  description: string;
  industry: string;
  metric: string;
  metricContext: string;
  result: string;
  summary: string;
  problem: string[];
  before: string;
  after: string;
  decisions: { title: string; text: string }[];
  architecture: { name: string; description: string }[];
  validation: { title: string; text: string }[];
  lesson: string;
  technologies: string[];
  implementation: string[];
};

export const ownership = [
  "Client discovery",
  "Scoping & architecture",
  "Implementation",
  "Testing & evaluations",
  "Delivery",
];

export const cases: CaseStudy[] = [
  {
    slug: "marketing-workflow",
    kind: "marketing",
    name: "Trek Travel AI agent system",
    title: "An agent for newsletters, itineraries, and travel marketing.",
    description:
      "I built a travel operator’s marketing backend: business context, structured drafts, asset rendering, revisions, persistent work, and approval before delivery.",
    industry: "Travel & group experiences",
    metric: "30 min",
    metricContext: "saved per marketing asset",
    result:
      "Client-reported: approximately 30 minutes saved per marketing asset.",
    summary:
      "A travel-business owner needed a faster way to produce newsletters, itineraries, and marketing handouts. I designed and built a system that brings business context, drafting, revisions, consistent layouts, and human approvals into one workflow.",
    problem: [
      "The operator was spending time turning trip details into polished marketing materials. A useful asset needed the right audience, business voice, trip facts, imagery, and layout. A generated paragraph alone would still leave much of that work to the owner.",
      "Discovery shaped the approval model: the owner wanted to review what went out. The product needed to make creation easier while keeping that control explicit, including when work was revised or interrupted.",
    ],
    before:
      "Gather trip details, write the copy, assemble a layout, revise, and coordinate delivery by hand.",
    after:
      "Give the agent a short brief, review a structured draft, request changes, and approve the finished asset.",
    decisions: [
      {
        title: "Invest in the workflow",
        text: "I chose to spend more time on a custom backend: business context, stored artifacts, revisions, and delivery controls. That makes the product useful beyond any single model response. The tradeoff was more implementation work in exchange for a workflow the business could keep using.",
      },
      {
        title: "Let code own the layout",
        text: "The model produces structured content; application code renders the asset. This gives the owner consistent newsletter, itinerary, and handout layouts while still allowing the content to change.",
      },
      {
        title: "Make approval an actual control",
        text: "Approval and delivery are separate states. The application enforces the owner's approval rules before sending, rather than relying on a sentence in a prompt to keep an agent from acting.",
      },
      {
        title: "Keep work recoverable",
        text: "Conversation, work, and artifact records preserve what has been requested and produced. Recovery paths help interrupted work continue with its context instead of starting over.",
      },
    ],
    architecture: [
      {
        name: "Business context",
        description: "Audience, voice, trip facts, and approved rules",
      },
      {
        name: "Agent & tools",
        description: "Research, structured drafting, and revision requests",
      },
      {
        name: "Persistent work",
        description: "Conversation, work, and artifact records",
      },
      {
        name: "Asset rendering",
        description: "Application-controlled layouts and previews",
      },
      {
        name: "Human approval",
        description: "Review and hold before permitted delivery",
      },
    ],
    validation: [
      {
        title: "Workflow behavior",
        text: "Unit tests and evaluations cover drafting, approval gates, artifact state, and recovery behavior. These checks exercise the surrounding product, alongside the generated content.",
      },
      {
        title: "Output quality",
        text: "Structured content, deterministic rendering, and content checks help keep the facts and the final presentation consistent. A preview is part of the review workflow.",
      },
      {
        title: "Production visibility",
        text: "Error monitoring, model traces, and usage accounting help diagnose failed work and understand the quality and cost of model calls.",
      },
    ],
    lesson:
      "A strong AI product reduces the work before and after generation. The owner should be able to stay focused on the trip and the audience while the software carries the context, formatting, and workflow.",
    technologies: [
      "TypeScript",
      "LLM tool use",
      "Structured outputs",
      "Persistent state",
      "Email integrations",
      "Evaluations",
      "Sentry",
      "Langfuse",
    ],
    implementation: [
      "Structured content → rendered assets",
      "Conversation, work, and artifact records",
      "Signed approval links and delivery controls",
    ],
  },
  {
    slug: "pricing-workflow",
    kind: "pricing",
    name: "Revenue Radar AI Agent",
    title: "Automated morning pricing, with an agent you can ask why.",
    description:
      "I built a daily 5 a.m. Eastern pricing workflow: Hospitable and PriceLabs integrations, automated updates within configured limits, approval gates, reporting, and a conversational agent.",
    industry: "Vacation-rental operations",
    metric: "2 hours",
    metricContext: "saved each morning",
    result: "Client-reported: 2 hours saved each morning.",
    summary:
      "A vacation-rental operator was manually reviewing and overriding prices in PriceLabs each morning. I built an agent that runs at 5 a.m. Eastern, analyzes bookings and demand, and automatically applies eligible price changes within configured limits. Changes that need sign-off go to an approval queue; the operator can review reports or ask the agent about its decisions.",
    problem: [
      "The morning pricing routine required the operator to move between data sources, interpret what was happening, and manually override prices. The value of automation depended on respecting the operator's rules and keeping the reasons for a change visible.",
      "A model response suggesting a price would not finish that workflow. The product needed reliable data access, deterministic limits, an approval surface, a controlled write path, and a record of what changed.",
    ],
    before:
      "Review bookings and recommendations, interpret local demand, then manually override prices in PriceLabs.",
    after:
      "The 5 a.m. cycle handles eligible price updates automatically. Review the daily brief, approve exceptions, and ask the agent about changes.",
    decisions: [
      {
        title: "Build around the operator's business",
        text: "I invested in the integrations, pricing rules, stored history, and approval workflow. The extra backend work made the output actionable in the systems the operator already used.",
      },
      {
        title: "Keep pricing bounds deterministic",
        text: "The pricing engine calculates proposals within configured floors, ceilings, and move limits. LLM reasoning enriches the workflow without taking ownership of those hard constraints.",
      },
      {
        title: "Use one controlled write path",
        text: "The system reads bookings and calendars from Hospitable and sends eligible automatic updates and approved exceptions through one controlled PriceLabs write path. PriceLabs syncs the final prices back to the property-management system.",
      },
      {
        title: "Plan for model failures",
        text: "The model client uses bounded retries and a circuit breaker. Callers can fall back to deterministic logic when model calls fail, so the pricing cycle can continue with reduced judgment capability rather than losing the entire run.",
      },
    ],
    architecture: [
      {
        name: "Data & signals",
        description: "Calendar, booking pace, PriceLabs, and demand",
      },
      {
        name: "Pricing engine",
        description: "Rules, bounds, and explained proposals",
      },
      {
        name: "Operator review",
        description: "Automatic eligible updates; approval for exceptions",
      },
      {
        name: "Controlled write",
        description: "Automatic or approved overrides sent to PriceLabs",
      },
      {
        name: "Change history",
        description: "A record of the action and its rationale",
      },
    ],
    validation: [
      {
        title: "Data and constraints",
        text: "Tests cover adapter normalization, booking pace, pricing limits, and action behavior. Invalid or missing upstream data needs explicit handling before it reaches a recommendation.",
      },
      {
        title: "Failure behavior",
        text: "Model-client tests exercise transient failures and fallback behavior. Mock and dry-run paths support verification before live writes are enabled.",
      },
      {
        title: "Model economics",
        text: "Task-based model routing, prompt caching, and usage tracking make quality and cost tradeoffs visible. Cache usage is checked through recorded token metrics rather than assumed.",
      },
    ],
    lesson:
      "Decision support needs a clear chain from input to explanation to approved action. Trust comes from visible reasons, reliable constraints, and behavior that still makes sense when a dependency fails.",
    technologies: [
      "TypeScript",
      "Hospitable API",
      "PriceLabs API",
      "Pricing rules",
      "LLM orchestration",
      "Fault tolerance",
      "Prompt caching",
      "Langfuse",
    ],
    implementation: [
      "Hospitable booking and calendar data",
      "Deterministic pricing bounds and move limits",
      "Scheduled PriceLabs updates and change history",
    ],
  },
];

export const skills = [
  {
    title: "TypeScript & integrations",
    text: "Agent tools, Hospitable data reads, PriceLabs overrides, and email delivery controls.",
  },
  {
    title: "Persistent state & recovery",
    text: "Conversation, work, and artifact records that preserve context across interrupted tasks.",
  },
  {
    title: "Tests & evaluations",
    text: "Pricing bounds, adapter normalization, approval behavior, failure handling, and output checks.",
  },
  {
    title: "Production observability",
    text: "Sentry error monitoring, Langfuse model traces, token usage, and cache accounting.",
  },
];

export type Experience = {
  company: string;
  role: string;
  dates: string;
  status: "Current" | "Past";
  description: string;
  focus: string[];
  url?: string;
};
export const experiences: Experience[] = [
  {
    company: "Openhour",
    role: "Co-founder & CTO",
    dates: "July 2026–present",
    status: "Current",
    description:
      "I work directly with business owners to understand their operations, scope the product, and build custom AI workflows. I own the architecture and implementation, along with testing, evaluation, and delivery.",
    focus: [
      "Client discovery",
      "AI product development",
      "Managed infrastructure",
    ],
    url: "https://openhour.io/",
  },
  {
    company: "Maizon",
    role: "Business Development Representative · Part-time",
    dates: "September 2026–present",
    status: "Current",
    description: "I run top-of-funnel sales campaigns through cold calls, email, text, and consistent follow-up. After Maizon acquired Short & Sweet Properties, I brought my experience working directly with owners into business development.",
    focus: ["Prospecting", "Sales campaigns", "Owner relationships"],
    url: "https://maizon.co/",
  },
  {
    company: "VitalityIP",
    role: "AI Experience Engineer",
    dates: "March–October 2026",
    status: "Past",
    description:
      "At a health technology startup, I built the tokenized design system, supported retail grocer campaigns and CRM outreach, developed investor-facing materials, and contributed to the mobile app’s UI and UX.",
    focus: ["Design systems", "Partnership campaigns", "CRM workflows"],
    url: "https://vitalityip.ai/",
  },
  {
    company: "Short & Sweet Properties",
    role: "Founder & operator",
    dates: "January 2025–June 2026",
    status: "Past",
    description:
      "I built and operated a Charleston vacation-rental management business, handling owner relationships, sales, marketing, guest experience, and day-to-day operations. I sold the management business in 2026.",
    focus: ["Owner acquisition", "Rental operations", "Business handoff"],
    url: "https://www.shortandsweetproperties.com/",
  },
  {
    company: "Fringe Golf Co.",
    role: "Event operations & AI workflows",
    dates: "March–August 2026",
    status: "Past",
    description:
      "I led tournament event logistics and operations, and guided the use of AI workflows in brand strategy, design, and team collaboration.",
    focus: ["Event logistics", "Team collaboration", "Workflow design"],
    url: "https://fringegolfus.com/",
  },
];
export const biography = {
  title: "An entrepreneur at heart.",
  paragraphs: [
    "I’m an entrepreneur at heart. I like meeting people, figuring out what they’re working through, and finding a way to help. That’s what led me from running a vacation-rental business in Charleston to building AI products at Openhour.",
    "I’m a big believer in consistent, imperfect action. I’d rather get something into the real world, learn from it, and make it better than stay stuck planning to plan. Building matters to me, but so does following through with the people who trusted me to do it.",
    "Health and fitness are a big part of my life. Running, training, and spending time outside keep me grounded. I’m finishing my degree at the College of Charleston, and I enjoy being around motivated people who push each other to get better.",
  ],
  education: "B.S. Commercial Real Estate Finance, College of Charleston · Expected December 2026",
};
export const writing = {
  name: "Friday AI Brief",
  title: "What shipped. Why it matters. What to try.",
  description:
    "I built an AI agent that researches and writes a weekly AI newsletter for people building and running businesses. It turns new tools and releases into plain English, with practical ways to put them to work.",
  archive: "https://www.openhour.io/newsletter",
  source: "https://github.com/Ecamire/friday-ai-brief-agent",
};
export const socialLinks = [
  {
    label: "Email",
    detail: profile.email,
    href: `mailto:${profile.email}`,
    kind: "email",
  },
  {
    label: "LinkedIn",
    detail: "in/evan-camire",
    href: profile.linkedin,
    kind: "linkedin",
  },
  { label: "GitHub", detail: "Ecamire", href: profile.github, kind: "github" },
  {
    label: "Instagram",
    detail: "@evan.camire",
    href: profile.instagram,
    kind: "instagram",
  },
] as const;


export type ProductMedia = { src: string; alt: string; width: number; height: number };
export type TourStep = { id: string; title: string; description: string; media: ProductMedia };
export type TourVariant = { id: string; label: string; description: string; steps: TourStep[]; held: TourStep };
export type ProductVideoContent = { src: string; poster: string; captions: string; duration: string; chapters: {title: string; description: string}[] };
export type ProductTourContent = { title: string; preview: ProductMedia; video: ProductVideoContent; variants: TourVariant[] };
const productImage = (filename: string, alt: string): ProductMedia => ({src: `/images/products/${filename}.jpg`, alt, width: filename.startsWith("trek-") ? 1280 : 1100, height: filename.startsWith("trek-") ? 720 : filename === "radar-dashboard" ? 1417 : filename.startsWith("radar-") && filename.endsWith("-inputs") ? 915 : filename.startsWith("radar-") && filename !== "radar-dashboard-preview" ? 866 : 800});
const trekVariant = (id: string, label: string): TourVariant => {
  const media = (stage: string, alt: string) => productImage(`trek-${id}-${stage}`, `${label} · Trek Travel’s actual console with fictional sample data · ${alt}`);
  return {
    id, label, description: `Follow a sample ${label.toLowerCase()} through the Marketing agent’s saved conversation and review panel.`,
    steps: [
      {id: "request", title: "Start with the group’s brief", description: `The operator asks for a ${label.toLowerCase()} for a fictional three-day mountain weekend. The saved request carries the audience, dates, and trip requirements.`, media: media("request", "saved request")},
      {id: "draft", title: "A draft, saved with the conversation", description: "The asset card keeps the rendered draft connected to its request. Review draft opens the actual piece inside the console; it is not an automatically delivered output.", media: media("draft", "draft asset card")},
      {id: "revision", title: "Change the work without starting over", description: "The sample operator asks for warmer wording and more free time. The revised work stays in the same conversation, with earlier drafts available in the review panel.", media: media("revision", "revision request and updated draft")},
      {id: "review", title: "Review the rendered asset", description: "The actual review panel shows the asset, draft versions, and a field for further changes. Newsletter and print assets use their own rendering paths. The sample contact information is fictional.", media: media("review", "rendered asset and revision controls")},
      {id: "approved", title: "An explicit approval", description: "The captured sample records Demo operator’s approval. Approval is separate from delivery; this local sample environment sends nothing and has no client connection.", media: media("approved", "recorded sample approval")},
    ],
    held: {id: "held", title: "Hold it for more work", description: "The captured sample is held by Demo operator. The draft remains available for changes and no delivery is triggered. This is a recorded interface state, not an action on a client’s product.", media: media("held", "held sample asset")},
  };
};
const radarVariant = (id: string, label: string, explanation: string): TourVariant => {
  const media = (stage: string, alt: string) => productImage(`radar-${id}-${stage}`, `Revenue Radar’s actual dashboard with fictional sample data · ${label} · ${alt}`);
  return {
    id, label, description: explanation,
    steps: [
      {id: "dashboard", title: "See the operating picture", description: "The existing demo builder supplies fictional listings, bookings, signals, and reporting history to the original dashboard. These figures demonstrate the interface; they are not client performance results.", media: productImage("radar-dashboard", "Revenue Radar reporting dashboard · Fictional sample bookings and demand signals")},
      {id: "inputs", title: "Start with the booking inputs", description: "Listing pace makes occupancy, booking pace, and proposed changes visible. Harbor Cottage is a fictional listing used throughout this scenario.", media: media("inputs", "listing pace and occupancy inputs")},
      ...(id === "capped" ? [{id: "chat", title: "Ask why a recommendation was made", description: "In the original chat interface, the sample operator asks about the $360 cap. The fictional reply explains the ceiling and 20% move limit and identifies the sources consulted. The screenshot records a local fixture response, not a live model run.", media: productImage("pricing-chat-answer", "Revenue Radar chat · Sample price explanation with consulted sources")}]: []),
      {id: "recommendation", title: "Explain the move and its limits", description: explanation + " The proposal includes its rationale, minimum stay, status, and configured pricing limits.", media: media("recommendation", "explained recommendation within configured limits")},
      {id: "review", title: "Keep the operator in control", description: "The approval queue surfaces the nightly change and its reasoning alongside Approve and Deny. The operator can also defer a decision by leaving the proposal pending.", media: media("review", "operator approval queue")},
      {id: "approved", title: "Record the sample outcome", description: "The captured change history shows a fictional approved override and the approving operator. It illustrates the product’s audit trail. No PriceLabs write or external action occurred during capture.", media: media("approved", "fictional approved change history")},
    ],
    held: {id: "held", title: "Defer the decision", description: "The sample proposal remains pending in the approval queue. Revenue Radar’s native controls are Approve and Deny; holding here means leaving the decision for later, without authorizing a price change.", media: media("held", "proposal left pending for later review")},
  };
};
export const productTours: Record<CaseStudy["kind"], ProductTourContent> = {
  marketing: {
    title: "Trek Travel AI agent system",
    preview: {src: "/images/products/trek-output-preview.jpg", alt: "A photo-led sample newsletter rendered by Trek Travel’s actual marketing system", width: 720, height: 900},
    video: {src: "/videos/trek-walkthrough.mp4?v=current-design", poster: "/videos/trek-poster.jpg?v=current-design", captions: "/videos/trek-walkthrough.vtt?v=current-design", duration: "48 sec", chapters: [
      {title:"See the finished newsletter",description:"The current Trek canvas design engine renders a photo-led newsletter from structured sample content."},
      {title:"Give the agent a brief",description:"The sample operator specifies the group, dates, transport, and activities in Trek’s actual console."},
      {title:"Open the saved draft",description:"The asset is linked to the conversation and waits for review."},
      {title:"Read the trip details",description:"The rendered asset includes the trip description, dates, and a clear next step for the group leader."},
      {title:"Reuse the workflow for print",description:"The same product also renders a day-by-day itinerary and a two-sided handout through its current canvas renderers."},
      {title:"Ask for a revision",description:"Warmer wording and more free time are requested in the same saved conversation."},
      {title:"Review before approving",description:"The original review panel shows draft versions, further revision controls, and approval."},
      {title:"Record an approval or hold",description:"Captured sample outcomes show approval or hold. No content is sent from this sample environment."},
    ]},
    variants: [trekVariant("newsletter", "Newsletter"), trekVariant("itinerary", "Itinerary"), trekVariant("handout", "Handout")],
  },
  pricing: {
    title: "Revenue Radar AI Agent",
    preview: productImage("radar-dashboard-preview", "Revenue Radar’s actual reporting dashboard · Sample data"),
    video: {src: "/videos/radar-walkthrough.mp4?v=chat", poster: "/videos/radar-poster.jpg?v=chat", captions: "/videos/radar-walkthrough.vtt?v=chat", duration: "43 sec", chapters: [
      {title:"Start with the operating picture",description:"Revenue Radar’s original demo dashboard shows sample bookings and reporting history."},
      {title:"Ask the agent",description:"The operator asks why the sample recommendation is capped at $360."},
      {title:"Get a grounded explanation",description:"The chat explains the ceiling and move limit and lists the pricing decision, listing pace, and PriceLabs settings it consulted. The captured reply is fictional sample content."},
      {title:"Keep the conversation going",description:"A follow-up question explores slower booking pace before an operator decides whether to approve."},
      {title:"Check booking pace",description:"Listing pace surfaces occupancy, booking pace, and proposed changes for a fictional listing."},
      {title:"Explain the move and cap it",description:"Sample demand suggests $420; the configured $360 ceiling caps the proposal at +20% from $300."},
      {title:"Let the operator decide",description:"The approval queue shows the price change and rationale alongside Approve and Deny."},
      {title:"Record the outcome",description:"The sample change log records the approved move and operator. No external price is changed."},
      {title:"Leave a proposal pending",description:"Holding a decision leaves the proposal pending without authorizing a price change."},
    ]},
    variants: [
      radarVariant("normal", "Normal demand", "Ahead-of-year booking pace supports a sample $300 → $324 recommendation (+8%), within the $240–$360 range and 20% move limit."),
      radarVariant("capped", "Capped demand", "A sample event suggests $420, but the configured $360 ceiling caps the proposal at $360 (+20%)."),
      radarVariant("slow", "Slower bookings", "Below-year booking pace supports a sample $300 → $276 recommendation (−8%), while respecting the $240 floor and 20% move limit."),
    ],
  },
};

export type WorkGalleryContent = {
  title: string;
  summary: string;
  initialIndex: number;
  phases: { label: string; description: string; media: ProductMedia }[];
};

export const workGalleries: Record<CaseStudy["kind"], WorkGalleryContent> = {
  marketing: {
    title: "Trek Travel AI agent system",
    summary: "A TypeScript agent system that combines Claude, image generation, asset rendering, a persistent library, and approval-gated MailerLite delivery.",
    initialIndex: 1,
    phases: [
      { label: "Chat", description: "A short request becomes a newsletter draft, with missing trip details flagged for review.", media: {src: "/images/products/trek-agent-chat.jpg", alt: "Trek Travel agent conversation creating a fall trips newsletter", width: 2492, height: 1488} },
      { label: "Library", description: "Newsletters, flyers, and itineraries stay together in a searchable library, ready to reopen and reuse.", media: {src: "/images/products/trek-agent-library.jpg", alt: "Trek Travel library showing newsletters, flyers, itineraries, and contact lists", width: 2486, height: 1496} },
    ],
  },
  pricing: {
    title: "Revenue Radar AI Agent",
    summary: "A custom TypeScript pricing engine connects Hospitable and PriceLabs, updates eligible rates at 5 a.m. Eastern, and explains decisions through AI chat.",
    initialIndex: 0,
    phases: [
      { label: "Reports", description: "Weekly and monthly reports connect pricing activity with booked nights, revenue, and average nightly rates.", media: {src: "/images/products/revenue-radar-reports.jpg", alt: "Revenue Radar weekly report showing booked nights, pricing activity, and booking history", width: 2470, height: 1482} },
      { label: "Chat", description: "The operator can ask about pricing decisions, booking performance, and the demand behind each morning’s changes.", media: {src: "/images/products/revenue-radar-chat.jpg", alt: "Revenue Radar agent chat with a summary of recent bookings and price adjustments", width: 2468, height: 1502} },
    ],
  },
};

export const trekDemoUrl = "https://demo.trektravelhq.com/";
export const trekSamples = [
 {kind:"newsletter",label:"Newsletter",title:"Christmas Lights Await",description:"The actual agent-created newsletter: an opening letter, upcoming trips, generated posters, and supporting stories for senior groups.",request:"Saved from the product library: Christmas Lights Await: Branson & Biltmore.",src:"/samples/trek/newsletter"},
 {kind:"itinerary",label:"Trip letter",title:"Jersey Boys: final trip details",description:"The actual traveler-information graphic, bringing the date, departure point, return time, and final instructions into one designed piece.",request:"Saved from the product library: Jersey Boys, Play Day at the Saenger Theatre.",src:"/samples/trek/itinerary"},
 {kind:"handout",label:"Flyer",title:"Fall Foliage Tour",description:"The actual agent-created flyer, combining generated travel imagery, a bold headline, and a clear invitation for the group leader.",request:"Saved from the product library: Fall Foliage Tour.",src:"/samples/trek/handout"}
] as const;

export const radarDemoUrl = "https://revenue-radar-portfolio-demo.vercel.app/";

export type CaseBrief = {
  introduction: string;
  problemTitle: string;
  why: string;
  stack: {label: string; tools: string; purpose: string}[];
  build: {title: string; text: string}[];
  valueTitle: string;
  value: string;
  details: {title: string; text: string}[];
};
export const caseBriefs: Record<CaseStudy["kind"], CaseBrief> = {
  marketing: {
    introduction: "I built a Node.js and TypeScript system that uses Claude to turn a travel operator’s requests into newsletters, itineraries, handouts, and researched sales contacts, with a shared library and owner approval before anything is sent.",
    problemTitle: "Bring creation, revision, and delivery into one workflow.",
    why: "The owner was writing copy, finding images, formatting materials, and coordinating delivery by hand, so I built a workflow that carries his request from the first draft through revisions and approval to a finished, reusable asset.",
    stack: [
      {label: "Runtime & agents", tools: "Node.js · TypeScript · Anthropic SDK · Claude Agent SDK", purpose: "The Node server runs the console, while Anthropic’s libraries connect Claude to marketing generation and sales research tools."},
      {label: "External APIs", tools: "OpenAI Images · MailerLite REST · Firecrawl v2", purpose: "These APIs generate artwork, prepare email campaigns for review, and research public websites."},
      {label: "Rendering & storage", tools: "Puppeteer / Chromium · Sharp · Railway · Supabase", purpose: "Browser and image tools produce the finished assets, Railway stores the work logs, and Supabase keeps a copy of decision records."},
      {label: "Validation & monitoring", tools: "Zod · Vitest · Langfuse · Sentry", purpose: "These tools check data and workflow behavior, track model calls and cost, and report failures."},
    ],
    build: [
      {title: "Give the agents the business context", text: "I combine trip information, audience preferences, and the company’s voice with its campaign schedule, current drafts, and saved client feedback, so Claude works from the business’s actual context rather than a generic prompt."},
      {title: "Turn generated content into usable assets", text: "Zod checks that Claude returns the fields the application needs, then TypeScript templates, OpenAI artwork, Sharp, and Puppeteer produce the finished designs. I save requests, revisions, and outputs in append-only JSONL logs so work survives a server restart."},
      {title: "Build the client’s approval rules into code", text: "Discovery established that the owner wanted to review every send, so I made recorded approval, recipient exclusions, unsubscribe checks, and sending limits requirements in the delivery code. MailerLite holds the prepared campaign for review before it can be sent."},
      {title: "Make feedback improve the next output", text: "I save client corrections for future drafts and turn the ones code can check into regression tests, which catch the same mistake before it reaches the owner again. Vitest also tests rendering, recovery, and approval behavior, while Langfuse and Sentry help diagnose cost and failures."},
    ],
    valueTitle: "From brief to reusable, approved assets.",
    value: "The owner can use a few prompts to create designed materials, revise them, and approve delivery in the same place, which reduces the time spent writing, formatting, and coordinating each asset.",
    details: [
      {title: "How the sales agent researches contacts", text: "I use the Claude Agent SDK with an MCP server, which gives the agent a defined set of research and contact-list tools. Firecrawl reads public sources, and the code checks contact rows against the pages they cite while enforcing time and spending budgets and allowing only one research job per conversation at a time."},
      {title: "Why I built a separate backend", text: "The application stores the work, controls the layout, and decides whether delivery is allowed, while the model handles generation and reasoning. That keeps the workflow independent of a single model response, although changing providers still requires integration changes and validation rather than simply replacing an API key."},
    ],
  },
  pricing: {
    introduction: "I built a TypeScript system that uses Hospitable booking data and PriceLabs recommendations to update eligible nightly rates every morning at 5 AM Eastern, with Claude-powered chat that explains the changes and lets the operator request confirmed adjustments.",
    problemTitle: "Automate nightly pricing within operator-defined rules.",
    why: "The operator reported spending two hours each morning reviewing bookings and overriding PriceLabs prices, so I used his intake, property strategy, and ongoing feedback to define which decisions the system could make automatically and which needed his review.",
    stack: [
      {label: "Runtime & reasoning", tools: "Node.js · TypeScript · Anthropic SDK", purpose: "Node runs the pricing engine and dashboard, while Claude uses defined tools to look up data and prepare operator changes."},
      {label: "Operational APIs", tools: "Hospitable v2 · PriceLabs v1 · monday.com GraphQL", purpose: "These connect bookings and calendars, pricing recommendations and updates, and the operator’s briefs and approval workflows."},
      {label: "Storage & deployment", tools: "Railway · JSONL · Supabase PostgREST", purpose: "Railway stores run and change logs, while Supabase stores operator memory and copies of decision data through its REST API."},
      {label: "Validation & monitoring", tools: "Zod · Vitest · Langfuse · Sentry · OpenTelemetry", purpose: "These check configuration and pricing behavior, trace model calls, track usage, and make failures visible."},
    ],
    build: [
      {title: "Connect and reconcile the operating data", text: "I wrote API adapters that bring Hospitable bookings and calendar rates together with PriceLabs recommendations, market data, and price limits. The code distinguishes the recommended rate from a manual override so each calculation starts from the right baseline."},
      {title: "Calculate a target for each available night", text: "My TypeScript pricing engine adjusts the recommended rate using booking pace, when guests typically book, local demand, time until check-in, and weekend rules. Starting from an independent recommendation prevents the same daily adjustment from repeatedly multiplying yesterday’s price."},
      {title: "Enforce the operator’s pricing limits", text: "I turned the intake into minimum and maximum rates, limits on individual changes, exclusions, and approval thresholds, with Zod checking the configuration. The code rechecks current limits before writing overrides to PriceLabs, which syncs them to the property system, and blocks automatic writes when required limits are missing."},
      {title: "Let the operator question and adjust decisions", text: "Claude’s chat tools use recorded runs, pricing reasons, and the same saved operator guidance as the morning cycle, so its answers have a concrete source. A requested price change needs a preview and confirmation in a later message before the code can apply it."},
    ],
    valueTitle: "Automatic morning pricing that the operator can explain.",
    value: "Eligible rates update before the operator starts his day, and he can review exceptions or ask why a rate changed because the system records its inputs, limits, and whether each update succeeded.",
    details: [
      {title: "How I test changes before live pricing", text: "Vitest tests cover differences between API data formats, pricing calculations, limits, approvals, chat confirmation, and failed updates. Dry-run mode and an explicit list of permitted properties let me evaluate changes before enabling real writes, while Langfuse, OpenTelemetry, and Sentry help trace calls and failures."},
      {title: "Where AI ends and the pricing code takes over", text: "AI helps research demand and explain decisions, but the TypeScript engine calculates rates and enforces the operator’s limits before anything reaches PriceLabs. Chat shares the same playbook and saved guidance, and uploaded files can inform its reasoning without directly changing a computed price or the property’s minimum-stay rules."},
    ],
  },
};
