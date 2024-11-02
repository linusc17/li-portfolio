import "./globals.css";
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Vincent Linus A. Caayupan - Portfolio",
  description: "Front-end Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
