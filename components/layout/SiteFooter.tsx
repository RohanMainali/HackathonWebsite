import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const socials = Object.entries(siteConfig.socials).filter(([, href]) => href);
  return <footer className="site-footer">
    <div className="container site-footer__top">
      <div><Link href="/" className="footer-brand"><span>{siteConfig.shortName}</span>{siteConfig.name}</Link><p>We help institutions design, organize, and deliver hackathons—from the first brief to the final demo.</p></div>
      <nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></nav>
      <div className="footer-contact"><p className="eyebrow">START A CONVERSATION</p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>{socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</div>
    </div>
    <div className="container site-footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Hackathon strategy / production / community</span></div>
  </footer>;
}
