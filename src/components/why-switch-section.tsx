"use client";

import { useState } from "react";
import { sourceLink } from "@/lib/content";

const leads = [
  "It reads the whole chart",
  "It answers questions",
  "Dating is by chart, not by swipe",
  "Numbers you can use",
  "Inclusive by design",
];

export function WhySwitchSection({ reasons }: { reasons: string[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="switch-section section-shell" aria-labelledby="why-title">
      <h2 id="why-title">Why people switch to AstraLink</h2>
      <div className={`switch-preview ${expanded ? "is-expanded" : ""}`} id="switch-breakdown">
        <ul className="switch-reasons">
          {(expanded ? reasons : reasons.slice(0, 3)).map((reason, index) => (
            <li key={reason} aria-hidden={!expanded && index === 2 ? true : undefined}>
              <strong>{leads[index]}</strong>{reason.slice(leads[index].length)}
            </li>
          ))}
        </ul>
        {expanded && (
          <p className="switch-context">About 27% of US adults believe in astrology (43% of women 18–49, per Pew Research). We treat it as a precise language for patterns — powered by real calculation and a model that explains itself, never medical, legal or financial advice. See our <a href={sourceLink("/editorial-policy/")}>editorial policy</a> for how we calculate and use AI.</p>
        )}
      </div>
      <button className="switch-toggle" type="button" aria-expanded={expanded} aria-controls="switch-breakdown" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read the full breakdown"}
        <svg className={expanded ? "is-expanded" : ""} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </section>
  );
}
