// Fire-and-forget interaction tracing to /api/track (see netlify/functions/track.mjs).
// Uses sendBeacon so it never blocks navigation; silently no-ops on failure.
function send(payload: Record<string, unknown>) {
  try {
    const body = JSON.stringify(payload);
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", body);
    } else {
      fetch("/api/track", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  } catch { /* ignore */ }
}

export function trackView(path: string) {
  send({ event: "view", path, ref: typeof document !== "undefined" ? document.referrer : "" });
}

export function trackEvent(label: string) {
  send({ event: "click", label });
}
