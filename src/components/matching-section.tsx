import { OptimizedImage as Image } from "./optimized-image";
import { Arrow } from "./icons";
import { sourceLink } from "@/lib/content";

const links = [
  { color: "#ff927e", path: "M 160 158 C 310 155 412 292 567 292", a: [160, 158], b: [567, 292] },
  { color: "#e8ddff", path: "M 128 232 C 280 232 436 232 592 232", a: [128, 232], b: [592, 232] },
  { color: "#ffd471", path: "M 218 132 C 336 132 388 177 540 166", a: [218, 132], b: [540, 166] },
  { color: "#c5b78d", path: "M 172 302 C 304 300 423 150 585 140", a: [172, 302], b: [585, 140] },
  { color: "#c486ff", path: "M 255 232 C 334 231 384 268 480 270", a: [255, 232], b: [480, 270] },
];

function SynastryDiagram() {
  return (
    <figure className="synastry-illustration">
      <div className="synastry-chart-labels"><span>You</span><span>Them</span></div>
      <Image src="/images/synastry-orbital-charts.webp" alt="Two orbital birth charts with sculpted suns, moons and planets connected by five glowing aspect lines" width={1536} height={1024} sizes="(max-width: 900px) 90vw, 650px" quality={80} />
      <figcaption>Each connection is scored, then explained</figcaption>
    </figure>
  );
}

export function MatchingSection({ connections }: { connections: string[][] }) {
  return (
    <section className="matching-section section-shell" id="matching" aria-labelledby="matching-title">
      <div className="matching-surface">
        <div className="section-heading matching-heading">
          <p className="eyebrow">Cosmic Dating</p>
          <h2 id="matching-title">How chart-based matching works</h2>
          <p>Two charts, five decisive connections. Each one is scored, then explained in plain English so you can decide with your eyes open.</p>
        </div>
        <div className="matching-layout">
          <div className="matching-visual">
            <SynastryDiagram />
            <ul className="synastry-legend">
              {connections.map(([, title, subtitle], i) => <li key={title}><span className="synastry-key" style={{ background: links[i].color, color: links[i].color }} /><span><strong>{title}</strong><span className="synastry-legend-detail"> — {subtitle}</span></span></li>)}
            </ul>
          </div>
          <div className="matching-explanation">
            <p className="eyebrow">Real synastry</p>
            <h3>Why this beats a Sun-sign match</h3>
            <p>Two Scorpios can be a disaster and a Scorpio–Leo pair can last decades. What decides it is where Venus, Mars, the Moon and Saturn sit in each chart and how they touch the other person&apos;s. That is synastry, and it is what AstraLink computes for every match.</p>
            <ul className="matching-connections">
              {connections.map(([, title, , description], i) => <li key={title}><span className="synastry-key" style={{ background: links[i].color }} /><p><strong>{title}</strong>{description.slice(title.length)}</p></li>)}
            </ul>
            <a href={sourceLink("/compatibility-calculator/")} className="button button-primary matching-cta">Try the free compatibility calculator<Arrow diagonal /></a>
          </div>
        </div>
      </div>
      <div className="matching-score-breakdown" aria-labelledby="compatibility-score-title">
        <div className="matching-score-copy">
          <p className="eyebrow">Beyond a single percentage</p>
          <h3 id="compatibility-score-title">What a compatibility score is made of</h3>
          <p>A single percentage is easy to screenshot and easy to misread. AstraLink shows the four axes behind it, so a 72% with low friction and high growth reads differently from a 72% built on attraction alone.</p>
        </div>
        <div className="score-panel">
          <div className="score-title">
            <span className="eyebrow">Leo &amp; Scorpio</span>
            <span className="score-illustrative">Illustrative pairing</span>
          </div>
          <div className="score-bars">
            {([
              ["Love & attraction", 86],
              ["Communication", 74],
              ["Friction", 38],
              ["Long-term growth", 81],
            ] as const).map(([name, score]) => (
              <div className="score-row" key={name}>
                <div><span>{name}</span><strong>{score}%</strong></div>
                <div className="score-track"><span style={{ width: `${score}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="small-note">Illustrative values for a Leo–Scorpio pairing. Your own scores are computed from exact birth data in the app.</p>
        </div>
      </div>
    </section>
  );
}
