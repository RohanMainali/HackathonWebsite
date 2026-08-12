export type MediaItem = {
  src?: string;
  alt: string;
  caption: string;
  aspect?: "landscape" | "portrait" | "wide" | "square";
  position?: string;
  fallbackLabel: string;
  color?: "blue" | "orange" | "mint" | "yellow";
};

export type Hackathon = {
  slug: string;
  title: string;
  year: string;
  date?: string;
  category: string;
  format: string;
  duration: string;
  audience: string;
  location: string;
  summary: string;
  brief: string;
  approach: string;
  capabilities: string[];
  timeline: { label: string; description: string }[];
  coverImage: MediaItem;
  gallery: MediaItem[];
  video?: { src: string; poster: string; caption: string };
  outcomes: { title: string; description: string }[];
  testimonial?: { quote: string; name: string; role: string; organization: string };
  source?: { label: string; href: string };
};

const commonTimeline = [
  { label: "Planning", description: "Align the objectives, scope, format, and working plan." },
  { label: "Launch", description: "Introduce the program and open the participant journey." },
  { label: "Participant preparation", description: "Support teams with context, workshops, and clear communications." },
  { label: "Hackathon", description: "Run the build experience and keep teams moving." },
  { label: "Judging", description: "Coordinate submissions, review, and final demonstrations." },
  { label: "Follow-through", description: "Review outcomes and plan support for promising work." },
];

const capabilities = ["Program design", "Event identity", "Participant journey", "Mentor coordination", "Workshop planning", "Event production", "Submission workflow", "Judging support", "Media coordination", "Post-event review"];

function galleryFor(title: string, color: MediaItem["color"]): MediaItem[] {
  return ["01", "02", "03", "04", "05"].map((number, index) => ({
    alt: "",
    caption: `${title} / Gallery ${number}`,
    fallbackLabel: `${title} gallery ${number}`,
    aspect: index === 1 || index === 4 ? "portrait" : index === 2 ? "wide" : "landscape",
    color: index % 2 ? "mint" : color,
  }));
}

