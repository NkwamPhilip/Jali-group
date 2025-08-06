import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Jali Africa - Inspiring Growth Through Ideas, Talks, and Transformation",
  description = "Professional public speaking, business growth consulting, and transformational online courses. We help individuals and businesses unlock their potential through strategic storytelling and growth systems.",
  keywords = "public speaking, business consulting, online courses, storytelling, brand strategy, business growth, transformation, Africa, professional development",
  image = "/og-image.jpg",
  url = window.location.href,
  type = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Jali Africa");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:site_name", "Jali Africa", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@jaliafrica");

    // Additional SEO tags
    updateMetaTag("theme-color", "#000000");
    updateMetaTag("msapplication-TileColor", "#000000");
    updateMetaTag("application-name", "Jali Africa");

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;