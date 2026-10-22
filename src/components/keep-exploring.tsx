import { Arrow } from "./icons";
import { sourceLink } from "@/lib/content";

const items = [
  { title: "Early access", href: "#early-access", text: "Join early access free: first test wave, your full AI birth chart and founding-member pricing.", path: "M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 11v10m0-4h4m-4-3h3" },
  { title: "Birth chart calculator", href: sourceLink("/birth-chart/"), text: "Enter your birth date, time and place to discover your Sun, Moon and rising sign.", path: "M12 3v3m0 12v3M3 12h3m12 0h3M5.5 5.5l2 2m9 9 2 2m0-13-2 2m-9 9-2 2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" },
  { title: "Compatibility calculator", href: sourceLink("/compatibility-calculator/"), text: "Compare two birth charts for a Sun, Moon and Venus match, with the reasons behind it.", path: "M20.5 4.9a5.3 5.3 0 0 0-7.5 0L12 6l-1-1.1a5.3 5.3 0 0 0-7.5 7.5L12 21l8.5-8.6a5.3 5.3 0 0 0 0-7.5Z" },
  { title: "AI Advisor", href: sourceLink("/ai-advisor/"), text: "Ask your chart a real question about a contract, date, trip or purchase, and choose when.", path: "M4 3h16v13H9l-5 5V3Zm4 5h8m-8 4h5" },
  { title: "Personal Codes", href: sourceLink("/personal-codes/"), text: "Manifestation numbers that are yours: turn your planetary positions into a personal number code.", path: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20" },
  { title: "Best astrology apps", href: sourceLink("/best-astrology-apps/"), text: "Compare the astrology apps of 2026: Co-Star, The Pattern, CHANI, Nebula and more.", path: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 3h4m-3 14h2" },
];

export function KeepExploring() {
  return (
    <section className="keep-exploring-section section-shell" aria-labelledby="keep-exploring-title">
      <h2 id="keep-exploring-title">Keep exploring</h2>
      <div className="keep-exploring-grid">
        {items.map(({ title, href, text, path }) => (
          <a className="explore-link-card" href={href} key={title}>
            <span className="explore-link-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg></span>
            <div><h3>{title}</h3><p>{text}</p></div>
            <Arrow diagonal className="explore-link-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
