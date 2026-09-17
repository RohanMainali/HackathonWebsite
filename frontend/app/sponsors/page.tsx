import { SponsorForm } from "@/components/forms/CollaborationForms";

export const metadata = { title: "Become a Sponsor" };
export default function Page() {
  return (
    <main id="main-content">
      <section className="detail-hero container compact">
        <p className="eyebrow">LET’S WORK TOGETHER</p>
        <h1>Become a Sponsor</h1>
        <p>
          Connect your support to an initiative you believe in. Tell us what you
          have in mind—we’ll find the right fit together.
        </p>
      </section>
      <section
        className="container past-sponsors"
        aria-labelledby="past-sponsors-heading"
      >
        <p className="eyebrow">THE PEOPLE BEHIND PAST EVENTS</p>
        <h2 id="past-sponsors-heading">
          Previous sponsors &amp; support partners
        </h2>
        <div className="sponsor-tag-rows">
          {[
            ["Resources", ["Perceptron AI", "Turboline AI"]],
            ["Host & title", ["IIMS College"]],
            ["Prizes", ["Turboline AI"]],
            ["Challenge design", ["Perceptron AI", "Turboline AI"]],
            ["Merchandise", ["ACME Software"]],
          ].map(([category, names]) => (
            <div className="sponsor-tag-row" key={category as string}>
              <h3>{category}</h3>
              <div>
                {(names as string[]).map((name) => (
                  <span className="sponsor-name-tag" key={name}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container inquiry-layout section">
        <aside>
          <p className="eyebrow">SUPPORT WHAT COMES NEXT</p>
          <h2>
            Your support.
            <br />
            Their next breakthrough.
          </h2>
          <ul className="benefit-list">
            <li>Connect learners with practitioners.</li>
            <li>Turn ideas into hands-on experiences.</li>
            <li>Build relationships beyond a single event.</li>
          </ul>
          <a className="inline-link" href="/work">
            See our past collaborations ↗
          </a>
          <a className="inline-link" href="mailto:contact@amatrixlabs.com">
            contact@amatrixlabs.com ↗
          </a>
        </aside>
        <SponsorForm />
      </section>
    </main>
  );
}
