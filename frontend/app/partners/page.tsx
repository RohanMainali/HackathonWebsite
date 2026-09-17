import { PartnerForm } from "@/components/forms/CollaborationForms";
export const metadata = { title: "Become a Partner" };
export default function Page() {
  return (
    <main id="main-content">
      <section className="detail-hero container compact">
        <p className="eyebrow">LET’S WORK TOGETHER</p>
        <h1>Become a Partner</h1>
        <p>
          For institutions, research organizations and communities. Start with
          the interests we share.
        </p>
      </section>
      <section className="container inquiry-layout section">
        <aside>
          <p className="eyebrow">WHY PARTNER WITH AMATRIX LABS?</p>
          <h2>
            Good people.
            <br />
            Real possibilities.
          </h2>
          <ul className="benefit-list">
            <li>Connect learners with practitioners.</li>
            <li>Turn ideas into hands-on experiences.</li>
            <li>Build relationships beyond a single event.</li>
          </ul>
          <a className="inline-link" href="/work">
            See our past collaborations
          </a>
          <a className="inline-link" href="mailto:contact@amatrixlabs.com">
            contact@amatrixlabs.com
          </a>
        </aside>
        <PartnerForm />
      </section>
    </main>
  );
}
