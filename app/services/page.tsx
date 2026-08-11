import { SiteFooter, SiteHeader } from "../SiteChrome";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

const photoPackages = [
  ["Up to 1,999 sq. ft.", "Professional interior and exterior photography"],
  ["2,000–2,999 sq. ft.", "Professional interior and exterior photography"],
  ["3,000–3,999 sq. ft.", "Professional interior and exterior photography"],
  ["4,000–4,999 sq. ft.", "Professional interior and exterior photography"],
  ["5,000–6,999 sq. ft.", "Professional interior and exterior photography"],
  ["7,000+ sq. ft.", "Custom property coverage"],
  ["Small shoot", "Focused photography for smaller listing needs"],
  ["Exterior only", "Professional exterior property photography"],
  ["Community photos", "Additional neighborhood and community coverage"],
];

const videoServices = [
  [
    "2-minute property walkthrough",
    "Cinematic property walkthrough with available customization options"
  ],
  [
    "3-minute property walkthrough",
    "Extended cinematic walkthrough for larger properties and additional coverage"
  ],
];

const aerialServices = [
  [
    "Aerial photography add-on",
    "Aerial property photography available with listing packages"
  ],
  [
    "Extended aerial photography",
    "Expanded aerial coverage for properties that need additional context"
  ],
  [
    "30-second aerial video",
    "Short-form aerial property video"
  ],
  [
    "1-minute aerial video",
    "Extended aerial property video"
  ],
];

const matterportTours = [
  ["Up to 1,999 sq. ft.", "Interactive 360-degree property tour", "$125"],
  ["2,000–3,000 sq. ft.", "Interactive 360-degree property tour", "$175"],
  ["3,000–4,000 sq. ft.", "Interactive 360-degree property tour", "$225"],
  ["4,000–5,000 sq. ft.", "Interactive 360-degree property tour", "$300"],
  ["5,001+ sq. ft.", "Interactive 360-degree property tour", "Custom"],
];

const bundles = [
  [
    "Up to 2,999 sq. ft.",
    "Complete photography and property video coverage"
  ],
  [
    "3,000–3,999 sq. ft.",
    "Complete photography and property video coverage"
  ],
  [
    "4,000–4,999 sq. ft.",
    "Complete photography and property video coverage"
  ],
];

