import { PageIntro } from "@/components/design/PageIntro";
import { currentPrograms, upcomingPrograms } from "@/content/programs";
import "./programs.css";

export const metadata = { title: "Current Programs", description: "Explore current and upcoming Amatrix Labs programs and find out how to participate." };

export default function ProgramsPage() {
  return <main id="main-content" className="design-page">
    <PageIntro label="PROGRAMS" title="Find your next program." description="Explore our current and upcoming opportunities to learn, collaborate, and build." />
    <section className="program-list content-width" aria-labelledby="program-list-heading">
      <h2 id="program-list-heading">Current & upcoming programs</h2>
      <p>Register interest in Lifeline Nepal, or watch for registration to open for our next events.</p>
      {currentPrograms.map((program) => <article className="current-program" key={program.href}>
        <p className="eyebrow">{program.status}</p>
        <h3>{program.title}</h3>
        <p>{program.description}</p><p>{program.schedule}</p>
        <div className="program-actions"><a className="button button--primary" href={program.participateHref}>Register interest</a><a className="editorial-link" href={program.href}>Explore program →</a></div>
        <small>Registering interest does not confirm a place.</small>
      </article>)}
      <div className="upcoming-programs">{upcomingPrograms.map((program) => <article className="current-program upcoming-program" id={program.id} key={program.id}>
        <h3>{program.title}</h3>
        <p className="registration-soon">Registration opening soon</p>
        <p>Information coming soon.</p>
      </article>)}</div>
      <a className="editorial-link" href="/work">Explore completed programs →</a>
    </section>
  </main>;
}
