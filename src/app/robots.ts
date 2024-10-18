import type { MetadataRoute } from "next";

import { env } from "@/env";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const url = env.NEXT_PUBLIC_URL;

  return {
    host: env.NEXT_PUBLIC_URL,
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: new URL("/sitemap.xml", url).toString(),
  };
}
