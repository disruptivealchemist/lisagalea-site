export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  category: "coaching" | "facilitation" | "retreat" | "general";
  stars?: number;
};

export const testimonials: Testimonial[] = [
  // ── Coaching & Business Mentoring ──────────────────────────────────────────
  {
    quote:
      "Lisa is a burst of creative inspiration and big-picture thinking, yet her strategies are unique, actionable and results-driven. Lisa provides perspective and wise insight into what it takes to create a successful business and live abundantly. She has given me practical ways to expand my mindset and propel my projects into new heights. Lisa's contribution from small step implementation to execution and growth, will make the venture a success.",
    name: "Daniela Rose",
    title: "Entrepreneur & Business Owner, Sydney",
    category: "coaching",
    stars: 5,
  },
  {
    quote:
      "I'm so much more confident in my brand, pricing and selling. I've paid other coaches but none of them told me things Lisa did — my key takeaway was to speak to my audience and tell them what to do. Sounds simple but I never thought of it and no other 'expert' thought to mention it either.",
    name: "Samantha Laidlaw",
    title: "Owner, Femflix",
    category: "coaching",
    stars: 5,
  },
  {
    quote:
      "Lisa's in-depth knowledge of pricing and positioning is phenomenal. During our first session, I had a whole new positive outlook on my business price structure including some actionable methods that could be implemented immediately.",
    name: "Adam Carley",
    title: "Creative Consultant, Touchskye Designs",
    category: "coaching",
    stars: 5,
  },
  {
    quote:
      "For me, she was a navigator — helping me zoom out to see the big picture.",
    name: "Bo Green",
    title: "Entrepreneur, @_bo_green",
    category: "coaching",
    stars: 5,
  },
  {
    quote:
      "To this day I've not met anyone who has the ability to look at a business, understand that business, pull it apart from a design and branding perspective and come up with a concept for a brand that just works for that marketplace. I have no hesitation whatsoever in recommending Lisa. She is the absolute go-to.",
    name: "Marcus Jovanovich",
    title: "Owner, My Marketing Coach",
    category: "coaching",
    stars: 5,
  },
  {
    quote:
      "Your service has always been excellent, your support and advice on branding and marketing during our 15 year business relationship has been invaluable. For the level of professionalism and your creative talent, your service represents great value for money and I always feel positive with the end results.",
    name: "James Emery",
    title: "Owner, Emery Industries",
    category: "coaching",
    stars: 5,
  },
  // ── Keynotes, Workshops & Facilitation ────────────────────────────────────
  {
    quote:
      "Lisa Galea is not only our design expert in the Digital Masterchefs but my go-to human on branding, fonts, colour and general design psychology. She goes beyond the pixels into deep customer insights and emotional design, while keeping a firm grasp on the technical implications. She has run several excellent workshops for my memberships and is a confident, engaging and affable speaker.",
    name: "Kate Toon",
    title: "CEO, Stay Tooned",
    category: "facilitation",
    stars: 5,
  },
  {
    quote:
      "I can't recommend Lisa Galea's Science of Branding workshop highly enough. Lisa knows her stuff — from which fonts give the most impact to the psychology behind typography and presentation in print and digital — and she puts it all across in such an accessible and fascinating way. Just do this workshop. Your business can't afford for you not to.",
    name: "Gary Cooper",
    title: "Word Surgeon & Consultant, Occitanie, France",
    category: "facilitation",
    stars: 5,
  },
  {
    quote:
      "Lisa has helped me find my voice and get started on my personal brand journey. She inspired me to see my full potential but also gave me business and branding advice that lets me better myself as a successful entrepreneur. You help them hone in on their message, develop a strategy that gets their message out — and lets them see financial success.",
    name: "Jae Staten",
    title: "Designer, Happie Marketing",
    category: "facilitation",
    stars: 5,
  },
  {
    quote:
      "I've worked with designers and creative directors within some of the world's greatest advertising agencies and would rate Lisa in the top tier. Her creative solutions and design flair are world class. I have worked on numerous projects with Lisa over the years and she amazes me every time.",
    name: "David Meo",
    title: "Creative Director, Meo Consulting",
    category: "facilitation",
    stars: 5,
  },
  // ── General / Impact ───────────────────────────────────────────────────────
  {
    quote:
      "Having talented professionals such as Lisa Galea on hand to support and develop the vision and branding of the organisation has been integral to our success. Lisa surpassed our expectations — often dealing with 3 agencies to organise campaign materials. She is a tremendous advocate and has played a vital part in helping RizeUp shine a light for families to follow as they leave a life of violence behind.",
    name: "Nicole Edwards",
    title: "CEO & Founder, RizeUp Australia",
    category: "general",
    stars: 5,
  },
  {
    quote:
      "She gave me wonderful insights into how judges would view each submission. Lisa showed me the power of innovating and activating my creativity to reach the next level. Lisa is such a knowledgeable woman — I was intimidated when I first met her, but as soon as she asked me questions, I was able to gain clarity on my goals.",
    name: "Karlson Spencer Ty",
    title: "Architecture Graduate, Manila, Philippines",
    category: "general",
    stars: 5,
  },
  {
    quote:
      "Finding someone who is both a web developer and graphic designer has been fantastic. Lisa brought an ability to create a great looking, on-brand website, while staying focused on functionality and conversion. She took on board my design ideas but also made additional recommendations I would not have considered.",
    name: "Louise Duggan",
    title: "Owner, Cake 2 the Rescue",
    category: "general",
    stars: 5,
  },
  {
    quote:
      "Lisa and her team were fabulous at pulling together a new online look for our business. She set us up on a website we could edit ourselves and was always available to help us when we needed a little extra care.",
    name: "Jessica Turnbull",
    title: "Business Owner",
    category: "general",
    stars: 5,
  },
];

export function getTestimonialsByCategory(
  category: Testimonial["category"],
): Testimonial[] {
  return testimonials.filter((t) => t.category === category);
}
