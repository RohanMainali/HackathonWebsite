import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { hackathons } from "@/content/hackathons";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact", "/privacy"];
  return [...routes.map((path) => ({ url: `${siteConfig.baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })), ...hackathons.map(({ slug }) => ({ url: `${siteConfig.baseUrl}/work/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))];
}
