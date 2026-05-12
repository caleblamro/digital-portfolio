export type ProjectStatus = "live" | "in-development" | "shipped" | "archived";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  role: string;
  status: ProjectStatus;
  year: string;
  org: "Triforce" | "Veritas" | "Personal" | "ASU";
  featured?: boolean;
  href?: string;
  repo?: string;
  stack: string[];
  highlights: { label: string; value: string }[];
  features: string[];
  badge: string;
};

export const projects: Project[] = [
  {
    slug: "doorline",
    title: "Doorline",
    tagline: "The investor's terminal for US residential rentals",
    description:
      "AI-powered underwriting, deal-finding, and a metered public API for real-estate investors — a full Next.js product with live data, deterministic metrics, and Claude-written investment memos.",
    longDescription: [
      "Doorline is a full-stack Next.js application that ingests live property data, runs a deterministic investment-metrics engine, layers an AI memo on top, and exposes the same pipeline to paying customers via a metered REST API.",
      "Type an address and get cap rate, cash-on-cash, DSCR, a 30-year wealth projection, equity buildup, rent vs. sell comparison, comparable rents and sales, and a Claude-written investment memo with risks and opportunities. The deal finder lets you browse live for-sale listings filtered by city, zip, price, and beds, mapped on Mapbox with clustering.",
      "An embedded AI assistant can run read-only SQL against the user's own data, fetch live property/market data, and emit chart specs that the UI renders inline. Tool outputs accumulate on a 'Live canvas' the user can save as a report.",
      "The same pipeline is exposed via a public API metered through Stripe, with per-plan rate limits and a `/developer` console for key management, usage charts, and plan upgrades.",
    ],
    role: "Sole founder & engineer",
    status: "live",
    year: "2025",
    org: "Triforce",
    featured: true,
    href: "https://doorline.triforce-software.com",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind 4",
      "PostgreSQL",
      "Drizzle ORM",
      "Better-Auth",
      "Claude (Anthropic)",
      "Mapbox GL",
      "Stripe",
      "Resend",
      "Sentry",
      "Dokploy",
    ],
    highlights: [
      { label: "Pipeline", value: "Address → memo in <8s" },
      { label: "Coverage", value: "All 50 US states" },
      { label: "API surface", value: "5 metered endpoints" },
    ],
    features: [
      "Deterministic investment-metrics engine (cap rate, DSCR, 30-yr projection)",
      "Claude-written investment memos with risks & opportunities",
      "Live deal finder with Mapbox clustering",
      "AI assistant with read-only SQL and tool-driven 'Live canvas'",
      "Metered REST API with Stripe billing meter",
      "Better-Auth (email + GitHub + Google) and Sentry observability",
    ],
    badge: "DL",
  },
  {
    slug: "forge",
    title: "Forge",
    tagline: "Build apps with AI — Triforce's flagship product",
    description:
      "A platform that lets non-developers describe an app in plain English and watch it get built, deployed, and iterated on by AI agents.",
    longDescription: [
      "Forge is Triforce Software's flagship product — a build-with-AI platform that compresses the time from idea to shipped app from weeks to minutes. Users describe what they want and an orchestrated set of Claude agents scaffold the app, wire up auth and a database, ship UI, and deploy.",
      "The product is structured as a monorepo with a Next.js web app, a shared component system, and an agent runtime. Forge handles persistence, multi-user collaboration, and one-click preview deployments.",
    ],
    role: "Founder, lead engineer",
    status: "live",
    year: "2025",
    org: "Triforce",
    featured: true,
    href: "https://forge.triforce-software.com",
    stack: [
      "Next.js",
      "React 19",
      "pnpm workspaces",
      "Claude (Anthropic)",
      "PostgreSQL",
      "Docker",
      "Dokploy",
    ],
    highlights: [
      { label: "Architecture", value: "Monorepo + agent runtime" },
      { label: "Deploys", value: "One-click preview" },
      { label: "Target", value: "Non-developers" },
    ],
    features: [
      "Natural-language → working app pipeline",
      "Orchestrated agent runtime built on Claude",
      "One-click preview deployments per build",
      "Shared component system across all generated apps",
      "Versioned project history with rollback",
    ],
    badge: "FG",
  },
  {
    slug: "treemap",
    title: "Treemap",
    tagline: "Beautiful macOS filesystem visualizer",
    description:
      "A native-feeling macOS app that scans your disk and renders a gorgeous, animated treemap so you can find the gigabytes eating your SSD.",
    longDescription: [
      "Treemap is a desktop app for macOS that scans your filesystem and renders it as an interactive, animated treemap. Hover any rectangle to see its size, click to drill in, and watch the layout retile as you zoom — built with Electron, Vite, and a hand-tuned canvas renderer.",
      "Treemap is shipped as a notarized DMG and the marketing site handles Stripe checkout and license-key delivery, all served from a Next.js storefront.",
    ],
    role: "Sole founder & engineer",
    status: "live",
    year: "2025",
    org: "Triforce",
    featured: true,
    href: "https://treemap.triforce-software.com",
    stack: [
      "Electron",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js (marketing)",
      "Stripe",
    ],
    highlights: [
      { label: "Platform", value: "macOS (DMG)" },
      { label: "Rendering", value: "Custom canvas treemap" },
      { label: "Distribution", value: "Stripe + license keys" },
    ],
    features: [
      "Native-feeling macOS app with notarized DMG distribution",
      "Animated treemap layout with drill-in zoom",
      "Marketing site with Stripe checkout and license delivery",
      "Streaming disk scan with cancellable scans",
    ],
    badge: "TM",
  },
  {
    slug: "triforce-software",
    title: "Triforce Software",
    tagline: "Custom software studio website",
    description:
      "The marketing site, blog, and lead funnel for Triforce Software — a modern, SEO-optimized Next.js site with a custom design system and editorial blog.",
    longDescription: [
      "Triforce Software is the company I founded to build modern, scalable software for businesses that need more than an off-the-shelf SaaS. The marketing site is a Next.js 16 app using @base-ui/react and a custom design system, with blog, careers, services, and contact funnels.",
    ],
    role: "Founder",
    status: "live",
    year: "2025",
    org: "Triforce",
    featured: true,
    href: "https://triforce-software.com",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "@base-ui/react",
      "Framer Motion",
      "Vercel",
    ],
    highlights: [
      { label: "Goal", value: "Lead generation" },
      { label: "Surface", value: "Marketing + blog + careers" },
    ],
    features: [
      "Editorial blog with MDX content pipeline",
      "Service, careers, and contact funnels",
      "SEO-optimized with Open Graph and sitemap",
      "Custom typography and motion design",
    ],
    badge: "TF",
  },
  {
    slug: "online-provisioning-forms",
    title: "Online Provisioning Forms",
    tagline: "Internal form builder at Veritas Technologies",
    description:
      "An internal provisioning form builder for the Enterprise Applications team at Veritas, setting the stage for multiple major process transformations.",
    longDescription: [
      "Working closely with the Enterprise Applications team at Veritas Technologies, I built an internal provisioning form builder used to set the stage for multiple major process transformations across the company.",
    ],
    role: "Software engineer",
    status: "shipped",
    year: "2022",
    org: "Veritas",
    stack: ["Java", "ReactJS", "SQL"],
    highlights: [{ label: "Status", value: "Proprietary, in production" }],
    features: [
      "Visual form builder with conditional logic",
      "Approval routing with role-based assignment",
      "Backend integration into Veritas process systems",
    ],
    badge: "OPF",
  },
  {
    slug: "gtm-dashboard",
    title: "GTM Dashboard",
    tagline: "Global Trade Compliance order management",
    description:
      "Replaced a legacy Java applet for managing orders being checked for global trade compliance, reducing latency and adding features that made order management materially more efficient.",
    longDescription: [
      "For my first internship with Veritas, I transformed an existing Java applet used to manage orders being checked for global trade compliance. The replacement decreased latency and added features that made managing these orders much more efficient for the operations team.",
    ],
    role: "Software engineering intern",
    status: "shipped",
    year: "2021",
    org: "Veritas",
    stack: ["Java", "ReactJS", "SQL"],
    highlights: [{ label: "Status", value: "Proprietary, in production" }],
    features: [
      "Replaced legacy applet with modern React UI",
      "Decreased order latency",
      "Improved compliance-check workflow",
    ],
    badge: "GTM",
  },
  {
    slug: "train-gpt",
    title: "Train GPT",
    tagline: "RAG over unstructured files",
    description:
      "An open-source RAG application that translates unstructured files into GPT vector embeddings and performs similarity search to optimize the context handed to the LLM.",
    longDescription: [
      "Train GPT is a personal project built on top of OpenAI and open-source vector stores. It translates unstructured files (PDFs, docs, transcripts) into vector embeddings, runs a similarity search at query time, and uses the top-k context to ground a generated response.",
    ],
    role: "Personal project",
    status: "shipped",
    year: "2023",
    org: "Personal",
    repo: "https://github.com/caleblamro/traingpt",
    stack: ["ReactJS", "TypeScript", "SQL", "OpenAI", "Pinecone"],
    highlights: [{ label: "Pattern", value: "Retrieval-augmented generation" }],
    features: [
      "File ingestion pipeline → embeddings",
      "Similarity search over Pinecone",
      "Context-grounded LLM responses",
    ],
    badge: "TG",
  },
  {
    slug: "effort-logger",
    title: "AGILE Effort Logger",
    tagline: "AGILE management application — CSE 360",
    description:
      "A team project for CSE 360 at ASU: an AGILE management application designed and built end-to-end with a five-person team against formal stakeholder requirements.",
    longDescription: [
      "Studying the AGILE methodology during my CSE 360 course at ASU, my team of five was tasked with developing an application that met stakeholder requirements outlined in formal proposal documents.",
    ],
    role: "Team member",
    status: "shipped",
    year: "2023",
    org: "ASU",
    repo: "https://github.com/caleblamro/EffortLogger_M18",
    stack: ["Java", "SQL", "AWS"],
    highlights: [{ label: "Course", value: "CSE 360 — AGILE methodology" }],
    features: [
      "Team-based AGILE workflow tracking",
      "Effort logging and burn-down reporting",
      "Cloud-hosted backend on AWS",
    ],
    badge: "EL",
  },
  {
    slug: "lexical-analyzer",
    title: "Lexical Analyzer",
    tagline: "Thompson's construction in C++",
    description:
      "A C++ lexer that parses tokens from a string given a regular expression — uses Thompson's construction to compile REGs to NFAs at runtime.",
    longDescription: [
      "One key project for CSE 340 was writing a program that parses tokens from a string given a regular expression representing that token. Thompson's construction is used together with REGs generated at runtime to make this process clean and fast.",
    ],
    role: "Coursework",
    status: "shipped",
    year: "2022",
    org: "ASU",
    stack: ["C++"],
    highlights: [{ label: "Course", value: "CSE 340 — Languages" }],
    features: [
      "Regex → NFA via Thompson's construction",
      "Token stream output from arbitrary inputs",
    ],
    badge: "LA",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
