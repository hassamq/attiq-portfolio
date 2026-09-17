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

      <main id="main" tabIndex={-1} className="page-shell min-h-[100svh] pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="section">
          <p className="kicker">Contact</p>
          <h1 className="display mt-3 text-[clamp(2rem,8vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Have an accessibility issue to investigate?
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            Tell me about your website, platform, and accessibility concerns.
            Send your website URL and I&apos;ll help you determine the
            appropriate next step.
          </p>
          <p className="mt-3 font-semibold text-accent-deep">
            {profile.responseTime}
          </p>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="display text-xl font-bold md:text-2xl" id="include-heading">
                  What should I include?
                </h2>
                <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3" aria-labelledby="include-heading">
                  {contactChecklist.map((item) => (
                    <li
                      key={item}
                      className="border-l-4 border-[color:var(--accent)] bg-bg-soft px-3 py-2.5 text-sm text-muted md:px-4 md:py-3 md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="display text-xl font-bold md:text-2xl" id="direct-links-heading">
                  Direct links
                </h2>
                <ul className="mt-5 space-y-5" aria-labelledby="direct-links-heading">
                  <li>
                    <p className="contact-label" id="email-label">
                      Email
                    </p>
                    <a
                      href={`mailto:${links.email}`}
                      className="mt-1 inline-block break-all text-base font-semibold text-accent-deep underline underline-offset-4 md:text-lg"
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
                      className="mt-1 inline-block break-all text-base font-semibold text-accent-deep underline underline-offset-4 md:text-lg"
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
                      className="mt-1 inline-block break-all text-base font-semibold text-accent-deep underline underline-offset-4 md:text-lg"
                      aria-labelledby="linkedin-label"
                    >
                      linkedin.com/in/attiq-rehman-
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[0.35rem] border-2 border-[color:var(--line)] bg-bg-soft p-4 md:p-8">
              <h2 className="display text-xl font-bold md:text-2xl" id="message-heading">
                Request an Accessibility Audit
              </h2>
              <p className="mt-2 text-sm text-muted md:text-base">
                Required fields are marked with an asterisk.
              </p>
              <ContactForm />
            </div>
          </div>

          <p className="mt-10 md:mt-12">
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
