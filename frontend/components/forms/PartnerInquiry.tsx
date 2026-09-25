"use client";

import { useState } from "react";
import { PartnerForm } from "./CollaborationForms";

export function PartnerInquiry() {
  const [type, setType] = useState("Academic partner");
  return (
    <div className="people-partner-form">
      <fieldset className="people-partner-choice">
        <legend>Choose your partnership</legend>
        {["Academic partner", "Corporate partner", "Community partner"].map(
          (option) => (
            <label key={option}>
              <input
                type="radio"
                name="partnership-type"
                value={option}
                checked={type === option}
                onChange={() => setType(option)}
              />
              <span>{option}</span>
            </label>
          ),
        )}
      </fieldset>
      <PartnerForm partnershipType={type} />
    </div>
  );
}
