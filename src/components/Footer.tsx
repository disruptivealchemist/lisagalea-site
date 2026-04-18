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
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="bauhaus-kicker mb-4 text-ink/55">Lisa Galea</p>
          <p className="font-heading text-5xl uppercase tracking-[-0.08em] text-brand-black sm:text-7xl">
            Lisa
            <span className="text-gold"> Galea</span>
          </p>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/75 sm:text-lg">
            Behavioural science, creative leadership, and human-centred AI for teams who need sharper thinking and more courageous momentum.
          </p>
          <div className="bauhaus-rule my-8" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
            Byron Bay Hinterland / Available Globally
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="bauhaus-kicker mb-4 text-ink/55">Navigate</p>
            <ul className="space-y-3" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-ui text-[11px] uppercase tracking-[0.24em] text-brand-black transition-colors duration-200 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="bauhaus-kicker mb-4 text-ink/55">Follow</p>
            <ul className="space-y-3" role="list">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${s.label}`}
                    className="font-ui text-[11px] uppercase tracking-[0.24em] text-brand-black transition-colors duration-200 hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-7xl gap-4 border-t border-brand-black/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
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
