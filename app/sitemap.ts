import type { MetadataRoute } from "next";

const baseUrl = "https://thenurseshandbook.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/disclaimer",
    "/terms",
    "/privacy",
    "/references",
    "/tools/news2-score",
    "/tools/iv-drip-rate-calculator",
    "/tools/liquid-dose-calculator",
    "/tools/tablet-capsule-calculator",
    "/tools/medication-unit-converter",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/tools") ? 0.8 : 0.6,
  }));
}