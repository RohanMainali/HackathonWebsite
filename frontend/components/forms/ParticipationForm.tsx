"use client";

import { useState, type FormEvent } from "react";

const hackathon = "Lifeline Nepal — Early 2027";

export function ParticipationForm() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          organization: values.organization,
          programType: "Hackathon participation interest",
          description: [
            `Selected hackathon: ${values.hackathon}`,
            values.description,
          ]
            .filter(Boolean)
            .join("\n"),
          services: ["Hackathons"],
          website: "",
        }),
      });
      const result = await response.json();
      setMessage(result.message || "Unable to send. Please try again.");
      setErrors(result.errors || {});
      setDone(response.ok);
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
            ? "Interest preview complete"
            : "Thank you for your interest."}
        </h2>
        <p>{message}</p>
        <p>This is an expression of interest, not a confirmed event place.</p>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => {
            setDone(false);
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
      aria-label="Hackathon participation"
      onSubmit={submit}
    >
      <p className="eyebrow">Participate</p>
      <h2>Lifeline Nepal · 2027</h2>
      <input type="hidden" name="hackathon" value={hackathon} />
      <p className="participation-event-note">
        Lifeline Nepal is planned for early 2027. Registration is opening soon;
        share your interest to hear about next steps.
      </p>
      <label className="flow-field">
        <span>Full name *</span>
        <input name="fullName" autoComplete="name" required />
      </label>
      <label className="flow-field">
        <span>Email *</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={
            errors.email ? "participation-email-error" : undefined
          }
        />
        {errors.email && (
          <small className="flow-error" id="participation-email-error">
            {errors.email[0]}
          </small>
        )}
      </label>
      <label className="flow-field">
        <span>College or organization (optional)</span>
        <input name="organization" autoComplete="organization" />
      </label>
      <label className="flow-field">
        <span>Anything you’d like us to know? (optional)</span>
        <textarea
          name="description"
          rows={3}
          placeholder="Your interests, your team, or a question about taking part…"
        />
      </label>
      {message && (
        <p role="alert" className="flow-error">
          {message}
        </p>
      )}
      <div className="flow-actions">
        <button
          type="submit"
          className="button button--primary"
          disabled={busy}
        >
          {busy ? "Sending…" : "Register interest"}
        </button>
      </div>
      <p className="privacy-note">
        We’ll use your details to respond about participation.{" "}
        <a href="/privacy">Privacy policy</a>.
      </p>
    </form>
  );
}
