export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioVideo = {
  src: string;
  poster: string;
  title: string;
  description: string;
};

export type PortfolioCategorySlug =
  | "interiors"
  | "exteriors"
  | "twilight"
  | "aerial"
  | "video"
  | "floor-plans";

export type PortfolioCategory = {
  slug: PortfolioCategorySlug;
  title: string;
  description: string;
  coverImage: PortfolioImage;
  heroImage: PortfolioImage;
  kind: "images" | "video" | "floor-plans";
  images: readonly PortfolioImage[];
  videos?: readonly PortfolioVideo[];
};

const interiors: readonly PortfolioImage[] = [
  { src: "/portfolio/kingwood-home/IMG_1647.jpg", alt: "Spacious furnished living room with vaulted ceiling and large windows" },
  { src: "/portfolio/kingwood-home/IMG_1659.jpg", alt: "Formal dining room arranged for eight guests" },
  { src: "/portfolio/kingwood-home/IMG_1663.jpg", alt: "Bright dining room with views toward the kitchen" },
  { src: "/portfolio/kingwood-home/IMG_1667.jpg", alt: "Dining table beside two tall windows" },
  { src: "/portfolio/kingwood-home/IMG_1671.jpg", alt: "Updated white kitchen with island and breakfast area" },
  { src: "/portfolio/kingwood-home/IMG_1675.jpg", alt: "White kitchen cabinetry with stone counters and island" },
  { src: "/portfolio/kingwood-home/IMG_1679.jpg", alt: "Wide view of a bright kitchen with stainless appliances" },
  { src: "/portfolio/kingwood-home/IMG_1683.jpg", alt: "Breakfast nook surrounded by windows" },
  { src: "/portfolio/kingwood-home/IMG_1687.jpg", alt: "Breakfast area framed by two kitchen counters" },
  { src: "/portfolio/kingwood-home/IMG_1707.jpg", alt: "Primary bedroom with wood bed and neutral finishes" },
  { src: "/portfolio/kingwood-home/IMG_1719.jpg", alt: "Double vanity in a bright primary bathroom" },
  { src: "/portfolio/kingwood-home/IMG_1723.jpg", alt: "Primary bathroom with soaking tub and separate shower" },
  { src: "/portfolio/kingwood-home/IMG_1755.jpg", alt: "Secondary bedroom with blue and white bedding" },
  { src: "/portfolio/kingwood-home/IMG_1767.jpg", alt: "Bedroom with workspace and large front-facing window" },
  { src: "/portfolio/kingwood-home/IMG_1775.jpg", alt: "Children's room with patterned rug and dollhouse" },
  { src: "/portfolio/interior-0909.webp", alt: "Entry hall opening into a naturally lit living area" },
  { src: "/portfolio/interior-0913.webp", alt: "Living and dining room with fireplace and wood floors" },
  { src: "/portfolio/interior-0921.webp", alt: "White kitchen with island and French doors" },
  { src: "/portfolio/interior-0929.webp", alt: "Updated kitchen with white cabinetry and stainless appliances" },
  { src: "/portfolio/interior-0961.webp", alt: "Clean empty bedroom with neutral carpet" },
  /* REMOVED INTERIOR/INTERIOR-1172 WEBP IMAGE */
  { src: "/portfolio/interior-1192.webp", alt: "Open kitchen and living area with dark wood floors" },
  { src: "/portfolio/interior-1216.webp", alt: "Modern kitchen with a green feature wall" },
  { src: "/portfolio/interior-1256.webp", alt: "Unfurnished bedroom with balcony doors" },
  { src: "/portfolio/interior-1256-staged.webp", alt: "Virtually staged bedroom with dark wood furniture" },
  { src: "/portfolio/interior-1282.webp", alt: "Empty bedroom with corner windows" },
  { src: "/portfolio/interior-1282-staged.webp", alt: "Virtually staged child's bedroom in soft neutral colors" },
  { src: "/portfolio/interior-bedroom-1180.webp", alt: "Bright empty bedroom with two tall windows" },
  { src: "/portfolio/interior-kitchen-1196.webp", alt: "Modern kitchen with large waterfall-style island" },
  { src: "/portfolio/interior-living-room-1212.webp", alt: "Open living room with balcony doors and dark wood floors" },
  { src: "/portfolio/interior-primary-bathroom-1260.webp", alt: "Primary bathroom with glass shower and corner soaking tub" },
  { src: "/portfolio/residential-suburban-kitchen-04.webp", alt: "Bright suburban kitchen photographed from the dining area" },
  { src: "/portfolio/residential-suburban-living-room-05.webp", alt: "Open suburban living room with natural light" },
  { src: "/portfolio/residential-suburban-living-room-06.webp", alt: "Wide view of a suburban living room" },
  { src: "/portfolio/residential-suburban-bedroom-07.webp", alt: "Neutral residential bedroom" },
  { src: "/portfolio/residential-suburban-primary-bathroom-08.webp", alt: "Residential primary bathroom" },
  { src: "/portfolio/residential-suburban-primary-bathroom-09.webp", alt: "Alternate view of a residential primary bathroom" },
  { src: "/portfolio/residential-suburban-bedroom-10.webp", alt: "Bright secondary bedroom" },
  { src: "/portfolio/residential-suburban-flex-room-11.webp", alt: "Open flex room ready for multiple uses" },
  { src: "/portfolio/residential-suburban-secondary-bathroom-12.webp", alt: "Clean secondary bathroom" },
  { src: "/portfolio/residential-suburban-bedroom-13.webp", alt: "Secondary bedroom with neutral finishes" },
];

