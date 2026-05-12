import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            / get in touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Have a project?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Greenfield builds, stuck migrations, real AI integrations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="mailto:caleblamro@gmail.com">caleblamro@gmail.com</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
