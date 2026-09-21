import { InquiryFlow } from "@/components/forms/InquiryFlow";
export const metadata = { title: "What shall we make happen?" };
export default function Page() {
  return (
    <main id="main-content">
      <section className="detail-hero container compact">
        <p className="eyebrow">LET’S WORK TOGETHER</p>
        <h1>What shall we make happen?</h1>
        <p>
          An event, a research question, a technical challenge—or something
          entirely new. Tell us where you want to start.
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
          <nav
            className="contact-pathways"
            aria-label="Other ways to work together"
          >
            <a href="/partners">Become a partner</a>
            <a href="/sponsors">Become a sponsor</a>
            <a href="/hackathons?intent=Host%20a%20Hackathon#start">
              Plan an event
            </a>
          </nav>
          <a className="inline-link" href="/work">
            See our past collaborations
          </a>
          <a className="inline-link" href="mailto:contact@amatrixlabs.com">
            contact@amatrixlabs.com
          </a>
        </aside>
        <InquiryFlow kind="custom" />
      </section>
    </main>
  );
}
