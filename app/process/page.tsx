import { SiteFooter, SiteHeader } from "../SiteChrome";

const bookingUrl = "https://www.hdphotohub.com/";

export default function ProcessPage() {
  return <main className="process-page">
    <SiteHeader active="process"/>

    <section className="process-hero">
      <div><p className="eyebrow">Our process</p><h1>From scheduled<br/><em>to market-ready.</em></h1><p>A clear, dependable workflow that keeps your listing moving from appointment to market.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Schedule through HD Photo Hub <span aria-hidden="true">↗</span></a></div>
      <figure><img src="/wills-favorite-house.png" alt="Welcoming suburban home photographed at twilight by Dark Room Photography"/><figcaption><span>Simple by design</span><strong>Know what happens at every step</strong></figcaption></figure>
    </section>

    <section className="process-proof" aria-label="Service expectations"><span>One-hour response</span><span>30–90 minute appointments</span><span>24-hour photo turnaround</span><span>48-hour video turnaround</span></section>

    <section className="process-flow">
      <div className="process-intro"><p className="eyebrow">Three simple steps</p><h2>Simple to schedule.<br/>Easy to trust.</h2><p>From booking to delivery, Will keeps every step organized, clear, and on schedule.</p></div>
      <div className="process-timeline">
        <article><span>01</span><div><p className="eyebrow">Book online</p><h3>Choose your services and time.</h3><p>Schedule through HD Photo Hub, select the media your listing needs, and receive an organized appointment confirmation.</p><small>A few minutes</small></div></article>
        <article><span>02</span><div><p className="eyebrow">We capture it</p><h3>Will photographs the property.</h3><p>Most appointments take 30–90 minutes depending on the property size and services selected. Every room is approached with care and efficiency.</p><small>30–90 minutes</small></div></article>
        <article><span>03</span><div><p className="eyebrow">Receive your media</p><h3>Your listing arrives ready to market.</h3><p>Dark Room sends an email link to your completed media through HD Photo Hub, making it easy to download, review, and share.</p><small>Photos in 24 hours · Video in 48 hours</small></div></article>
      </div>
    </section>

    <section className="prep-section">
      <div className="prep-layout">
        <div className="prep-guidance">
          <p className="eyebrow">Before the appointment</p>
          <h2>Get the property ready.</h2>
          <div className="prep-grid">
            <article><span>01</span><div><h3>Declutter</h3><ul><li>Clear countertops</li><li>Remove personal items</li></ul></div></article>
            <article><span>02</span><div><h3>Brighten the Home</h3><ul><li>Open blinds</li><li>Turn on every light</li></ul></div></article>
            <article><span>03</span><div><h3>Final Touches</h3><ul><li>Make the beds</li><li>Straighten the furniture</li></ul></div></article>
          </div>
        </div>
        <aside className="staging-cta" aria-labelledby="staging-cta-title">
          <h2 id="staging-cta-title">Make Every Room Stand Out</h2>
          <p>Professional staging transforms empty spaces into inviting homes buyers can picture themselves living in.</p>
          <p>Whether you’re listing a vacant property or simply want to maximize your home’s appeal, staging can dramatically improve the final presentation.</p>
          <p className="staging-question">Need help preparing your listing?</p>
          <a className="staging-cta-link" href={bookingUrl} target="_blank" rel="noreferrer">Request a Staging Consultation →</a>
        </aside>
      </div>

      <div className="staging-transformations" aria-label="Staging before and after examples">
        <article>
          <h3>Living Room</h3>
          <div className="staging-pair">
            <figure className="staging-frame"><img src="/portfolio/staging-living-before.webp" alt="Empty living room before professional staging" loading="lazy"/><figcaption>Before</figcaption></figure>
            <figure className="staging-frame"><img src="/portfolio/staging-living-after.webp" alt="Living room after professional staging with seating, rug, lighting, and decor" loading="lazy"/><figcaption>After</figcaption></figure>
          </div>
        </article>
        <article>
          <h3>Bedroom</h3>
          <div className="staging-pair">
            <figure className="staging-frame"><img src="/portfolio/interior-1256.webp" alt="Empty bedroom before professional staging" loading="lazy"/><figcaption>Before</figcaption></figure>
            <figure className="staging-frame"><img src="/portfolio/interior-1256-staged.webp" alt="Bedroom after professional staging with a bed, side tables, rug, and decor" loading="lazy"/><figcaption>After</figcaption></figure>
          </div>
        </article>
        <article>
          <h3>Dining Room</h3>
          <div className="staging-pair">
            <figure className="staging-frame"><img src="/portfolio/staging-dining-before.webp" alt="Empty dining room before professional staging" loading="lazy"/><figcaption>Before</figcaption></figure>
            <figure className="staging-frame"><img src="/portfolio/staging-dining-after.webp" alt="Dining room after professional staging with a table, chairs, rug, and decor" loading="lazy"/><figcaption>After</figcaption></figure>
          </div>
        </article>
      </div>
    </section>

    <section className="delivery-section">
      <div className="delivery-image"><img src="/portfolio/residential-suburban-kitchen-04.webp" alt="Bright kitchen photographed for a residential listing"/></div>
      <div className="delivery-copy"><p className="eyebrow">Delivery without the guesswork</p><h2>Your media, organized and ready to market.</h2><p>Your finished portfolio is uploaded through HD Photo Hub. You’ll receive an email link when it is ready, with everything organized for your listing workflow.</p><ul><li>Photos delivered within 24 hours</li><li>Video delivered within 48 hours</li><li>Easy email access and download</li><li>Clear communication if anything changes</li></ul><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book your listing <span aria-hidden="true">↗</span></a></div>
    </section>

    <section className="cta process-cta"><p className="eyebrow">Have a property ready?</p><h2>Your listing is ready. So are we.</h2><p>Choose your services, reserve a time, and receive immediate confirmation through HD Photo Hub.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Schedule your appointment <span aria-hidden="true">↗</span></a><small>Dark Room responds within one hour during business hours.</small></section>

    <SiteFooter/>
  </main>
}
