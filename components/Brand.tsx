import Link from "next/link";

type MonogramProps = { light?: boolean; className?: string };

export function LTMonogram({ light = false, className = "" }: MonogramProps) {
  const outline = light ? "#F7F5EF" : "#173F37";
  const l = light ? "#F7F5EF" : "#173F37";
  return (
    <svg className={className} viewBox="0 0 54 86" role="img" aria-label="LT monogram">
      <rect x="5" y="2.5" width="44" height="81" rx="22" fill="none" stroke={outline} strokeWidth="2" />
      <path d="M18.8 22.5h4.4v37.8h14.7v4.1H18.8z" fill={l} />
      <path d="M26 37.4h18.6v4.1h-7.1v25.7h-4.4V41.5H26z" fill="#B7CFD6" />
    </svg>
  );
}

type WordmarkProps = { light?: boolean; className?: string; showDescriptor?: boolean };

export function Wordmark({ light = false, className = "", showDescriptor = false }: WordmarkProps) {
  return (
    <span className={`wordmark ${light ? "wordmark-light" : "wordmark-dark"} ${className}`.trim()}>
      <span className="wordmark-main"><span>LUMA</span><span className="wordmark-hyphen">-</span><span>TA</span></span>
      {showDescriptor ? <span className="wordmark-descriptor">Tax & Corporate Advisory</span> : null}
    </span>
  );
}

export function BrandLockup({ light = false, href = "/", compact = false }: { light?: boolean; href?: string; compact?: boolean }) {
  return (
    <Link className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`} href={href} aria-label="LUMA-TA home">
      <LTMonogram light={light} className="brand-monogram" />
      <Wordmark light={light} />
    </Link>
  );
}
