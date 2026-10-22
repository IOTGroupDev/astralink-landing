import { HeaderNavigation } from "./header-navigation";
import { OptimizedImage } from "./optimized-image";
import { Arrow } from "./icons";
import { sourceLink } from "@/lib/content";

export function Header() {
  return (
    <HeaderNavigation
      feature={
        <a className="nav-feature" href={sourceLink("/app/")}>
          <span className="nav-feature-title">
            Your whole chart,
            <br />
            read by AI
          </span>
          <span className="nav-feature-caption">
            Free at launch <Arrow diagonal />
          </span>
          <span
            className="nav-feature-phone nav-feature-phone-back"
            aria-hidden="true"
          >
            <OptimizedImage
              src="/images/home-focus-of-the-day.webp"
              width={144}
              height={312}
              sizes="144px"
              alt=""
              loading="lazy"
            />
          </span>
          <span
            className="nav-feature-phone nav-feature-phone-front"
            aria-hidden="true"
          >
            <OptimizedImage
              src="/images/natal-chart-hub.webp"
              width={164}
              height={356}
              sizes="164px"
              alt=""
              loading="lazy"
            />
          </span>
        </a>
      }
    />
  );
}
