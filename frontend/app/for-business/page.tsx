import Image from "next/image";

export const metadata = { title: "For Business" };

const capabilities = [
  ["01", "Innovation programs", "Turn a real challenge into a focused program."],
  ["02", "Technology projects", "Explore and prototype useful technical ideas."],
  ["03", "Talent and community", "Connect with capable, curious builders."],
  ["04", "Research collaboration", "Investigate questions with practical value."],
  ["05", "Events and workshops", "Create an experience people remember."],
  ["06", "Strategic partnerships", "Build a longer relationship around shared goals."],
];

export default function BusinessPage() {
  return <main id="main-content" className="new-page"><section className="business-hero"><div className="site-shell"><div><p className="kicker">For business</p><h1>Good problems deserve the right room.</h1><p>We connect organizations with technology, research, talent, and community.</p><a className="action action--light" href="/contact">Start a conversation</a></div><div className="business-hero__image"><Image src="/images/hackathons/iims-perceptron-2026/technical-mentoring.jpg" alt="An Amatrix mentor working with a technical team" fill priority sizes="(max-width:760px) 100vw, 50vw" /></div></div></section>
    <section className="capability-index site-shell"><header className="section-heading"><p className="kicker">Ways to work together</p><h2>Built around the challenge.</h2></header><div>{capabilities.map(([number,title,copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="business-proof site-shell"><Image src="/images/hackathons/turboline-iims-2025/final-presentation.jpg" alt="A team presenting its work to judges" width={1100} height={760} /><div><p className="kicker">From brief to outcome</p><h2>Make the work visible.</h2><p>Bring the question. We shape the people, program, and experience around it.</p><a className="text-action" href="/work">See previous work →</a></div></section>
    <section className="simple-cta site-shell"><p className="kicker">Your next initiative</p><h2>Let&apos;s make it useful.</h2><a className="action action--light" href="/contact">Start a conversation</a></section></main>;
}
