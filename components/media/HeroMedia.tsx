"use client";

import { useEffect, useState } from "react";
import { MediaFrame } from "./MediaFrame";

export function HeroMedia({ media }: { media: { type: "image" | "video"; imageSrc: string; videoSrc: string; posterSrc: string; alt: string; caption: string } }) {
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 640px)");
    const update = () => setAllowVideo(media.type === "video" && !!media.videoSrc && !reduced.matches && !mobile.matches);
    update();
    reduced.addEventListener("change", update);
    mobile.addEventListener("change", update);
    return () => { reduced.removeEventListener("change", update); mobile.removeEventListener("change", update); };
  }, [media.type, media.videoSrc]);

  if (allowVideo) {
    return <figure className="media-frame hero-video"><video src={media.videoSrc} poster={media.posterSrc || media.imageSrc} muted loop playsInline autoPlay preload="metadata" aria-hidden="true" /><figcaption>{media.caption}</figcaption></figure>;
  }

  return <MediaFrame src={media.imageSrc || media.posterSrc} alt={media.alt} caption={media.caption} fallbackLabel="Hero event media" aspect="wide" color="blue" priority />;
}
