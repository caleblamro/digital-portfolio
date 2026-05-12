import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <span className="font-display text-sm font-bold">CL</span>
              </span>
              <span className="font-display text-lg font-bold">
                Caleb Lamoreaux
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer. Founder of Triforce Software, lead engineer
              at On Q Property Management. Building AI-first products that
              ship.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Pages
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/files/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Elsewhere
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="https://github.com/caleblamro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" /> github.com/caleblamro
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/caleb-lamoreaux/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/caleb-lamoreaux
                </a>
              </li>
              <li>
                <a
                  href="mailto:caleblamro@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" /> caleblamro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Caleb Lamoreaux. All rights reserved.</p>
          <p className="font-mono">
            Built with Next.js, shadcn/ui, and Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
