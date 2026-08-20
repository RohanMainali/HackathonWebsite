import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink, TextLink } from "@/components/ui/ButtonLink";
import { CountdownTimer } from "@/components/interactive/CountdownTimer";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata(
  "Sports Analytics Sprint 2",
  "The second edition of our Sports Analytics Hackathon. Registration and the official event brief will be released on December 11.",
  "/upcoming"
);

export default function UpcomingHackathonPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <Container>
          <p className="eyebrow">UPCOMING HACKATHON</p>
          <h1>
            Sports Analytics <em>Sprint 2.</em>
          </h1>
          <p>
            The second edition of the Sports Analytics Hackathon is scheduled. Official team registration and the complete event brief will be released on December 11.
          </p>
        </Container>
      </section>

      <section className="section" style={{ background: "var(--paper-bright)", borderBottom: "1px solid var(--line)" }}>
        <Container>
          <CountdownTimer targetDate="2026-12-11T00:00:00" />
          <div className="cta-row" style={{ marginTop: "36px", justifyContent: "center" }}>
            <ButtonLink href="/contact" variant="primary">
              Pre-register / Sponsor
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              Explore Past Work
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <Container>
          <div className="engagement-grid">
            <div>
              <SectionHeader
                index="01 /"
                eyebrow="EVENT ANNOUNCEMENT"
                title="Sprint 2 is on the horizon."
                intro="Following our previous edition, Sports Analytics Sprint 2 brings together developers, data scientists, and sports technologists for a high-intensity innovation sprint."
              />
              <p style={{ maxWidth: "480px" }}>
                The full challenge brief, dataset documentation, evaluation guidelines, and open team registration will be officially published once the countdown reaches zero on <strong>December 11</strong>.
              </p>
              <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <ButtonLink href="/contact" variant="primary">
                  Pre-register Interest
                </ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  See Past Editions
                </ButtonLink>
              </div>
            </div>

            <div>
              <dl className="sprint-timeline">
                <div>
                  <dt>Dec 11, 2026</dt>
                  <dd>
                    <strong>Event Brief Release & Registration Opens</strong>
                    <br />
                    Official release of challenge documentation, evaluation criteria, and team registration portal.
                  </dd>
                </div>
                <div>
                  <dt>Pre-Sprint</dt>
                  <dd>
                    <strong>Dataset & Technical Preparation</strong>
                    <br />
                    Access to sample datasets, toolchains, and onboarding information for registered teams.
                  </dd>
                </div>
                <div>
                  <dt>Sprint Days</dt>
                  <dd>
                    <strong>Build & Mentorship</strong>
                    <br />
                    Intense build blocks with technical feedback and domain guidance.
                  </dd>
                </div>
                <div>
                  <dt>Demo Day</dt>
                  <dd>
                    <strong>Live Showcase & Evaluation</strong>
                    <br />
                    Final presentations and prototype demos before an expert evaluation panel.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" style={{ background: "var(--yellow)" }}>
        <Container>
          <div className="engagement-grid">
            <div>
              <SectionHeader
                index="02 /"
                eyebrow="EARLY INVOLVEMENT"
                title="Partner or support before launch."
              />
              <p style={{ maxWidth: "480px" }}>
                Universities, institutions, and technology companies interested in sponsoring prizes, providing mentors, or collaborating on challenge problem statements are invited to get in touch early.
              </p>
              <div style={{ marginTop: "28px" }}>
                <ButtonLink href="/contact" variant="primary">
                  Discuss Partnership
                </ButtonLink>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p className="large-copy" style={{ marginBottom: "20px" }}>
                Want to learn more about how we design and produce hackathons?
              </p>
              <div>
                <TextLink href="/services">Explore our services</TextLink>
              </div>
              <div style={{ marginTop: "16px" }}>
                <TextLink href="/partners">View our partner network</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}


