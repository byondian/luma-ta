import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { LTMonogram, Wordmark } from "@/components/Brand";

const expertise = [
  {
    n: "01",
    title: "Corporate & International Tax",
    body: "Luxembourg corporate tax advice for international businesses, groups and investment structures.",
  },
  {
    n: "02",
    title: "Transactions & Restructuring",
    body: "Tax advice around acquisitions, disposals, reorganisations and changes in ownership or structure.",
  },
  {
    n: "03",
    title: "Founders, Owners & Investors",
    body: "Structuring advice where companies, shareholders, investments and jurisdictions intersect.",
  },
];

const principles = [
  ["Independence", "Direct, objective advice aligned with the client and the commercial decision."],
  ["Clarity", "Complex tax questions translated into clear, usable decisions."],
  ["Partnership", "Senior, founder-led attention without unnecessary layers between client and adviser."],
];

const insights = [
  ["STRUCTURING", "When does a Luxembourg holding structure make sense for a Finnish business?", "6 MIN READ", "/images/insight-01-approved.webp"],
  ["CROSS-BORDER", "Five questions to ask before restructuring a Finland–Luxembourg group", "5 MIN READ", "/images/insight-02-approved.webp"],
  ["PERSPECTIVE", "Tax should follow the transaction — not the other way around", "4 MIN READ", "/images/insight-03-approved.webp"],
];

const heroImage = "/images/hero-approved.webp";
const bridgeImage = "/images/finland-luxembourg-approved.webp";
const founderImage = "/images/oona-approved.webp";

export default function Home() {
  return (
    <main>
      <Header variant="light" />

      <section className="hero hero-approved" aria-labelledby="hero-title">
        <div className="hero-content hero-approved-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-ice">FINLAND <span>↔</span> LUXEMBOURG</p>
            <h1 id="hero-title">Tax structuring<br />across borders.</h1>
            <p className="hero-lede">Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
            <div className="hero-actions">
              <Link className="button button-ivory" href="/contact">Book a conversation</Link>
              <Link className="text-link text-link-light" href="/expertise">Explore our expertise <span>→</span></Link>
            </div>
          </div>
          <figure className="hero-image hero-image-approved" aria-label="Pale stone architecture and reflective water in soft daylight">
            <Image src={heroImage} alt="" fill priority sizes="(max-width: 900px) 100vw, 56vw" />
            <span className="hero-image-blend" aria-hidden="true"></span>
          </figure>
        </div>
      </section>

      <section className="section central-idea approved-central">
        <div className="section-shell approved-two-col">
          <h2>Tax is rarely<br />the starting point.</h2>
          <div className="body-large approved-central-copy">
            <p>A transaction, investment, restructuring or expansion usually begins with a commercial objective. The tax structure should support that objective — not dictate it.</p>
            <p>LUMA-TA helps Finnish businesses, founders and investors understand the Luxembourg side of the equation and structure cross-border decisions with clarity.</p>
          </div>
        </div>
      </section>

      <section className="section expertise-section approved-expertise" id="expertise">
        <div className="section-shell">
          <div className="section-heading-row approved-heading-row">
            <p className="eyebrow">OUR EXPERTISE</p>
            <p className="section-note">Focused advice where business, ownership and jurisdictions meet.</p>
          </div>
          <div className="expertise-grid approved-expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-item approved-expertise-item" key={item.n}>
                <span className="expertise-number" aria-hidden="true">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="text-link" href="/expertise">Learn more <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="geo-section approved-geo" aria-labelledby="geo-title">
        <div className="approved-geo-grid">
          <div className="approved-geo-copy">
            <p className="eyebrow eyebrow-blue">FINLAND ↔ LUXEMBOURG</p>
            <h2 id="geo-title">Finland ↔ Luxembourg.<br />A natural connection.</h2>
            <p>Cross-border structures rarely fit neatly within one country&apos;s tax system. LUMA-TA brings Luxembourg expertise together with a Finnish perspective.</p>
            <div className="approved-geo-links">
              <Link href="/finland-luxembourg">Strategic cross-border structures <span>→</span></Link>
              <Link href="/finland-luxembourg">Smooth, efficient collaboration <span>→</span></Link>
            </div>
          </div>
          <figure className="approved-geo-image" aria-label="Pale architectural water corridor with controlled perspective">
            <Image src={bridgeImage} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="direct-section approved-direct" aria-labelledby="direct-title">
        <div className="section-shell approved-direct-grid">
          <h2 id="direct-title">Direct advice.<br />Senior attention.</h2>
          <div className="approved-principles">
            {principles.map(([title, body], index) => (
              <article key={title}>
                <span className="number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section approved-founder" aria-labelledby="founder-title">
        <div className="approved-founder-grid">
          <figure className="approved-founder-image" aria-label="Portrait of LUMA-TA founder Oona Jokinen">
            <Image src={founderImage} alt="Oona Jokinen" fill sizes="(max-width: 900px) 100vw, 44vw" />
            <span className="approved-founder-wash" aria-hidden="true"></span>
          </figure>
          <div className="approved-founder-copy">
            <p className="eyebrow eyebrow-blue">ABOUT LUMA-TA</p>
            <h2 id="founder-title">Founded by<br />Oona Jokinen</h2>
            <div className="body-large compact">
              <p>Oona is a Luxembourg-based tax adviser focused on corporate and international tax matters.</p>
              <p>Her approach brings Luxembourg tax capability together with a Finnish perspective and a direct, founder-led way of working.</p>
            </div>
            <Link className="text-link" href="/about">Read more about Oona <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section insights-section approved-insights" aria-labelledby="insights-title">
        <div className="section-shell">
          <div className="section-heading-row approved-heading-row">
            <div>
              <p className="eyebrow">INSIGHTS</p>
              <h2 id="insights-title">Cross-border tax,<br />explained clearly.</h2>
            </div>
            <Link className="text-link" href="/insights">View all insights <span>→</span></Link>
          </div>
          <div className="approved-insight-grid">
            {insights.map(([category, title, time, image]) => (
              <article key={title} className="approved-insight-card">
                <figure>
                  <Image src={image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                </figure>
                <div className="approved-insight-copy">
                  <p className="article-meta">{category} · {time}</p>
                  <h3>{title}</h3>
                  <Link className="text-link" href="/insights">Read article <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="conversion-section approved-conversion">
        <div className="section-shell approved-conversion-inner">
          <h2>Let&apos;s discuss your<br />international ambitions.</h2>
          <Link className="button button-ivory" href="/contact">Book a conversation</Link>
        </div>
      </section>

      <footer className="footer approved-footer">
        <div className="section-shell approved-footer-grid">
          <div className="footer-brand approved-footer-brand">
            <div className="approved-footer-logo"><LTMonogram className="footer-mark" /><Wordmark showDescriptor /></div>
            <p>Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
          </div>
          <div className="footer-nav">
            <Link href="/expertise">Expertise</Link>
            <Link href="/finland-luxembourg">Finland ↔ Luxembourg</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="footer-nav">
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-contact">
            <p>luma-ta.com</p>
            <p>Luxembourg</p>
          </div>
          <div className="footer-legal">
            <p>© 2026 LUMA-TA. All rights reserved.</p>
            <p>Legal entity, registration, business permit and regulatory information will be published once verified.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
