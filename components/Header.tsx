import Link from "next/link";

const links = [
  ["Expertise", "/expertise"],
  ["Finland ↔ Luxembourg", "/finland-luxembourg"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="LUMA-TA home">LUMA-TA</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <span className="language"><span>FI</span><span aria-hidden="true">|</span><strong>EN</strong></span>
          <Link className="button button-small" href="/contact">Book a conversation</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <div className="language"><span>FI</span><span aria-hidden="true">|</span><strong>EN</strong></div>
            <Link className="button" href="/contact">Book a conversation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
