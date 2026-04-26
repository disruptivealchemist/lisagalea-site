import type { HomeContent } from "@/lib/cms/types";

export const homeContent: HomeContent = {
  meta: {
    title: "Lisa Galea | Creative Leadership & Human-Centred AI",
    description:
      "More Brain. Less Bollocks. All Heart. Lead with curiosity and transform with clarity. Where commercial creativity meets human intelligence.",
    canonical: "/",
  },

  hero: {
    kicker: "Creative Leadership / Human-Centred AI",
    heading: "More Brain. Less Bollocks. All Heart.",
    subheadline:
      "Lead with Curiosity. Transform with Clarity. Where Commercial Creativity Meets Human Intelligence.",
    body: [
      "You think in systems, but feel the cracks. The pace is relentless. The pressure is high. And somewhere in the noise, clarity and creativity got buried. This space exists to change that.",
      "I work with leaders who are navigating complexity, aware that what got them here won't get them where they're going. Together, we explore new ways of seeing, leading, and creating—integrating emotional intelligence, behavioral science, and future-thinking to unlock insight and action.",
      "You don't need more information. You need a new way of connecting the dots.",
    ],
    primaryCta: { label: "Let's Explore", href: "/services" },
    secondaryCta: { label: "Book a Clarity Call", href: "/contact" },
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
      { number: "30+", label: "Years guiding creative and commercial transformation" },
      { number: "90%", label: "Long-term client retention" },
      { number: "5", label: "Successful businesses founded, scaled, and thriving" },
      { number: "160+", label: "Countries facilitated through leadership programs" },
    ],
    testimonials: [
      {
        stars: 5,
        title: "World-Class Creative Solutions",
        quote:
          "I have worked with graphic designers within some of the world's greatest advertising agencies and would rate Lisa in the top tier. Her creative solutions and design flare are world class.",
        name: "David Meo",
        role: "Creative Director, Meo Consulting",
      },
      {
        stars: 5,
        title: "The Absolute Go-To",
        quote:
          "Being a marketing agency, we've worked with many graphic designers and 'branding experts,' only to be let down. We've worked with Lisa for a long time now and she is head and shoulders the best branding expert I've ever had the pleasure to work with.",
        name: "Marcus Jovanovich",
        role: "Owner, My Marketing Coach",
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
    body: "Curious minds welcome the brave. The unconventional. The quietly brilliant. This is your playground.",
    services: [
      {
        tag: "Consulting & Strategy",
        icon: "🧭",
        heading: "Consulting\n& Strategy",
        body: "Navigate the fast-paced business landscape with expert guidance on AI integration, behavioral science, commercial creativity, and diversity-first innovation.",
        cta: { label: "Learn More", href: "/services" },
      },
      {
        tag: "Signature Programs",
        icon: "🧠",
        heading: "Signature\nPrograms",
        body: "From 6-month innovation mastermind to executive coaching, our programs are designed for leaders ready to move from expert to exponential.",
        cta: { label: "Learn More", href: "/services" },
      },
      {
        tag: "Live Events & Retreats",
        icon: "🌿",
        heading: "Live Events\n& Retreats",
        body: "Immersive experiences at Sanctuary in Byron Bay where strategic clarity meets creative breakthrough. Workshops, offsites, keynotes.",
        cta: { label: "Learn More", href: "/services" },
      },
    ],
  },

  authority: {
    kicker: "AI + Creativity + Leadership for the Bold",
    heading: "AI isn't about automating boring tasks.",
    body: [
      "It's about liberation—freeing humans from acting like machines, disrupting linear systems, and eliminating soul-draining work.",
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
