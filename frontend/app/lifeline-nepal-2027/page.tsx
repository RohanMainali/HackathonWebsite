import { ParticipationForm } from "@/components/forms/ParticipationForm";
import "./lifeline.css";
import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = pageMetadata(
  "Lifeline Nepal · 2027 — Disaster Response & Resilience Hackathon",
  "Amatrix Labs announces Lifeline Nepal, a 48-hour hackathon focused on practical technology for the first 72 hours after floods, landslides and related disasters.",
  "/lifeline-nepal-2027",
);

const tracks = [
  {
    name: "Connect",
    focus: "Emergency communication",
    brief:
      "Keep affected communities and responders connected when mobile networks and internet access fail.",
    examples:
      "Bluetooth or Wi-Fi Direct mesh messaging, LoRa relays, store-and-forward alerts, offline family check-ins.",
  },
  {
    name: "Find",
    focus: "Search, rescue & victim detection",
    brief:
      "Help field teams locate, identify and prioritize missing or trapped people without creating duplicate reports.",
    examples:
      "Drone or thermal review, acoustic detection, last-known-location tools, deduplicated missing-person registries.",
  },
  {
    name: "See",
    focus: "Mapping & situational awareness",
    brief:
      "Build a shared, time-stamped view of damaged roads, settlements, hazards, shelters and response activity.",
    examples:
      "Offline-first maps, crowdsourced damage reports, satellite-change review, verified field observations.",
  },
  {
    name: "Predict",
    focus: "Early warning & hazard intelligence",
    brief:
      "Turn weather, river, terrain and community observations into understandable warnings people can act on.",
    examples:
      "River-threshold alerts, landslide-risk indicators, last-mile warning delivery, alert confidence levels.",
  },
  {
    name: "Reach",
    focus: "Rescue routing & mobility",
    brief:
      "Find safe ways to reach isolated people when bridges fail, roads are blocked and conditions change quickly.",
    examples:
      "Dynamic route planning, foot and air access maps, evacuation sequencing, safe rendezvous coordination.",
  },
  {
    name: "Treat",
    focus: "Emergency medical response",
    brief:
      "Support triage, referrals and continuity of care in low-power, low-connectivity field conditions.",
    examples:
      "Offline triage records, referral coordination, medication availability, responder decision-support checklists.",
  },
  {
    name: "Supply",
    focus: "Relief logistics",
    brief:
      "Get water, food, medicine, shelter materials and equipment to the right place without gaps or duplication.",
    examples:
      "Needs-to-inventory matching, last-mile dispatch, delivery proof, equitable allocation and stock forecasting.",
  },
  {
    name: "Coordinate",
    focus: "Command & verified information",
    brief:
      "Give agencies and local responders one actionable operating picture while keeping decisions accountable.",
    examples:
      "Incident dashboards, task handoffs, report verification, source and timestamp tracking, rumor control.",
  },
  {
    name: "Shelter",
    focus: "Safe shelter & family reunification",
    brief:
      "Match displaced people with safe, accessible shelter and help separated families reconnect securely.",
    examples:
      "Capacity and accessibility tracking, privacy-aware registration, reunification workflows, protection referrals.",
  },
  {
    name: "Recover",
    focus: "Damage assessment & recovery",
    brief:
      "Move from immediate response to transparent assessment, assistance and safer rebuilding.",
    examples:
      "Rapid building surveys, loss documentation, aid case tracking, resilient reconstruction and livelihood tools.",
  },
];

const requirements = [
  {
    title: "Works through failure",
    body: "The core workflow must remain useful during an internet outage and synchronize safely when connectivity returns.",
  },
  {
    title: "Built for Nepal's terrain",
    body: "Design for remote settlements, blocked roads, limited power, low-cost devices and handoffs between local and national responders.",
  },
  {
    title: "Usable under pressure",
    body: "A first-time user should understand the critical action quickly. Support Nepali and English where language affects safety.",
  },
  {
    title: "Responsible with human data",
    body: "Collect the minimum sensitive data, explain access and retention, and never expose victims through public-by-default systems.",
  },
  {
    title: "Clear about uncertainty",
    body: "Every report, prediction or AI output needs a source, timestamp and confidence state so responders can judge its reliability.",
  },
  {
    title: "Ready to hand over",
    body: "Use open formats where practical and document how a municipality, responder or community group could operate the prototype.",
  },
];

