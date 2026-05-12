"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    label: "Day job",
    title: "On Q Property Management",
    description:
      "Built the platform every new product runs on. Replaced an ops role with AI.",
    href: "/experience",
  },
  {
    label: "Building",
    title: "Triforce Software",
    description: "Founder. Shipping Forge, Doorline, and Treemap.",
    href: "/projects",
  },
  {
    label: "Studying",
    title: "Agent orchestration",
    description: "Agent loops that fail safely and ship the right code.",
  },
];

export function Now() {
  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / currently
        </p>

        <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {items.map((item, i) => {
            const Wrap: React.ElementType = item.href ? Link : "div";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Wrap
                  {...(item.href ? { href: item.href } : {})}
                  className={`group block ${
                    item.href ? "cursor-pointer" : ""
                  }`}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-3 font-display text-xl font-semibold leading-tight transition-colors group-hover:text-accent">
                    {item.title}
                  </dd>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Wrap>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
