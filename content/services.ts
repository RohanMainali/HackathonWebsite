export type ServiceGroup = { title: string; items: string[] };

export const services = [
  {
    title: "End-to-End Hackathons",
    description: "We work alongside your institution from the initial brief to post-event reporting. Strategy, identity, outreach, sponsors, participants, mentors, logistics, judging, content, and follow-through are coordinated as one program.",
  },
  { title: "Hackathon Advisory", description: "For teams that already have organizers but need a proven structure, expert review, templates, and guidance." },
  { title: "Bootcamps and Workshops", description: "Hands-on preparation in AI, software development, product design, prototyping, pitching, and other event-relevant skills." },
  { title: "Mentorship and Incubation", description: "Structured support before and after the event to help teams refine ideas, solve technical blockers, and continue promising projects." },
  { title: "AI Consulting", description: "Focused AI discovery, prototype development, training, and technical consulting connected to real institutional challenges." },
];

export const serviceMap: ServiceGroup[] = [
  { title: "Strategy", items: ["Objectives", "Audience", "Event format", "Theme and tracks", "Problem statements", "Budget", "Timeline", "Risk planning"] },
  { title: "Brand and Communications", items: ["Event identity", "Website", "Registration experience", "Participant campaign", "Email communications", "Social content", "Sponsor material"] },
  { title: "People and Program", items: ["Participants", "Speakers", "Mentors", "Judges", "Volunteers", "Workshops", "Team formation", "Community engagement"] },
  { title: "Production and Operations", items: ["Venue coordination", "Internet and power planning", "Schedule", "Help desk", "Stage management", "Submission process", "Judging", "Photography and video coordination"] },
  { title: "Continuation", items: ["Outcome report", "Project review", "Incubation", "Mentorship", "Prototype support", "Future program planning"] },
];

export const engagementModels = [
  { title: "Advisory Partner", description: "For institutions with an internal organizing team that need a tested playbook, reviews, templates, and strategic guidance." },
  { title: "Co-Production Partner", description: "We work alongside your team and take responsibility for selected areas such as program design, participants, mentors, production, or judging." },
  { title: "End-to-End Partner", description: "We coordinate the complete program—from concept and communications to event operations and post-event reporting." },
];

export const eventFormats = ["In-person", "Hybrid", "Online", "Internal employee hackathon", "Open community hackathon", "University hackathon", "Innovation challenge", "Multi-stage program"];
