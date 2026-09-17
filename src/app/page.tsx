import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/SiteChrome";
import {
  faqs,
  industries,
  links,
  platforms,
  processSteps,
  profile,
  results,
  services,
  siteConfig,
  stats,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

function ExternalNote() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main" className="page-shell">
        <a id="top" className="page-top-target" tabIndex={-1}>
          Top of page
        </a>

        {/* 1. Hero */}
        <section
          className="section hero relative"
          aria-labelledby="hero-heading"
        >
          <div
            className="blob right-[-10%] top-[12%] h-56 w-56 bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] md:h-96 md:w-96"
            aria-hidden="true"
          />
          <div
            className="blob bottom-[18%] left-[-8%] h-40 w-40 bg-[color-mix(in_srgb,#a8c4b4_40%,transparent)] md:h-56 md:w-56"
            aria-hidden="true"
          />

          <h1
            id="hero-heading"
            className="animate-rise display max-w-4xl text-[clamp(2rem,8.5vw,4.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]"
          >
            Make your website accessible — and keep it that way.
          </h1>
          <p className="animate-rise-1 mt-4 max-w-2xl text-base font-semibold text-ink md:mt-5 md:text-xl">
            Manual WCAG audits, accessibility remediation, and ongoing testing
            for websites and digital products.
          </p>
          <p className="animate-rise-2 mt-3 max-w-2xl text-base leading-relaxed text-muted md:mt-4 md:text-lg">
            I help eCommerce, healthcare, SaaS, nonprofit, and other
            organizations identify accessibility barriers, understand exactly
            what needs to be fixed, and implement the fixes directly across
            their website or platform.
          </p>
          <div className="animate-rise-3 cta-row">
            <Link href="/contact" className="cta cta-primary">
              Request an Accessibility Audit
            </Link>
            <Link href="/#services" className="cta cta-ghost">
              View services
            </Link>
          </div>
        </section>

        {/* 2. Trust / stats */}
        <section className="section mt-2 md:mt-4" aria-label="Key results at a glance">
          <ul className="stats-bar list-none p-0 m-0">
            {stats.map((stat) => (
              <li key={stat.label} className="stat-item">
                <p className="stat-value m-0">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Who I help */}
        <section
          id="who"
          className="section section-block"
          aria-labelledby="who-heading"
        >
          <p className="kicker">Who I help</p>
          <h2
            id="who-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            Built for teams that can&apos;t risk inaccessible experiences.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:gap-4">
            {industries.map((item) => (
              <article key={item.title} className="panel">
                <h3>{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Services */}
        <section
          id="services"
          className="section section-block border-y border-[color:var(--line)] bg-bg-soft/60"
          aria-labelledby="services-heading"
        >
          <p className="kicker">Services</p>
          <h2
            id="services-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            What I can do for your website.
          </h2>
          <div className="mt-8 grid gap-4 md:mt-10 md:gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="panel !bg-bg">
                <h3 className="!text-[1.25rem] md:!text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed">
                  {service.summary}
                </p>
                {"what" in service && service.what && (
                  <>
                    <p className="mt-4 text-sm font-bold uppercase tracking-wide text-ink">
                      What you get clarity on
                    </p>
                    <ul className="checklist">
                      {service.what.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {"where" in service && service.where && (
                  <>
                    <p className="mt-4 text-sm font-bold uppercase tracking-wide text-ink">
                      Where I fix it
                    </p>
                    <ul className="checklist">
                      {service.where.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="deliverable">
                  Deliverable: {service.deliverable}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Why manual testing */}
        <section
          className="section section-block"
          aria-labelledby="manual-heading"
        >
          <p className="kicker">Why manual testing</p>
          <h2
            id="manual-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            Scanners alone are not enough.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
            I combine automated testing with keyboard testing, screen readers
            (NVDA, JAWS, VoiceOver, TalkBack), and manual review — so you get
            real barriers, not just a tool score.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:grid-cols-4">
            {[
              "Automated checks",
              "Keyboard-only testing",
              "Screen readers",
              "Manual expert review",
            ].map((item) => (
              <li
                key={item}
                className="panel text-center text-sm font-semibold text-ink md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Process */}
        <section
          id="process"
          className="section section-block border-y border-[color:var(--line)] bg-bg-soft/60"
          aria-labelledby="process-heading"
        >
          <p className="kicker">Process</p>
          <h2
            id="process-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            How we&apos;ll work together.
          </h2>
          <ol className="process-grid mt-8 list-none p-0 md:mt-10">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-step">
                <p className="step-num">Step {index + 1}</p>
                <h3 className="display mt-2 text-lg font-bold md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Results / case studies */}
        <section
          id="results"
          className="section section-block"
          aria-labelledby="results-heading"
        >
          <p className="kicker">Results</p>
          <h2
            id="results-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            Experience that maps to buyer outcomes.
          </h2>
          <div className="mt-8 grid gap-4 md:mt-10 md:gap-5 md:grid-cols-3">
            {results.map((item) => (
              <article key={item.title} className="panel">
                <p className="text-sm font-bold uppercase tracking-wide text-accent-deep">
                  {item.context}
                </p>
                <h3 className="mt-2">{item.title}</h3>
                <p className="mt-3 text-sm font-bold text-ink">Problem</p>
                <p className="mt-1">{item.problem}</p>
                <p className="mt-3 text-sm font-bold text-ink">Outcome</p>
                <p className="mt-1">{item.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 8. Platforms */}
        <section
          className="section section-block border-y border-[color:var(--line)] bg-bg-soft/60 !py-12 md:!py-20"
          aria-labelledby="platforms-heading"
        >
          <p className="kicker">Platforms</p>
          <h2
            id="platforms-heading"
            className="display mt-3 text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            Where I work.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted md:mt-4 md:text-lg">
            Accessibility audits and remediation across major CMS platforms and
            custom stacks.
          </p>
          <ul className="platform-list mt-7 md:mt-9">
            {platforms.map((platform) => (
              <li key={platform}>
                <span className="platform-chip">{platform}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 9. About */}
        <section
          id="about"
          className="section section-block"
          aria-labelledby="about-heading"
        >
          <p className="kicker">About</p>
          <h2
            id="about-heading"
            className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            About {profile.fullName}
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted md:mt-6 md:space-y-5 md:text-lg">
            <p>
              I&apos;m {profile.fullName}, an accessibility specialist and
              developer focused on making websites and digital products usable
              by people with disabilities.
            </p>
            <p>
              My work combines accessibility auditing with hands-on development,
              so I don&apos;t stop at identifying problems. I can work directly
              in the website or codebase to implement and test the fixes.
            </p>
            <p>
              I work across Shopify, WordPress, Webflow, and custom web
              applications, using manual testing alongside automated tools.
            </p>
          </div>
          <div className="cta-row !mt-6 md:!mt-8">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              LinkedIn
              <ExternalNote />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              GitHub
              <ExternalNote />
            </a>
          </div>
        </section>

        {/* 10. FAQ */}
        <section
          className="section section-block border-y border-[color:var(--line)] bg-bg-soft/60"
          aria-labelledby="faq-heading"
        >
          <p className="kicker">FAQ</p>
          <h2
            id="faq-heading"
            className="display mt-3 text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
          >
            Common questions.
          </h2>
          <div className="mt-6 md:mt-8">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 11. Final CTA */}
        <section
          id="get-started"
          className="section pb-16 pt-10 md:pb-28 md:pt-16"
          aria-labelledby="contact-heading"
        >
          <div className="final-cta rounded-[0.35rem] bg-ink text-on-dark">
            <p className="kicker !text-accent-soft">Next step</p>
            <h2
              id="contact-heading"
              className="display mt-3 max-w-2xl text-[1.75rem] font-bold leading-tight tracking-tight md:text-4xl"
            >
              Have an accessibility issue to investigate?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-on-dark-muted md:text-lg">
              Tell me about your website, platform, and accessibility concerns.
              Send your website URL and I&apos;ll help you determine the
              appropriate next step.
            </p>
            <p className="mt-3 font-semibold text-accent-soft">
              {profile.responseTime}
            </p>
            <div className="cta-row">
              <Link href="/contact" className="cta cta-primary">
                Request an Accessibility Review
              </Link>
              <a href={`mailto:${links.email}`} className="cta cta-on-dark">
                Email me
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
