export const siteConfig = {
  name: "Amatrix Labs",
  shortName: "AL",
  tagline: "From first brief to final demo.",
  description:
    "We help institutions design and deliver high-impact hackathons, applied research, IoT, robotics, and hands-on technical training from the first brief to the final demo.",
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
