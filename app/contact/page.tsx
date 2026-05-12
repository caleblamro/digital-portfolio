import type { Metadata } from "next";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";

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
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/caleb-lamoreaux",
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
        <div className="container max-w-3xl">
          <ul className="divide-y divide-border border-y border-border">
            {channels.map((c) => {
              const Icon = c.icon;
              const external = c.href.startsWith("http");
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-6 py-6 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 font-display text-lg font-semibold transition-colors group-hover:text-accent">
                          {c.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
