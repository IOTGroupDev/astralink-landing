import hero from "../../public/images/hero-wide.webp";
import heroMobile from "../../public/images/hero-mobile.webp";
import chart from "../../public/images/natal-chart-hub.webp";
import chartHand from "../../public/images/natal-chart-hand.webp";
import advisor from "../../public/images/advisor-ai-topic-date.webp";
import advisorPair from "../../public/images/advisor-iphone-pair.webp";
import synastryOrbital from "../../public/images/synastry-orbital-charts.webp";
import bigThreeLayers from "../../public/images/big-three-layers.webp";
import archetype from "../../public/images/archetype-precise-alchemist.webp";
import archetypeNothing from "../../public/images/archetype-nothing-phone.webp";
import codes from "../../public/images/personal-codes-goals.webp";
import codesHand from "../../public/images/personal-codes-hand.webp";
import moon from "../../public/images/moon-calendar-energy.webp";
import academy from "../../public/images/learning-lesson-of-the-day.webp";
import academyIphone from "../../public/images/academy-iphone.webp";
import home from "../../public/images/home-focus-of-the-day.webp";
import datingIphone from "../../public/images/cosmic-dating-iphone.webp";
import simulatorIphone from "../../public/images/cosmic-simulator-iphone.webp";
import circlePortraits from "../../public/images/circle-portraits.webp";
import toolPlanet from "../../public/images/icon-planet.webp";
import toolHeart from "../../public/images/icon-heart.webp";
import toolPath from "../../public/images/icon-path.webp";
import toolLotus from "../../public/images/icon-lotus.webp";
import toolFlower from "../../public/images/icon-flower.webp";
import toolTree from "../../public/images/icon-tree.webp";
import toolPlanetV2 from "../../public/images/tool-planet-v2.webp";
import toolHeartV2 from "../../public/images/tool-heart-v2.webp";
import toolPathV2 from "../../public/images/tool-path-v2.webp";
import toolLotusV2 from "../../public/images/tool-lotus-v2.webp";
import toolFlowerV2 from "../../public/images/tool-flower-v2.webp";
import toolPersonalYear from "../../public/images/tool-personal-year.webp";
import toolTreeV2 from "../../public/images/tool-tree-v2.webp";
import roadmapJoin from "../../public/images/roadmap-join.webp";
import roadmapInvite from "../../public/images/roadmap-invite.webp";
import roadmapChart from "../../public/images/roadmap-chart.webp";
import roadmapMatch from "../../public/images/roadmap-match.webp";
import type { StaticImageData } from "next/image";

// Static imports give each source a content hash, so long-lived image caches
// remain correct when assets are replaced in a later deployment.
export const images: Record<string, StaticImageData> = {
  "/images/hero-wide.webp": hero,
  "/images/natal-chart-hub.webp": chart,
  "/images/natal-chart-hand.webp": chartHand,
  "/images/advisor-ai-topic-date.webp": advisor,
  "/images/advisor-iphone-pair.webp": advisorPair,
  "/images/synastry-orbital-charts.webp": synastryOrbital,
  "/images/big-three-layers.webp": bigThreeLayers,
  "/images/archetype-precise-alchemist.webp": archetype,
  "/images/archetype-nothing-phone.webp": archetypeNothing,
  "/images/personal-codes-goals.webp": codes,
  "/images/personal-codes-hand.webp": codesHand,
  "/images/moon-calendar-energy.webp": moon,
  "/images/learning-lesson-of-the-day.webp": academy,
  "/images/academy-iphone.webp": academyIphone,
  "/images/home-focus-of-the-day.webp": home,
  "/images/cosmic-dating-iphone.webp": datingIphone,
  "/images/cosmic-simulator-iphone.webp": simulatorIphone,
  "/images/circle-portraits.webp": circlePortraits,
  "/images/icon-planet.webp": toolPlanet,
  "/images/icon-heart.webp": toolHeart,
  "/images/icon-path.webp": toolPath,
  "/images/icon-lotus.webp": toolLotus,
  "/images/icon-flower.webp": toolFlower,
  "/images/icon-tree.webp": toolTree,
  "/images/tool-planet-v2.webp": toolPlanetV2,
  "/images/tool-heart-v2.webp": toolHeartV2,
  "/images/tool-path-v2.webp": toolPathV2,
  "/images/tool-lotus-v2.webp": toolLotusV2,
  "/images/tool-flower-v2.webp": toolFlowerV2,
  "/images/tool-personal-year.webp": toolPersonalYear,
  "/images/tool-tree-v2.webp": toolTreeV2,
  "/images/roadmap-join.webp": roadmapJoin,
  "/images/roadmap-invite.webp": roadmapInvite,
  "/images/roadmap-chart.webp": roadmapChart,
  "/images/roadmap-match.webp": roadmapMatch,
};

export const mobileHero = heroMobile.src;
