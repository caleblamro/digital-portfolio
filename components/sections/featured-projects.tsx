"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/status-pill";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section className="relative border-b border-border py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / selected work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Recent products.
            </h2>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {featuredProjects.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group grid items-center gap-4 py-6 transition-colors hover:text-accent sm:grid-cols-12 cursor-pointer"
              >
                <span className="font-display text-base font-bold text-foreground/30 transition-colors group-hover:text-accent sm:col-span-1">
                  {project.badge}
                </span>
                <h3 className="font-display text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-accent sm:col-span-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5">
                  {project.tagline}
                </p>
                <div className="sm:col-span-2">
                  <StatusPill status={project.status} />
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:col-span-1 sm:justify-self-end" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
