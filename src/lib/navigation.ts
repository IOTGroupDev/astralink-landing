import { sourceLink } from "./content";

const link = (label: string, path: string, description: string) => ({
  label,
  href: sourceLink(path),
  description,
});

// Preserve every section and submenu destination from the original AstraLink header.
export const navigation = [
  {
    id: "horoscopes",
    label: "Horoscopes",
    href: sourceLink("/horoscopes/"),
    links: [
      link("Daily horoscopes", "/horoscopes/", "Today, this week, this month"),
      link(
        "Zodiac signs & dates",
        "/zodiac-dates/",
        "All 12 signs and their dates",
      ),
      link("Chinese zodiac", "/chinese-zodiac/", "Your animal sign & year"),
      link("Vedic astrology", "/vedic-astrology/", "Sidereal charts & dashas"),
      link("Cosmic calendar", "/calendar/", "Moons, retrogrades, transits"),
    ],
  },
  {
    id: "birth-chart",
    label: "Birth Chart",
    href: sourceLink("/birth-chart/"),
    links: [
      link(
        "Free birth chart",
        "/birth-chart/",
        "Sun, Moon & rising in seconds",
      ),
      link("The Big Three", "/big-three/", "Sun, Moon and rising sign"),
      link("Rising sign", "/glossary/ascendant/", "Your Ascendant, explained"),
      link(
        "Chart ruler",
        "/birth-chart/chart-ruler/",
        "The planet running your chart",
      ),
      link("Houses, planets & aspects", "/learn/", "How a chart is built"),
      link(
        "Celebrity charts",
        "/birth-chart/celebrities/",
        "Who shares your sign & birthday",
      ),
    ],
  },
  {
    id: "compatibility",
    label: "Compatibility",
    href: sourceLink("/compatibility/"),
    links: [
      link(
        "Compatibility calculator",
        "/compatibility-calculator/",
        "Score two charts free",
      ),
      link("All sign pairings", "/compatibility/", "Every match, explained"),
      link("Synastry", "/synastry/", "Two charts, overlaid"),
      link("Cosmic Dating", "/cosmic-dating/", "Meet people by chart"),
    ],
  },
  {
    id: "app",
    label: "The App",
    href: sourceLink("/app/"),
    links: [
      link("Everything inside", "/app/", "All the tools, one app"),
      link("AI Advisor", "/ai-advisor/", "Ask your chart what to do"),
      link("Personal Codes", "/personal-codes/", "Numbers from your chart"),
      link(
        "Cosmic Simulator",
        "/cosmic-simulator/",
        "Live transits, explained",
      ),
      link("Daily Focus", "/daily-focus/", "Your day on one screen"),
      link("Moon calendar", "/moon-calendar/", "Phases & void-of-course"),
    ],
  },
  {
    id: "tools",
    label: "Tools",
    href: sourceLink("/tools/"),
    links: [
      link("All 14 free tools", "/tools/", "No signup, in your browser"),
      link("Saturn return", "/saturn-return/calculator/", "When is yours?"),
      link(
        "Personal year",
        "/numerology/personal-year/",
        "Your numerology year",
      ),
      link("Biorhythms", "/biorhythm-calculator/", "Body, emotion, mind"),
      link("Archetype quiz", "/quizzes/archetype-quiz/", "2 minutes, no email"),
      link("Lucky numbers", "/games/lucky-numbers-today/", "For today"),
    ],
  },
  {
    id: "learn",
    label: "Learn",
    href: sourceLink("/learn/"),
    links: [
      link("Learning centre", "/learn/", "Planets, houses, aspects"),
      link("Astrology glossary", "/glossary/", "Every term in plain English"),
      link("Academy", "/academy/", "55 lessons for your chart"),
      link(
        "How to read your chart",
        "/blog/how-to/how-to-read-your-birth-chart/",
        "In 7 steps",
      ),
      link("Angel numbers & meanings", "/meaning/", "555, symbols, dreams"),
      link("Numerology & tarot", "/numerology/", "Life path, spreads"),
    ],
  },
  {
    id: "news",
    label: "News",
    href: sourceLink("/news/"),
    links: [
      link("Astrology news", "/news/", "What changed in the sky"),
      link("Blog & guides", "/blog/", "Love, timing, how-tos"),
    ],
  },
] as const;
