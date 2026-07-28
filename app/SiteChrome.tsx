import Link from "next/link";

const bookingUrl = "https://www.hdphotohub.com/";

type NavKey = "home" | "services" | "process" | "portfolio" | "meet-will";

const navigation = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "process", label: "Our Process", href: "/process" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "meet-will", label: "Meet Will", href: "/meet-will" },
] as const;

export function SiteHeader({ active }: { active: NavKey }) {
  const links = active === "home" ? navigation.slice(1) : navigation;

  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Dark Room Photography home">
      <img src="/dark-room-logo.png" alt=""/>
      <span><strong>Dark Room</strong><small>Real Estate Photography</small></span>
    </Link>
    <nav aria-label="Main navigation">
      {links.map((link) => <Link className={active === link.key ? "active" : undefined} href={link.href} key={link.key}>{link.label}</Link>)}
    </nav>
    <details className="mobile-nav">
      <summary aria-label="Open main navigation">Menu</summary>
      <div>
        {navigation.map((link) => <Link className={active === link.key ? "active" : undefined} href={link.href} key={link.key}>{link.label}</Link>)}
      </div>
    </details>
    <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">Book a shoot <span aria-hidden="true">↗</span></a>
  </header>;
}

export function SiteFooter() {
  return <footer>
    <div className="footer-brand"><img src="/dark-room-logo.png" alt="Dark Room Real Estate Photography"/><p>Comfortable service.<br/>Standout media.<br/>Dependable delivery.</p></div>
    <div><strong>Navigate</strong><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/process">Our Process</Link><Link href="/portfolio">Portfolio</Link><Link href="/meet-will">Meet Will</Link></div>
    <div><strong>Hours</strong><p>Monday–Friday<br/>8 AM–5 PM</p></div>
    <div><strong>Ready to book?</strong><a href={bookingUrl} target="_blank" rel="noreferrer">HD Photo Hub <span aria-hidden="true">↗</span></a></div>
    <p className="copyright">© 2026 Dark Room Real Estate Photography</p>
  </footer>;
}
