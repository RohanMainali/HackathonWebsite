import type { Hackathon } from "@/content/hackathons";
import { MediaFrame } from "@/components/media/MediaFrame";

export function NextProject({ project }: { project: Hackathon }) { return <section className="next-project"><div className="container"><p className="eyebrow">NEXT CASE STUDY</p><a href={`/work/${project.slug}`}><MediaFrame {...project.coverImage} aspect="wide" /><span className="next-project__title">{project.title} <span aria-hidden="true">↗</span></span></a></div></section>; }
