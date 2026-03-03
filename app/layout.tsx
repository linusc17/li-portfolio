import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Vincent Linus Caayupan | Full-Stack Developer",
  description: "Passionate Full-Stack Developer specializing in MERN stack, React, Next.js, and mobile development. Building scalable applications with modern technologies and real-time features.",
  keywords: [
    "Vincent Linus Caayupan",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "JavaScript",
    "TypeScript",
    "Flutter",
    "MongoDB",
    "Node.js",
    "Portfolio"
  ],
  authors: [{ name: "Vincent Linus Caayupan" }],
  creator: "Vincent Linus Caayupan",
  publisher: "Vincent Linus Caayupan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://linuscypn.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vincent Linus Caayupan | Full-Stack Developer",
    description: "Passionate Full-Stack Developer specializing in MERN stack, React, Next.js, and mobile development.",
    url: "https://linuscypn.vercel.app",
    siteName: "Vincent Linus Caayupan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Linus Caayupan | Full-Stack Developer",
    description: "Passionate Full-Stack Developer specializing in MERN stack, React, Next.js, and mobile development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bebasNeue.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
