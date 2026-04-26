/**
 * CMS Content Types — Phase 2
 *
 * These interfaces define the content contract for each page.
 * Page components depend only on these shapes, not on where the data lives.
 * Swap the data source in adapter.ts when moving to a CMS — pages stay unchanged.
 */

// ─── Primitives ──────────────────────────────────────────────────────────────

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
}

export interface PageImage {
  src: string;
  alt: string;
}

export interface PageCta {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Home ────────────────────────────────────────────────────────────────────

export interface HomeContent {
  meta: SeoMeta;
  hero: {
    kicker: string;
    heading: string;
    subheadline: string;
    body: string[];
    primaryCta: PageCta;
    secondaryCta: PageCta;
  };
  certificationBadges: Array<{ src: string; label: string }>;
  ziggyZap: {
    heading: string;
    subheading: string;
    cards: Array<{ number: string; heading: string; body: string }>;
    buttonLabel: string;
    note: string;
  };
  socialProof: {
    heading: string;
    stats: Array<{ number: string; label: string }>;
    testimonials: Array<{
      stars: number;
      title: string;
      quote: string;
      name: string;
      role: string;
    }>;
  };
  chooseAdventure: {
    kicker: string;
    heading: string;
    body: string;
    services: Array<{
      tag: string;
      icon: string;
      heading: string;
      body: string;
      cta: PageCta;
      image?: PageImage;
    }>;
  };
  authority: {
    kicker: string;
    heading: string;
    body: string[];
  };
  finalCta: {
    kicker: string;
    heading: string;
    primaryCta: PageCta;
    secondaryCta: PageCta;
  };
}

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutContent {
  meta: SeoMeta;
  hero: {
    kicker: string;
    heading: string;
    subtitle: string;
    image: PageImage;
  };
  intro: {
    heading: string;
    body: string[];
    cta: PageCta;
    image: PageImage;
  };
  values: {
    label: string;
    heading: string;
    items: Array<{ heading: string; sub: string; body: string }>;
  };
  timeline: {
    label: string;
    heading: string;
    description: string;
    items: Array<{ period: string; heading: string; body: string }>;
  };
  catalystMoment: {
    label: string;
    heading: string;
    body: string[];
    cta: PageCta;
    image: PageImage;
  };
  education: {
    label: string;
    heading: string;
    description: string;
    items: string[];
  };
  clients: {
    label: string;
    heading: string;
    description: string;
    items: Array<{ name: string; logo: string }>;
  };
  faq: {
    label: string;
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    heading: string;
    body: string;
    cta: PageCta;
  };
}

// ─── Services ────────────────────────────────────────────────────────────────

export interface ServicesContent {
  meta: SeoMeta;
  hero: {
    kicker: string;
    heading: string;
    subtitle: string;
    image: PageImage;
  };
  invitation: {
    label: string;
    heading: string;
    body: string;
    bullets: string[];
    closing: string;
  };
  madeForMakers: {
    label: string;
    body: string;
    quote: string;
  };
  offerings: Array<{
    id: string;
    tag: string;
    heading: string;
    body: string;
    outcomes: string[];
    cta: PageCta;
    image: PageImage;
    note?: string;
  }>;
  testimonials: Array<{ quote: string; name: string; title: string }>;
  faq: {
    label: string;
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    heading: string;
    body: string;
    tagline: string;
    primaryCta: PageCta;
    secondaryCta: PageCta;
  };
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactContent {
  meta: SeoMeta;
  hero: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  form: {
    heading: string;
    description: string;
  };
  channels: Array<{
    label: string;
    value: string;
    href: string;
    note?: string;
  }>;
  sidebarImages: {
    portrait: PageImage & { caption: string; subcaption: string };
    book: PageImage;
  };
  retreatVenue: {
    label: string;
    heading: string;
    address: string[];
    body: string[];
    cta: PageCta;
    image: PageImage;
  };
  inclusion: string;
}
