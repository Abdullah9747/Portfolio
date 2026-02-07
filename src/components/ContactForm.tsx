"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(typeof data.error === "string" ? data.error : "Failed to send. Please try again or email us directly.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMessage("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          className="w-full rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="w-full rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          placeholder="you@company.com"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
          className="w-full rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          placeholder="Project or inquiry"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className="w-full resize-y rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          placeholder="Tell us about your project or question..."
          disabled={status === "sending"}
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-green-400">Thanks! Your message has been sent. We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
