"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type MouseEvent,
} from "react";
import { links, navItems } from "@/lib/site";

export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to main content
    </a>
  );
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    // Always land at the top — same-route Link clicks otherwise keep scroll
    // (and focusing #main can jump toward the bottom of a tall page).
    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/");
      scrollToTop();
      closeMenu();
      document.getElementById("top")?.focus({ preventScroll: true });
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="display shrink-0 text-lg font-bold tracking-tight text-ink"
          aria-label="Attiq Ur Rehman — Home"
          onClick={handleLogoClick}
        >
          Attiq
          <span className="text-accent-deep" aria-hidden="true">
            .
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id={menuId}
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Attiq Ur Rehman</p>
        <nav aria-label="Footer">
          <ul className="footer-links">
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
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
