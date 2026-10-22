const signPaths = {
  leo: "M37 51C27 33 33 11 54 11C72 11 79 27 73 43C68 57 60 68 62 79C64 90 78 92 87 82M40 62A13 13 0 1 1 14 62A13 13 0 1 1 40 62",
  scorpio: "M9 22C17 14 24 18 24 28V74M24 28C24 15 42 15 42 28V74M42 28C42 15 60 15 60 28V68C60 79 66 83 76 83H91M82 74L91 83L82 92",
  virgo: "M10 22C18 14 25 18 25 28V76M25 28C25 15 43 15 43 28V76M43 28C43 15 61 15 61 28V68C61 80 68 87 80 90M61 48C72 36 88 43 85 58C82 72 68 82 54 90",
};

function Sign({ sign }: { sign: keyof typeof signPaths }) {
  return <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={signPaths[sign]} /></svg>;
}

export function PopularGlyph({ kind }: { kind: number }) {
  if (kind === 5) {
    return <span className="popular-glyph-pair" aria-hidden="true"><span className="popular-sign-leo"><Sign sign="leo" /></span><span className="popular-sign-scorpio"><Sign sign="scorpio" /></span></span>;
  }
  if (kind === 7) {
    return <span className="popular-glyph popular-sign-virgo" aria-hidden="true"><Sign sign="virgo" /></span>;
  }
  const shapes = [
    <g key="stars"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8zM4 15l.6 1.6L6.2 17l-1.6.6L4 19.2l-.6-1.6L1.8 17l1.6-.4z" /></g>,
    <g key="map"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" /></g>,
    <path key="code" d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
    <g key="saturn"><circle cx="12" cy="12" r="5.5" /><path d="M3.5 9.5c-1.8 3 3.2 8.6 9.3 11.2 6 2.6 10.2 1.3 8.4-1.9M19.6 5.9c1.5-2.4-2.5-3.1-8.8-.6" /></g>,
    <path key="moon" d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" />,
    null,
    <path key="star" d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z" />,
    null,
    <g key="tarot"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></g>,
    <path key="numbers" d="M5 8h4M7 6v6M4 17c1-1.5 4-2.5 4-4.2 0-1-.9-1.6-2-1.6s-2 .6-2 1.6M14 8l3-2v8M15 20a2 2 0 1 0 0-4h-1l1-2h3" />,
    <g key="globe"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></g>,
    <g key="search"><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.3-4.3" /></g>,
  ];
  return <span className="popular-glyph" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{shapes[kind]}</svg></span>;
}
