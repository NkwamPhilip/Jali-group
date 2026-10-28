// Default (fallback) values for CMS-editable content. These mirror what is baked
// into the page HTML, so the site renders correctly even if the API is unavailable.
// The admin portal overrides these; anything unset falls back here.
export const DEFAULTS = {
  tribe_countdown_end: "2026-10-30T07:00:00+01:00",
  tribe_countdown_when: "Prices change on Friday 30 October, 7:00am WAT.",
  tribe_builder_price: "₦49,000",
  tribe_builder_period: "per quarter",
  tribe_core_price: "₦99,000",
  tribe_core_period: "every 6 months",
  tribe_inner_price: "₦225,000",
  tribe_inner_period: "per year",
};

// Field metadata for the admin editor (label + input type).
export const FIELDS = [
  { key: "tribe_countdown_end", label: "Countdown ends (ISO date-time, WAT = +01:00)", type: "text" },
  { key: "tribe_countdown_when", label: "Countdown caption", type: "text" },
  { key: "tribe_builder_price", label: "Builder — price", type: "text" },
  { key: "tribe_builder_period", label: "Builder — period", type: "text" },
  { key: "tribe_core_price", label: "Core — price", type: "text" },
  { key: "tribe_core_period", label: "Core — period", type: "text" },
  { key: "tribe_inner_price", label: "Inner Circle — price", type: "text" },
  { key: "tribe_inner_period", label: "Inner Circle — period", type: "text" },
];
