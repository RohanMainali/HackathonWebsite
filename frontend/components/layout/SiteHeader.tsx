"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { navigation } from "@/content/navigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="site-header__inner">
      <a href="/" className="brand" aria-label={`${siteConfig.name} home`}><Image src="/logo0.webp" alt={siteConfig.name} width={150} height={29} className="brand__img" priority /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-cta" href="/contact">Plan a hackathon <span aria-hidden="true">↗</span></a>
      <MobileNavigation />
    </div>
  </header>;
}
