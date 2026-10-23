import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { WaitlistProvider } from "@/components/waitlist-provider";
import "./globals.css";
import "./typography.css";
import "./footer.css";
import "./roadmap.css";

const inter = localFont({
  src: "../../public/fonts/inter-regular.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.astra-link.app",
  ),
  title: "AstraLink: AI Astrology & Cosmic Dating by Birth Chart",
  description:
    "Find your cosmic match. Understand your chart. Time your next move. Join AstraLink early access for a free full birth chart, AI astrology and chart-based dating.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AstraLink — Find your cosmic match",
    description:
      "Your whole chart, read by AI. Join early access for a free full birth chart and first access to matching in your city.",
    url: "/",
    siteName: "AstraLink",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-wide.webp",
        width: 1672,
        height: 941,
        alt: "AstraLink — AI astrology and self-discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraLink — Find your cosmic match",
    description: "Understand your chart. Time your next move.",
    images: ["/images/hero-wide.webp"],
  },
  robots: { index: true, follow: true },
  category: "lifestyle",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11101b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <WaitlistProvider>
          <Header />
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
