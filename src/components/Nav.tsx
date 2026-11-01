"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SubItem = {
  href: string;
  label: string;
  external?: boolean;
};

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  submenu?: SubItem[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    submenu: [{ href: "/give-back", label: "Give Back" }],
  },
  { href: "/#testimonials", label: "Testimonials" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      {
        href: "https://sanctuaryinthepocket.com.au/",
        label: "Retreat Byron Bay",
        external: true,
      },
    ],
  },
  { href: "https://aimegos.com/", label: "AI Tools & Training", external: true },
  {
    href: "/blog",
    label: "Thoughts",
    submenu: [
      {
        href: "https://lisagalea.com/secret-to-winning-at-life-workbook-thefutur-goals/",
        label: "Chris Do Goal Setting",
        external: true,
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

// Reused in the dark top strip above the main bar. Same URLs as Footer.tsx.
const socialLinks = [
  { href: "https://www.linkedin.com/in/lisagalea/", label: "LinkedIn" },
  { href: "https://www.instagram.com/thelisagalea/", label: "Instagram" },
  { href: "https://twitter.com/thelisagalea", label: "X" },
  { href: "https://www.youtube.com/@thelisagalea", label: "YouTube" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/#testimonials") return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkClassName(active: boolean): string {
  return [
    "font-ui font-bold text-[16px] uppercase tracking-[0.125em] transition-colors duration-200",
    active ? "text-red-accent" : "text-nav-ink hover:text-red-accent",
  ].join(" ");
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* (1) Thin dark top strip — social "Follow" links */}
      <div className="flex h-[30px] items-center justify-center gap-5 bg-ink px-4 text-brand-paper sm:gap-7 sm:justify-end sm:px-8">
        <span className="font-ui text-[10px] uppercase tracking-[0.24em] text-brand-paper/70">
          Follow
        </span>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-[10px] uppercase tracking-[0.24em] text-brand-paper/90 transition-colors duration-200 hover:text-gold"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* (2) Main bar — logo left, menu centered, white bg, subtle shadow */}
      <div className="bg-white shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            className="flex min-h-14 items-center"
            aria-label="Main navigation"
          >
            {/* Logo (left) */}
            <Link
              href="/"
              className="flex items-center leading-none text-brand-black"
              aria-label="Lisa Galea — Home"
            >
              <Image
                src="/images/logo.png"
                alt="Lisa Galea logo"
                width={190}
                height={56}
                priority
                className="h-auto w-[75px] sm:w-[95px]"
              />
            </Link>

            {/* Desktop menu (centered) */}
            <ul
              className="hidden flex-1 items-center justify-center gap-7 lg:flex"
              role="list"
            >
              {navLinks.map((link, i) => {
                const active = !link.external && isActive(pathname, link.href);
                const hasSub = !!link.submenu;
                const open = openIndex === i;
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => hasSub && setOpenIndex(i)}
                    onMouseLeave={() => hasSub && setOpenIndex(null)}
                    onFocus={() => hasSub && setOpenIndex(i)}
                    onBlur={(e) => {
                      if (
                        hasSub &&
                        !e.currentTarget.contains(e.relatedTarget as Node)
                      ) {
                        setOpenIndex(null);
                      }
                    }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={linkClassName(active)}
                        aria-haspopup={hasSub ? "true" : undefined}
                        aria-expanded={hasSub ? open : undefined}
                      >
                        {link.label}
                      </Link>
                    )}

                    {/* (3) Dropdown submenu */}
                    {hasSub && open && (
                      <ul
                        className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 min-w-[200px] rounded-md border border-brand-black/10 bg-white py-2 shadow-[0px_12px_18px_-6px_rgba(0,0,0,0.15)]"
                        role="menu"
                      >
                        {link.submenu!.map((sub) => (
                          <li key={sub.href} role="none">
                            {sub.external ? (
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                className="block whitespace-nowrap px-4 py-2 font-ui text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:text-red-accent"
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                role="menuitem"
                                className="block whitespace-nowrap px-4 py-2 font-ui text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:text-red-accent"
                              >
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right spacer — balances the centered menu */}
            <div className="hidden flex-1 lg:block" aria-hidden="true" />

            {/* Mobile hamburger */}
            <button
              className="ml-auto flex flex-col gap-1.5 p-2 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-6 bg-brand-black transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-brand-black transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-brand-black transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </nav>

          {/* Mobile menu */}
          {mobileOpen && (
            <div
              id="mobile-menu"
              className="mt-3 rounded-[28px] border border-brand-black/10 bg-white px-6 py-6 lg:hidden"
            >
              <ul className="flex flex-col gap-5" role="list">
                {navLinks.map((link) => {
                  const active =
                    !link.external && isActive(pathname, link.href);
                  return (
                    <li key={link.href} className="flex flex-col gap-2">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className={linkClassName(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={linkClassName(active)}
                        >
                          {link.label}
                        </Link>
                      )}
                      {link.submenu && (
                        <ul
                          className="ml-3 flex flex-col gap-2 border-l border-brand-black/10 pl-3"
                          role="list"
                        >
                          {link.submenu.map((sub) => (
                            <li key={sub.href}>
                              {sub.external ? (
                                <a
                                  href={sub.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMobileOpen(false)}
                                  className="font-ui text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:text-red-accent"
                                >
                                  {sub.label}
                                </a>
                              ) : (
                                <Link
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="font-ui text-[13px] uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:text-red-accent"
                                >
                                  {sub.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn btn-filled"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
