import RawJgPage from "@/components/jali/RawJgPage";
import { initWaitlistTimer, WAITLIST_END } from "@/components/jali/jgBehaviors";
import html from "./_raw/tribe.html?raw";

const onReady = (root: HTMLElement) => initWaitlistTimer(root, WAITLIST_END);

const JaliTribe = () => (
  <RawJgPage
    html={html}
    title="The Jali Tribe — A Room For Creators & Entrepreneurs"
    description="An international community of creators and entrepreneurs building profitable businesses. AI tools, studios, coaching, live sessions and physical events."
    cta={{ label: "Join Now", href: "#pricing" }}
    onReady={onReady}
  />
);

export default JaliTribe;
