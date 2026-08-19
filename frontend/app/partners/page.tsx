import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { partners, sponsorshipRoles } from "@/content/partners";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata(
  "Partners & Sponsors",
  "The academic institutions, technology companies, and community partners supporting our hackathons and innovation sprints.",
  "/partners"
);

export default function PartnersPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <Container>
          <p className="eyebrow">PARTNERS & SPONSORS</p>
          <h1>
            Built alongside companies, institutions and <em>builders.</em>
          </h1>
          <p>
            Our events are made possible through close collaboration with forward-thinking universities, technology platforms, industry challenge partners, and community sponsors.
          </p>
        </Container>
      </section>

      <section className="section partners-section">
        <Container>
          <SectionHeader
            index="01 /"
            eyebrow="PREVIOUS EVENT SPONSORS"
            title="Sponsors who powered our past hackathons."
            intro="From infrastructure and prize funding to industry-grade problem statements and participant gear, our sponsors play an essential role in every sprint."
          />
          <div className="partners-grid">
            {partners.map((partner) => (
              <article key={partner.name} className="partner-card">
                <div>
                  <div className="partner-card__header">
                    <h3>{partner.name}</h3>
                    <span className="partner-badge">{partner.category}</span>
                  </div>
                  <p className="partner-card__contribution">{partner.contribution}</p>
                  <p className="partner-card__desc">{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <Container>
          <SectionHeader
            index="02 /"
            eyebrow="HOW PARTNERS CONTRIBUTE"
            title="Every partner brings specific value to the room."
            intro="We align sponsorship packages to meaningful areas where your organization has genuine expertise and impact."
          />
          <div className="sponsor-roles-grid">
            {sponsorshipRoles.map((role) => (
              <div key={role.title} className="sponsor-role-item">
                <span className="partner-badge partner-badge--orange">{role.badge}</span>
                <h4>{role.title}</h4>
                <p style={{ fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>
                  {role.partner}
                </p>
                <p>{role.details}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" style={{ background: "var(--mint)" }}>
        <Container>
          <div className="engagement-grid">
            <div>
              <SectionHeader
                index="03 /"
                eyebrow="BECOME A PARTNER"
                title="Partner with us on our next sprint."
              />
              <p style={{ maxWidth: "480px" }}>
                Support the upcoming <strong>Sports Analytics Sprint 2</strong> or collaborate on custom hackathons, research initiatives, IoT prototyping, and specialized builder training.
              </p>
              <div style={{ marginTop: "28px" }}>
                <ButtonLink href="/contact" variant="primary">
                  Discuss Partnership
                </ButtonLink>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(21,21,21,.3)", paddingTop: "12px" }}>
              <ol className="engagement-list" style={{ borderTop: 0 }}>
                <li>
                  <span>01</span>
                  <div>
                    <h3>Challenge & Problem Statements</h3>
                    <p>Pose real engineering problems to hundreds of top builders and discover working prototypes.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Developer Tooling & Tech Stack</h3>
                    <p>Put your APIs, SDKs, compute platforms, or hardware directly into developers&apos; workflows.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Branding & Talent Pipeline</h3>
                    <p>Connect directly with high-caliber developers, researchers, and technical leaders.</p>
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
