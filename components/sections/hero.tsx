"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const rotatingRoles = [
  { verb: "building", subject: "Doorline" },
  { verb: "leading", subject: "engineering at On Q" },
  { verb: "shipping", subject: "Forge with Triforce" },
  { verb: "designing", subject: "agent runtimes" },
];

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
  const [nextQuarter, setNextQuarter] = React.useState<string | null>(null);

  React.useEffect(() => {
    const { q, year } = getNextQuarter();
    setNextQuarter(`Q${q} ${year}`);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-frost/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative py-28 md:py-36 lg:py-40">
        <div className="max-w-4xl">
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
              Available {nextQuarter && <span>· {nextQuarter}</span>}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-8 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.04em] text-balance sm:text-6xl md:text-[5.5rem] lg:text-[7rem]"
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
            className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-base text-foreground/85 sm:text-lg"
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
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
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
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                See the work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
