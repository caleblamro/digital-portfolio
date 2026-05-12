import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StatusPill, statusLabel } from "@/components/status-pill";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.org === project.org)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-8 hidden select-none font-display text-[8rem] font-bold leading-none text-foreground/[0.04] lg:block"
        >
          {project.badge}
        </div>

        <div className="container py-16 md:py-20">
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-4">
                <StatusPill status={project.status} />
                <span className="text-border">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {project.org}
                </span>
                <span className="text-border">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground text-balance">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.href && (
                  <Button asChild size="lg">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit site <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button asChild variant="outline" size="lg">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4" /> Source
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  / fact sheet
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Role
                    </dt>
                    <dd className="mt-0.5 font-medium">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Organization
                    </dt>
                    <dd className="mt-0.5 font-medium">{project.org}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Year
                    </dt>
                    <dd className="mt-0.5 font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Status
                    </dt>
                    <dd className="mt-0.5 font-medium">
                      {statusLabel[project.status]}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / overview
            </p>
            <div className="prose-styles mt-4 space-y-5 text-lg leading-relaxed text-foreground/85">
              {project.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Separator className="my-12" />

            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / what it does
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {project.highlights.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                    / highlights
                  </h3>
                  <dl className="mt-4 space-y-4">
                    {project.highlights.map((h) => (
                      <div key={h.label}>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                          {h.label}
                        </dt>
                        <dd className="mt-1 font-display text-lg font-semibold">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  / stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Badge key={s} variant="muted" className="text-[11px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16">
          <div className="container">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / also at {project.org}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
              More from the same org
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 cursor-pointer"
                >
                  <div className="flex items-start justify-between border-b border-border/80 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {p.year}
                    </span>
                    <span className="font-display text-2xl font-bold tracking-tight text-foreground/40 transition-colors group-hover:text-accent">
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base font-semibold leading-tight">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent" />
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
