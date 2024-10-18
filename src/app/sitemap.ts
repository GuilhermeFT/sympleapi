import type { MetadataRoute } from "next";

import { env } from "@/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = env.NEXT_PUBLIC_URL;

  const defaultSitemap: MetadataRoute.Sitemap = [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: new URL("/wait-list", url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...defaultSitemap];
}
