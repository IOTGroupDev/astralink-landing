import { OptimizedImage as Image } from "./optimized-image";

const steps = [
  {
    image: "join",
    title: "Join with email + birth date",
    text: "Thirty seconds. Name, gender and who you are looking for are optional.",
  },
  {
    image: "invite",
    title: "One email when your wave opens",
    text: "No newsletter. You get an invitation link for iPhone or Android.",
  },
  {
    image: "chart",
    title: "Add birth time, get your full reading",
    text: "Archetype, chart ruler, aspects, relationships, career — free for early members.",
  },
  {
    image: "match",
    title: "Match by chart in your city",
    text: "See compatibility scores with reasons, then decide who to talk to.",
  },
];

export function SignupRoadmap() {
  return (
    <section className="signup-roadmap section-shell" id="your-journey" aria-labelledby="steps-title">
      <div className="section-heading">
        <p className="eyebrow">Your cosmic journey</p>
        <h2 id="steps-title">From signup to your first match</h2>
      </div>
      <div className="roadmap-journey">
        <svg className="roadmap-trail" viewBox="0 0 1000 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="roadmap-trail-color" x1="0" y1="60" x2="1000" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b190ed" stopOpacity="0.2" />
              <stop offset="0.45" stopColor="#d9b9ed" stopOpacity="0.6" />
              <stop offset="1" stopColor="#e4c38b" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M0 60C100 -12 233 132 333 60S566 -12 666 60S900 132 1000 60" stroke="url(#roadmap-trail-color)" strokeWidth="1.5" strokeDasharray="3 8" strokeLinecap="round" />
          <path d="m168 64 3 7 7 3-7 3-3 7-3-7-7-3 7-3zM500 26l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM835 64l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#d5b8f0" fillOpacity="0.7" />
        </svg>
        <ol className="roadmap-stages">
          {steps.map(({ image, title, text }, index) => (
            <li className="roadmap-stage" key={image}>
              <div className="roadmap-art" aria-hidden="true">
                <span className="roadmap-orbit" />
                <Image className="roadmap-illustration" src={`/images/roadmap-${image}.webp`} width={480} height={480} sizes="(max-width: 640px) 112px, 240px" quality={80} alt="" />
                <span className="roadmap-star roadmap-star-one">✦</span>
                <span className="roadmap-star roadmap-star-two">✧</span>
              </div>
              <div className="roadmap-copy">
                <span className="roadmap-number" aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
