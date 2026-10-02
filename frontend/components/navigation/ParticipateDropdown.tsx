"use client";

import { useEffect, useId, useRef, useState } from "react";

export function ParticipateDropdown({
  onNavigate,
  mobile = false,
}: {
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    const root = rootRef.current;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        linkRef.current?.focus();
      }
    }
    root?.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      root?.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open]);

  return (
    <div
      className="participate-dropdown"
      ref={rootRef}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setOpen(false); }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <a ref={linkRef} href="/programs" aria-expanded={mobile || open} aria-controls={id}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); } }}
        onClick={() => { setOpen(false); onNavigate?.(); }}>Programs</a>
      {(mobile || open) && (
        <div className="participate-dropdown__panel" id={id}>
          <a href="/lifeline-nepal-2027" onClick={() => { setOpen(false); onNavigate?.(); }}>Lifeline Nepal</a>
          <a href="/programs#sports-analytics-2" onClick={() => { setOpen(false); onNavigate?.(); }}>Sports Analytics 2.0</a>
          <a href="/programs" onClick={() => { setOpen(false); onNavigate?.(); }}>Explore other programs</a>
        </div>
      )}
    </div>
  );
}
