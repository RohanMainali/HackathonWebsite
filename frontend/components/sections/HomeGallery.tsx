"use client";
import { useState } from "react";
import Image from "next/image";
type Event = {
  title: string;
  slug: string;
  images: { src: string; alt: string }[];
};
export function HomeGallery({ events }: { events: Event[] }) {
  const [active, setActive] = useState(0);
  const selected = events[active];
  return (
    <div>
      <div className="gallery-switcher" aria-label="Choose an event">
        {events.map((event, i) => (
          <button
            type="button"
            key={event.slug}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {event.title
              .replace("International Hackathon ", "")
              .replace("Hackathon ", "")}
          </button>
        ))}
      </div>
      <div className="gallery-photos" aria-label={selected.title}>
        {selected.images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={700}
            height={600}
            sizes="(max-width: 700px) 50vw, 25vw"
          />
        ))}
      </div>
      <a
        className="community-text-link gallery-story"
        href={`/work/${selected.slug}`}
      >
        Explore {selected.title}
      </a>
    </div>
  );
}
