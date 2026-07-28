"use client";

import { cn } from "@/lib/utils";

export function AvailabilityBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em]",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nord-14 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-nord-14" />
      </span>
      <span className="text-nord-14">Available for work</span>
    </span>
  );
}