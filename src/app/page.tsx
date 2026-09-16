import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/SiteChrome";
import { links, profile, siteConfig } from "@/lib/site";

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
        <section
          className="section relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28"
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

          <p className="kicker animate-rise">Portfolio</p>
          <h1
            id="hero-heading"
            className="animate-rise-1 display mt-4 max-w-3xl text-[clamp(2.8rem,9vw,5.4rem)] font-extrabold leading-[0.94] tracking-[-0.03em]"
          >
            {profile.fullName}
          </h1>
          <p className="animate-rise-2 mt-5 text-xl font-semibold text-ink md:text-2xl">
            {profile.title}
          </p>
          <p className="animate-rise-2 mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>
          <div className="animate-rise-3 mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="cta cta-primary">
              Contact me
            </Link>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              LinkedIn
              <ExternalNote />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="section py-20 md:py-28"
          aria-labelledby="about-heading"
        >
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
            <div>
              <p className="kicker">About</p>
              <h2
                id="about-heading"
                className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                Inclusive by design.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section border-y border-[color:var(--line)] bg-bg-soft/70 py-20 md:py-28"
          aria-labelledby="services-heading"
        >
          <p className="kicker">Services</p>
          <h2
            id="services-heading"
            className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            How I help.
          </h2>
          <ul className="mt-10 border-t border-[color:var(--line)]">
            {profile.services.map((service, index) => (
              <li key={service.title} className="service-row">
                <span className="text-sm font-bold text-accent-deep" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className="display text-xl font-bold md:text-2xl">{service.title}</h3>
                <p className="text-muted">{service.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="skills"
          className="section py-20 md:py-28"
          aria-labelledby="skills-heading"
        >
          <p className="kicker">Skills</p>
          <h2
            id="skills-heading"
            className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Tools I use.
          </h2>
          <ul className="mt-10 list-none p-0">
            {profile.skills.map((skill) => (
              <li key={skill} className="inline">
                <span className="skill-item">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="section pb-28 pt-10 md:pb-36"
          aria-labelledby="contact-heading"
        >
          <div className="rounded-[0.35rem] bg-ink px-6 py-10 text-on-dark md:flex md:items-end md:justify-between md:gap-10 md:px-10 md:py-12">
            <div>
              <p className="kicker !text-accent-soft">Contact</p>
              <h2
                id="contact-heading"
                className="display mt-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                Let&apos;s build accessible products.
              </h2>
              <p className="mt-4 max-w-md text-on-dark-muted">
                Audits, Shopify builds, and frontend work. I reply to every
                message.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
              <Link href="/contact" className="cta cta-primary">
                Open contact page
              </Link>
              <a href={`mailto:${links.email}`} className="cta cta-on-dark">
                Email {profile.fullName}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
