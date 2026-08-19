import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

const pages: Record<string, { eyebrow: string; title: string; text: string }> = {
  expertise: { eyebrow: "LUMA-TA", title: "Expertise", text: "Detailed expertise content is being prepared for the next presentation stage." },
  "finland-luxembourg": { eyebrow: "FINLAND ↔ LUXEMBOURG", title: "Two jurisdictions. One view.", text: "The dedicated Finland–Luxembourg advisory page is being prepared." },
  about: { eyebrow: "ABOUT LUMA-TA", title: "Founder-led by design.", text: "Verified founder information and background will be added here once confirmed." },
  insights: { eyebrow: "PERSPECTIVES", title: "Cross-border tax, explained clearly.", text: "The LUMA-TA insights library is being prepared." },
  contact: { eyebrow: "START A CONVERSATION", title: "Planning something across borders?", text: "Contact details and booking arrangements will be activated once verified." },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function HoldingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <div className="holding-page">
      <Header />
      <main className="holding-main section-shell">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.text}</p>
        <Link className="text-link" href="/">Return to home <span>→</span></Link>
      </main>
    </div>
  );
}
