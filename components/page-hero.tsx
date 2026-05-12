import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border py-24 md:py-28",
        className,
      )}
    >
      <div className="container max-w-4xl">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
