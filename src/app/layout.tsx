import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NYX-SaaS — Digital Experiences Built to Perform",
    template: "%s | NYX-SaaS",
  },
  description:
    "NYX-SaaS is a digital product and Next.js engineering studio building high-performance web applications and UI/UX experiences that drive commercial momentum.",
  icons: {
    icon: [
      { url: '/images/favicon.png?v=3', type: 'image/png' },
      { url: '/favicon.ico?v=3', type: 'image/x-icon' },
    ],
    shortcut: '/images/favicon.png?v=3',
    apple: '/images/favicon.png?v=3',
  },
  keywords: ["website design", "web development", "UI/UX design", "digital agency", "NYX-SaaS", "Next.js 15"],
  authors: [{ name: "NYX-SaaS" }],
  creator: "NYX-SaaS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyx-saas.com",
    siteName: "NYX-SaaS",
    title: "NYX-SaaS — Digital Experiences Built to Perform",
    description:
      "We build digital experiences that turn attention into action. Website Design, Development & UI/UX.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYX-SaaS — Digital Experiences Built to Perform",
    description: "We build digital experiences that turn attention into action.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebas.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>
          <ScrollRevealProvider>
            {children}
          </ScrollRevealProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
