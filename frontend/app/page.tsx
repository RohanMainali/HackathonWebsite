import Image from "next/image";
import type { Metadata } from "next";
import { hackathons } from "@/content/hackathons";
import { partners } from "@/content/partners";

export const metadata: Metadata = {
  title: "Amatrix Labs — A place to learn and build",
  description: "Programs, communities, and experiences for people building what comes next in Nepal.",
};

const programs = [
  { number: "02", title: "Research & Innovation", copy: "Explore meaningful problems through research and experimentation.", href: "/research", image: "/images/hackathons/iims-codefest/collaboration.jpg", kind: "portrait" },
  { number: "03", title: "Speakers & Community", copy: "Learn from people doing meaningful work.", href: "/speakers", image: "/images/hackathons/iims-perceptron-2026/expert-keynote.jpg", kind: "square" },
  { number: "04", title: "Custom Programs", copy: "Experiences designed with institutions and organizations.", href: "/for-business", image: "/images/hackathons/turboline-iims-2025/final-presentation.jpg", kind: "text" },
];

export default function HomePage() {
  const projects = [...hackathons].sort((a, b) => Number(b.year) - Number(a.year));
  const currentPartners = partners;
  return <main id="main-content" className="studio-home">
    <section className="studio-hero site-shell">
      <div className="studio-hero__copy">
        <p className="studio-label">Amatrix Labs / Kathmandu</p>
        <h1>A place to learn.<br />A community<br /><span>to build with.</span></h1>
        <p>Programs, communities, and experiences for people building what comes next.</p>
        <div className="studio-actions"><a className="studio-link studio-link--filled" href="/participate">Explore programs →</a><a className="studio-link" href="/work">See our work</a></div>
      </div>
      <figure className="studio-hero__image"><Image src="/images/hackathons/iims-perceptron-2026/mentor-team-collaboration.jpg" alt="A mentor and participants collaborating around laptops at an Amatrix program" fill priority sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>People · Ideas · Technology</figcaption></figure>
    </section>

    <section className="studio-programs site-shell" id="programs">
      <header className="studio-heading"><p className="studio-label">What we do</p><h2>Programs designed<br />to move ideas forward.</h2></header>
      <article className="program-feature"><div className="program-feature__image"><Image src="/images/hackathons/turboline-iims-2025/event-floor.jpg" alt="Teams building during an Amatrix hackathon" fill sizes="(max-width:760px) 100vw, 64vw" /></div><div className="program-copy"><span>01</span><h3>Hackathons & Ideathons</h3><p>Intensive spaces where people turn ideas into working solutions.</p><a href="/hackathons">Explore →</a></div></article>
      <div className="program-secondary">{programs.map((program) => <article className={`program-piece program-piece--${program.kind}`} key={program.title}>{program.kind !== "text" && <div><Image src={program.image} alt="" fill sizes="(max-width:760px) 100vw, 32vw" /></div>}<span>{program.number}</span><h3>{program.title}</h3><p>{program.copy}</p><a href={program.href}>Explore →</a></article>)}</div>
    </section>

    <section className="studio-work"><div className="site-shell"><header className="studio-heading studio-heading--light"><p className="studio-label">Selected work</p><h2>Work worth<br />showing.</h2></header><div className="studio-projects">{projects.map((project, index) => <a className={`studio-project studio-project--${index + 1}`} href={`/work/${project.slug}`} key={project.slug}><div><Image src={project.coverImage.src!} alt={project.coverImage.alt} fill sizes={index === 0 ? "(max-width:760px) 100vw, 68vw" : "(max-width:760px) 100vw, 32vw"} /></div><h3>{project.title}</h3><p>Hackathon / Kathmandu / {project.year}</p><span>View project →</span></a>)}</div><a className="studio-link studio-link--light" href="/work">View all work →</a></div></section>

    <section className="studio-people site-shell" id="community"><div className="studio-people__copy"><p className="studio-label">Community</p><h2>Built around<br />people.</h2><p>Students, builders, researchers, mentors, and curious people learning from one another.</p></div><figure className="studio-person studio-person--main"><Image src="/images/hackathons/iims-perceptron-2026/participant-check-in.jpg" alt="A participant sharing an idea with the Amatrix community" fill sizes="(max-width:760px) 100vw, 45vw" /></figure><figure className="studio-person studio-person--small"><Image src="/images/hackathons/iims-perceptron-2026/technical-mentoring.jpg" alt="A mentor supporting participants during a technical build" fill sizes="(max-width:760px) 70vw, 28vw" /></figure><div className="people-index"><span>Students</span><span>Builders</span><span>Researchers</span><span>Mentors</span><span>Speakers</span></div></section>

    <section className="studio-research"><div className="site-shell"><div className="studio-research__image"><Image src="/images/hackathons/iims-codefest/mentor-support.jpg" alt="A mentor and participant discussing technical work" fill sizes="(max-width:760px) 100vw, 60vw" /></div><div className="studio-research__copy"><p className="studio-label">Research & Innovation</p><h2>Technology should solve problems that matter.</h2><p>We bring technology, research, and people together around meaningful real-world challenges.</p><a className="studio-link" href="/research">Explore research →</a></div></div></section>

    <section className="studio-impact site-shell"><header><p className="studio-label">By the numbers</p><h2>Real work.<br />Real participation.</h2></header><div><strong>150+</strong><span>Innovators at Perceptron 2026</span></div><div><strong>57</strong><span>Teams at Turboline 2025</span></div><div><strong>8</strong><span>Nations at Turboline 2025</span></div><div><strong>19</strong><span>Institutions at Turboline 2025</span></div></section>

    <section className="studio-partners site-shell"><header className="studio-heading"><p className="studio-label">Built with others</p><h2>No meaningful work<br />happens alone.</h2></header><div className="studio-partner-grid">{currentPartners.map((partner) => <a href="/partners" key={partner.name}><strong>{partner.name}</strong><span>{partner.category}</span></a>)}</div></section>

    <section className="studio-partnership site-shell"><h2>Have a problem<br />worth solving?</h2><div><p>We work with institutions, organizations, and companies to create programs around meaningful challenges.</p><a className="studio-link studio-link--filled" href="/contact">Start a conversation →</a><a className="studio-link" href="/partners">Become a partner</a></div></section>

    <section className="studio-final"><Image src="/images/hackathons/iims-perceptron-2026/prototype-demonstration.jpg" alt="Participants presenting a working technology prototype" fill sizes="100vw" /><div /><div className="site-shell"><h2>Find your next<br />place to build.</h2><p>Join a program, meet your people, and make something worth sharing.</p><a className="studio-link studio-link--white" href="/participate">Explore opportunities →</a></div></section>
  </main>;
}
