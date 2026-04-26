import type { ServicesContent } from "@/lib/cms/types";

export const servicesContent: ServicesContent = {
  meta: {
    title: "Services",
    description:
      "Strategic off-sites & retreats, executive coaching, facilitation, and keynotes. Behavioural design meets meaningful mischief — for visionary leaders who do things differently.",
    canonical: "/services",
  },

  hero: {
    kicker: "What We Offer",
    heading: "Design a Life You Love",
    subtitle: "Where Clarity Sparks Confidence & Mess Makes Momentum",
    image: { src: "/images/services-hero.jpg", alt: "" },
  },

  invitation: {
    label: "The Invitation",
    heading: "Imagination + Influence = Innovation",
    body: "You're not here for another AI lecture or outdated leadership playbook. You're here because you know the world is shifting — and your team or your inner compass is craving something deeper.",
    bullets: [
      "Clarity to lead through complexity",
      "Confidence to experiment without chaos",
      "Culture that actually connects",
    ],
    closing: "That's where we come in.",
  },

  madeForMakers: {
    label: "Made for Makers",
    body: "We work with visionary entrepreneurs, founders, and executive teams who do things differently. Engineers with soul. Creatives with systems. Builders who value empathy.",
    quote: "Most describe it as the leadership reset I didn't know I needed.",
  },

  offerings: [
    {
      id: "retreats",
      tag: "Strategic Off-Sites & Team Retreats",
      heading: "Activation Portals, Not Away Days",
      body: "Immersive, curated, deeply creative. These aren't \"away days.\" They're activation portals. We blend neuro-design, nudgetech, and playful strategy to unlock what's really holding your team back — and rewire for what's possible.",
      outcomes: ["Team coherence", "Next-level problem solving", "Regenerative energy"],
      cta: { label: "Explore Retreat Dates", href: "https://sanctuaryinthepocket.com.au", external: true },
      image: { src: "/images/retreats-byron.jpg", alt: "Lisa Galea leadership retreats Byron Bay Hinterland" },
      note: "Held at my private property in the Byron Bay Hinterland.",
    },
    {
      id: "coaching",
      tag: "Executive Coaching & Leadership Labs",
      heading: "The HCOS Upgrade Framework",
      body: "Not your average leadership development. We train the next-gen creative executives — people who think in systems and stories, not silos. Our HCOS Upgrade Framework blends emotional intelligence, nudging psychology, AI-enhanced clarity tools, and narrative strategy.",
      outcomes: ["Braver decisions", "Clearer influence", "Deep cultural leadership"],
      cta: { label: "Book a Clarity Call", href: "/contact" },
      image: { src: "/images/lisa-galea-cognitive.jpg", alt: "Lisa Galea executive coaching and leadership development" },
    },
    {
      id: "facilitation",
      tag: "Bespoke Facilitation, Keynotes & Interactive Workshops",
      heading: "Behavioural Design Meets Meaningful Mischief",
      body: "Available in-person or virtual. Crafted for multi-passionate business leaders navigating growth, reinvention, and next-era business. Because your strategy deserves more than spreadsheets — it needs story, behavioural insight, and space to breathe.",
      outcomes: ["Change is Good", "AI without Burnout", "Behavioural Design & Nudgetech"],
      cta: { label: "Book a Speaking Enquiry", href: "/contact" },
      image: { src: "/images/consulting.jpg", alt: "Lisa Galea keynote speaking and interactive workshops" },
    },
  ],

  testimonials: [
    {
      quote:
        "I'm so much more confident in my brand, pricing and selling. I've paid other coaches but none of them told me things Lisa did — my key takeaway was to speak to my audience and tell them what to do. Sounds simple but I never thought of it.",
      name: "Samantha Laidlaw",
      title: "Owner, Femflix",
    },
    {
      quote:
        "Lisa is a burst of creative inspiration and big-picture thinking. Her strategies are unique, actionable and results-driven. Lisa provides perspective and wise insight into what it takes to create a successful business and live abundantly.",
      name: "Daniela Rose",
      title: "Entrepreneur & Business Owner, Sydney",
    },
  ],

  faq: {
    label: "FAQ",
    heading: "Common Questions",
    items: [
      {
        q: "Is Lisa available internationally?",
        a: "Yes — virtual coaching, workshops, and keynotes are available globally. Strategic off-sites and retreats are held at Sanctuary in the Pocket, Byron Bay Hinterland, Australia (30 min from Gold Coast Airport, 25 min from Ballina Airport).",
      },
      {
        q: "What is the HCOS Upgrade Framework?",
        a: "HCOS stands for Human-Centred Operating System. It's an executive coaching framework that combines emotional intelligence, behavioural science, AI-enhanced clarity tools, and narrative strategy — designed to upgrade how you lead, not just what you know.",
      },
      {
        q: "How is a strategic off-site different from a regular away day?",
        a: "Away days are logistical. Strategic off-sites are transformational. Lisa blends neuro-design, nudge psychology, and playful strategy at a private rainforest property to unlock what's really holding your team back — and rewire for what's possible. Leaders leave with a 90-day action map.",
      },
      {
        q: "What speaking topics does Lisa cover?",
        a: "Lisa's signature topics include: 'Change is Good', 'AI Without Burnout', 'Behavioural Design & Nudgetech', and 'The Art and Science of Play'. All talks can be tailored for your audience — from small leadership teams to 200+ person conferences.",
      },
      {
        q: "How does Lisa's AI work relate to AiMegos?",
        a: "AiMegos (aimegos.com) is Lisa's AI transformation platform — focused on team upskilling, AI literacy, and human-centred AI integration for organisations. Lisa's personal consulting covers the strategic and behavioural leadership layer; AiMegos covers the AI systems and team implementation layer.",
      },
      {
        q: "How do I start a conversation?",
        a: "Book a 20-minute Clarity Call via the contact page, or chat directly with ZiggyZap (the ⚡ button on any page) — she can route you to exactly the right service based on what you need.",
      },
    ],
  },

  cta: {
    heading: "This Is Your Call to Play",
    body: "Let's reimagine what your leadership and your business could be when you stop trying to fit the mould and start upgrading the operating system.",
    tagline: "Exceptional Earthlings Start Here",
    primaryCta: { label: "Book a Clarity Call", href: "/contact" },
    secondaryCta: { label: "Explore Retreat Dates", href: "/contact" },
  },
};
