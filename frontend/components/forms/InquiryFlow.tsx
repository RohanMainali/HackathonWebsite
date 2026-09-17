"use client";

import { useState, type FormEvent } from "react";
import { pillars } from "@/content/pillars";

const interests = [
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
const support = [
  "Financial Sponsorship",
  "Technology Partner",
  "Prize Partner",
  "Venue Partner",
  "Food & Hospitality",
  "Community Partner",
  "Media Partner",
  "Knowledge Partner",
  "Swag / Merchandise",
  "Mentorship",
  "Infrastructure",
];

export function InquiryFlow({ kind = "custom" }: { kind?: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const options =
    kind === "partners"
      ? interests
      : kind === "sponsors"
        ? support
        : kind === "technology"
          ? [
              "AI opportunity discovery",
              "Build a prototype",
              "Technical guidance",
              "Custom technology project",
            ]
          : pillars.find((p) => p.slug === kind)?.actions || [];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const context = params.get("intent") || "";
    if (!data.get("event") && params.get("event"))
      data.set("event", params.get("event")!);
    setBusy(true);
    setStatus("");
    setErrors({});
    const { email, description, fullName, organization, ...extra } =
      Object.fromEntries(data.entries());
    const additional = Object.entries(extra)
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fullName,
          organization,
          description: `${description}${additional ? `\n\n${additional}` : ""}`,
          programType: [kind, context].filter(Boolean).join(": "),
          services: tags,
          website: "",
        }),
      });
      const result = await response.json();
      setStatus(result.message || "Please try again.");
      setErrors(result.errors || {});
      if (response.ok) setDone(true);
    } catch {
      setStatus(
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
          {status.startsWith("Demo")
            ? "Enquiry preview complete"
            : "Thank you for reaching out."}
        </h2>
        <p>{status}</p>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => {
            setDone(false);
            setTags([]);
            setStatus("");
          }}
        >
          Send another message
        </button>
      </div>
    );

  return (
    <form className="inquiry-flow simple-inquiry" onSubmit={submit}>
      <h2>Start a conversation.</h2>
      <p>Your email and a few words are all we need.</p>
      <label className="flow-field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <small id="email-error" className="flow-error">
            {errors.email[0]}
          </small>
        )}
      </label>
      <label className="flow-field">
        <span>What do you have in mind?</span>
        <textarea
          name="description"
          required
          minLength={1}
          rows={4}
          placeholder="Tell us a little about your idea, or just ask a question."
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
        />
        {errors.description && (
          <small id="description-error" className="flow-error">
            {errors.description[0]}
          </small>
        )}
      </label>
      <details className="optional-details">
        <summary>
          Provide more details <span>(optional)</span>
        </summary>
        <div className="flow-fields">
          <label className="flow-field">
            <span>Name (optional)</span>
            <input name="fullName" autoComplete="name" />
          </label>
          <label className="flow-field">
            <span>Organization (optional)</span>
            <input name="organization" autoComplete="organization" />
          </label>
          {(kind === "sponsors" || kind === "hackathons") && (
            <label className="flow-field">
              <span>Event or initiative (optional)</span>
              <input
                name="event"
                placeholder="Lifeline Nepal, a future event, or your own idea"
              />
            </label>
          )}
          {kind === "speakers" && (
            <>
              <label className="flow-field">
                <span>Topic / preferred format (optional)</span>
                <input
                  name="topic"
                  placeholder="A topic, workshop, talk or community session"
                />
              </label>
              <label className="flow-field">
                <span>Relevant links (optional)</span>
                <input name="links" />
              </label>
            </>
          )}
          <label className="flow-field">
            <span>Timeline / availability (optional)</span>
            <input
              name="timeline"
              placeholder="It’s fine if you’re still figuring this out"
            />
          </label>
        </div>
        {options.length > 0 && (
          <>
            <p className="optional-label">Areas of interest (optional)</p>
            <div
              className="flow-chips"
              role="group"
              aria-label="Optional areas of interest"
            >
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  aria-pressed={tags.includes(option)}
                  onClick={() =>
                    setTags(
                      tags.includes(option)
                        ? tags.filter((t) => t !== option)
                        : [...tags, option],
                    )
                  }
                >
                  {option}
                  <span aria-hidden="true">
                    {tags.includes(option) ? "✓" : "+"}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
        {tags.length > 0 && (kind === "partners" || kind === "sponsors") && (
          <div className="opportunity" aria-live="polite">
            <strong>
              {kind === "partners"
                ? "Ways we could collaborate"
                : "Your support could help"}
            </strong>
            {tags.map((tag) => (
              <p key={tag}>
                {tag} —{" "}
                {/Research|AI|Technology/.test(tag)
                  ? "bring tools and expertise to ambitious projects."
                  : /Venue|Food|Infrastructure/.test(tag)
                    ? "create a welcoming, well-supported event."
                    : /Prize|Financial|Swag/.test(tag)
                      ? "support participants and recognize promising ideas."
                      : "connect people through a shared initiative."}
              </p>
            ))}
          </div>
        )}
      </details>
      {status && (
        <p role="alert" className="flow-error">
          {status}
        </p>
      )}
      <div className="flow-actions">
        <button
          className="button button--primary"
          disabled={busy}
          type="submit"
        >
          {busy ? "Sending…" : "Send message"}
        </button>
      </div>
      <p className="privacy-note">
        We’ll only use your details to respond.{" "}
        <a href="/privacy">Privacy policy</a>.
      </p>
    </form>
  );
}
