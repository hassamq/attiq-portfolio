import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { links, profile } from "@/lib/site";

const contactDescription = `Contact ${profile.fullName} for digital accessibility audits, WCAG compliance, Shopify accessibility, and inclusive frontend development.`;

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${profile.fullName}`,
    description: contactDescription,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="page-shell min-h-[100svh] pt-28 pb-20">
        <div className="section">
          <p className="kicker">Contact</p>
          <h1 className="display mt-3 text-[clamp(2.4rem,7vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted">
            Reach {profile.fullName} for accessibility audits, Shopify builds,
            and frontend projects.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="display text-2xl font-bold">Direct links</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <p className="contact-label">Email</p>
                  <a
                    href={`mailto:${links.email}`}
                    className="mt-1 inline-block text-lg font-semibold text-accent-deep underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                  >
                    {links.email}
                  </a>
                </li>
                <li>
                  <p className="contact-label">LinkedIn</p>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-lg font-semibold text-accent-deep underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                  >
                    attiq-rehman-
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-[0.35rem] border border-[color:var(--line)] bg-bg-soft p-6 md:p-8">
              <h2 className="display text-2xl font-bold">Send a message</h2>
              <ContactForm />
            </div>
          </div>

          <Link href="/" className="nav-link mt-12 inline-block">
            ← Back home
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
