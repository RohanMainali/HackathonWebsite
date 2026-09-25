import Image from "next/image";
import { partners } from "@/content/partners";
import { PartnerInquiry } from "@/components/forms/PartnerInquiry";
import "../people-pages.css";

export const metadata = {
  title: "Our Partners",
  description:
    "Become an academic or corporate partner of Amatrix Labs. Connect education, industry, and Nepal’s builder community through practical collaboration.",
};

export default function PartnersPage() {
  return (
    <main id="main-content" className="people-page partners-page">
      <section className="people-hero site-shell">
        <div>
          <p className="people-label">Partner with Amatrix</p>
          <h1>
            Good ideas go further.
            <br />
            <em>Together.</em>
          </h1>
          <p>
            Connect your institution’s ambition or your company’s expertise with
            people ready to put it into practice. Let’s create opportunities
            that neither of us could build alone.
          </p>
          <div className="people-actions">
            <a className="people-button" href="#partner">
              Become a partner
            </a>
            <a className="people-link" href="#collaborators">
              Meet our collaborators
            </a>
          </div>
        </div>
        <figure className="people-hero-image">
          <Image
            src="/images/pages/partner-mentoring.webp"
            alt="Technical mentoring during an Amatrix hackathon"
            fill
            unoptimized
            loading="eager"
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
          <figcaption>Expertise shared. Possibilities opened.</figcaption>
        </figure>
      </section>
      <section
        className="people-partner-paths site-shell"
        aria-label="Partnership opportunities"
      >
        <article>
          <p className="people-label">Academic partnership</p>
          <h2>
            Take learning
            <br />
            beyond the classroom.
          </h2>
          <p>
            For colleges, universities, and learning communities. Give students
            a practical setting to apply their knowledge, work across
            disciplines, and learn alongside mentors.
          </p>
          <ul>
            <li>Co-host hackathons and workshops</li>
            <li>Connect students with industry challenges</li>
            <li>Explore research and campus-led initiatives</li>
          </ul>
          <a className="people-button" href="#partner">
            Let’s connect your campus
          </a>
        </article>
        <article>
          <p className="people-label">Corporate partnership</p>
          <h2>
            Bring your challenge.
            <br />
            Discover new perspectives.
          </h2>
          <p>
            For companies and industry teams. Bring a real problem, share your
            tools, and collaborate with emerging talent through a focused
            program.
          </p>
          <ul>
            <li>Shape relevant problem statements</li>
            <li>Contribute mentorship and technical resources</li>
            <li>Meet builders through their work</li>
          </ul>
          <a className="people-button" href="#partner">
            Let’s involve your team
          </a>
        </article>
      </section>
      <section className="people-story site-shell">
        <p className="people-label">Why partner with us</p>
        <div>
          <h2>
            The missing piece
            <br />
            might be each other.
          </h2>
          <p>
            A college brings curious students. A company brings a problem worth
            solving. A mentor brings experience. Each has something valuable,
            but the connections between them don’t always happen on their own.
          </p>
          <p>
            Amatrix creates a place for those connections to become practical
            work. We help shape the challenge, bring people together, and
            organize the experience around learning and building.
          </p>
          <p className="people-story-end">
            A useful partnership starts with a shared purpose, then gives
            everyone a way to contribute.
          </p>
        </div>
      </section>
      <section className="people-dark">
        <div className="site-shell">
          <header className="people-section-heading">
            <p className="people-label">What we can make possible</p>
            <h2>
              Shared purpose.
              <br />
              Practical contributions.
            </h2>
          </header>
          <div className="people-three">
            <article>
              <span className="people-number">01</span>
              <h3>Programs with context.</h3>
              <p>
                Connect learning with a real challenge, so participants
                understand why their work matters.
              </p>
            </article>
            <article>
              <span className="people-number">02</span>
              <h3>Expertise in the room.</h3>
              <p>
                Bring educators, technical teams, and mentors into the process
                where they can help ideas develop.
              </p>
            </article>
            <article>
              <span className="people-number">03</span>
              <h3>Work you can see.</h3>
              <p>
                Give teams a setting to prototype, demonstrate their thinking,
                and share what they have learned.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="people-collaborators site-shell" id="collaborators">
        <header className="people-section-heading">
          <p className="people-label">People behind the possibilities</p>
          <h2>
            Different contributions.
            <br />A shared commitment to builders.
          </h2>
          <p>
            These collaborators have supported our programs with tools,
            challenges, prizes, and the resources that make an event possible.
          </p>
        </header>
        <div className="people-three">
          {partners.map((partner) => (
            <article key={partner.name}>
              <p className="people-label">{partner.category}</p>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </article>
          ))}
        </div>
        <a className="people-link" href="/work">
          See the programs we’ve built
        </a>
      </section>
      <section className="people-feature site-shell">
        <div className="people-feature-image">
          <Image
            src="/images/pages/partner-presentation.webp"
            alt="A hackathon team presenting its project"
            fill
            unoptimized
            loading="eager"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="people-label">How we begin</p>
          <h2>
            First, a conversation.
            <br />
            Then, a shared plan.
          </h2>
          <ol className="people-steps">
            <li>
              <h3>Tell us what matters.</h3>
              <p>
                Your community, your goals, and the kind of contribution you
                have in mind.
              </p>
            </li>
            <li>
              <h3>Find the right format.</h3>
              <p>
                Explore a challenge, workshop, research initiative, or
                longer-term collaboration.
              </p>
            </li>
            <li>
              <h3>Agree on the details.</h3>
              <p>
                Shape roles, resources, timelines, and what a useful outcome
                looks like together.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="people-form-section site-shell" id="partner">
        <div>
          <p className="people-label">Write the next chapter with us</p>
          <h2>
            What could we
            <br />
            make possible?
          </h2>
          <p>
            You don’t need a finished proposal. Tell us about your institution
            or team and where you’d like to begin.
          </p>
          <p>Looking to support prizes, compute, venues, or event resources?</p>
          <a className="people-link" href="/sponsors#sponsor-enquiry">
            Explore sponsorship
          </a>
        </div>
        <PartnerInquiry />
      </section>
    </main>
  );
}
