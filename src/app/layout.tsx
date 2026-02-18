import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Zlij Moroccan - L'Art du Zellige pour Villas, Appartements & Cafés Modernes",
  description: "Sublimez vos villas, duplex et cafés modernes avec la touche authentique du zellige marocain. Zlij Moroccan : l'excellence de l'artisanat pour vos projets d'exception.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import FloatingButtons from "@/components/FloatingButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased text-text-dark`}>
        <Header />
        <main className="min-h-screen pt-[90px]">
          {children}
        </main>
        <PreFooter />
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
