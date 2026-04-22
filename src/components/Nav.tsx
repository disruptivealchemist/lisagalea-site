"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Thoughts" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-brand-black/10 bg-brand-paper/95 px-4 py-3 backdrop-blur-sm sm:px-6">
      <div className="max-w-7xl mx-auto">
        <nav
          className="flex min-h-14 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-4 sm:gap-6">
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
          </div>

          <ul className="hidden items-center gap-8 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-ui text-[20px] uppercase tracking-[0.28em] text-brand-black transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 sm:flex">
            <Link href="/contact" className="inline-flex btn btn-filled">
              Book a Call
            </Link>
          </div>

          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="mt-3 rounded-[28px] border border-brand-black/10 bg-brand-paper px-6 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-ui text-[11px] uppercase tracking-[0.28em] text-brand-black transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-filled">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
