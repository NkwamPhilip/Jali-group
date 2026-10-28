// Tiny JSON key/value store on Netlify Blobs. On Netlify Functions, getStore()
// is configured automatically. Everything is wrapped so a storage hiccup never
// throws into a request handler — reads fall back, writes report false.
import { getStore } from "@netlify/blobs";

function store() {
  return getStore({ name: "jali-cms", consistency: "strong" });
}

export async function getJSON(key, fallback = null) {
  try {
    const v = await store().get(key, { type: "json" });
    return v == null ? fallback : v;
  } catch (e) {
    console.error("store.getJSON failed", key, e?.message);
    return fallback;
  }
}

export async function setJSON(key, value) {
  try {
    await store().setJSON(key, value);
    return true;
  } catch (e) {
    console.error("store.setJSON failed", key, e?.message);
    return false;
  }
}
