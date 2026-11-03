"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

import type { ProjectDemo } from "@/lib/projects";

/**
 * Plays a muted preview loop until clicked, then swaps in the full
 * walkthrough with controls. Reduced-motion users get the still poster.
 */
export function DemoVideo({
  demo,
  title,
}: {
  demo: ProjectDemo;
  title: string;
}) {
  const [playing, setPlaying] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const loopRef = React.useRef<HTMLVideoElement>(null);

  // React sets `muted` as a property, not an attribute, so iOS Safari's
  // muted-autoplay rule never sees it on first paint. Start it explicitly.
  React.useEffect(() => {
    const video = loopRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, [reduceMotion, playing]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      {playing ? (
        <video
          key="full"
          className="h-full w-full"
          src={demo.video}
          poster={demo.poster}
          controls
          autoPlay
          playsInline
          preload="none"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 cursor-pointer"
          aria-label={`Play the ${title} demo (${demo.duration})`}
        >
          {reduceMotion ? (
            <Image
              src={demo.poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          ) : (
            <video
              key="loop"
              ref={loopRef}
              className="h-full w-full object-cover"
              src={demo.loop}
              poster={demo.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          )}
          <span className="absolute inset-0 bg-background/10 transition-colors group-hover:bg-background/0" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground shadow-lg backdrop-blur transition group-hover:border-accent/60 group-hover:text-accent">
            <Play className="h-3.5 w-3.5 fill-current" />
            Watch the demo · {demo.duration}
          </span>
        </button>
      )}
    </div>
  );
}
