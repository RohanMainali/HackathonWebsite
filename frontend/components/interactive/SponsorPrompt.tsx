"use client";

import { useState } from "react";

export function SponsorPrompt() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <aside
      className="involve-sponsor-prompt"
      aria-label="Sponsorship invitation"
    >
      <button
        type="button"
        aria-label="Dismiss sponsorship invitation"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
      <span className="kicker">Make more possible</span>
      <p>Interested in becoming a sponsor?</p>
      <a href="/sponsors#sponsor-enquiry">Get in touch</a>
    </aside>
  );
}
