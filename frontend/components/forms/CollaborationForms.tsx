"use client";
import { useState, type FormEvent } from "react";

const partnerInterests = [
  "Hackathons",
  "Ideathons",
  "Research",
  "Innovation Programs",
  "Speakers",
  "Community Events",
  "Student Engagement",
  "Technology Support",
  "AI Programs",
  "Industry Collaboration",
  "Mentorship",
  "Venue Support",
  "Outreach",
  "Long-term Collaboration",
];
const sponsorSupport = [
  "Financial Sponsorship",
  "Resources & Technology",
  "Prizes",
  "Venue",
  "Food & Hospitality",
  "Community",
  "Media",
  "Knowledge",
  "Swag / Merchandise",
  "Mentorship",
  "Infrastructure",
];

export function PartnerForm() {
  return <CollaborationForm type="partner" />;
}
export function SponsorForm() {
  return <CollaborationForm type="sponsor" />;
}

function CollaborationForm({ type }: { type: "partner" | "sponsor" }) {
  const sponsor = type === "sponsor";
  const [tags, setTags] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setMessage("");
    setErrors({});
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          organization: values.organization,
          services: tags,
          programType: `Become a ${type}`,
          description: [
            values.description,
            values.initiative ? `Initiative: ${values.initiative}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          website: "",
        }),
      });
      const data = await result.json();
      setMessage(data.message || "Please try again.");
      setErrors(data.errors || {});
      if (result.ok) setDone(true);
    } catch {
      setMessage(
        "Unable to send right now. Please retry or email contact@amatrixlabs.com.",
      );
    } finally {
      setBusy(false);
    }
  }
  if (done)
    return (
      <div className="inquiry-flow" role="status">
        <h2>
          {message.startsWith("Demo")
            ? "Enquiry preview complete"
            : "Thank you for your interest."}
        </h2>
        <p>{message}</p>
        <button
          className="button button--secondary"
          onClick={() => {
            setDone(false);
            setTags([]);
            setMessage("");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  return (
    <form
      className="inquiry-flow collaboration-form"
      onSubmit={submit}
      aria-label={`Become a ${type}`}
    >
      <p className="eyebrow">
        {sponsor ? "SPONSORSHIP ENQUIRY" : "PARTNERSHIP ENQUIRY"}
      </p>
      <h2>Become a {type}.</h2>
      <p>
        {sponsor
          ? "Choose how you’d like to support an initiative."
          : "Tell us where our interests meet."}{" "}
        An email and a short note are enough to start.
      </p>
      <div className="collaboration-contact collaboration-contact--simple">
        <label className="flow-field">
          <span>Email *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${type}-email-error` : undefined}
          />
          {errors.email && (
            <small id={`${type}-email-error`} className="flow-error">
              {errors.email[0]}
            </small>
          )}
        </label>
      </div>
      <label className="flow-field">
        <span>
          {sponsor
            ? "How would you like to contribute?"
            : "What could we do together?"}{" "}
          *
        </span>
        <textarea
          name="description"
          rows={3}
          required
          minLength={1}
          placeholder={
            sponsor
              ? "A resource, an idea, or a question about sponsorship…"
              : "Tell us a little about your community or idea…"
          }
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? `${type}-description-error` : undefined
          }
        />
        {errors.description && (
          <small id={`${type}-description-error`} className="flow-error">
            {errors.description[0]}
          </small>
        )}
      </label>
      <details className="optional-details">
        <summary>
          Provide more details <span>(optional)</span>
        </summary>
        <label className="flow-field">
          <span>Organization (optional)</span>
          <input name="organization" autoComplete="organization" />
        </label>{" "}
        {sponsor && (
          <label className="flow-field">
            <span>Event or initiative (optional)</span>
            <select name="initiative" defaultValue="">
              <option value="">Help me choose</option>
              <option>Lifeline Nepal</option>
              <option>A future initiative</option>
            </select>
          </label>
        )}
        <fieldset className="collaboration-interests">
          <legend>
            {sponsor ? "I’d like to support" : "We’re interested in"}{" "}
            <span>(optional)</span>
          </legend>
          <div className="flow-chips">
            {(sponsor ? sponsorSupport : partnerInterests).map((tag) => (
              <button
                key={tag}
                type="button"
                aria-pressed={tags.includes(tag)}
                onClick={() =>
                  setTags(
                    tags.includes(tag)
                      ? tags.filter((t) => t !== tag)
                      : [...tags, tag],
                  )
                }
              >
                {tag}
                <span aria-hidden="true">{tags.includes(tag) ? "✓" : "+"}</span>
              </button>
            ))}
          </div>
        </fieldset>
        {tags.length > 0 && (
          <p className="collaboration-note" aria-live="polite">
            {sponsor
              ? "Let’s explore support for"
              : "Let’s shape a collaboration around"}{" "}
            {tags.join(", ").toLowerCase()}.
          </p>
        )}
      </details>
      {message && (
        <p role="alert" className="flow-error">
          {message}
        </p>
      )}
      <div className="flow-actions">
        <button
          type="submit"
          disabled={busy}
          className="button button--primary"
        >
          {busy
            ? "Sending…"
            : `Send ${sponsor ? "sponsorship" : "partnership"} enquiry`}
        </button>
      </div>
      <p className="privacy-note">
        We’ll use your details to respond. <a href="/privacy">Privacy policy</a>
        .
      </p>
    </form>
  );
}
