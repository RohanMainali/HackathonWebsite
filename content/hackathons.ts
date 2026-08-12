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
    slug: "hackathon-1", title: "Hackathon 1", year: "Year to be updated", category: "Institutional hackathon", format: "In-person", duration: "36 hours", audience: "To be updated", location: "To be updated",
    summary: "A focused build weekend bringing students, mentors, and institutional partners together around practical problem statements.",
    brief: "The institution wanted to create a structured environment where participants could explore practical challenges, form teams, receive expert guidance, and demonstrate working ideas.",
    approach: "We treated the hackathon as a complete participant journey rather than a standalone event. The program connected communications, preparation, team support, event operations, judging, and post-event review.",
    capabilities, timeline: commonTimeline,
    coverImage: { alt: "", caption: "Hackathon 1 / Cover media", fallbackLabel: "Hackathon 1 cover", aspect: "landscape", color: "blue" },
    gallery: galleryFor("Hackathon 1", "blue"),
    outcomes: [{ title: "A complete event record", description: "Verified outcomes and evidence can be added here when the real project details are available." }, { title: "A path after demo day", description: "Use this area to explain how selected teams or ideas continued after the event." }],
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
