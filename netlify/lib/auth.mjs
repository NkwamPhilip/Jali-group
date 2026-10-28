// Admin auth: the single founder password lives in the JALI_ADMIN_PASSWORD env
// var (set in Netlify → Site settings → Environment variables). The admin portal
// sends it as a Bearer token over HTTPS. Simple and adequate for a one-admin CMS.
export function checkAuth(req) {
  const pw = process.env.JALI_ADMIN_PASSWORD || "";
  if (!pw) return false;
  const header = req.headers.get("authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  return token.length > 0 && token === pw;
}
