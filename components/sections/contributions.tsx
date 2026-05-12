"use client";

import * as React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Calendar as CalendarIcon,
  Flame,
  GitCommit,
  Github,
  Trophy,
} from "lucide-react";

const USERNAME = "caleblamro";
const MONTHS_BACK = 6;
const NUM_WEEKS = Math.ceil((MONTHS_BACK * 31) / 7) + 1;

type Activity = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const palette = {
  light: ["#E5E9F0", "#A7C0D5", "#7FA1C0", "#5E81AC", "#3F5E84"],
  dark: ["#3B4252", "#4C566A", "#88C0D0", "#5E81AC", "#8FBCBB"],
};

function getCutoff() {
  const c = new Date();
  c.setMonth(c.getMonth() - MONTHS_BACK);
  c.setHours(0, 0, 0, 0);
  return c;
}

function computeStats(data: Activity[]) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const activeDays = data.filter((d) => d.count > 0).length;

  let longestStreak = 0;
  let run = 0;
  for (const d of data) {
    if (d.count > 0) {
      run += 1;
      if (run > longestStreak) longestStreak = run;
    } else {
      run = 0;
    }
  }

  const best = data.reduce<Activity>(
    (max, d) => (d.count > max.count ? d : max),
    { date: "", count: 0, level: 0 },
  );

  return { total, activeDays, longestStreak, best };
}

function formatDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export function Contributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<Activity[] | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setData(d.contributions ?? []);
      })
      .catch(() => {
        if (!cancelled) setData([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const cutoff = React.useMemo(getCutoff, []);

  const filtered = React.useMemo(
    () => data?.filter((d) => new Date(d.date) >= cutoff) ?? null,
    [data, cutoff],
  );

  const stats = React.useMemo(
    () => (filtered ? computeStats(filtered) : null),
    [filtered],
  );

  const transformData = React.useCallback(
    (raw: Activity[]) => raw.filter((d) => new Date(d.date) >= cutoff),
    [cutoff],
  );

  const blockSize = React.useMemo(() => {
    if (containerWidth === 0) return 14;
    const labelArea = 36;
    const usable = containerWidth - labelArea;
    const size = Math.floor(usable / (NUM_WEEKS * 1.28));
    return Math.max(10, Math.min(48, size));
  }, [containerWidth]);

  const blockMargin = Math.max(2, Math.floor(blockSize * 0.28));

  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              / code activity
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              The last six months.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Pulled live from{" "}
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="text-foreground accent-underline transition hover:text-accent"
              >
                @{USERNAME}
              </a>
              . Each square is a day; darker means more.
            </p>
          </div>

          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 cursor-pointer"
          >
            <Github className="h-4 w-4" />
            <span>View on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            icon={GitCommit}
            label="Contributions"
            value={stats ? stats.total.toLocaleString() : "—"}
            sub="last 6 months"
          />
          <StatCard
            icon={CalendarIcon}
            label="Active days"
            value={stats ? stats.activeDays.toLocaleString() : "—"}
            sub={
              stats && filtered
                ? `${Math.round((stats.activeDays / filtered.length) * 100)}% of days`
                : undefined
            }
          />
          <StatCard
            icon={Flame}
            label="Longest streak"
            value={stats ? `${stats.longestStreak} days` : "—"}
            sub="consecutive"
          />
          <StatCard
            icon={Trophy}
            label="Best day"
            value={stats ? `${stats.best.count}` : "—"}
            sub={stats?.best.date ? formatDate(stats.best.date) : undefined}
          />
        </div>

        <div
          ref={containerRef}
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {mounted ? (
            <div className="[&_article]:!w-full [&_svg.react-activity-calendar__calendar]:!w-full [&_svg.react-activity-calendar__calendar]:!h-auto">
              <GitHubCalendar
                username={USERNAME}
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                theme={palette}
                blockSize={blockSize}
                blockMargin={blockMargin}
                blockRadius={2}
                fontSize={12}
                transformData={transformData}
                labels={{ totalCount: "{{count}} contributions" }}
                style={{
                  color: "hsl(var(--muted-foreground))",
                  width: "100%",
                }}
              />
            </div>
          ) : (
            <div className="h-[180px] animate-pulse rounded-lg bg-secondary/40" />
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 font-display text-xl font-bold leading-none tracking-tight">
          {value}
        </p>
        {sub && (
          <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
