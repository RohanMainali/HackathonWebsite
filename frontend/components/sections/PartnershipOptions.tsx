"use client";

import { useState } from "react";
import { PartnerForm } from "@/components/forms/CollaborationForms";

export function PartnershipOptions() {
  const [partnershipType, setPartnershipType] = useState("Academic partner");
  return (
    <section className="involve-partnerships site-shell" id="partnerships">
      <header className="involve-heading">
        <p className="kicker">Two ways to build together</p>
        <h2>
          Your expertise.
          <br />
          Our next chapter.
        </h2>
        <p>
          Connect your institution or organization with a community turning
          ideas into working projects.
        </p>
      </header>
      <div className="involve-paths">
        <article id="academic-partnership">
          <span className="involve-number">01 / ACADEMIC</span>
          <h3>Academic partnership</h3>
          <p>
            For universities, colleges, and learning communities ready to give
            students space to experiment.
          </p>
          <ul>
            <li>Co-host hackathons, workshops, and ideathons</li>
            <li>Connect students with mentors and industry challenges</li>
            <li>Explore research and campus-led initiatives</li>
          </ul>
          <a
            href="#partner-enquiry"
            onClick={() => setPartnershipType("Academic partner")}
          >
            Become an academic partner
          </a>
        </article>
        <article id="corporate-partnership">
          <span className="involve-number">02 / CORPORATE</span>
          <h3>Corporate partnership</h3>
          <p>
            For companies and industry teams looking to collaborate with
            emerging talent and fresh perspectives.
          </p>
          <ul>
            <li>Shape challenges around your industry</li>
            <li>Share tools, technical expertise, and mentorship</li>
            <li>Meet builders through hands-on programs</li>
          </ul>
          <a
            href="#partner-enquiry"
            onClick={() => setPartnershipType("Corporate partner")}
          >
            Become a corporate partner
          </a>
        </article>
      </div>
      <div className="involve-enquiry" id="partner-enquiry">
        <div>
          <p className="kicker">Start a partnership</p>
          <h2>
            Let’s find our
            <br />
            common ground.
          </h2>
          <p>
            Tell us who you are and what you’d like to make possible. We’ll
            explore a program, contribution, or longer-term collaboration
            together.
          </p>
          <label className="involve-type">
            I’m interested in
            <select
              value={partnershipType}
              onChange={(event) => setPartnershipType(event.target.value)}
            >
              <option>Academic partner</option>
              <option>Corporate partner</option>
              <option>Community partner</option>
            </select>
          </label>
        </div>
        <PartnerForm partnershipType={partnershipType} />
      </div>
    </section>
  );
}
