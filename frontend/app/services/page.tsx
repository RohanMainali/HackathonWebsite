import Image from "next/image";
import { pillars } from "@/content/pillars";
import { EngagementModels } from "@/components/sections/EngagementModels";
export const metadata = { title: "What We Do" };
export default function Page() {
  return (
    <main id="main-content">
      <section className="detail-hero container compact">
        <p className="eyebrow">WHAT WE DO</p>
        <h1>Ideas meet possibility.</h1>
        <p>Three ways to build something meaningful together.</p>
      </section>
      <section className="container pillar-grid">
        {pillars.map((p) => (
          <a className="pillar" href={`/${p.slug}`} key={p.slug}>
            <div className="pillar-photo">
              <Image width={1400} height={850} src={p.image} alt={p.alt} />
            </div>
            <h2>{p.title}</h2>
            <p>{p.copy}</p>
            <span>Explore</span>
          </a>
        ))}
      </section>
      <EngagementModels />
    </main>
  );
}
