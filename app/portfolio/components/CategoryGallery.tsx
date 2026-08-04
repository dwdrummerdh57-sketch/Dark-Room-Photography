"use client";


import { useCallback, useEffect, useRef, useState } from "react";
import type { PortfolioImage } from "../portfolioData";

type CategoryGalleryProps = {
  images: readonly PortfolioImage[];
  label: string;
  preserveImageRatio?: boolean;
};

export function CategoryGallery({ images, label, preserveImageRatio = false }: CategoryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const previousOverflow = useRef("");

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow.current;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, next, previous]);

  const closeAndRestoreFocus = () => {
    const index = activeIndex;
    close();
    window.requestAnimationFrame(() => {
      if (index !== null) triggerRefs.current[index]?.focus();
    });
  };

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return <>
    <div className={`category-gallery portfolio-grid${preserveImageRatio ? " category-gallery--plans" : ""}`}>
      {images.map((image, index) => (
        <figure className="category-gallery-item" key={image.src}>
          <button
            className="category-gallery-trigger"
            type="button"
            aria-label={`Open larger view of ${image.alt}`}
            onClick={() => setActiveIndex(index)}
            ref={(element) => { triggerRefs.current[index] = element; }}
          >
<img
  className="category-gallery-image"
  src={image.src}
  alt={image.alt}
  width={1600}
  height={1067}
  loading="lazy"
  decoding="async"
/>
          </button>
        </figure>
      ))}
    </div>

    {activeImage && (
      <div className="portfolio-lightbox-backdrop" onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeAndRestoreFocus();
      }}>
        <div className="portfolio-lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${label} image viewer`}>
          <button ref={closeButtonRef} className="portfolio-lightbox-close" type="button" aria-label="Close image viewer" onClick={closeAndRestoreFocus}>×</button>
          {images.length > 1 && <button className="portfolio-lightbox-previous" type="button" aria-label="View previous image" onClick={previous}>‹</button>}
          <figure className="portfolio-lightbox-figure">
             <img
  className="portfolio-lightbox-image"
  src={activeImage.src}
  alt={activeImage.alt}
  width={1920}
  height={1280}
  loading="eager"
  decoding="async"
/>
            <figcaption className="portfolio-lightbox-caption">{activeImage.alt}</figcaption>
          </figure>
          {images.length > 1 && <button className="portfolio-lightbox-next" type="button" aria-label="View next image" onClick={next}>›</button>}
        </div>
      </div>
    )}
  </>;
}
