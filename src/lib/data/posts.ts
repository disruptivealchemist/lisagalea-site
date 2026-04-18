export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601
  category: string;
  image: string;
  imageAlt: string;
  body: string; // Plain text / simple HTML — replace with MDX in Phase 5
};

export const posts: Post[] = [
  {
    slug: "embodied-mind",
    title: "The Embodied Mind: Why Your Body Is Your Best Business Tool",
    excerpt:
      "We\u2019ve been trained to live from the neck up. But the most effective leaders I know lead from the whole body \u2014 gut, heart, and head in concert.",
    date: "2025-10-15",
    category: "Leadership",
    image: "/images/lisa-galea-casual.jpg",
    imageAlt: "Lisa Galea on embodied leadership and somatic intelligence",
    body: `<p>We\u2019ve been trained to live from the neck up. Desk jobs, screens, cognitive overload \u2014 modern work has become almost entirely a head sport. But the most effective leaders I know lead from the whole body \u2014 gut, heart, and head in concert.</p>

<p>Somatic intelligence isn\u2019t woo. It\u2019s neuroscience. Your enteric nervous system \u2014 the 100 million neurons lining your gut \u2014 processes information and signals danger long before your prefrontal cortex catches up. Ignoring it is like turning off half your sensors.</p>

<p>In my coaching work I see the same pattern over and over: the decision the client \u201cknew\u201d was wrong months before they made it. The partnership that \u201cfelt off\u201d from day one. The business model that looked brilliant on paper but never sat right in the body.</p>

<h2>Three practices to reconnect</h2>

<p><strong>1. The body scan before big decisions.</strong> Before any significant call, take 60 seconds. Feet on the floor. Three slow breaths. Notice where you feel tension, openness, or contraction. That\u2019s data.</p>

<p><strong>2. Movement as strategy.</strong> Some of my clients\u2019 best breakthroughs happen on a walk, not in a boardroom. Build movement into your creative process deliberately.</p>

<p><strong>3. Name the felt sense.</strong> \u201cI feel uneasy\u201d is different from \u201cthere\u2019s a tightness in my chest when I think about this.\u201d Precision matters. The more precisely you can name a somatic signal, the more useful it becomes.</p>

<p>The future belongs to whole-body leaders. Your nervous system is your competitive edge \u2014 start treating it that way.</p>`,
  },
  {
    slug: "rethinking-risk",
    title: "Rethinking Risk: Why Playing It Safe Is the Riskiest Move of All",
    excerpt:
      "The business graveyard is full of companies that played it safe \u2014 Kodak, Blockbuster, Borders. Caution isn\u2019t a strategy. Intelligent risk-taking is.",
    date: "2025-10-04",
    category: "Strategy",
    image: "/images/lisa-galea-ai-leadership.jpg",
    imageAlt: "Rethinking risk and bold leadership strategy",
    body: `<p>The business graveyard is full of companies that played it safe. Kodak had digital photography technology in-house in 1975 \u2014 50 years before smartphones made it ubiquitous. They buried it to protect film revenue. Blockbuster passed on buying Netflix for $50 million. Borders built a beautiful bricks-and-mortar empire just as e-commerce was beginning its takeover.</p>

<p>Caution isn\u2019t a strategy. Intelligent risk-taking is.</p>

<h2>The real risk equation</h2>

<p>Most leaders calculate risk as: <em>probability of failure \xd7 cost of failure</em>. But there\u2019s a second term that rarely makes it into the spreadsheet: <em>cost of inaction</em>. In fast-moving markets, standing still is itself a high-risk strategy.</p>

<p>The question isn\u2019t \u201cIs this risky?\u201d \u2014 everything is risky. The question is: <strong>which risks are worth taking, and which risks am I avoiding because of fear rather than data?</strong></p>

<h2>Behavioural design and risk perception</h2>

<p>Loss aversion \u2014 the tendency to weight potential losses twice as heavily as equivalent gains \u2014 is hardwired. It kept our ancestors alive on the savanna. In a VUCA business environment, it\u2019s a liability.</p>

<p>The nudge? Reframe the question. Instead of \u201cWhat do I risk by doing this?\u201d ask \u201cWhat do I guarantee by not doing this?\u201d</p>

<p>Intelligent risk-taking isn\u2019t recklessness. It\u2019s courage backed by curiosity, data, and a willingness to iterate fast when you\u2019re wrong.</p>`,
  },
  {
    slug: "sai-learning",
    title: "Self-Aware Intelligence: Teaching AI to Know What It Doesn\u2019t Know",
    excerpt:
      "The most dangerous AI isn\u2019t malevolent \u2014 it\u2019s confidently wrong. Here\u2019s what leaders need to understand about AI epistemic humility.",
    date: "2025-09-26",
    category: "AI & Technology",
    image: "/images/ai-section.jpg",
    imageAlt: "Self-aware intelligence and AI literacy for leaders",
    body: `<p>The most dangerous AI isn\u2019t the kind from science fiction \u2014 calculating, strategic, and malevolent. The AI that actually costs companies money is the kind that\u2019s confidently wrong.</p>

<p>Hallucination \u2014 the tendency of large language models to generate plausible-sounding but false information \u2014 is well-documented. What\u2019s less discussed is the organisational condition that allows AI hallucinations to cause real damage: <strong>leaders who don\u2019t know enough to question the output.</strong></p>

<h2>What self-aware AI looks like in practice</h2>

<p>The best AI systems \u2014 and the best AI workflows \u2014 include explicit uncertainty signals. \u201cI\u2019m not confident about this\u201d or \u201cyou should verify this independently\u201d aren\u2019t weaknesses. They\u2019re features.</p>

<p>When I work with leadership teams on AI integration, I teach a simple heuristic: <strong>treat AI output like advice from a brilliant but sometimes unreliable intern.</strong> Brilliant: can synthesise vast amounts of information fast. Sometimes unreliable: needs fact-checking on specifics, especially anything involving dates, citations, statistics, or local context.</p>

<h2>Building AI literacy at every level</h2>

<p>The leaders thriving in the age of AI aren\u2019t necessarily the most technical. They\u2019re the most epistemically humble \u2014 curious, questioning, and comfortable saying \u201cI don\u2019t know, let me verify.\u201d</p>

<p>That\u2019s a teachable skill. And it\u2019s one of the most valuable investments your organisation can make right now.</p>`,
  },
  {
    slug: "why-behaviour-is-changeable",
    title: "Why Behaviour Is Changeable: Exploring the Kurt Lewin Legacy",
    excerpt:
      "Kurt Lewin said behaviour is a function of person and environment. Eighty years on, that equation is still the most practical framework for organisational change.",
    date: "2025-08-19",
    category: "Behavioural Science",
    image: "/images/lisa-galea-cognitive.jpg",
    imageAlt: "Kurt Lewin force field analysis and behavioural change in organisations",
    body: `<p>Kurt Lewin had a deceptively simple idea: <strong>B = f(P, E)</strong>. Behaviour is a function of the person and their environment. That equation, published in 1936, is still the most practical framework for understanding why people do what they do \u2014 and how to help them do something different.</p>

<p>The reason most change programmes fail isn\u2019t that people are resistant. It\u2019s that leaders try to change the P (the person) while leaving the E (the environment) completely intact. Then they\u2019re surprised when nothing sticks.</p>

<h2>Force field analysis</h2>

<p>Lewin\u2019s force field analysis maps the driving forces pushing toward change against the restraining forces pushing against it. The insight that transforms how you approach change: <strong>reducing restraining forces is more effective than increasing driving forces.</strong></p>

<p>Adding more incentive, more training, more pressure? Those are driving forces. They work \u2014 until the pressure is removed, and behaviour snaps back.</p>

<p>But remove the friction? Redesign the environment so the desired behaviour is the path of least resistance? That\u2019s where change actually sticks.</p>

<h2>Practical applications</h2>

<p>This is why choice architecture matters. Why the layout of a cafeteria affects what people eat more than nutritional education does. Why a pre-commitment device \u2014 signing up for a retreat before you feel ready \u2014 works better than willpower alone.</p>

<p>The environment is always teaching. The question is: what is yours teaching?</p>`,
  },
  {
    slug: "the-mark-of-time",
    title: "The Mark of Time: An Interactive Journey Through Punctuation",
    excerpt:
      "Punctuation isn\u2019t grammar police. It\u2019s rhythm, breath, and meaning. A love letter to the marks that shape how we think.",
    date: "2025-07-12",
    category: "Creative",
    image: "/images/blog-section.jpg",
    imageAlt: "Typography and punctuation as creative expression",
    body: `<p>I\u2019ve always loved punctuation. Not in a grammar-police way \u2014 in a music way. Punctuation is rhythm. It\u2019s the breath between ideas. It tells you when to pause, when to stop, when to hold the moment before the turn.</p>

<p>The em dash \u2014 like that one \u2014 is my favourite. It creates an aside, a pivot, a sudden shift of register. It says: <em>hold on, there\u2019s something here you didn\u2019t expect.</em></p>

<h2>The semicolon is misunderstood</h2>

<p>The semicolon sits between a comma and a full stop; it connects ideas that are related but distinct. It\u2019s used in writing the way a thoughtful pause is used in conversation: to suggest connection without completion.</p>

<p>Kurt Vonnegut famously said \u201cDo not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you\u2019ve been to college.\u201d</p>

<p>With respect to Kurt: I disagree. The semicolon is a bridge. Used well, it creates exactly the right amount of space between two ideas that belong together but need room to breathe.</p>

<h2>Why this matters for business writing</h2>

<p>The way you punctuate reveals how you think. Short sentences. Full stops. Direct. That\u2019s a different voice from the one that builds, and layers, and complicates \u2014 before resolving.</p>

<p>Neither is better. Both are choices. The question is whether they\u2019re conscious ones.</p>`,
  },
  {
    slug: "chris-do-the-futur-design-critic",
    title: "Chris Do, The Futur & Why Design Criticism Is a Love Language",
    excerpt:
      "I spent a week inside The Futur\u2019s framework for design critique. Here\u2019s what I learned about the difference between feedback that breaks and feedback that builds.",
    date: "2025-05-20",
    category: "Design",
    image: "/images/consulting.jpg",
    imageAlt: "Design critique methodology and creative leadership",
    body: `<p>I\u2019ve been following Chris Do and The Futur for years. What I love most isn\u2019t the design advice \u2014 it\u2019s the pedagogy. The way critique is framed as a gift, not a verdict.</p>

<p>In most organisations, feedback is delivered as judgment. \u201cThis doesn\u2019t work.\u201d \u201cThis is off-brand.\u201d \u201cDo it again.\u201d The implicit message: you failed. Try harder.</p>

<p>Design critique done well is something entirely different.</p>

<h2>The Futur\u2019s approach</h2>

<p>The framework starts with questions before statements. <em>What were you trying to achieve here? Who is the audience? What feeling should this evoke?</em> Before any critique lands, context is established. The designer\u2019s intention is on the table.</p>

<p>Then critique becomes a dialogue about whether the work is achieving its stated intention \u2014 not whether the reviewer would have done it differently.</p>

<p>This shift \u2014 from \u201cI don\u2019t like it\u201d to \u201cDoes this achieve what you set out to do?\u201d \u2014 is transformative. It makes critique collaborative. It separates taste from function. And it produces better work, faster.</p>

<h2>What this has to do with leadership</h2>

<p>Everything. Feedback is one of the highest-leverage activities a leader can do. Most do it badly \u2014 not because they\u2019re unkind, but because they were never taught a framework.</p>

<p>The Futur\u2019s design critique methodology is one of the best leadership feedback frameworks I\u2019ve encountered. I\u2019ve adapted it for coaching work, team retrospectives, and strategic reviews. It works everywhere humans are making things together.</p>`,
  },
  {
    slug: "make-moments-matter",
    title: "Make Moments Matter: The Case for Micro-Experiences in Business",
    excerpt:
      "The moments that define a business relationship are rarely the big ones. It\u2019s the small moments, compounding over time, that create extraordinary loyalty.",
    date: "2025-03-14",
    category: "Strategy",
    image: "/images/retreats-offsites.jpg",
    imageAlt: "Make moments matter in business and leadership",
    body: `<p>Ask someone to describe a transformative customer experience and they\u2019ll almost never tell you about a product feature. They\u2019ll tell you about a moment. The time a customer service rep stayed on the line while they cried. The handwritten note that arrived with the order. The founder who remembered their name six months later.</p>

<p>Moments are the currency of loyalty.</p>

<h2>The peak-end rule</h2>

<p>Daniel Kahneman\u2019s research on the \u201cpeak-end rule\u201d shows that we judge an experience almost entirely by how it felt at its most intense moment and how it ended \u2014 not by the average of every moment throughout.</p>

<p>This has enormous implications for business design. You don\u2019t need to make every moment exceptional. You need to identify your peaks \u2014 the moments that matter most \u2014 and design those with extraordinary care.</p>

<h2>Finding your moments</h2>

<p>I run an exercise in workshops where teams map their customer journey and mark every touchpoint. Then I ask: which three of these, if they were exceptional, would people talk about? Which three, if they were terrible, would people leave over?</p>

<p>Those are your moments. Design them with intention. Prototype them. Test them. Invest disproportionately in them.</p>

<p>The rest can be good enough. The moments must be extraordinary.</p>`,
  },
  {
    slug: "goal-setting-chris-do",
    title: "How to Get What You Want: Goal Setting with The Futur\u2019s Framework",
    excerpt:
      "Chris Do\u2019s goal-setting methodology flips the standard approach. Start with who you want to become, not what you want to achieve.",
    date: "2024-12-10",
    category: "Leadership",
    image: "/images/lisa-galea-hero-joy.jpg",
    imageAlt: "Goal setting and vision frameworks for leaders",
    body: `<p>Most goal-setting frameworks are backwards. They start with what you want \u2014 the revenue number, the follower count, the title \u2014 and work backward to how you\u2019ll get there. The problem: they optimise for outcomes without considering whether those outcomes will actually make you happy.</p>

<p>The Futur\u2019s approach, which I\u2019ve adapted and built on in my coaching work, starts differently. It starts with: <strong>who do I want to become?</strong></p>

<h2>Identity before outcomes</h2>

<p>James Clear writes about identity-based habits in <em>Atomic Habits</em> \u2014 the idea that lasting change happens when you shift your self-concept, not just your behaviour. Chris Do\u2019s goal work operates on the same principle at a bigger scale.</p>

<p>The exercise: Imagine yourself five years from now. You\u2019re living a life that feels genuinely good. Describe that person. Not what they have \u2014 who they are. How do they spend their time? What do they prioritise? How do they treat people? What do they create?</p>

<p>Now: what would that person do today?</p>

<h2>Working the gap</h2>

<p>The gap between who you are now and who you want to become is your strategic landscape. The goals that matter are the ones that close that gap \u2014 not the ones that look impressive on LinkedIn.</p>

<p>This reframe changes everything. Suddenly the question isn\u2019t \u201chow do I achieve X\u201d but \u201cwhat does the person I\u2019m becoming do?\u201d</p>

<p>It\u2019s a subtle shift with profound consequences.</p>`,
  },
  {
    slug: "book-recommendations",
    title: "The Reading Stack: Books That Changed How I Think About Business",
    excerpt:
      "These aren\u2019t just business books. They\u2019re frameworks for seeing the world differently. My most-gifted, most-referenced, most dog-eared reads.",
    date: "2024-10-05",
    category: "Resources",
    image: "/images/blog-section.jpg",
    imageAlt: "Book recommendations for creative leaders and entrepreneurs",
    body: `<p>I get asked about books constantly. What am I reading, what shaped my thinking, what do I recommend for a team retreat. Here\u2019s my living list \u2014 the books I return to, give away, and quote from memory.</p>

<h2>Behavioural science</h2>

<p><strong>Thinking, Fast and Slow</strong> \u2014 Daniel Kahneman. Still the foundational text. Every leader should understand System 1 and System 2 thinking before making any significant decision.</p>

<p><strong>Nudge</strong> \u2014 Thaler & Sunstein. The original choice architecture text. Dated in some specifics, essential in principle.</p>

<p><strong>The Power of Habit</strong> \u2014 Charles Duhigg. The cue-routine-reward loop is one of the most useful frameworks I know for understanding and designing behaviour.</p>

<h2>Leadership & culture</h2>

<p><strong>Dare to Lead</strong> \u2014 Bren\xe9 Brown. I\u2019m a certified facilitator. I\u2019ve read it eight times. It still surprises me.</p>

<p><strong>An Elegant Puzzle</strong> \u2014 Will Larson. The best systems-thinking book about engineering leadership I\u2019ve encountered. Applicable far beyond tech.</p>

<h2>Creative business</h2>

<p><strong>Steal Like an Artist</strong> \u2014 Austin Kleon. Tiny book. Enormous mindset shift about originality and influence.</p>

<p><strong>The War of Art</strong> \u2014 Steven Pressfield. Required reading for anyone who creates anything and has to fight Resistance to do it.</p>`,
  },
  {
    slug: "clubhouse-2022",
    title: "What Clubhouse Taught Me About the Future of Voice and Community",
    excerpt:
      "Clubhouse burned bright and faded fast. But the lessons about audio, attention, and community building are more relevant than ever.",
    date: "2024-08-22",
    category: "Digital & Social",
    image: "/images/blog-section.jpg",
    imageAlt: "Clubhouse audio social media and the future of community",
    body: `<p>Remember Clubhouse? The audio-only social platform that exploded in early 2021, became the hottest app in the world, and then\u2026 quietly faded? I spent a significant amount of time on it at its peak, and I\u2019m glad I did. Not because Clubhouse itself turned out to be the future \u2014 but because the experiment taught me things that are still shaping how I think about community, attention, and voice.</p>

<h2>The magic of audio</h2>

<p>Something happens in audio-only environments that doesn\u2019t happen in text or video. You can\u2019t hide behind a polished image or a carefully edited post. You have to think in real time. Hesitation, uncertainty, excitement, boredom \u2014 all of it comes through in your voice. And listeners feel it.</p>

<p>The best conversations I had on Clubhouse were more honest than almost anything I\u2019d experienced on any other platform. People talked about failure, uncertainty, and fear in ways they wouldn\u2019t have on LinkedIn or Instagram.</p>

<h2>What killed it</h2>

<p>Clubhouse\u2019s decline was multifactorial: Twitter Spaces launched with a built-in audience, the pandemic lockdowns that drove its initial growth ended, and the FOMO that made exclusivity a feature became a bug when everyone had an invite.</p>

<p>But the deeper issue was discoverability. Finding quality rooms was hard. Finding your community was harder. And once you found it, there was no persistent record to share.</p>

<h2>The lessons</h2>

<p>Voice is intimate. Community needs scaffolding. Exclusivity is a double-edged sword. And the best platforms find ways to make what\u2019s ephemeral feel worth showing up for.</p>

<p>Podcasting learnt these lessons the hard way over a decade. The next generation of audio platforms will need to learn them faster.</p>`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
