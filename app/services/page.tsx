import { SiteFooter, SiteHeader } from "../SiteChrome";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

const photoPackages = [
  ["Up to 1,999 sq. ft.", "20–25 photos", "24-hour turnaround", "$150"],
  ["2,000–2,999 sq. ft.", "25–30 photos", "24-hour turnaround", "$175"],
  ["3,000–3,999 sq. ft.", "30–40 photos", "24-hour turnaround", "$225"],
  ["4,000–4,999 sq. ft.", "40–50 photos", "24-hour turnaround", "$325"],
  ["5,000–6,999 sq. ft.", "50–60 photos", "24-hour turnaround", "$425"],
  ["7,000+ sq. ft.", "Custom coverage", "Contact for availability", "Quote"],
  ["Small shoot", "10 photos", "24-hour turnaround", "$95"],
  ["Exterior only", "5–6 photos", "24-hour turnaround", "$85"],
  ["Community photos", "5–6 photos", "Add-on coverage", "$25"],
];

const bundles = [
  ["Up to 2,999 sq. ft.", "25–30 photos + 2-minute video", "$325"],
  ["3,000–3,999 sq. ft.", "30–40 photos + 2-minute video", "$375"],
  ["4,000–4,999 sq. ft.", "40–50 photos + 2-minute video", "$475"],
];

export default function ServicesPage() {
  return <main className="pricing-page">
    <SiteHeader active="services"/>

    <section className="pricing-hero subpage-cinematic">
      <figure><img src="/portfolio/residential-suburban-exterior-front-01.webp" alt="Professionally photographed suburban home by Dark Room Photography"/><figcaption><span>Services for real listings</span><strong>Every property deserves to show up well</strong></figcaption></figure>
      <div className="subpage-hero-copy"><div><p className="eyebrow">Services &amp; straightforward pricing</p><h1>Coverage built<br/><em>around your listing.</em></h1></div><div><p>Clear pricing, dependable turnaround, and professional media designed to help every property show at its best.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book through HD Photo Hub <span aria-hidden="true">↗</span></a></div></div>
    </section>

    <section className="pricing-trust" aria-label="Service highlights"><span>2D floor plan included*</span><span>24-hour photo turnaround</span><span>One-hour response</span><span>Simple online scheduling</span></section>

    <section className="price-section featured-pricing">
      <div className="price-heading"><div><p className="eyebrow">Best value</p><h2>Photo + video bundles</h2></div><p>Photography arrives within 24 hours. Video arrives within 48 hours. Add an agent introduction for $15.</p></div>
      <div className="price-list">{bundles.map(([title,details,price],index)=><article className="price-row featured" key={title}><span className="price-number">0{index+1}</span><div><h3>{title}</h3><p>{details}</p></div><strong>{price}</strong><a href={bookingUrl} target="_blank" rel="noreferrer">Book bundle ↗</a></article>)}</div>
    </section>

    <section className="price-section">
      <div className="price-heading"><div><p className="eyebrow">Photography</p><h2>Photo packages</h2></div><p>Clean, bright listing photography that makes each space feel inviting—delivered within 24 hours.</p></div>
      <div className="price-list">{photoPackages.map(([title,photos,turnaround,price],index)=><article className="price-row" key={title}><span className="price-number">{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{photos} · {turnaround}</p></div><strong>{price}</strong><a href={bookingUrl} target="_blank" rel="noreferrer">Select ↗</a></article>)}</div>
      <p className="price-note">*A 2D floor plan is included with full photo packages. Small shoots, exterior-only shoots, and aerial-only shoots are excluded.</p>
    </section>

    <section className="price-section split-pricing">
      <div>
        <div className="price-heading compact"><div><p className="eyebrow">Flagship service</p><h2>Video</h2></div></div>
        <div className="price-list">
          <article className="price-row"><div><h3>2-minute walkthrough</h3><p>With or without music · Agent introduction +$25</p></div><strong>$200</strong></article>
          <article className="price-row"><div><h3>3-minute walkthrough</h3><p>With or without music · Agent introduction +$25</p></div><strong>$250</strong></article>
          <article className="price-row"><div><h3>30-second aerial video</h3><p>Standalone aerial property video</p></div><strong>$175</strong></article>
          <article className="price-row"><div><h3>1-minute aerial video</h3><p>Standalone aerial property video</p></div><strong>$225</strong></article>
        </div>
      </div>
      <div>
        <div className="price-heading compact"><div><p className="eyebrow">Immersive media</p><h2>Matterport 360</h2></div></div>
        <div className="price-list">
          <article className="price-row"><div><h3>Up to 1,999 sq. ft.</h3><p>Interactive 360-degree property tour</p></div><strong>$125</strong></article>
          <article className="price-row"><div><h3>2,000–3,000 sq. ft.</h3><p>Interactive 360-degree property tour</p></div><strong>$175</strong></article>
          <article className="price-row"><div><h3>3,000–4,000 sq. ft.</h3><p>Interactive 360-degree property tour</p></div><strong>$225</strong></article>
          <article className="price-row"><div><h3>4,000–5,000 sq. ft.</h3><p>Interactive 360-degree property tour</p></div><strong>$300</strong></article>
          <article className="price-row"><div><h3>5,001+ sq. ft.</h3><p>Interactive 360-degree property tour</p></div><strong>Custom</strong></article>
        </div>
      </div>
    </section>

    <section className="price-section">
      <div className="price-heading"><div><p className="eyebrow">Finishing touches</p><h2>Enhancements & add-ons</h2></div><p>Optional services that help tailor the final presentation to the listing.</p></div>
      <div className="addon-grid">
        <article><span>Virtual staging</span><strong>$20 / photo</strong></article>
        <article><span>Day-to-golden-hour enhancement</span><strong>$25 / 2 exterior photos</strong></article>
        <article><span>Grass enhancement</span><strong>$10 / photo</strong></article>
        <article><span>Marketing kit</span><strong>$75</strong><small>Social media assets, mobile-friendly property website, printable flyers, and more.</small></article>
        <article><span>Aerial add-on</span><strong>$75</strong><small>Add 6 aerial photos to any photo package.</small></article>
        <article><span>Extended aerial add-on</span><strong>$125</strong><small>Add 6–10 aerial photos to any photo package.</small></article>
      </div>
    </section>

    <section className="cta pricing-cta">
      <p className="eyebrow">Ready to schedule?</p>
      <h2>Showcase your property. Elevate your brand.</h2>
      <p>Choose the right services for your listing and reserve your appointment through HD Photo Hub.</p>
      <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book your appointment <span aria-hidden="true">↗</span></a>
      <small>Questions? Dark Room responds within one hour during business hours.</small>
    </section>

    <SiteFooter/>
  </main>
}
