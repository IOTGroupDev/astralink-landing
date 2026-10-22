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
  showBreakdown = false,
  actionStyle = "link",
}: {
  feature: Feature;
  wide?: boolean;
  tone?: string;
  showBreakdown?: boolean;
  actionStyle?: "link" | "button";
}) {
  const points = (
    <ul>
      {feature.points.map((point) => (
        <li key={point}>
          <Check />
          <span>{point}</span>
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
        <Phone image={feature.image} alt={feature.alt} />
        {wide && (
          <>
            <span className="floating-label floating-label-one">
              <Sparkle width="18" height="18" />
              {feature.label.split(" · ")[0]}
            </span>
            <span className="floating-label floating-label-two">
              ☉ &nbsp; Sun &nbsp; ☾ &nbsp; Moon &nbsp; ASC
            </span>
          </>
        )}
      </div>
      <div className="feature-copy">
        <p className="eyebrow">{feature.label}</p>
        <h3>{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
        <a
          className={
            actionStyle === "button"
              ? "button button-primary feature-cta"
              : "text-link"
          }
          href={feature.href}
        >
          {feature.action}
          <Arrow diagonal />
        </a>
        {showBreakdown ? (
          <div className="feature-details feature-details-static">{points}</div>
        ) : (
          <details className="feature-details">
            <summary>
              Read the full breakdown<span aria-hidden="true">+</span>
            </summary>
            {points}
          </details>
        )}
      </div>
    </article>
  );
}
