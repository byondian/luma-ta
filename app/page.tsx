import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { LTMonogram, Wordmark } from "@/components/Brand";

const expertise = [
  ["01", "ESTABLISH", "Establish in Luxembourg", "Practical support for entrepreneurs, families and businesses creating or restructuring a Luxembourg presence — from structure and ownership planning to governance setup and coordination with local specialists."],
  ["02", "ADVISE", "Tax & Corporate Advisory", "Ongoing Luxembourg tax, corporate and governance advice designed around commercial and personal objectives, including restructurings, transactions, shareholder matters and investment structures."],
  ["03", "REPRESENT & COORDINATE", "One Luxembourg Point of Contact", "Direct local support with coordination of the appropriate legal, accounting, fiduciary and other specialists when required, helping keep structures and advisers connected as needs evolve."],
];

const principles = [
  ["01", "Independent", "Advice shaped around the client’s objectives, not a product or predetermined structure."],
  ["02", "Personal", "Direct access to the adviser who understands the client and remains involved over time."],
  ["03", "Connected", "Coordination with the appropriate Luxembourg specialists when additional expertise is required."],
];

const process = [
  ["01", "Understand", "Start with the objective, circumstances and wider context."],
  ["02", "Analyse", "Identify the relevant Luxembourg tax, corporate and governance considerations."],
  ["03", "Advise", "Provide clear options and practical recommendations."],
  ["04", "Support", "Stay involved through implementation and as needs evolve."],
];

const heroImage = "/images/luma-ta/hero-primary.jpg";
const crossborderImage = "/images/luma-ta/crossborder.jpg";
const alternateImage = "/images/luma-ta/hero-alternate.jpg";
const founderPortrait = "/images/oona-approved.avif";

const insights = [
  ["STRUCTURING", "When does a Luxembourg holding structure make sense for a Finnish business?", "6 MIN READ", crossborderImage],
  ["CROSS-BORDER", "Five questions to ask before restructuring a Finland–Luxembourg group", "5 MIN READ", heroImage],
  ["PERSPECTIVE", "Tax should follow the transaction — not the other way around", "4 MIN READ", alternateImage],
];

