/**
 * ZiggyZap Behavioural Science Quiz — Question Bank
 * 15 questions covering the science behind why humans do what they do.
 *
 * Topics: pricing psychology, loss aversion, social proof, anchoring,
 * cognitive bias, visual nudges, framing, decision fatigue, storytelling,
 * the Goldilocks effect, priming, reciprocity, the decoy effect.
 *
 * ZiggyZap manages quiz state conversationally — no separate UI state needed.
 */

export type QuizQuestionType = "true-false" | "multiple-choice";

export interface QuizQuestion {
  id: number;
  topic: string;
  type: QuizQuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
  correctResponse: string;
  incorrectResponse: string;
  funFact: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topic: "Pricing Psychology — The Goldilocks Effect",
    type: "multiple-choice",
    text: "A restaurant wine list has three options: $18, $28, and $65. Most customers pick the $28 bottle. Why?",
    options: [
      "A) It's the best quality-to-value ratio",
      "B) Extremeness Aversion — we instinctively avoid the cheapest AND the most expensive",
      "C) $28 is statistically the most popular wine price globally",
      "D) Customers assume the middle option was chosen by the sommelier",
    ],
    correctAnswer: "B) Extremeness Aversion — we instinctively avoid the cheapest AND the most expensive",
    correctResponse: "Correct! This is Extremeness Aversion — also called the Goldilocks Effect. Choosing the cheapest signals frugality; the most expensive signals showing off. The middle is the social 'just right.' Restaurants design wine lists specifically around this phenomenon.",
    incorrectResponse: "Not quite — it's called Extremeness Aversion. We don't choose based on quality signals so much as social positioning. The cheapest looks cheap; the most expensive looks flashy. The middle is the safe, socially acceptable choice. Wine lists are designed as psychological scaffolding.",
    funFact: "Dan Ariely's research showed that simply adding a third, expensive option increases sales of the mid-tier option by up to 40% — even if nobody buys the expensive one.",
  },
  {
    id: 2,
    topic: "Loss Aversion",
    type: "true-false",
    text: "True or False: People are more motivated by the prospect of gaining $100 than by the prospect of losing $100.",
    options: ["True", "False"],
    correctAnswer: "False",
    correctResponse: "False — and this one surprises a lot of people. We feel losses roughly twice as intensely as equivalent gains. Losing $100 hurts about twice as much as finding $100 feels good. This is Loss Aversion, one of Kahneman and Tversky's most replicated findings.",
    incorrectResponse: "Actually False — losses hurt about twice as much as equivalent gains feel good. This is Loss Aversion. It's why 'Don't miss out' outperforms 'You could gain' in almost every marketing test ever run.",
    funFact: "Loss aversion explains why subscription services use free trials — once you have access, losing it feels worse than never having it. The pain of cancellation does the selling.",
  },
  {
    id: 3,
    topic: "Social Proof",
    type: "multiple-choice",
    text: "A hotel places two signs in its bathrooms. Sign A says: 'Please reuse your towels to help the environment.' Sign B says: '75% of guests in this room reuse their towels.' Which gets more towel reuse?",
    options: [
      "A) Sign A — the environmental message is more compelling",
      "B) Sign B — the social norm is more powerful than the principle",
      "C) They perform the same",
      "D) Neither works — people ignore hotel signs",
    ],
    correctAnswer: "B) Sign B — the social norm is more powerful than the principle",
    correctResponse: "Sign B wins — consistently. We are deeply wired to look at what 'people like us' do and mirror it. The specificity matters too: '75% of guests in *this room*' outperforms '75% of all guests.' The closer the social group, the stronger the pull.",
    incorrectResponse: "It's Sign B. Turns out we respond far more to 'what others like us are doing' than to abstract principles. Robert Cialdini's team ran this exact experiment — the hyper-specific local norm (this room) outperformed the general environmental appeal every time.",
    funFact: "Cialdini calls this 'Descriptive Norms' — what people *do* — versus 'Injunctive Norms' — what people *should* do. Descriptive norms almost always win.",
  },
  {
    id: 4,
    topic: "Anchoring",
    type: "true-false",
    text: "True or False: If a negotiation opens with an extreme, unrealistic number, it still pulls the final agreement toward that anchor — even when both parties know it's unrealistic.",
    options: ["True", "False"],
    correctAnswer: "True",
    correctResponse: "True — and this is maddening once you see it. The Anchoring Effect means first numbers shape subsequent judgements even when they're arbitrary. Judges in one study gave longer sentences after rolling high numbers on a rigged dice. The anchor doesn't need to be reasonable. It just needs to be first.",
    incorrectResponse: "Actually True — and it's uncomfortable. Even when people *know* an anchor is arbitrary, it still influences their estimates. Tversky and Kahneman demonstrated this with a spinning wheel: high numbers on the wheel led people to estimate higher numbers for completely unrelated questions.",
    funFact: "Retail pricing uses anchors constantly: the 'was $299, now $149' structure works even when the $299 price never actually existed. The anchor does the work.",
  },
  {
    id: 5,
    topic: "Framing Effects",
    type: "multiple-choice",
    text: "A surgeon tells a patient: 'This procedure has a 90% survival rate.' Another surgeon says: 'This procedure has a 10% mortality rate.' Logically identical. Emotionally:",
    options: [
      "A) Identical — rational people process them the same way",
      "B) The 90% survival frame feels significantly more reassuring",
      "C) The 10% mortality frame feels more honest and is trusted more",
      "D) It depends on the patient's risk tolerance",
    ],
    correctAnswer: "B) The 90% survival frame feels significantly more reassuring",
    correctResponse: "The survival frame wins — by a wide margin. Same information, radically different emotional response. This is the Framing Effect. How you say something changes what people hear. Amos Tversky and Daniel Kahneman showed patients and doctors both fall for this — medical training doesn't switch off System 1 thinking.",
    incorrectResponse: "It's B — the survival frame is felt as far more reassuring, even though the information is logically identical. We don't process percentages; we process narratives. '90% survival' tells a story of living. '10% mortality' tells a story of dying. Same fact. Different story.",
    funFact: "Politicians, media, and marketers use framing constantly — 'tax relief' vs 'tax cuts', 'pro-life' vs 'anti-abortion', 'slim' vs 'not fat'. The frame carries the emotional freight.",
  },
  {
    id: 6,
    topic: "The Decoy Effect",
    type: "multiple-choice",
    text: "A cinema sells popcorn: Small $3, Large $7. Then adds a Medium for $6.50. Sales of Large popcorn:",
    options: [
      "A) Drop — people now choose Medium instead",
      "B) Stay the same — it's an irrelevant third option",
      "C) Increase — the Medium makes Large look like great value",
      "D) All three options sell equally after the change",
    ],
    correctAnswer: "C) Increase — the Medium makes Large look like great value",
    correctResponse: "The Large wins. The Medium is a 'decoy' — it exists not to be chosen, but to make the Large look like exceptional value by comparison. For just $0.50 more than Medium, you get a lot more popcorn. The Decoy Effect is one of the most powerful pricing tools in existence.",
    incorrectResponse: "Counterintuitively, Large sales go up. The Medium is a strategic decoy — it's priced to make Large look like the obvious smart choice. Nobody adds a menu option hoping it sells; they add it to manipulate the comparison.",
    funFact: "Dan Ariely's famous Economist subscription experiment showed decoys can flip majority preference from a cheap option to an expensive one, purely through comparison architecture.",
  },
  {
    id: 7,
    topic: "Cognitive Bias — The IKEA Effect",
    type: "true-false",
    text: "True or False: People value something more highly when they've built or assembled it themselves — even if the result is objectively lower quality than a professionally made equivalent.",
    options: ["True", "False"],
    correctAnswer: "True",
    correctResponse: "True — this is the IKEA Effect, named by Michael Norton, Daniel Mochon, and Dan Ariely. Labour creates love. When we invest effort in something, we overestimate its value. It's why cooking your own meal tastes better than it might deserve to, and why workshop participants value their insights above expert advice.",
    incorrectResponse: "True! The IKEA Effect is real and robust. Effort creates attachment and inflated valuation. Norton et al. found that people valued their own origami creations as highly as expert origami — even when they admitted the expert version was objectively better.",
    funFact: "This is why great facilitators don't just give answers — they create conditions for participants to discover insights themselves. Self-generated conclusions stick harder and feel more valuable.",
  },
  {
    id: 8,
    topic: "Decision Fatigue",
    type: "multiple-choice",
    text: "A study of Israeli parole board judges found their decisions changed most based on:",
    options: [
      "A) The severity of the original crime",
      "B) The prisoner's behaviour record",
      "C) The time of day — specifically, whether it was before or after a food break",
      "D) The judge's years of experience",
    ],
    correctAnswer: "C) The time of day — specifically, whether it was before or after a food break",
    correctResponse: "Time of day — and specifically, meal breaks. Early morning: 65% chance of parole. Just before lunch: near 0%. After the break: back to 65%. The judges weren't being cruel — they were depleted. Decision Fatigue means depleted brains default to the safest (often no-change) option. Freedom is the risky choice. Denial is the default.",
    incorrectResponse: "It was time of day — specifically whether the judge had eaten recently. Shai Danziger's study found parole rates dropped from ~65% to near zero by lunchtime, then recovered after food. Decision quality deteriorates with fatigue. Even life-altering decisions.",
    funFact: "This is why important negotiations should be scheduled in the morning, why 'sleep on it' is good advice, and why Barack Obama wore the same suit daily — to eliminate trivial decision fatigue.",
  },
  {
    id: 9,
    topic: "Priming",
    type: "true-false",
    text: "True or False: Briefly exposing people to words associated with old age (like 'bingo,' 'Florida,' 'wrinkled') causes them to physically walk more slowly when leaving the room.",
    options: ["True", "False"],
    correctAnswer: "True",
    correctResponse: "True — this is Bargh, Chen, and Burrows' classic priming experiment. Unconscious exposure to concepts activates related behaviours without awareness. The participants who unscrambled 'elderly' word sets walked measurably slower down the corridor. The brain doesn't always distinguish between thinking about something and experiencing it.",
    incorrectResponse: "True — and this one is genuinely astonishing. Bargh et al.'s study showed that unscrambling sentences containing age-related words led to measurably slower walking. Priming operates below conscious awareness — the brain activates associated patterns automatically.",
    funFact: "Ambient priming is why luxury brands use specific music, scent, and visual cues — not to be nice, but to prime purchasing behaviour at a subconscious level.",
  },
  {
    id: 10,
    topic: "Reciprocity",
    type: "multiple-choice",
    text: "A study of restaurant tipping found that leaving a single mint with the bill increased tips. Leaving two mints increased them more. But the biggest tip increase came from:",
    options: [
      "A) Leaving three mints",
      "B) Leaving a handwritten thank-you note",
      "C) The waiter leaving one mint, then returning to add a second mint while saying it was specifically for the customer",
      "D) Leaving a small flower with the bill",
    ],
    correctAnswer: "C) The waiter leaving one mint, then returning to add a second mint while saying it was specifically for the customer",
    correctResponse: "The personalised second mint. Tips increased by 23% in that condition. The magic is in the personalisation and unexpectedness — the waiter seemed to have chosen this specifically *for you*, after already giving. Reciprocity is turbo-charged by the feeling that something was tailored and went above expectation.",
    incorrectResponse: "The personalised second mint — a 23% tip increase. Not because of the mint's value, but because of the gesture. 'I came back because this one was for you specifically.' Reciprocity is supercharged by personalisation and perceived effort. Cialdini calls this a key trigger of the reciprocity principle.",
    funFact: "The Reciprocity Principle is one of Cialdini's six Principles of Influence — we are wired to repay in kind. Free samples, unexpected gifts, and personalised gestures all trigger it, often disproportionately to their material value.",
  },
  {
    id: 11,
    topic: "Visual Nudges — Colour Psychology",
    type: "true-false",
    text: "True or False: The colour of a room can measurably affect how much physical weight people can lift.",
    options: ["True", "False"],
    correctAnswer: "True",
    correctResponse: "True. Studies found people can lift heavier weights in blue rooms than in red rooms — and perceive the same weights as lighter in blue environments. Colour isn't decoration; it's a neurological input that affects arousal, perceived effort, and physical capability.",
    incorrectResponse: "True — and this is one of those findings that makes you look at every room differently. Blue environments reduce perceived exertion; red environments increase arousal and perceived difficulty. Colour is not aesthetic — it's environmental design.",
    funFact: "Red increases heart rate and creates urgency (why sale signs and fast-food logos love it). Blue promotes calm, trust, and focus. Neither is inherently better — it depends entirely on the behaviour you want to encourage.",
  },
  {
    id: 12,
    topic: "The Pratfall Effect",
    type: "multiple-choice",
    text: "A highly competent person accidentally spills coffee on themselves during a presentation. Research shows the audience's assessment of them will:",
    options: [
      "A) Drop — competence and clumsiness are incompatible signals",
      "B) Stay the same — a minor accident doesn't change competence perception",
      "C) Increase — the human vulnerability makes them more likeable and trustworthy",
      "D) Depend on gender — it helps men but hurts women",
    ],
    correctAnswer: "C) Increase — the human vulnerability makes them more likeable and trustworthy",
    correctResponse: "Their likeability increases — but only because they were already established as highly competent. This is the Pratfall Effect (Elliot Aronson, 1966). A small, human blunder humanises expertise. It signals: 'I'm not performing perfection; I'm just good at what I do.' Authenticity as a competitive advantage.",
    incorrectResponse: "For genuinely competent people, a small blunder actually increases likeability — this is the Pratfall Effect. The same blunder makes an incompetent person seem worse. The effect only works when existing competence is established. Vulnerability from a position of strength reads as authenticity.",
    funFact: "This is why brands occasionally share 'honest' failures or behind-the-scenes mess — and why politicians sometimes benefit from admitting mistakes. Perfectionism signals either dishonesty or fragility. Occasional humanness signals confidence.",
  },
  {
    id: 13,
    topic: "Storytelling — The Narrative Transportation Effect",
    type: "true-false",
    text: "True or False: People who are deeply absorbed in a fictional story are more likely to change their real-world beliefs and attitudes than those who read the same information in a factual format.",
    options: ["True", "False"],
    correctAnswer: "True",
    correctResponse: "True — this is Narrative Transportation (Green & Brock, 2000). When we're absorbed in a story, our critical defences lower and the narrative shapes beliefs directly. It's why propaganda works through fiction, why case studies outperform statistics in fundraising, and why Lisa structures workshops around story rather than slide decks.",
    incorrectResponse: "True — and this has enormous implications for communication design. Facts presented as data trigger critical evaluation. Facts embedded in story bypass it. The brain processes narrative differently — as lived experience, not information to be judged.",
    funFact: "When Paul Zak studied oxytocin and storytelling, he found compelling narratives caused subjects to donate more money and make more pro-social decisions than equivalent factual information. Stories are literally a neurochemical delivery mechanism.",
  },
  {
    id: 14,
    topic: "Default Bias",
    type: "multiple-choice",
    text: "Organ donation rates in countries with opt-in systems (you choose to donate) vs. opt-out systems (you're automatically a donor unless you opt out) differ by approximately:",
    options: [
      "A) 5–10% — a small nudge effect",
      "B) 15–25% — meaningful but not dramatic",
      "C) Up to 40 percentage points — opt-out countries reach 85–90%+ donation rates vs. opt-in at 15–40%",
      "D) There's no significant difference — motivated people register either way",
    ],
    correctAnswer: "C) Up to 40 percentage points — opt-out countries reach 85–90%+ donation rates vs. opt-in at 15–40%",
    correctResponse: "Up to 40 percentage points. This is Default Bias — we tend to go along with whatever the pre-set option is, even on life-or-death decisions. Eric Johnson and Daniel Goldstein's research on European countries showed donation rates of 85–99% in opt-out countries vs 15–28% in comparable opt-in countries. Same population, same values, radically different behaviour.",
    incorrectResponse: "The gap is massive — up to 40 percentage points. Opt-out countries like Austria and France reach 85–99% donation rates. Opt-in countries like Germany and Denmark hover around 12–28%. Same culture, different default. This is the most powerful demonstration of Default Bias in the real world.",
    funFact: "Richard Thaler and Cass Sunstein wrote the book on this — literally: 'Nudge.' The default is the most powerful design decision in any system. Make the easy path the good path.",
  },
  {
    id: 15,
    topic: "Cognitive Dissonance — Belief Perseverance",
    type: "true-false",
    text: "True or False: Presenting someone with clear factual evidence that contradicts a strongly held belief will reliably cause them to update that belief.",
    options: ["True", "False"],
    correctAnswer: "False",
    correctResponse: "False — and this is one of the most important things to understand about human communication. Festinger's Cognitive Dissonance research (and decades since) shows that contradictory evidence often *strengthens* existing beliefs — known as the Backfire Effect. We rationalise to preserve identity. Changing minds requires emotional safety, not just better data.",
    incorrectResponse: "False — and this is crucial. The Backfire Effect shows that contradictory evidence often increases resistance to changing belief, especially when identity is tied to the belief. Facts don't win arguments. Psychological safety, story, and making the new belief feel like *their* idea — those win arguments.",
    funFact: "This is why Lisa designs workshops around self-discovery rather than information delivery. If people reach the insight themselves, it becomes part of their identity. If you hand it to them as correction, their defences activate.",
  },
];

