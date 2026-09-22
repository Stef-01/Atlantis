import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Everlab ships Saans / Tobias / Saans Mono (licensed). Free near-equivalents:
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", axes: ["opsz"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

// theme-color tints Safari's bars white to match the page top (the nav switches it to teal while it is teal).
// The site is light-only, so form controls stay light when the phone is in Dark Mode.
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL("https://atlantisrc.com.au"),
  title: { default: "Atlantis Recovery Centre | Integrated Allied Health, Gold Coast", template: "%s | Atlantis RC" },
  description:
    "Atlantis Recovery Centre is a multidisciplinary allied-health centre in Bundall, Gold Coast, offering psychology, physiotherapy, exercise physiology and hydrotherapy.",
  // iOS would otherwise turn every number into a call link, including the fax. Real phone links are marked up.
  formatDetection: { telephone: false },
  appleWebApp: { title: "Atlantis RC" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
