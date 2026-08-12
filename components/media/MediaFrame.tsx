import Image from "next/image";
import type { MediaItem } from "@/content/hackathons";

type Props = Partial<MediaItem> & { priority?: boolean; className?: string };

export function MediaFrame({ src, alt = "", caption, aspect = "landscape", position = "center", fallbackLabel = "Event media", color = "blue", priority = false, className = "" }: Props) {
  return (
    <figure className={`media-frame media-frame--${aspect} ${className}`}>
      <div className={`media-frame__visual placeholder--${color}`}>
        {src ? (
          <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: position }} />
        ) : (
          <div className="media-placeholder" role="img" aria-label={alt || fallbackLabel}>
            <span className="media-placeholder__marker">*</span>
            <span className="media-placeholder__label">{fallbackLabel}</span>
            <span className="media-placeholder__rule" />
            <span className="media-placeholder__code">MEDIA / REPLACE</span>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
