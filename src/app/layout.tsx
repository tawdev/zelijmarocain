import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
// app/layout.tsx


export const metadata: Metadata = {
  title: {
    default: "Zelij Marocain | Artisanat Traditionnel de Fès",
    template: "%s | Zelij Marocain",
  },
  verification: {
    google: "TON_CODE_ICI",
  },
  description: "Découvrez l'authentique Zelij Marocain fait main à Fès. Carreaux de céramique traditionnels pour cuisines, salles de bains et projets sur mesure.",
  keywords: ["Zelij Marocain", "Zellige Fès", "Artisanat Marocain", "Carreaux traditionnels", "Moroccan Tiles"],
  openGraph: {
    title: "Zelij Marocain | Artisanat Traditionnel",
    description: "Le meilleur du zellige marocain fait main.",
    url: "https://zelijmarocain.com",
    siteName: "Zelij Marocain",
    images: [
      {
        url: "/logo-header.png", // Dir chi tswira mzyana f public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import FloatingButtons from "@/components/FloatingButtons";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} ${outfit.variable} font-sans antialiased text-text-dark`}>
        <Header />
        <main className="min-h-screen pt-[90px]">
          {children}
        </main>
        <PreFooter />
        <Footer />
        <FloatingButtons />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-DPKE0DXHC3" />
      </body>
    </html>
  );
}
