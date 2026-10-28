# Deploying Jali Group (site + CMS + tracking) on Hostinger

The whole thing is one Node.js app (`server.mjs`) that serves the built website,
the `/admin` CMS portal, and the `/api/*` routes. It needs a Hostinger plan that
runs **Node.js apps** (Business / Cloud web hosting, or a VPS). Node 18+.

## One-time setup (hPanel → Node.js app)

1. **hPanel → Advanced → Node.js → Create application**
   - Node version: **20**
   - Application root: the folder holding this repo (e.g. `domains/jaligroup.org/app`)
   - Application startup file: **`server.mjs`**
   - Application URL: your domain (jaligroup.org)

2. **Get the code there** — connect the GitHub repo (git deploy) or upload the
   files to the application root.

3. **Build + install** (hPanel "Run NPM install", then the terminal / SSH):
   ```bash
   npm install
   npm run build        # produces dist/ that the server serves
   ```

4. **Set the admin password** — hPanel → your Node app → **Environment variables**:
   ```
   JALI_ADMIN_PASSWORD = <a strong password>
   ```
   (Optional) `JALI_DATA_DIR = /home/<user>/jali-data` — a path **outside** the
   deploy folder so saved content + visit stats survive redeploys. Defaults to
   `./data` next to `server.mjs`.

5. **Restart the app.** Hostinger routes the domain to it. Done.

## Day-to-day

- **Edit content (no code, no deploy):** go to **`https://jaligroup.org/admin`**,
  sign in with `JALI_ADMIN_PASSWORD`, change the Tribe prices / countdown / periods,
  Save. It's live immediately. The same screen shows the **Visits** dashboard
  (page views, interactions, referrers).
- **Change code / add pages:** `git pull` (or re-upload) → `npm run build` →
  restart the Node app.

## Data & backups

Content and analytics are JSON files in `JALI_DATA_DIR` (default `./data`):
`content.json` and `visits:YYYY-MM-DD.json`. Back this folder up. Keep it outside
the folder that gets replaced on deploy so edits/stats aren't wiped.

## Local run

```bash
npm install
JALI_ADMIN_PASSWORD=test npm run serve   # build + start on http://localhost:3000
```

## Notes

- The public site **degrades gracefully**: if the API is ever down, pages fall
  back to the values baked into the build, so visitors always see a working site.
- The old Netlify files (`netlify/`, `netlify.toml`, `_redirects`) are harmless on
  Hostinger and are reused by `server.mjs` for the API handler code.
