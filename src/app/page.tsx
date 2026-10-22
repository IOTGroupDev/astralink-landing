import { OptimizedImage as Image } from "@/components/optimized-image";
import { BrandLogo } from "@/components/brand-logo";
import { mobileHero } from "@/lib/images";
import { CommunityCircle } from "@/components/community-circle";
import { FeatureCard } from "@/components/feature-card";
import { Arrow, Check, Sparkle, ZodiacWheel } from "@/components/icons";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  comparison,
  faqs,
  features,
  learning,
  shortcuts,
  skyEvents,
  sourceLink,
  tools,
} from "@/lib/content";

function SectionHeading({
  label,
  title,
  children,
  id,
}: {
  label?: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading" id={id}>
      {label && <p className="eyebrow">{label}</p>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function CTA({
  children = "Join early access — it's free",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`button button-primary ${className}`} href="#early-access">
      {children}
      <Arrow diagonal />
    </a>
  );
}

const connections = [
  [
    "♀ ♂",
    "Venus → Mars",
    "Attraction & desire",
    "Venus → Mars shows whether desire runs both ways.",
  ],
  [
    "☾ ☾",
    "Moon ↔ Moon",
    "Emotional safety",
    "Moon ↔ Moon shows whether you feel safe with each other on a bad day.",
  ],
  [
    "☉ ☾",
    "Sun ↔ Moon",
    "Being understood",
    "Sun ↔ Moon shows whether you understand each other without translating.",
  ],
  [
    "♄",
    "Saturn contacts",
    "Commitment & staying power",
    "Saturn contacts show whether it can last, and where it will be tested.",
  ],
  [
    "Ⅶ",
    "7th-house overlay",
    "The partner you recognize",
    "7th-house overlay shows whether you recognize them as 'partner material' at all.",
  ],
];

const steps = [
  [
    "Join with email + birth date",
    "Thirty seconds. Name, gender and who you are looking for are optional.",
  ],
  [
    "One email when your wave opens",
    "No newsletter. You get an invitation link for iPhone or Android.",
  ],
  [
    "Add birth time, get your full reading",
    "Archetype, chart ruler, aspects, relationships, career — free for early members.",
  ],
  [
    "Match by chart in your city",
    "See compatibility scores with reasons, then decide who to talk to.",
  ],
];

const reasons = [
  "It reads the whole chart, not one twelfth of you — archetype, chart ruler, aspects, karmic lesson, and horoscopes generated for your placements.",
  "It answers questions, not just describes you: the AI Advisor takes a topic and a date and tells you when to act.",
  "Dating is by chart, not by swipe — real synastry, with the reason you fit shown before you message.",
  "Numbers you can use — Personal Codes, lucky numbers and biorhythms computed from your own birth data.",
  "Inclusive by design — charts don't care about gender or orientation, and neither do we.",
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "AstraLink",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.astra-link.app",
        description: "AI astrology and cosmic dating by birth chart",
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <section
          className="hero page-panel"
          id="home"
          aria-labelledby="hero-title"
        >
          <picture className="hero-picture">
            <source media="(max-width: 640px)" srcSet={mobileHero} />
            <Image
              src="/images/hero-wide.webp"
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              quality={80}
              className="hero-image"
            />
          </picture>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <h1 id="hero-title">
              Find your cosmic match.
              <br />
              Understand your chart.
              <br />
              <span>Time your next move.</span>
            </h1>
            <p className="hero-description">
              AstraLink is a personal AI astrologer that reads your whole birth
              chart, matches you with people whose charts actually fit yours,
              and tells you when to act: text, sign, move on, begin. Join early
              access and your complete natal reading is free the day we open.
            </p>
            <div className="hero-actions">
              <CTA />
              <a className="hero-secondary" href="#inside">
                See what&apos;s inside the app<span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-trust">
            <span>
              <Check />
              Matched by chart, not by swipes
            </span>
            <span>
              <Check />
              Full natal reading free at invitation
            </span>
            <span>
              <Check />
              Founding-member pricing locked for life
            </span>
            <span>
              <Check />
              Private, encrypted, never sold
            </span>
          </div>
        </section>

        <section
          className="shortcut-section section-shell"
          aria-labelledby="shortcuts-title"
        >
          <SectionHeading title="What do you need today?" id="shortcuts-title">
            The same shortcuts you will see on the app&apos;s home screen. Pick
            the one that is on your mind right now.
          </SectionHeading>
          <ul className="shortcut-list">
            {shortcuts.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="shortcut-pill"
                  hrefLang={item.icon === "ES" ? "es" : undefined}
                >
                  <span
                    className={
                      item.icon === "ES"
                        ? "shortcut-icon shortcut-language-icon"
                        : "shortcut-icon"
                    }
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="features-section section-shell"
          id="inside"
          aria-labelledby="inside-title"
        >
          <SectionHeading
            label="Your whole chart, read by AI"
            title="What's inside AstraLink"
            id="inside-title"
          >
            Seven things you will use in the first week. Every screen below is
            the real app, in English, as early-access members see it.
          </SectionHeading>
          <FeatureCard feature={features.chart} wide tone="cosmic" />
          <div className="feature-grid feature-grid-centered">
            <FeatureCard feature={features.dating} tone="rose" />
            <FeatureCard feature={features.moon} tone="moon" />
          </div>
          <div className="section-interlude">
            <Sparkle />
            <h2>
              Understand your chart.
              <br />
              <span>Time your next move.</span>
            </h2>
          </div>
          <FeatureCard feature={features.advisor} wide tone="advisor" />
          <div className="feature-grid feature-grid-centered">
            <FeatureCard feature={features.archetype} tone="violet" />
            <FeatureCard feature={features.codes} tone="amber" />
          </div>
          <FeatureCard feature={features.academy} wide tone="academy" />
        </section>

        <CommunityCircle />

        <section
          className="matching-section section-shell"
          id="matching"
          aria-labelledby="matching-title"
        >
          <SectionHeading
            label="Cosmic Dating"
            title="How chart-based matching works"
            id="matching-title"
          >
            Two charts, five decisive connections. Each one is scored, then
            explained in plain English so you can decide with your eyes open.
          </SectionHeading>
          <div className="connections-grid">
            {connections.map(([symbol, title, subtitle, description]) => (
              <div key={title} className="connection">
                <span className="connection-symbol" aria-hidden="true">
                  {symbol}
                </span>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <span className="connection-line" aria-hidden="true" />
                <p className="connection-description">{description}</p>
              </div>
            ))}
          </div>
          <div className="compatibility-panel">
            <div className="compatibility-copy">
              <p className="eyebrow">Real synastry</p>
              <h3>Why this beats a Sun-sign match</h3>
              <p>
                Two Scorpios can be a disaster and a Scorpio–Leo pair can last
                decades. What decides it is where Venus, Mars, the Moon and
                Saturn sit in each chart and how they touch the other
                person&apos;s. That is synastry, and it is what AstraLink
                computes for every match.
              </p>
              <a
                href={sourceLink("/compatibility-calculator/")}
                className="text-link"
              >
                Try the free compatibility calculator
                <Arrow diagonal />
              </a>
            </div>
            <div className="score-panel">
              <div className="score-title">
                <span className="eyebrow">Leo & Scorpio</span>
                <span className="score-illustrative">Illustrative pairing</span>
              </div>
              <h3>What a compatibility score is made of</h3>
              <p>
                A single percentage is easy to screenshot and easy to misread.
                AstraLink shows the four axes behind it, so a 72% with low
                friction and high growth reads differently from a 72% built on
                attraction alone.
              </p>
              <div className="score-bars">
                {[
                  ["Love & attraction", 86],
                  ["Communication", 74],
                  ["Friction", 38],
                  ["Long-term growth", 81],
                ].map(([name, score]) => (
                  <div className="score-row" key={name}>
                    <div>
                      <span>{name}</span>
                      <strong>{score}%</strong>
                    </div>
                    <div className="score-track">
                      <span style={{ width: `${score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="small-note">
                Illustrative values for a Leo–Scorpio pairing. Your own scores
                are computed from exact birth data in the app.
              </p>
            </div>
          </div>
        </section>

        <section
          className="big-three-section page-panel"
          aria-labelledby="big-three-title"
        >
          <ZodiacWheel className="big-three-wheel" />
          <div className="big-three-copy">
            <p className="eyebrow">Sun · Moon · Rising</p>
            <h2 id="big-three-title">
              Your chart is more
              <br />
              than your Sun sign
            </h2>
            <p>
              The Sun is your core, the Moon is your needs and the rising sign
              is the mask everyone meets first. AstraLink reads all three, then
              the other seven planets, twelve houses and every aspect between
              them.
            </p>
            <details className="birth-time-details">
              <summary>
                Why birth time matters<span aria-hidden="true">+</span>
              </summary>
              <p>
                The rising sign changes roughly every two hours, and it sets all
                twelve houses. Without it, an app can only describe the surface.
                With it, AstraLink can tell you which house your Saturn return
                lands in, where a new partner&apos;s Venus falls in your chart,
                and which days the Advisor should flag for you.
              </p>
              <p>
                No birth time? You still get a date-only chart, and the Academy
                shows you how to find the time later.
              </p>
            </details>
            <a href={sourceLink("/birth-chart/")} className="text-link">
              Calculate your Big Three free
              <Arrow diagonal />
            </a>
          </div>
        </section>

        <section
          className="stats-section section-shell"
          aria-label="AstraLink product facts"
        >
          <div className="stats-grid">
            {[
              ["55", "Academy lessons written for your placements"],
              ["10", "Personal Code goals, from luck to protection"],
              ["8", "AI Advisor topics, any date you choose"],
              ["5", "horoscope focuses: general, love, career, health, money"],
            ].map(([number, label]) => (
              <div className="stat" key={number}>
                <span>
                  {number}
                  <Sparkle width="23" height="23" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <p className="small-note text-center">
            Product facts from the current early-access build. Premium members
            also get 2 human astrologer consultations per year.
          </p>
        </section>

        <section
          className="sky-section section-shell"
          aria-labelledby="sky-title"
        >
          <SectionHeading
            label="Cosmic calendar"
            title="Timing matters: the sky from October 2026"
            id="sky-title"
          >
            Venus and Mercury both turn retrograde this fall. AstraLink&apos;s
            Advisor and Cosmic Simulator tell you which of these dates matter
            for your chart and which you can ignore.
          </SectionHeading>
          <div className="sky-grid">
            {skyEvents.map(([date, title, description, symbol]) => (
              <article className="sky-card" key={title}>
                <span className="sky-symbol" aria-hidden="true">
                  {symbol}
                </span>
                <p className="eyebrow">{date}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="comparison-section section-shell"
          aria-labelledby="comparison-title"
        >
          <SectionHeading
            title="AstraLink vs the apps you already have"
            id="comparison-title"
          />
          <div
            className="table-scroll"
            role="region"
            aria-label="App comparison, scroll horizontally for more"
            tabIndex={0}
          >
            <table>
              <caption className="sr-only">
                AstraLink compared with horoscope and dating apps
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    <Sparkle />
                  </th>
                  <th scope="col">AstraLink</th>
                  <th scope="col">Horoscope apps</th>
                  <th scope="col">Dating apps</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([feature, astra, horoscope, dating]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td>
                      {astra === "✓" ? (
                        <>
                          <Check />
                          <span className="sr-only">Included</span>
                        </>
                      ) : (
                        astra
                      )}
                    </td>
                    <td>{horoscope}</td>
                    <td>{dating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small-note">
            Comparison reflects typical free tiers of mainstream horoscope and
            dating apps as of 2026; see our{" "}
            <a href={sourceLink("/best-astrology-apps/")}>
              detailed app comparison
            </a>{" "}
            for named products.
          </p>
        </section>

        <section className="manifesto page-panel">
          <div className="manifesto-orbit" aria-hidden="true" />
          <Sparkle />
          <h2>
            Your chart is one of a kind.
            <br />
            <span>Your match should be too.</span>
          </h2>
          <p>
            Stop reading forecasts written for twelve million people. Join early
            access and get your full AI birth chart free the day we open — plus
            first access to matching in your city.
          </p>
          <CTA>Find your cosmic match — free</CTA>
        </section>

        <section
          className="tools-section section-shell"
          id="tools"
          aria-labelledby="tools-title"
        >
          <SectionHeading
            label="No signup, no email"
            title="Free tools you can use right now"
            id="tools-title"
          >
            No signup, no email. Each one runs in your browser and previews what
            the app computes from your exact chart.
          </SectionHeading>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <a
                className="tool-card"
                key={tool.title}
                href={sourceLink(tool.href)}
              >
                <div className="tool-card-top">
                  <span className="tool-symbol" aria-hidden="true">
                    {tool.icon}
                  </span>
                  {i === 0 && <span className="tool-badge">most popular</span>}
                  <Arrow diagonal />
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section
          className="steps-section section-shell"
          aria-labelledby="steps-title"
        >
          <SectionHeading
            title="From signup to your first match"
            id="steps-title"
          />
          <div className="steps-grid">
            {steps.map(([title, text], i) => (
              <div className="step" key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="early-access-section page-panel"
          id="early-access"
          aria-labelledby="early-access-title"
        >
          <div className="early-access-copy">
            <p className="eyebrow">Early access · US launch</p>
            <h2 id="early-access-title">
              Find your
              <br />
              <span>cosmic match.</span>
            </h2>
            <p>
              Thirty seconds now, a complete chart later. Early-access members
              are invited in waves, in signup order, city by city.
            </p>
            <ul className="benefits">
              <li>
                <Check />
                First test wave: you’re in before the public launch on November
                16
              </li>
              <li>
                <Check />3 months of Premium free, then 80% off for a year*
              </li>
              <li>
                <Check />
                Free full birth chart + cosmic archetype at launch
              </li>
              <li>
                <Check />A say in what we build next
              </li>
            </ul>
            <a
              href={sourceLink("/terms/#4-early-access-waitlist")}
              className="offer-terms"
            >
              * Offer terms
            </a>
            <div className="early-access-chips">
              {[
                "Natal chart",
                "AI Advisor",
                "Chart-based dating",
                "Personal Codes",
                "Cosmic Simulator",
                "Academy",
              ].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <div className="early-access-form-panel">
            <WaitlistForm />
          </div>
        </section>

        <section
          className="learning-section section-shell"
          id="learn"
          aria-labelledby="learn-title"
        >
          <SectionHeading
            label="Learning centre"
            title="Explore astrology, deeply"
            id="learn-title"
          >
            Everything on this site is free, written by our editorial team and
            reviewed for astrological accuracy.
          </SectionHeading>
          <div className="learning-grid">
            {learning.map(([title, description, href], i) => (
              <a href={sourceLink(href)} className="learning-item" key={title}>
                <span className="learning-number">0{i + 1}</span>
                <div>
                  <h3>
                    {title}
                    <Arrow diagonal />
                  </h3>
                  <p>{description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          className="why-section section-shell"
          aria-labelledby="why-title"
        >
          <div>
            <p className="eyebrow">Your whole chart. Your own path.</p>
            <h2 id="why-title">
              Why people switch
              <br />
              to AstraLink
            </h2>
            <Sparkle className="why-star" />
          </div>
          <div>
            <ul className="why-list">
              {reasons.map((reason) => (
                <li key={reason}>
                  <Check />
                  <p>{reason}</p>
                </li>
              ))}
            </ul>
            <p className="small-note">
              About 27% of US adults believe in astrology (43% of women 18–49,
              per Pew Research). We treat it as a precise language for patterns
              — powered by real calculation and a model that explains itself,
              never medical, legal or financial advice. See our{" "}
              <a href={sourceLink("/editorial-policy/")}>editorial policy</a>{" "}
              for how we calculate and use AI.
            </p>
          </div>
        </section>

        <section
          className="faq-section section-shell"
          id="faq"
          aria-labelledby="faq-title"
        >
          <SectionHeading
            label="Quick answer"
            title="Questions people ask before joining"
            id="faq-title"
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} name="faq">
                <summary>
                  {faq.question}
                  <span className="faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="popular-section section-shell">
          <h2>Popular right now</h2>
          <div className="popular-links">
            {[
              ["555 angel number", "/angel-numbers/555/"],
              ["Astrocartography", "/astrocartography/"],
              ["Grabovoi codes", "/grabovoi-codes/"],
              ["Saturn return", "/saturn-return/"],
              ["Void of course Moon", "/void-of-course-moon/"],
              ["Leo & Scorpio", "/compatibility/leo-scorpio/"],
              ["Mercury retrograde", "/transits/mercury-retrograde/"],
              ["Virgo", "/horoscopes/virgo/"],
              ["Tarot", "/tarot/"],
              ["Numerology", "/numerology/"],
              ["Chinese zodiac", "/chinese-zodiac/"],
              ["Astrology glossary", "/glossary/"],
            ].map(([title, href]) => (
              <a href={sourceLink(href)} key={title}>
                {title}
                <Arrow diagonal width="14" height="14" />
              </a>
            ))}
          </div>
        </section>

        <section className="final-cta section-shell">
          <p className="eyebrow">Waves fill in signup order</p>
          <h2>
            Ready to meet the people
            <br />
            your chart fits?
          </h2>
          <p>
            Thirty seconds to join. Founding-member pricing and the first
            invitations go to the list in signup order, city by city.
          </p>
          <CTA />
        </section>
      </main>

      <footer className="site-footer page-panel">
        <div className="footer-top">
          <a
            className="wordmark footer-wordmark"
            href="#home"
            aria-label="AstraLink home"
          >
            <BrandLogo />
          </a>
          <p>
            Find your cosmic match.
            <br />
            Understand your chart.
            <br />
            Time your next move.
          </p>
          <a className="footer-top-link" href="#home">
            Back to top
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-links">
          <div>
            <p className="eyebrow">The App</p>
            {[
              ["Birth chart", "/birth-chart/"],
              ["AI Advisor", "/ai-advisor/"],
              ["Cosmic Dating", "/cosmic-dating/"],
              ["Personal Codes", "/personal-codes/"],
              ["Cosmic Simulator", "/cosmic-simulator/"],
              ["Moon calendar", "/moon-calendar/"],
            ].map(([title, href]) => (
              <a key={title} href={sourceLink(href)}>
                {title}
              </a>
            ))}
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            {[
              ["Horoscopes", "/horoscopes/"],
              ["Compatibility", "/compatibility/"],
              ["All tools", "/tools/"],
              ["Academy", "/academy/"],
              ["Articles", "/blog/"],
              ["News", "/news/"],
            ].map(([title, href]) => (
              <a key={title} href={sourceLink(href)}>
                {title}
              </a>
            ))}
          </div>
          <div>
            <p className="eyebrow brand-name">AstraLink</p>
            {[
              ["Editorial policy", "/editorial-policy/"],
              ["Authors", "/authors/"],
              ["Contact", "/contact/"],
              ["En español", "/es/"],
            ].map(([title, href]) => (
              <a key={title} href={sourceLink(href)}>
                {title}
              </a>
            ))}
          </div>
          <div>
            <p className="eyebrow">Follow us</p>
            <a href="https://www.instagram.com/astralinkapp/">
              Instagram
              <Arrow diagonal width="14" height="14" />
            </a>
            <a href="https://www.facebook.com/astralinkapp/">
              Facebook
              <Arrow diagonal width="14" height="14" />
            </a>
            <a href="https://www.pinterest.com/astralinkapp/">
              Pinterest
              <Arrow diagonal width="14" height="14" />
            </a>
            <a href="https://www.tiktok.com/@astralinkapp">
              TikTok
              <Arrow diagonal width="14" height="14" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 AstraLink</p>
          <span>Private, encrypted, never sold.</span>
          <div>
            <a href={sourceLink("/privacy/")}>Privacy</a>
            <a href={sourceLink("/terms/")}>Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
