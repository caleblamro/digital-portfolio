import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
          <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / let&apos;s ship something
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Got a project that needs a builder?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether it&apos;s a greenfield product, a stuck migration, or an
              AI integration that has to actually work — I&apos;m happy to talk
              through it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:caleblamro@gmail.com">
                  <Mail className="h-4 w-4" />
                  caleblamro@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
