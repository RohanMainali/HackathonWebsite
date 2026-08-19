import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { team } from "@/content/team";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata("About", "Experience inside national and international hackathons, shaped into a practical partner for institutions.", "/about");
const values = [
  ["Builder-first", "Design the experience around the people learning, collaborating and creating."],
  ["Purpose before production", "Begin with the outcome the institution wants, then design the event around it."],
  ["Details create trust", "Clear communication, prepared teams, fair judging and reliable operations shape how an event is remembered."],
  ["Beyond demo day", "The strongest ideas deserve a path after the final presentation."],
];

export default function AboutPage() {
  return <main id="main-content"><section className="page-hero about-hero"><Container><p className="eyebrow">ABOUT</p><h1>We have been inside the room. Now we help institutions <em>build it.</em></h1><p>This company was shaped by prior experience with national and international hackathons. We understand both the energy participants remember and the preparation, decisions and operational details required to create it.</p></Container></section>
    <section className="section about-story"><Container><div><SectionHeader index="01 /" eyebrow="OUR STORY" title="Give ambition a working structure." /><p className="large-copy">We started with a simple observation: institutions often have the ambition to run a meaningful hackathon but not always the time, systems, network or prior experience needed to manage every moving part.</p><p>Our role is to provide that structure while preserving the energy and identity that make each event unique.</p></div><MediaFrame src="/images/site/about-team.jpg" alt="The organizing team gathered at the Perceptron International Hackathon" caption="The people behind the event experience" aspect="landscape" position="center" color="orange" className="about-story__media" /></Container></section>
    <section className="section values-section"><Container><SectionHeader index="02 /" eyebrow="HOW WE WORK" title="Principles that hold under pressure." /><ol>{values.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></Container></section>
    {team.length > 0 && <section className="section"><Container><SectionHeader title="The team behind the work." /><div>{team.map((member) => <article key={member.name}><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></Container></section>}
    <FinalCTA /></main>;
}
