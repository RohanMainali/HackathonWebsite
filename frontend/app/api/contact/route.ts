import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return Response.json({ message: "Please review the highlighted fields.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    if (parsed.data.website) return Response.json({ message: "Thanks. Your inquiry has been received." });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      if (process.env.NODE_ENV === "development") {
        console.info("[contact demo mode]", parsed.data);
        return Response.json({ message: "Demo mode: your inquiry was validated successfully, but email delivery is not configured." });
      }
      return Response.json({ message: "Email delivery is not configured. Please use the direct email address instead." }, { status: 503 });
    }

    const safe = (value: string) => value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] || char);
    const data = parsed.data;
    const email = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Hackathon inquiry from ${data.organization}`,
        html: `<h1>New hackathon inquiry</h1><p><strong>Name:</strong> ${safe(data.fullName)}</p><p><strong>Email:</strong> ${safe(data.email)}</p><p><strong>Organization:</strong> ${safe(data.organization)}</p><p><strong>Role:</strong> ${safe(data.role)}</p><p><strong>Program:</strong> ${safe(data.programType)}</p><p><strong>Format:</strong> ${safe(data.format)}</p><p><strong>Target:</strong> ${safe(data.targetDate)}</p><p><strong>Services:</strong> ${data.services.map(safe).join(", ")}</p><p><strong>Description:</strong></p><p>${safe(data.description).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!email.ok) return Response.json({ message: "We could not send your inquiry. Please try again or use the direct email address." }, { status: 502 });
    return Response.json({ message: "Thank you. Your inquiry has been sent and the team will respond using your work email." });
  } catch {
    return Response.json({ message: "We could not process this request. Please check the form and try again." }, { status: 400 });
  }
}
