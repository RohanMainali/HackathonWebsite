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
};

export const hackathons: Hackathon[] = [
  {
    slug: "iims-deep-learning-codefest",
    title: "IIMS Hackathon: Deep Learning Codefest",
    year: "2024",
    date: "July 7, 2024",
    category: "Student AI & deep learning hackathon",
    format: "In-person",
    duration: "10-hour continuous hackathon",
    audience: "Bachelor of Computer Science students across senior, junior and fresher cohorts",
    location: "Aranya Boutique Hotel, Shivapuri Block",
    summary: "A 10-hour codefest bringing mixed-cohort BCS teams together to build deep-learning models for safer, more efficient autonomous vehicles.",
    brief: "IIMS College wanted students to move beyond classroom theory, apply deep-learning knowledge to a real-world problem, demonstrate their technical ability and build practical AI and machine-learning experience in a competitive setting.",
    approach: "The program began with a 10-day AI and machine-learning bootcamp followed by cross-cohort team registration, coding-environment setup, mentor briefings and a final environment test. On hackathon day, teams researched, coded, tested and presented autonomous-vehicle models before a judging panel.",
    capabilities: ["10-day AI & ML bootcamp", "Cross-cohort team formation", "Coding environment setup", "Mentor briefing", "Challenge delivery", "10-hour event production", "Participant engagement", "Presentation workflow", "Judging coordination", "Awards and recognition"],
    timeline: [
      { label: "Bootcamp", description: "A 10-day, three-phase AI and machine-learning bootcamp moved participants from theory toward practice." },
      { label: "Team registration", description: "Senior students, juniors and freshers formed cross-cohort teams and registered against the event rules." },
      { label: "Environment setup", description: "The coding platform, links, internet access, layout and execution pipelines were configured and mentors were briefed." },
      { label: "Environment test", description: "A final technical test confirmed that each team could work reliably before the competition began." },
      { label: "Hackathon day", description: "Teams spent 10 continuous hours researching, coding and testing deep-learning models for autonomous vehicles." },
      { label: "Presentations & judging", description: "Teams presented to judges who assessed accuracy, innovation, code quality and presentation." },
      { label: "Awards", description: "The event recognized the best model, most innovative solution, outstanding presentation and best team spirit." },
    ],
    coverImage: {
      src: "/images/hackathons/iims-codefest/iims-codefest-venue.jpg",
      alt: "Student teams working at laptops throughout the IIMS Deep Learning Codefest venue",
      caption: "The 10-hour Deep Learning Codefest at Aranya Boutique Hotel",
      fallbackLabel: "IIMS Deep Learning Codefest venue",
      aspect: "landscape",
      color: "blue",
    },
    gallery: [
      { src: "/images/hackathons/iims-codefest/mixed-cohort-team.jpg", alt: "A mixed-cohort student team at the Deep Learning Codefest", caption: "Cross-cohort team formation", fallbackLabel: "Mixed-cohort team", aspect: "landscape", color: "blue" },
      { src: "/images/hackathons/iims-codefest/mentor-support.jpg", alt: "A mentor speaking with a student team during the codefest", caption: "Mentor support in the room", fallbackLabel: "Mentor support", aspect: "portrait", color: "mint" },
      { src: "/images/hackathons/iims-codefest/team-coding.jpg", alt: "Students collaborating around laptops during the deep-learning challenge", caption: "Teams researched, coded and tested throughout the day", fallbackLabel: "Team coding", aspect: "wide", color: "blue" },
      { src: "/images/hackathons/iims-codefest/collaboration.jpg", alt: "A student team and mentor reviewing work on several laptops", caption: "Collaborative model development", fallbackLabel: "Team collaboration", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/final-presentation.jpg", alt: "Students presenting their autonomous-vehicle model to the room", caption: "Final solution presentation", fallbackLabel: "Final presentation", aspect: "portrait", color: "blue" },
      { src: "/images/hackathons/iims-codefest/best-model-hacktastic.jpg", alt: "Team Hacktastic holding the Best Model award", caption: "Best Model: Team Hacktastic", fallbackLabel: "Best Model award", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/innovative-solution-hexaminner.jpg", alt: "Team Hexaminner holding the Innovative Solution award", caption: "Innovative Solution: Team Hexaminner", fallbackLabel: "Innovative Solution award", aspect: "wide", color: "blue" },
      { src: "/images/hackathons/iims-codefest/best-team-spirit-codex.jpg", alt: "Team CodeX holding the Best Team Spirit award", caption: "Best Team Spirit: Team CodeX", fallbackLabel: "Best Team Spirit award", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-codefest/outstanding-presentation.jpg", alt: "The recipients of the Outstanding Presentation award", caption: "Outstanding Presentation award", fallbackLabel: "Outstanding Presentation award", aspect: "landscape", color: "blue" },
    ],
    outcomes: [
      { title: "Applied deep learning", description: "Teams translated classroom knowledge into models that considered traffic patterns, road conditions, pedestrians, obstacles and vehicle behaviour." },
      { title: "Rigorous technical practice", description: "Participants developed and tested their models against multiple datasets and scenarios before presenting their final approach." },
      { title: "Best Model", description: "Team Hacktastic received the award for Best Model." },
      { title: "Innovative Solution", description: "Team Hexaminner received the award for Innovative Solution." },
      { title: "Best Team Spirit", description: "Team CodeX received the award for Best Team Spirit, alongside a separate Outstanding Presentation award." },
    ],
  },
  {
    slug: "turboline-iims-hackathon-2025",
    title: "Turboline × IIMS Hackathon 2025",
    year: "2025",
    date: "July 10–12, 2025",
    category: "International AI, sports & media hackathon",
    format: "Hybrid: Kathmandu and virtual",
    duration: "72-hour innovation sprint",
    audience: "Student coders, designers and data enthusiasts from 8 nations and 19 institutions",
    location: "IIMS College, Kathmandu + virtual participation",
    summary: "A 72-hour international innovation sprint where 57 teams built AI-powered ideas for sports, media, broadcasting and data intelligence.",
    brief: "IIMS College and Turboline set out to connect education with real industry problems at the intersection of artificial intelligence, sports and media. The challenge invited student teams across Asia to explore better fan experiences, athlete analysis, broadcast intelligence, automated commentary, sports journalism and referee decision support.",
    approach: "The hybrid program brought onsite and international teams into one three-day journey. Opening programming established the challenge while mentors supported continuous build rounds. An expert session expanded the teams’ thinking around AI research and midpoint presentations narrowed 57 teams to a Top 10. The final day combined technical review, submission, live demos, judging and awards.",
    capabilities: ["International participant outreach", "Hybrid event infrastructure", "Challenge and theme framing", "Opening program", "Mentor rounds", "Expert speaker session", "Three-day participant experience", "Midpoint presentations", "Finalist selection", "Submission and judging workflow", "Awards and recognition", "Hospitality and event operations"],
    timeline: [
      { label: "Launch & registration", description: "Teams registered, met across institutions and nations then entered the challenge through an opening program with IIMS and Turboline." },
      { label: "Day 1: Build", description: "Teams moved from ideas to early models and wireframes while mentors circulated across the hackathon floor." },
      { label: "Day 2: Mentorship", description: "Focused mentor rounds, debugging, design and core-feature development helped every team sharpen its direction." },
      { label: "Expert perspective", description: "Dr. Bal Krishna Bal joined for a session on innovation, research and the future of artificial intelligence." },
      { label: "Top 10 selection", description: "Midpoint presentations and review reduced the field of 57 teams to ten finalists for the final day." },
      { label: "Day 3: Final sprint", description: "Finalists completed testing, refined the user experience, submitted their work and prepared live demonstrations." },
      { label: "Finals & awards", description: "Judges reviewed the final presentations before naming the winner, runners-up and best international team." },
    ],
    coverImage: {
      src: "/images/hackathons/turboline-iims-2025/event-floor.jpg",
      alt: "Teams working across the Turboline and IIMS Hackathon event floor",
      caption: "57 teams building across a 72-hour hybrid innovation sprint",
      fallbackLabel: "Turboline × IIMS event floor",
      aspect: "landscape",
      color: "orange",
    },
    gallery: [
      { src: "/images/hackathons/turboline-iims-2025/team-collaboration.jpg", alt: "A student team collaborating around laptops during the hackathon", caption: "Ideas moving into early models and working prototypes", fallbackLabel: "Team collaboration", aspect: "landscape", color: "orange" },
      { src: "/images/hackathons/turboline-iims-2025/opening-inspiration.jpg", alt: "National tennis player Mahika Rana speaking during the opening program", caption: "Mahika Rana sharing an opening-day message with participants", fallbackLabel: "Opening inspiration", aspect: "portrait", color: "mint" },
      { src: "/images/hackathons/turboline-iims-2025/day-one-team.jpg", alt: "A participant team standing in front of the Turboline and IIMS Hackathon backdrop", caption: "International collaboration shaped the three-day experience", fallbackLabel: "Day one team", aspect: "wide", color: "orange" },
      { src: "/images/hackathons/turboline-iims-2025/mentor-round.jpg", alt: "A mentor reviewing a student team's work during the second day", caption: "Targeted mentor rounds helped teams sharpen their direction", fallbackLabel: "Mentor round", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/turboline-iims-2025/team-building.jpg", alt: "Participants working together at a laptop during a focused coding block", caption: "Coding, testing, debugging and refinement", fallbackLabel: "Focused build block", aspect: "portrait", color: "orange" },
      { src: "/images/hackathons/turboline-iims-2025/final-presentation.jpg", alt: "A finalist team presenting its project during the final round", caption: "Top 10 finalists presenting to the judging panel", fallbackLabel: "Final presentation", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/turboline-iims-2025/hybrid-final.jpg", alt: "A team presenting alongside virtual participants shown on a video call", caption: "Onsite and virtual teams connected in one hybrid final", fallbackLabel: "Hybrid final", aspect: "wide", color: "orange" },
      { src: "/images/hackathons/turboline-iims-2025/finalists.jpg", alt: "Hackathon participants and organizers gathered outside IIMS College", caption: "A three-day community spanning eight nations and 19 institutions", fallbackLabel: "Hackathon community", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/turboline-iims-2025/recognition.jpg", alt: "Recognized participants holding certificates at the closing ceremony", caption: "Recognition at the close of the international hackathon", fallbackLabel: "Closing recognition", aspect: "landscape", color: "orange" },
    ],
    outcomes: [
      { title: "57 teams", description: "More than 170 participants entered the three-day build from a field spanning eight nations and 19 institutions." },
      { title: "Top 10 finalists", description: "Midpoint presentations identified ten teams for the final round of testing, submission and live demonstrations." },
      { title: "Winner: Cob-Web", description: "Manee Das Shrestha, Sushma Shrestha and Niraj Nath of Khwopa College of Engineering won the hackathon." },
      { title: "1st runner-up: Hacktastic", description: "Anuj Bhandari, Prabin Joshi and Sujal Maharjan of IIMS College secured first runner-up." },
      { title: "2nd runner-up: Silver", description: "Rohan Mainali and Neha Aryal of IIMS College secured second runner-up." },
      { title: "Best international team", description: "VARgorithm from Taylor’s University received special recognition as the strongest international team." },
    ],
  },
  {
    slug: "iims-perceptron-international-hackathon-2026",
    title: "IIMS × Perceptron International Hackathon 2026",
    year: "2026",
    date: "July 24–26, 2026",
    category: "International dataset-first AI hackathon",
    format: "Hybrid: residential Kathmandu sprint + virtual international teams",
    duration: "48-hour build + final showcase",
    audience: "Bachelor-level teams of 2–3 from national and international institutions",
    location: "Aranya Boutique Hotel + IIMS College, Kathmandu",
    summary: "A 48-hour international AI sprint where teams created their own datasets, trained computer-vision models and turned them into working demonstrations.",
    brief: "IIMS College and Perceptron AI Labs designed the third edition around the complete AI-development lifecycle. Instead of beginning with ready-made labeled data, teams had to create or collect their own datasets before cleaning and annotating them. They then trained models against practical challenges in medical AI, sports analytics, satellite and remote sensing or open innovation.",
    approach: "The program combined pre-event onboarding for the Auta annotation platform with a residential build sprint, virtual participation for international teams, expert keynotes, hands-on mentorship, model testing and a final showcase. Teams moved through one connected pipeline: data collection, labeling, model training, inference testing, demo development, pitching and judging.",
    capabilities: ["International participant outreach", "Hybrid participation model", "Auta platform onboarding", "Dataset-first challenge design", "Four AI challenge tracks", "Residential event production", "Technical mentorship", "Expert keynote program", "Submission and demo workflow", "Judging coordination", "Final showcase", "Awards and recognition"],
    timeline: [
      { label: "Registration", description: "Bachelor-level teams of two or three joined from institutions in Nepal and abroad." },
      { label: "Auta onboarding", description: "A pre-event workshop prepared teams to collect, organize and annotate data using Perceptron's Auta platform." },
      { label: "Data creation", description: "Teams began without premade labeled datasets, gathering or creating the data required for their chosen problem." },
      { label: "Training", description: "Participants cleaned and labeled their datasets, trained computer-vision models and improved performance through testing." },
      { label: "Prototype build", description: "Model inference was connected to a usable demo while mentors supported technical decisions and delivery." },
      { label: "Showcase", description: "Finalists moved to the IIMS College campus to demonstrate their systems and explain their impact to the judging panel." },
      { label: "Awards", description: "Judges selected a champion and two runners-up from the final presentations, backed by a NPR 262,500 prize pool." },
    ],
    coverImage: {
      src: "/images/hackathons/iims-perceptron-2026/cover-image.jpg",
      alt: "A room-wide view of teams and an expert session at the IIMS and Perceptron International Hackathon 2026",
      caption: "Teams learning and building together across the 48-hour AI sprint",
      fallbackLabel: "IIMS × Perceptron hackathon",
      aspect: "landscape",
      position: "center 48%",
      color: "yellow",
    },
    gallery: [
      { src: "/images/hackathons/iims-perceptron-2026/mentor-team-collaboration.jpg", alt: "A mentor leaning over several laptops while working directly with a participant team", caption: "Hands-on guidance during the build sprint", fallbackLabel: "Mentor and team collaboration", aspect: "landscape", color: "yellow" },
      { src: "/images/hackathons/iims-perceptron-2026/participant-check-in.jpg", alt: "A participant speaking into a microphone during an informal check-in on the hackathon floor", caption: "Participant check-ins kept the room connected", fallbackLabel: "Participant check-in", aspect: "landscape", position: "center 42%", color: "mint" },
      { src: "/images/hackathons/iims-perceptron-2026/international-team.jpg", alt: "An international participant team gathered around a table during the hackathon", caption: "National and international teams sharing one build environment", fallbackLabel: "International participant team", aspect: "wide", position: "center 42%", color: "yellow" },
      { src: "/images/hackathons/iims-perceptron-2026/expert-keynote.jpg", alt: "An expert speaker presenting to participants beneath the event's challenge-track banners", caption: "Expert perspectives framed the technical challenge", fallbackLabel: "Expert keynote", aspect: "landscape", position: "center 42%", color: "mint" },
      { src: "/images/hackathons/iims-perceptron-2026/technical-mentoring.jpg", alt: "A mentor and participants reviewing technical work together on a laptop", caption: "Technical mentoring around the teams' models and data", fallbackLabel: "Technical mentoring", aspect: "landscape", color: "yellow" },
      { src: "/images/hackathons/iims-perceptron-2026/prototype-demonstration.jpg", alt: "Two participants presenting an AI road-condition monitoring dashboard during the final demonstrations", caption: "A working AI system demonstrated during the final showcase", fallbackLabel: "Prototype demonstration", aspect: "landscape", position: "center 38%", color: "mint" },
      { src: "/images/hackathons/iims-perceptron-2026/champion-taygood.jpg", alt: "Team Taygood holding the champion cheque at the awards ceremony", caption: "Champion: Team Taygood, Taylor's University", fallbackLabel: "Champion Team Taygood", aspect: "landscape", color: "mint" },
      { src: "/images/hackathons/iims-perceptron-2026/first-runner-up-rug-tech.jpg", alt: "Team Rug Tech holding the first runner-up cheque", caption: "First runner-up: Rug Tech, Itahari International College", fallbackLabel: "First runner-up Rug Tech", aspect: "wide", color: "yellow" },
      { src: "/images/hackathons/iims-perceptron-2026/second-runner-up-futstats.jpg", alt: "Team FutStats holding the second runner-up cheque", caption: "Second runner-up: FutStats, IIMS College", fallbackLabel: "Second runner-up FutStats", aspect: "landscape", color: "mint" },
    ],
    outcomes: [
      { title: "150+ AI innovators", description: "National and international teams took part through a residential Kathmandu sprint and a connected virtual format." },
      { title: "Complete AI pipeline", description: "Every team moved from original data collection and annotation through model training, inference testing and a working demonstration." },
      { title: "Champion: Taygood", description: "Yaphongsan Yap, Zhan Quan and Loo Yi Sheng of Taylor's University won with FinchPoint, a computer-vision system for poultry-farm monitoring." },
      { title: "1st runner-up: Rug Tech", description: "Rakshak Sigdel, Bipin Subedi and Prasun Bhattarai of Itahari International College secured first runner-up." },
      { title: "2nd runner-up: FutStats", description: "Nishan Maharjan, Pragyan Shrestha and Rojit Khadgi of IIMS College secured second runner-up." },
      { title: "NPR 262,500 prize pool", description: "The awards distributed NPR 150,000 to the champion, NPR 75,000 to first runner-up and NPR 37,500 to second runner-up." },
    ],
  },
];

export function getHackathon(slug: string) { return hackathons.find((item) => item.slug === slug); }
export function getNextHackathon(slug: string) { const index = hackathons.findIndex((item) => item.slug === slug); return hackathons[(index + 1) % hackathons.length]; }
