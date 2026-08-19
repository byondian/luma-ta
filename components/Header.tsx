"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLockup, LTMonogram } from "./Brand";

const links = [
  ["Expertise", "/expertise"],
  ["Finland ↔ Luxembourg", "/finland-luxembourg"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
] as const;

export default function Header({ variant = "light" }: { variant?: "hero" | "light" }) {
  const [scrolled, setScrolled] = useState(variant === "light");

  useEffect(() => {
    if (variant !== "hero") { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const lightOnDark = variant === "hero" && !scrolled;

  return (
    <header className={`site-header ${lightOnDark ? "site-header-hero" : "site-header-scrolled"}`}>
      <div className="nav-shell">
        <BrandLockup light={lightOnDark} compact />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <span className="language"><span>FI</span><span aria-hidden="true">|</span><strong>EN</strong></span>
          <Link className={`button button-small ${lightOnDark ? "button-header-light" : ""}`} href="/contact">Book a conversation</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><LTMonogram light={lightOnDark} className="mobile-mark" /><span className="menu-lines"><i></i><i></i></span></summary>
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
