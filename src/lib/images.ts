import hero from "../../public/images/hero-wide.webp";
import heroMobile from "../../public/images/hero-mobile.webp";
import chart from "../../public/images/natal-chart-hub.webp";
import advisor from "../../public/images/advisor-ai-topic-date.webp";
import archetype from "../../public/images/archetype-precise-alchemist.webp";
import codes from "../../public/images/personal-codes-goals.webp";
import moon from "../../public/images/moon-calendar-energy.webp";
import academy from "../../public/images/learning-lesson-of-the-day.webp";
import home from "../../public/images/home-focus-of-the-day.webp";
import type { StaticImageData } from "next/image";

// Static imports give each source a content hash, so long-lived image caches
// remain correct when assets are replaced in a later deployment.
export const images: Record<string, StaticImageData> = {
  "/images/hero-wide.webp": hero,
  "/images/natal-chart-hub.webp": chart,
  "/images/advisor-ai-topic-date.webp": advisor,
  "/images/archetype-precise-alchemist.webp": archetype,
  "/images/personal-codes-goals.webp": codes,
  "/images/moon-calendar-energy.webp": moon,
  "/images/learning-lesson-of-the-day.webp": academy,
  "/images/home-focus-of-the-day.webp": home,
};

export const mobileHero = heroMobile.src;
