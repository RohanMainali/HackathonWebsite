export const teamCategories = ["Strategy", "Technology", "Operations", "Programs & Research", "Marketing"] as const;

export type TeamCategory = (typeof teamCategories)[number];
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  category: TeamCategory;
  position?: string;
};

export const team: TeamMember[] = [
  { name: "Rohan Mainali", role: "Strategy Officer", image: "/images/team/rohan-mainali.jpg", category: "Strategy" },
  { name: "Soyam Shrestha", role: "Technology & Systems Officer", image: "/images/team/soyam-shrestha.jpg", category: "Technology" },
  { name: "Safal Lohani", role: "Operations & Logistics Officer", image: "/images/team/safal-lohani.jpeg", category: "Operations" },
  { name: "Nishchal Panta", role: "Technical Events Officer", image: "/images/team/nishchal-panta.jpg", category: "Technology", position: "center 12%" },
  { name: "Shrutika Ojha", role: "Event Production Officer", image: "/images/team/shrutika-ojha.jpg", category: "Operations", position: "center 24%" },
  { name: "Prashamsa Ghimire", role: "Project Officer", image: "/images/team/prashamsa-ghimire.jpg", category: "Programs & Research" },
  { name: "Reshika Dhakal", role: "Events Officer", image: "/images/team/reshika-dhakal.png", category: "Operations", position: "center 35%" },
  { name: "Rija Bhomi", role: "Event Operations Officer", image: "/images/team/rija-bhomi.png", category: "Operations" },
  { name: "Runa Maphu", role: "Research & Innovation Officer", image: "/images/team/runa-maphu.jpg", category: "Programs & Research" },
  { name: "Samyak Adhikari", role: "Marketing & Communications Officer", image: "/images/team/samyak-adhikari.jpg", category: "Marketing", position: "center 24%" },
];
