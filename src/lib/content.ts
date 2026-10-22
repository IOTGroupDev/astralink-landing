export const origin = "https://www.astra-link.app";
export const sourceLink = (path: string) => `${origin}${path}`;

export const shortcuts = [
  {
    title: "Are we compatible?",
    icon: "💞",
    href: sourceLink("/compatibility-calculator/"),
  },
  {
    title: "Should I text them?",
    icon: "💬",
    href: sourceLink("/blog/love/best-time-to-text-them-astrology/"),
  },
  {
    title: "When should I sign?",
    icon: "✍️",
    href: sourceLink("/best-time-to/sign-a-contract/"),
  },
  { title: "My birth chart", icon: "🪐", href: sourceLink("/birth-chart/") },
  {
    title: "What's my archetype?",
    icon: "👑",
    href: sourceLink("/quizzes/archetype-quiz/"),
  },
  {
    title: "Is this my Saturn return?",
    icon: "⏳",
    href: sourceLink("/saturn-return/calculator/"),
  },
  {
    title: "Numbers for luck & love",
    icon: "🔢",
    href: sourceLink("/personal-codes/"),
  },
  {
    title: "The sky right now",
    icon: "🌙",
    href: sourceLink("/calendar/today/"),
  },
  { title: "En español", icon: "ES", href: sourceLink("/es/") },
] as const;

export const features = {
  chart: {
    id: "birth-chart",
    label: "Natal chart · free at invitation",
    title: "Your complete birth chart, read like a story, not a spreadsheet",
    description:
      "Date, time and place of birth become a full reading: who you are, how you love, what you are here to do, and where the pressure points sit.",
    points: [
      "Cosmic archetype — one named identity from Sun, Moon, rising and life path (e.g. The Precise Alchemist)",
      "Chart ruler, dispositor centre, chart sect — the hidden hierarchy of your chart, explained",
      "Strongest aspects, talents & gifts, karmic lesson, life themes — each with a plain-English 'why'",
      "Relationships, career, money approach, health themes — the sections people screenshot",
    ],
    action: "Claim my free chart",
    href: "#early-access",
    image: "natal-chart-hub",
    alt: "AstraLink natal chart hub: zodiac wheel with planets and five feature tiles",
  },
  dating: {
    id: "cosmic-dating",
    label: "Cosmic Dating · matched by chart",
    title: "Meet people whose charts fit yours — before you ever swipe",
    description:
      "Compatibility is calculated the way astrologers do it for couples: Venus to Mars, Moon to Moon, Saturn contacts, house overlays. You see the score and the reason behind it, then decide.",
    points: [
      "Real synastry, not Sun-sign matching",
      "Unlimited compatibility checks and 'who liked you' for members",
      "Inclusive by design: any two people, any orientation",
    ],
    action: "Join early access for matching",
    href: "#early-access",
    image: "home-focus-of-the-day",
    alt: "AstraLink home screen: focus of the day, help chips and moon calendar",
  },
  moon: {
    id: "cosmic-simulator",
    label: "Cosmic Simulator & Moon calendar",
    title: "See what the sky is doing to your chart today, not to everyone's",
    description:
      'Live transits ranked by strength ("Lilith square Mercury — 99%"), a day-energy score, lunar day, Void-of-Course windows and a key window that shows how long a period lasts.',
    points: [
      "Main transit of the day with an AI description",
      'Period navigation: focus, risk and the key window ("active until Jul 4 while Pluto sextiles your Uranus")',
      "Lucky numbers and colours, biorhythms with a 7-day forecast",
    ],
    action: "Open the Cosmic Simulator",
    href: sourceLink("/cosmic-simulator/"),
    image: "moon-calendar-energy",
    alt: "AstraLink moon calendar with lunar day, full moon illumination and day energy ring",
  },
  advisor: {
    id: "ai-advisor",
    label: "AI Advisor · timing decisions",
    title: 'Ask "is Thursday a good day to sign?" and get a real answer',
    description:
      "Pick a topic — Contract, Meeting, Negotiations, Date, Travel, Purchase, Health or Other — and a date. The Advisor checks that day's transits against your chart and tells you what the timing supports.",
    points: [
      "Built on electional astrology: Mercury retrograde, Void-of-Course Moon, Venus and Mars transits",
      "Today, tomorrow, in a week, or any date you choose",
      "Honest about limits: it flags risk windows, it does not make decisions for you",
    ],
    action: "See the AI Advisor",
    href: sourceLink("/ai-advisor/"),
    image: "advisor-ai-topic-date",
    alt: "AstraLink AI Advisor: choose a topic such as Contract, then a date",
  },
  archetype: {
    id: "archetype",
    label: "Cosmic archetype · shareable identity",
    title: "One archetype that finally explains why you do what you do",
    description:
      "Sun sign alone puts you in one of twelve boxes. Your archetype combines four placements into a portrait with strengths, shadow and what you need from a partner.",
    points: [
      "Computed from Sun + Moon + rising + life path, not a quiz alone",
      "Strengths and shadow side, with concrete examples",
      "Which archetypes you pair best with — and why",
    ],
    action: "Try the 2-minute archetype quiz",
    href: sourceLink("/quizzes/archetype-quiz/"),
    image: "archetype-precise-alchemist",
    alt: "AstraLink cosmic archetype card: The Precise Alchemist",
  },
  codes: {
    id: "personal-codes",
    label: "Personal Codes · numbers that are yours",
    title: "Number codes for luck, wealth and love, computed from your chart",
    description:
      "Choose a goal and the number of digits. AstraLink derives a code from your planetary positions, shows its strength and which planets power it, and tells you where to use it: a daily intention, a phone lock-screen note, a journal prompt.",
    points: [
      "Ten goals: luck, health, wealth, love, career, creativity, protection, intuition, harmony, energy",
      "Strength score and planetary breakdown (Jupiter, Sun, Venus, Mercury…)",
      "A personal alternative to generic Grabovoi lists and angel-number guesses",
    ],
    action: "Preview your code",
    href: sourceLink("/personal-codes/"),
    image: "personal-codes-goals",
    alt: "AstraLink Personal Codes: choose a goal such as luck, health, wealth or love",
  },
  academy: {
    id: "academy",
    label: "Academy · 55 lessons on your own chart",
    title: "Learn to read your chart in 95-second lessons about you",
    description:
      "Instead of generic astrology 101, the Academy teaches your placements: Sun in Virgo, Moon in Pisces, Scorpio rising. You will understand every line of your reading within a few weeks.",
    points: [
      "Daily lesson tied to the sky (e.g. Void-of-Course Moon)",
      "Structured course: basics, planets, aspects, houses, transits, practice",
      "Progress tracking, beginner → advanced",
    ],
    action: "Browse the curriculum",
    href: sourceLink("/academy/"),
    image: "learning-lesson-of-the-day",
    alt: "AstraLink Academy: lesson of the day and personalised lessons for your chart",
  },
} as const;
export type Feature = (typeof features)[keyof typeof features];

