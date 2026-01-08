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
  title = "Jali Group - Your partner for Influence and Profit",
  description = "Global business growth consulting firm with magical specialty in Brand Storytelling & Founder-Led Growth.",
  keywords = "public speaking, business consulting, online courses, storytelling, brand strategy, business growth, transformation, Africa, professional development",
  image = "/jali.png",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.title = title;

    const updateMetaTag = (
      property: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // --- STANDARD META ---
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Jali Group");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // --- OPEN GRAPH (WhatsApp, Facebook, LinkedIn) ---
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:site_name", "Jali Group", true);

    // FORCING LARGE PREVIEW SIZE
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:type", "image/png", true);

    // --- TWITTER ---
    // "summary_large_image" is what makes the logo appear big and centered vs a small square on the side
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@jaliafrica");

    // --- THEMING ---
    updateMetaTag("theme-color", "#000000");
    updateMetaTag("msapplication-TileColor", "#000000");
    updateMetaTag("application-name", "Jali Group");

    // --- FAVICON & CANONICAL ---
    updateLinkTag("icon", "/jali.png");
    updateLinkTag("apple-touch-icon", "/jali.png");
    updateLinkTag("canonical", url);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;