const program = [
  {
    phase: "Before the sprint",
    title: "Context, teams & field insight",
    body: "Two short orientation sessions introduce Nepal's disaster-response structure, lived community needs, available datasets, safety, privacy and challenge-track mentors.",
  },
  {
    phase: "Hours 0–8",
    title: "Choose one decision to improve",
    body: "Teams validate a specific user, location and failure scenario, map the current workflow and define one measurable response outcome.",
  },
  {
    phase: "Hours 8–32",
    title: "Build, test and break it",
    body: "Teams prototype with domain and technical mentor rounds, then run an outage test, incomplete-data test and field-usability review.",
  },
  {
    phase: "Hours 32–48",
    title: "Refine and demonstrate",
    body: "Teams close critical gaps, document risks and handoff needs, and prepare a live scenario-based demonstration for judges.",
  },
  {
    phase: "After the sprint",
    title: "Field review & pilot pathway",
    body: "Selected teams enter a structured review with potential users. Promising prototypes receive technical hardening, testing and partner-pilot support.",
  },
];

const judging = [
  [
    "25%",
    "Problem relevance",
    "A specific, evidenced need in the disaster workflow—not a generic app with a disaster label.",
  ],
  [
    "25%",
    "Resilience & field readiness",
    "Useful under connectivity, power, device and data constraints, with graceful failure behavior.",
  ],
  [
    "15%",
    "Usability & inclusion",
    "Clear under pressure and considerate of language, disability, age, geography and digital literacy.",
  ],
  [
    "15%",
    "Technical execution",
    "A working core flow, credible architecture, sensible tradeoffs and a demonstrable prototype.",
  ],
  [
    "10%",
    "Impact & adoption",
    "A measurable response improvement and a realistic path to ownership, deployment and maintenance.",
  ],
  [
    "10%",
    "Safety, privacy & trust",
    "Responsible data handling, transparent uncertainty and protection from harmful misuse.",
  ],
];

const partnerRoles = [
  [
    "Response partners",
    "Shape real workflows, mentor teams and test whether prototypes make sense in the field.",
  ],
  [
    "Data partners",
    "Prepare safe, documented weather, mapping, infrastructure or simulated incident datasets.",
  ],
  [
    "Technology partners",
    "Provide mapping, communications, cloud, edge, device or compute tools—with offline alternatives.",
  ],
  [
    "Academic partners",
    "Recruit multidisciplinary teams, host preparation sessions and support applied research.",
  ],
  [
    "Community partners",
    "Keep lived experience, accessibility and local response practices inside the design process.",
  ],
  [
    "Funding partners",
    "Support event delivery, participant access, prizes and the harder work of post-event pilots.",
  ],
];

