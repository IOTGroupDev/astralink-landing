import { BrandLogo } from "./brand-logo";
import { Arrow } from "./icons";
import { sourceLink } from "@/lib/content";

// Navigation and destinations from the live AstraLink footer.
const groups = [
  {
    title: "Explore",
    links: [
      ["Horoscopes", "/horoscopes/"],
      ["Zodiac dates & birthdays", "/zodiac-dates/"],
      ["Compatibility", "/compatibility/"],
      ["Cosmic calendar", "/calendar/"],
      ["Retrograde planets", "/transits/retrograde/"],
      ["Angel numbers & meanings", "/meaning/"],
      ["Tarot", "/tarot/"],
      ["Numerology", "/numerology/"],
      ["Astrology glossary", "/glossary/"],
    ],
  },
  {
    title: "Free tools",
    links: [
      ["Birth chart calculator", "/birth-chart/"],
      ["Compatibility calculator", "/compatibility-calculator/"],
      ["Saturn return calculator", "/saturn-return/calculator/"],
      ["Personal Codes", "/personal-codes/"],
      ["Archetype quiz", "/quizzes/archetype-quiz/"],
      ["Biorhythm calculator", "/biorhythm-calculator/"],
      ["Personal year calculator", "/numerology/personal-year/"],
      ["All tools", "/tools/"],
    ],
  },
  {
    title: "AstraLink",
    links: [
      ["Join early access", "#early-access"],
      ["The app", "/app/"],
      ["AI Advisor", "/ai-advisor/"],
      ["Cosmic Simulator", "/cosmic-simulator/"],
      ["Academy", "/academy/"],
      ["News", "/news/"],
      ["Articles", "/blog/"],
      ["En español", "/es/"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Editorial policy", "/editorial-policy/"],
      ["Authors", "/authors/"],
      ["Contact", "/contact/"],
      ["Privacy", "/privacy/"],
      ["Terms", "/terms/"],
    ],
  },
];

const socials = [
  ["Instagram", "instagram", "https://www.instagram.com/astralinkapp/"],
  ["TikTok", "tiktok", "https://www.tiktok.com/@astralinkapp"],
  ["Pinterest", "pinterest", "https://www.pinterest.com/astralinkapp/"],
  ["Facebook", "facebook", "https://www.facebook.com/astralinkapp/"],
];

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-shell">
        <div className="footer-grid">
          {groups.map(({ title, links }) => (
            <nav className="footer-column" aria-label={title} key={title}>
              <h2 className="footer-label">{title}</h2>
              <ul>
                {links.map(([label, path]) => (
                  <li key={label}>
                    <a href={path.startsWith("#") ? path : sourceLink(path)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="footer-connect">
            <p className="footer-label">Join early access</p>
            <a className="footer-access" href="#early-access">
              Find your cosmic match <Arrow diagonal />
            </a>
            <p className="footer-description">
              AI astrology that reads your whole chart — and finds the people it fits.
            </p>
            <p className="footer-label" id="footer-social-title">Follow us</p>
            <div className="footer-socials" role="group" aria-labelledby="footer-social-title">
              {socials.map(([name, icon, href]) => (
                <a href={href} aria-label={`AstraLink on ${name}`} key={name}>
                  {/* Original vector artwork from Moonly, served locally. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/icons/social/${icon}.svg`} width="24" height="24" alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-signoff">
          <a className="wordmark" href="#home" aria-label="AstraLink home"><BrandLogo /></a>
          <p>© 2026 AstraLink. All rights reserved.</p>
          <a className="footer-back" href="#home">Back to top <Arrow diagonal /></a>
        </div>
        <p className="footer-disclaimer">
          Astrology is for reflection and entertainment, not a substitute for medical, legal or financial advice.
        </p>
      </div>
    </footer>
  );
}
