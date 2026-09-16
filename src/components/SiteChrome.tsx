import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="display text-lg font-bold tracking-tight text-ink">
          Attiq<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${item.href === "/contact" ? "" : "hidden sm:inline"}`}
            >
              {item.label}
            </Link>
          ))}
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
        <p>Accessibility · Shopify · Frontend</p>
      </div>
    </footer>
  );
}
