import { PlayCircle } from "lucide-react";

/** Card footer marker for retired projects that have a recorded demo. */
export function DemoLabel() {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-accent">
      <PlayCircle className="h-3 w-3" />
      Demo video
    </span>
  );
}
