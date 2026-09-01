import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = pageMetadata(
  "Lifeline Nepal — Disaster Response & Resilience Hackathon",
  "Amatrix Labs announces Lifeline Nepal, a 48-hour hackathon focused on practical technology for the first 72 hours after floods, landslides and related disasters.",
  "/upcoming"
);

const tracks = [
  {
    name: "Connect",
    focus: "Emergency communication",
    brief: "Keep affected communities and responders connected when mobile networks and internet access fail.",
    examples: "Bluetooth or Wi-Fi Direct mesh messaging, LoRa relays, store-and-forward alerts, offline family check-ins.",
  },
  {
    name: "Find",
    focus: "Search, rescue & victim detection",
    brief: "Help field teams locate, identify and prioritize missing or trapped people without creating duplicate reports.",
    examples: "Drone or thermal review, acoustic detection, last-known-location tools, deduplicated missing-person registries.",
  },
  {
    name: "See",
    focus: "Mapping & situational awareness",
    brief: "Build a shared, time-stamped view of damaged roads, settlements, hazards, shelters and response activity.",
    examples: "Offline-first maps, crowdsourced damage reports, satellite-change review, verified field observations.",
  },
  {
    name: "Predict",
    focus: "Early warning & hazard intelligence",
    brief: "Turn weather, river, terrain and community observations into understandable warnings people can act on.",
    examples: "River-threshold alerts, landslide-risk indicators, last-mile warning delivery, alert confidence levels.",
  },
  {
    name: "Reach",
    focus: "Rescue routing & mobility",
    brief: "Find safe ways to reach isolated people when bridges fail, roads are blocked and conditions change quickly.",
    examples: "Dynamic route planning, foot and air access maps, evacuation sequencing, safe rendezvous coordination.",
  },
  {
    name: "Treat",
    focus: "Emergency medical response",
    brief: "Support triage, referrals and continuity of care in low-power, low-connectivity field conditions.",
    examples: "Offline triage records, referral coordination, medication availability, responder decision-support checklists.",
  },
  {
    name: "Supply",
    focus: "Relief logistics",
    brief: "Get water, food, medicine, shelter materials and equipment to the right place without gaps or duplication.",
    examples: "Needs-to-inventory matching, last-mile dispatch, delivery proof, equitable allocation and stock forecasting.",
  },
  {
    name: "Coordinate",
    focus: "Command & verified information",
    brief: "Give agencies and local responders one actionable operating picture while keeping decisions accountable.",
    examples: "Incident dashboards, task handoffs, report verification, source and timestamp tracking, rumor control.",
  },
  {
    name: "Shelter",
    focus: "Safe shelter & family reunification",
    brief: "Match displaced people with safe, accessible shelter and help separated families reconnect securely.",
    examples: "Capacity and accessibility tracking, privacy-aware registration, reunification workflows, protection referrals.",
  },
  {
    name: "Recover",
    focus: "Damage assessment & recovery",
    brief: "Move from immediate response to transparent assessment, assistance and safer rebuilding.",
    examples: "Rapid building surveys, loss documentation, aid case tracking, resilient reconstruction and livelihood tools.",
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
  ["25%", "Problem relevance", "A specific, evidenced need in the disaster workflow—not a generic app with a disaster label."],
  ["25%", "Resilience & field readiness", "Useful under connectivity, power, device and data constraints, with graceful failure behavior."],
  ["15%", "Usability & inclusion", "Clear under pressure and considerate of language, disability, age, geography and digital literacy."],
  ["15%", "Technical execution", "A working core flow, credible architecture, sensible tradeoffs and a demonstrable prototype."],
  ["10%", "Impact & adoption", "A measurable response improvement and a realistic path to ownership, deployment and maintenance."],
  ["10%", "Safety, privacy & trust", "Responsible data handling, transparent uncertainty and protection from harmful misuse."],
];

const partnerRoles = [
  ["Response partners", "Shape real workflows, mentor teams and test whether prototypes make sense in the field."],
  ["Data partners", "Prepare safe, documented weather, mapping, infrastructure or simulated incident datasets."],
  ["Technology partners", "Provide mapping, communications, cloud, edge, device or compute tools—with offline alternatives."],
  ["Academic partners", "Recruit multidisciplinary teams, host preparation sessions and support applied research."],
  ["Community partners", "Keep lived experience, accessibility and local response practices inside the design process."],
  ["Funding partners", "Support event delivery, participant access, prizes and the harder work of post-event pilots."],
];

export default function UpcomingHackathonPage() {
  return (
    <main id="main-content" className="lifeline-page">
      <section className="lifeline-hero">
        <div className="lifeline-hero__media" aria-hidden="true">
          <Image
            src="/images/site/lifeline-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="lifeline-hero__wash" />
        <Container>
          <div className="lifeline-hero__content">
            <p className="eyebrow">UPCOMING HACKATHON · OFFICIAL ANNOUNCEMENT</p>
            <p className="lifeline-hero__date">KATHMANDU, NEPAL · EARLY 2027</p>
            <h1>
              LIFELINE <em>NEPAL</em>
            </h1>
            <p className="lifeline-hero__subtitle">Disaster Response & Resilience Hackathon</p>
            <p className="lifeline-hero__statement">Build for when everything else fails.</p>
            <p className="lifeline-hero__intro">
              <a href="https://www.amatrixlabs.com/" target="_blank" rel="noreferrer">Amatrix Labs</a> is bringing together builders, responders and problem-solvers for a 48-hour sprint focused on practical technology for the first 72 hours after a flood, landslide or related disaster.
            </p>
            <div className="cta-row">
              <ButtonLink href="/contact" variant="primary">Get event updates</ButtonLink>
              <a className="lifeline-hero__text-link" href="#challenge">Read the challenge <span aria-hidden="true">↓</span></a>
            </div>
            <p className="lifeline-hero__proof">48-hour prototype sprint <span>·</span> Teams of 3–5 <span>·</span> Registration opening soon</p>
          </div>
        </Container>
      </section>

      <section className="lifeline-pillars" aria-label="Hackathon priorities">
        <Container>
          <span>Communicate when networks fail</span>
          <span>Find and reach people faster</span>
          <span>See risk before acting</span>
          <span>Coordinate trusted response</span>
        </Container>
      </section>

      <section id="challenge" className="section lifeline-challenge">
        <Container>
          <div className="lifeline-section-heading">
            <p className="eyebrow"><span>01 /</span> THE CHALLENGE</p>
            <h2>One disaster scenario. One critical decision improved.</h2>
          </div>
          <div className="lifeline-challenge__body">
            <div>
              <p className="large-copy">
                Recent flash floods and recurrent landslides in Nepal show how quickly roads, power, communications and access to essential services can fail together.
              </p>
              <p>
                LIFELINE asks teams to design for a severe flood-and-landslide scenario affecting a mountainous municipality. Settlements are isolated, bridges and roads are damaged, cellular service is intermittent, responders receive incomplete reports, and families need reliable information. The task is not to “solve disasters.” It is to make one high-stakes response workflow meaningfully faster, safer or more reliable.
              </p>
              <p>
                Teams may focus on preparedness immediately before impact, response during the first 72 hours, or the transition into early recovery—but must identify a real user and show how the solution behaves when infrastructure fails.
              </p>
            </div>
            <aside className="lifeline-scenario">
              <p className="eyebrow">THE 72-HOUR TEST</p>
              <ol>
                <li><span>00–06h</span><p><strong>Impact:</strong> warnings, outages and fragmented first reports.</p></li>
                <li><span>06–24h</span><p><strong>Search:</strong> missing people, blocked access and scarce verified information.</p></li>
                <li><span>24–48h</span><p><strong>Stabilize:</strong> triage, shelter, supplies and multi-agency handoffs.</p></li>
                <li><span>48–72h</span><p><strong>Transition:</strong> updated needs, family reunification and early damage assessment.</p></li>
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section lifeline-tracks">
        <Container>
          <div className="lifeline-section-heading lifeline-section-heading--split">
            <div>
              <p className="eyebrow"><span>02 /</span> CHALLENGE TRACKS</p>
              <h2>Ten focused ways to build resilience.</h2>
            </div>
            <p>Each team chooses one track, one primary user and one failure scenario. Cross-track ideas are welcome when the core outcome remains testable.</p>
          </div>
          <div className="lifeline-track-grid">
            {tracks.map((track, index) => (
              <article key={track.name} className="lifeline-track-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{track.focus}</p>
                <h3>{track.name}</h3>
                <p>{track.brief}</p>
                <small><strong>Possible builds:</strong> {track.examples}</small>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section lifeline-requirements">
        <Container>
          <div className="lifeline-section-heading">
            <p className="eyebrow"><span>03 /</span> FIELD CONSTRAINTS</p>
            <h2>Every prototype must survive contact with reality.</h2>
            <p className="section-intro">These are cross-cutting requirements, regardless of track or technology stack.</p>
          </div>
          <div className="lifeline-requirements__grid">
            {requirements.map((requirement, index) => (
              <article key={requirement.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{requirement.title}</h3>
                <p>{requirement.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section lifeline-program">
        <Container>
          <div className="lifeline-section-heading lifeline-section-heading--split">
            <div>
              <p className="eyebrow"><span>04 /</span> EVENT FORMAT</p>
              <h2>From field context to a testable handoff.</h2>
            </div>
            <p>The sprint is only the center of the program. Preparation before it and adoption work after it are part of the design.</p>
          </div>
          <ol className="lifeline-program__timeline">
            {program.map((item, index) => (
              <li key={item.phase}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>

          <div className="lifeline-deliverables">
            <div>
              <p className="eyebrow">REQUIRED SUBMISSION</p>
              <h3>Show the system working when conditions get worse.</h3>
            </div>
            <ul>
              <li>A working core prototype and live, scenario-based demonstration</li>
              <li>A clearly defined user, workflow and measurable response outcome</li>
              <li>An architecture diagram and offline or failure-mode test</li>
              <li>A data, privacy, safety and misuse note</li>
              <li>A 90-day pilot plan with ownership and maintenance assumptions</li>
              <li>A concise handover repository or implementation guide</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section lifeline-judging">
        <Container>
          <div className="lifeline-section-heading">
            <p className="eyebrow"><span>05 /</span> EVALUATION</p>
            <h2>Judged for usefulness, not spectacle.</h2>
          </div>
          <div className="lifeline-judging__grid">
            {judging.map(([weight, title, description]) => (
              <article key={title}>
                <span>{weight}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section lifeline-partners">
        <Container>
          <div className="lifeline-section-heading lifeline-section-heading--split">
            <div>
              <p className="eyebrow"><span>06 /</span> CO-DESIGN & PARTNERS</p>
              <h2>Built with responders and communities—not merely for them.</h2>
            </div>
            <p>The event is designed around clear roles for response, data, technology, academic, community and funding partners so promising work can move beyond demo day.</p>
          </div>
          <div className="lifeline-partner-grid">
            {partnerRoles.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="lifeline-outcomes">
        <Container>
          <div>
            <p className="eyebrow">WHAT SUCCESS LOOKS LIKE</p>
            <h2>Prototypes that can earn a field test.</h2>
          </div>
          <ul>
            <li>Every finalist completes a documented connectivity or failure-mode test.</li>
            <li>Domain reviewers validate the problem and the operational handoff.</li>
            <li>Selected projects leave with a 90-day pilot pathway, not only a prize.</li>
            <li>Reusable briefs, safe sample data and lessons are documented for future builders.</li>
          </ul>
        </Container>
      </section>

      <section id="event-updates" className="lifeline-cta">
        <Container>
          <p className="eyebrow">HELP SHAPE LIFELINE NEPAL</p>
          <h2>Bring a problem, a team, field experience or pilot opportunity.</h2>
          <p>Participant, responder, university, technology and funding partners can join the announcement list now. Registration, venue details and the final challenge brief will be released in the next event update.</p>
          <div className="cta-row">
            <ButtonLink href="/contact" variant="primary">Get event updates</ButtonLink>
            <ButtonLink href="/partners" variant="secondary">Explore partnership roles</ButtonLink>
          </div>
          <small>Presented by Amatrix Labs · Kathmandu, Nepal · Early 2027 · Registration opening soon</small>
        </Container>
      </section>
    </main>
  );
}
