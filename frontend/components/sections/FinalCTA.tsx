import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCTA() {
  return <section className="final-cta"><div className="container final-cta__inner"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Tell us what you want your hackathon to achieve.</h2><p>Share the institution, audience, expected format and the outcome you are aiming for. We will help turn the initial brief into a practical event plan.</p><div className="cta-row"><ButtonLink href="/contact">Plan a hackathon</ButtonLink><a className="email-link" href={`mailto:${siteConfig.contact.email}`}>Or email {siteConfig.contact.email}</a></div></div></section>;
}
