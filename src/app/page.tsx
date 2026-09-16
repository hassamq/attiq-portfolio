import type { Metadata } from "next";
import { TornButton } from "@/components/TornButton";
import { links, profile, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main id="main" className="bio-shell">
        <section className="bio-card" aria-label={`${profile.fullName} profile`}>
          <div className="avatar-wrap">
            <div
              className="avatar"
              role="img"
              aria-label={`${profile.fullName} profile monogram`}
            >
              <span aria-hidden>{profile.initials}</span>
            </div>
          </div>
          <h1 className="bio-name">{profile.fullName}</h1>
          <p className="bio-title">{profile.title}</p>
          <p className="sr-only">
            {siteConfig.description} Connect on LinkedIn or visit the contact
            page to get in touch about WCAG audits, accessible Shopify stores,
            and inclusive frontend development.
          </p>
          <div className="bio-links">
            <TornButton href={links.linkedin} external>
              LinkedIn
            </TornButton>
            <TornButton href="/contact">Contact</TornButton>
          </div>
        </section>
      </main>
    </>
  );
}
