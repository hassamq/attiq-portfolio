import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/SiteChrome";
import { contactChecklist, links, profile } from "@/lib/site";

const contactDescription = `Request an accessibility audit from ${profile.fullName}. Manual WCAG audits, remediation, VPAT/ACR, and ongoing testing.`;

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
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="page-shell min-h-[100svh] pt-28 pb-20">
        <div className="section">
          <p className="kicker">Contact</p>
          <h1 className="display mt-3 text-[clamp(2.4rem,7vw,3.8rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Have an accessibility issue to investigate?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Tell me about your website, platform, and accessibility concerns.
            Send your website URL and I&apos;ll help you determine the
            appropriate next step.
          </p>
          <p className="mt-3 font-semibold text-accent-deep">
            {profile.responseTime}
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h2 className="display text-2xl font-bold" id="include-heading">
                  What should I include?
                </h2>
                <ul className="mt-5 space-y-3" aria-labelledby="include-heading">
                  {contactChecklist.map((item) => (
                    <li
                      key={item}
                      className="border-l-4 border-[color:var(--accent)] bg-bg-soft px-4 py-3 text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="display text-2xl font-bold" id="direct-links-heading">
                  Direct links
                </h2>
                <ul className="mt-6 space-y-5" aria-labelledby="direct-links-heading">
                  <li>
                    <p className="contact-label" id="email-label">
                      Email
                    </p>
                    <a
                      href={`mailto:${links.email}`}
                      className="mt-1 inline-block text-lg font-semibold text-accent-deep underline underline-offset-4"
                      aria-labelledby="email-label"
                    >
                      {links.email}
                    </a>
                  </li>
                  <li>
                    <p className="contact-label" id="github-label">
                      GitHub
                    </p>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-lg font-semibold text-accent-deep underline underline-offset-4"
                      aria-labelledby="github-label"
                    >
                      github.com/attiqrehman-ar
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                  <li>
                    <p className="contact-label" id="linkedin-label">
                      LinkedIn
                    </p>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-lg font-semibold text-accent-deep underline underline-offset-4"
                      aria-labelledby="linkedin-label"
                    >
                      linkedin.com/in/attiq-rehman-
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[0.35rem] border-2 border-[color:var(--line)] bg-bg-soft p-6 md:p-8">
              <h2 className="display text-2xl font-bold" id="message-heading">
                Request an Accessibility Audit
              </h2>
              <p className="mt-2 text-muted">
                Required fields are marked with an asterisk.
              </p>
              <ContactForm />
            </div>
          </div>

          <p className="mt-12">
            <Link href="/" className="nav-link">
              Back to home
            </Link>
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
