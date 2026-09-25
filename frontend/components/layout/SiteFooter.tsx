import Image from "next/image";

const groups = [
  { title: "Programs", links: [["Hackathons", "/hackathons"], ["Research & Innovation", "/research"], ["Speakers", "/speakers"], ["Community", "/community"]] },
  { title: "Get involved", links: [["Join a Program", "/participate"], ["Become a Speaker", "/speakers#start"], ["Become a Partner", "/partners#partner"], ["Become a Sponsor", "/sponsors"]] },
  { title: "Amatrix", links: [["About", "/about"], ["Work", "/work"], ["Contact", "/contact"]] },
  { title: "Connect", links: [["LinkedIn", "https://www.linkedin.com/company/amatrix-labs/"], ["Instagram", "https://www.instagram.com/amatrixlabs/"], ["Email", "mailto:contact@amatrixlabs.com"]] },
];

export function SiteFooter() {
  return <footer className="new-footer">
    <div className="site-shell new-footer__top">
      <div className="new-footer__brand"><Image src="/images/site/logo.webp" alt="Amatrix Labs" width={1421} height={278} /><p>People, ideas, and technology<br />moving forward from Nepal.</p></div>
      {groups.map((group) => <nav key={group.title} aria-label={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>)}
    </div>
    <div className="site-shell new-footer__bottom"><span>© 2026 Amatrix Labs</span><span>Kathmandu, Nepal</span><a href="/privacy">Privacy</a></div>
  </footer>;
}
