import Link from "next/link";
import { SiteFooter, SiteHeader } from "../SiteChrome";
import { portfolioCategories } from "./portfolioData";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";
const heroImage = {
  src: "/portfolio/kingwood-home/Goldenhr.jpg",
  alt: "Angled exterior view of a professionally photographed Houston-area home",
};
export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader active="portfolio" />

<section
  className="page-hero portfolio-hero"
  aria-label="Dark Room Real Estate Photography portfolio"
>
  <img
    src={heroImage.src}
    alt={heroImage.alt}
    className="page-hero-image"
  />
</section>

      <section className="portfolio-categories section" aria-labelledby="portfolio-categories-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Browse by media</p>
            <h2 id="portfolio-categories-title">Explore the portfolio.</h2>
          </div>
          <p>Select a gallery to see work from properties across the Houston area.</p>
        </div>

        <div className="portfolio-category-grid">
          {portfolioCategories.map((category) => {
            const itemCount = category.kind === "video" ? category.videos?.length ?? 0 : category.images.length;
            return (
              <Link className="portfolio-category-card" href={`/portfolio/${category.slug}`} key={category.slug}>
                <div className="portfolio-category-image-wrap">
                  <img src={category.coverImage.src} alt={category.coverImage.alt} className="portfolio-category-image" loading="lazy" />
                </div>
                <div className="portfolio-category-card-copy">
                  <div>
                    <p className="eyebrow">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span className="portfolio-category-link">View Gallery <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="cta" id="contact">
        <p className="eyebrow">Ready for standout listing media?</p>
        <h2>Showcase your next listing with confidence.</h2>
        <p>Choose your services and reserve an appointment through HD Photo Hub.</p>
        <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a Photography Session <span aria-hidden="true">↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