const exteriors: readonly PortfolioImage[] = [
  { src: "/portfolio/kingwood-home/IMG_1621.jpg", alt: "Front elevation of a well-kept brick suburban home" },
  { src: "/portfolio/exterior-0899.webp", alt: "Straight-on front exterior of a green suburban home" },
  { src: "/portfolio/exterior-0903.webp", alt: "Angled front exterior of a green suburban home" },
  { src: "/portfolio/exterior-1154.webp", alt: "Front elevation of three modern townhomes" },
  { src: "/portfolio/exterior-1158.webp", alt: "Angled street view of modern townhomes" },
  { src: "/portfolio/exterior-townhome-rear-1290.webp", alt: "Rear garage elevations of modern townhomes" },
  { src: "/portfolio/interior-1238.webp", alt: "Private balcony overlooking a residential neighborhood" },
  { src: "/portfolio/residential-suburban-exterior-front-01.webp", alt: "Front exterior of a two-story brick and stone suburban home" },
  { src: "/portfolio/residential-suburban-exterior-angle-02.webp", alt: "Angled exterior view of a two-story suburban home" },
  { src: "/portfolio/residential-suburban-exterior-backyard-03.webp", alt: "Fenced backyard and covered rear patio" },
];

const twilight: readonly PortfolioImage[] = [
  { src: "/portfolio/kingwood-home/Goldenhr.jpg", alt: "Brick suburban home glowing beneath a warm evening sky" },
  { src: "/portfolio/twilight-favorite.webp", alt: "Green suburban home photographed at twilight" },
  { src: "/portfolio/twilight-1154.webp", alt: "Modern townhomes photographed under a vivid twilight sky" },
  { src: "/portfolio/twilight-1158.webp", alt: "Angled twilight view of modern townhomes with illuminated windows" },
];

const aerial: readonly PortfolioImage[] = [
  { src: "/portfolio/aerial/DJI_20260731094021_0005_D.jpg", alt: "Aerial front view of a two-story home on a corner lot" },
  { src: "/portfolio/aerial/DJI_20260731093902_0002_D.jpg", alt: "High aerial view showing a home, yard, and surrounding streets" },
];

const floorPlans: readonly PortfolioImage[] = [
  { src: "/portfolio/floorplan-all.webp", alt: "Complete three-level floor plan presented side by side" },
  { src: "/portfolio/floorplan-first.webp", alt: "First-floor plan with garage, foyer, room, and bathroom" },
  { src: "/portfolio/floorplan-second.webp", alt: "Second-floor plan with kitchen, dining area, and living room" },
  { src: "/portfolio/floorplan-third.webp", alt: "Third-floor plan with bedrooms, bathrooms, laundry, and closets" },
];

export const portfolioCategories: readonly PortfolioCategory[] = [
  {
    slug: "interiors",
    title: "Interiors",
    description: "Bright, balanced rooms photographed to show layout, light, and livability.",
    coverImage: interiors[0],
    heroImage: interiors[0],
    kind: "images",
    images: interiors,
  },
  {
    slug: "exteriors",
    title: "Exteriors",
    description: "Clear curb-appeal photography that presents each home and its setting.",
    coverImage: exteriors[0],
    heroImage: exteriors[0],
    kind: "images",
    images: exteriors,
  },
  {
    slug: "twilight",
    title: "Twilight",
    description: "Warm evening exteriors designed to give listings a memorable first impression.",
    coverImage: twilight[0],
    heroImage: twilight[0],
    kind: "images",
    images: twilight,
  },
  {
    slug: "aerial",
    title: "Aerial",
    description: "Elevated views that reveal the property, lot, and surrounding context.",
    coverImage: aerial[0],
    heroImage: aerial[0],
    kind: "images",
    images: aerial,
  },
  {
    slug: "video",
    title: "Video",
    description: "Cinematic walkthroughs that help buyers understand the flow of a home.",
    coverImage: { src: "/portfolio/interior-1192.webp", alt: "Open kitchen and living area featured in a property walkthrough" },
    heroImage: { src: "/portfolio/interior-1192.webp", alt: "Open kitchen and living area featured in a property walkthrough" },
    kind: "video",
    images: [],
    videos: [
      {
        src: "/portfolio/2317-eagle-video-optimized.mp4",
        poster: "/portfolio/interior-1192.webp",
        title: "Residential Property Walkthrough",
        description: "A cinematic walkthrough designed to show room-to-room flow and key property details.",
      },
    ],
  },
  {
    slug: "floor-plans",
    title: "Floor Plans",
    description: "Clean, readable layouts that help buyers understand how each space connects.",
    coverImage: floorPlans[0],
    heroImage: floorPlans[0],
    kind: "floor-plans",
    images: floorPlans,
  },
];

export function getPortfolioCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}
