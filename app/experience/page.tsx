import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
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

      <section className="border-b border-border py-20">
        <div className="container max-w-4xl space-y-20">
          {experiences.map((exp) => (
            <article key={exp.company}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {exp.company}
                </h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{exp.role}</span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </span>
              </p>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/85">
                {exp.summary}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
                {exp.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            / résumé
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Want the receipts?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">
                Download résumé
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/projects">
                Browse projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
