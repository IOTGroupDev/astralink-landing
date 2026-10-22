import { OptimizedImage as Image } from "./optimized-image";
import { Arrow } from "./icons";
import { sourceLink } from "@/lib/content";

const layers = [
  { name: "Rising", symbol: "↗", tone: "rising", description: "Your first impression and how you approach the world" },
  { name: "Moon", symbol: "☾", tone: "moon", description: "Your emotional needs and what makes you feel safe" },
  { name: "Sun", symbol: "☉", tone: "sun", description: "Your core identity, vitality and who you are becoming" },
];

export function BigThreeSection() {
  return (
    <section className="big-three-feature section-shell" aria-labelledby="big-three-title">
      <div className="big-three-surface">
        <div className="section-heading">
          <p className="eyebrow">Sun · Moon · Rising</p>
          <h2 id="big-three-title">Your chart is more than your Sun sign</h2>
          <p>The Sun is your core, the Moon is your needs and the rising sign is the mask everyone meets first. AstraLink reads all three, then the other seven planets, twelve houses and every aspect between them.</p>
        </div>
        <div className="big-three-layout">
          <figure className="big-three-diagram">
            <Image
              src="/images/big-three-layers.webp"
              alt="Three nested celestial layers: a golden Sun at the core, a pearl Moon layer and a violet Rising ring"
              width={1254}
              height={1254}
              sizes="(max-width: 540px) 85vw, (max-width: 900px) 450px, 480px"
              quality={80}
            />
            <figcaption className="big-three-labels">
              {layers.map(({ name, symbol, tone, description }) => (
                <div className={`big-three-label big-three-label-${tone}`} key={name}>
                  <span className="big-three-marker" aria-hidden="true">{symbol}</span>
                  <div><h3>{name}</h3><p>{description}</p></div>
                </div>
              ))}
            </figcaption>
          </figure>
          <div className="matching-explanation big-three-explanation">
            <p className="eyebrow">The time makes the difference</p>
            <h3>Why birth time matters</h3>
            <p>The rising sign changes roughly every two hours, and it sets all twelve houses. Without it, an app can only describe the surface. With it, AstraLink can tell you which house your Saturn return lands in, where a new partner&apos;s Venus falls in your chart, and which days the Advisor should flag for you.</p>
            <p>No birth time? You still get a date-only chart, and the Academy shows you how to find the time later.</p>
            <a href={sourceLink("/birth-chart/")} className="button button-primary">Calculate your Big Three free<Arrow diagonal /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
