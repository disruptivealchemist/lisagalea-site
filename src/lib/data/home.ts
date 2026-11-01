import type { HomeContent } from "@/lib/cms/types";

export const homeContent: HomeContent = {
  meta: {
    title: "Lisa Galea | Creative Leadership & Human-Centred AI",
    description:
      "More brains. Less bollocks. All heart. Lead with curiosity and transform with clarity. Where commercial creativity meets collective intelligence.",
    canonical: "/",
  },

  hero: {
    kicker: "The Art and Science of Play",
    heading: "More brains. Less bollocks. All heart.",
    subheadline:
      "Lead with Curiosity. Transform with Clarity. Where Commercial Creativity Meets Collective Intelligence.",
    body: [
      "You think in systems, but feel the cracks. The pace is relentless. The pressure is high. And somewhere in the noise, clarity and creativity got buried. This space exists to change that.",
      "I work with leaders who are navigating complexity, aware that what got them here won't get them where they're going. Together, we explore new ways of seeing, leading, and creating—integrating emotional intelligence, behavioral science, and future-thinking to unlock insight and action.",
      "You don't need more information. You need a new way of connecting the dots.",
    ],
    primaryCta: { label: "Work with me", href: "https://aimegos.com/", external: true },
    secondaryCta: { label: "More About Me", href: "/about" },
  },

  certificationBadges: [
    { src: "/images/certifications/cert-ogilvy.jpg", label: "Ogilvy Behavioural Economics" },
    { src: "/images/certifications/cert-brene-brown.jpg", label: "Brené Brown Leadership Training" },
    { src: "/images/certifications/cert-master-bsc.jpg", label: "Master Behavioural Science, Advertising" },
    { src: "/images/certifications/cert-cannes-lions.jpg", label: "Cannes Lions Behavioural Science Branding" },
    { src: "/images/certifications/cert-body-language.jpg", label: "Truth Plane Body Language for Business" },
  ],

  socialProof: {
    heading: "Trusted by Visionaries. Grounded in Results.",
    stats: [
      { number: "90%", label: "Customer Retention — over 17 yr in business" },
      { number: "19", label: "Commercial Understanding — Industry Sectors" },
      { number: "30", label: "Commercial Understanding — Years of experience" },
      { number: "5", label: "Business Acumen — Successful Active Businesses" },
    ],
    testimonials: [
      {
        stars: 5,
        title: "Lisa is inclusive in our corporate profile development.",
        quote:
          "Your support and advice on branding, marketing and AI transformation during our 19 year business relationship has been invaluable.",
        name: "James Emery",
        role: "Founder, Emery Industries",
      },
      {
        stars: 5,
        title: "When things don't add up, start subtracting.",
        quote:
          "Our second year as an exhibitor at #adobemax was a big improvement for us. We were able to do more, for less money, faster, and with less stress. Booth setup was estimated at $13k. No thank you. With Lisa Galea's recommendation, we got it done for under $1k.",
        name: "Chris Do",
        role: "Founder, The Futur",
      },
    ],
  },

  ziggyZap: {
    heading: "Your Guide to Lisa's World",
    subheading:
      "ZiggyZap is a Bowie–Warhol–Westwood mashup with a Master's in making things click. She knows Lisa's world inside out — ask her anything, take the quiz, or get routed to exactly the right place.",
    cards: [
      {
        number: "01",
        heading: "Ask Anything",
        body: "Services, pricing (she'll route you), Lisa's story, speaking enquiries — ZiggyZap knows the territory.",
      },
      {
        number: "02",
        heading: "Take the Quiz",
        body: "15 questions. Behavioural science. No fluff. Score yourself and get your cheat sheet — straight to your inbox.",
      },
      {
        number: "03",
        heading: "Find Your Path",
        body: "Not sure where to start? Tell ZiggyZap what you need and she'll route you straight to the right door.",
      },
    ],
    buttonLabel: "Chat with ZiggyZap ⚡",
    note: "Look for the ⚡ in the bottom-right corner of every page",
  },

  chooseAdventure: {
    kicker: "Work with me",
    heading: "Choose Your Adventure",
    body: "Short, high-safety experiences that create lasting behaviour change. The brave, the unconventional, the quietly brilliant. This is your playground.",
    services: [
      {
        tag: "Consulting & Facilitation",
        icon: "🧭",
        heading: "Expand Possibilities",
        body: "Navigate the fast-paced business landscape with expert guidance on AI integration, behavioral science, commercial creativity, and diversity-first innovation.",
        cta: { label: "Learn More", href: "/services" },
        image: {
          src: "/images/consulting.jpg",
          alt: "Lisa Galea delivering a keynote — consulting and facilitation",
        },
      },
      {
        tag: "Signature Programs",
        icon: "🧠",
        heading: "Build Teams That Thrive",
        body: "From 6-month innovation mastermind to executive coaching, our programs are designed for leaders ready to move from expert to exponential.",
        cta: { label: "Learn More", href: "/services" },
        image: {
          src: "/images/lisa-galea-ai-leadership.jpg",
          alt: "AI leadership training with Lisa Galea — signature programs",
        },
      },
      {
        tag: "Live Events & Offsites Byron",
        icon: "🌿",
        heading: "Escape the Ordinary",
        body: "Immersive experiences at Sanctuary in Byron Bay where strategic clarity meets creative breakthrough. Workshops, offsites, keynotes.",
        cta: { label: "Learn More", href: "/services" },
        image: {
          src: "/images/retreats-offsites.jpg",
          alt: "Sanctuary retreats and offsites in Byron Bay",
        },
      },
    ],
  },

  authority: {
    kicker: "AI + Creativity + Leadership for the Bold",
    heading: "Hello, I'm Lisa",
    body: [
      "Recognise patterns. Reframe perception. Redefine possibility.",
      "AI isn't about automating boring tasks. It's about liberation—freeing humans from acting like machines, disrupting linear systems, and eliminating soul-draining work.",
      "My approach? Blend behavioral science, emotional intelligence, and strategic curiosity to help leaders thrive in complexity. Because in this tech supercycle, curiosity is currency.",
    ],
  },

  finalCta: {
    kicker: "Ready to Transform Your Team?",
    heading: "Work With AImegos",
    primaryCta: { label: "Ready to Transform Your Team? →", href: "https://aimegos.com" },
    secondaryCta: { label: "Let's Have a Conversation", href: "/contact" },
  },
};
