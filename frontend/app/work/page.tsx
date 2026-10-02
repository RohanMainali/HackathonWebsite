import Image from "next/image";
import { PageIntro } from "@/components/design/PageIntro";
import { hackathons } from "@/content/hackathons";
import { workAudiences } from "@/content/work";
import "./work.css";
export const metadata = {
  title: "Our Work",
  description:
    "Explore the hackathons and innovation programs delivered by Amatrix Labs.",
};
export default function Page() {
  return (
    <main id="main-content" className="design-page">
      <PageIntro
        label="OUR WORK"
        title="Knowledge into action. Ideas into outcomes."
        description="What we do, how we do it, and the opportunities our events help create for academic institutions and industry."
      />
      <nav className="work-jump content-width" aria-label="Our Work sections"><a href="#our-work">01 / Our work</a><a href="#approach">02 / Our approach</a></nav>
      <section id="our-work" className="content-width work-section">
        <header className="design-section-title"><p className="eyebrow">01 / OUR WORK</p><h2>What we do.</h2><p>Purposeful events that connect learning, people, and real challenges.</p></header>
        <div className="work-audiences">{workAudiences.map((audience) => <article key={audience.slug}>
          <h3>{audience.title}</h3><p>{audience.description}</p>
          <h4>Outcomes we work toward</h4>
          <ul className="work-outcomes">{audience.outcomes.map(([title, copy]) => <li key={title}><strong>{title}</strong><p>{copy}</p></li>)}</ul>
          <a className="editorial-link" href={`/contact/${audience.slug}`}>{audience.slug === "academic" ? "Plan a campus program" : "Discuss an industry challenge"} →</a>
        </article>)}</div>
        <h3 className="work-project-title">See the work in practice.</h3>
        <div className="project-collection">
        {[...hackathons]
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((p, i) => (
            <a className="project-entry" href={`/work/${p.slug}`} key={p.slug}>
              <div className="project-entry-image">
                <Image
                  src={p.coverImage.src!}
                  alt={p.coverImage.alt}
                  width={1200}
                  height={750}
                  priority={i === 0}
                  sizes="(max-width: 700px) 100vw, 65vw"
                />
              </div>
              <div className="project-entry-copy">
                <p className="eyebrow">
                  {p.year} / {p.duration}
                </p>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <span className="editorial-link">Discover the project</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section id="approach" className="content-width work-section">
        <header className="design-section-title"><p className="eyebrow">02 / OUR APPROACH</p><h2>How we do it.</h2><p>A shared plan, practical preparation, and support beyond event day.</p></header>
        <div className="work-audiences">{workAudiences.map((audience) => <article key={audience.slug}><h3>{audience.title}</h3>
          <ol className="work-phases">{audience.phases.map(([title, copy]) => <li key={title}><h4>{title}</h4><p>{copy}</p></li>)}</ol>
          <a className="editorial-link" href={`/contact/${audience.slug}`}>{audience.slug === "academic" ? "Start an academic partnership" : "Start an industry collaboration"} →</a>
        </article>)}</div>
      </section>
    </main>
  );
}
