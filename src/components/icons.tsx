import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function Arrow({
  diagonal = false,
  ...props
}: Props & { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Sparkle(props: Props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 0c1.4 10.2 5.8 14.6 16 16-10.2 1.4-14.6 5.8-16 16C14.6 21.8 10.2 17.4 0 16 10.2 14.6 14.6 10.2 16 0Z" />
    </svg>
  );
}

export function Check(props: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function ZodiacWheel({ className = "" }: { className?: string }) {
  const signs = [
    "♈",
    "♉",
    "♊",
    "♋",
    "♌",
    "♍",
    "♎",
    "♏",
    "♐",
    "♑",
    "♒",
    "♓",
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="250"
        cy="250"
        r="237"
        stroke="currentColor"
        strokeOpacity=".22"
      />
      <circle
        cx="250"
        cy="250"
        r="193"
        stroke="currentColor"
        strokeOpacity=".24"
      />
      <circle
        cx="250"
        cy="250"
        r="176"
        stroke="currentColor"
        strokeOpacity=".12"
      />
      <circle
        cx="250"
        cy="250"
        r="110"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      {signs.map((sign, i) => {
        const a = ((i * 30 - 75) * Math.PI) / 180;
        const b = ((i * 30 - 90) * Math.PI) / 180;
        return (
          <g key={sign}>
            <path
              d={`M${250 + 193 * Math.cos(b)} ${250 + 193 * Math.sin(b)}L${250 + 237 * Math.cos(b)} ${250 + 237 * Math.sin(b)}`}
              stroke="currentColor"
              strokeOpacity=".22"
            />
            <text
              x={250 + 216 * Math.cos(a)}
              y={257 + 216 * Math.sin(a)}
              textAnchor="middle"
              fill="currentColor"
              opacity=".6"
              fontSize="20"
            >
              {sign}
            </text>
          </g>
        );
      })}
      <path
        d="m250 75 151 262H99L250 75Zm0 350L99 163h302L250 425Z"
        stroke="currentColor"
        strokeOpacity=".24"
      />
      <path
        d="M95 220 380 340 310 90 150 385l270-185-325 20Z"
        stroke="currentColor"
        strokeOpacity=".16"
      />
      <circle cx="250" cy="250" r="8" fill="currentColor" opacity=".6" />
    </svg>
  );
}
