import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Thoughts" },
  { href: "/contact", label: "Contact" },
  { href: "/give-back", label: "Give Back" },
  { href: "/testimonials", label: "Testimonials" },
];

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/lisagalea/", label: "LinkedIn" },
  { href: "https://www.instagram.com/thelisagalea/", label: "Instagram" },
  { href: "https://twitter.com/thelisagalea", label: "X" },
  { href: "https://www.youtube.com/@thelisagalea", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-black/10 bg-brand-paper px-6 py-16 sm:px-10 sm:py-20" aria-label="Site footer">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="bauhaus-kicker mb-4 text-ink/55">Get in touch</p>
          <h2 className="font-display text-[3.5rem] leading-tight tracking-[-0.02em] text-brand-black sm:text-[5rem]">
            Connect
          </h2>
        </div>

        {/* Social links row */}
        <div className="mb-10 flex flex-wrap gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${s.label}`}
              className="font-ui text-[11px] uppercase tracking-[0.24em] text-brand-black transition-colors duration-200 hover:text-gold"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="bauhaus-rule" />
      </div>

      {/* Legal bottom bar */}
      <div className="relative z-10 mx-auto mt-8 max-w-7xl grid gap-4 border-t border-brand-black/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50">
          Lisa Galea Consulting Pty Ltd © {new Date().getFullYear()} - ABN 15 654 048 503
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-ui text-[10px] uppercase tracking-[0.22em] text-ink/50 transition-colors duration-200 hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