export const hackathons: Hackathon[] = [
  {
    slug: "iims-deep-learning-codefest",
    title: "IIMS Hackathon: Deep Learning Codefest",
    year: "2024",
    date: "July 7, 2024",
    category: "Student AI & deep learning hackathon",
    format: "In-person",
    duration: "10-hour continuous hackathon",
    audience: "Bachelor of Computer Science students across senior, junior, and fresher cohorts",
    location: "Aranya Boutique Hotel — Shivapuri Block",
    summary: "A 10-hour codefest bringing mixed-cohort BCS teams together to build deep-learning models for safer, more efficient autonomous vehicles.",
    brief: "IIMS College wanted students to move beyond classroom theory: apply deep-learning knowledge to a real-world problem, demonstrate their technical ability, and build practical AI and machine-learning experience in a competitive setting.",
    approach: "The program began with a 10-day AI and machine-learning bootcamp, followed by cross-cohort team registration, coding-environment setup, mentor briefings, and a final environment test. On hackathon day, teams researched, coded, tested, and presented autonomous-vehicle models before a judging panel.",
    capabilities: ["10-day AI & ML bootcamp", "Cross-cohort team formation", "Coding environment setup", "Mentor briefing", "Challenge delivery", "10-hour event production", "Participant engagement", "Presentation workflow", "Judging coordination", "Awards and recognition"],
    timeline: [
      { label: "Bootcamp", description: "A 10-day, three-phase AI and machine-learning bootcamp moved participants from theory toward practice." },
      { label: "Team registration", description: "Senior students, juniors, and freshers formed cross-cohort teams and registered against the event rules." },
      { label: "Environment setup", description: "The coding platform, links, internet access, layout, and execution pipelines were configured and mentors were briefed." },
      { label: "Environment test", description: "A final technical test confirmed that each team could work reliably before the competition began." },
      { label: "Hackathon day", description: "Teams spent 10 continuous hours researching, coding, and testing deep-learning models for autonomous vehicles." },
      { label: "Presentations & judging", description: "Teams presented to judges, who assessed accuracy, innovation, code quality, and presentation." },
      { label: "Awards", description: "The event recognized the best model, most innovative solution, outstanding presentation, and best team spirit." },
    ],
    coverImage: {
      src: "/images/hackathons/iims-codefest/iims-codefest-venue.jpg",
      alt: "Student teams working at laptops throughout the IIMS Deep Learning Codefest venue",
      caption: "The 10-hour Deep Learning Codefest at Aranya Boutique Hotel / Photography: IIMS College",
      fallbackLabel: "IIMS Deep Learning Codefest venue",
      aspect: "landscape",
      color: "blue",
    },
    gallery: [
      { src: "/images/hackathons/iims-codefest/mixed-cohort-team.jpg", alt: "A mixed-cohort student team at the Deep Learning Codefest", caption: "Cross-cohort team formation / Photography: IIMS College", fallbackLabel: "Mixed-cohort team", aspect: "landscape", color: "blue" },
      { src: "/images/hackathons/iims-codefest/mentor-support.jpg", alt: "A mentor speaking with a student team during the codefest", caption: "Mentor support in the room / Photography: IIMS College", fallbackLabel: "Mentor support", aspect: "portrait", color: "mint" },
      { src: "/images/hackathons/iims-codefest/team-coding.jpg", alt: "Students collaborating around laptops during the deep-learning challenge", caption: "Teams researched, coded, and tested throughout the day / Photography: IIMS College", fallbackLabel: "Team coding", aspect: "wide", color: "blue" },
      { src: "/images/hackathons/iims-codefest/collaboration.jpg", alt: "A student team and mentor reviewing work on several laptops", caption: "Collaborative model development / Photography: IIMS College", fallbackLabel: "Team collaboration", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/final-presentation.jpg", alt: "Students presenting their autonomous-vehicle model to the room", caption: "Final solution presentation / Photography: IIMS College", fallbackLabel: "Final presentation", aspect: "portrait", color: "blue" },
      { src: "/images/hackathons/iims-codefest/best-model-hacktastic.jpg", alt: "Team Hacktastic holding the Best Model award", caption: "Best Model — Team Hacktastic / Photography: IIMS College", fallbackLabel: "Best Model award", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/innovative-solution-hexaminner.jpg", alt: "Team Hexaminner holding the Innovative Solution award", caption: "Innovative Solution — Team Hexaminner / Photography: IIMS College", fallbackLabel: "Innovative Solution award", aspect: "wide", color: "blue" },
      { src: "/images/hackathons/iims-codefest/best-team-spirit-codex.jpg", alt: "Team CodeX holding the Best Team Spirit award", caption: "Best Team Spirit — Team CodeX / Photography: IIMS College", fallbackLabel: "Best Team Spirit award", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/outstanding-presentation.jpg", alt: "The recipients of the Outstanding Presentation award", caption: "Outstanding Presentation award / Photography: IIMS College", fallbackLabel: "Outstanding Presentation award", aspect: "landscape", color: "blue" },
    ],
    outcomes: [
      { title: "Applied deep learning", description: "Teams translated classroom knowledge into models that considered traffic patterns, road conditions, pedestrians, obstacles, and vehicle behaviour." },
      { title: "Rigorous technical practice", description: "Participants developed and tested their models against multiple datasets and scenarios before presenting their final approach." },
      { title: "Best Model", description: "Team Hacktastic received the award for Best Model." },
      { title: "Innovative Solution", description: "Team Hexaminner received the award for Innovative Solution." },
      { title: "Best Team Spirit", description: "Team CodeX received the award for Best Team Spirit, alongside a separate Outstanding Presentation award." },
    ],
    source: { label: "IIMS College event recap", href: "https://iimscollege.edu.np/news/iims-hackathon-deep-learning-codefest/" },
  },
  {
    slug: "hackathon-2", title: "Hackathon 2", year: "Year to be updated", category: "Industry collaboration", format: "Hybrid", duration: "Multi-stage program", audience: "To be updated", location: "To be updated",
    summary: "A hybrid innovation program combining preparation sessions, team building, mentoring, and a final hackathon.", brief: "The institution wanted a program that connected early preparation with a focused final build experience across physical and online participation.", approach: "We designed a staged journey with clear handoffs between communications, preparation, mentoring, production, and final review.", capabilities, timeline: commonTimeline,
    coverImage: { alt: "", caption: "Hackathon 2 / Cover media", fallbackLabel: "Hackathon 2 cover", aspect: "landscape", color: "orange" },
    gallery: galleryFor("Hackathon 2", "orange"), outcomes: [{ title: "Program outcomes", description: "Replace this placeholder with verified outcomes from the real event." }, { title: "Continuation", description: "Describe the practical follow-through offered to teams after the final event." }],
  },
  {
    slug: "hackathon-3", title: "Hackathon 3", year: "Year to be updated", category: "AI innovation challenge", format: "In-person", duration: "48 hours", audience: "To be updated", location: "To be updated",
    summary: "An AI-focused challenge designed to move teams from initial ideas to working prototypes and final demonstrations.", brief: "The institution wanted participants to explore practical AI use cases and move from a focused challenge to a demonstrable prototype.", approach: "We connected challenge design, technical preparation, mentor support, event operations, and judging into one clear participant journey.", capabilities, timeline: commonTimeline,
    coverImage: { alt: "", caption: "Hackathon 3 / Cover media", fallbackLabel: "Hackathon 3 cover", aspect: "landscape", color: "yellow" },
    gallery: galleryFor("Hackathon 3", "yellow"), outcomes: [{ title: "Working demonstrations", description: "Add verified project and program outcomes here when the case study is ready." }, { title: "Next-stage support", description: "Explain any mentorship, incubation, or prototype support provided after the hackathon." }],
  },
];

export function getHackathon(slug: string) { return hackathons.find((item) => item.slug === slug); }
export function getNextHackathon(slug: string) { const index = hackathons.findIndex((item) => item.slug === slug); return hackathons[(index + 1) % hackathons.length]; }
