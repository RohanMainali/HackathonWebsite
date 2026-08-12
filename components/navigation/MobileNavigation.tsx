"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = buttonRef.current;
    document.body.style.overflow = "hidden";
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>('a, button');
    focusables?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && focusables?.length) {
        const first = focusables[0]; const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); trigger?.focus(); };
  }, [open]);

  return <div className="mobile-nav">
    <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><span aria-hidden="true">{open ? "×" : "＋"}</span></button>
    {open && <div id="mobile-menu" ref={panelRef} className="mobile-nav__panel">
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}</nav>
      <Link className="button button--primary" href="/contact" onClick={() => setOpen(false)}>Plan a hackathon <span aria-hidden="true">↗</span></Link>
    </div>}
  </div>;
}
