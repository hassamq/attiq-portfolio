"use client";

import { FormEvent, useId, useState } from "react";
import { links } from "@/lib/site";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message) next.message = "Please enter a message.";
    else if (message.length < 10) {
      next.message = "Please write at least 10 characters.";
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const order = ["name", "email", "message"] as const;
      const firstKey = order.find((key) => nextErrors[key]);
      if (firstKey) {
        document.getElementById(`${formId}-${firstKey}`)?.focus();
      }
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;
  const nameErrorId = `${nameId}-error`;
  const emailErrorId = `${emailId}-error`;
  const messageErrorId = `${messageId}-error`;
  const statusId = `${formId}-status`;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
      noValidate
      aria-describedby={status === "sent" ? statusId : undefined}
    >
      <div>
        <label className="contact-label" htmlFor={nameId}>
          Name <span className="required-marker" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id={nameId}
          type="text"
          name="name"
          required
          autoComplete="name"
          className="field"
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? nameErrorId : undefined}
        />
        {errors.name && (
          <span id={nameErrorId} className="field-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label className="contact-label" htmlFor={emailId}>
          Email <span className="required-marker" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          className="field"
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? emailErrorId : undefined}
        />
        {errors.email && (
          <span id={emailErrorId} className="field-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label className="contact-label" htmlFor={messageId}>
          Message <span className="required-marker" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          className="field resize-y"
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? messageErrorId : undefined}
        />
        {errors.message && (
          <span id={messageErrorId} className="field-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="cta cta-primary w-full">
        Send message
      </button>

      {status === "sent" && (
        <p id={statusId} className="text-sm font-semibold text-accent-deep" role="status" aria-live="polite">
          Opening your email app with your message…
        </p>
      )}
    </form>
  );
}
