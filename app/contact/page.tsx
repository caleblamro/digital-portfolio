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
  description:
    "The easiest ways to reach Caleb Lamoreaux — email, LinkedIn, GitHub, or a quick scheduled call.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "caleblamro@gmail.com",
    href: "mailto:caleblamro@gmail.com",
    description: "Best for project inquiries and long-form questions.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/caleb-lamoreaux",
    href: "https://www.linkedin.com/in/caleb-lamoreaux/",
    description: "Connect, or DM if we haven't met yet.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "caleblamro",
    href: "https://github.com/caleblamro",
    description: "Open source, side projects, and the occasional gist.",
  },
  {
    icon: FileText,
    label: "Résumé",
    value: "Download PDF",
    href: "/files/Resume.pdf",
    description: "The latest version — kept in sync with this site.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="/ contact"
        title="Let's build something that ships."
        description="If you're looking for a builder for a greenfield product, a stuck migration, or a real AI integration — I'd love to hear about it. The fastest channel is email."
      >
        <Button asChild variant="accent" size="lg">
          <a href="mailto:caleblamro@gmail.com">
            <Mail className="h-4 w-4" /> caleblamro@gmail.com
          </a>
        </Button>
      </PageHero>

      <section className="border-b border-border/60 py-20">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_hsl(var(--accent)/0.5)] cursor-pointer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
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
              value="Within 24 hours, weekdays"
            />
            <Info
              icon={Mail}
              label="Best for"
              value="Project work, advisory, hiring conversations"
            />
            <Info
              icon={Github}
              label="Currently exploring"
              value="Agent runtime design, AI-first product UX"
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
