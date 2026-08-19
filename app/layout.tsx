import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import "./v024.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://luma-ta.com"),
  title: { default: "LUMA-TA | Cross-Border Tax Advisory", template: "%s | LUMA-TA" },
  description: "Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.",
  keywords: ["Luxembourg tax advisory", "Finland Luxembourg tax", "Luxembourg corporate tax", "cross-border tax advisory", "Luxembourg tax structuring", "Finnish business Luxembourg"],
  openGraph: {
    title: "LUMA-TA | Cross-Border Tax Advisory",
    description: "Tax structuring across borders. Finland ↔ Luxembourg.",
    url: "https://luma-ta.com",
    siteName: "LUMA-TA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMA-TA | Cross-Border Tax Advisory",
    description: "Tax structuring across borders. Finland ↔ Luxembourg."
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>{children}</body>
    </html>
  );
}
