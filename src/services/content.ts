// CMS content: baked-in defaults, overlaid at runtime with /api/content so the
// founder can edit prices, the countdown and copy without a code change. If the
// API is unavailable the defaults render, so the site can never break.
import { useEffect, useState } from "react";
import defaults from "@/content/defaults.json";

export type Content = Record<string, string>;

const DEFAULTS = defaults as Content;
let cache: Content | null = null;
let inflight: Promise<Content> | null = null;

export function loadContent(): Promise<Content> {
  if (cache) return Promise.resolve(cache);
  if (inflight) return inflight;
  inflight = fetch("/api/content")
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      cache = data && typeof data === "object" ? { ...DEFAULTS, ...data } : { ...DEFAULTS };
      return cache;
    })
    .catch(() => {
      cache = { ...DEFAULTS };
      return cache;
    });
  return inflight;
}

/** Replace [[token]] placeholders in a string with content (or defaults). */
export function fillTokens(html: string, content: Content): string {
  return html.replace(/\[\[([a-z0-9_]+)\]\]/g, (m, key) => content[key] ?? DEFAULTS[key] ?? m);
}

/** React hook — starts with defaults, swaps in live content once fetched. */
export function useContent(): Content {
  const [content, setContent] = useState<Content>(cache || DEFAULTS);
  useEffect(() => {
    let alive = true;
    loadContent().then((c) => { if (alive) setContent(c); });
    return () => { alive = false; };
  }, []);
  return content;
}
