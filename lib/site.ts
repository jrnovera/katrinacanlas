// All site copy lives here so it can be edited without touching layout code.

export const EMAIL = "kdcanlas@gmail.com";
// Opens a Gmail compose window addressed to her (new tab).
export const MAILTO = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
export const HIRE_MAILTO = `${MAILTO}&su=${encodeURIComponent("Project enquiry")}`;

export const site = {
  name: "Katrina D. Canlas",
  // Shown as the logo in the header.
  initials: "KC",
  role: "Content | Copy | Communications",
  description:
    "Content strategist and copywriter building SEO/AEO strategies, full-funnel editorial systems, and demand-gen assets for high-growth brands.",
};

export const nav: { label: string; href?: string; external?: boolean }[] = [
  { label: "Contact", href: MAILTO, external: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Story", href: "/#story" },
];

// Header links shown while on the portfolio page.
export const portfolioNav: typeof nav = [
  { label: "← Back to Home", href: "/" },
  { label: "Selected Work & Case Studies", href: "/portfolio#selected-work" },
  { label: "Contact", href: "/portfolio#contact" },
];

export const hero = {
  // `highlight` is rendered in electric green inside the headline.
  headlineBefore: "Where your customers trust AI to decide, I build the content strategy that makes you ",
  highlight: "the answer.",
  tagline: "Engineer turned storyteller. Data-obsessed. Narratives that move people to take action.",
  body: "I build full-funnel editorial systems, SEO/AEO strategies, and demand-gen assets that make high-growth brands discoverable and chosen.",
  cta: "Hire Me",
};

export type Result = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  secondary?: { value: number; prefix?: string; suffix: string; label: string };
  description: string;
};

export const results: Result[] = [
  {
    value: 2.5,
    decimals: 1,
    suffix: "x",
    label: "AI Visibility",
    description:
      "Built AEO content strategy boosting brand citation across ChatGPT, Perplexity, Claude, and Google AIO.",
  },
  {
    value: 179,
    prefix: "+",
    suffix: "%",
    label: "Leads",
    secondary: { value: 16, prefix: "+", suffix: "%", label: "Conversions" },
    description:
      "Aligned content messaging to capture high-intent buyers while increasing conversion rates.",
  },
  {
    value: 150,
    suffix: "+",
    label: "C-Suite Leads",
    description:
      "Authored research-backed industry reports that captured high-intent enterprise decision-makers.",
  },
  {
    value: 21.1,
    decimals: 1,
    prefix: "+",
    suffix: "%",
    label: "Share of Voice",
    description:
      "Scaled organic entity authority and topical coverage to secure dominant market share across target product terms.",
  },
];

export const skills = {
  groups: [
    {
      title: "Help Brands Show Up in AI Search",
      items: [
        {
          title: "Get AI to Recommend You",
          body: "I structure content so AI tools like ChatGPT, Perplexity, Claude, and Google AIO cite your brand when people ask for recommendations.",
        },
        {
          title: "Build Online Trust",
          body: "I position your product as a trusted source for high-intent search questions.",
        },
      ],
    },
    {
      title: "Tell Clear Product Stories",
      items: [
        {
          title: "Real Customer Case Studies",
          body: "I interview customers and write compelling stories about how your product solved their real-world problems.",
        },
        {
          title: "Product/Feature Launches",
          body: "I design clear landing pages and messaging strategies to launch new features and integrations smoothly.",
        },
      ],
    },
    {
      title: "Write High-Converting Content",
      items: [
        {
          title: "In-Depth Reports & Guides",
          body: "I research and write authoritative guides and industry reports that capture the attention of decision-makers.",
        },
        {
          title: "Better Ads & Landing Pages",
          body: "I write and A/B test ad copy and landing pages across Google, Meta, X, and LinkedIn to drive more leads at a lower cost.",
        },
      ],
    },
  ],
};

export const services = {
  intro:
    "Custom-built for what your brand needs. Hire me for a standalone sprint, a specific phase, or the complete end-to-end strategy.",
  steps: [
    {
      title: "Audit",
      body: "I review your current digital presence to see where you’re losing search traffic, AI recommendations, and buyers.",
    },
    {
      title: "Strategy",
      body: "I build a clear roadmap focused on the exact topics, channels, and messaging that reach your ideal customers.",
    },
    {
      title: "Execution",
      body: "I ship the content, covering punchy ads and landing pages to in-depth guides and real customer stories.",
    },
    {
      title: "Metrics",
      body: "I track what’s working, see where AI tools and buyers are taking notice, and refine everything to keep momentum going.",
    },
  ],
};

