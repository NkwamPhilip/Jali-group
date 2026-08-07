import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/ui/SEOHead";
import JgNav, { JgCta } from "./JgNav";
import JgFooter from "./JgFooter";
import "@/styles/jg.css";

interface RawJgPageProps {
  html: string;
  title: string;
  description: string;
  cta?: JgCta;
  /** wrapper scope class — "jg" (default) or "jg-vision" */
  scope?: string;
  /** render the shared JgNav + JgFooter around the content (default true) */
  chrome?: boolean;
  /** page-specific enhancers; return a cleanup fn */
  onReady?: (root: HTMLElement) => (() => void) | void;
}

/**
 * Renders a ported Jali marketing page from trusted, build-time HTML.
 * Wires up the ticker, FAQ accordions and SPA link navigation for all pages.
 */
const RawJgPage = ({ html, title, description, cta, scope = "jg", chrome = true, onReady }: RawJgPageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Seamless marquee: duplicate the ticker contents (mirrors source JS).
    root.querySelectorAll<HTMLElement>(".ticker-track").forEach((t) => {
      t.innerHTML += t.innerHTML;
    });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const q = target.closest(".faq-q");
      if (q) {
        q.parentElement?.classList.toggle("open");
        return;
      }
      const a = target.closest("a");
      if (a) {
        const href = a.getAttribute("href") || "";
        // Intercept internal route links for SPA navigation; leave "#" and external alone.
        if (/^\/(?!\/)/.test(href)) {
          e.preventDefault();
          navigate(href);
        }
      }
    };
    root.addEventListener("click", onClick);

    const cleanup = onReady?.(root);
    return () => {
      root.removeEventListener("click", onClick);
      if (cleanup) cleanup();
    };
  }, [navigate, onReady, html]);

  return (
    <div className={scope}>
      <SEOHead title={title} description={description} />
      {chrome && <JgNav cta={cta} />}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      {chrome && <JgFooter />}
    </div>
  );
};

export default RawJgPage;
