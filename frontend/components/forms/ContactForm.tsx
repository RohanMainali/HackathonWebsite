"use client";

import { useState, type FormEvent } from "react";

type FormState = { status: "idle" | "loading" | "success" | "error"; message?: string; errors?: Record<string, string[]> };
const orgTypes = ["University or college", "Company", "Government body", "NGO", "Technology community", "Other"];
const programTypes = ["University hackathon", "Internal company hackathon", "Open innovation challenge", "AI hackathon", "Multi-stage innovation program", "Bootcamp or workshop", "Mentorship program", "AI consulting", "Not sure yet"];
const formats = ["In-person", "Hybrid", "Online", "Not decided"];
const serviceOptions = ["Strategy and format", "Branding and website", "Sponsors and partners", "Participant outreach", "Workshops and bootcamps", "Mentors and judges", "Event production", "Judging and submissions", "Post-event support", "AI consulting"];

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState({ status: "loading" });
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries()) as Record<string, unknown>;
    payload.services = data.getAll("services"); payload.consent = data.get("consent") === "on";
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string; errors?: Record<string, string[]> };
      if (!response.ok) { setState({ status: "error", message: result.message, errors: result.errors }); return; }
      setState({ status: "success", message: result.message }); form.reset();
    } catch { setState({ status: "error", message: "We could not send your inquiry. Your entries are still here. Please try again or use the direct email address." }); }
  }
  const error = (name: string) => state.errors?.[name]?.[0];
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-grid">
      <Field label="Full name" name="fullName" required error={error("fullName")} />
      <Field label="Work email" name="email" type="email" required error={error("email")} />
      <Field label="Phone number" name="phone" hint="Optional" />
      <Field label="Institution or company" name="organization" required error={error("organization")} />
      <Field label="Your role" name="role" required error={error("role")} />
      <SelectField label="Type of organization" name="organizationType" options={orgTypes} error={error("organizationType")} />
      <SelectField label="Type of program" name="programType" options={programTypes} error={error("programType")} />
      <SelectField label="Preferred format" name="format" options={formats} error={error("format")} />
      <Field label="Expected participants" name="participants" hint="Optional" />
      <Field label="Target date or period" name="targetDate" required error={error("targetDate")} />
      <Field label="Location" name="location" hint="Optional" />
      <Field label="How did you hear about us?" name="referral" hint="Optional" />
    </div>
    <fieldset className="checkbox-group"><legend>Services needed <span aria-hidden="true">*</span></legend><p>Select all that apply.</p><div>{serviceOptions.map((service) => <label key={service}><input type="checkbox" name="services" value={service} /><span>{service}</span></label>)}</div>{error("services") && <p className="field-error">{error("services")}</p>}</fieldset>
    <label className="field field--full" htmlFor="description"><span>Project description <b aria-hidden="true">*</b></span><textarea id="description" name="description" rows={7} aria-describedby={error("description") ? "description-error" : "description-hint"} /><small id="description-hint">What are you hoping to achieve? The brief does not need to be complete.</small>{error("description") && <small id="description-error" className="field-error">{error("description")}</small>}</label>
    <label className="consent"><input type="checkbox" name="consent" /><span>I agree that the team may use this information to respond to my inquiry.</span></label>{error("consent") && <p className="field-error">{error("consent")}</p>}
    {state.message && <div className={`form-status form-status--${state.status}`} role="status">{state.message}</div>}
    <button className="button button--primary form-submit" type="submit" disabled={state.status === "loading"}>{state.status === "loading" ? "Sending inquiry…" : "Request a proposal"}<span aria-hidden="true">↗</span></button>
  </form>;
}

function Field({ label, name, type = "text", required = false, hint, error }: { label: string; name: string; type?: string; required?: boolean; hint?: string; error?: string }) {
  const describedBy = error ? `${name}-error` : hint ? `${name}-hint` : undefined;
  return <label className="field" htmlFor={name}><span>{label} {required && <b aria-hidden="true">*</b>} {hint && <em>{hint}</em>}</span><input id={name} name={name} type={type} aria-invalid={!!error} aria-describedby={describedBy} />{hint && <small id={`${name}-hint`}>{hint}</small>}{error && <small id={`${name}-error`} className="field-error">{error}</small>}</label>;
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return <label className="field" htmlFor={name}><span>{label} <b aria-hidden="true">*</b></span><select id={name} name={name} defaultValue="" aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined}><option value="" disabled>Select one</option>{options.map((option) => <option key={option}>{option}</option>)}</select>{error && <small id={`${name}-error`} className="field-error">{error}</small>}</label>;
}
