import Link from "next/link";
import Header from "@/components/Header";
import { LTMonogram, Wordmark } from "@/components/Brand";

const expertise = [
  { n: "01", title: "Corporate & International Tax", body: "Luxembourg corporate tax advice for international businesses, groups and investment structures.", topics: ["Corporate structures", "International taxation", "Holding structures", "Financing", "Tax governance"] },
  { n: "02", title: "Transactions & Restructuring", body: "Tax advice around acquisitions, disposals, reorganisations and changes in ownership or structure.", topics: ["M&A", "Reorganisations", "Business restructurings", "Shareholder structures", "Transaction planning"] },
  { n: "03", title: "Founders, Owners & Investors", body: "Structuring advice where companies, shareholders, investments and jurisdictions intersect.", topics: ["Founder structures", "Investment vehicles", "Ownership planning", "Cross-border holdings", "Exit considerations"] },
];

const scenarios = [
  ["Establishing a Luxembourg structure", "For Finnish businesses or investors considering Luxembourg as part of an international structure."],
  ["Reorganising an existing group", "Understanding the Luxembourg tax implications of changes in ownership, financing or corporate structure."],
  ["Investing across borders", "Structuring investments where Finnish stakeholders and Luxembourg entities intersect."],
  ["Transactions and exits", "Considering tax structure early when businesses or investments are acquired, sold or reorganised."],
];

const principles = [
  ["Commercial first", "Understand the business objective before designing the tax response."],
  ["Cross-border by design", "Consider the structure as an international question rather than a series of disconnected domestic issues."],
  ["Clear advice", "Turn complex tax considerations into decisions clients can actually use."],
];

const insights = [
  ["STRUCTURING", "When does a Luxembourg holding structure make sense for a Finnish business?", "6 MIN READ"],
  ["CROSS-BORDER", "Five questions to ask before restructuring a Finland–Luxembourg group", "5 MIN READ"],
  ["PERSPECTIVE", "Tax should follow the transaction — not the other way around", "4 MIN READ"],
];

