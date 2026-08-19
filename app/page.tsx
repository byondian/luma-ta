import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { LTMonogram, Wordmark } from "@/components/Brand";

const expertise = [
  ["01", "Corporate & International Tax", "Luxembourg corporate tax advice for international businesses, groups and investment structures."],
  ["02", "Transactions & Restructuring", "Tax advice around acquisitions, disposals, reorganisations and changes in ownership or structure."],
  ["03", "Founders, Owners & Investors", "Structuring advice where companies, shareholders, investments and jurisdictions intersect."],
];

const principles = [
  ["01", "Independence", "Direct, objective advice aligned with the client’s commercial goals."],
  ["02", "Clarity", "Complex cross-border questions translated into decisions you can use."],
  ["03", "Partnership", "Senior attention and a direct working relationship throughout."],
];

const insights = [
  ["STRUCTURING", "When does a Luxembourg holding structure make sense for a Finnish business?", "6 MIN READ", "/images/luma-hero-v024.avif"],
  ["CROSS-BORDER", "Five questions to ask before restructuring a Finland–Luxembourg group", "5 MIN READ", "/images/luma-finlux-v024.avif"],
  ["PERSPECTIVE", "Tax should follow the transaction — not the other way around", "4 MIN READ", "/images/luma-hero-v024.avif"],
];

export default function Home() {
  return (
    <main className="wireframe-home">
      <Header />

      <section className="wf-hero" aria-labelledby="hero-title">
        <div className="wf-hero-copy">
          <p className="eyebrow eyebrow-ice">FINLAND <span>↔</span> LUXEMBOURG</p>
          <h1 id="hero-title">Tax structuring<br />across borders.</h1>
          <p className="wf-hero-lede">Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
          <div className="wf-hero-actions">
            <Link className="button button-ivory" href="/contact">Book a conversation</Link>
            <Link className="text-link text-link-light" href="/expertise">Explore our expertise <span>→</span></Link>
          </div>
        </div>
        <figure className="wf-hero-image" aria-label="Pale stone architecture and reflective water">
          <Image src="/images/luma-hero-v024.avif" alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
        </figure>
      </section>

      <section className="wf-intro wf-shell">
        <h2>Tax is rarely<br />the starting point.</h2>
        <div className="wf-intro-copy">
          <p>A transaction, investment, restructuring or expansion usually begins with a commercial objective. The tax structure should support that objective — not dictate it.</p>
          <p>LUMA-TA helps Finnish businesses, founders and investors understand the Luxembourg side of the equation and structure cross-border decisions with clarity.</p>
        </div>
      </section>

      <section className="wf-expertise wf-shell" id="expertise">
        <div className="wf-section-head"><p className="eyebrow">OUR EXPERTISE</p><p>Focused advice where business, ownership and jurisdictions meet.</p></div>
        <div className="wf-expertise-grid">
          {expertise.map(([n, title, body]) => (
            <article key={n}>
              <span className="wf-big-number">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <Link className="text-link" href="/expertise">Learn more <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wf-finlux">
        <div className="wf-finlux-copy">
          <p className="eyebrow eyebrow-blue">FINLAND ↔ LUXEMBOURG</p>
          <h2>Finland ↔ Luxembourg.<br />A natural connection.</h2>
          <p>Two stable, internationally minded business environments connected by ownership, investment, transactions and long-term structures.</p>
          <div className="wf-finlux-links">
            <Link href="/finland-luxembourg">Strategic cross-border structures <span>→</span></Link>
            <Link href="/finland-luxembourg">Smooth, efficient collaboration <span>→</span></Link>
          </div>
        </div>
        <figure className="wf-finlux-image" aria-label="Pale architectural water corridor">
          <Image src="/images/luma-finlux-v024.avif" alt="" fill sizes="(max-width: 900px) 100vw, 52vw" />
        </figure>
      </section>

      <section className="wf-direct">
        <div className="wf-shell wf-direct-grid">
          <h2>Direct advice.<br />Senior attention.</h2>
          <div className="wf-principles">
            {principles.map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-founder">
        <figure className="wf-founder-image" aria-label="Founder portrait">
          <Image src="/images/oona-founder-v024.avif" alt="" fill sizes="(max-width: 900px) 100vw, 44vw" />
          <span className="wf-founder-tint" aria-hidden="true"></span>
        </figure>
        <div className="wf-founder-copy">
          <p className="eyebrow eyebrow-blue">ABOUT LUMA-TA</p>
          <h2>Founded by Oona</h2>
          <p>LUMA-TA is a Luxembourg-based advisory practice focused on corporate and international tax matters, with a particular perspective on Finland–Luxembourg cross-border questions.</p>
          <p>Oona’s approach is direct, commercial and founder-led: understand the objective first, then make the tax structure support it.</p>
          <Link className="text-link" href="/about">Read more about Oona <span>→</span></Link>
        </div>
      </section>

      <section className="wf-insights wf-shell">
        <div className="wf-section-head"><p className="eyebrow">INSIGHTS</p><Link className="text-link" href="/insights">View all insights <span>→</span></Link></div>
        <div className="wf-insights-grid">
          {insights.map(([category, title, time, image]) => (
            <article key={title}>
              <figure>
                <Image src={image} alt="" fill sizes="(max-width: 900px) 42vw, 17vw" />
              </figure>
              <div>
                <p className="wf-insight-meta">{category} · {time}</p>
                <h3>{title}</h3>
                <Link className="text-link" href="/insights">Read article <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wf-cta">
        <div className="wf-shell wf-cta-inner">
          <h2>Let’s discuss your<br />international ambitions.</h2>
          <Link className="button button-ivory" href="/contact">Book a conversation</Link>
        </div>
      </section>

      <footer className="wf-footer">
        <div className="wf-shell wf-footer-grid">
          <div className="wf-footer-brand">
            <div className="wf-footer-lockup"><LTMonogram className="wf-footer-mark" /><Wordmark showDescriptor /></div>
            <p>Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
          </div>
          <nav><Link href="/expertise">Expertise</Link><Link href="/finland-luxembourg">Finland ↔ Luxembourg</Link><Link href="/about">About</Link></nav>
          <nav><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></nav>
          <div className="wf-footer-contact"><p>luma-ta.com</p><p>Luxembourg</p></div>
        </div>
        <div className="wf-shell wf-footer-legal"><span>© 2026 LUMA-TA. All rights reserved.</span><span>Privacy · Legal Notice · Terms</span></div>
      </footer>
    </main>
  );
}
