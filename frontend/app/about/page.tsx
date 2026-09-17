import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamDirectory } from "@/components/sections/TeamDirectory";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata("About", "Experience inside national and international hackathons, shaped into a practical partner for institutions.", "/about");
const values = [
  ["Builder-first", "Design the experience around the people learning, collaborating and creating."],
  ["Purpose before production", "Begin with the outcome the institution wants, then design the event around it."],
  ["Details create trust", "Clear communication, prepared teams, fair judging and reliable operations shape how an event is remembered."],
  ["Beyond demo day", "The strongest ideas deserve a path after the final presentation."],
];

export default function AboutPage() {
  return <main id="main-content"><section className="page-hero about-hero"><Container><p className="eyebrow">ABOUT</p><h1>Builders at heart.<br /><em>Better together.</em></h1><p>We’re a team of organizers, engineers and curious minds connecting people with possibilities.</p></Container></section>
    <section className="section about-story"><Container><div><SectionHeader index="01 /" eyebrow="OUR STORY" title="Good people. Shared purpose." /><p className="large-copy">We turn institutional ambition into places where people can learn, experiment and build.</p><p>From the first conversation to the final demo, we’re in it with you.</p></div><MediaFrame src="/images/site/about-team.jpg" alt="The organizing team gathered at the Perceptron International Hackathon" caption="The people behind the event experience" aspect="landscape" position="center" color="orange" className="about-story__media" /></Container></section>
    <section className="section values-section"><Container><SectionHeader index="02 /" eyebrow="HOW WE WORK" title="What keeps us grounded." /><ol>{values.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></Container></section>
    <section className="section team-section"><Container><SectionHeader index="03 /" eyebrow="OUR TEAM" title="Meet the people behind it." intro="Different skills. One shared ambition." /><TeamDirectory /></Container></section>
    <FinalCTA /></main>;
}
