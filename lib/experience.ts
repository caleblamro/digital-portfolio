export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Triforce Software",
    role: "Founder & Lead Engineer",
    period: "2024 — Present",
    location: "Arizona",
    summary:
      "Founded a custom software studio that ships AI-first products. Lead engineering on Forge (build-with-AI platform), Doorline (real-estate investor terminal), and Treemap (macOS filesystem visualizer).",
    highlights: [
      "Built and shipped Forge — a build-with-AI platform that lets non-engineers describe an app and watch it get built, deployed, and iterated on.",
      "Built Doorline end-to-end — a full-stack Next.js product with a deterministic investment-metrics engine, Claude-written memos, and a Stripe-metered public API.",
      "Shipped Treemap, a notarized macOS app sold via Stripe with license-key delivery.",
      "Designed every piece of company infrastructure: Dokploy on VPS, Postgres, Redis, Sentry, OpenPanel analytics, Better-Auth.",
    ],
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle",
      "Claude (Anthropic)",
      "Mapbox",
      "Stripe",
      "Docker",
      "Electron",
    ],
  },
  {
    company: "On Q Property Management",
    role: "Lead Software Engineer",
    period: "2023 — Present",
    location: "Scottsdale, AZ",
    summary:
      "Leads software engineering across the internal product portfolio — financial reporting infrastructure, AI dev-agent tooling, and a portfolio of process-automation systems that modernize how the company operates day to day.",
    highlights: [
      "Owns the financial reporting infrastructure: replaced a fragile multi-day spreadsheet close with a typed, testable monthly-close pipeline that runs in minutes and reconciles against the ledger of record.",
      "Designed and shipped an internal AI dev-agent platform — Strands-powered agents that spin up isolated Docker dev environments, make code changes from natural-language prompts, and auto-open pull requests. Wired Sentry webhooks into the agent loop so production errors can be triaged and patched without a human in the middle.",
      "Built a portfolio of process-automation services that replace manual hand-offs across the operations org — reducing time-to-resolution for the team while preserving audit trails.",
      "Operates as tech lead across architecture review, hiring, and code review for the engineering group.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS (EC2, RDS, Amplify, S3)",
      "Terraform",
      "Docker",
      "Strands SDK",
      "AWS Bedrock",
    ],
  },
  {
    company: "Veritas Technologies",
    role: "Software Engineer & Intern",
    period: "2021 — 2023",
    location: "Mountain View, CA (Remote)",
    summary:
      "Worked on the Enterprise Applications team building internal tooling that supported business-critical processes across the company.",
    highlights: [
      "Built the Online Provisioning Forms application — an internal form-builder that set the stage for multiple major process transformations.",
      "Replaced the legacy GTM (Global Trade Management) Java applet with a modern React UI, reducing latency and improving the compliance-check workflow.",
      "Integrated with internal Veritas systems for routing, approvals, and audit logging.",
    ],
    stack: ["Java", "ReactJS", "SQL", "Internal Veritas systems"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "SQL",
      "HCL (Terraform)",
    ],
  },
  {
    category: "Frameworks",
    items: [
      "Next.js",
      "React",
      "React Native",
      "Electron",
      "FastAPI",
      "Drizzle ORM",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    category: "AI & Data",
    items: [
      "Anthropic Claude",
      "AWS Bedrock",
      "Strands SDK",
      "OpenAI",
      "Pinecone",
      "RAG pipelines",
      "Agent orchestration",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "AWS (EC2, RDS, Amplify, S3)",
      "Terraform",
      "Docker / Compose",
      "Dokploy",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Sentry",
      "Mapbox",
    ],
  },
];
