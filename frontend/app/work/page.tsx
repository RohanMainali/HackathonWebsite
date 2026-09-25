import Image from "next/image";
import { PageIntro } from "@/components/design/PageIntro";
import { hackathons } from "@/content/hackathons";
import { FinalCTA } from "@/components/sections/FinalCTA";
export const metadata = {
  title: "Our Work",
  description:
    "Explore the hackathons and innovation programs delivered by Amatrix Labs.",
};
export default function Page() {
  return (
    <main id="main-content" className="design-page">
      <PageIntro
        label="SELECTED WORK / 2024—2026"
        title="Made possible, together."
        description="A few of the challenges, communities, and ideas we’ve helped bring to life."
      />
      <section className="project-collection content-width">
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
      </section>
      <FinalCTA />
    </main>
  );
}
