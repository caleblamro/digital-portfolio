import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="container max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          / 404
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Lost in the codebase.
        </h1>
        <p className="mt-4 text-muted-foreground">
          That page doesn&apos;t exist — or it moved when I refactored. Head
          back home or browse my projects.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="accent">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Back home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">See projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
