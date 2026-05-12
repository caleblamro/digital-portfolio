"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Code2, Sparkles } from "lucide-react";

const items = [
  {
    icon: Building2,
    label: "Day job",
    title: "On Q Property Management",
    description:
      "Lead engineer across financial reporting infrastructure, AI dev-agent tooling, and a portfolio of process-automation systems.",
    href: "/experience",
  },
  {
    icon: Sparkles,
    label: "Building",
    title: "Triforce Software",
    description:
      "Founder. Shipping Forge (build-with-AI platform), Doorline (real-estate investor terminal), and Treemap (macOS visualizer).",
    href: "/projects",
  },
  {
    icon: Code2,
    label: "Studying",
    title: "Agent orchestration",
    description:
      "How to design agent loops that fail safely, run cheaply, and ship the right code without a human in the middle.",
  },
];

export function Now() {
  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / what I&apos;m doing now
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          A snapshot of what&apos;s on my plate.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            const Comp: React.ElementType = item.href ? Link : "div";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Comp
                  {...(item.href ? { href: item.href } : {})}
                  className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 ${
                    item.href
                      ? "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_hsl(var(--accent)/0.4)] cursor-pointer"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Comp>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
