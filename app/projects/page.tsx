import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/status-pill";
import { VisitSiteLink } from "@/components/visit-site-link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every product I've shipped or am shipping right now — from AI platforms to real-estate investing tools to native macOS apps.",
};

export default function ProjectsPage() {
  const grouped: Record<string, typeof projects> = {
    Triforce: projects.filter((p) => p.org === "Triforce"),
    Veritas: projects.filter((p) => p.org === "Veritas"),
    Personal: projects.filter((p) => p.org === "Personal"),
    ASU: projects.filter((p) => p.org === "ASU"),
  };

  return (
    <>
      <PageHero
        eyebrow="/ projects"
        title="Everything I've shipped (and a few I'm shipping now)."
        description="A complete inventory of products built at Triforce Software and earlier roles. Each one is built end-to-end — design, code, infrastructure, deploy."
      />

      {Object.entries(grouped).map(([org, list]) =>
        list.length === 0 ? null : (
          <section
            key={org}
            className="border-b border-border py-16 last:border-b-0"
          >
            <div className="container">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {org}
                </h2>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {list.length} project{list.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((project) => (
                  <Link
                    key={project.slug}
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
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold leading-tight">
                            {project.title}
                          </h3>
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {project.tagline}
                          </p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {project.year} · {project.role}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((s) => (
                          <Badge
                            key={s}
                            variant="muted"
                            className="text-[10px]"
                          >
                            {s}
                          </Badge>
                        ))}
                        {project.stack.length > 4 && (
                          <Badge variant="muted" className="text-[10px]">
                            +{project.stack.length - 4}
                          </Badge>
                        )}
                      </div>

                      {project.href && <VisitSiteLink href={project.href} />}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ),
      )}
    </>
  );
}
