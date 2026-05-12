"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import { skills } from "@/lib/experience";

const iconMap: Record<string, React.ElementType> = {
  Languages: TerminalSquare,
  Frameworks: Layers,
  "AI & Data": Sparkles,
  Infrastructure: Cloud,
};

export function Skills() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / how I build
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Stacks I reach for — and the why behind them.
            </h2>
            <p className="mt-4 text-muted-foreground">
              I pick boring tools where boring is the right call and bet on
              modern ones where they unlock real leverage. Every product I
              ship lives in production behind a typed schema, an observed
              runtime, and an automated deploy.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <Highlight icon={Code2} label="Type-safe by default" />
              <Highlight icon={Database} label="Typed Postgres schemas" />
              <Highlight icon={Sparkles} label="AI woven into the loop" />
              <Highlight icon={Cloud} label="Deploys you can roll back" />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((group, i) => {
                const Icon = iconMap[group.category] ?? Layers;
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:border-accent/40"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-base font-semibold">
                        {group.category}
                      </h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-border/60 bg-background/60 px-2 py-1 font-mono text-[11px] text-foreground/80 transition-colors duration-200 group-hover:border-accent/30"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/40 px-3 py-2">
      <Icon className="h-3.5 w-3.5 text-accent" />
      <span className="text-xs text-foreground/80">{label}</span>
    </div>
  );
}
