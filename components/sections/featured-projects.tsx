"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/status-pill";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section className="relative border-b border-border py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / featured work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Products I&apos;ve shipped or am shipping right now.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A snapshot of the products and platforms I&apos;ve built at
              Triforce. Click any card for the full story.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_hsl(var(--accent)/0.35)] cursor-pointer"
              >
                <div className="flex items-start justify-between border-b border-border/80 pb-4">
                  <StatusPill status={project.status} />
                  <span className="font-display text-2xl font-bold tracking-tight text-foreground/40 transition-colors group-hover:text-accent">
                    {project.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
                    {project.stack.slice(0, 3).map((s) => (
                      <Badge key={s} variant="muted" className="text-[10px]">
                        {s}
                      </Badge>
                    ))}
                    {project.stack.length > 3 && (
                      <Badge variant="muted" className="text-[10px]">
                        +{project.stack.length - 3}
                      </Badge>
                    )}
                  </div>
                  {project.href && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.href, "_blank", "noreferrer");
                      }}
                      className="mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent cursor-pointer"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit site
                    </button>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
