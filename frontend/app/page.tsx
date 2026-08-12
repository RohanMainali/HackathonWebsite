import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { partners } from "@/content/partners";
import { hackathons } from "@/content/hackathons";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { ButtonLink, TextLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaFrame } from "@/components/media/MediaFrame";
import { HeroMedia } from "@/components/media/HeroMedia";
import { VideoLightbox } from "@/components/media/VideoLightbox";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = { title: { absolute: `${siteConfig.name}: End-to-End Hackathon Strategy and Production` }, description: siteConfig.description };

export default function HomePage() {
  const audiences = ["Universities", "Companies", "Public institutions", "Technology communities"];
  const audienceDetails = [
    ["Universities and Colleges", "Build student communities, connect learning with practice and strengthen industry engagement."],
    ["Companies", "Engage developers, explore real use cases, identify talent and generate prototypes."],
    ["Government and NGOs", "Bring multidisciplinary teams together around public-interest and mission-driven challenges."],
    ["Technology Communities", "Create inclusive builder experiences that help communities learn, connect and ship."],
  ];
  return <main id="main-content">
    <section className="hero">
      <div className="hero__media"><HeroMedia media={siteConfig.heroMedia} /></div>
      <div className="hero__wash" />
      <Container className="hero__content"><p className="eyebrow">HACKATHON STRATEGY / PRODUCTION / COMMUNITY</p><h1>From first brief<br />to final <em>demo.</em></h1><p className="hero__intro">We design and run high-impact hackathons for institutions, companies and communities. We bring together the strategy, people, production and follow-through needed to make the event work.</p><div className="cta-row"><ButtonLink href="/contact">Plan a hackathon</ButtonLink><ButtonLink href="/work" variant="light">See our work</ButtonLink></div><p className="hero__proof">National and international experience <span>·</span> In-person, hybrid and online</p></Container>
    </section>

    <section className="credibility-strip"><Container><p>Built from experience across national and international hackathons.</p><div className="audience-strip">{audiences.map((audience) => <span key={audience}>{audience}</span>)}</div>{partners.length > 0 && <div className="partner-row">{partners.map((partner) => <a key={partner.name} href={partner.href || "#"}>{partner.name}</a>)}</div>}</Container></section>

    <section className="section why-section"><Container><div className="why-grid"><div><SectionHeader index="01 /" eyebrow="WHY IT WORKS" title="A great hackathon is designed long before the opening ceremony." /><p className="large-copy">The room may come alive over one weekend, but the work begins much earlier. A clear purpose, useful problem statements, the right participants, prepared mentors, reliable operations and a fair judging process all shape the result.</p><ol className="outcome-lines"><li>People know why they are there.</li><li>Partners know what success looks like.</li><li>Promising ideas have somewhere to go next.</li></ol></div><MediaFrame {...hackathons[0].gallery[1]} /></div></Container></section>

    <section className="section process-section" id="process"><Container><div className="process-top"><SectionHeader index="02 /" eyebrow="OUR PROCESS" title="One team across the whole event." /><p>A clear thread connects the brief, the people, the production and what happens next.</p></div><ProcessTimeline /><TextLink href="/services">Explore our services</TextLink></Container></section>

    <section className="section work-section"><Container><SectionHeader index="03 /" eyebrow="SELECTED WORK" title="Built with people, pressure and a clear purpose." />{hackathons.map((project, index) => <CaseStudyPreview key={project.slug} project={project} index={index} />)}<ButtonLink href="/work" variant="secondary">View all work</ButtonLink></Container></section>

    <section className="section showreel-section"><Container><SectionHeader index="04 /" eyebrow="IN THE ROOM" title="See the room come alive." intro="This area is ready for footage from previous hackathons: teams building, mentors guiding and ideas reaching the stage." /><VideoLightbox src={siteConfig.showreel.videoSrc} poster={siteConfig.showreel.posterSrc} caption={siteConfig.showreel.caption} placeholder={siteConfig.showreel.placeholder} /></Container></section>

    <section className="section services-section"><Container><SectionHeader index="05 /" eyebrow="WHAT WE DO" title="Hackathons first. The support around them when it matters." /><div className="services-layout"><article className="flagship-service"><p className="eyebrow">FLAGSHIP SERVICE</p><h3>{services[0].title}</h3><p>{services[0].description}</p><TextLink href="/services">See complete delivery</TextLink><div className="flagship-service__stamp" aria-hidden="true">BRIEF<br />↓<br />DEMO</div></article><div className="secondary-services">{services.slice(1).map((service, index) => <article key={service.title}><span>0{index + 2}</span><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}</div></div></Container></section>

    <section className="section audiences-section"><Container><SectionHeader title="Designed around the institution. Built for the people in the room." /><ol className="audience-list">{audienceDetails.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></Container></section>

    <section className="section engagement-section"><Container><div className="engagement-grid"><div><SectionHeader title="Choose how closely we work together." /><p>Start with experienced guidance, share the production or place the complete program with one team.</p><ButtonLink href="/contact" variant="secondary">Discuss the right model</ButtonLink></div><EngagementModels /></div></Container></section>

    {testimonials.length > 0 && <section className="section"><Container><blockquote>{testimonials[0].quote}</blockquote><p>{testimonials[0].name}, {testimonials[0].institution}</p></Container></section>}

    <section className="section faq-section"><Container><div className="faq-grid"><SectionHeader title="Questions institutions usually ask." /><FAQAccordion /></div></Container></section>
    <FinalCTA />
  </main>;
}
