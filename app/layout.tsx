import type { Metadata } from "next";
import { Big_Shoulders, Overpass } from "next/font/google";
import { content } from "@/content/copy";
import "./globals.css";

const display = Big_Shoulders({ variable: "--font-display", subsets: ["latin"], adjustFontFallback: false });
const body = Overpass({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  ...content.en.meta,
  alternates: { languages: { en: "/", es: "/es" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
