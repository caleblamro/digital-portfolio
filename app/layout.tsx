import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

// Editorial serif used sparingly for hero accents; AnonymousPro is the workhorse
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caleblamoreaux.com"),
  title: {
    default: "Caleb Lamoreaux — Full-Stack Engineer & Founder",
    template: "%s — Caleb Lamoreaux",
  },
  description:
    "Full-stack engineer, founder of Triforce Software, and lead engineer at On Q Property Management. I ship AI-first products and modern web platforms end-to-end.",
  keywords: [
    "Caleb Lamoreaux",
    "Triforce Software",
    "On Q Property Management",
    "Next.js",
    "TypeScript",
    "AI engineer",
    "Full-stack developer",
    "Doorline",
    "Forge",
    "Treemap",
  ],
  authors: [{ name: "Caleb Lamoreaux" }],
  creator: "Caleb Lamoreaux",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caleblamoreaux.com",
    siteName: "Caleb Lamoreaux",
    title: "Caleb Lamoreaux — Full-Stack Engineer & Founder",
    description:
      "Full-stack engineer, founder of Triforce Software, and lead engineer at On Q Property Management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Lamoreaux — Full-Stack Engineer & Founder",
    description:
      "Full-stack engineer, founder of Triforce Software, and lead engineer at On Q Property Management.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F4F8" },
    { media: "(prefers-color-scheme: dark)", color: "#2E3440" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fraunces.variable}>
      <body className="min-h-screen bg-background font-sans antialiased paper-texture">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={150}>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
