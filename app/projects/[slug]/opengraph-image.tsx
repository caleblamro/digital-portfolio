import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

import { getProject, projects } from "@/lib/projects";

export const alt = "Project preview — Caleb Lamoreaux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

async function loadFont(file: string) {
  const buf = await fs.readFile(path.join(process.cwd(), "public/fonts", file));
  return buf.buffer.slice(
    buf.byteOffset,
    buf.byteOffset + buf.byteLength,
  ) as ArrayBuffer;
}

const PAPER = "#F3F5F9";
const INK = "#2E3440";
const ACCENT = "#5E81AC";
const FROST = "#8FBCBB";
const MUTED = "#4C566A";
const BORDER = "#D8DCE3";

const statusColor: Record<string, string> = {
  live: "#A3BE8C",
  "in-development": "#EBCB8B",
  shipped: "#88C0D0",
  archived: "#4C566A",
};
const statusLabel: Record<string, string> = {
  live: "Live",
  "in-development": "In development",
  shipped: "Shipped",
  archived: "Archived",
};

export default async function ProjectOpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  const [regular, bold, italic, boldItalic] = await Promise.all([
    loadFont("AnonymousPro-Regular.ttf"),
    loadFont("AnonymousPro-Bold.ttf"),
    loadFont("AnonymousPro-Italic.ttf"),
    loadFont("AnonymousPro-BoldItalic.ttf"),
  ]);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: PAPER,
            color: INK,
            fontFamily: "AnonymousPro",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          Not found.
        </div>
      ),
      {
        ...size,
        fonts: [
          { name: "AnonymousPro", data: bold, weight: 700, style: "normal" },
        ],
      },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "AnonymousPro",
          backgroundColor: PAPER,
          backgroundImage: `
            radial-gradient(ellipse at top left, rgba(94,129,172,0.10), transparent 55%),
            radial-gradient(ellipse at bottom right, rgba(143,188,187,0.10), transparent 55%),
            linear-gradient(to right, ${BORDER}55 1px, transparent 1px),
            linear-gradient(to bottom, ${BORDER}55 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 80px 80px, 80px 80px",
          padding: 72,
          position: "relative",
        }}
      >
        {/* Giant background badge */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -30,
            fontSize: 540,
            fontWeight: 700,
            lineHeight: 0.85,
            color: ACCENT,
            opacity: 0.07,
            display: "flex",
            letterSpacing: -20,
          }}
        >
          {project.badge}
        </div>

        {/* Top strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: ACCENT,
                color: PAPER,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: -1,
              }}
            >
              CL
            </div>
            <div
              style={{
                fontSize: 18,
                color: MUTED,
                letterSpacing: 4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              caleblamoreaux.com · projects
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              color: MUTED,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: statusColor[project.status],
              }}
            />
            {statusLabel[project.status]}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        {/* Org / Year */}
        <div
          style={{
            fontSize: 22,
            color: ACCENT,
            letterSpacing: 6,
            textTransform: "uppercase",
            display: "flex",
            gap: 16,
          }}
        >
          <span>{project.org}</span>
          <span style={{ color: BORDER }}>·</span>
          <span>{project.year}</span>
          <span style={{ color: BORDER }}>·</span>
          <span>{project.role}</span>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 12,
            fontSize: 132,
            fontWeight: 700,
            color: INK,
            letterSpacing: -4,
            lineHeight: 1,
            display: "flex",
          }}
        >
          {project.title}
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: MUTED,
            lineHeight: 1.35,
            maxWidth: 900,
            display: "flex",
          }}
        >
          {project.tagline}
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            paddingTop: 24,
            borderTop: `1px solid ${BORDER}`,
            flexWrap: "wrap",
          }}
        >
          {project.stack.slice(0, 6).map((tag) => (
            <div
              key={tag}
              style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 18,
                color: MUTED,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "AnonymousPro", data: regular, weight: 400, style: "normal" },
        { name: "AnonymousPro", data: bold, weight: 700, style: "normal" },
        { name: "AnonymousPro", data: italic, weight: 400, style: "italic" },
        {
          name: "AnonymousPro",
          data: boldItalic,
          weight: 700,
          style: "italic",
        },
      ],
    },
  );
}