const heroImage = "https://images.pexels.com/photos/28912967/pexels-photo-28912967/free-photo-of-modern-copenhagen-architecture-with-shadows.jpeg?auto=compress&dpr=1&h=1100&w=1200";
const editorialImage = "https://images.pexels.com/photos/30267851/pexels-photo-30267851.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function Home() {
  return (
    <main>
      <div className="hero-wrap">
        <Header variant="hero" />
        <section className="hero">
          <div className="hero-content section-shell">
            <div className="hero-copy reveal">
              <p className="eyebrow eyebrow-ice">FINLAND <span>↔</span> LUXEMBOURG</p>
              <h1>Tax structuring<br />across borders.</h1>
              <p className="hero-lede">Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
              <div className="hero-actions">
                <Link className="button button-ivory" href="/contact">Book a conversation</Link>
                <Link className="text-link text-link-light" href="/expertise">Explore our expertise <span>→</span></Link>
              </div>
              <div className="hero-signature"><LTMonogram light className="hero-mini-mark" /><span>Luxembourg-based<br />Finnish perspective</span></div>
            </div>
            <figure className="hero-image reveal">
              <img src={heroImage} alt="" loading="eager" />
              <div className="hero-image-wash" aria-hidden="true"></div>
              <figcaption>STRUCTURE · CLARITY · PERSPECTIVE</figcaption>
            </figure>
          </div>
        </section>
      </div>

      <section className="section section-shell central-idea">
        <div className="section-kicker"><span className="rule"></span><p className="eyebrow eyebrow-blue">CROSS-BORDER DECISIONS</p></div>
        <div className="split-copy">
          <h2>Tax is rarely the<br />starting point.</h2>
          <div className="body-large">
            <p>A transaction, investment, restructuring or expansion usually begins with a commercial objective. The tax structure should support that objective — not dictate it.</p>
            <p>LUMA-TA helps Finnish businesses, founders and investors understand the Luxembourg side of the equation and structure cross-border decisions with clarity.</p>
          </div>
        </div>
      </section>

      <section className="section section-shell expertise-section" id="expertise">
        <div className="section-heading-row"><p className="eyebrow">HOW LUMA-TA CAN HELP</p><p className="section-note">Focused advice where business, ownership and jurisdictions meet.</p></div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.n}>
              <span className="expertise-number" aria-hidden="true">{item.n}</span>
              <div className="expertise-content">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                <Link className="text-link" href="/expertise">Explore <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section geo-section">
        <div className="geo-grid-lines" aria-hidden="true"></div>
        <div className="section-shell geo-inner">
          <div className="geo-wordmark" aria-label="Finland to Luxembourg"><span>FINLAND</span><b>↔</b><span>LUXEMBOURG</span></div>
          <div className="geo-intro">
            <h2>One question.<br />Two jurisdictions.</h2>
            <div className="body-large">
              <p>Cross-border structures rarely fit neatly within one country&apos;s tax system.</p>
              <p>LUMA-TA brings Luxembourg expertise together with a Finnish perspective, helping clients identify the issues that arise when business, ownership, capital and investment cross borders.</p>
              <Link className="text-link strong-link" href="/finland-luxembourg">FINLAND ↔ LUXEMBOURG EXPERTISE <span>→</span></Link>
            </div>
          </div>
          <div className="scenario-grid">
            {scenarios.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="geo-coordinates" aria-hidden="true"><span>60.1699° N · 24.9384° E</span><span>49.6116° N · 6.1319° E</span></div>
        </div>
      </section>

      <figure className="editorial-break">
        <img src={editorialImage} alt="Minimal architectural detail with structured light and shadow" loading="lazy" />
        <div className="editorial-break-overlay" aria-hidden="true"></div>
        <figcaption><span>Precision in structure.</span><span>Calm in execution.</span></figcaption>
      </figure>

      <section className="section direct-section">
        <div className="section-shell">
          <p className="eyebrow eyebrow-ice">A DIFFERENT KIND OF TAX ADVISER</p>
          <div className="split-copy direct-intro">
            <h2>Direct advice.<br />Senior attention.</h2>
            <div className="body-large"><p>LUMA-TA is intentionally focused.</p><p>Clients work directly with the adviser responsible for understanding the transaction, structure or tax question — without unnecessary layers between the client and the advice.</p></div>
          </div>
          <div className="principles-grid">
            {principles.map(([title, body], i) => <article key={title}><span className="number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="section-shell founder-grid">
          <figure className="founder-visual">
            <img src={editorialImage} alt="" loading="lazy" />
            <div className="founder-visual-frame" aria-hidden="true"><LTMonogram className="founder-watermark" /></div>
          </figure>
          <div className="founder-copy">
            <div className="founder-label"><LTMonogram className="founder-section-mark" /><p className="eyebrow eyebrow-blue">FOUNDER</p></div>
            <h2>Oona Jokinen</h2>
            <p className="founder-role">Founder · International Tax Adviser</p>
            <div className="body-large compact"><p>Oona is a Luxembourg-based tax adviser focused on corporate and international tax matters.</p><p>Her approach brings Luxembourg tax capability together with a Finnish perspective and a direct, founder-led way of working.</p><p>For clients, the objective is simple: clear advice that supports the commercial decision.</p></div>
            <Link className="text-link" href="/about">About LUMA-TA <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="pov-section">
        <div className="section-shell pov-inner">
          <LTMonogram className="pov-mark" />
          <p>The commercial decision comes first.<br /><span>Tax should support it.</span></p>
        </div>
      </section>

      <section className="section section-shell insights-section">
        <div className="section-heading-row"><p className="eyebrow">PERSPECTIVES</p><Link className="text-link" href="/insights">All insights <span>→</span></Link></div>
        <h2>Cross-border tax,<br />explained clearly.</h2>
        <div className="insights-list">
          {insights.map(([category, title, time], i) => <article className={i === 0 ? "insight-featured" : ""} key={title}><span className="number">0{i + 1}</span><div><p className={`article-meta meta-${i + 1}`}>{category}</p><h3>{title}</h3></div><div className="article-action"><span>{time}</span><Link className="text-link" href="/insights">Read <b>→</b></Link></div></article>)}
        </div>
      </section>

      <section className="conversion-section">
        <div className="section-shell conversion-inner">
          <p className="eyebrow eyebrow-ice">START A CONVERSATION</p>
          <h2>Planning something<br />across borders?</h2>
          <p>If a transaction, structure or investment connects Finland and Luxembourg, it is usually worth considering the tax implications early.</p>
          <div className="conversion-actions"><Link className="button button-ivory" href="/contact">Book a conversation</Link><span>Finland ↔ Luxembourg</span></div>
          <LTMonogram light className="conversion-mark" />
        </div>
      </section>

      <footer className="footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand"><LTMonogram light className="footer-mark" /><Wordmark light showDescriptor /><p>FINLAND <span>↔</span> LUXEMBOURG</p></div>
          <div className="footer-nav"><Link href="/expertise">Expertise</Link><Link href="/finland-luxembourg">Finland ↔ Luxembourg</Link><Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
          <div className="footer-nav footer-secondary"><span>Privacy</span><span>Legal Notice</span><span>Terms</span><span>FI&nbsp;&nbsp; EN</span></div>
          <div className="footer-contact"><p>luma-ta.com</p><p>Luxembourg</p></div>
          <div className="footer-legal"><p>© 2026 LUMA-TA. All rights reserved.</p><p>Legal entity, registration, business permit and regulatory information will be published once verified.</p></div>
        </div>
      </footer>
    </main>
  );
}
