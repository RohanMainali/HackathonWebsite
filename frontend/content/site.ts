export const siteConfig = {
  name: "Amatrix Labs",
  shortName: "AL",
  tagline: "Ideas. People. Impact.",
  description:
    "We bring ideas and people together through ideathons and hackathons, speakers and community, research and innovation.",
  contact: {
    email: "contact@amatrixlabs.com",
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
    videoSrc: "/images/site/showreel.mp4",
    posterSrc: "/images/site/showreel-poster.jpg",
    caption: "Inside the hackathon",
    placeholder: false,
  },
  baseUrl: "https://everesthacks.vercel.app",
  mainCta: { label: "Plan a hackathon", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/work" },
} as const;

export type SiteConfig = typeof siteConfig;
