/*
 * "Join 2000+ founders and creators…" photo wall.
 *
 * ▸ TO ADD / REMOVE CAROUSEL PHOTOS:
 *   Just drop image files (jpg / jpeg / png / webp) into:
 *       src/assets/stories/
 *   They appear here automatically, in filename order. No code edits needed.
 *   (Square images — like the #Jaliafricastories cards — look best.)
 *
 * If that folder is empty, it falls back to the placeholder photos below.
 */

// Auto-import every image in src/assets/stories/
const storyModules = import.meta.glob(
  "../../assets/stories/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const storyPhotos = Object.keys(storyModules)
  .sort()
  .map((k) => storyModules[k]);

// Fallback placeholders (existing client photos) until story photos are added.
const fallback = ["/dre.jpg", "/steph.jpeg", "/iya.jpeg", "/grace.jpeg", "/iyabo.jpeg"];

const photos = storyPhotos.length ? storyPhotos : fallback;

interface CommunityCarouselProps {
  heading?: string;
  alt?: boolean;
}

const CommunityCarousel = ({
  heading = "Join 2000+ founders and creators building profitable businesses the Jali way.",
  alt = false,
}: CommunityCarouselProps) => {
  // duplicated once for a seamless infinite loop
  const loop = [...photos, ...photos];

  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="wrap-wide" style={{ textAlign: "center" }}>
        <h2 className="h2" style={{ maxWidth: "820px", margin: "0 auto" }}>
          {heading}
        </h2>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((src, i) => (
            <div className="marquee-item" key={i}>
              <img src={src} alt="Jali community member" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCarousel;