export default function Home() {
  return (
    <main className="wireframe-home">
      <Header />

      <section className="wf-hero" aria-labelledby="hero-title">
        <div className="wf-hero-copy">
          <p className="eyebrow eyebrow-ice">FINLAND <span>↔</span> LUXEMBOURG</p>
          <h1 id="hero-title">Tax structuring<br />across borders.</h1>
          <p className="wf-hero-lede">Practical Luxembourg tax and corporate advice for entrepreneurs, families and businesses with international interests.</p>
          <div className="wf-hero-actions">
            <Link className="button button-ivory" href="/contact">Book a conversation</Link>
            <Link className="text-link text-link-light" href="/expertise">Explore our expertise <span>→</span></Link>
          </div>
        </div>
        <figure className="wf-hero-image" aria-label="Pale architectural surfaces and reflective water">
          <Image src={heroImage} alt="" fill priority sizes="(max-width: 760px) 100vw, (max-width: 1100px) 51vw, 51vw" />
        </figure>
      </section>

      <section className="wf-intro wf-shell">
        <h2>Tax is rarely<br />the starting point.</h2>
        <div className="wf-intro-copy">
          <p>Most clients begin with a commercial, personal or strategic objective — establishing a structure, making an investment, reorganising ownership or building a presence in Luxembourg.</p>
          <p>LUMA-TA starts with that objective, then brings together the tax, corporate and governance considerations needed to support it.</p>
        </div>
      </section>

      <section className="wf-expertise wf-shell" id="expertise">
        <div className="wf-section-head"><p className="eyebrow">OUR EXPERTISE</p><p>Practical Luxembourg support from establishment through ongoing advice and coordination.</p></div>
        <div className="wf-expertise-grid">
          {expertise.map(([n, label, title, body]) => (
            <article key={n}>
              <span className="wf-big-number">{n}</span>
              <p className="wf-service-label">{label}</p>
              <h3>{title}</h3>
              <p>{body}</p>
              <Link className="text-link" href="/expertise">Explore <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wf-finlux">
        <div className="wf-finlux-copy">
          <p className="eyebrow eyebrow-blue">FINLAND ↔ LUXEMBOURG</p>
          <h2>Finland ↔ Luxembourg.<br />A natural connection.</h2>
          <p>LUMA-TA combines a Finnish perspective with on-the-ground Luxembourg experience, helping entrepreneurs, families and businesses connect their objectives across the two jurisdictions.</p>
          <div className="wf-finlux-links">
            <Link href="/finland-luxembourg">Establishing in Luxembourg <span>→</span></Link>
            <Link href="/finland-luxembourg">Cross-border tax & corporate advice <span>→</span></Link>
          </div>
        </div>
        <figure className="wf-finlux-image" aria-label="Pale architecture and reflective water">
          <Image src={crossborderImage} alt="" fill sizes="(max-width: 760px) 100vw, 52vw" />
        </figure>
      </section>

      <section className="wf-direct">
        <div className="wf-shell wf-direct-grid wf-direct-grid-expanded">
          <h2>One point of contact.<br />The right expertise when needed.</h2>
          <div className="wf-direct-content">
            <p className="wf-direct-intro">International structures often involve several advisers and service providers. LUMA-TA stays close to the client, understands the wider picture and helps keep the different pieces connected.</p>
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
        </div>
      </section>

      <section className="wf-founder">
        <figure className="wf-founder-image" aria-label="Founder portrait">
          <div className="wf-founder-photo">
            <Image src={founderPortrait} alt="Portrait of LUMA-TA founder" fill sizes="(max-width: 760px) 78vw, 360px" />
          </div>
        </figure>
        <div className="wf-founder-copy">
          <p className="eyebrow eyebrow-blue">FOUNDER</p>
          <h2>Oona</h2>
          <p className="wf-founder-role">Founder · Tax & Corporate Adviser</p>
          <p>LUMA-TA helps entrepreneurs, families and businesses establish, manage and develop their interests in Luxembourg with practical, personal advice.</p>
          <p>Drawing on experience across family office, tax, legal and corporate governance matters, Oona brings together the different considerations involved in establishing and operating a Luxembourg presence — and coordinates with the right local specialists where additional expertise is required.</p>
          <p>Clients have one trusted point of contact who understands their circumstances, stays involved and helps keep the different pieces connected as their needs evolve.</p>
          <div className="wf-founder-meta"><span>Based in Luxembourg</span><span>Finnish · English · Dutch</span></div>
          <p className="wf-founder-closing">Independent advice. Local expertise. One trusted relationship.</p>
          <Link className="text-link" href="/about">Read more about Oona <span>→</span></Link>
        </div>
      </section>

      <section className="wf-process">
        <div className="wf-shell">
          <div className="wf-section-head"><p className="eyebrow">HOW WE WORK</p><p>Clear advice starts with understanding the objective.</p></div>
          <div className="wf-process-grid">
            {process.map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wf-insights wf-shell">
        <div className="wf-section-head"><p className="eyebrow">INSIGHTS</p><Link className="text-link" href="/insights">View all insights <span>→</span></Link></div>
        <div className="wf-insights-grid">
          {insights.map(([category, title, time, image]) => (
            <article key={title}>
              <figure>
                <Image src={image} alt="" fill sizes="(max-width: 760px) 35vw, (max-width: 1100px) 30vw, 17vw" />
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
          <div className="wf-cta-copy">
            <h2>Let’s discuss<br />your Luxembourg plans.</h2>
            <p>Start with the objective. We can work out the structure from there.</p>
          </div>
          <Link className="button button-ivory" href="/contact">Book a conversation</Link>
        </div>
      </section>

      <footer className="wf-footer">
        <div className="wf-shell wf-footer-grid">
          <div className="wf-footer-brand">
            <div className="wf-footer-lockup"><LTMonogram className="wf-footer-mark" /><Wordmark showDescriptor /></div>
            <p>Practical Luxembourg tax and corporate advice for entrepreneurs, families and businesses with international interests.</p>
          </div>
          <nav><Link href="/expertise">Expertise</Link><Link href="/finland-luxembourg">Finland ↔ Luxembourg</Link><Link href="/about">About</Link></nav>
          <nav><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></nav>
          <div className="wf-footer-contact"><p>luma-ta.com</p><p>Luxembourg</p><p>Finnish · English · Dutch</p></div>
        </div>
        <div className="wf-shell wf-footer-legal"><span>© 2026 LUMA-TA. All rights reserved.</span><span>Privacy · Legal Notice · Terms</span></div>
      </footer>
    </main>
  );
}
