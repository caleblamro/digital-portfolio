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
      "Leads software engineering at On Q. Built the shared platform every new product is built on, designed AI-driven automation that replaces manual operational work, owns the financial reporting infrastructure, and trains the leadership team on effective AI use.",
    highlights: [
      "Designed and built the new software stack that every new product at On Q is built on — the shared foundation for auth, data access, observability, and deployment that the engineering team ships against today.",
      "Automated an entire operations workflow end-to-end with AI that previously required a full-time employee to manage — preserving audit trails and freeing the headcount for higher-leverage work.",
      "Owns the financial reporting infrastructure: replaced a fragile multi-day spreadsheet close with a typed, testable monthly-close pipeline that runs in minutes and reconciles against the ledger of record.",
      "Designed and shipped an internal AI dev-agent platform — Strands-powered agents that spin up isolated Docker dev environments, make code changes from natural-language prompts, and auto-open pull requests. Sentry webhooks feed the agent loop so production errors can be triaged and patched without a human in the middle.",
      "Cut AWS spend by migrating ML workloads from SageMaker to Bedrock — same capabilities, materially lower per-call cost, and simpler ops.",
      "Led a production data migration from DynamoDB to MongoDB to unlock more flexible query patterns and reduce per-operation cost across the portfolio.",
      "Trained the leadership team on how to use AI effectively in their day-to-day — practical playbooks, evaluation criteria, and hands-on practice for the patterns that move the needle.",
      "Operates as tech lead across architecture review, hiring, and code review for the engineering group.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB → MongoDB migration",
      "Redis",
      "AWS (EC2, RDS, Amplify, S3)",
      "AWS Bedrock",
      "Strands SDK",
      "Terraform",
      "Docker",
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
