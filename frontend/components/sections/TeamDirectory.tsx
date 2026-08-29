"use client";

import Image from "next/image";
import { useState } from "react";
import { team, teamCategories, type TeamCategory } from "@/content/team";

type TeamFilter = "All" | TeamCategory;

export function TeamDirectory() {
  const [activeFilter, setActiveFilter] = useState<TeamFilter>("All");
  const filters: TeamFilter[] = ["All", ...teamCategories];
  const visibleTeam = activeFilter === "All" ? team : team.filter((member) => member.category === activeFilter);

  return <div className="team-directory">
    <div className="team-directory__filters" aria-label="Filter team members by department">
      {filters.map((filter) => {
        const count = filter === "All" ? team.length : team.filter((member) => member.category === filter).length;
        return <button key={filter} type="button" className={activeFilter === filter ? "is-active" : ""} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
          {filter} ({count})
        </button>;
      })}
    </div>
    <div className="team-grid" aria-live="polite">
      {visibleTeam.map((member) => <article className="team-card" key={member.name}>
        <div className="team-card__portrait">
          <Image src={member.image} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 560px) 42vw, (max-width: 900px) 28vw, 184px" style={{ objectFit: "cover", objectPosition: member.position ?? "center" }} />
        </div>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </article>)}
    </div>
  </div>;
}
