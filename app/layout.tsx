import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import "./v024.css";
import "./v025.css";
import "./v026.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://luma-ta.com"),
  title: { default: "LUMA-TA | Tax & Corporate Advisory", template: "%s | LUMA-TA" },
  description: "Practical Luxembourg tax and corporate advice for entrepreneurs, families and businesses with international interests.",
  keywords: ["Luxembourg tax advisory", "Luxembourg corporate advisory", "Luxembourg establishment", "Luxembourg corporate governance", "Finland Luxembourg advisory", "cross-border tax advisory"],
  openGraph: {
    title: "LUMA-TA | Tax & Corporate Advisory",
    description: "Practical Luxembourg tax and corporate advice for entrepreneurs, families and businesses with international interests.",
    url: "https://luma-ta.com",
    siteName: "LUMA-TA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMA-TA | Tax & Corporate Advisory",
    description: "Practical Luxembourg tax and corporate advice for entrepreneurs, families and businesses with international interests."
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${newsreader.variable}`}>{children}</body></html>;
}
