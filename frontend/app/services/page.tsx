import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { services, eventFormats } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceMap } from "@/components/sections/ServiceMap";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata("Hackathon Services", "Complete hackathon delivery, co-production, advisory, workshops, mentorship, incubation, and focused AI consulting.", "/services");

export default function ServicesPage() {
  return <main id="main-content">
    <section className="page-hero"><Container><p className="eyebrow">SERVICES</p><h1>Everything required to move from an idea to a <em>working hackathon.</em></h1><p>Choose complete event execution, targeted co-production, or experienced guidance for your internal team.</p></Container></section>
    <section className="section service-detail"><Container><div className="service-detail__intro"><SectionHeader index="01 /" eyebrow="END-TO-END DELIVERY" title="One operating system for the whole event." /><p>{services[0].description}</p></div><ServiceMap /></Container></section>
    <section className="section supporting-offers"><Container><SectionHeader index="02 /" eyebrow="TARGETED SUPPORT" title="Bring us in where your team needs depth." /><div>{services.slice(1).map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></Container></section>
    <section className="section formats-section"><Container><div className="formats-grid"><SectionHeader index="03 /" eyebrow="EVENT FORMATS" title="The format follows the purpose." intro="We shape the structure around the audience, objectives, timeline, location, and resources available." /><ul>{eventFormats.map((format) => <li key={format}>{format}</li>)}</ul></div></Container></section>
    <section className="section engagement-section"><Container><div className="engagement-grid"><SectionHeader index="04 /" eyebrow="ENGAGEMENT MODELS" title="Choose how closely we work together." /><EngagementModels /></div></Container></section>
    <FinalCTA />
  </main>;
}