export default function ServicesPage() {
  return (
    <main className="pricing-page">
      <SiteHeader active="services" />

      <section className="pricing-hero subpage-cinematic">
        <figure>
          <img
            src="/portfolio/aerial/DJI_20260731094021_0005_D.jpg"
            alt="Aerial front view of a two-story home and surrounding property"
          />
          <figcaption>
            
            <strong>Every property deserves to show up well</strong>
          </figcaption>
        </figure>
        <div className="subpage-hero-copy">
          <div>
            <p className="eyebrow">Professional real estate media</p>
            <h1>
              Coverage built
              <br />
              <em>around your listing.</em>
            </h1>
          </div>
          <div>
            <p>
             <p>
  Professional media, dependable turnaround, and flexible coverage
  designed around the needs of your listing.
</p>
            </p>
            <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
              Book through HD Photo Hub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="pricing-trust" aria-label="Service highlights">
        <span>2D floor plan included*</span>
        <span>24-hour photo turnaround</span>
        <span>One-hour response</span>
        <span>Simple online scheduling</span>
      </section>

      <section className="price-section">
        <div className="price-heading">
          <div>
            <p className="eyebrow">Photography</p>
            <h2>Photo packages</h2>
          </div>
          <p>
            Clean, bright listing photography that makes each space feel inviting—delivered within 24 hours.
          </p>
        </div>
        <div className="price-list">
         {photoPackages.map(([title, details], index) => (
            <article className="price-row" key={title}>
              <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
<p>{details}</p>
              </div>

<a href={bookingUrl} target="_blank" rel="noreferrer">
  View Current Pricing ↗
</a>
            </article>
          ))}
        </div>
        <p className="price-note">
          *A 2D floor plan is included with full photo packages. Small shoots, exterior-only shoots, and
          aerial-only shoots are excluded.
        </p>
      </section>

      <section className="price-section">
        <div className="price-heading">
          <div>
            <p className="eyebrow">Flagship service</p>
            <h2>Video</h2>
          </div>
          <p>Professional walkthrough videos built to show the property clearly and keep viewers engaged.</p>
        </div>
        
        
        <div className="price-list">
  {videoServices.map(([title, details], index) => (
            <article className="price-row" key={title}>
              <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{details}</p>
              </div>

              <a href={bookingUrl} target="_blank" rel="noreferrer">
                View Current Pricing ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="price-section">
        <div className="price-heading">
          <div>
            <p className="eyebrow">Elevated perspective</p>
            <h2>Aerial</h2>
          </div>
          <p>Add aerial photography or video to show the full property, surrounding land, and neighborhood.</p>
        </div>
        <div className="price-list">
          {aerialServices.map(([title, details, price], index) => (
            <article className="price-row" key={title}>
              <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
              <strong>{price}</strong>
              <a href={bookingUrl} target="_blank" rel="noreferrer">
               View Current Pricing ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="price-section enhancements-section">
        <div className="price-heading">
          <div>
            <p className="eyebrow">Finishing touches</p>
            <h2>Enhancements &amp; add-ons</h2>
          </div>
          <p>Optional services that help tailor the final presentation to the listing.</p>
        </div>
       
       
   <div className="addon-grid">
<article>
  <span>Virtual staging</span>
  <small>
    Add realistic furniture and décor to an empty interior photograph.
  </small>
  <a href={bookingUrl} target="_blank" rel="noreferrer">
    Add to your shoot ↗
  </a>
</article>

<article>
  <span>Grass enhancement</span>

  <small>
    Improve dull or patchy lawns for a cleaner exterior presentation.
  </small>

  <a href={bookingUrl} target="_blank" rel="noreferrer">
    Add to your shoot ↗
  </a>
</article>

<article>
  <span>2D Floor Plan</span>

  <small>
    Clean, easy-to-read property layout showing room placement and
    approximate dimensions.
  </small>

  <a href={bookingUrl} target="_blank" rel="noreferrer">
    Add to your shoot ↗
  </a>
</article>

<article>
  <span>Marketing kit</span>

  <small>
    Social media assets, mobile-friendly property website,
    printable flyers, and more.
  </small>

  <a href={bookingUrl} target="_blank" rel="noreferrer">
    Add to your shoot ↗
  </a>
</article>
</div>

<div className="golden-hour-feature">
  <div className="golden-hour-images">
    <figure>
      <img
        src="/portfolio/exterior-1158.webp"
        alt="Property exterior before golden-hour enhancement"
      />
      <figcaption>Before</figcaption>
    </figure>

    <figure>
      <img
        src="/portfolio/twilight-1158.webp"
        alt="Property exterior after golden-hour enhancement"
      />
      <figcaption>After</figcaption>
    </figure>
  </div>

  <div className="golden-hour-copy">
    <p className="eyebrow">Featured enhancement</p>
    <h3>Day to golden hour</h3>
    <p>
      Transform two daytime exterior photographs into warm,
      polished golden-hour images designed to help the listing
      stand out.
    </p>

<a href={bookingUrl} target="_blank" rel="noreferrer">
      Add to your shoot ↗
    </a>
  </div>
</div>
      </section>


      <section className="price-section featured-pricing">
        <div className="price-heading">
          <div>
            <p className="eyebrow">Best value</p>
            <h2>Photo + video bundles</h2>
          </div>
          <p>Complete photo and video coverage packaged together for the strongest overall value.</p>
        </div>
        <div className="price-list">
          {bundles.map(([title, details], index) => (
            <article className="price-row featured" key={title}>
              <span className="price-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
             
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                View Current Pricing ↗
              </a>
            </article>
          ))}
        </div>
      </section>

     <section
  className="booking-policies"
  aria-labelledby="booking-policies-heading"
>
  <div className="booking-policies__header">
    <p className="section-label">Before You Book</p>

    <h2 id="booking-policies-heading">
      Policies & Important Information
    </h2>

    <p>
      Review these important scheduling and travel details before booking
      your appointment.
    </p>
  </div>

  <div
  className="booking-policies__accordions"
  style={{ width: "100%", maxWidth: "680px" }}
>
    <details className="policy-accordion">
      <summary className="policy-accordion__summary">
        <span className="policy-accordion__title">
          Cancellation & Rescheduling Policy
        </span>

        <span className="policy-accordion__icon" aria-hidden="true">
          +
        </span>
      </summary>

      <div className="policy-accordion__content">
        <div className="policy-item">
          <h3>Before the day of the appointment</h3>
          <p>
            Add Will&apos;s cancellation and rescheduling policy here.
          </p>
        </div>

        <div className="policy-item">
          <h3>On the day of the appointment</h3>
          <p>
            Add any same-day cancellation or rescheduling fees here.
          </p>
        </div>

        <div className="policy-item">
          <h3>Weather-related rescheduling</h3>
          <p>
            Explain how weather delays and rescheduling will be handled.
          </p>
        </div>

        <div className="policy-item">
          <h3>No-shows or property access issues</h3>
          <p>
            Explain what happens when the photographer cannot access the
            property or the client is unavailable.
          </p>
        </div>
      </div>
    </details>

    <details className="policy-accordion">
      <summary className="policy-accordion__summary">
        <span className="policy-accordion__title">Travel Fees</span>

        <span className="policy-accordion__icon" aria-hidden="true">
          +
        </span>
      </summary>

      <div className="policy-accordion__content">
        <p>
          Dark Room Photography primarily serves the Houston area.
          Additional travel fees may apply to appointments outside the
          standard service area.
        </p>

        <p>
          Any applicable travel fee will be discussed before the
          appointment is confirmed.
        </p>
      </div>
    </details>
  </div>
</section> 
      
      
      <section className="cta pricing-cta">
        <p className="eyebrow">Ready to schedule?</p>
        <h2>Showcase your property. Elevate your brand.</h2>
        <p>Choose the right services for your listing and reserve your appointment through HD Photo Hub.</p>
        <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
          Book your appointment <span aria-hidden="true">↗</span>
        </a>
        <small>Questions? Dark Room responds within one hour during business hours.</small>
      </section>

      <SiteFooter />
    </main>
  );
}
