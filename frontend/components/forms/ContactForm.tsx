"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
};

const orgTypes = [
  "University or college",
  "Company / Enterprise",
  "Startup",
  "Government body",
  "Non-profit / NGO",
  "Student community / Club",
  "Other",
];

const programTypes = [
  "Intercollege hackathon",
  "Intracollege hackathon",
  "Corporate innovation hackathon",
  "Sports Analytics Sprint 2",
  "Unconference",
  "Applied AI / Research sprint",
  "IoT & Robotics challenge",
  "Technical bootcamp / Training",
  "AI consulting & advisory",
  "Open exploration / Not decided",
];

const formats = [
  "In-person (Onsite)",
  "Hybrid",
  "Online / Virtual",
  "Flexible / Not decided",
];

const serviceOptions = [
  "End-to-End hackathon production",
  "AI & challenge track design",
  "Research & development",
  "IoT & smart device prototyping",
  "Robotics & automation",
  "Technical bootcamps & training",
  "Resource & tech stack guidance",
  "Unconference facilitation",
  "Branding & event platform",
  "Sponsorship & partner curation",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries()) as Record<
      string,
      unknown
    >;

    payload.services = selectedServices;

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
          message: result.message,
          errors: result.errors,
        });
        return;
      }

      setState({ status: "success", message: result.message });
      form.reset();
      setSelectedServices([]);
    } catch {
      setState({
        status: "error",
        message:
          "Unable to send your inquiry right now. Please try again or reach out directly at rohanmainali@gmail.com.",
      });
    }
  }

  const error = (name: string) => state.errors?.[name]?.[0];

  if (state.status === "success") {
    return (
      <div className="form-success-banner" role="status">
        <span className="form-success-tag">Message Received</span>
        <h3>Thank you for reaching out</h3>
        <p>
          {state.message ||
            "Your inquiry has been received. Our team will review your project details and follow up via email within 24 business hours."}
        </p>
        <button
          type="button"
          className="button button--secondary"
          style={{ marginTop: "24px" }}
          onClick={() => setState({ status: "idle" })}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* 01. Contact Information */}
      <div className="form-section-group">
        <h4 className="form-section-title">01 / Contact Details</h4>
        <div className="form-grid">
          <Field
            label="Full name"
            name="fullName"
            required
            placeholder="e.g. Alex Morgan"
            error={error("fullName")}
          />
          <Field
            label="Work / Contact email"
            name="email"
            type="email"
            required
            placeholder="name@institution.edu"
            error={error("email")}
          />
          <Field
            label="Phone number"
            name="phone"
            placeholder="+977 98..."
            error={error("phone")}
          />
          <Field
            label="Institution or company"
            name="organization"
            placeholder="e.g. Tribhuvan University / Tech Corp"
            error={error("organization")}
          />
          <Field
            label="Your role or title"
            name="role"
            placeholder="e.g. Event Lead / Professor"
            error={error("role")}
          />
          <SelectField
            label="Organization type"
            name="organizationType"
            options={orgTypes}
            placeholder="Select type"
            error={error("organizationType")}
          />
        </div>
      </div>

      {/* 02. Program & Event Scope */}
      <div className="form-section-group" style={{ marginTop: "36px" }}>
        <h4 className="form-section-title">02 / Program Scope</h4>
        <div className="form-grid">
          <SelectField
            label="Program type"
            name="programType"
            options={programTypes}
            placeholder="Select program interest"
            error={error("programType")}
          />
          <SelectField
            label="Preferred format"
            name="format"
            options={formats}
            placeholder="Select format"
            error={error("format")}
          />
          <Field
            label="Target date or timeline"
            name="targetDate"
            placeholder="e.g. Q4 2026 / November"
            error={error("targetDate")}
          />
          <Field
            label="Expected participants"
            name="participants"
            placeholder="e.g. 100–150 builders"
            error={error("participants")}
          />
          <Field
            label="Venue or city location"
            name="location"
            placeholder="e.g. Kathmandu / Hybrid"
            error={error("location")}
          />
          <Field
            label="How did you hear about us?"
            name="referral"
            placeholder="e.g. Previous hackathon / Referral"
            error={error("referral")}
          />
        </div>
      </div>

      {/* 03. Services of Interest */}
      <div className="form-section-group" style={{ marginTop: "36px" }}>
        <h4 className="form-section-title">03 / Services of Interest</h4>
        <p className="form-group-helper">
          Select any areas you would like assistance with.
        </p>
        <div className="services-chip-grid">
          {serviceOptions.map((service) => {
            const isChecked = selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                className={`service-chip ${isChecked ? "is-selected" : ""}`}
                onClick={() => toggleService(service)}
                aria-pressed={isChecked}
              >
                <span className="service-chip__check" aria-hidden="true">
                  {isChecked ? "✓" : "+"}
                </span>
                <span>{service}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 04. Project Description */}
      <div className="form-section-group" style={{ marginTop: "36px" }}>
        <h4 className="form-section-title">04 / Project Brief & Goals</h4>
        <label className="field field--full" htmlFor="description">
          <span className="field__label">
            Project description or message <b aria-hidden="true">*</b>
          </span>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Describe your event concept, objectives, expected audience, or specific questions for our team..."
            aria-invalid={!!error("description")}
            aria-describedby={
              error("description") ? "description-error" : "description-hint"
            }
          />
          <small id="description-hint">
            The brief does not need to be finalized. A few sentences are enough
            to begin.
          </small>
          {error("description") && (
            <small id="description-error" className="field-error">
              {error("description")}
            </small>
          )}
        </label>
      </div>

      {state.message && state.status === "error" && (
        <div
          className="form-status form-status--error"
          role="alert"
          style={{ marginTop: "20px" }}
        >
          {state.message}
        </div>
      )}

      <div className="form-action-row" style={{ marginTop: "32px" }}>
        <button
          className="button button--primary form-submit"
          type="submit"
          disabled={state.status === "loading"}
        >
          <span>
            {state.status === "loading" ? "Sending inquiry..." : "Send inquiry"}
          </span>
        </button>
        <p className="form-privacy-note">
          We respect your privacy and will only use this information to respond
          to your inquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const describedBy = error ? `${name}-error` : undefined;
  return (
    <label className="field" htmlFor={name}>
      <span className="field__label">
        {label} {required && <b aria-hidden="true">*</b>}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={describedBy}
      />
      {error && (
        <small id={`${name}-error`} className="field-error">
          {error}
        </small>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
  placeholder = "Select an option",
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="field" htmlFor={name}>
      <span className="field__label">
        {label} {required && <b aria-hidden="true">*</b>}
      </span>
      <div className="field__select-wrap">
        <select
          id={name}
          name={name}
          defaultValue=""
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="field__select-arrow" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
      {error && (
        <small id={`${name}-error`} className="field-error">
          {error}
        </small>
      )}
    </label>
  );
}
