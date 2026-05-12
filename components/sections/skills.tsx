"use client";

import { motion } from "framer-motion";

import { skills } from "@/lib/experience";

export function Skills() {
  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Tools I reach for.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Boring where boring works. Modern where it earns its keep.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl className="space-y-8">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid gap-3 border-b border-border pb-8 last:border-b-0 last:pb-0 sm:grid-cols-12"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:col-span-3">
                    {group.category}
                  </dt>
                  <dd className="sm:col-span-9">
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-foreground/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
