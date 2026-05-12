"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", num: "01", label: "Home" },
  { href: "/projects", num: "02", label: "Projects" },
  { href: "/experience", num: "03", label: "Experience" },
  { href: "/contact", num: "04", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-3 z-40 sm:top-4">
        <div className="container">
          <div
            className={cn(
              "flex h-14 items-center gap-2 rounded-2xl border bg-background/70 px-2.5 backdrop-blur-xl transition-all duration-300 sm:gap-3 sm:px-3",
              scrolled
                ? "border-border/80 shadow-[0_12px_40px_-16px_rgba(46,52,64,0.18)]"
                : "border-border/50 shadow-[0_2px_12px_-4px_rgba(46,52,64,0.06)]",
            )}
          >
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-sm font-bold tracking-tight">
                CL
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </span>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-sm font-semibold tracking-tight">
                Caleb Lamoreaux
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available
              </span>
            </div>
          </Link>

          {/* Divider */}
          <span
            aria-hidden
            className="hidden h-7 w-px bg-border md:mx-1 md:block"
          />

          {/* Routes */}
          <nav className="relative hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-secondary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={cn(
                      "font-mono text-[10px] transition-colors",
                      active ? "text-accent" : "text-muted-foreground/60",
                    )}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="ml-auto hidden items-center gap-0.5 md:flex">
            <IconLink
              href="https://github.com/caleblamro"
              label="GitHub"
              icon={Github}
            />
            <IconLink
              href="https://www.linkedin.com/in/caleb-lamoreaux/"
              label="LinkedIn"
              icon={Linkedin}
            />
            <ThemeToggle />
            <Button asChild size="sm" className="ml-1.5">
              <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="h-3.5 w-3.5" />
                Résumé
                <ArrowRight className="h-3 w-3" />
              </a>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="ml-auto flex items-center gap-0.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary cursor-pointer"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="container flex h-full flex-col justify-between pb-10 pt-24"
            >
              <ul className="space-y-1">
                {nav.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-baseline gap-4 border-b border-border py-5 transition-colors",
                          active ? "text-accent" : "hover:text-accent",
                        )}
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                          {item.num}
                        </span>
                        <span className="font-display text-3xl font-bold tracking-tight">
                          {item.label}
                        </span>
                        <span className="ml-auto translate-x-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex gap-2">
                  <IconLink
                    href="https://github.com/caleblamro"
                    label="GitHub"
                    icon={Github}
                  />
                  <IconLink
                    href="https://www.linkedin.com/in/caleb-lamoreaux/"
                    label="LinkedIn"
                    icon={Linkedin}
                  />
                </div>
                <Button asChild size="lg" className="w-full">
                  <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">
                    <FileText className="h-4 w-4" /> Download résumé
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
