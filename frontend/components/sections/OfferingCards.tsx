import { MediaFrame } from "@/components/media/MediaFrame";

export const offerings = [
  {
    id: "hackathons",
    title: "Ideathons & hackathons",
    description:
      "From the first spark to the final demo. We bring the whole experience together.",
    image: "/images/hackathons/iims-codefest/team-coding.jpg",
    alt: "Hackathon participants collaborating on a project",
    tags: ["Challenge design", "Production", "Mentorship"],
  },
  {
    id: "community",
    title: "Speakers & community",
    description:
      "Fresh perspectives. Shared knowledge. Connections that outlast the event.",
    image: "/images/hackathons/iims-perceptron-2026/expert-keynote.jpg",
    alt: "An expert sharing ideas with the hackathon community",
    tags: ["Expert talks", "Workshops", "Community"],
  },
  {
    id: "research",
    title: "Research & innovation",
    description:
      "Explore a question. Build a prototype. Turn a promising idea into something real.",
    image: "/images/hackathons/iims-perceptron-2026/technical-mentoring.jpg",
    alt: "Builders and mentors exploring a technical solution",
    tags: ["Applied AI", "Prototyping", "Research"],
  },
];

export function OfferingCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div
      className={`offering-grid ${detailed ? "offering-grid--detailed" : ""}`}
    >
      {offerings.map((offer, index) => (
        <article
          className="offering-card"
          id={detailed ? offer.id : undefined}
          key={offer.id}
        >
          <a
            href={detailed ? "/contact" : `/services#${offer.id}`}
            className="offering-card__image"
            aria-label={`Explore ${offer.title}`}
          >
            <MediaFrame src={offer.image} alt={offer.alt} />
          </a>
          <div className="offering-card__copy">
            <span className="small-index">
              0{index + 1} / {offer.tags[0]}
            </span>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            {detailed && (
              <div className="offer-tags">
                {offer.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
            <a
              className="offering-link"
              href={detailed ? "/contact" : `/services#${offer.id}`}
            >
              {detailed ? "Let’s talk" : "Explore"}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
