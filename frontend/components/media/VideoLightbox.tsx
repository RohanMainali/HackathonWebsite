import { MediaFrame } from "./MediaFrame";

export function VideoLightbox({ src, poster, caption, placeholder = false }: { src?: string; poster?: string; caption: string; placeholder?: boolean }) {
  if (!src) {
    return <div className="showreel-placeholder"><MediaFrame src={poster} fallbackLabel="Showreel poster" caption={caption} aspect="wide" color="orange" />{placeholder && <span className="dev-label">VIDEO PLACEHOLDER / ADD SOURCE TO ENABLE</span>}</div>;
  }

  return <figure className="showreel-video">
    <video src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-label={caption} />
    <figcaption>{caption}</figcaption>
  </figure>;
}
