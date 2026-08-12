import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hackathons, getHackathon, getNextHackathon } from "@/content/hackathons";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/media/MediaFrame";
import { CaseStudyGallery } from "@/components/sections/CaseStudyGallery";
import { VideoLightbox } from "@/components/media/VideoLightbox";
import { NextProject } from "@/components/sections/NextProject";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() { return hackathons.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getHackathon(slug); if (!project) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: `${siteConfig.baseUrl}/work/${slug}` } };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getHackathon(slug); if (!project) notFound(); const next = getNextHackathon(slug);
  return <main id="main-content">
    <section className="case-hero"><Container><div className="case-hero__meta"><span>{project.category}</span><span>{project.year}</span></div><h1>{project.title}</h1><p>{project.summary}</p></Container><div className="container"><MediaFrame {...project.coverImage} aspect="wide" priority /></div></section>
    <section className="section case-overview"><Container><div><p className="eyebrow">EVENT OVERVIEW</p><h2>A complete participant journey, built around a clear purpose.</h2></div><dl>{[["Event type", project.category], ["Format", project.format], ["Duration", project.duration], ["Audience", project.audience], ["Location", project.location], ["Year", project.year]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Container></section>
    <section className="section case-narrative"><Container><article><p className="eyebrow">01 / THE BRIEF</p><h2>What the institution needed</h2><p>{project.brief}</p></article><article><p className="eyebrow">02 / OUR APPROACH</p><h2>Design the journey, not only the weekend</h2><p>{project.approach}</p></article></Container></section>
    <section className="section handled-section"><Container><p className="eyebrow">03 / WHAT WE HANDLED</p><h2>Connected work across the program.</h2><ul>{project.capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></Container></section>
    <section className="section program-section"><Container><p className="eyebrow">04 / PROGRAM TIMELINE</p><h2>From planning to follow-through.</h2><ol>{project.timeline.map((item, index) => <li key={item.label}><span>0{index + 1}</span><h3>{item.label}</h3><p>{item.description}</p></li>)}</ol></Container></section>
    <section className="section gallery-section"><Container><p className="eyebrow">05 / PHOTOGRAPHY</p><h2>Inside the event.</h2><CaseStudyGallery items={project.gallery} /></Container></section>
    {project.video && <section className="section"><Container><VideoLightbox src={project.video.src} poster={project.video.poster} caption={project.video.caption} /></Container></section>}
    <section className="section outcomes-section"><Container><div><p className="eyebrow">06 / OUTCOMES</p><h2>What the program made possible.</h2></div><div>{project.outcomes.map((outcome) => <article key={outcome.title}><h3>{outcome.title}</h3><p>{outcome.description}</p></article>)}</div></Container></section>
    {project.testimonial && <section className="section"><Container><blockquote>{project.testimonial.quote}</blockquote><p>{project.testimonial.name}, {project.testimonial.organization}</p></Container></section>}
    <NextProject project={next} /><FinalCTA />
  </main>;
}
