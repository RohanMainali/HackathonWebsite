import Image from "next/image";
import { siteConfig } from "@/content/site";
export function SiteFooter() {
  const socials = Object.entries(siteConfig.socials).filter(([, href]) => href);
  return (
    <footer className="studio-footer">
      <div className="container">
        <div className="studio-footer__lead">
          <div>
            <p className="eyebrow">
              THE NEXT GOOD IDEA STARTS WITH A CONVERSATION.
            </p>
            <h2>
              Let’s make
              <br />
              <em>something matter.</em>
            </h2>
          </div>
          <a
            className="footer-email"
            href={`mailto:${siteConfig.contact.email}`}
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div className="studio-footer__main">
          <div className="studio-footer__brand">
            <a href="/" aria-label="AMatrix Labs home">
              <Image
                src="/images/site/logo.webp"
                alt="AMatrix Labs"
                width={1421}
                height={278}
              />
            </a>
            <p>
              People, ideas, and possibilities.
              <br />
              Brought together in Nepal.
            </p>
            <span>{siteConfig.contact.location}</span>
          </div>
          <nav aria-label="Explore our programs">
            <h3>Explore</h3>
            <a href="/hackathons">Ideathon & Hackathon</a>
            <a href="/speakers">Speakers & Community</a>
            <a href="/research">Research & Innovation</a>
            <a href="/technology">AI & Technology</a>
          </nav>
          <nav aria-label="Get involved">
            <h3>Get involved</h3>
            <a href="/upcoming">Upcoming events</a>
            <a href="/partners">Become a partner</a>
            <a href="/sponsors">Become a sponsor</a>
            <a href="/contact">Work with us</a>
          </nav>
          <nav aria-label="About AMatrix Labs">
            <h3>AMatrix Labs</h3>
            <a href="/about">Our people</a>
            <a href="/work">Selected work</a>
            <a href="/contact">Contact</a>
            {socials.map(([name, href]) => (
              <a href={href} key={name} target="_blank" rel="noreferrer">
                {name}
              </a>
            ))}
          </nav>
        </div>
        <div className="studio-footer__bottom">
          <span>© {new Date().getFullYear()} AMatrix Labs</span>
          <span>Ideas. People. Real impact.</span>
          <a href="/privacy">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
