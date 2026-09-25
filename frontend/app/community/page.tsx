import Image from "next/image";
import { InquiryFlow } from "@/components/forms/InquiryFlow";
import "../people-pages.css";

export const metadata = {
  title: "Community",
  description:
    "Find your people at Amatrix Labs. Learn with peers, share your experience, and build practical ideas through Nepal’s hackathons and community programs.",
};

const reasons = [
  [
    "Learn by doing",
    "Move from a concept to a prototype. Ask questions, test an approach, and learn from people working through the same challenge.",
  ],
  [
    "Find your people",
    "Meet students, developers, researchers, and mentors with different strengths. Discover what you can make together.",
  ],
  [
    "Make your experience useful",
    "Share a skill, guide a team, or help organize an event. You don’t have to be on stage to make a difference.",
  ],
];

export default function CommunityPage() {
  return (
    <main id="main-content" className="people-page community-page">
      <section className="people-hero site-shell">
        <div>
          <p className="people-label">The Amatrix community / Nepal</p>
          <h1>
            Find your people.
            <br />
            <em>Build your next.</em>
          </h1>
          <p>
            A good idea can start with one person. Taking it somewhere is better
            together. Come learn, make, and share with people who are curious
            about what’s possible.
          </p>
          <div className="people-actions">
            <a className="people-button" href="#join">
              Find your place
            </a>
            <a className="people-link" href="/lifeline-nepal-2027#register-interest">
              Join a hackathon
            </a>
          </div>
        </div>
        <figure className="people-hero-image">
          <Image
            src="/images/pages/community-team.webp"
            alt="Amatrix organizers and participants together at the Perceptron hackathon"
            fill
            unoptimized
            loading="eager"
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
          <figcaption>Different starting points. Something shared.</figcaption>
        </figure>
      </section>
      <section className="people-story site-shell">
        <p className="people-label">Why we bring people together</p>
        <div>
          <h2>
            Talent needs a place
            <br />
            to meet opportunity.
          </h2>
          <p>
            Learning something new is one thing. Finding the people, confidence,
            and space to put it into practice is another. That is the gap we
            want Amatrix to help close.
          </p>
          <p>
            Our programs bring the classroom, the community, and industry into
            the same room. A student can ask a mentor a question. A team can
            test an unfamiliar tool. An idea can become something people can
            actually try.
          </p>
          <p className="people-story-end">
            You don’t need to arrive with all the answers. Bring a question
            worth exploring.
          </p>
        </div>
      </section>
      <section className="people-tinted">
        <div className="site-shell">
          <header className="people-section-heading">
            <p className="people-label">Why join us</p>
            <h2>
              Leave with more
              <br />
              than a finished project.
            </h2>
          </header>
          <div className="people-three">
            {reasons.map(([title, copy], index) => (
              <article key={title}>
                <span className="people-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="people-feature site-shell">
        <div className="people-feature-image">
          <Image
            src="/images/pages/community-mentoring.webp"
            alt="Participants and a mentor working together during Deep Learning Codefest"
            fill
            unoptimized
            loading="eager"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="people-label">A glimpse of the experience</p>
          <h2>
            Start with learning.
            <br />
            End by making.
          </h2>
          <p>
            At Deep Learning Codefest, a 10-day AI and machine-learning bootcamp
            led into a 10-hour build. Teams brought together senior students,
            juniors, and freshers to explore autonomous-vehicle models.
          </p>
          <p>
            That mix matters: different experience levels, a shared challenge,
            and a chance to learn from each other while doing the work.
          </p>
          <a className="people-link" href="/work/deep-learning-codefest">
            Inside Deep Learning Codefest
          </a>
        </div>
      </section>
      <section className="people-pathways site-shell">
        <header className="people-section-heading">
          <p className="people-label">There’s more than one way in</p>
          <h2>
            Come as you are.
            <br />
            Contribute in your own way.
          </h2>
        </header>
        <div className="people-three">
          <article>
            <span className="people-number">For learners & builders</span>
            <h3>Take on a challenge.</h3>
            <p>
              Explore Lifeline Nepal, our planned 2027 hackathon focused on
              disaster response and resilience.
            </p>
            <a className="people-button" href="/lifeline-nepal-2027">
              Explore Lifeline Nepal
            </a>
          </article>
          <article>
            <span className="people-number">For mentors & speakers</span>
            <h3>Pass something on.</h3>
            <p>
              Bring a practical skill, a useful perspective, or time to support
              a team finding its way.
            </p>
            <a className="people-button" href="/speakers">
              Share your experience
            </a>
          </article>
          <article>
            <span className="people-number">For community contributors</span>
            <h3>Help make room.</h3>
            <p>
              Support outreach, contribute to an event, or introduce a
              collaboration that could bring people together.
            </p>
            <a className="people-button" href="#join">
              Tell us your idea
            </a>
          </article>
        </div>
      </section>
      <section className="people-form-section site-shell" id="join">
        <div>
          <p className="people-label">Start with a hello</p>
          <h2>
            Your next connection
            <br />
            can start here.
          </h2>
          <p>
            Tell us what you’re curious about and how you’d like to take part.
            Whether you want to learn, mentor, or help behind the scenes, we’d
            like to hear from you.
          </p>
          <p>Representing a college or a company?</p>
          <a className="people-link" href="/partners">
            Explore a partnership
          </a>
        </div>
        <InquiryFlow kind="community" />
      </section>
    </main>
  );
}
