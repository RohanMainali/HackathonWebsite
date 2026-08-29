export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  department: "Leadership" | "Engineering" | "Operations" | "Community" | "Design";
  badge?: string;
  focus?: string[];
  color?: "blue" | "orange" | "mint" | "yellow";
};

export const team: TeamMember[] = [
  {
    name: "Rohan Mainali",
    role: "Co-Founder & Strategy Lead",
    image: "/images/team/rohan-mainali.jpg",
    department: "Leadership",
    badge: "Co-Founder",
    focus: ["Hackathon Architecture", "University Partnerships", "Ecosystem Strategy"],
    bio: "Directs end-to-end hackathon design, institutional partnerships, and competitive formats. Experienced in producing multi-day innovation sprints and national AI competitions.",
    color: "blue",
  },
  {
    name: "Soyam Shrestha",
    role: "Co-Founder & AI Systems Lead",
    image: "/images/team/soyam-shrestha.jpg",
    department: "Leadership",
    badge: "Co-Founder",
    focus: ["Model Evaluation", "AI Challenge Design", "Technical Architecture"],
    bio: "Oversees challenge formulation, AI model evaluation criteria, and technical infrastructure for machine learning hackathons and developer sprints.",
    color: "orange",
  },
  {
    name: "Safal Lohani",
    role: "Head of Operations & Logistics",
    image: "/images/team/safal-lohani.jpeg",
    department: "Operations",
    badge: "Operations Lead",
    focus: ["Participant Logistics", "Registration Pipelines", "On-Ground Management"],
    bio: "Manages registration systems, participant experience, residential logistics, and live on-ground operations across high-intensity multi-day events.",
    color: "mint",
  },
  {
    name: "Nishchal Karki",
    role: "Lead Platform & Infrastructure Architect",
    image: "/images/team/nishchal-karki.jpg",
    department: "Engineering",
    badge: "Infrastructure",
    focus: ["Cloud Infrastructure", "Judging Pipelines", "Platform Reliability"],
    bio: "Architects resilient event systems, judging and scoring platforms, network stability, and developer environments under live competition pressure.",
    color: "yellow",
  },
  {
    name: "Shrutika Sharma",
    role: "Community & Experience Director",
    image: "/images/team/shrutika-sharma.jpg",
    department: "Community",
    badge: "Experience",
    focus: ["Builder Community", "Mentor Alignment", "Participant Onboarding"],
    bio: "Champions participant success, mentor engagement, and community culture to ensure every builder operates in an inspiring and inclusive environment.",
    color: "orange",
  },
  {
    name: "Prashamsa Giri",
    role: "Program & Sprint Manager",
    image: "/images/team/prashamsa-giri.jpg",
    department: "Operations",
    badge: "Program Management",
    focus: ["Sprint Timelines", "Milestone Tracking", "Multi-Track Coordination"],
    bio: "Orchestrates sprint milestones, live schedule adherence, cross-track deliverables, and sponsor touchpoints throughout intense 48-hour build cycles.",
    color: "blue",
  },
  {
    name: "Reshika Thapa",
    role: "Creative Director & Brand Design",
    image: "/images/team/reshika-thapa.png",
    department: "Design",
    badge: "Creative Lead",
    focus: ["Visual Identity", "Stage & Spatial Design", "Media Production"],
    bio: "Directs visual brand systems, stage production, digital aesthetics, and live presentation standards that elevate each hackathon's presence.",
    color: "mint",
  },
  {
    name: "Rija Shrestha",
    role: "Developer Relations & Mentorship Lead",
    image: "/images/team/rija-shrestha.png",
    department: "Community",
    badge: "DevRel",
    focus: ["Technical Mentorship", "Cross-Cohort Support", "DevRel Strategy"],
    bio: "Bridges the gap between industry mentors and student teams, coordinating technical debug sessions and workshop tracks during sprints.",
    color: "yellow",
  },
  {
    name: "Runa Maharjan",
    role: "Research & Track Innovation Lead",
    image: "/images/team/runa-maharjan.jpg",
    department: "Engineering",
    badge: "AI Research",
    focus: ["Problem Framing", "Dataset Guidelines", "Applied AI Research"],
    bio: "Curates specialized research tracks, dataset curation rubrics, and industry challenge statements spanning computer vision, remote sensing, and emerging tech.",
    color: "blue",
  },
  {
    name: "Samyak Bajracharya",
    role: "Platform Engineer & Tooling Specialist",
    image: "/images/team/samyak-bajracharya.jpg",
    department: "Engineering",
    badge: "Platform Tooling",
    focus: ["Submission Verification", "Developer Tooling", "Demo Staging"],
    bio: "Builds automated submission verification pipelines, local development environments, and live demo staging platforms for competitive build tracks.",
    color: "orange",
  },
];