// Single-tone white logos (public/clients/mono) on matching 500×200 canvases, sized so every mark carries
// similar weight. The full-colour originals sit beside them in public/clients.
export const clients: { name: string; logo?: string }[] = [
  { name: "Stord", logo: "/clients/mono/stord.png" },
  { name: "Parcel Tracker", logo: "/clients/mono/parcel-tracker.png" },
  { name: "AquaTerra Digital", logo: "/clients/mono/aquaterra.png" },
  { name: "Profound Logic", logo: "/clients/mono/profound-logic.png" },
  { name: "ALF Lawn and Pest", logo: "/clients/mono/alf.png" },
  { name: "MRoofing", logo: "/clients/mono/mroofing.png" },
  { name: "Tri-County Heating and Air", logo: "/clients/mono/tri-county.png" },
  { name: "Texas Rainmakers", logo: "/clients/mono/texas-rainmakers.png" },
  { name: "Warweg & Co. Inc.", logo: "/clients/mono/warweg.png" },
  { name: "Stonebridge Lawn & Garden", logo: "/clients/mono/stonebridge.png" },
  { name: "KnowYourDNA", logo: "/clients/mono/knowyourdna.png" },
  { name: "Pure World", logo: "/clients/mono/pure-world.png" },
  { name: "IGotAnOffer", logo: "/clients/mono/igotanoffer.png" },
  { name: "Loox Reviews", logo: "/clients/mono/loox.png" },
  { name: "Twin Oaks Real Estate", logo: "/clients/mono/twin-oaks.png" },
];

export const story = {
  paragraphs: [
    "People usually don’t expect an engineer to write stories. But my approach to content isn’t built on creative intuition alone. It’s driven by systems, search data, and performance metrics.",
    "Before I write a single headline, I analyze everything under the hood: search intent behavior, generative AI retrieval models (AEO/GEO), citation loops, and conversion metrics. I treat every campaign like an optimization problem, cutting fluff, maximizing distribution efficiency, and building structured content that AI answer engines and DTC/B2B buyers both trust.",
    "Whether I'm scaling LLM brand visibility for tech platforms, building full-funnel editorial systems, or writing high-converting ad copy, my goal is to make your content do the heavy lifting so you become a visible and easy choice.",
  ],
};

export const contact = {
  body: "Have a project in mind, a search gap to fix, or an AEO strategy to build?",
  lead: "Drop me a line at:",
};

// ---------- Portfolio page ----------

export type WorkCategory = "AEO & Search Strategy" | "Demand Gen & Ads" | "Product Marketing";

export const workCategories: WorkCategory[] = ["AEO & Search Strategy", "Demand Gen & Ads", "Product Marketing"];

export type CaseStudy = {
  title: string;
  category: WorkCategory;
  clientFocus: string;
  services: string[];
  before: string;
  system: string[];
  // Headline numbers. `value` is the big figure, `label` names it, `body` explains it.
  metrics: { value: string; label: string; body: string }[];
  // Qualitative outcomes listed under the metrics.
  outcomes?: string[];
};

