import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

const pages: Record<string, { eyebrow: string; title: string; text: string }> = {
  expertise: { eyebrow: "LUMA-TA", title: "Tax & Corporate Advisory", text: "Detailed pages covering establishment, ongoing tax and corporate advice, and Luxembourg coordination are being prepared." },
  "finland-luxembourg": { eyebrow: "FINLAND ↔ LUXEMBOURG", title: "A natural connection.", text: "The dedicated Finland–Luxembourg page will cover establishment in Luxembourg and cross-border tax and corporate advice." },
  about: { eyebrow: "ABOUT LUMA-TA", title: "Luxembourg advice. One point of contact.", text: "LUMA-TA is a founder-led Luxembourg tax and corporate advisory practice for entrepreneurs, families and businesses with Luxembourg interests." },
  insights: { eyebrow: "PERSPECTIVES", title: "Tax, corporate and cross-border perspectives.", text: "The LUMA-TA insights library is being prepared." },
  contact: { eyebrow: "START A CONVERSATION", title: "Planning something in Luxembourg?", text: "Start with the objective. Contact details and booking arrangements will be activated once verified." },
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
