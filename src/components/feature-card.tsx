import { OptimizedImage as Image } from "./optimized-image";
import type { Feature } from "@/lib/content";
import { Arrow, Check, Sparkle, ZodiacWheel } from "./icons";

export function Phone({
  image,
  alt,
  className = "",
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <Image
        src={`/images/${image}.webp`}
        alt={alt}
        width={540}
        height={1172}
        sizes="(max-width: 600px) 230px, (max-width: 1000px) 260px, 320px"
        quality={80}
      />
      <span className="phone-camera" aria-hidden="true" />
    </div>
  );
}

export function FeatureCard({
  feature,
  wide = false,
  tone = "neutral",
}: {
  feature: Feature;
  wide?: boolean;
  tone?: string;
}) {
  const points = (
    <ul>
      {feature.points.map((point) => (
        <li key={point}>
          <Check />
          <span>
            {feature.id === "birth-chart" && point.includes("dispositor") ? (
              <>
                {point.split("dispositor")[0]}
                <a href="https://www.astra-link.app/glossary/dispositor/">
                  dispositor
                </a>
                {point.split("dispositor")[1]}
              </>
            ) : (
              point
            )}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <article
      id={feature.id}
      className={`feature-card feature-${tone} ${wide ? "feature-wide" : ""}`}
    >
      <div className="feature-visual">
        {wide && (
          <>
            <ZodiacWheel className="feature-wheel" />
            <div className="mountain mountain-back" aria-hidden="true" />
            <div className="mountain mountain-front" aria-hidden="true" />
          </>
        )}
        <div className="phone-halo" aria-hidden="true" />
        {feature.id === "birth-chart" ? (
          <Image
            className="natal-hand-mockup"
            src="/images/natal-chart-hand.webp"
            alt="A hand holding a phone with AstraLink’s natal chart reading"
            width={1080}
            height={1368}
            sizes="(max-width: 600px) 360px, (max-width: 1000px) 440px, 560px"
            quality={80}
          />
        ) : feature.id === "cosmic-dating" || feature.id === "cosmic-simulator" ? (
          <Image
            className="feature-device-mockup"
            src={`/images/${feature.id}-iphone.webp`}
            alt={feature.id === "cosmic-dating"
              ? "AstraLink home screen in a black iPhone 15 mockup"
              : "AstraLink natal chart and Cosmic Simulator shortcut in a black iPhone 15 mockup"}
            width={800}
            height={1626}
            sizes="(max-width: 540px) 250px, (max-width: 1200px) 240px, 300px"
            quality={80}
          />
        ) : (
          <Phone image={feature.image} alt={feature.alt} />
        )}
        {wide && (
          <>
            <span className="floating-label floating-label-one">
              <Sparkle width="18" height="18" />
              {feature.label.split(" · ")[0]}
            </span>
            <span className="floating-label floating-label-two">
              <span>☉ Sun</span>
              <span>☾ Moon</span>
              <span>ASC</span>
            </span>
          </>
        )}
      </div>
      <div className="feature-copy">
        <p className="eyebrow">{feature.label}</p>
        <h3>{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
        <a className="button button-primary feature-cta" href={feature.href}>
          {feature.action}
          <Arrow diagonal />
        </a>
        <div className="feature-details">{points}</div>
      </div>
    </article>
  );
}
