import { Geist, Geist_Mono } from "next/font/google";
import { Big_Shoulders_Stencil_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bigShouldersStencil = Big_Shoulders_Stencil_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-big-shoulders-stencil',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: "CECAM - Centro Cultural de las Artes del Movimiento",
  description: "Un espacio para el arte, la cultura y la comunidad en el corazón de Buenos Aires",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bigShouldersStencil.variable} ${montserrat.variable}`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
