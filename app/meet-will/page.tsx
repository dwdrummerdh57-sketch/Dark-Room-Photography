import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

type FutureBrandPhotoProps = {
  alt: string;
  className?: string;
  description: string;
  fileName: string;
  height: number;
  orientation: string;
  title: string;
  width: number;
};

function FutureBrandPhoto({
  alt,
  className = "",
  description,
  fileName,
  height,
  orientation,
  title,
  width,
}: FutureBrandPhotoProps) {
  return (
    <figure className={`future-brand-photo ${className}`.trim()}>
      {/* Replace this file in /public when the finished brand photograph is available. */}
      <img
        src={`/${fileName}`}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <span>Future Brand Photography</span>
        <strong>{title}</strong>
        <p>{description}</p>
        <small>Recommended: {orientation}</small>
      </figcaption>
    </figure>
  );
}

export const metadata: Metadata = {
  title: "Meet Will | Dark Room Real Estate Photography",
  description: "Meet Will Gasper, the photographer behind Dark Room Real Estate Photography and a trusted media partner for Houston-area agents, brokers, and property professionals.",
};

export default function MeetWillPage() {
  return <main className="meet-page">
    <SiteHeader active="meet-will"/>

    <section className="meet-hero" aria-labelledby="meet-will-title">
      <p className="eyebrow">About Dark Room</p>
      <h1 id="meet-will-title">Meet Will</h1>
      <p>The person behind Dark Room Real Estate Photography.</p>
    </section>

    <section className="meet-intro" aria-labelledby="meet-intro-title">
      <figure>
        <img
          src="/will-headshot.png"
          width={1140}
          height={1380}
          alt="Will Gasper, founder of Dark Room Real Estate Photography, holding his camera."
          loading="eager"
          decoding="async"
        />
      </figure>
      <div className="meet-story">
        <p className="eyebrow">The photographer behind the lens</p>
        <h2 id="meet-intro-title">Professional service, grounded in personal values.</h2>
        <p className="meet-lead">Behind every listing is a homeowner, a real estate professional, and a shared goal of presenting that property in its best light. That’s the responsibility I carry every time I arrive for a shoot.</p>
        <p>I’m Will Gasper, founder of Dark Room Real Estate Photography.</p>
        <p>I’m a husband, a father of three boys, and a man whose faith in God shapes both my life and my business. Those values influence how I work every day. I believe in showing up when I say I will, communicating honestly, treating people with respect, and delivering work I’m proud to put my name on.</p>
      </div>
    </section>

    <section className="meet-purpose" aria-labelledby="meet-purpose-title">
      <div className="meet-purpose-intro">
        <p className="eyebrow">Built around your workflow</p>
        <h2 id="meet-purpose-title">Built to Make Your Job Easier</h2>
        <FutureBrandPhoto
          className="future-brand-photo-interior"
          fileName="will-photographing-interior.jpg"
          width={1500}
          height={1000}
          alt="Will Gasper photographing the interior of a residential property."
          title="Photographing a Home Interior"
          description="Will composing a residential interior with care and attention to detail."
          orientation="horizontal · 3:2"
        />
      </div>
      <div className="meet-copy">
        <p>Dark Room was built with one purpose: to make life easier for real estate professionals.</p>
        <p>I know your schedule is full. You’re coordinating clients, preparing listings, meeting deadlines, and managing a hundred moving pieces at once. The last thing you should have to worry about is whether your photographer will arrive on time, communicate clearly, or deliver your media when promised.</p>
        <p className="meet-emphasis">That’s where I come in.</p>
        <p>Whether I’m photographing a first home, a luxury property, or producing cinematic video content, I approach every project with the same level of care and attention to detail. Every home deserves to be presented in a way that helps buyers imagine themselves living there.</p>
      </div>
    </section>

    <section className="meet-trust" aria-labelledby="meet-trust-title">
      <div className="meet-trust-heading">
        <p className="eyebrow">Professional trust</p>
        <h2 id="meet-trust-title">Prepared, responsive, and easy to work with.</h2>
        <div className="meet-trust-copy">
          <p>As a HAR Affiliate with Supra eKEY access, I understand the professionalism and efficiency that Houston-area agents expect. My goal isn’t simply to provide great photography. It’s to become someone you can confidently call for every listing because you know the experience will be smooth from beginning to end.</p>
          <FutureBrandPhoto
            className="future-brand-photo-greeting"
            fileName="will-greeting-client.jpg"
            width={1500}
            height={1000}
            alt="Will Gasper greeting a real estate client at a property."
            title="Greeting a Realtor or Homeowner"
            description="Will welcoming an agent or homeowner near the property entrance."
            orientation="horizontal · 3:2"
          />
        </div>
      </div>
      <div className="meet-trust-grid" aria-label="Professional credentials and working principles">
        <article><span>01</span><strong>HAR Affiliate</strong></article>
        <article><span>02</span><strong>Supra eKEY Access</strong></article>
        <article><span>03</span><strong>Clear Communication</strong></article>
        <article><span>04</span><strong>Reliable Service</strong></article>
      </div>
    </section>

    <section className="meet-partnership" aria-labelledby="meet-partnership-title">
      <p className="eyebrow">A dependable creative partner</p>
      <h2 id="meet-partnership-title">Trust is earned one listing at a time.</h2>
      <p>Every property matters, but I’m just as invested in your reputation as I am in the media I deliver. When your listings look their best, your clients notice, and your business continues to grow.</p>
      <FutureBrandPhoto
        className="future-brand-photo-review"
        fileName="will-reviewing-camera.jpg"
        width={1000}
        height={1250}
        alt="Will Gasper reviewing real estate images on his camera."
        title="Reviewing Images on His Camera"
        description="Will checking a captured image for composition, clarity, and quality."
        orientation="vertical · 4:5"
      />
    </section>

    <section className="meet-closing" aria-labelledby="meet-closing-title">
      <div>
        <p className="eyebrow">Thank you for stopping by</p>
        <h2 id="meet-closing-title">A partner for your next listing—and the ones after it.</h2>
      </div>
      <div className="meet-copy">
        <p>I’m grateful for every opportunity to work alongside agents, brokers, homeowners, and builders throughout the Houston area. My commitment remains the same for every client: exceptional media, clear communication, and less stress throughout your listing process.</p>
        <p>Thank you for taking the time to learn more about me and Dark Room. I look forward to meeting you and helping showcase your next listing.</p>
      </div>
    </section>

    <FutureBrandPhoto
      className="future-brand-photo-exterior"
      fileName="will-photographing-exterior.jpg"
      width={1800}
      height={1013}
      alt="Will Gasper photographing the exterior of a home."
      title="Photographing a Home Exterior"
      description="Will arriving prepared and actively photographing a residential property."
      orientation="wide horizontal · 16:9"
    />

    <section className="cta meet-cta">
      <p className="eyebrow">Ready when your listing is</p>
      <h2>Let’s Showcase Your Next Listing</h2>
      <p>Choose your services and reserve a convenient appointment through HD Photo Hub.</p>
      <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a Shoot <span aria-hidden="true">↗</span></a>
      <small>Fast scheduling, clear communication, and dependable delivery.</small>
    </section>

    <SiteFooter/>
  </main>;
}
