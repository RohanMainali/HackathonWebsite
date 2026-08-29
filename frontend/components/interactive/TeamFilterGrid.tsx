"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/content/team";

const departments = [
  "All",
  "Leadership",
  "Engineering",
  "Operations",
  "Community",
  "Design",
] as const;

type DepartmentFilter = (typeof departments)[number];

export function TeamFilterGrid({ members }: { members: TeamMember[] }) {
  const [selectedDept, setSelectedDept] = useState<DepartmentFilter>("All");

  const filteredMembers =
    selectedDept === "All"
      ? members
      : members.filter((member) => member.department === selectedDept);

  return (
    <div>
      <div className="team-filter-nav" role="tablist" aria-label="Filter team members by department">
        {departments.map((dept) => {
          const count =
            dept === "All"
              ? members.length
              : members.filter((m) => m.department === dept).length;
          const isActive = selectedDept === dept;

          return (
            <button
              key={dept}
              role="tab"
              aria-selected={isActive}
              className={`team-filter-btn ${isActive ? "is-active" : ""}`}
              onClick={() => setSelectedDept(dept)}
            >
              {dept} ({count})
            </button>
          );
        })}
      </div>

      <div className="team-grid">
        {filteredMembers.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-card__image-container">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div className="team-card__content">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
