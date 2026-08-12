import Link from "next/link";
import type { Hackathon } from "@/content/hackathons";
import { MediaFrame } from "@/components/media/MediaFrame";

export function CaseStudyPreview({ project, index }: { project: Hackathon; index: number }) {
  return <article className={`case-preview ${index % 2 ? "case-preview--reverse" : ""}`}>
    <Link href={`/work/${project.slug}`} className="case-preview__media" aria-label={`View ${project.title} case study`}><MediaFrame {...project.coverImage} /></Link>
    <div className="case-preview__content"><div className="case-meta"><span>{project.category}</span><span>{project.year}</span></div><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><dl><div><dt>Format</dt><dd>{project.format}</dd></div><div><dt>Duration</dt><dd>{project.duration}</dd></div></dl><div className="capability-line">{project.capabilities.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div><Link className="text-link" href={`/work/${project.slug}`}>View case study <span aria-hidden="true">→</span></Link></div>
  </article>;
}
