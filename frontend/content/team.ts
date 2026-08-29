export const teamCategories = ["Leadership", "Technology", "Operations", "Programs & Research", "Marketing"] as const;

export type TeamCategory = (typeof teamCategories)[number];
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  category: TeamCategory;
  position?: string;
};

export const team: TeamMember[] = [
  { name: "Rohan Mainali", role: "Co-Founder & Strategy Lead", image: "/images/team/rohan-mainali.jpg", category: "Leadership" },
  { name: "Soyam Shrestha", role: "Tech & Systems Lead", image: "/images/team/soyam-shrestha.jpg", category: "Technology" },
  { name: "Safal Lohani", role: "Head of Operations & Logistics", image: "/images/team/safal-lohani.jpeg", category: "Operations" },
  { name: "Nishchal Panta", role: "Technical Event Specialist", image: "/images/team/nishchal-panta.jpg", category: "Technology", position: "center 12%" },
  { name: "Shrutika Ojha", role: "Event Production Manager", image: "/images/team/shrutika-ojha.jpg", category: "Operations", position: "center 24%" },
  { name: "Prashamsa Ghimire", role: "Project Manager", image: "/images/team/prashamsa-ghimire.jpg", category: "Programs & Research" },
  { name: "Reshika Dhakal", role: "Event Manager", image: "/images/team/reshika-dhakal.png", category: "Operations", position: "center 35%" },
  { name: "Rija Bhomi", role: "Event Operations Coordinator", image: "/images/team/rija-bhomi.png", category: "Operations" },
  { name: "Runa Maphu", role: "Research & Track Innovation Lead", image: "/images/team/runa-maphu.jpg", category: "Programs & Research" },
  { name: "Samyak Adhikari", role: "Marketing & Communications Manager", image: "/images/team/samyak-adhikari.jpg", category: "Marketing", position: "center 24%" },
];
