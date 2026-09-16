"use client";

import { FormEvent, useState } from "react";
import { links } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
      <label className="contact-label">
        Name
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="field"
          placeholder="Your name"
        />
      </label>
      <label className="contact-label">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="field"
          placeholder="you@example.com"
        />
      </label>
      <label className="contact-label">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="field resize-y"
          placeholder="Project, audit, or collaboration…"
        />
      </label>
      <button type="submit" className="cta cta-primary w-full">
        Send message
      </button>
      {status === "sent" && (
        <p className="text-sm text-muted" role="status">
          Opening your email app…
        </p>
      )}
    </form>
  );
}
