import type { Metadata } from "next";
import "./globals.css";
import { ZiggyZap } from "@/components/ZiggyZap";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// ─────────────────────────────────────────────────────────────────────────────
// Site-level metadata
// ─────────────────────────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lisagalea.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lisa Galea | Creative Leadership & Human-Centred AI",
    template: "%s | Lisa Galea",
  },
  description:
    "Creative leadership consultant, facilitator, and AI strategist. " +
    "More brains. Less bollocks. All heart.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Lisa Galea",
    title: "Lisa Galea | Creative Leadership & Human-Centred AI",
    description:
      "Creative leadership consultant, facilitator, and AI strategist. " +
      "More brains. Less bollocks. All heart.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisa Galea | Creative Leadership & Human-Centred AI",
    description:
      "Creative leadership consultant, facilitator, and AI strategist. " +
      "More brains. Less bollocks. All heart.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD — Person schema (site-wide; appears on every page)
// Validates at: https://validator.schema.org
// ─────────────────────────────────────────────────────────────────────────────

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lisa Galea",
  url: siteUrl,
  jobTitle: "Creative Leadership Consultant & Human-Centred AI Strategist",
  description:
    "Lisa Galea works with organisations to unlock human potential through " +
    "the art and science of play — blending behavioural design, AI literacy, " +
    "and creative facilitation to build more adaptive, courageous teams.",
  knowsAbout: [
    "Creative Leadership",
    "Human-Centred AI",
    "Behavioural Design",
    "Facilitation",
    "Executive Coaching",
    "Keynote Speaking",
    "Organisational Culture",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Ogilvy Certified",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Brené Brown Dare to Lead Facilitator",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Cannes Lions Certified",
    },
  ],
  // Add your social profiles here once confirmed:
  // sameAs: ["https://www.linkedin.com/in/lisagalea", "https://..."],
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const adobeKitId = process.env.NEXT_PUBLIC_ADOBE_KIT_ID;

  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        {/*
         * Adobe Fonts (Typekit) — loads Playfair Display, Futura PT family,
         * and Museo Sans Condensed.
         *
         * Setup:
         *   1. Go to https://fonts.adobe.com → Web Projects
         *   2. Create a kit with the required fonts
         *   3. Copy the Kit ID (e.g. "abc1def") into NEXT_PUBLIC_ADOBE_KIT_ID
         */}
        {adobeKitId ? (
          <>
            <link rel="preconnect" href="https://use.typekit.net" />
            <link
              rel="stylesheet"
              href={`https://use.typekit.net/${adobeKitId}.css`}
            />
          </>
        ) : (
          /* Fallback hint during development — remove in production once kit is wired */
          process.env.NODE_ENV === "development" && (
            <meta name="x-font-status" content="adobe-kit-not-configured" />
          )
        )}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}

        {/* ZiggyZap — AI Concierge widget (renders on every page) */}
        <ErrorBoundary>
          <ZiggyZap />
        </ErrorBoundary>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
