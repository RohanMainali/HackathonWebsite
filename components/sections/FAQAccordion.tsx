"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((faq, index) => {
    const expanded = open === index;
    return <div className={`faq-item ${expanded ? "is-open" : ""}`} key={faq.question}>
      <h3><button type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{faq.question}</span><span aria-hidden="true">{expanded ? "−" : "+"}</span></button></h3>
      <div id={`faq-panel-${index}`} className="faq-answer" hidden={!expanded}><p>{faq.answer}</p></div>
    </div>;
  })}</div>;
}
