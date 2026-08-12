"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/content/hackathons";
import { MediaFrame } from "@/components/media/MediaFrame";

export function CaseStudyGallery({ items }: { items: MediaItem[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    if (selected === null) return;
    const trigger = triggerRefs.current[selected];
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((selected + 1) % items.length);
      if (event.key === "ArrowLeft") setSelected((selected - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden"; closeRef.current?.focus(); window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); trigger?.focus(); };
  }, [selected, items.length]);

  return <><div className="gallery-grid">{items.map((item, index) => <button key={item.caption} ref={(el) => { triggerRefs.current[index] = el; }} type="button" className={`gallery-item gallery-item--${item.aspect}`} onClick={() => setSelected(index)} aria-label={`Open image: ${item.caption}`}><MediaFrame {...item} /></button>)}</div>
    {selected !== null && <div className="modal gallery-modal" role="dialog" aria-modal="true" aria-label="Project image gallery"><div className="modal__panel"><button ref={closeRef} className="modal__close" type="button" onClick={() => setSelected(null)}>Close ×</button><MediaFrame {...items[selected]} className="gallery-modal__media" /><div className="gallery-modal__nav"><button type="button" onClick={() => setSelected((selected - 1 + items.length) % items.length)}>← Previous</button><span>{selected + 1} / {items.length}</span><button type="button" onClick={() => setSelected((selected + 1) % items.length)}>Next →</button></div></div></div>}
  </>;
}
