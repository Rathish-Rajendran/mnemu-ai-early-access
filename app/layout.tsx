import type { Metadata } from "next";
import { configuredSiteUrl, siteUrl } from "../lib/safe-url";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: siteUrl(configuredSiteUrl()),
  title: "mnemu.ai: Your private memory across apps",
  description: "Send anything to mnemu.ai. It remembers and organizes your links, screenshots, notes, videos and files, so you can retrieve them instantly.",
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Everything worth remembering. Found again.",
    description: "Your private memory across apps.",
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "mnemu.ai: Your private memory across apps" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everything worth remembering. Found again.",
    description: "Your private memory across apps.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
