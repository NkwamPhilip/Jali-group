import RawJgPage from "@/components/jali/RawJgPage";
import { initWaitlistTimer, WAITLIST_END } from "@/components/jali/jgBehaviors";
import html from "./_raw/pricing.html?raw";

const onReady = (root: HTMLElement) => initWaitlistTimer(root, WAITLIST_END);

const JaliPricing = () => (
  <RawJgPage
    html={html}
    title="Pricing — Jali Group"
    description="Every way into Jali Group in one place. The Tribe, the WAMC accelerator, the Creator-Founder service and the Creator Label."
    cta={{ label: "Join The Tribe", href: "#tribe" }}
    onReady={onReady}
  />
);

export default JaliPricing;
