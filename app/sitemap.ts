import type { MetadataRoute } from "next";

const ROUTES = [
  "",
  "/platform",
  "/intelligence",
  "/edu-tour",
  "/schools",
  "/about",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `https://arvionalabs.com${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : r === "/edu-tour" || r === "/schools" ? 0.9 : 0.7,
  }));
}
