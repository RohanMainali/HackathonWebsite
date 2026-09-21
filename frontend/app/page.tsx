import Image from "next/image";
import type { Metadata } from "next";
import { hackathons } from "@/content/hackathons";
import { pillars } from "@/content/pillars";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FinalCTA } from "@/components/sections/FinalCTA";
export const metadata: Metadata = {
  title: "AMatrix Labs — Ideas, people, possibilities",
  description:
    "Ideathons and hackathons. Speakers and community. Research and innovation. Find your next collaboration with AMatrix Labs.",
};
export default function HomePage() {
  return (
    <main id="main-content">
      <section className="innovation-hero">
        <div className="container innovation-hero__inner">
          <div className="innovation-hero__copy">
            <p className="eyebrow">PEOPLE. IDEAS. REAL IMPACT.</p>
            <h1>
              Build experiences
              <br />
              that bring ideas
              <br />
              <span>to life.</span>
            </h1>
            <p className="innovation-hero__intro">
              Hackathons, speakers, and collaborative research. <br />
              Good people, making meaningful progress.
            </p>
            <div className="innovation-hero__actions">
              <a className="button button--primary" href="/contact">
                Plan a program{" "}
                <svg
                  className="plan-arrow"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </a>
              <a className="hero-work-link" href="/work">
                Explore our work
              </a>
            </div>
            <p className="innovation-hero__signature">
              A brighter tomorrow.
              <br />
              Built together.
            </p>
          </div>
          <figure className="innovation-hero__photo">
            <Image
              src="/images/site/cleaned.png"
              alt="Participants collaborating at the Deep Learning Codefest"
              width={1400}
              height={1100}
              sizes="(max-width: 700px) 100vw, 60vw"
              priority
            />
            <figcaption>Ideas find their people here.</figcaption>
          </figure>
        </div>
      </section>
      <section id="what-we-do" className="section container">
        <div className="editorial-section-heading">
          <p className="eyebrow">01 / WHAT WE DO</p>
          <h2>
            Three ways to
            <br />
            <em>move things forward.</em>
          </h2>
          <p>
            Find your people.
            <br />
            Make something that matters.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((item, i) => (
            <a className="pillar" href={`/${item.slug}`} key={item.slug}>
              <div className="pillar-photo">
                <Image
                  width={1400}
                  height={850}
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
                <span>0{i + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>
                {
                  [
                    "From a spark of an idea to a room full of builders.",
                    "Fresh perspectives. Meaningful connections.",
                    "Big questions. Shared experiments. Practical progress.",
                  ][i]
                }
              </p>
              <span className="pillar-link">
                Explore{" "}
                {i === 0
                  ? "programs"
                  : i === 1
                    ? "the community"
                    : "collaboration"}{" "}
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="featured-event">
        <div className="container">
          <Image
            width={1400}
            height={850}
            src="/images/site/lifeline-hero.jpg"
            alt="Nepal landscape, the setting for Lifeline Nepal"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">ON THE HORIZON / HACKATHON</p>
            <h2>
              Build for the moments
              <br />
              that matter most.
            </h2>
            <p>
              Lifeline Nepal brings builders together to explore disaster
              response and resilience.
            </p>
            <a className="button button--secondary" href="/upcoming">
              Explore Lifeline Nepal
            </a>
          </div>
        </div>
      </section>
      <section className="section container selected-work-home">
        <div className="editorial-section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Ideas built.
            <br />
            <em>Experiences shared.</em>
          </h2>
          <a className="inline-link" href="/work">
            Explore all our work
          </a>
        </div>
        <div className="selected-work-home__grid">
          {[...hackathons]
            .filter(
              (project) =>
                project.slug.includes("perceptron") ||
                project.slug === "turboline-hackathon-2025",
            )
            .sort((a, b) => Number(b.year) - Number(a.year))
            .map((project) => (
              <a
                className="selected-work-home__item"
                key={project.slug}
                href={`/work/${project.slug}`}
              >
                <Image
                  src={project.coverImage.src!}
                  alt={project.coverImage.alt}
                  width={1000}
                  height={650}
                />
                <p className="eyebrow">
                  {project.year} · {project.format}
                </p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </a>
            ))}
        </div>
      </section>
      <EngagementModels />
      <section className="join-band container">
        <p>Better, together.</p>
        <a href="/partners">Become a partner</a>
        <a href="/sponsors">Support an initiative</a>
      </section>
      <FinalCTA />
    </main>
  );
}
