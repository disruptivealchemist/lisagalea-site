import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/services", label: "Services" },
  { href: "/give-back", label: "Give Back" },
  { href: "/blog", label: "Thoughts" },
  { href: "/contact", label: "Contact" },
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
    <footer
      className="relative overflow-hidden bg-black px-6 py-16 text-brand-paper sm:px-10 sm:py-20"
      aria-label="Site footer"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* (a) Lead-in — curiosity mark + prompt */}
        <div className="mb-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Image
            src="/images/lisa-galea-curiosity-book.png"
            alt="Lisa Galea — Curiosity book mark"
            width={88}
            height={88}
            loading="lazy"
            className="h-[72px] w-[72px] flex-none object-contain sm:h-[88px] sm:w-[88px]"
          />
          <p className="font-ui text-[14px] uppercase tracking-[0.125em] text-red-accent">
            Curious? What are you waiting for?
          </p>
        </div>

        {/* Footer menu links */}
        <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-3" role="list">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-ui text-[11px] uppercase tracking-[0.24em] text-brand-paper transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Content grid: Connect, Retreat, Woman Owned, Follow, Join our Pack */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* (b) Connect block */}
          <div>
            <h4 className="mb-3 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
              Connect
            </h4>
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper">
              Lisa Galea Consulting Pty Ltd
            </p>
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper">
              ABN: 15654048503
            </p>
            <a
              href="mailto:curious@lisagalea.com"
              className="font-ui text-[13px] leading-relaxed text-teal-link transition-colors duration-200 hover:text-red-hover"
            >
              curious@lisagalea.com
            </a>
          </div>

          {/* (c) Retreat block */}
          <div>
            <h4 className="mb-3 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
              Retreat
            </h4>
            <a
              href="https://sanctuaryinthepocket.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[13px] leading-relaxed text-brand-paper transition-colors duration-200 hover:text-red-hover"
            >
              Sanctuary in the Pocket, Byron Hinterland, NSW
            </a>
            <p className="mt-2 font-ui text-[13px] leading-relaxed text-brand-paper/70">
              Based in Australia | Available globally
            </p>
          </div>

          {/* (d) Woman Owned Business line */}
          <div>
            <h4 className="mb-3 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
              Visit Us
            </h4>
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper">
              Woman Owned Business
            </p>
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper">
              Leading with Care & Curiosity
            </p>
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper">
              Creative Leadership
            </p>
          </div>

          {/* (f) Join our Pack newsletter */}
          <div>
            <h4 className="mb-3 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
              Join our Pack
            </h4>
            <p className="mb-4 font-ui text-[13px] leading-relaxed text-brand-paper/80">
              Make a micro investment into a future of possibilities and sign up
              now for exclusive content, offers & free stuff that I doesn’t
              share anywhere else.
            </p>
            <form action="/contact" method="get" className="flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="w-full rounded-pill border border-brand-paper/40 bg-transparent px-4 py-2 font-ui text-[14px] text-brand-paper placeholder:text-brand-paper/50 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-filled w-full"
              >
                Join the Pack
              </button>
              <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-brand-paper/50">
                No spam I promise.
              </p>
            </form>
          </div>
        </div>

        {/* Certifications block — Ogilvy Behavioural Economics credential */}
        <div className="mt-10">
          <h4 className="mb-4 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
            Certifications
          </h4>
          <div className="flex items-center gap-5">
            <Image
              src="/images/certifications/cert-ogilvy.jpg"
              alt="Ogilvy Behavioural Economics certification"
              width={96}
              height={120}
              loading="lazy"
              className="h-[120px] w-[96px] flex-none rounded-md border border-brand-paper/15 object-cover"
            />
            <p className="font-ui text-[13px] leading-relaxed text-brand-paper/80">
              Ogilvy Behavioural Economics
            </p>
          </div>
        </div>

        {/* (e) Follow block */}
        <div className="mt-12">
          <h4 className="mb-4 font-ui text-[12px] uppercase tracking-[0.2em] text-red-hover">
            Follow
          </h4>
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${s.label}`}
                className="font-ui text-[11px] uppercase tracking-[0.24em] text-brand-paper transition-colors duration-200 hover:text-red-hover"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bauhaus-rule mt-10" />
      </div>

      {/* Legal bottom bar */}
      <div className="relative z-10 mx-auto mt-8 max-w-7xl grid gap-4 border-t border-brand-paper/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-paper/50">
          Lisa Galea Consulting Pty Ltd © {new Date().getFullYear()} - ABN 15 654 048 503
        </p>
        {/* (g) Terms & Privacy links */}
        <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-ui text-[10px] uppercase tracking-[0.22em] text-brand-paper/50 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
