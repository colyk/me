import "./globals.css";
import type { Metadata } from "next";
import { Play } from "next/font/google";

const play = Play({ weight: ["400", "700"], subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Mykola Yurchenko",
  description: "Python Fullstack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth font-mono antialiased">
      <body className={play.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
