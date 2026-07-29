export type UseCategory = "Editor" | "Languages" | "Services" | "Hardware";

export type UseItem = {
  name: string;
  note: string;
};

export type UseGroup = {
  category: UseCategory;
  items: UseItem[];
};

export const uses: UseGroup[] = [
  {
    category: "Editor",
    items: [
      {
        name: "Cursor",
        note: "Daily driver — agent mode for multi-file changes, Claude-powered review.",
      },
      {
        name: "VS Code",
        note: "Fallback for quick edits and extensions Cursor doesn't cover.",
      },
      {
        name: "iTerm2",
        note: "Split panes for logs, dev server, and git in one window.",
      },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "TypeScript", note: "Default for anything shipping to production." },
      { name: "Python", note: "ML workloads, scripting, FastAPI services." },
      { name: "SQL", note: "Postgres-flavored, hand-written for anything that matters." },
    ],
  },
  {
    category: "Services",
    items: [
      { name: "Vercel", note: "Hosting and preview deploys for Next.js apps." },
      { name: "Claude (Anthropic)", note: "Pair-programming, code review, agent orchestration." },
      { name: "Linear", note: "Issue tracking across Triforce projects." },
      { name: "Sentry", note: "Error tracking and production observability." },
    ],
  },
  {
    category: "Hardware",
    items: [
      { name: 'MacBook Pro 16" (M3 Max)', note: "Primary machine for everything." },
      { name: "Studio Display", note: "Single external monitor, kept simple." },
      { name: "Keychron Q1", note: "Mechanical keyboard, brown switches." },
    ],
  },
];
