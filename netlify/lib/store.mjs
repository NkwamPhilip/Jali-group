// Tiny JSON key/value store on the local filesystem (data kept in JALI_DATA_DIR,
// default ./data next to the server). Matches the humanstock pattern: simple,
// file-based, backup-able. Every call is wrapped so storage never throws into a
// request handler — reads fall back, writes report false.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DIR = process.env.JALI_DATA_DIR || path.join(process.cwd(), "data");
const fileFor = (key) => path.join(DIR, String(key).replace(/[^a-z0-9_.:-]/gi, "_") + ".json");

export async function getJSON(key, fallback = null) {
  try {
    return JSON.parse(await readFile(fileFor(key), "utf8"));
  } catch {
    return fallback;
  }
}

export async function setJSON(key, value) {
  try {
    await mkdir(DIR, { recursive: true });
    await writeFile(fileFor(key), JSON.stringify(value, null, 2));
    return true;
  } catch (e) {
    console.error("store.setJSON failed", key, e?.message);
    return false;
  }
}
