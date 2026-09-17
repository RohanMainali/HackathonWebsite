import { InquiryFlow } from "@/components/forms/InquiryFlow";
export const metadata = { title: "Technology with a purpose." };
export default function Page() {
  return (
    <main id="main-content">
      <section className="detail-hero container compact">
        <p className="eyebrow">LET’S WORK TOGETHER</p>
        <h1>Technology with a purpose.</h1>
        <p>
          Focused AI and technology consulting, from exploring an opportunity to
          building a practical prototype.
        </p>
      </section>
      <section className="container inquiry-layout section">
        <aside>
          <p className="eyebrow">A SHARED STARTING POINT</p>
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
        <InquiryFlow kind="technology" />
      </section>
    </main>
  );
}
