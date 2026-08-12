"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
    <button ref={buttonRef} className={`menu-button ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
      <span>{open ? "Close" : "Menu"}</span>
      <span className="menu-button__icon" aria-hidden="true"><span /><span /></span>
    </button>
    {open && createPortal(<div id="mobile-menu" ref={panelRef} className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <nav aria-label="Mobile navigation">{navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}</nav>
      <a className="button button--primary" href="/contact" onClick={() => setOpen(false)}>Plan a hackathon <span aria-hidden="true">↗</span></a>
    </div>, document.body)}
  </div>;
}
