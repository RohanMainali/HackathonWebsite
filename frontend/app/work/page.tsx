import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { hackathons } from "@/content/hackathons";
import { Container } from "@/components/ui/Container";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata("Selected Work", "Hackathons and innovation programs designed and delivered with institutions.", "/work");

export default function WorkPage() {
  return <main id="main-content"><section className="page-hero page-hero--work"><Container><p className="eyebrow">SELECTED WORK</p><h1>Every event has a different room, audience, and <em>reason to exist.</em></h1><p>Explore the programs we have helped bring to life. Additional case studies will be added as their details are confirmed.</p></Container></section><section className="section work-archive"><Container>{hackathons.map((project, index) => <CaseStudyPreview key={project.slug} project={project} index={index} />)}</Container></section><FinalCTA /></main>;
}
