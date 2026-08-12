import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = pageMetadata("Plan a Hackathon", "Share your initial brief and start a practical conversation about your hackathon or innovation program.", "/contact");

export default function ContactPage() {
  const socials = Object.entries(siteConfig.socials).filter(([, value]) => value);
  return <main id="main-content"><section className="contact-hero"><Container><div><p className="eyebrow">PLAN A HACKATHON</p><h1>Tell us what you want your hackathon to <em>achieve.</em></h1><p>Give us the initial context. The brief does not need to be complete—we can help shape the format, timeline, scope, and participant journey.</p></div><aside><p className="eyebrow">DIRECT CONTACT</p><dl><div><dt>Email</dt><dd><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></dd></div><div><dt>Phone</dt><dd>{siteConfig.contact.phone}</dd></div><div><dt>Location</dt><dd>{siteConfig.contact.location}</dd></div></dl>{socials.length > 0 && <nav>{socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</nav>}</aside></Container></section><section className="section form-section"><Container><ContactForm /></Container></section></main>;
}
