import type { Metadata } from "next";
import {
  ArrowUpRight,
  Calendar,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email is the fastest channel.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "caleblamro@gmail.com",
    href: "mailto:caleblamro@gmail.com",
    description: "Best for project inquiries.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/caleb-lamoreaux",
    href: "https://www.linkedin.com/in/caleb-lamoreaux/",
    description: "Connect or DM.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "caleblamro",
    href: "https://github.com/caleblamro",
    description: "Open source and side projects.",
  },
  {
    icon: FileText,
    label: "Résumé",
    value: "Download PDF",
    href: "/files/Resume.pdf",
    description: "Kept in sync with this site.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="/ contact"
        title="Let's build something."
        description="Greenfield product, stuck migration, AI integration — email me."
      >
        <Button asChild size="lg">
          <a href="mailto:caleblamro@gmail.com">
            <Mail className="h-4 w-4" /> caleblamro@gmail.com
          </a>
        </Button>
      </PageHero>

      <section className="border-b border-border py-20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {channels.map((c) => {
              const Icon = c.icon;
              const external = c.href.startsWith("http");
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group relative flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_hsl(var(--accent)/0.35)] cursor-pointer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 font-display text-xl font-semibold">
                          {c.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Info
              icon={Calendar}
              label="Response time"
              value="Within 24 hours, weekdays."
            />
            <Info
              icon={Mail}
              label="Best for"
              value="Project work, advisory, hiring chats."
            />
            <Info
              icon={Github}
              label="Exploring"
              value="Agent runtime design and AI-first UX."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-4 w-4" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );
}
