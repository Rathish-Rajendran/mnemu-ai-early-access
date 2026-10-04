import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://unlost-memory.rinitha8.chatgpt.site",
  ),
  title: "Unlost — Your private memory for the internet",
  description: "Save links, notes, screenshots, PDFs and videos. Find the exact thing you need later, with sources.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "You saved it. Now where is it?",
    description: "Your private memory for the internet.",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Unlost — Your private memory for the internet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "You saved it. Now where is it?",
    description: "Your private memory for the internet.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
