import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Triforce Software, On Q Property Management, Veritas.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="/ experience"
        title="Where I've built."
        description="Three roles. All operational. Code, schema, Terraform, incidents."
      />

      <section className="border-b border-border py-16">
        <div className="container">
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:block" />

            <div className="space-y-12">
              {experiences.map((exp) => (
                <article key={exp.company} className="relative md:pl-12">
                  <div className="absolute -left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background md:flex">
                    <Building2 className="h-4 w-4 text-accent" />
                  </div>

                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                      {exp.company}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {exp.role}
                    </span>
                    <span className="text-border">•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/85">
                    {exp.summary}
                  </p>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <Badge key={s} variant="muted" className="text-[11px]">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card p-10 text-center md:p-16">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / résumé
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Want the receipts?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Grab the full résumé or skim the projects.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">
                  Download résumé
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  Browse projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
