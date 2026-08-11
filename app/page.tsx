import { SiteFooter, SiteHeader } from "./SiteChrome";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";
const Arrow = () => <span aria-hidden="true">↗</span>;
const services = [
  ["01","Video","Cinematic walkthroughs that hold attention, reveal the flow of a home, and help listings earn more engagement.","video"],
  ["02","Photography","Clean, bright listing photography composed to make every room feel inviting.","photo"],
  ["03","Photo + Video Bundles","Complete listing coverage with photography and a two-minute property walkthrough.","bundle"],
  ["04","Marketing Kit","Social media assets, a mobile-friendly property website, printable flyers, and more.",
  "marketing",],
  ["05","Photo Enhancements","Virtual staging, golden-hour conversions, and grass enhancements for a polished presentation.","enhancement"],
  ["06","Aerial","High-resolution drone photography and video that showcase the property, lot, and surrounding area from above.","aerial"],
] as const;

export default function Home(){return <main className="home-page">
  <SiteHeader active="home"/>

  <section className="hero" id="top">
    <div className="hero-image">
      <img src="/portfolio/twilight-favorite.webp" 
      alt="Welcoming suburban home photographed at twilight by Dark Room Photography"/>
      <div className="image-tag"><strong>Because every listing deserves its best first impression.</strong>
      </div>
      </div>
      <div className="hero-copy"><p className="eyebrow">Real estate photography + video</p>
      <h1>Every <span>Property</span> Presented<br/><em>with purpose.</em></h1>
      <p className="hero-intro"> Professional.  Reliable.  Responsive.</p>
      <div className="hero-actions">
        <a className="button" 
        href={bookingUrl} 
        target="_blank" 
        rel="noreferrer">Book a shoot <Arrow/></a>
        
        <a className="text-link" 
        href="/portfolio">View portfolio →</a>
        </div>
        <p className="booking-note"><span/> Fast online scheduling through HD Photo Hub</p>
        </div>
        </section>

  <section className="trust-strip" 
  aria-label="Professional trust indicators">
    <article><strong>✓ Supra eKEY</strong><span>Certified access</span>
    </article>
    
    <article><strong>✓ HAR</strong><span>Affiliated locally</span>
    </article>
    
    <article><strong>✓ One-hour</strong><span>Response time</span>
    </article>
    
    <article><strong>✓ Fast</strong><span>Turnaround</span>
    </article>
    
    <article><strong>✓ HD Photo Hub</strong><span>Simple scheduling</span>
    </article>
    </section>

  <section className="services section" 
  id="services"><div className="section-heading">
    <div>
      <p className="eyebrow">Services</p>
      <h2>Everything your listing needs to stand out.</h2>
      </div>
      <p>Choose the essentials or build a complete media package around your property and timeline.</p>
      </div>
      <div className="credentials" 
      aria-label="Professional credentials">
        <article><span className="credential-mark">S</span>
        <div><small>Property access</small><strong>Supra eKEY Certified</strong>
        </div>
        </article>
        
        <article>
          <span className="credential-mark">H</span>
        <div><small>Local industry</small><strong>HAR Affiliated</strong>
        </div>
        </article>
        <p>Trusted access and local industry familiarity help keep every appointment organized, secure, and easy for agents.</p>
        </div>
        
        <div className="service-masonry">{services.map(([number,title,copy,kind])=><article className={`service-card service-${kind}`} key={title}><div className="service-copy"><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href={bookingUrl} target="_blank" rel="noreferrer">Book this service <Arrow/></a></div></article>)}</div></section>

  <section
  className="confidence section"
  aria-labelledby="confidence-title"
>
  <div className="section-heading">
    <div>
      <p className="eyebrow">Trusted by Texas agents</p>

      <h2 id="confidence-title">
        <span>Trusted access.</span>
        <span>Clear communication.</span>
        <span>No guesswork.</span>
      </h2>
    </div>

    <p>
      Every detail is designed to keep your listing appointment organized and
      moving forward.
    </p>
  </div>

  <div className="confidence-grid">
    <article>
      <span>01</span>

      <div className="confidence-card-copy">
        <h3>Supra eKEY Certified</h3>
        <p>Professional access for occupied and secured properties.</p>
      </div>
    </article>

    <article>
      <span>02</span>

      <div className="confidence-card-copy">
        <h3>HAR Affiliated</h3>
        <p>Local industry knowledge and professional relationships.</p>
      </div>
    </article>

    <article>
      <span>03</span>

      <div className="confidence-card-copy">
        <h3>One-Hour Response</h3>
        <p>Quick communication when your listing timeline matters.</p>
      </div>
    </article>

    <article>
      <span>04</span>

      <div className="confidence-card-copy">
        <h3>Fast Turnaround</h3>
        <p>Media delivered quickly so listings reach the market sooner.</p>
      </div>
    </article>

    <article>
      <span>05</span>

      <div className="confidence-card-copy">
        <h3>HD Photo Hub</h3>
        <p>
          Simple scheduling, instant confirmation, and organized appointments.
        </p>
      </div>
    </article>

    <div className="confidence-action">
      <div>
        <p className="eyebrow">Ready to schedule?</p>

        <h3>Give your next listing the presentation it deserves.</h3>

        <a
          className="button confidence-cta"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Schedule photography <Arrow />
        </a>
      </div>
    </div>
  </div>
</section>

  <section className="recent-work section" 
  id="portfolio">
    <div className="section-heading">
      <div>
        <p className="eyebrow">Portfolio preview</p>
        <h2>Recent Work</h2>
        </div>
        <p>A look at the quality and attention to detail we bring to every property.</p>
        </div>
        
        <div className="recent-work-grid">

<figure className="recent-wide">
  <img
    src="/portfolio/point-arbor-court/point-arbor-twilight.webp"
    alt="Brick and stone home photographed during golden hour with warm exterior lighting"
    loading="lazy"
  />
  <figcaption>Twilight Photography</figcaption>
</figure>
    
<figure>
  <img
    src="/portfolio/point-arbor-court/point-arbor-kitchen-front.webp"
    alt="Kitchen with dark wood cabinetry, granite island, and stainless appliances"
    loading="lazy"
  />
  <figcaption>Interior Photography</figcaption>
</figure>
    <figure>
      <img src="/portfolio/residential-suburban-exterior-angle-02.webp" 
      alt="Front elevation of a two-story brick and stone suburban home" 
      loading="lazy"/><figcaption>Exterior Photography</figcaption>
      </figure>

    <a className="recent-video" 
    href="/portfolio/video" 
    aria-label="View the 2317 Eagle Street property video">
      <img src="/portfolio/interior-1192.webp" 
      alt="Open-plan townhome interior shown as a property video preview" 
      loading="lazy"/><span className="play-control" aria-hidden="true">▶</span><strong>Property Video</strong>
      </a>

    <figure>
      <img src="/portfolio/interior-1282-staged.webp" 
      alt="Warm staged bedroom prepared for a residential listing" 
      loading="lazy"/><figcaption>Virtual Staging</figcaption>
      </figure>

  </div>
  
  <div className="recent-actions">
    <p>See complete property galleries, interiors, exteriors, video, and floor plans.</p>
    <a className="button portfolio-cta" 
    href="/portfolio">Explore Full Portfolio <Arrow/></a>
    </div>
    </section>

  <section className="process section" id="process"><div className="section-heading"><div><p className="eyebrow">How it works</p><h2>Simple from booking to delivery.</h2></div><p>No back-and-forth. No uncertainty. Just a dependable process built around your timeline.</p></div><div className="steps"><article><span>01</span><h3>Book online</h3><p>Choose services and a time through HD Photo Hub.</p><small>A few minutes</small></article><article><span>02</span><h3>We capture it</h3><p>Will photographs the property efficiently and with care.</p><small>30–90 minutes</small></article><article><span>03</span><h3>Get your media</h3><p>Your finished portfolio arrives by email, ready to market.</p><small>Simple delivery</small></article></div></section>

  <section className="about section" id="about"><div className="about-copy"><p className="eyebrow">Meet Will</p><h2>Your reliable creative partner for every listing.</h2><p>Will built Dark Room around a simple belief: professional real estate media should feel easy. He brings a calm presence to every property, keeps communication clear, and gives each space the attention it deserves.</p><div className="pillar-list" aria-label="Dark Room Photography service pillars"><span>Speed</span><span>Quality</span><span>Reliability</span></div></div><div className="portrait-placeholder"><img src="/will-with-camera.png" alt="Will, owner and photographer at Dark Room Photography"/></div><div className="about-details"><article><span>Business hours</span><strong>8 AM–5 PM</strong></article><article><span>Call response</span><strong>Within 1 hour</strong></article><a className="outline-button about-link" href="/meet-will">Learn More About Will <Arrow/></a></div></section>

  <section className="cta" id="contact"><p className="eyebrow">Ready To Book?</p><h2>Your next listing starts here.</h2><p>Choose your services and book online in just a few minutes.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book your appointment <Arrow/></a><small>Secure scheduling through HD Photo Hub</small></section>

  <SiteFooter/>
</main>}
