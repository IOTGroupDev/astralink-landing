import type { CSSProperties } from "react";
import { OptimizedImage as Image } from "./optimized-image";

// One shared portrait atlas keeps the entire circle to a single image request.
const portraits = Array.from({ length: 24 }, (_, index) => {
  const angle = (index - 12) * 15;
  const radians = (angle * Math.PI) / 180;
  return {
    angle,
    left: `${50 + Math.sin(radians) * 41}%`,
    top: `${76 - Math.cos(radians) * 62.16}%`,
    portrait: (index + 2) % 12,
  };
});

export function CommunityCircle() {
  return (
    <section className="community-circle section-shell" id="your-circle" aria-labelledby="circle-title">
      <div className="circle-scene">
        <div className="circle-atmosphere" aria-hidden="true" />
        <div className="circle-orbit-mask" aria-hidden="true">
          <div className="circle-orbit">
            {portraits.map(({ angle, left, top, portrait }, index) => (
              <div
                className="circle-portrait"
                key={index}
                style={{
                  left,
                  top,
                  "--portrait-angle": `${angle}deg`,
                  "--portrait-column": portrait % 4,
                  "--portrait-row": Math.floor(portrait / 4),
                } as CSSProperties}
              >
                <Image
                  src="/images/circle-portraits.webp"
                  alt=""
                  width={1536}
                  height={1152}
                  sizes="(max-width: 540px) 320px, 640px"
                  quality={80}
                  className="circle-portrait-atlas"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="circle-copy">
          <p className="eyebrow">Cosmic connections</p>
          <h2 id="circle-title">Find your cosmic match.</h2>
          <p>
            AstraLink matches people by birth chart instead of swipes. See the
            score and the reason behind it, then decide. Inclusive by design:
            any two people, any orientation.
          </p>
        </div>
      </div>
    </section>
  );
}
