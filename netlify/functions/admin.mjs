// /api/admin — founder-only. All actions require the Bearer password except that
// "login" simply reports whether the supplied password is valid.
import { checkAuth } from "../lib/auth.mjs";
import { getContent, saveContent } from "../lib/content.mjs";
import { summary } from "../lib/analytics.mjs";
import { FIELDS } from "../lib/defaults.mjs";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export default async (req) => {
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "";
  const authed = checkAuth(req);

  if (action === "login") return json({ ok: authed });
  if (!authed) return json({ error: "unauthorized" }, 401);

  if (action === "content") return json({ content: await getContent(), fields: FIELDS });
  if (action === "save") {
    let patch = {};
    try { patch = await req.json(); } catch { return json({ error: "bad body" }, 400); }
    return json({ content: await saveContent(patch), saved: true });
  }
  if (action === "visits") return json({ visits: await summary(Number(url.searchParams.get("days") || 14)) });
  return json({ error: "unknown action" }, 404);
};

export const config = { path: "/api/admin" };
