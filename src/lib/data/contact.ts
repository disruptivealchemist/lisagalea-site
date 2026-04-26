import type { ContactContent } from "@/lib/cms/types";

export const contactContent: ContactContent = {
  meta: {
    title: "Contact",
    description:
      "Curious? I hope so. Book a Clarity Call, enquire about speaking engagements, or reach out about the Byron Bay retreat. curious@lisagalea.com",
    canonical: "/contact",
  },

  hero: {
    kicker: "Start a Conversation",
    heading: "Curious?",
    subtitle: "I hope so.",
  },

  form: {
    heading: "Looking for clarity and change for you and your business?",
    description: "The best way to get started is to send a message below.",
  },

  channels: [
    {
      label: "General Enquiries",
      value: "curious@lisagalea.com",
      href: "mailto:curious@lisagalea.com",
      note: "For immediate assistance call 0411 124 240",
    },
    {
      label: "Media & Events",
      value: "media@lisagalea.com",
      href: "mailto:media@lisagalea.com",
      note: "Speaking engagements, workshops, press",
    },
    {
      label: "Retreat Venue",
      value: "events@inthepocketbyron.com",
      href: "mailto:events@inthepocketbyron.com",
      note: "Livin' the dream in the Byron Hinterland",
    },
  ],

  sidebarImages: {
    portrait: {
      src: "/images/lisa-galea-neurospicy-training.jpg",
      alt: "Lisa Galea, MBSc — Disruptive Alchemist",
      caption: "Lisa Galea, MBSc.",
      subcaption: "Disruptive Alchemist · aka Miss Messy",
    },
    book: {
      src: "/images/lisa-galea-curiosity-book.png",
      alt: "Curiosity Essential — Lisa Galea",
    },
  },

  retreatVenue: {
    label: "Byron Retreat Venue",
    heading: "Sanctuary in the Pocket",
    address: ["17 Skyline Road, The Pocket", "Byron Hinterland, NSW 2483", "Australia"],
    body: [
      "Live events are held at my retreat property in the pocket of Byron Hinterland — only **30 minutes from Gold Coast Airport** and 12 minutes from the golden sands of the Pacific Ocean.",
      "We're nestled on 5 acres of magical rainforest with the Nightcap mountains and Mt Warning as our backdrop. Come and play with me — I can't wait to show you around my magical backyard!",
    ],
    cta: { label: "Visit Retreat Site", href: "https://inthepocketbyron.com", external: true },
    image: {
      src: "/images/sanctuary-retreat.jpg",
      alt: "Sanctuary in the Pocket — Byron Bay Hinterland retreat venue",
    },
  },

  inclusion:
    "We celebrate diversity and inclusive safe environments. We welcome people from any religion and race and are proud LGBTQ+ allies.",
};
