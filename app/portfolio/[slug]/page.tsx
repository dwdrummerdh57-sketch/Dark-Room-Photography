import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../SiteChrome";
import { CategoryGallery } from "../components/CategoryGallery";
import { getPortfolioCategory, portfolioCategories } from "../portfolioData";

const bookingUrl = "https://darkroomrealestatephotographywg.hd.pics/order";

export function generateStaticParams() {
  return portfolioCategories.map(({ slug }) => ({ slug }));
}

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getPortfolioCategory(slug);

  if (!category) notFound();

  return (
    <main className="portfolio-category-page">
      <SiteHeader active="portfolio" />

      <section className="page-hero portfolio-detail-hero">
        <img src={category.heroImage.src} alt={category.heroImage.alt} className="page-hero-image" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section className="portfolio-category-content section" aria-labelledby="category-gallery-title">
        <div className="portfolio-category-header">
          <Link className="text-link portfolio-back-link" href="/portfolio"><span aria-hidden="true">←</span> Back to Portfolio</Link>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="category-gallery-title">{category.title}</h2>
            </div>
            <p>{category.description}</p>
          </div>
        </div>

        {category.kind === "video" ? (
          <div className="portfolio-video-grid">
            {(category.videos ?? []).map((video) => (
              <article className="portfolio-video-card" key={video.src}>
                <video controls preload="metadata" poster={video.poster} aria-label={video.title}>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <div className="portfolio-video-copy"><h3>{video.title}</h3><p>{video.description}</p></div>
              </article>
            ))}
          </div>
        ) : (
          <CategoryGallery
            images={category.images}
            label={category.title}
            preserveImageRatio={category.kind === "floor-plans"}
          />
        )}
      </section>

      <section className="cta" id="contact">
        <p className="eyebrow">Have a property ready?</p>
        <h2>Showcase your next listing with confidence.</h2>
        <p>Choose your services and reserve an appointment through HD Photo Hub.</p>
        <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a Photography Session <span aria-hidden="true">↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
