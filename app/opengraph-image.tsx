import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const alt =
  "Caleb Lamoreaux — Full-stack engineer & founder of Triforce Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

export default async function OpengraphImage() {
  const [regular, bold, italic, boldItalic] = await Promise.all([
    loadFont("AnonymousPro-Regular.ttf"),
    loadFont("AnonymousPro-Bold.ttf"),
    loadFont("AnonymousPro-Italic.ttf"),
    loadFont("AnonymousPro-BoldItalic.ttf"),
  ]);

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
        {/* Decorative folio "01" */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            fontSize: 220,
            fontWeight: 700,
            lineHeight: 1,
            color: INK,
            opacity: 0.04,
            display: "flex",
          }}
        >
          01
        </div>

        {/* Top brand strip */}
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
                width: 54,
                height: 54,
                backgroundColor: ACCENT,
                color: PAPER,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: -2,
              }}
            >
              CL
            </div>
            <div
              style={{
                fontFamily: "AnonymousPro",
                fontSize: 20,
                color: MUTED,
                letterSpacing: 4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              caleblamoreaux.com
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              color: MUTED,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#A3BE8C",
              }}
            />
            Available for new work
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          <div
            style={{
              fontSize: 148,
              fontWeight: 700,
              color: INK,
              display: "flex",
            }}
          >
            Caleb
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <div
              style={{
                fontSize: 148,
                fontWeight: 700,
                fontStyle: "italic",
                color: ACCENT,
                display: "flex",
              }}
            >
              Lamoreaux
            </div>
            <div
              style={{
                fontSize: 148,
                fontWeight: 700,
                color: INK,
                opacity: 0.3,
                display: "flex",
              }}
            >
              .
            </div>
          </div>
        </div>

        {/* Subhead */}
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: MUTED,
            lineHeight: 1.4,
            maxWidth: 940,
            display: "flex",
          }}
        >
          Full-stack engineer. Founder of Triforce Software. Lead engineer at On
          Q Property Management.
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Bottom row — tags */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            paddingTop: 28,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {["Next.js", "TypeScript", "Claude", "PostgreSQL", "AWS"].map(
            (tag) => (
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
            ),
          )}
          <div style={{ flex: 1, display: "flex" }} />
          <div
            style={{
              fontSize: 18,
              color: FROST,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            portfolio · 2026
          </div>
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
