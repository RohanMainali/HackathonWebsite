import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { team } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamFilterGrid } from "@/components/interactive/TeamFilterGrid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata(
  "About",
  "Experience inside national and international hackathons, shaped into a practical partner for institutions.",
  "/about"
);

const principles = [
  {
    index: "01",
    title: "On-the-ground presence",
    description:
      "We do not direct from afar. Our team is on the event floor from setup to teardown—debugging technical issues, guiding participant teams, and keeping the energy focused.",
  },
  {
    index: "02",
    title: "Technical rigor & AI depth",
    description:
      "Our team includes machine learning engineers and systems architects who formulate industry-grade problem statements, dataset pipelines, and robust evaluation criteria.",
  },
  {
    index: "03",
    title: "Operational composure",
    description:
      "High-pressure 48-hour residential events require disciplined operations. We manage registration pipelines, high-density networking, catering, and timekeeping without friction.",
  },
  {
    index: "04",
    title: "Continuity beyond demo day",
    description:
      "The strongest projects deserve a pathway forward. We help institutions, sponsors, and winning teams connect for incubation, hiring, and continued product development.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero about-hero team-hero">
        <Container>
          <p className="eyebrow">ABOUT</p>
          <h1>
            We have been inside the room. Now we help institutions <em>build it.</em>
          </h1>
          <p>
            Our team brings together hackathon champions, AI researchers, operations managers, and brand designers. We understand both the energy participants remember and the preparation, decisions and operational details required to create it.
          </p>

          <div className="team-stats-grid">
            <div className="team-stat-card">
              <span className="team-stat-number">10</span>
              <span className="team-stat-label">Core Specialists</span>
            </div>
            <div className="team-stat-card">
              <span className="team-stat-number">3+</span>
              <span className="team-stat-label">Flagship Hackathons</span>
            </div>
            <div className="team-stat-card">
              <span className="team-stat-number">500+</span>
              <span className="team-stat-label">Builders & Participants</span>
            </div>
            <div className="team-stat-card">
              <span className="team-stat-number">48H</span>
              <span className="team-stat-label">Continuous Innovation Sprints</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section about-story">
        <Container>
          <div>
            <SectionHeader index="01 /" eyebrow="OUR STORY" title="Give ambition a working structure." />
            <p className="large-copy">
              We started with a simple observation: institutions often have the ambition to run a meaningful hackathon but not always the time, systems, network or prior experience needed to manage every moving part.
            </p>
            <p>
              Our role is to provide that structure while preserving the energy and identity that make each event unique.
            </p>
          </div>
          <MediaFrame
            src="/images/site/about-team.jpg"
            alt="The organizing team gathered at the Perceptron International Hackathon"
            caption="The people behind the event experience"
            aspect="landscape"
            position="center"
            color="orange"
            className="about-story__media"
          />
        </Container>
      </section>

      <section className="section team-section">
        <Container>
          <SectionHeader
            index="02 /"
            eyebrow="HOW WE OPERATE"
            title="Standards that define our delivery."
            intro="Organizing a premier hackathon requires both creative energy and logistical discipline. Here is how our team approaches every engagement."
          />
          <div className="team-principles-grid">
            {principles.map((item) => (
              <article key={item.index} className="team-principle-card">
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {team.length > 0 && (
        <section className="section team-section--bright" id="team-directory">
          <Container>
            <SectionHeader
              index="03 /"
              eyebrow="OUR TEAM"
              title="The builders and engineers behind the work."
              intro="Explore our core specialists by department across leadership, AI engineering, on-ground operations, community relations, and design."
            />
            <TeamFilterGrid members={team} />
          </Container>
        </section>
      )}

      <section className="section team-section--mint">
        <Container>
          <div className="engagement-grid">
            <div>
              <SectionHeader
                index="04 /"
                eyebrow="COLLABORATE WITH US"
                title="Bring our team to your institution."
              />
              <p style={{ maxWidth: "480px" }}>
                Whether you are planning a university-wide innovation hackathon, an international AI sprint, or a corporate engineering challenge, our team is ready to design and produce it end-to-end.
              </p>
              <div style={{ marginTop: "28px" }}>
                <ButtonLink href="/contact" variant="primary">
                  Start Planning
                </ButtonLink>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(21,21,21,.3)", paddingTop: "12px" }}>
              <ol className="engagement-list" style={{ borderTop: 0 }}>
                <li>
                  <span>01</span>
                  <div>
                    <h3>End-to-End Production</h3>
                    <p>Complete execution from initial concept, track formulation, and branding to stage management and judging.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Challenge & AI Track Architecture</h3>
                    <p>Custom dataset curation, problem statements, and live evaluation pipelines tailored to your industry goals.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Mentorship & Event Floor Operations</h3>
                    <p>Hands-on engineering support, participant enablement, and continuous on-ground leadership throughout the sprint.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
