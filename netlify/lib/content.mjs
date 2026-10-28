// CMS content = DEFAULTS overlaid with whatever the founder has saved.
import { getJSON, setJSON } from "./store.mjs";
import { DEFAULTS } from "./defaults.mjs";

const ALLOWED = new Set(Object.keys(DEFAULTS));

export async function getContent() {
  const stored = (await getJSON("content", {})) || {};
  return { ...DEFAULTS, ...stored };
}

// Save only known keys (ignore anything unexpected), coerced to strings.
export async function saveContent(patch) {
  const stored = (await getJSON("content", {})) || {};
  for (const [k, v] of Object.entries(patch || {})) {
    if (ALLOWED.has(k) && typeof v === "string") stored[k] = v.slice(0, 2000);
  }
  await setJSON("content", stored);
  return { ...DEFAULTS, ...stored };
}
