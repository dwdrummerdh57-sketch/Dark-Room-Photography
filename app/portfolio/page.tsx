import PortfolioGallery from "./PortfolioGallery";
import { SiteFooter, SiteHeader } from "../SiteChrome";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

export default function PortfolioPage(){
  return <main className="portfolio-page">
    <SiteHeader active="portfolio"/>
    <section className="portfolio-hero subpage-cinematic"><figure><img src="/portfolio/twilight-1154.webp" alt="Houston townhomes photographed at golden hour by Dark Room Photography"/><figcaption><span>Selected residential work</span><strong>Every property, photographed with intention</strong></figcaption></figure><div className="subpage-hero-copy"><div><p className="eyebrow">Portfolio</p><h1>Work that gives<br/><em>every listing an edge.</em></h1></div><div><p>Explore professional photography, video, and floor plans created to help residential listings and short-term rentals make a strong first impression.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book your shoot <span aria-hidden="true">↗</span></a></div></div></section>
    <section className="portfolio-library"><div className="section-heading"><div><p className="eyebrow">Browse the work</p><h2>Professional media that lets every property shine.</h2></div><p>Use the filters to focus on the type of photography most relevant to your next listing.</p></div><PortfolioGallery/></section>
    <section className="cta portfolio-cta"><p className="eyebrow">Ready when your listing is</p><h2>Give your next property its best first impression.</h2><p>Fast turnaround, reliable scheduling, and professional media designed to make every property feel its best.</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book your shoot <span aria-hidden="true">↗</span></a></section>
    <SiteFooter/>
  </main>
}