// ── Score tier responses ───────────────────────────────────────────────────────

export interface ScoreTier {
  min: number;
  max: number;
  response: string;
}

export const SCORE_TIERS: ScoreTier[] = [
  {
    min: 0,
    max: 4,
    response: "You zapped [SCORE] out of 15. Honestly? No worries — these behavioural quirks are genuinely trickier than untangling a Discman after a jog. The beautiful thing is: you've just been exposed to the patterns most people never notice. You're already ahead of where you started. That's how Lisa's work tends to begin.",
  },
  {
    min: 5,
    max: 9,
    response: "Solid — [SCORE] out of 15. You're on the wavelength. Starting to see the glitches in the 'logical human' matrix. There are still some bonus levels to unlock — and that's the fun part. You clearly have the curiosity to go deeper.",
  },
  {
    min: 10,
    max: 12,
    response: "Sharp — [SCORE] out of 15. You've got serious intuition here. Like you've watched a few episodes of The X-Files and know there's more going on beneath the surface. You're the kind of thinker who notices patterns before they're pointed out. Lisa's world was made for people like you.",
  },
  {
    min: 13,
    max: 15,
    response: "YES. [SCORE] out of 15 — you basically found the Konami Code for behavioural science. 🎮 That's not luck; that's a brain wired for pattern recognition and genuine curiosity. You're in exactly the right place. The question is — what do you do with it?",
  },
];

export function getScoreResponse(score: number, total: number = 15): string {
  const tier = SCORE_TIERS.find((t) => score >= t.min && score <= t.max);
  const response = tier?.response ?? SCORE_TIERS[0].response;
  return response.replace("[SCORE]", `${score}`).replace("[TOTAL]", `${total}`);
}

export function getQuizIntro(): string {
  return "Right then. ZiggyZap's Behavioural Science Pop Quiz — 15 questions. No pressure, unless you count the pressure of not knowing why humans do the weird things they do. Ready? Here's Question 1:";
}

export function formatQuestion(q: QuizQuestion): string {
  const optionLines = q.options ? "\n" + q.options.join("\n") : "\nTrue or False?";
  return `**Question ${q.id}/15 — ${q.topic}**\n\n${q.text}${optionLines}`;
}
