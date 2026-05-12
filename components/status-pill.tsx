import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/projects";

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: {
    label: "Live",
    dot: "bg-nord-14",
    text: "text-nord-14",
  },
  "in-development": {
    label: "In development",
    dot: "bg-nord-13",
    text: "text-nord-13",
  },
  shipped: {
    label: "Shipped",
    dot: "bg-nord-8",
    text: "text-nord-9",
  },
  archived: {
    label: "Archived",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
};

export function StatusPill({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const c = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em]",
        c.text,
        className,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", c.dot)}
        aria-hidden
      />
      {c.label}
    </span>
  );
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  shipped: "Shipped",
  archived: "Archived",
};
