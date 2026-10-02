import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { contactPages } from "@/content/contact-pages";
import { hackathons } from "@/content/hackathons";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/community",
    "/participate",
    "/programs",
    "/lifeline-nepal-2027",
    "/work",
    "/services",
    "/hackathons",
    "/speakers",
    "/research",
    "/technology",
    "/sponsors",
    "/partners",
    "/about",
    "/contact",
    ...Object.keys(contactPages).map((section) => `/contact/${section}`),
    "/privacy",
  ];
  return [
    ...routes.map((path) => ({
      url: `${siteConfig.baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...hackathons.map(({ slug }) => ({
      url: `${siteConfig.baseUrl}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
