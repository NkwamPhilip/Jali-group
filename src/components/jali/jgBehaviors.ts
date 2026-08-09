// Small vanilla-JS enhancers for the ported Jali pages (rendered via innerHTML).
// Each returns a cleanup function.

export function initSlider(root: HTMLElement): (() => void) | void {
  const sl = root.querySelector<HTMLElement>(".slider");
  if (!sl) return;
  const slides = Array.from(sl.querySelectorAll<HTMLElement>(".slide"));
  const dots = Array.from(sl.querySelectorAll<HTMLElement>(".sdot"));
  const btns = Array.from(sl.querySelectorAll<HTMLElement>(".slider-btn"));
  if (slides.length === 0) return;
  let idx = 0;
  let timer: ReturnType<typeof setInterval>;
  const render = () => {
    slides.forEach((s, k) => s.classList.toggle("active", k === idx));
    dots.forEach((d, k) => d.classList.toggle("active", k === idx));
  };
  const reset = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      render();
    }, 4500);
  };
  const go = (i: number) => {
    idx = (i + slides.length) % slides.length;
    render();
    reset();
  };
  if (btns[0]) btns[0].onclick = () => go(idx - 1);
  if (btns[1]) btns[1].onclick = () => go(idx + 1);
  dots.forEach((d, k) => (d.onclick = () => go(k)));
  render();
  reset();
  return () => clearInterval(timer);
}

// "What's On" carousel on the Tribe page (.jc / .jc-slide.on / .jc-btn[data-step] / .jc-dot[data-i]).
export function initJcCarousel(root: HTMLElement): (() => void) | void {
  const jc = root.querySelector<HTMLElement>(".jc");
  if (!jc) return;
  const slides = Array.from(jc.querySelectorAll<HTMLElement>(".jc-slide"));
  const dots = Array.from(jc.querySelectorAll<HTMLElement>(".jc-dot"));
  const btns = Array.from(jc.querySelectorAll<HTMLElement>(".jc-btn"));
  if (slides.length === 0) return;
  let idx = 0;
  let timer: ReturnType<typeof setInterval>;
  const render = () => {
    slides.forEach((s, k) => s.classList.toggle("on", k === idx));
    dots.forEach((d, k) => d.classList.toggle("on", k === idx));
  };
  const reset = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      render();
    }, 5000);
  };
  const go = (i: number) => {
    idx = (i + slides.length) % slides.length;
    render();
    reset();
  };
  btns.forEach((b) => {
    const step = parseInt(b.dataset.step || "0", 10);
    if (step) b.onclick = () => go(idx + step);
  });
  dots.forEach((d) => {
    const i = parseInt(d.dataset.i || "0", 10);
    d.onclick = () => go(i);
  });
  render();
  reset();
  return () => clearInterval(timer);
}

// Waitlist countdown to a fixed deadline (ms epoch). Mirrors the source page JS.
export function initWaitlistTimer(root: HTMLElement, endMs: number): (() => void) | void {
  const el = root.querySelector<HTMLElement>("#wlClock");
  if (!el) return;
  const box = el.parentElement;
  if (!box) return;
  const d = el.querySelector<HTMLElement>("[data-d]");
  const h = el.querySelector<HTMLElement>("[data-h]");
  const m = el.querySelector<HTMLElement>("[data-m]");
  const s = el.querySelector<HTMLElement>("[data-s]");
  if (!d || !h || !m || !s) return;
  const pad = (n: number) => (n < 10 ? "0" + n : "" + n);
  let timer: ReturnType<typeof setInterval>;
  const tick = () => {
    const left = endMs - Date.now();
    if (left <= 0) {
      d.textContent = h.textContent = m.textContent = s.textContent = "00";
      box.classList.add("over");
      const w = box.querySelector(".wl-when");
      if (w) w.textContent = "Waitlist pricing has closed. All tiers are now at full price.";
      clearInterval(timer);
      return;
    }
    const t = Math.floor(left / 1000);
    d.textContent = pad(Math.floor(t / 86400));
    h.textContent = pad(Math.floor(t / 3600) % 24);
    m.textContent = pad(Math.floor(t / 60) % 60);
    s.textContent = pad(t % 60);
  };
  tick();
  timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
}

// Waitlist deadline used on Pricing: Monday 10 August 2026, 09:00 UK time.
export const WAITLIST_END = new Date("2026-08-10T09:00:00+01:00").getTime();
// Tribe waitlist deadline: Friday 14 August 2026, 09:00 UK time.
export const TRIBE_WAITLIST_END = new Date("2026-08-11T23:59:00+01:00").getTime();
