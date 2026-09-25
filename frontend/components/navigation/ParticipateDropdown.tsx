"use client";

import { useEffect, useId, useRef, useState } from "react";

export function ParticipateDropdown({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        buttonRef.current?.focus();
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
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        Participate
      </button>
      {open && (
        <div className="participate-dropdown__panel" id={id}>
          <p>Upcoming hackathon</p>
          <a
            href="/lifeline-nepal-2027"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            <strong>Lifeline Nepal · 2027</strong>
            <span>Early 2027 · Register interest</span>
          </a>
          <a
            href="/hackathons"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            Explore hackathons
          </a>
        </div>
      )}
    </div>
  );
}