export const faqs = [
  {
    question: "What is AstraLink?",
    answer:
      "AstraLink is a mobile app that combines a full AI birth-chart reading, personalised horoscopes, an AI Advisor for timing decisions, Personal Codes, a moon calendar and chart-based dating. It is currently in early access ahead of a US launch.",
  },
  {
    question: "Is AstraLink free?",
    answer:
      "Joining early access is free, and early members receive their full birth chart and cosmic archetype at no cost when the app opens. Some advanced features (unlimited compatibility, Cosmic Dating, detailed transits, astrologer consultations) will be part of a Premium plan with founding-member pricing for the early-access list.",
  },
  {
    question: "When does the app launch?",
    answer:
      "We are onboarding the early-access list in waves before the public US launch. The sooner you join, the earlier you get in; you will receive one email when your invitation is ready.",
  },
  {
    question: "How does chart-based matching work?",
    answer:
      "Instead of swiping on photos, AstraLink compares two natal charts (synastry): Venus and Mars for attraction, Moon for emotional compatibility, Saturn and the lunar nodes for long-term fit, and house overlays for how you affect each other. You see a score and, more importantly, the reasons behind it.",
  },
  {
    question: "Do I need my exact birth time?",
    answer:
      "You can start with just your birth date, which gives your Sun sign and an approximate Moon sign. Your exact time and place unlock the rising sign, houses and the most personal parts of the reading; your birth certificate or a parent usually has it.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We collect only what the chart needs (birth date, optionally time and place) plus your email to send the invitation. Data is stored on encrypted infrastructure in the US, never sold, and you can ask us to delete it at any time. See the privacy policy.",
  },
  {
    question: "Does astrology actually work?",
    answer:
      "Astrology is not a science and we do not present it as one. It is a structured symbolic language that many people find useful for reflection, timing and understanding relationships. We publish our methodology, flag uncertainty, and never give medical, legal or financial advice.",
  },
  {
    question: "Is AstraLink for LGBTQ+ users?",
    answer:
      "Yes. Compatibility and dating work for any two people, you choose who you are looking for, and all content is written inclusively. Pew research shows LGBT adults are about twice as likely as the general public to consult astrology, and the app was designed with that community from the start.",
  },
  {
    question: "Is there a Spanish version?",
    answer:
      "Yes. Key pages and the app are available in US Spanish under /es/, and the early-access form works in both languages.",
  },
] as const;

