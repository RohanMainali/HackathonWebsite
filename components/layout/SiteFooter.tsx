import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const socials = Object.entries(siteConfig.socials).filter(([, href]) => href);
  return <footer className="site-footer">
    <div className="container site-footer__top">
      <div><a href="/" className="footer-brand"><span>{siteConfig.shortName}</span>{siteConfig.name}</a><p>We help institutions design, organize, and deliver hackathons—from the first brief to the final demo.</p></div>
      <nav aria-label="Footer navigation"><a href="/work">Work</a><a href="/services">Services</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></nav>
      <div className="footer-contact"><p className="eyebrow">START A CONVERSATION</p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>{socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name}</a>)}</div>
    </div>
    <div className="container site-footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Hackathon strategy / production / community</span></div>
  </footer>;
}
