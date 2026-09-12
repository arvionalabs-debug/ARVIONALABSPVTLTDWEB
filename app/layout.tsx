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
    default: "Arviona Labs — Cognitive Learning Intelligence",
    template: "%s — Arviona Labs",
  },
  description:
    "Arviona Labs is building Cognitive Learning Intelligence for scalable hyper-personalized learning. Every learner is different. Learning should be too.",
  keywords: [
    "Cognitive Learning Intelligence",
    "adaptive learning",
    "learner modeling",
    "knowledge tracing",
    "personalized learning",
    "Arviona Labs",
  ],
  openGraph: {
    title: "Arviona Labs — Cognitive Learning Intelligence",
    description:
      "Building Cognitive Learning Intelligence for scalable hyper-personalized learning.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        {/* Scroll-triggered reveals are inline-styled by the animation library.
            Without JS they would never un-hide, so force them visible. */}
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
