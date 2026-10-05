import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
import "./editorial.css";

const manrope = localFont({
  src: "../public/fonts/manrope-latin.woff2",
  weight: "200 800",
  variable: "--font-heading",
  display: "swap",
});
const sourceSans = localFont({
  src: "../public/fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evan-camire-portfolio.vercel.app"),
  title: {
    default: "Evan Camire | Builder & Operator",
    template: "%s | Evan Camire",
  },
  description:
    "Evan Camire’s work across AI product development, entrepreneurship, and operations. Explore client products, implementation evidence, experience, and writing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Evan Camire | Builder & Operator",
    description:
      "I build AI products around real work. Explore the products, the decisions, and the experience behind them.",
    url: "/",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Evan Camire: I build AI products around real work.",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/social-preview.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
