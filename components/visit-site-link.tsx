"use client";

import { ExternalLink } from "lucide-react";

export function VisitSiteLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent cursor-pointer"
    >
      <ExternalLink className="h-3 w-3" />
      Visit site
    </a>
  );
}
