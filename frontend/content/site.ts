export const siteConfig = {
  name: "[COMPANY_NAME]",
  shortName: "HC",
  tagline: "From first brief to final demo.",
  description:
    "We help institutions design and deliver high-impact hackathons—from the first brief to the final demo.",
  contact: {
    email: "[CONTACT_EMAIL]",
    phone: "[PHONE_NUMBER]",
    location: "[LOCATION]",
  },
  socials: {
    linkedin: "",
    instagram: "",
    youtube: "",
  },
  heroMedia: {
    type: "image" as "image" | "video",
    imageSrc: "",
    videoSrc: "",
    posterSrc: "",
    alt: "Participants collaborating during a hackathon",
    caption: "Teams building together / Event media placeholder",
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
