import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Everlab ships Saans / Tobias / Saans Mono (licensed). Free near-equivalents:
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"], axes: ["opsz", "SOFT"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://atlantisrc.com.au"),
  title: { default: "Atlantis Recovery Centre | Integrated Allied Health, Gold Coast", template: "%s | Atlantis RC" },
  description:
    "Atlantis Recovery Centre is a multidisciplinary allied-health centre in Bundall, Gold Coast, offering psychology, physiotherapy, exercise physiology and hydrotherapy.",
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
