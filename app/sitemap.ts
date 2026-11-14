import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wahyusatria.sec.id";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-14"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

