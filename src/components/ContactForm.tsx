"use client";

import { FormEvent, useId, useState } from "react";
import { links } from "@/lib/site";

type FieldErrors = {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const website = String(data.get("website") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!website) next.website = "Please enter your website URL.";
    if (!message) next.message = "Please describe what you need.";
    else if (message.length < 10) {
      next.message = "Please write at least 10 characters.";
    }

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setErrorMessage("");

    if (Object.keys(nextErrors).length > 0) {
      const order = ["name", "email", "website", "message"] as const;
      const firstKey = order.find((key) => nextErrors[key]);
      if (firstKey) {
        document.getElementById(`${formId}-${firstKey}`)?.focus();
      }
      return;
    }

    // Honeypot — ignore bot submissions
    if (String(data.get("company") || "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        `Form is not configured yet. Email me directly at ${links.email}.`,
      );
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const website = String(data.get("website") || "").trim();
    const platform = String(data.get("platform") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");

    try {
      // Free Web3Forms — no npm package; emails go to your verified inbox
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Accessibility audit request from ${name}`,
          from_name: "Attiq Portfolio",
          name,
          email,
          website,
          platform: platform || "Not specified",
          message,
          replyto: email,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Send failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Could not send your message. Email me directly at ${links.email}.`,
      );
    }
  }

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const websiteId = `${formId}-website`;
  const platformId = `${formId}-platform`;
  const companyId = `${formId}-company`;
  const messageId = `${formId}-message`;
  const nameErrorId = `${nameId}-error`;
  const emailErrorId = `${emailId}-error`;
  const websiteErrorId = `${websiteId}-error`;
  const messageErrorId = `${messageId}-error`;
  const messageHintId = `${messageId}-hint`;
  const statusId = `${formId}-status`;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
      noValidate
      aria-describedby={
        status === "sent" || status === "error" ? statusId : undefined
      }
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={companyId}>Company</label>
        <input
          id={companyId}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
          disabled={status === "sending"}
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
          disabled={status === "sending"}
        />
        {errors.email && (
          <span id={emailErrorId} className="field-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label className="contact-label" htmlFor={websiteId}>
          Website URL{" "}
          <span className="required-marker" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id={websiteId}
          type="url"
          name="website"
          required
          inputMode="url"
          placeholder="https://"
          className="field"
          aria-required="true"
          aria-invalid={errors.website ? "true" : "false"}
          aria-describedby={errors.website ? websiteErrorId : undefined}
          disabled={status === "sending"}
        />
        {errors.website && (
          <span id={websiteErrorId} className="field-error" role="alert">
            {errors.website}
          </span>
        )}
      </div>

      <div>
        <label className="contact-label" htmlFor={platformId}>
          Platform
        </label>
        <input
          id={platformId}
          type="text"
          name="platform"
          placeholder="Shopify, WordPress, custom, etc."
          className="field"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label className="contact-label" htmlFor={messageId}>
          What you need{" "}
          <span className="required-marker" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="Audit, remediation, VPAT/ACR, ongoing testing — plus any deadline or compliance requirement."
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={
            errors.message
              ? `${messageHintId} ${messageErrorId}`
              : messageHintId
          }
          disabled={status === "sending"}
        />
        <span id={messageHintId} className="field-hint">
          Include the goal, deadline, and any compliance requirement if you
          have one.
        </span>
        {errors.message && (
          <span id={messageErrorId} className="field-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="cta cta-primary w-full"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending…"
          : "Request an Accessibility Audit"}
      </button>

      {status === "sent" && (
        <p
          id={statusId}
          className="text-sm font-semibold text-accent-deep"
          role="status"
          aria-live="polite"
        >
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p
          id={statusId}
          className="text-sm font-semibold text-[color:var(--error)]"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
