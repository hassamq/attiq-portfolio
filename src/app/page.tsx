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

      <main id="main" tabIndex={-1} className="page-shell">
        {/* 1. Hero */}
        <section
          className="section relative flex min-h-[88svh] flex-col justify-end pb-16 pt-32 md:pb-24"
          aria-labelledby="hero-heading"
        >
          <div
            className="blob right-[-10%] top-[12%] h-72 w-72 bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] md:h-96 md:w-96"
            aria-hidden="true"
          />
          <div
            className="blob bottom-[18%] left-[-8%] h-56 w-56 bg-[color-mix(in_srgb,#a8c4b4_40%,transparent)]"
            aria-hidden="true"
          />

          <h1
            id="hero-heading"
            className="animate-rise display max-w-4xl text-[clamp(2.35rem,7vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
          >
            Make your website accessible — and keep it that way.
          </h1>
          <p className="animate-rise-1 mt-5 max-w-2xl text-lg font-semibold text-ink md:text-xl">
            Manual WCAG audits, accessibility remediation, and ongoing testing
            for websites and digital products.
          </p>
          <p className="animate-rise-2 mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            I help eCommerce, healthcare, SaaS, nonprofit, and other
            organizations identify accessibility barriers, understand exactly
            what needs to be fixed, and implement the fixes directly across
            their website or platform.
          </p>
          <div className="animate-rise-3 mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="cta cta-primary">
              Request an Accessibility Audit
            </Link>
            <Link href="/#services" className="cta cta-ghost">
              View services
            </Link>
          </div>
        </section>

        {/* 2. Trust / stats */}
        <section className="section" aria-label="Key results at a glance">
          <div className="stats-bar">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Who I help */}
        <section
          id="who"
          className="section py-20 md:py-24"
          aria-labelledby="who-heading"
        >
          <p className="kicker">Who I help</p>
          <h2
            id="who-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            Built for teams that can&apos;t risk inaccessible experiences.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
          className="section border-y border-[color:var(--line)] bg-bg-soft/60 py-20 md:py-24"
          aria-labelledby="services-heading"
        >
          <p className="kicker">Services</p>
          <h2
            id="services-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            What I can do for your website.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="panel !bg-bg">
                <h3 className="!text-[1.35rem]">{service.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{service.summary}</p>
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
                <p className="deliverable">Deliverable: {service.deliverable}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Why manual testing */}
        <section
          className="section py-20 md:py-24"
          aria-labelledby="manual-heading"
        >
          <p className="kicker">Why manual testing</p>
          <h2
            id="manual-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            Scanners alone are not enough.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            I combine automated testing with keyboard testing, screen readers
            (NVDA, JAWS, VoiceOver, TalkBack), and manual review — so you get
            real barriers, not just a tool score.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Automated checks",
              "Keyboard-only testing",
              "Screen readers",
              "Manual expert review",
            ].map((item) => (
              <li key={item} className="panel text-center font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Process */}
        <section
          id="process"
          className="section border-y border-[color:var(--line)] bg-bg-soft/60 py-20 md:py-24"
          aria-labelledby="process-heading"
        >
          <p className="kicker">Process</p>
          <h2
            id="process-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            How we&apos;ll work together.
          </h2>
          <ol className="process-grid mt-10 list-none p-0">
            {processSteps.map((step, index) => (
              <li key={step.title} className="process-step">
                <p className="step-num">Step {index + 1}</p>
                <h3 className="display mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Results / case studies */}
        <section
          id="results"
          className="section py-20 md:py-24"
          aria-labelledby="results-heading"
        >
          <p className="kicker">Results</p>
          <h2
            id="results-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            Experience that maps to buyer outcomes.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
          className="section border-y border-[color:var(--line)] bg-bg-soft/60 py-16 md:py-20"
          aria-labelledby="platforms-heading"
        >
          <p className="kicker">Platforms</p>
          <h2
            id="platforms-heading"
            className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Where I work.
          </h2>
          <ul className="platform-list mt-8">
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
          className="section py-20 md:py-24"
          aria-labelledby="about-heading"
        >
          <p className="kicker">About</p>
          <h2
            id="about-heading"
            className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
          >
            About {profile.fullName}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
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
          <div className="mt-8 flex flex-wrap gap-3">
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
          className="section border-y border-[color:var(--line)] bg-bg-soft/60 py-20 md:py-24"
          aria-labelledby="faq-heading"
        >
          <p className="kicker">FAQ</p>
          <h2
            id="faq-heading"
            className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Common questions.
          </h2>
          <div className="mt-8">
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
          id="contact"
          className="section pb-28 pt-16 md:pb-36 md:pt-20"
          aria-labelledby="contact-heading"
        >
          <div className="rounded-[0.35rem] bg-ink px-6 py-10 text-on-dark md:px-10 md:py-14">
            <p className="kicker !text-accent-soft">Next step</p>
            <h2
              id="contact-heading"
              className="display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
            >
              Have an accessibility issue to investigate?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-on-dark-muted">
              Tell me about your website, platform, and accessibility concerns.
              Send your website URL and I&apos;ll help you determine the
              appropriate next step.
            </p>
            <p className="mt-3 font-semibold text-accent-soft">
              {profile.responseTime}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
