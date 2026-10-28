// POST /api/track — one page view or interaction from the public site.
// Always answers 204 fast, so it can never slow down or break a page.
import { track } from "../lib/analytics.mjs";

export default async (req) => {
  if (req.method === "POST") {
    try {
      const text = await req.text();
      if (text.length < 1000) await track(JSON.parse(text));
    } catch { /* bad/empty beacon: ignore */ }
  }
  return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
};

export const config = { path: "/api/track" };
