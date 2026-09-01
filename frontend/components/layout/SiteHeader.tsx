"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { navigation } from "@/content/navigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDifference = currentScrollY - previousScrollY.current;

      setScrolled(currentScrollY > 16);

      if (currentScrollY <= 16) {
        setHidden(false);
      } else if (Math.abs(scrollDifference) >= 6) {
        setHidden(scrollDifference > 0);
      }

      previousScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
    <div className="site-header__inner">
      <a href="/" className="brand" aria-label={`${siteConfig.name} home`}><Image className="brand__logo" src="/images/site/logo.webp" alt="" width={1421} height={278} priority /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-cta" href="/contact">Plan a hackathon <span aria-hidden="true">↗</span></a>
      <MobileNavigation />
    </div>
  </header>;
}
