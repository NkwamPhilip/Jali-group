// Lightweight visit/interaction tracing, stored one JSON bucket per day.
// Volume on a marketing site is low, so read-modify-write is fine here.
import { getJSON, setJSON } from "./store.mjs";

const today = () => new Date().toISOString().slice(0, 10);
const bump = (obj, key) => { if (key) obj[key] = (obj[key] || 0) + 1; };

export async function track(payload = {}) {
  const key = "visits:" + today();
  const b = (await getJSON(key, null)) || { total: 0, pages: {}, events: {}, referrers: {} };
  const event = String(payload.event || "view");
  if (event === "view") {
    b.total += 1;
    bump(b.pages, String(payload.path || "/").slice(0, 120));
    const ref = String(payload.ref || "");
    if (ref) { try { bump(b.referrers, new URL(ref).hostname.replace(/^www\./, "").slice(0, 80)); } catch { /* ignore */ } }
  } else {
    bump(b.events, (event + (payload.label ? ":" + String(payload.label).slice(0, 60) : "")));
  }
  await setJSON(key, b);
}

export async function summary(days = 14) {
  const out = [];
  const now = new Date();
  for (let i = 0; i < Math.min(days, 90); i++) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    const day = d.toISOString().slice(0, 10);
    const b = await getJSON("visits:" + day, null);
    out.push({ day, total: b?.total || 0, pages: b?.pages || {}, events: b?.events || {}, referrers: b?.referrers || {} });
  }
  return out.reverse();
}
