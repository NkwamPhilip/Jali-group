// GET /api/content — public, cacheable-ish content the site reads at load.
import { getContent } from "../lib/content.mjs";

export default async () => {
  const content = await getContent();
  return new Response(JSON.stringify(content), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
  });
};

export const config = { path: "/api/content" };
