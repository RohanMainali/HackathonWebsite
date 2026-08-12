"use client";

import { useEffect, useRef, useState } from "react";
import { MediaFrame } from "./MediaFrame";

export function VideoLightbox({ src, poster, caption, placeholder = false }: { src?: string; poster?: string; caption: string; placeholder?: boolean }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); trigger?.focus(); };
  }, [open]);

  if (!src) {
    return <div className="showreel-placeholder"><MediaFrame src={poster} fallbackLabel="Showreel poster" caption={caption} aspect="wide" color="orange" />{placeholder && <span className="dev-label">VIDEO PLACEHOLDER / ADD SOURCE TO ENABLE</span>}</div>;
  }

  return (
    <>
      <button ref={triggerRef} className="video-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Play ${caption}`}>
        <MediaFrame src={poster} fallbackLabel="Showreel poster" caption={caption} aspect="wide" color="orange" />
        <span className="video-trigger__play" aria-hidden="true">▶</span>
      </button>
      {open && <div className="modal" role="dialog" aria-modal="true" aria-label={caption}>
        <div className="modal__panel">
          <button ref={closeRef} className="modal__close" type="button" onClick={() => setOpen(false)} aria-label="Close video">Close ×</button>
          <video src={src} poster={poster} controls playsInline preload="metadata"><track kind="captions" /></video>
        </div>
      </div>}
    </>
  );
}
