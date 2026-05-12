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
      "Custom software studio shipping AI-first products. Forge, Doorline, and Treemap.",
    highlights: [
      "Built Forge — non-engineers describe an app, agents build and deploy it.",
      "Built Doorline end-to-end — a Next.js investor terminal with a deterministic metrics engine and a Stripe-metered public API.",
      "Shipped Treemap, a notarized macOS app sold via Stripe.",
      "Designed every piece of company infrastructure end-to-end.",
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
    period: "2025 — Present",
    location: "Scottsdale, AZ",
    summary:
      "Lead engineer. Built the shared platform every new product runs on, automated an ops role with AI, and train leadership on practical AI use.",
    highlights: [
      "Built the shared platform every new product is built on — auth, data, observability, deploy.",
      "Automated an entire operations role with AI, freeing the headcount for higher-leverage work.",
      "Replaced a multi-day spreadsheet close with a typed monthly-close pipeline that runs in minutes.",
      "Shipped an internal AI dev-agent platform — Strands agents spin up sandboxes and auto-open PRs from natural-language prompts.",
      "Wired Sentry webhooks into the agent loop for production auto-remediation.",
      "Cut AWS spend by migrating ML workloads from SageMaker to Bedrock.",
      "Led a production data migration from DynamoDB to MongoDB.",
      "Trained the leadership team on practical AI use — playbooks, evaluation, hands-on patterns.",
      "Tech lead across architecture, hiring, and code review.",
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
      "Enterprise Applications team. Internal tooling for business-critical processes.",
    highlights: [
      "Built Online Provisioning Forms — an internal form-builder that set up major process transformations.",
      "Replaced the legacy GTM Java applet with a modern React UI, cutting latency.",
      "Integrated routing, approvals, and audit logging into internal systems.",
    ],
    stack: ["Java", "ReactJS", "SQL"],
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
