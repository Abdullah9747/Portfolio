import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL || "abdullahfaisal9747@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || typeof name !== "string" || !email || typeof email !== "string" || !message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const subjectLine = subject?.trim() ? `[Portfolio] ${subject}` : "[Portfolio] New message";
    const html = `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
    `;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subjectLine,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
