import { Arrow } from "./icons";
import { PopularGlyph } from "./popular-glyph";
import { sourceLink } from "@/lib/content";

const articles = [
  { title: "555 angel number", href: "/angel-numbers/555/", icon: 4, text: "Change, transition and new possibilities: what 555 means in love and everyday life." },
  { title: "Astrocartography", href: "/astrocartography/", icon: 1, text: "Explore your planetary lines and how different places connect with your birth chart." },
  { title: "Grabovoi codes", href: "/grabovoi-codes/", icon: 10, text: "A guide to number sequences for money, love and health, and the ideas behind them." },
  { title: "Saturn return", href: "/saturn-return/", icon: 8, text: "Your Saturn return at 27–30, 57–60 and 86–88: timing, themes and what to expect." },
  { title: "Void of course Moon", href: "/void-of-course-moon/", icon: 9, text: "What a Void-of-Course Moon is, how often it happens and how astrologers interpret it." },
  { title: "Leo & Scorpio", href: "/compatibility/leo-scorpio/", icon: 2, text: "Attraction, friction and growth: explore the connection between these two fixed signs." },
  { title: "Mercury retrograde", href: "/transits/mercury-retrograde/", icon: 3, text: "Dates for 2026 and 2027, shadow periods and what apparent backward motion means." },
  { title: "Virgo", href: "/horoscopes/virgo/", icon: 0, text: "Virgo dates, personality, love and career: get to know the detail-minded Earth sign." },
  { title: "Tarot", href: "/tarot/", icon: 5, text: "Explore the meanings of all 78 cards, from the Major Arcana to the four suits." },
  { title: "Numerology", href: "/numerology/", icon: 10, text: "Calculate your life path and explore the meanings of 1–9, 11, 22 and 33." },
  { title: "Chinese zodiac", href: "/chinese-zodiac/", icon: 0, text: "Find your animal sign, birth-year element and place in the twelve-year zodiac cycle." },
  { title: "Astrology glossary", href: "/glossary/", icon: 6, text: "Midheaven, Chiron, Lilith, yod and more: astrological terms explained in plain English." },
];

export function PopularSection() {
  return (
    <section className="popular-resources-section section-shell" aria-labelledby="popular-title">
      <div className="section-heading">
        <p className="eyebrow">Trending topics</p>
        <h2 id="popular-title">Popular right now</h2>
      </div>
      <div className="learn-resource-grid">
        {articles.map(({ title, href, text }, index) => (
          <a className="learn-resource-card" href={sourceLink(href)} key={title}>
            <div className="learn-resource-top">
              <PopularGlyph kind={index} />
              <Arrow diagonal className="learn-resource-arrow" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
