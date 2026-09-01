import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = pageMetadata(
  "Contact & Collaboration",
  "Share your initial brief and start a practical conversation about your hackathon or innovation program.",
  "/contact"
);

export default function ContactPage() {
  const socials = Object.entries(siteConfig.socials).filter(([, value]) => value);

  return (
    <main id="main-content">
      <section className="contact-hero">
        <Container>
          <div className="contact-hero__header">
            <p className="eyebrow">PLAN AN EVENT</p>
            <h1>
              Tell us what you want your hackathon to <em>achieve.</em>
            </h1>
            <p className="contact-hero__intro">
              Share your initial context. The brief does not need to be finalized—we help institutions and companies structure event formats, problem statements, technical tracks, and on-ground logistics.
            </p>
          </div>
        </Container>
      </section>

      <section className="section contact-section">
        <Container>
          <div className="contact-layout">
            <div className="contact-main">
              <ContactForm />
            </div>

            <aside className="contact-sidebar">
              <div className="contact-card">
                <h3>Direct Channels</h3>
                <dl className="contact-info-list">
                  <div className="contact-info-item">
                    <dt>Email Address</dt>
                    <dd>
                      <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                    </dd>
                  </div>
                  <div className="contact-info-item">
                    <dt>Phone / WhatsApp</dt>
                    <dd>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="contact-info-item">
                    <dt>Response Standard</dt>
                    <dd>Within 24 business hours</dd>
                  </div>
                </dl>
                {socials.length > 0 && (
                  <div className="contact-socials">
                    <p className="contact-socials__title">Connect</p>
                    <nav aria-label="Social links">
                      {socials.map(([name, href]) => (
                        <a key={name} href={href} target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </div>

              <div className="contact-card contact-card--accent">
                <h3>What Happens Next</h3>
                <ol className="process-steps-list">
                  <li className="process-step-item">
                    <span className="process-step-num">01</span>
                    <div className="process-step-content">
                      <h4>Brief Review</h4>
                      <p>We review your goals, expected cohort size, and preferred dates.</p>
                    </div>
                  </li>
                  <li className="process-step-item">
                    <span className="process-step-num">02</span>
                    <div className="process-step-content">
                      <h4>20-Min Alignment Call</h4>
                      <p>A quick discussion to refine technical tracks, mentor needs, and format.</p>
                    </div>
                  </li>
                  <li className="process-step-item">
                    <span className="process-step-num">03</span>
                    <div className="process-step-content">
                      <h4>Tailored Event Plan</h4>
                      <p>You receive a clear execution roadmap with timeline, deliverables, and budget.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="contact-card contact-card--help">
                <h3>Urgent Event Planning?</h3>
                <p>
                  If you are working against a tight deadline, feel free to call us directly or mention your target timeline in the message.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}

