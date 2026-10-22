export function LearningIcon({ kind }: { kind: number }) {
  const shapes = [
    <g key="sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></g>,
    <g key="chart"><path d="M3 21h18M6 21V10m6 11V3m6 18v-7" /><circle cx="6" cy="8" r="1" /><circle cx="18" cy="12" r="1" /></g>,
    <path key="heart" d="M20.5 4.9a5.3 5.3 0 0 0-7.5 0L12 6l-1-1.1a5.3 5.3 0 0 0-7.5 7.5L12 21l8.5-8.6a5.3 5.3 0 0 0 0-7.5Z" />,
    <g key="calendar"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-12 5h6" /></g>,
    <g key="eye"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></g>,
    <g key="tarot"><rect x="4" y="4" width="12" height="17" rx="2" /><path d="m16 3 3-.5a2 2 0 0 1 2.3 1.8l1 12a2 2 0 0 1-1.8 2.2l-2 .2M10 8l1.2 3.3L14 12l-2.8 1.2L10 17l-1.2-3.8L6 12l2.8-.7L10 8Z" /></g>,
    <g key="search"><circle cx="10.5" cy="10.5" r="7.5" /><path d="m16 16 5 5" /></g>,
    <g key="bell"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></g>,
    <g key="saturn"><circle cx="12" cy="12" r="6" /><ellipse cx="12" cy="12" rx="11" ry="3.5" transform="rotate(-30 12 12)" /></g>,
    <path key="moon" d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11Z" />,
    <g key="numbers"><path d="M8 3 6 21M17 3l-2 18M3 9h18M2 15h18" /></g>,
  ];
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[kind]}</svg>;
}
