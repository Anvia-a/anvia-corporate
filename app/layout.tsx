import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Anvia — 構造から、事業を創る。",
  description: "Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。",
  authors: [{ name: "Anvia Inc." }],
  metadataBase: new URL("https://anvia.co.jp"),
  openGraph: {
    title: "Anvia — 構造から、事業を創る。",
    description: "Anviaは、構造設計を軸に新規事業を創出するテクノロジーカンパニーです。",
    type: "website",
    locale: "ja_JP",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
