import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { StatusPill } from "@/components/status-pill";
import { VisitSiteLink } from "@/components/visit-site-link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I've shipped, end-to-end.",
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
        title="Everything I've shipped."
        description="Built end-to-end — design, code, infrastructure, deploy."
      />

      {Object.entries(grouped).map(([org, list]) =>
        list.length === 0 ? null : (
          <section
            key={org}
            className="border-b border-border py-20 last:border-b-0"
          >
            <div className="container">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {org}
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {list.length} project{list.length === 1 ? "" : "s"}
                </span>
              </div>

              <ul className="mt-8 divide-y divide-border border-y border-border">
                {list.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group grid items-center gap-4 py-6 transition-colors sm:grid-cols-12 cursor-pointer"
                    >
                      <span className="font-display text-base font-bold text-foreground/30 transition-colors group-hover:text-accent sm:col-span-1">
                        {project.badge}
                      </span>
                      <div className="sm:col-span-4">
                        <h3 className="font-display text-xl font-semibold leading-tight transition-colors group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {project.year} · {project.role}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-4">
                        {project.tagline}
                      </p>
                      <div className="flex items-center gap-4 sm:col-span-2">
                        <StatusPill status={project.status} />
                      </div>
                      <div className="flex items-center justify-end gap-3 sm:col-span-1">
                        {project.href && <VisitSiteLink href={project.href} />}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ),
      )}
    </>
  );
}
