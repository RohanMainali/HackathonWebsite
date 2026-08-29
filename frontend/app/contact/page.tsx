import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = pageMetadata(
  "Plan a Hackathon",
  "Share your initial brief and start a practical conversation about your hackathon or innovation program.",
  "/contact"
);

export default function ContactPage() {
  const socials = Object.entries(siteConfig.socials).filter(([, value]) => value);

  return (
    <main id="main-content">
      <section className="page-hero contact-hero">
        <Container>
          <p className="eyebrow">PLAN A HACKATHON</p>
          <h1>
            Tell us what you want your hackathon to <em>achieve.</em>
          </h1>
          <p>
            Give us the initial context. The brief does not need to be complete—we help institutions shape technical problem statements, timeline, mentor pipelines, and on-ground logistics.
          </p>
        </Container>
      </section>

      <section className="section form-section-v2">
        <Container className="contact-layout-grid">
          <div className="contact-form-col">
            <ContactForm />
          </div>

          <aside className="contact-sidebar">
            <div className="contact-card contact-card--channels">
              <p className="eyebrow">DIRECT CONTACT</p>
              <h3>Prefer direct communication?</h3>
              <p className="contact-card__sub">
                Reach our leadership team directly for quick questions or time-sensitive event briefs.
              </p>

              <div className="contact-channel-list">
                <a href={`mailto:${siteConfig.contact.email}`} className="contact-channel-item">
                  <div>
                    <span className="channel-label">Email</span>
                    <strong className="channel-value">{siteConfig.contact.email}</strong>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone}`} className="contact-channel-item">
                  <div>
                    <span className="channel-label">Phone / WhatsApp</span>
                    <strong className="channel-value">{siteConfig.contact.phone}</strong>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div>
                    <span className="channel-label">Location</span>
                    <strong className="channel-value">{siteConfig.contact.location}</strong>
                  </div>
                </div>
              </div>

              {socials.length > 0 && (
                <div className="contact-social-links">
                  <span className="social-links-label">Network</span>
                  <div className="social-links-row">
                    {socials.map(([name, href]) => (
                      <a key={name} href={href} target="_blank" rel="noreferrer" className="social-pill">
                        {name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="contact-card contact-card--process">
              <p className="eyebrow">HOW WE WORK</p>
              <ol className="next-steps-list">
                <li>
                  <span className="step-num">01</span>
                  <div>
                    <strong>Brief & Feasibility Review</strong>
                    <p>We review your dates, estimated audience, and tracks within 24 hours.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">02</span>
                  <div>
                    <strong>30-Min Discovery Call</strong>
                    <p>We align on format, technical tracks, judging criteria, and mentors.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">03</span>
                  <div>
                    <strong>Actionable Proposal</strong>
                    <p>You receive a scope of work, milestone schedule, and budget options.</p>
                  </div>
                </li>
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
