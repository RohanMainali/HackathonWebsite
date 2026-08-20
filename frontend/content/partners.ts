export type Partner = {
  name: string;
  category: string;
  contribution: string;
  description: string;
  logo?: string;
  href?: string;
};

export const partners: Partner[] = [
  {
    name: "IIMS College",
    category: "Host & Title Sponsor",
    contribution: "Campus venue, academic hosting, and event title sponsorship",
    description: "Academic host and title sponsor providing campus venue infrastructure, institutional facilities, and student community coordination for flagship hackathon editions.",
    logo: "",
  },
  {
    name: "Turboline AI",
    category: "Resource, Prize & Challenge Partner",
    contribution: "GPU compute resources, AI credits, prize pool funding, and sports/media challenge statements",
    description: "AI platform and resource partner providing high-performance GPU compute, AI credits, competitive cash prize pool funding, and real-world sports intelligence problem statements.",
    logo: "",
  },
  {
    name: "Perceptron AI",
    category: "Resource & Platform Partner",
    contribution: "GPU compute credits, Auta annotation platform, and dataset-first challenge tracks",
    description: "AI infrastructure and resource partner providing developer access to GPU compute, AI credits, dataset annotation tooling (Auta), and specialized computer-vision challenge tracks.",
    logo: "",
  },
  {
    name: "ACME Software",
    category: "Event & Merchandise Partner",
    contribution: "Participant t-shirts, event kits, badges, and production gear",
    description: "Event operations and merchandise sponsor powering high-quality developer t-shirts, custom swag, participant welcome kits, and on-ground branding gear.",
    logo: "",
  },
];

export const sponsorshipRoles = [
  {
    title: "Host & Title Sponsor",
    partner: "IIMS College",
    details: "Provided campus infrastructure, keynote auditoriums, high-bandwidth networks, and foundational title sponsorship.",
    badge: "Title Host",
  },
  {
    title: "Resource & AI Compute Partners",
    partner: "Turboline AI & Perceptron AI",
    details: "Provided high-performance GPU compute instances, AI platform credits, developer toolchains, and dataset annotation platforms (Auta).",
    badge: "GPU & AI Credits",
  },
  {
    title: "Prize Sponsor",
    partner: "Turboline AI",
    details: "Funded direct prize pools and competitive participant cash awards across international build sprints.",
    badge: "Prize Pool",
  },
  {
    title: "Problem Statement Partners",
    partner: "Turboline AI & Perceptron AI",
    details: "Crafted complex industry problem statements across computer vision, athlete tracking, autonomous models, and dataset collection.",
    badge: "Challenge Design",
  },
  {
    title: "Event & Swag Partner",
    partner: "ACME Software",
    details: "Sponsored custom developer t-shirts, event merchandise, participant badges, and operational materials.",
    badge: "Merch & Gear",
  },
];


