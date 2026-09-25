import Image from "next/image";
import { pillars } from "@/content/pillars";
import { InquiryFlow } from "@/components/forms/InquiryFlow";
export function PillarPage({ slug }: { slug: string }) {
  const item = pillars.find((p) => p.slug === slug)!;
  return (
    <main id="main-content" className="design-page">
      <section className="capability-hero content-width">
        <div>
          <p className="eyebrow">{item.title}</p>
          <h1>{item.headline}</h1>
          <p>{item.copy}</p>
          <a className="button button--primary" href="#start">
            {item.actions[0]}
          </a>
        </div>
        <Image
          src={item.image}
          alt={item.alt}
          width={1000}
          height={1000}
          priority
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </section>
      <section className="process-strip content-width" aria-label="How we work">
        {item.workflow.map((step, i) => (
          <div key={step}>
            <span>0{i + 1}</span>
            <h2>{step}</h2>
          </div>
        ))}
      </section>
      {slug === "hackathons" && (
        <div className="event-notice content-width">
          <div>
            <p className="eyebrow">UPCOMING / EARLY 2027</p>
            <h2>Lifeline Nepal</h2>
            <p>A 48-hour disaster response and resilience hackathon.</p>
          </div>
          <a className="button button--secondary" href="/lifeline-nepal-2027">
            Explore the event
          </a>
        </div>
      )}
      <section className="design-form-section content-width" id="start">
        <div>
          <p className="eyebrow">LET’S GET STARTED</p>
          <h2>
            A good idea
            <br />
            deserves a conversation.
          </h2>
          <p>Choose a direction. We’ll work out the details together.</p>
          <a className="editorial-link" href="/partners">
            Explore a partnership
          </a>
        </div>
        <InquiryFlow kind={slug} />
      </section>
    </main>
  );
}
