import { InquiryFlow } from "@/components/forms/InquiryFlow";
import { siteConfig } from "@/content/site";
export function InquiryPage({
  label,
  title,
  description,
  kind,
  points,
}: {
  label: string;
  title: string;
  description: string;
  kind: string;
  points: string[];
}) {
  return (
    <main id="main-content" className="design-page">
      <section className="contact-composition content-width">
        <div className="contact-copy">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="contact-direct">
            <span>WRITE TO US</span>
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            <span>FIND US</span>
            <p>{siteConfig.contact.location}</p>
          </div>
          <ul>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <InquiryFlow kind={kind} />
      </section>
    </main>
  );
}
