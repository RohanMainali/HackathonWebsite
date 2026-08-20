export type ServiceGroup = { title: string; items: string[] };

export const services = [
  {
    title: "End-to-End Hackathons",
    description: "Our premier flagship capability. We work alongside your institution from the initial brief to post-event reporting. Strategy, identity, outreach, sponsors, participants, mentors, logistics, judging, content and follow-through are coordinated as one seamless program.",
  },
  {
    title: "Research & Applied Innovation",
    description: "Applied research, feasibility studies, dataset curation, and proof-of-concept development across artificial intelligence, machine learning, and emerging technology domains.",
  },
  {
    title: "IoT & Connected Devices",
    description: "Hardware prototyping, smart sensor integration, edge computing architectures, and end-to-end IoT system development for industrial, agricultural, and urban challenges.",
  },
  {
    title: "Robotics & Automation",
    description: "Robotics system design, autonomous control pipelines, computer vision integration, sensor fusion, and embedded control prototyping.",
  },
  {
    title: "Technical Training & Bootcamps",
    description: "Intensive, practical training programs in modern AI, deep learning, embedded systems, full-stack software development, and competitive builder readiness.",
  },
  {
    title: "Resource & Tech Stack Guide",
    description: "Curated technical architectures, starter templates, benchmark datasets, API toolchains, and comprehensive stack roadmaps to unblock builders and accelerate development.",
  },
  {
    title: "AI Consulting",
    description: "Focused AI discovery, custom model development, computer vision, natural language processing, and technical consulting connected to real institutional problems.",
  },
  {
    title: "Hackathon Advisory",
    description: "For teams that already have internal organizers but need a battle-tested playbook, expert review, templates, and strategic guidance.",
  },
];

export const serviceMap: ServiceGroup[] = [
  { title: "Strategy & Framing", items: ["Objectives", "Audience", "Event format & Unconference", "Theme and tracks", "Problem statements", "Budget", "Timeline", "Risk planning"] },
  { title: "Brand & Communications", items: ["Event identity", "Website & Portal", "Registration experience", "Participant campaign", "Email communications", "Social content", "Sponsor material"] },
  { title: "People & Training", items: ["Participants", "Speakers", "Mentors", "Judges", "Technical training", "Bootcamps", "Team formation", "Community engagement"] },
  { title: "Production & Hardware", items: ["Venue coordination", "IoT / Lab setup", "Internet & power planning", "Schedule", "Help desk", "Stage management", "Submission process", "Judging"] },
  { title: "Resources & Continuity", items: ["Outcome report", "Resource & tech stack guide", "Project review", "Research follow-through", "Prototype support", "Future program planning"] },
];

export const engagementModels = [
  { title: "Advisory Partner", description: "For institutions with an internal organizing team that need a tested playbook, reviews, templates and strategic guidance." },
  { title: "Co-Production Partner", description: "We work alongside your team and take responsibility for selected areas such as program design, technical training, participants, mentors, production or judging." },
  { title: "End-to-End Partner", description: "We coordinate the complete program from concept and technical architecture through event operations, hardware/training support, and post-event reporting." },
];

export const eventFormats = [
  "Physical",
  "Hybrid",
  "Online",
  "Corporate hackathon",
  "Open community hackathon",
  "Intercollege hackathon",
  "Intracollege hackathon",
  "Unconference",
];

