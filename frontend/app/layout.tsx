import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: `${siteConfig.name}: End-to-End Hackathon Strategy and Production`, template: `%s | ${siteConfig.name}` },
  description: `${siteConfig.name} helps universities, companies and institutions design and run successful hackathons, innovation programs, bootcamps, mentorship initiatives and AI projects.`,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], name: siteConfig.name, url: siteConfig.baseUrl, description: siteConfig.description, email: siteConfig.contact.email };
  return <html lang="en"><body className={`${manrope.variable} ${instrument.variable}`}><SkipLink /><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
