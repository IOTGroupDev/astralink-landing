import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://www.astra-link.app";
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${url}/sitemap.xml`,
  };
}