export const portfolio = {
  title: "Work & Strategy",
  intro: "Case studies, AI search visibility engines, demand-gen copy systems, and B2B growth frameworks.",
  // Phrases inside `intro` that the hero highlights in turn. Each must appear in `intro` exactly as written.
  introHighlights: [
    "Case studies",
    "AI search visibility engines",
    "demand-gen copy systems",
    "B2B growth frameworks",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Generative AI Search & Citation Architecture",
    category: "AEO & Search Strategy",
    clientFocus: "B2B SaaS",
    services: ["AEO Strategy", "Entity Definition", "Topical Clustering"],
    before:
      "The brand lacked citation coverage across emerging AI answer engines (ChatGPT Search, Claude, Google AI Overviews), resulting in missed high-intent buyer queries and low brand visibility.",
    system: [
      "Audited entity definitions, structured schemas, and topical authority clusters.",
      "Created core pillar guides for direct definition retrieval by LLM scrapers.",
      "Built content frameworks aligned with generative retrieval behaviors.",
    ],
    metrics: [
      {
        value: "2.5x",
        label: "AI Visibility",
        body: "More than doubled brand citation coverage across major LLMs and AI answer engines.",
      },
      {
        value: "+21.1%",
        label: "Share of Voice",
        body: "Secured dominant market share across target product and category terms.",
      },
    ],
  },
  {
    title: "High-Intent Demand Gen & Paid Campaign Funnels",
    category: "Demand Gen & Ads",
    clientFocus: "Fulfillment + Last-Mile Network and Logistics Tech",
    services: ["Paid Ads Copywriting", "Landing Page Optimization", "Funnel Strategy"],
    before:
      "Multi-channel ad campaigns and landing page messaging drove high CPL and conversion-stage drop-offs.",
    system: [
      "Re-aligned messaging across multi-channel ad copy (Google, Meta, LinkedIn, and emerging AI ad formats).",
      "Created landing page funnels to remove friction and target high-intent buyer pain points.",
    ],
    metrics: [
      {
        value: "+179%",
        label: "Lead Expansion",
        body: "Scaled qualified inbound lead generation while optimizing monthly ad spend.",
      },
      {
        value: "+16%",
        label: "Conversion Lift",
        body: "Improved landing page conversion efficiency through sharper positioning and clear value architecture.",
      },
    ],
  },
  {
    title: "Enterprise C-Suite Content & Research Reports",
    category: "Product Marketing",
    clientFocus: "3PL and Supply Chain Solutions",
    services: ["Primary Research Strategy", "Industry Report Copywriting", "B2B Thought Leadership"],
    before:
      "Enterprise decision-makers required deeper, research-backed authority assets to bridge the middle of the sales funnel.",
    system: [
      "Wrote comprehensive industry reports and data-driven insights.",
      "Designed modular content assets for cross-channel distribution across executive networks.",
    ],
    metrics: [
      {
        value: "150+",
        label: "C-Suite Leads",
        body: "Captured high-intent enterprise decision-makers through targeted research assets.",
      },
    ],
    outcomes: ["Shortened sales cycles by providing sales teams with high-trust enablement material."],
  },
  {
    title: "Organic Traffic & Authority Scaling",
    category: "AEO & Search Strategy",
    clientFocus: "Local Media",
    services: ["SEO Strategy", "Topical Authority Architecture"],
    before:
      "Organic search growth had plateaued due to fragmented content clusters and a lack of authoritative pillar assets.",
    system: [
      "Designed comprehensive topic cluster architectures and flagship authority guides.",
      "Applied rigorous data-driven keyword research and intent-matching frameworks.",
    ],
    metrics: [
      {
        value: "+715%",
        label: "Organic View Growth",
        body: "Scaled quarter-over-quarter views on flagship authority anchor guides.",
      },
    ],
    outcomes: ["Built a compounding organic traffic asset that continuously captures high-intent searchers."],
  },
];

// Live samples, grouped by format. Each card links straight to the published page.
export const selectedWork: { group: string; items: { name: string; url: string }[] }[] = [
  {
    group: "Website Content",
    items: [
      { name: "Stord OMS", url: "https://www.stord.com/order-management-system" },
      { name: "StordAI", url: "https://www.stord.com/ai" },
      { name: "Parcel Tracker", url: "https://www.parceltracker.com/comparisons" },
      { name: "KnowYourDNA", url: "https://knowyourdna.com/" },
    ],
  },
  {
    group: "Blogs",
    items: [
      { name: "Stord Stories", url: "https://www.stord.com/blog" },
      { name: "Parcel Tracker Posts", url: "https://www.parceltracker.com/articles" },
      { name: "Pure World", url: "https://pureworldshop.com/blogs/adventure-is-everywhere" },
      { name: "Stonebridge Lawn and Garden", url: "https://stonebridgelawn.com/blog/" },
      { name: "ALF Lawn & Pest Solutions", url: "https://alfga.com/blog/" },
    ],
  },
  {
    group: "Case Studies",
    items: [
      { name: "Stord Case Studies", url: "https://www.stord.com/casestudy" },
      { name: "Parcel Tracker Customers", url: "https://www.parceltracker.com/case-studies" },
    ],
  },
  {
    group: "Reports",
    items: [
      { name: "State of AI in E-Commerce", url: "https://www.stord.com/reports/state-of-ai-2026" },
      { name: "The Death of De Minimis", url: "https://www.stord.com/reports/de-minimis-guide" },
      { name: "BFCM Field Manual", url: "https://www.stord.com/reports/bfcm-guide-2025" },
      { name: "Q1 Mock Recall Report", url: "https://www.stord.com/reports/q1-2025-mock-recall-report" },
    ],
  },
];

export const portfolioContact = {
  body: "Ready to build content that gets found and chosen? Let’s connect.",
};

// Brands behind the live work above, scrolled in the marquee on the portfolio page.
export const workBrands = [
  "Stord",
  "Parcel Tracker",
  "KnowYourDNA",
  "Pure World",
  "Stonebridge Lawn and Garden",
  "ALF Lawn & Pest Solutions",
];
