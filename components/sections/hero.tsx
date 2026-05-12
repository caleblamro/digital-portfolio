"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const rotatingRoles = [
  { verb: "building", subject: "Doorline" },
  { verb: "leading", subject: "engineering at On Q" },
  { verb: "shipping", subject: "Forge with Triforce" },
  { verb: "designing", subject: "agent runtimes" },
  { verb: "writing", subject: "production Next.js" },
];

const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Claude",
  "Postgres",
  "Drizzle",
  "Mapbox",
  "Stripe",
  "Tailwind",
  "AWS",
  "Terraform",
  "Docker",
  "FastAPI",
  "Python",
  "Bedrock",
  "Sentry",
];

function getCurrentQuarter(now = new Date()) {
  return {
    q: Math.floor(now.getMonth() / 3) + 1,
    year: now.getFullYear(),
  };
}

function getNextQuarter(now = new Date()) {
  const q = Math.floor(now.getMonth() / 3) + 1;
  const isQ4 = q === 4;
  return {
    q: isQ4 ? 1 : q + 1,
    year: isQ4 ? now.getFullYear() + 1 : now.getFullYear(),
  };
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIdx, setRoleIdx] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.3 });
  const [nextQuarter, setNextQuarter] = React.useState<string | null>(null);
  const [currentQuarter, setCurrentQuarter] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    const next = getNextQuarter();
    const current = getCurrentQuarter();
    setNextQuarter(`Q${next.q} ${next.year}`);
    setCurrentQuarter(`Q${current.q} · ${current.year}`);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const onMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    [prefersReducedMotion],
  );

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${
            mouse.y * 100
          }%, hsl(var(--accent) / 0.10), transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-frost/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 top-6 hidden select-none font-display text-[10rem] font-bold leading-none text-foreground/[0.025] sm:text-[14rem] lg:block"
        >
          01
        </div>

        <div className="relative lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Available for new work
              {nextQuarter && <span> · {nextQuarter}</span>}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-[2.5rem] font-bold leading-[0.95] tracking-[-0.04em] text-balance sm:text-5xl md:text-[4.25rem] lg:text-[5.25rem]"
          >
            <span className="block text-foreground">Caleb</span>
            <span className="block">
              <span className="font-serif italic font-normal text-accent">
                Lamoreaux
              </span>
              <span className="text-foreground/30">.</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-base text-foreground/85 sm:text-lg"
          >
            <span className="text-muted-foreground">→ currently</span>
            <span className="inline-flex items-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingRoles[roleIdx].verb}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="italic text-accent"
                >
                  {rotatingRoles[roleIdx].verb}
                </motion.span>
              </AnimatePresence>
              <span>&nbsp;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingRoles[roleIdx].subject}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, delay: 0.04 }}
                  className="font-semibold text-foreground"
                >
                  {rotatingRoles[roleIdx].subject}
                </motion.span>
              </AnimatePresence>
              <span className="caret ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-foreground" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Full-stack engineer. Founder of{" "}
            <Link
              href="/projects/triforce-software"
              className="text-foreground accent-underline transition hover:text-accent"
            >
              Triforce Software
            </Link>
            , lead engineer at{" "}
            <Link
              href="/experience"
              className="text-foreground accent-underline transition hover:text-accent"
            >
              On Q
            </Link>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                See the work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {[
              { label: "Years shipping", value: "4+" },
              { label: "Products live", value: "5" },
              { label: "Companies built", value: "1" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative h-full min-h-[400px]"
          >
            <LayeredCards currentQuarter={currentQuarter} />
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-border bg-background/60 py-4">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee-track flex shrink-0 items-center gap-12 pr-12 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{item}</span>
                <span aria-hidden className="text-border">
                  ◇
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LayeredCards({ currentQuarter }: { currentQuarter: string | null }) {
  return (
    <div className="relative h-full">
      <motion.div
        initial={{ opacity: 0, x: 24, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute right-0 top-12 w-[90%] rounded-2xl border border-border bg-card/85 p-6 shadow-xl backdrop-blur-sm"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            TRIFORCE · LIVE
          </span>
          <span className="font-display text-xs text-frost">→</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight">
          Treemap
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Beautiful macOS filesystem visualizer. Shipped via Stripe.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12, rotate: -2 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="absolute right-4 top-4 w-[88%] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border bg-card/60 px-4 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-nord-11/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-nord-13/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-nord-14/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            caleb.ts
          </span>
        </div>
        <pre className="bg-background p-5 font-mono text-[12.5px] leading-relaxed">
          <code>
            <span className="text-frost">const</span>{" "}
            <span className="text-foreground">caleb</span> = {"{"}
            {"\n"}  <span className="text-accent">role</span>:{" "}
            <span className="text-nord-14">&apos;full-stack engineer&apos;</span>,
            {"\n"}  <span className="text-accent">builds</span>: [
            <span className="text-nord-14">&apos;agents&apos;</span>,{" "}
            <span className="text-nord-14">&apos;products&apos;</span>],
            {"\n"}  <span className="text-accent">leading</span>:{" "}
            <span className="text-nord-14">&apos;On Q engineering&apos;</span>,
            {"\n"}  <span className="text-accent">founder_of</span>:{" "}
            <span className="text-nord-14">&apos;Triforce&apos;</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute -bottom-2 left-0 w-[80%] rounded-2xl border border-accent/40 bg-card p-5 shadow-[0_24px_60px_-20px_hsl(var(--accent)/0.35)]"
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            <Sparkles className="h-3 w-3" />
            Now playing
          </span>
          <Badge variant="muted" className="font-mono text-[9px]">
            {currentQuarter ?? ""}
          </Badge>
        </div>
        <p className="mt-3 font-display text-lg font-bold leading-tight">
          <Link
            href="/projects/doorline"
            className="accent-underline transition hover:text-accent"
          >
            Doorline
          </Link>
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          The investor&apos;s terminal for US residential rentals.
        </p>
      </motion.div>

      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-12 select-none font-serif text-[12rem] italic leading-none text-foreground/[0.04]"
      >
        c
      </span>
    </div>
  );
}
