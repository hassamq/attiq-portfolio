import Link from "next/link";
import { navItems } from "@/lib/site";

export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to main content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="display text-lg font-bold tracking-tight text-ink"
          aria-label="Attiq Ur Rehman — Home"
        >
          Attiq<span className="text-accent-deep" aria-hidden="true">
            .
          </span>
        </Link>
        <nav id="primary-nav" aria-label="Primary">
          <ul className="m-0 flex list-none flex-wrap items-center gap-x-4 gap-y-1 p-0 md:gap-x-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Attiq Ur Rehman</p>
        <nav aria-label="Footer">
          <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            <li>
              <Link href="/accessibility" className="underline">
                Accessibility statement
              </Link>
            </li>
            <li>
              <Link href="/contact" className="underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
