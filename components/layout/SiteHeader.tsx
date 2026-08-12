"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { navigation } from "@/content/navigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="site-header__inner">
      <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}><span className="brand__mark">{siteConfig.shortName}</span><span className="brand__name">{siteConfig.name}</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link className="header-cta" href="/contact">Plan a hackathon <span aria-hidden="true">↗</span></Link>
      <MobileNavigation />
    </div>
  </header>;
}
