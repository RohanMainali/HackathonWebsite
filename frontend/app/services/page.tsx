import Image from "next/image";
import { PageIntro } from "@/components/design/PageIntro";
import { pillars } from "@/content/pillars";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FinalCTA } from "@/components/sections/FinalCTA";
export const metadata = { title: "For Business" };
export default function Page() {
  return (
    <main id="main-content" className="design-page">
      <PageIntro
        label="FOR BUSINESSES & ORGANIZATIONS"
        title="Your ambition. Our shared project."
        description="Connect with talent, explore a challenge, or build a community. We design and deliver programs that bring people and purpose together."
      >
        <a className="button button--primary" href="/contact">
          Discuss a project
        </a>
      </PageIntro>
      <section className="service-collection content-width">
        {pillars.map((p, i) => (
          <a className="service-entry" href={`/${p.slug}`} key={p.slug}>
            <Image
              src={p.image}
              alt={p.alt}
              width={800}
              height={550}
              sizes="(max-width: 700px) 100vw, 40vw"
            />
            <div>
              <p className="eyebrow">0{i + 1} / OUR CAPABILITIES</p>
              <h2>{p.title}</h2>
              <p>{p.copy}</p>
              <span className="editorial-link">Explore this service</span>
            </div>
          </a>
        ))}
      </section>
      <EngagementModels />
      <FinalCTA />
    </main>
  );
}
