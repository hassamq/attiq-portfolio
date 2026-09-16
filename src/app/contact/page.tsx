import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { TornButton } from "@/components/TornButton";
import { links, profile, siteConfig } from "@/lib/site";

const contactDescription = `Contact ${profile.fullName} for digital accessibility audits, WCAG compliance, Shopify accessibility, and inclusive frontend development.`;

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact ${profile.fullName}`,
    description: contactDescription,
    url: "/contact",
  },
  twitter: {
    title: `Contact ${profile.fullName}`,
    description: contactDescription,
  },
};

export default function ContactPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main id="main" className="bio-shell">
        <section className="bio-card" aria-label="Contact">
          <h1 className="bio-name" style={{ fontSize: "clamp(1.7rem, 5.5vw, 2.1rem)" }}>
            Contact
          </h1>
          <p className="bio-title">Reach {profile.fullName}</p>
          <p className="sr-only">
            Email {siteConfig.email} or connect on LinkedIn to discuss
            accessibility and frontend projects.
          </p>

          <div className="bio-links">
            <TornButton href={`mailto:${links.email}`}>Email</TornButton>
            <TornButton href={links.linkedin} external>
              LinkedIn
            </TornButton>
          </div>

          <hr className="contact-divider" />
          <ContactForm />

          <Link href="/" className="page-back">
            ← Back home
          </Link>
        </section>
      </main>
    </>
  );
}
