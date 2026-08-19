import Link from "next/link";
import Header from "@/components/Header";

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
  ["CROSS-BORDER TAX", "Five questions to ask before restructuring a Finland–Luxembourg group", "5 MIN READ"],
  ["PERSPECTIVE", "Tax should follow the transaction — not the other way around", "4 MIN READ"],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">FINLAND ↔ LUXEMBOURG</p>
          <h1>Tax structuring<br />across borders.</h1>
          <p className="hero-lede">Independent cross-border tax advice for Finnish businesses, founders and investors with Luxembourg interests.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Book a conversation</Link>
            <Link className="text-link" href="/expertise">Explore our expertise <span>→</span></Link>
          </div>
          <p className="hero-note">Luxembourg-based · Finnish perspective · International tax expertise</p>
        </div>
        <div className="portrait-placeholder reveal" role="img" aria-label="Founder portrait placeholder for Oona Jokinen">
          <div className="portrait-mark"><span>OJ</span></div>
          <p>Oona Jokinen</p>
          <span className="vertical-note">LUXEMBOURG / FINLAND</span>
        </div>
      </section>

      <section className="section section-shell central-idea">
        <div className="section-kicker"><span className="rule"></span><p className="eyebrow">CROSS-BORDER DECISIONS</p></div>
        <div className="split-copy">
          <h2>Tax is rarely the<br />starting point.</h2>
          <div className="body-large">
            <p>A transaction, investment, restructuring or expansion usually begins with a commercial objective. The tax structure should support that objective — not dictate it.</p>
            <p>LUMA-TA helps Finnish businesses, founders and investors understand the Luxembourg side of the equation and structure cross-border decisions with clarity.</p>
          </div>
        </div>
      </section>

      <section className="section section-shell" id="expertise">
        <p className="eyebrow">HOW LUMA-TA CAN HELP</p>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.n}>
              <span className="number">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              <Link className="text-link" href="/expertise">Explore <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section geo-section">
        <div className="section-shell">
          <div className="geo-wordmark" aria-label="Finland to Luxembourg">FINLAND <span>↔</span> LUXEMBOURG</div>
          <div className="geo-intro">
            <h2>One question.<br />Two jurisdictions.</h2>
            <div className="body-large">
              <p>Cross-border structures rarely fit neatly within one country's tax system.</p>
              <p>LUMA-TA brings Luxembourg expertise together with a Finnish perspective, helping clients identify the issues that arise when business, ownership, capital and investment cross borders.</p>
              <Link className="text-link strong-link" href="/finland-luxembourg">FINLAND ↔ LUXEMBOURG EXPERTISE <span>→</span></Link>
            </div>
          </div>
          <div className="scenario-grid">
            {scenarios.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-shell why-section">
        <p className="eyebrow">A DIFFERENT KIND OF TAX ADVISER</p>
        <div className="split-copy">
          <h2>Direct advice.<br />Senior attention.</h2>
          <div className="body-large"><p>LUMA-TA is intentionally focused.</p><p>Clients work directly with the adviser responsible for understanding the transaction, structure or tax question — without unnecessary layers between the client and the advice.</p></div>
        </div>
        <div className="principles-grid">
          {principles.map(([title, body], i) => <article key={title}><span className="number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="section section-shell founder-section">
        <div className="founder-image portrait-placeholder large" role="img" aria-label="Founder portrait placeholder for Oona Jokinen"><div className="portrait-mark"><span>OJ</span></div></div>
        <div className="founder-copy">
          <p className="eyebrow">FOUNDER</p>
          <h2>Oona Jokinen</h2>
          <p className="founder-role">Founder · International Tax Adviser</p>
          <div className="body-large compact"><p>Oona is a Luxembourg-based tax adviser focused on corporate and international tax matters.</p><p>Her experience spans Luxembourg tax advisory and international business environments, giving her a practical understanding of how tax, transactions, ownership and investment structures interact.</p><p>Through LUMA-TA, she brings that Luxembourg expertise together with a distinctly Finnish perspective.</p></div>
          <div className="verified-grid"><div><span>Experience</span><p>To be confirmed.</p></div><div><span>Education</span><p>To be confirmed.</p></div><div><span>Languages</span><p>Finnish · English · additional languages to be confirmed.</p></div></div>
          <a className="text-link" href="#" aria-label="LinkedIn link to be verified">Connect on LinkedIn <span>→</span></a>
        </div>
      </section>

      <section className="section section-shell insights-section">
        <p className="eyebrow">PERSPECTIVES</p>
        <h2>Cross-border tax,<br />explained clearly.</h2>
        <div className="insights-list">
          {insights.map(([category, title, time], i) => <article key={title}><span className="number">0{i + 1}</span><div><p className="article-meta">{category}</p><h3>{title}</h3></div><div className="article-action"><span>{time}</span><Link className="text-link" href="/insights">Read <b>→</b></Link></div></article>)}
        </div>
      </section>

      <section className="conversion-section">
        <div className="section-shell conversion-inner">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Planning something<br />across borders?</h2>
          <p>If a transaction, structure or investment connects Finland and Luxembourg, it is usually worth considering the tax implications early.</p>
          <div className="conversion-actions"><Link className="button button-light" href="/contact">Book a conversation</Link><span className="placeholder-email">hello@luma-ta.com</span></div>
          <small>Luxembourg · Finland ↔ Luxembourg advisory</small>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer-brand"><strong>LUMA-TA</strong><p>Cross-Border Tax Advisory</p><p>Finland ↔ Luxembourg</p></div>
        <div className="footer-nav"><Link href="/expertise">Expertise</Link><Link href="/finland-luxembourg">Finland ↔ Luxembourg</Link><Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-nav"><span>Privacy</span><span>Legal Notice</span><span>Terms</span><span>FI&nbsp;&nbsp; EN</span></div>
        <div className="footer-contact"><p>luma-ta.com</p><p>Luxembourg</p></div>
        <div className="footer-legal"><p>© 2026 LUMA-TA. All rights reserved.</p><p className="legal-placeholder">Legal entity, Luxembourg registration, business permit and regulatory information will be published once verified.</p></div>
      </footer>
    </main>
  );
}
