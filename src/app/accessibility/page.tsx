import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/SiteChrome";
import { links, profile, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `Accessibility statement for ${profile.fullName}'s website, covering WCAG 2.1 Level AA, ADA, and Section 508 alignment.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="page-shell min-h-[100svh] pt-28 pb-20">
        <article className="section prose-a11y">
          <p className="kicker">Legal & compliance</p>
          <h1 className="display mt-3 text-[clamp(2.2rem,6vw,3.4rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink">
            Accessibility statement
          </h1>
          <p className="mt-4 text-lg text-muted">
            {siteConfig.name} is committed to ensuring digital accessibility for
            people with disabilities. We continually improve the user experience
            for everyone and apply relevant accessibility standards.
          </p>

          <h2>Conformance goal</h2>
          <p>
            This website aims to conform to the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . WCAG 2.1 AA is the technical standard commonly used to demonstrate
            accessibility under U.S. requirements such as the{" "}
            <strong>Americans with Disabilities Act (ADA)</strong> and{" "}
            <strong>Section 508 of the Rehabilitation Act</strong>.
          </p>

          <h2>Measures we take</h2>
          <ul>
            <li>Semantic HTML landmarks, headings, and lists</li>
            <li>Keyboard-accessible navigation and visible focus indicators</li>
            <li>Skip link to main content</li>
            <li>Color contrast targeting WCAG AA ratios</li>
            <li>Form labels, required-field indication, and error messaging</li>
            <li>Reduced-motion support for users who prefer less animation</li>
            <li>Clear link purpose, including new-tab announcements</li>
          </ul>

          <h2>Assistive technology compatibility</h2>
          <p>
            Content is designed to work with common assistive technologies,
            including screen readers, keyboard-only navigation, browser zoom,
            and operating-system contrast or motion preferences.
          </p>

          <h2>Known limitations</h2>
          <p>
            Third-party platforms linked from this site (for example LinkedIn or
            email clients) are outside our direct control. If you find an
            accessibility barrier on this website, please tell us so we can fix
            it.
          </p>

          <h2>Feedback and contact</h2>
          <p>
            If you experience difficulty accessing any part of this site, contact
            us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${links.email}`}>{links.email}</a>
            </li>
            <li>
              Contact form: <Link href="/contact">/contact</Link>
            </li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within 5 business days.
          </p>

          <h2>Assessment approach</h2>
          <p>
            Accessibility is evaluated through manual keyboard testing, semantic
            review, contrast checks, and alignment with WCAG 2.1 AA success
            criteria during design and development.
          </p>

          <p className="mt-10">
            <Link href="/" className="nav-link">
              Back to home
            </Link>
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