export const tools = [
  {
    title: "Birth chart calculator",
    text: "Sun, Moon and rising sign in seconds, with a reading of your Big Three.",
    href: "/birth-chart/",
    icon: "☉",
  },
  {
    title: "Compatibility calculator",
    text: "Two birth dates in, a scored Sun/Moon match out, with the reasoning.",
    href: "/compatibility-calculator/",
    icon: "♡",
  },
  {
    title: "Saturn return calculator",
    text: "Your first, second and third Saturn return windows, and whether you are in one now.",
    href: "/saturn-return/calculator/",
    icon: "♄",
  },
  {
    title: "Archetype quiz",
    text: "Two minutes, no email: find out which cosmic archetype you lead with.",
    href: "/quizzes/archetype-quiz/",
    icon: "✧",
  },
  {
    title: "Personal year calculator",
    text: "Which numerology year you are in for 2026 and 2027, and what it asks of you.",
    href: "/numerology/personal-year/",
    icon: "⑨",
  },
  {
    title: "All 14 tools",
    text: "Biorhythms, lucky numbers, BaZi, Chinese zodiac compatibility, sign lookup and more.",
    href: "/tools/",
    icon: "✺",
  },
] as const;

export const comparison = [
  ["Full natal chart with AI reading", "✓", "Sun sign + short daily", "—"],
  [
    "Compatibility by full chart (synastry)",
    "✓",
    "Sun-sign match",
    "None, or a 'zodiac' filter",
  ],
  ["Matching people by chart", "✓", "—", "Photos + swipes"],
  ["AI Advisor for timing (contracts, dates, trips)", "✓", "—", "—"],
  [
    "Personal Codes, lucky numbers, biorhythms",
    "✓",
    "Sometimes lucky numbers",
    "—",
  ],
  ["Void-of-Course Moon & live transits", "✓", "Rarely", "—"],
  ["Lessons about your own chart", "✓", "—", "—"],
  ["Human astrologer consultations", "2 per year (Premium)", "—", "—"],
] as const;

export const skyEvents = [
  [
    "Oct 3 – Nov 13, 2026",
    "Venus retrograde in Scorpio",
    "Exes resurface, relationships get re-evaluated, money decisions feel urgent. Review, don't launch.",
    "♀",
  ],
  [
    "Oct 10, 2026",
    "New Moon in Libra",
    "A clean start for partnership intentions. The Advisor marks it as a 'begin' window for most charts.",
    "☾",
  ],
  [
    "Oct 24 – Nov 13, 2026",
    "Mercury retrograde (Scorpio)",
    "Contracts, devices, old conversations. The Contract topic in the Advisor flags every day of it.",
    "☿",
  ],
  [
    "Oct 26, 2026",
    "Full Moon in Taurus",
    "Release around money and comfort; fixed signs feel it most.",
    "☽",
  ],
  [
    "Nov 9, 2026",
    "New Moon in Scorpio",
    "Deep resets in intimacy and shared resources, with Venus still retrograde.",
    "☾",
  ],
  [
    "Feb 2027",
    "Eclipse season on the Leo–Aquarius axis",
    "Fast changes; check which house the eclipse hits in your chart.",
    "☉",
  ],
] as const;

export const learning = [
  [
    "Horoscopes",
    "Today, this week, this month, for every sign, plus love, career, money and health focus pages.",
    "/horoscopes/",
  ],
  [
    "Birth chart & learning",
    "Calculator, Big Three, rising sign, planets, houses, aspects, patterns and the Academy.",
    "/birth-chart/",
  ],
  [
    "Compatibility",
    "Every sign pairing, synastry explained, dating guides by sign, and the calculator.",
    "/compatibility/",
  ],
  [
    "Cosmic calendar",
    "Moon phases, Void-of-Course windows, retrogrades, eclipses and monthly transit briefs.",
    "/calendar/",
  ],
  [
    "Meanings",
    "Angel numbers, Grabovoi codes, dream symbols, omens and manifestation methods.",
    "/meaning/",
  ],
  [
    "Tarot & numerology",
    "Card meanings, yes/no spreads, life path and personal year calculators.",
    "/tarot/",
  ],
  [
    "Glossary",
    "Midheaven, Chiron, Lilith, yod, cazimi, dispositor: every term in plain English.",
    "/glossary/",
  ],
  [
    "News",
    "What changed in the sky this week and what it means for you.",
    "/news/",
  ],
] as const;
