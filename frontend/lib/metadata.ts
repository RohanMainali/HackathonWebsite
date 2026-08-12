import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteConfig.baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website", images: [{ url: `${siteConfig.baseUrl}/og.png`, width: 1200, height: 630, alt: `${siteConfig.name}: Hackathon strategy and production` }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.baseUrl}/og.png`] },
  };
}
