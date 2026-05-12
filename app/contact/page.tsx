import type { Metadata } from "next";
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";

const EMAIL = "caleblamro@gmail.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email is the fastest channel.",
};

const secondary = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "caleb-lamoreaux",
    href: "https://www.linkedin.com/in/caleb-lamoreaux/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "caleblamro",
    href: "https://github.com/caleblamro",
  },
  {
    icon: FileText,
    label: "Résumé",
    value: "Download PDF",
    href: "/files/Resume.pdf",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="/ contact"
        title="Let's build something."
        description="Greenfield product, stuck migration, AI integration — email me."
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Email focal point */}
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-card p-10 shadow-[0_30px_80px_-40px_hsl(var(--accent)/0.45)] md:p-14">
            <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.08]" />
            <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-frost/15 blur-3xl" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                Fastest channel · replies in 24h
              </p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 block font-display text-3xl font-bold tracking-tight transition-colors hover:text-accent sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {EMAIL}
            </a>

            <p className="mt-5 max-w-xl text-muted-foreground">
              Project work, advisory, hiring chats — all read personally. The
              more concrete the ask, the faster the reply.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" /> Send email
                </a>
              </Button>
              <CopyEmailButton email={EMAIL} />
            </div>
          </div>

          {/* Secondary channels */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {secondary.map((c) => {
              const Icon = c.icon;
              const external = c.href.startsWith("http");
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-0.5 font-display text-sm font-semibold">
                        {c.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
