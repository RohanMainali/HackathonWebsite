import { ButtonLink } from "@/components/ui/ButtonLink";
export function FinalCTA() {
  return <section className="final-cta"><div className="container final-cta__inner"><div><p className="eyebrow">LET’S BUILD TOGETHER</p><h2>Ready to build something<br />worth showing?</h2></div><ButtonLink href="/contact" variant="light">Start a conversation</ButtonLink><span className="cta-decoration" aria-hidden="true">↗</span></div></section>;
}
