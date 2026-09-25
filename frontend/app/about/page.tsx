import Image from "next/image";
import { PageIntro } from "@/components/design/PageIntro";
import { TeamDirectory } from "@/components/sections/TeamDirectory";
import { FinalCTA } from "@/components/sections/FinalCTA";
export const metadata = { title: "About Amatrix Labs" };
const values = [
  [
    "People come first",
    "We design around the people learning, collaborating, and creating.",
  ],
  [
    "Purpose shapes the program",
    "We start with the outcome, then build the experience around it.",
  ],
  [
    "Care is in the details",
    "Prepared teams, clear communication, and fair judging make a difference.",
  ],
  [
    "Keep the possibilities open",
    "The best ideas deserve a path beyond the final presentation.",
  ],
];
export default function Page() {
  return (
    <main id="main-content" className="design-page">
      <PageIntro
        label="ABOUT AMATRIX LABS"
        title="A shared belief in what comes next."
        description="We’re organizers, engineers, and curious minds in Nepal. We bring people together to learn, experiment, and build."
      />
      <div className="about-cover content-width">
        <Image
          src="/images/site/about-team.jpg"
          alt="Amatrix Labs organizers and participants gathered at the Perceptron hackathon"
          width={1400}
          height={700}
          priority
          sizes="100vw"
        />
      </div>
      <section className="story-composition content-width">
        <p className="eyebrow">WHY WE DO THIS</p>
        <div>
          <h2>
            Progress begins when
            <br />
            people find each other.
          </h2>
          <p>
            We turn institutional ambition into places where people can learn,
            experiment, and build. Through hackathons, conversations, and
            collaborative research, we create the conditions for ideas to move
            forward.
          </p>
          <p>
            From the first conversation to the final demo, we’re in it with you.
          </p>
        </div>
      </section>
      <section className="values-composition content-width">
        {values.map(([title, copy], i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="team-composition content-width">
        <div className="design-section-title">
          <p className="eyebrow">OUR PEOPLE</p>
          <h2>The team behind it.</h2>
        </div>
        <TeamDirectory />
      </section>
      <FinalCTA />
    </main>
  );
}
