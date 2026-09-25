import Image from "next/image";
import { ParticipationForm } from "@/components/forms/ParticipationForm";
import { PartnershipOptions } from "@/components/sections/PartnershipOptions";
import { SponsorPrompt } from "@/components/interactive/SponsorPrompt";
import { partners } from "@/content/partners";
import "./involve.css";

export const metadata = {
  title: "Get Involved",
  description:
    "Partner with Amatrix Labs as an academic institution or company, support an initiative, or join Nepal’s community of builders.",
};

export default function ParticipatePage() {
  return (
    <main id="main-content" className="involve-page">
      <nav
        className="involve-top-options site-shell"
        aria-label="Choose a collaboration"
      >
        <a href="#academic-partnership">
          <span>
            <strong>Academic partnership</strong>
            <small>For colleges, universities & learning communities</small>
          </span>
        </a>
        <a href="#corporate-partnership">
          <span>
            <strong>Corporate partnership</strong>
            <small>For companies, industry teams & organizations</small>
          </span>
        </a>
      </nav>
      <section className="involve-hero site-shell">
        <div className="involve-hero-copy">
          <p className="kicker">Get involved / Amatrix Labs</p>
          <h1>
            Great ideas
            <br />
            need <em>people.</em>
            <br />
            Like you.
          </h1>
          <p>
            Bring your campus, your company, or your curiosity. Together, we can
            create more opportunities to learn, build, and innovate in Nepal.
          </p>
          <a className="involve-button" href="#participate">
            Participate in a hackathon
          </a>
          <a className="involve-sub-link" href="#community">
            Here to learn or contribute?
          </a>
        </div>
        <figure>
          <Image
            src="/images/pages/community-celebration.webp"
            alt="Participants celebrating with certificates at an Amatrix hackathon"
            fill
            unoptimized
            loading="eager"
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <figcaption>
            <span>Different perspectives. Shared purpose.</span>
            <span>Built together, in Nepal</span>
          </figcaption>
        </figure>
      </section>
      <PartnershipOptions />
      <section className="involve-belief">
        <div className="site-shell">
          <p className="kicker">A place for collaboration</p>
          <h2>
            Where education meets industry.
            <br />
            And ideas become something real.
          </h2>
          <p>
            Amatrix Labs brings students, educators, technologists, and
            organizations together through hackathons, research, and community
            programs. Your contribution helps shape what happens next.
          </p>
        </div>
      </section>
      <section className="involve-proof">
        <div className="site-shell">
          <div className="involve-proof-image">
            <Image
              src="/images/pages/partner-mentoring.webp"
              alt="A mentor supporting participants during a technical session"
              fill
              unoptimized
              loading="eager"
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="kicker">Collaboration in practice</p>
            <h2>
              More than a name
              <br />
              on a banner.
            </h2>
            <p>
              Our past collaborations have put GPU compute, AI tools, industry
              challenges, and hands-on support into the lives of builders.
            </p>
            <p>
              From Turboline AI’s challenge statements and prizes to Perceptron
              AI’s platform resources, each partner brings something different
              to the room.
            </p>
            <a href="/work" className="involve-text-link">
              Explore our past work
            </a>
          </div>
        </div>
      </section>
      <section className="involve-partners site-shell">
        <p className="kicker">Part of the journey</p>
        <div>
          {partners.map((partner) => (
            <article key={partner.name}>
              <h3>{partner.name}</h3>
              <p>{partner.category}</p>
            </article>
          ))}
        </div>
        <a className="involve-text-link" href="/partners">
          Meet our partners
        </a>
      </section>
      <section className="involve-participation site-shell" id="participate">
        <div>
          <p className="kicker">Your next build / Early 2027</p>
          <h2>
            Participate in
            <br />
            Lifeline Nepal.
          </h2>
          <p>
            A 48-hour hackathon to build practical technology for disaster
            response and resilience in Nepal. Bring your curiosity and an
            interest in building for the moments that matter.
          </p>
          <a href="/lifeline-nepal-2027" className="involve-text-link">
            Explore the 2027 hackathon
          </a>
        </div>
        <ParticipationForm />
      </section>
      <section className="involve-community site-shell" id="community">
        <header className="involve-heading">
          <p className="kicker">For the curious. For the doers.</p>
          <h2>
            You don’t need an organization
            <br />
            to make a difference.
          </h2>
        </header>
        <div className="involve-community-grid">
          <article id="programs">
            <span>01</span>
            <h3>Join a program.</h3>
            <p>
              Find a team, explore an idea, and build something you can share.
            </p>
            <a href="#participate">Participate in Lifeline Nepal</a>
          </article>
          <article id="workshops">
            <span>02</span>
            <h3>Share what you know.</h3>
            <p>
              Lead a session, speak to the community, or guide a team through a
              challenge.
            </p>
            <a href="/speakers">Become a speaker</a>
          </article>
          <article id="opportunities">
            <span>03</span>
            <h3>Help make it happen.</h3>
            <p>
              Bring your energy to community outreach, event support, or a new
              collaboration.
            </p>
            <a href="/contact">Register your interest</a>
          </article>
        </div>
      </section>
      <section className="involve-sponsor-band">
        <div className="site-shell">
          <div>
            <p className="kicker">Fuel the next idea</p>
            <h2>
              A little support.
              <br />A world of possibility.
            </h2>
            <p>
              Help make room for more builders through prizes, compute, venues,
              or event resources.
            </p>
          </div>
          <a className="involve-button" href="/sponsors#sponsor-enquiry">
            Let’s talk sponsorship
          </a>
        </div>
      </section>
      <SponsorPrompt />
    </main>
  );
}
