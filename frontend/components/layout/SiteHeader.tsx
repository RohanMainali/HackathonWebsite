"use client";

import Image from "next/image";
import { ParticipateDropdown } from "@/components/navigation/ParticipateDropdown";
import { navigation } from "@/content/navigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function SiteHeader() {
  return (
    <header className="rebuild-header">
      <div className="site-shell rebuild-header-inner">
        <a href="/" className="rebuild-brand" aria-label="Amatrix Labs home">
          <Image
            src="/images/site/logo.webp"
            alt=""
            width={1421}
            height={278}
            priority
          />
        </a>
        <nav className="rebuild-nav" aria-label="Primary navigation">
          {navigation.map((item) =>
            item.href === "/participate" ? (
              <ParticipateDropdown key={item.href} />
            ) : (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>
        <a className="header-contact" href="/participate">
          Get involved
        </a>
        <MobileNavigation />
      </div>
    </header>
  );
}
