import Image from "next/image";
import { pillars } from "@/content/pillars";
import { InquiryFlow } from "@/components/forms/InquiryFlow";
export function PillarPage({ slug }: { slug: string }) {
  const item = pillars.find((p) => p.slug === slug)!;
  return (
    <main id="main-content">
      <section className="detail-hero container">
        <p className="eyebrow">{item.title}</p>
        <h1>{item.headline}</h1>
        <p>{item.copy}</p>
        <a className="button button--primary" href="#start">
          {item.actions[0]} ↗
        </a>
        <Image width={1400} height={850} src={item.image} alt={item.alt} />
      </section>
      <section className="workflow container" aria-label="How we work">
        {item.workflow.map((s, i) => (
          <div key={s}>
            <span>0{i + 1}</span>
            {s}
            {i < 4 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </section>
      <section className="section container inquiry-layout" id="start">
        <div>
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>
            Let’s make
            <br />
            something happen.
          </h2>
          <p>Choose a direction. We’ll work out the details together.</p>
          {slug === "hackathons" && (
            <>
              <a className="inline-link" href="/upcoming">
                Explore upcoming events ↗
              </a>
              <a className="inline-link" href="/sponsors">
                Sponsor an event ↗
              </a>
            </>
          )}
          <a className="inline-link" href="/partners">
            Partner with us ↗
          </a>
        </div>
        <InquiryFlow kind={slug} />
      </section>
    </main>
  );
}
