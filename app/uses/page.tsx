import type { Metadata } from "next";
import { Cloud, Cpu, Code2, TerminalSquare } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { uses, type UseCategory } from "@/lib/uses";

export const metadata: Metadata = {
  title: "Uses — Caleb Lamoreaux",
  description: "The editor, languages, services, and hardware I work with.",
};

const iconMap: Record<UseCategory, React.ElementType> = {
  Editor: Code2,
  Languages: TerminalSquare,
  Services: Cloud,
  Hardware: Cpu,
};

export default function UsesPage() {
  return (
    <>
      <PageHero
        eyebrow="/ uses"
        title="What I use"
        description="Editor, languages, services, and hardware — the daily kit."
      />

      <section className="py-20">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2">
            {uses.map((group) => {
              const Icon = iconMap[group.category];
              return (
                <div
                  key={group.category}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="font-display text-lg font-semibold">
                      {group.category}
                    </h2>
                  </div>

                  <ul className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <p className="font-mono text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
