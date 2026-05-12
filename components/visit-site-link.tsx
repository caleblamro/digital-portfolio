"use client";

import { ExternalLink } from "lucide-react";

export function VisitSiteLink({ href }: { href: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(href, "_blank", "noreferrer");
      }}
      className="relative z-10 inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent cursor-pointer"
    >
      <ExternalLink className="h-3 w-3" />
      Visit site
    </button>
  );
}
