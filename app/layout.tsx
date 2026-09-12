import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arvionalabs.com"),
  title: {
    default: "Arviona Labs — Cognitive Learning Intelligence | Hyper-Personalized Learning",
    template: "%s — Arviona Labs",
  },
  description:
    "Arviona Labs Pvt Ltd is a deep-tech education startup building Cognitive Learning Intelligence for scalable hyper-personalized learning. Founded by Andrew Surjit Ronald.",
  applicationName: "Arviona Labs",
  authors: [{ name: "Andrew Surjit Ronald", url: "https://arvionalabs.com/about" }],
  generator: "Next.js",
  keywords: [
    "Arviona Labs",
    "Arviona",
    "Arviona Labs Pvt Ltd",
    "Andrew Surjit Ronald",
    "Cognitive Learning Intelligence",
    "adaptive learning technology",
    "hyper-personalized learning",
    "AI education startup India",
    "Edu Tour 2026",
    "personalized learning infrastructure",
    "smart classroom AI",
    "deep-tech education",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Andrew Surjit Ronald",
  publisher: "Arviona Labs Pvt Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://arvionalabs.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arvionalabs.com",
    siteName: "Arviona Labs",
    title: "Arviona Labs — Cognitive Learning Intelligence",
    description:
      "Arviona Labs is building Cognitive Learning Intelligence for scalable hyper-personalized learning. Every learner is different. Learning should be too.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arviona Labs — Cognitive Learning Intelligence",
    description:
      "Deep-tech education startup building Cognitive Learning Intelligence for scalable hyper-personalized learning.",
    creator: "@arvionalabs",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
  width: "device-width",
  initialScale: 1,
};

// Google Schema.org JSON-LD Structured Data for Google Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arvionalabs.com/#organization",
      "name": "Arviona Labs",
      "legalName": "Arviona Labs Pvt Ltd",
      "url": "https://arvionalabs.com",
      "logo": "https://arvionalabs.com/icon.svg",
      "founder": {
        "@type": "Person",
        "name": "Andrew Surjit Ronald",
        "jobTitle": "Founder",
        "url": "https://arvionalabs.com/about"
      },
      "description": "Deep-tech education startup building Cognitive Learning Intelligence for scalable hyper-personalized learning.",
      "sameAs": [
        "https://www.linkedin.com/company/arvionalabs",
        "https://github.com/arvionalabs-debug"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://arvionalabs.com/#website",
      "url": "https://arvionalabs.com",
      "name": "Arviona Labs",
      "publisher": {
        "@id": "https://arvionalabs.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        {/* Google Structured Data / Knowledge Graph Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Scroll-triggered reveals fallback for non-JS */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
