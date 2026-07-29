import Link from "next/link";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

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

  return <header className={`site-header${active === "home" ? " site-header-home" : ""}`}>
    <Link className="brand" href="/" aria-label="Dark Room Photography home">
      <img src="/dark-room-logo-light.webp" alt=""/>
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
  return <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="footer-brand">
        <img src="/dark-room-logo-light.webp" alt="Dark Room Real Estate Photography"/>
        <p className="footer-positioning">Real estate photography built around speed, quality, and reliability.</p>
        <p className="footer-service-area">Serving Houston-area real estate agents, brokers, Airbnb hosts, and property managers.</p>
      </div>
      <div className="footer-section footer-navigation">
        <strong>Navigation</strong>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/meet-will">Meet Will</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-section footer-business">
        <div className="footer-hours">
          <strong>Business Hours</strong>
          <p>Monday–Friday<br/>8:00 AM–5:00 PM</p>
          <p>Calls returned within one hour during business hours</p>
        </div>
        <div className="footer-trust">
          <strong>Why Clients Choose Dark Room</strong>
          <ul>
            <li><span aria-hidden="true">✓</span>Fast delivery</li>
            <li><span aria-hidden="true">✓</span>Supra eKEY certified</li>
            <li><span aria-hidden="true">✓</span>Professional editing</li>
            <li><span aria-hidden="true">✓</span>Reliable scheduling</li>
          </ul>
        </div>
      </div>
      <div className="footer-section footer-booking">
        <strong>Ready to Book?</strong>
        <a className="button footer-booking-button" href={bookingUrl} target="_blank" rel="noopener noreferrer">
          Book a Photography Session <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="copyright"><span>© 2026 Dark Room Real Estate Photography</span></div>
    </div>
  </footer>;
}
