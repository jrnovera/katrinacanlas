// All site copy lives here so it can be edited without touching layout code.

export const EMAIL = "kdcanlas@gmail.com";
// Opens a Gmail compose window addressed to her (new tab).
export const MAILTO = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
export const HIRE_MAILTO = `${MAILTO}&su=${encodeURIComponent("Project enquiry")}`;

export const site = {
  name: "Katrina D. Canlas",
  role: "Content | Copy | Communications",
  description:
    "Content strategist and copywriter building SEO/AEO strategies, full-funnel editorial systems, and demand-gen assets for high-growth brands.",
};

export const nav: { label: string; href?: string; external?: boolean }[] = [
  { label: "Contact", href: MAILTO, external: true },
  // No page yet: shown in the nav but not clickable. Add `href: "/portfolio"` once the page exists.
  { label: "Portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Story", href: "/#story" },
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
      title: "Measure",
      body: "I track what’s working, see where AI tools and buyers are taking notice, and refine everything to keep momentum going.",
    },
  ],
};

// PLACEHOLDERS — replace with real client names/logos and testimonials.
// To use a logo image, drop it in /public/clients and set `logo: "/clients/name.svg"`.
export const clients: { name: string; logo?: string }[] = [
  { name: "Client One" },
  { name: "Client Two" },
  { name: "Client Three" },
  { name: "Client Four" },
  { name: "Client Five" },
  { name: "Client Six" },
];

export const testimonials = [
  {
    category: "Category",
    quote: "Client testimonial goes here. A sentence or two on the results Katrina delivered and what it was like to work with her.",
    name: "Client Name",
    title: "Title, Company",
  },
  {
    category: "Category",
    quote: "Client testimonial goes here. A sentence or two on the results Katrina delivered and what it was like to work with her.",
    name: "Client Name",
    title: "Title, Company",
  },
  {
    category: "Category",
    quote: "Client testimonial goes here. A sentence or two on the results Katrina delivered and what it was like to work with her.",
    name: "Client Name",
    title: "Title, Company",
  },
];

export const story = {
  paragraphs: [
    "People usually don’t expect an engineer to write stories. But my approach to content isn’t built on creative intuition alone. It’s driven by systems, search data, and performance metrics.",
    "Before I write a single headline, I analyze everything under the hood: search intent behavior, generative AI retrieval models (AEO/GEO), citation loops, and conversion metrics. I treat every campaign like an optimization problem, cutting fluff, maximizing distribution efficiency, and building structured content that AI answer engines and DTC/B2B buyers both trust.",
    "Whether I'm scaling LLM brand visibility for tech platforms, building full-funnel editorial systems, or writing high-converting ad copy, my goal is to make your content do the heavy lifting so you become a visible and easy choice.",
  ],
  inputs: ["Search intent behavior", "AEO / GEO retrieval models", "Citation loops", "Conversion metrics"],
};

export const contact = {
  body: "Have a project in mind, a search gap to fix, or an AEO strategy to build?",
  lead: "Drop me a line at:",
};
