// Jali Group as one Node.js app: the built site (dist/), the /admin CMS portal,
// and every /api route. This is what runs on Hostinger (hPanel → Node.js app) or
// any host with Node 18+.
//   npm run build && npm start    → http://localhost:3000
// Settings come from the environment and from a .env file beside this one
// (see .env.example). Data is JSON files in JALI_DATA_DIR (default ./data). Back it up.
import http from "node:http";
import { readFileSync, existsSync, statSync, createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

// --- .env loader (no dependency; values already in the environment win) ---
const envFile = path.join(ROOT, ".env");
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m || line.trim().startsWith("#")) continue;
    let v = m[2].trim();
    if (/^(["']).*\1$/.test(v)) v = v.slice(1, -1);
    if (process.env[m[1]] === undefined || process.env[m[1]] === "") process.env[m[1]] = v;
  }
}
process.env.JALI_DATA_DIR ||= path.join(ROOT, "data");

// API handlers (web Request → Response), shared with the serverless build.
const [content, track, admin] = await Promise.all([
  import("./netlify/functions/content.mjs"),
  import("./netlify/functions/track.mjs"),
  import("./netlify/functions/admin.mjs"),
]);
const ROUTES = [
  ["/api/content", content.default],
  ["/api/track", track.default],
  ["/api/admin", admin.default],
];

const DIST = path.join(ROOT, "dist");
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".mp4": "video/mp4", ".webm": "video/webm",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".map": "application/json", ".pdf": "application/pdf",
};
const SECURITY = { "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin" };

function sendFile(res, file, extra = {}, status = 200) {
  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  const immutable = file.includes(`${path.sep}assets${path.sep}`);
  res.writeHead(status, { "Content-Type": type, "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "no-cache", ...SECURITY, ...extra });
  createReadStream(file).pipe(res);
}

function serveStatic(req, res, pathname) {
  if (pathname === "/admin" || pathname === "/admin/") pathname = "/admin.html";
  const file = path.normalize(path.join(DIST, decodeURIComponent(pathname)));
  if (!file.startsWith(DIST + path.sep) && file !== DIST) { res.writeHead(400); return res.end(); }
  if (existsSync(file) && statSync(file).isFile()) {
    return sendFile(res, file, pathname === "/admin.html" ? { "X-Robots-Tag": "noindex, nofollow", "X-Frame-Options": "DENY" } : {});
  }
  // SPA fallback: any non-file path renders the app (client-side routing).
  const index = path.join(DIST, "index.html");
  if (existsSync(index)) return sendFile(res, index, {}, pathname === "/index.html" ? 200 : 200);
  res.writeHead(503, { "Content-Type": "text/plain" });
  res.end("Site not built yet. Run: npm run build");
}

async function serveApi(req, res, handler) {
  const chunks = [];
  let size = 0;
  for await (const c of req) { chunks.push(c); size += c.length; if (size > 2e6) { res.writeHead(413); return res.end(); } }
  const proto = (req.headers["x-forwarded-proto"] || "").split(",")[0] || (req.socket.encrypted ? "https" : "http");
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const request = new Request(`${proto}://${host}${req.url}`, {
    method: req.method,
    headers: Object.entries(req.headers).filter(([, v]) => typeof v === "string"),
    body: ["GET", "HEAD"].includes(req.method) ? undefined : Buffer.concat(chunks),
  });
  const response = await handler(request);
  const headers = { ...SECURITY };
  response.headers.forEach((v, k) => { headers[k] = v; });
  res.writeHead(response.status, headers);
  const buf = Buffer.from(await response.arrayBuffer());
  res.end(buf.length ? buf : undefined);
}

const server = http.createServer(async (req, res) => {
  const pathname = (req.url || "/").split("?")[0];
  try {
    const hit = ROUTES.find(([p]) => pathname === p || pathname.startsWith(p + "/"));
    if (hit) return await serveApi(req, res, hit[1]);
    if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); return res.end(); }
    serveStatic(req, res, pathname);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Something went wrong" }));
  }
});

const port = Number(process.env.PORT || 3000);
server.listen(port, () => console.log(`Jali Group running on port ${port}. Data in ${process.env.JALI_DATA_DIR}`));
