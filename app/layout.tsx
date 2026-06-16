import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vincent Linus Caayupan | Full-Stack Developer",
  description:
    "Full-stack developer from the Philippines building web and mobile apps with MERN, Next.js, and Flutter. Recent work spans coffee, aviation, fitness, and government.",
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
    "Portfolio",
  ],
  authors: [{ name: "Vincent Linus Caayupan" }],
  creator: "Vincent Linus Caayupan",
  publisher: "Vincent Linus Caayupan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://linuscypn.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vincent Linus Caayupan | Full-Stack Developer",
    description:
      "Full-stack developer from the Philippines building web and mobile apps with MERN, Next.js, and Flutter.",
    url: "https://linuscypn.dev",
    siteName: "Vincent Linus Caayupan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Linus Caayupan | Full-Stack Developer",
    description:
      "Full-stack developer from the Philippines building web and mobile apps with MERN, Next.js, and Flutter.",
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

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;var c=document.documentElement.classList;d?c.add('dark'):c.remove('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
