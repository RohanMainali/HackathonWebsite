export const siteConfig = {
  name: "Everest Hacks",
  shortName: "EH",
  tagline: "From first brief to final demo.",
  description:
    "We help institutions design and deliver high-impact hackathons from the first brief to the final demo.",
  contact: {
    email: "rohanmainali@gmail.com",
    phone: "+977 9866265252",
    location: "Kathmandu, Nepal",
  },
  socials: {
    linkedin: "",
    instagram: "",
    youtube: "",
  },
  heroMedia: {
    type: "image" as "image" | "video",
    imageSrc: "/images/site/home-hero.jpg",
    videoSrc: "",
    posterSrc: "",
    alt: "A busy hackathon venue with participant teams collaborating around laptops",
    caption: "",
  },
  showreel: {
    videoSrc: "",
    posterSrc: "",
    caption: "Event showreel placeholder",
    placeholder: true,
  },
  baseUrl: "https://example.com",
  mainCta: { label: "Plan a hackathon", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/work" },
} as const;

export type SiteConfig = typeof siteConfig;
