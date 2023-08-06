import "./globals.css";
import type { Metadata } from "next";
import { Play } from "next/font/google";

const play = Play({ weight: "400", subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Mykola Yurchenko",
  description: "Mykola Yurchenko Python Fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  );
}
