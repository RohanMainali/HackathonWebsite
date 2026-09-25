import Image from "next/image";
import { SponsorForm } from "@/components/forms/CollaborationForms";
import { partners } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";
import "../people-pages.css";
import "./sponsors.css";

export const metadata = pageMetadata(
  "Sponsorship Enquiry",
  "Support Nepal’s builders with prizes, tools, expertise, or event resources. Meet our previous sponsors and explore sponsorship with Amatrix Labs.",
  "/sponsors",
);

const opportunities = [
  [
    "01",
    "Fund the possibilities.",
    "Support prizes and the resources that help bring a program to life.",
    "Funding & prizes",
  ],
  [
    "02",
    "Put tools in their hands.",
    "Give builders access to compute, software, datasets, and technical expertise.",
    "Technology & mentorship",
  ],
  [
    "03",
    "Make room for people.",
    "Contribute a venue, hospitality, event kits, or merchandise to support the participant experience.",
    "Event & in-kind support",
  ],
];

export default async function SponsorsPage({
  searchParams,
}: {
  searchParams: Promise<{ event?: string | string[] }>;
}) {
  const params = await searchParams;
  const initiative = params.event === "Lifeline Nepal" ? "Lifeline Nepal" : "";
  return (
    <main id="main-content" className="people-page sponsors-page">
      <section className="people-hero site-shell">
        <div>
          <p className="people-label">Sponsorship / Amatrix Labs</p>
          <h1>
            Be behind
            <br />
            their next
            <br />
            <em>breakthrough.</em>
          </h1>
          <p>
            A first prototype. A new skill. A team with the confidence to keep
            going. Your support helps Nepal’s builders take the next step.
          </p>
          <div className="people-actions">
            <a className="people-button" href="#sponsor-enquiry">
              Let’s talk sponsorship
            </a>
            <a className="people-link" href="#previous-sponsors">
              Meet previous sponsors ↗
            </a>
          </div>
        </div>
        <figure className="people-hero-image">
          <Image
            src="/images/pages/community-celebration.webp"
            alt="Hackathon participants celebrating with their certificates"
            fill
            unoptimized
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <figcaption>Behind every build, a community of support.</figcaption>
        </figure>
      </section>
      <section
        className="sponsor-history site-shell"
        id="previous-sponsors"
        aria-labelledby="sponsor-history-title"
      >
        <header className="people-section-heading">
          <p className="people-label">Previous sponsors & supporters</p>
          <h2 id="sponsor-history-title">They helped make it happen.</h2>
          <p>
            Meet the organizations that have contributed tools, prizes,
            challenges, and event resources to our past programs.
          </p>
        </header>
        <div className="sponsor-history-grid">
          {partners.map((partner, index) => (
            <article key={partner.name}>
              <div className="sponsor-wordmark">
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{partner.name}</h3>
              </div>
              <p className="people-label">{partner.category}</p>
              <p>{partner.contribution}.</p>
            </article>
          ))}
        </div>
        <a className="people-link" href="/work">
          Explore the work they supported ↗
        </a>
      </section>
      <section className="people-dark sponsor-opportunities">
        <div className="site-shell">
          <header className="people-section-heading">
            <p className="people-label">Find your way to contribute</p>
            <h2>
              Big ambitions.
              <br />
              Many ways to help.
            </h2>
            <p>
              Bring what your organization does best. We’ll explore a
              contribution that fits the program and your goals.
            </p>
          </header>
          <div className="people-three">
            {opportunities.map(([number, title, description, label]) => (
              <article key={number}>
                <span className="people-number">
                  {number} / {label}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sponsor-next site-shell">
        <div>
          <p className="people-label">On the horizon / Early 2027</p>
          <h2>Lifeline Nepal · 2027</h2>
        </div>
        <div>
          <p>
            A planned 48-hour hackathon for disaster response and resilience in
            Nepal. Help teams explore practical technology for the moments that
            matter.
          </p>
          <a className="people-link" href="/lifeline-nepal-2027">
            Discover the initiative ↗
          </a>
        </div>
      </section>
      <section className="people-form-section site-shell" id="sponsor-enquiry">
        <div>
          <p className="people-label">Start a conversation</p>
          <h2>
            A little support.
            <br />A lasting possibility.
          </h2>
          <p>
            You don’t need a finished proposal. Tell us what you have in mind,
            and we’ll work through the possibilities together.
          </p>
          <ol className="people-steps">
            <li>
              <h3>Share your interests.</h3>
              <p>
                Tell us about your organization and how you’d like to
                contribute.
              </p>
            </li>
            <li>
              <h3>Find the right fit.</h3>
              <p>
                We’ll discuss the initiative, your goals, and the resources
                needed.
              </p>
            </li>
            <li>
              <h3>Shape the details together.</h3>
              <p>
                Agree on the scope, timeline, and recognition before making a
                commitment.
              </p>
            </li>
          </ol>
          <p className="sponsor-direct">
            Prefer email?
            <br />
            <a className="people-link" href="mailto:contact@amatrixlabs.com">
              contact@amatrixlabs.com
            </a>
          </p>
        </div>
        <SponsorForm initiative={initiative} />
      </section>
    </main>
  );
}