export default function LifelineNepalPage() {
  return (
    <main id="main-content" className="design-page event-page">
      <section className="event-hero content-width">
        <div>
          <p className="eyebrow">UPCOMING HACKATHON · EARLY 2027</p>
          <h1>
            Lifeline Nepal <span className="lifeline-year">· 2027</span>
          </h1>
          <p className="event-subtitle">
            Build for when everything else fails.
          </p>
          <p>
            A 48-hour sprint to build practical technology for disaster response
            and resilience in Nepal.
          </p>
          <div className="cta-row">
            <ButtonLink href="#register-interest">Register interest</ButtonLink>
            <a className="editorial-link" href="#challenge">
              Explore the challenge
            </a>
          </div>
          <span className="event-status">Registration opening soon</span>
        </div>
        <Image
          src="/images/site/lifeline-hero.jpg"
          alt="A mountain rescue scene in Nepal"
          width={1100}
          height={1000}
          priority
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </section>
      <div className="event-facts content-width">
        <div>
          <span>LOCATION</span>
          <strong>Kathmandu, Nepal</strong>
        </div>
        <div>
          <span>WHEN</span>
          <strong>Early 2027</strong>
        </div>
        <div>
          <span>FORMAT</span>
          <strong>48-hour build sprint</strong>
        </div>
        <div>
          <span>TEAM SIZE</span>
          <strong>3–5 people</strong>
        </div>
      </div>
      <section className="story-composition content-width" id="challenge">
        <p className="eyebrow">THE CHALLENGE</p>
        <div>
          <h2>
            One critical decision.
            <br />A meaningful difference.
          </h2>
          <p>
            Design for the first 72 hours after a severe flood or landslide.
            Roads are blocked, power is unreliable, and responders have
            incomplete information. Your challenge: make one response workflow
            faster, safer, or more reliable.
          </p>
          <p>
            Choose a real user, a specific failure scenario, and an outcome you
            can demonstrate.
          </p>
        </div>
      </section>
      <section className="event-tracks content-width">
        <div className="design-section-title">
          <p className="eyebrow">CHOOSE YOUR CHALLENGE</p>
          <h2>Ten ways to make a difference.</h2>
        </div>
        <div className="track-disclosures">
          {tracks.map((track, i) => (
            <details key={track.name}>
              <summary>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{track.name}</h3>
                <span>{track.focus}</span>
                <b aria-hidden="true">+</b>
              </summary>
              <div>
                <p>{track.brief}</p>
                <p>
                  <strong>Possible builds:</strong> {track.examples}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="event-program content-width">
        <div className="design-section-title">
          <p className="eyebrow">THE EXPERIENCE</p>
          <h2>From context to a working prototype.</h2>
        </div>
        <ol>
          {program.map((item) => (
            <li key={item.phase}>
              <span>{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="event-details content-width">
        <div className="design-section-title">
          <p className="eyebrow">THE DETAILS</p>
          <h2>Come prepared to build.</h2>
        </div>
        <details>
          <summary>Prototype requirements</summary>
          <div className="event-detail-grid">
            {requirements.map((r) => (
              <article key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </details>
        <details>
          <summary>Submission checklist</summary>
          <ul>
            <li>
              A working prototype and a live, scenario-based demonstration
            </li>
            <li>A defined user, workflow, and measurable response outcome</li>
            <li>An architecture diagram and an offline or failure-mode test</li>
            <li>A data, privacy, safety, and misuse note</li>
            <li>A 90-day pilot plan and an implementation guide</li>
          </ul>
        </details>
        <details>
          <summary>How projects are evaluated</summary>
          <div className="event-detail-grid">
            {judging.map(([weight, title, description]) => (
              <article key={title}>
                <h3>
                  {weight} · {title}
                </h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </details>
        <details>
          <summary>Partner opportunities</summary>
          <div className="event-detail-grid">
            {partnerRoles.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </details>
        <details>
          <summary>After the event</summary>
          <p>
            Selected teams enter a field review with potential users. Promising
            prototypes receive a structured pathway toward technical testing and
            partner pilots. Finalists document their failure-mode tests,
            operational handoff, and lessons for future builders.
          </p>
        </details>
      </section>
      <section
        className="lifeline-registration content-width"
        id="register-interest"
        aria-labelledby="registration-heading"
      >
        <div>
          <p className="eyebrow">YOUR NEXT BUILD</p>
          <h2 id="registration-heading">Build something that matters.</h2>
          <p>
            Bring your curiosity, your skills, and an interest in making
            disaster response more resilient. Register your interest in Lifeline
            Nepal · 2027 to hear about next steps.
          </p>
          <p>
            The event is planned for early 2027. Exact dates and venue details
            will be announced. Registering interest does not confirm a place.
          </p>
          <a className="editorial-link" href="/contact">
            Have a question? Get in touch
          </a>
        </div>
        <ParticipationForm />
      </section>
      <section className="final-cta">
        <Container>
          <p className="eyebrow">BE PART OF LIFELINE NEPAL</p>
          <h2>
            Bring your skills.
            <br />
            Build for your community.
          </h2>
          <div className="cta-row">
            <ButtonLink href="#register-interest">Register interest</ButtonLink>
            <ButtonLink
              variant="secondary"
              href="/sponsors?event=Lifeline%20Nepal"
            >
              Sponsor this event
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
