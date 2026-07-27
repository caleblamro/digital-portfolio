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
  downloadHref?: string;
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
      "Type an address, get a full underwriting in seconds — cap rate, DSCR, 30-year wealth projection, comps, and a Claude-written investment memo. The deal finder maps live listings on Mapbox with clustering.",
      "An embedded AI assistant runs read-only SQL on the user's portfolio, fetches live market data, and emits chart specs the UI renders inline. The same pipeline is exposed as a Stripe-metered public API.",
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
      "Describe what you want and a swarm of Claude agents scaffold the app, wire up auth and a database, ship UI, and deploy — compressing idea-to-app from weeks to minutes.",
      "A Next.js monorepo with a shared component system, an agent runtime, multi-user collaboration, and one-click preview deployments.",
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
    slug: "triforce-software",
    title: "Triforce Software",
    tagline: "Custom software studio website",
    description:
      "Marketing site, blog, and lead funnel for Triforce Software.",
    longDescription: [
      "The company site I founded to build software for businesses that need more than off-the-shelf SaaS. Next.js 16 + @base-ui/react with a custom design system, blog, careers, services, and contact funnels.",
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
    slug: "brink",
    title: "Brink",
    tagline: "Continuous adversarial security testing for SaaS apps",
    description:
      "AI agents that autonomously probe your app for real security exploits, then ship proof-of-concept demos and fix PRs.",
    longDescription: [
      "Brink deploys autonomous AI agents that continuously test SaaS applications for real security vulnerabilities. When an agent finds an exploit, it generates a proof-of-concept demonstration and opens a pull request with the fix.",
      "A TypeScript monorepo powered by Turborepo — Next.js dashboard, Hono API with tRPC, Inngest for durable agent orchestration, sandboxed runtimes via E2B, and browser-using agents via Browserbase.",
    ],
    role: "Founder & lead engineer",
    status: "in-development",
    year: "2026",
    org: "Triforce",
    featured: true,
    href: "https://usebrink.com",
    stack: [
      "Next.js",
      "TypeScript",
      "Hono",
      "tRPC",
      "Inngest",
      "PostgreSQL",
      "Drizzle ORM",
      "E2B",
      "Browserbase",
      "Vercel AI SDK",
      "Better Auth",
      "Stripe",
      "Sentry",
    ],
    highlights: [
      { label: "Architecture", value: "Turborepo monorepo" },
      { label: "Agents", value: "Sandboxed via E2B" },
      { label: "Orchestration", value: "Inngest durable workflows" },
    ],
    features: [
      "Autonomous AI agents that find real exploits in SaaS apps",
      "Auto-generated proof-of-concept demos per vulnerability",
      "Fix PRs shipped directly to the codebase",
      "Sandboxed agent runtimes with scoped HTTP proxy",
      "Durable workflow orchestration via Inngest",
      "Attack success rate evaluation harness",
    ],
    badge: "BK",
  },
  {
    slug: "cineit",
    title: "CineIt",
    tagline: "Letterboxd, but for TV and movies",
    description:
      "A watch diary for TV and film — log every episode, rate at the episode level with half-stars, build a watchlist, and follow friends through a spoiler-free feed.",
    longDescription: [
      "CineIt is a cross-platform watch diary built for people who actually finish the season. Track shows and movies in one library, mark episodes as you watch, and pick up exactly where you left off on any device.",
      "Ratings work episode-by-episode with half-star granularity, so your taste is captured at the resolution it actually exists at. A spoiler-free social feed surfaces friend activity without ever ruining a finale, and the interface is tuned for both light and dark viewing rooms across iOS, Android, and web.",
    ],
    role: "Founder & lead engineer",
    status: "live",
    year: "2026",
    org: "Triforce",
    featured: true,
    href: "https://cineit.triforce-software.com",
    downloadHref: "https://apps.apple.com/app/id6769514050",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Next.js",
      "Hono",
      "tRPC",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
    ],
    highlights: [
      { label: "Rating step", value: "0.5★ per episode" },
      { label: "Platforms", value: "iOS · Android · Web" },
      { label: "Price", value: "Free forever" },
    ],
    features: [
      "Track shows and movies in one unified library",
      "Episode-by-episode ratings with half-star granularity",
      "Smart watchlist with long-press quick actions",
      "Continue watching across seasons and devices",
      "Spoiler-free friend activity feed",
      "Tuned light and dark themes across every platform",
    ],
    badge: "CI",
  },
  {
    slug: "online-provisioning-forms",
    title: "Online Provisioning Forms",
    tagline: "Internal form builder at Veritas Technologies",
    description:
      "Internal form builder for Veritas Enterprise Applications.",
    longDescription: [
      "An internal provisioning form-builder for Veritas's Enterprise Applications team. Set the stage for multiple major process transformations across the company.",
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
      "Replaced a legacy Java applet for global-trade-compliance order management with a modern React UI.",
    longDescription: [
      "Replaced the legacy Java applet used to manage orders being checked for global trade compliance. Cut latency and shipped features that made the workflow materially more efficient.",
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
      "Open-source RAG over unstructured files via OpenAI + Pinecone.",
    longDescription: [
      "Translates unstructured files (PDFs, docs, transcripts) into vector embeddings, runs similarity search at query time, and uses top-k context to ground the response.",
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
      "AGILE management app — ASU CSE 360, five-person team.",
    longDescription: [
      "Five-person team project for ASU's CSE 360 — built an AGILE management application against formal stakeholder requirements.",
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
      "C++ lexer that compiles regex → NFA via Thompson's construction.",
    longDescription: [
      "A C++ program that parses tokens from a string given a regular expression. Uses Thompson's construction to compile REGs to NFAs at runtime.",
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
