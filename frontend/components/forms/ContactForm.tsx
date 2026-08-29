"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
};

const orgTypes = [
  "University or college",
  "Company / Enterprise",
  "Government body",
  "NGO / Non-profit",
  "Technology community",
  "Other",
];

const programTypes = [
  "Intercollege hackathon",
  "Intracollege hackathon",
  "Corporate hackathon",
  "Sports Analytics Sprint 2",
  "Unconference",
  "Research & Prototyping",
  "IoT / Robotics project",
  "Technical training & bootcamps",
  "AI consulting",
  "Not sure yet",
];

const formats = ["Physical (On-ground)", "Hybrid", "Online / Virtual", "Not decided"];

const serviceOptions = [
  { label: "End-to-End hackathon", tag: "Full Execution" },
  { label: "AI consulting", tag: "Technical Depth" },
  { label: "Research & development", tag: "Problem Statements" },
  { label: "Technical training & bootcamps", tag: "Workshops" },
  { label: "IoT & smart devices", tag: "Hardware" },
  { label: "Robotics & automation", tag: "Hardware" },
  { label: "Unconference", tag: "Open Format" },
  { label: "Branding & website", tag: "Design" },
  { label: "Sponsors & partners", tag: "Outreach" },
  { label: "Resource & tech stack guide", tag: "Mentorship" },
];

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "End-to-End hackathon",
  ]);
  const [descriptionCharCount, setDescriptionCharCount] = useState(0);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries()) as Record<string, unknown>;

    payload.services = selectedServices;
    payload.consent = data.get("consent") === "on";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
        errors?: Record<string, string[]>;
      };

      if (!response.ok) {
        setState({
          status: "error",
          message: result.message || "Please review the highlighted fields.",
          errors: result.errors,
        });
        return;
      }

      setState({ status: "success", message: result.message });
      form.reset();
      setSelectedServices(["End-to-End hackathon"]);
      setDescriptionCharCount(0);
    } catch {
      setState({
        status: "error",
        message:
          "We could not send your inquiry. Your entries are preserved. Please try again or reach out directly at contact@amatrixlabs.com.",
      });
    }
  }

  const error = (name: string) => state.errors?.[name]?.[0];

  if (state.status === "success") {
    return (
      <div className="contact-form-success-card">
        <span className="success-icon-badge">✓</span>
        <h3>Inquiry Received</h3>
        <p>
          Thank you for reaching out. We have received your project details and a team lead will review your brief and respond within 24 hours.
        </p>
        <button
          type="button"
          className="button button--secondary"
          onClick={() => setState({ status: "idle" })}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form-v2" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Step 1: Contact Information */}
      <fieldset className="form-section-card">
        <div className="form-card-header">
          <span className="step-badge">01</span>
          <div>
            <h3>Your Information</h3>
            <p>Tell us who you are and where you are organizing from.</p>
          </div>
        </div>

        <div className="form-fields-grid">
          <Field
            label="Full name"
            name="fullName"
            placeholder="e.g. Aayush Sharma"
            required
            error={error("fullName")}
          />
          <Field
            label="Work email"
            name="email"
            type="email"
            placeholder="e.g. aayush@university.edu"
            required
            error={error("email")}
          />
          <Field
            label="Phone / WhatsApp"
            name="phone"
            type="tel"
            placeholder="e.g. +977 980 000 0000"
            hint="Optional"
          />
          <Field
            label="Institution or Company"
            name="organization"
            placeholder="e.g. Kathmandu University"
            required
            error={error("organization")}
          />
          <Field
            label="Your role"
            name="role"
            placeholder="e.g. Club President / Lead Organizer"
            required
            error={error("role")}
          />
          <SelectField
            label="Type of organization"
            name="organizationType"
            options={orgTypes}
            error={error("organizationType")}
          />
        </div>
      </fieldset>

      {/* Step 2: Event Concept & Timing */}
      <fieldset className="form-section-card">
        <div className="form-card-header">
          <span className="step-badge">02</span>
          <div>
            <h3>Event Scope & Timing</h3>
            <p>Help us understand the scale, dates, and setup of the program.</p>
          </div>
        </div>

        <div className="form-fields-grid">
          <SelectField
            label="Type of program"
            name="programType"
            options={programTypes}
            error={error("programType")}
          />
          <SelectField
            label="Preferred format"
            name="format"
            options={formats}
            error={error("format")}
          />
          <Field
            label="Target dates / period"
            name="targetDate"
            placeholder="e.g. Late October 2025 (48 Hours)"
            required
            error={error("targetDate")}
          />
          <Field
            label="Expected participants"
            name="participants"
            placeholder="e.g. 200 – 300 builders"
            hint="Optional"
          />
          <Field
            label="City / Venue Location"
            name="location"
            placeholder="e.g. Kathmandu / On-Campus"
            hint="Optional"
          />
          <Field
            label="How did you hear about us?"
            name="referral"
            placeholder="e.g. Perceptron Hackathon, LinkedIn, Colleague"
            hint="Optional"
          />
        </div>
      </fieldset>

      {/* Step 3: Required Services & Brief */}
      <fieldset className="form-section-card">
        <div className="form-card-header">
          <span className="step-badge">03</span>
          <div>
            <h3>Services & Brief</h3>
            <p>Select what you need help with and share your goals.</p>
          </div>
        </div>

        <div className="form-services-selector">
          <div className="field-label-text">
            Services needed <b aria-hidden="true">*</b>
            <span className="field-sublabel">Select all areas where you want our team&apos;s involvement</span>
          </div>
          <div className="service-chips-grid">
            {serviceOptions.map(({ label, tag }) => {
              const isSelected = selectedServices.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={isSelected}
                  className={`service-chip ${isSelected ? "is-selected" : ""}`}
                  onClick={() => toggleService(label)}
                >
                  <span className="chip-check">{isSelected ? "✓" : "+"}</span>
                  <span className="chip-label">{label}</span>
                  <span className="chip-tag">{tag}</span>
                </button>
              );
            })}
          </div>
          {error("services") && (
            <p className="field-error">{error("services")}</p>
          )}
        </div>

        <div className="field-wrapper field-wrapper--full">
          <label className="field-label-text" htmlFor="description">
            Project Description & Goals <b aria-hidden="true">*</b>
            <span className="field-sublabel">
              What are you hoping to achieve? (Min. 30 characters)
            </span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="e.g. We are planning an intercollege AI hackathon for ~250 participants. We need support with industry problem statements, judging rubric, mentorship during the sprint, and platform evaluation."
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescriptionCharCount(e.target.value.length)
            }
            aria-invalid={!!error("description")}
          />
          <div className="textarea-footer">
            <span
              className={`char-count ${descriptionCharCount >= 30 ? "is-valid" : ""}`}
            >
              {descriptionCharCount} / 30 min chars
            </span>
            {error("description") && (
              <span className="field-error">{error("description")}</span>
            )}
          </div>
        </div>

        {/* Consent */}
        <label className="consent-checkbox-v2">
          <input type="checkbox" name="consent" defaultChecked />
          <span>
            I agree that Amatrix Labs may use these details to review our brief and respond with an event proposal.
          </span>
        </label>
        {error("consent") && <p className="field-error">{error("consent")}</p>}
      </fieldset>

      {/* Global Status Message */}
      {state.message && (
        <div
          className={`form-status-banner form-status-banner--${state.status}`}
          role="status"
        >
          {state.message}
        </div>
      )}

      {/* Form Submission */}
      <div className="form-submit-row">
        <button
          className="button button--primary form-submit-btn"
          type="submit"
          disabled={state.status === "loading"}
        >
          {state.status === "loading" ? "Submitting brief…" : "Submit Hackathon Brief"}
          <span aria-hidden="true"> ↗</span>
        </button>
        <p className="form-submit-note">
          All inquiries are treated confidentially and reviewed directly by our core event leads.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  hint,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  error?: string;
}) {
  return (
    <div className={`field-box ${error ? "has-error" : ""}`}>
      <label htmlFor={name} className="field-box__label">
        <span>{label}</span>
        {required && <b className="required-star" aria-hidden="true">*</b>}
        {hint && <em className="field-hint">({hint})</em>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div className={`field-box ${error ? "has-error" : ""}`}>
      <label htmlFor={name} className="field-box__label">
        <span>{label}</span>
        <b className="required-star" aria-hidden="true">*</b>
      </label>
      <div className="select-wrapper">
        <select id={name} name={name} defaultValue="" aria-invalid={!!error}>
          <option value="" disabled>
            Select {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
