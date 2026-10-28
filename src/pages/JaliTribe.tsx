import { useCallback } from "react";
import RawJgPage from "@/components/jali/RawJgPage";
import { initWaitlistTimer, initJcCarousel, TRIBE_WAITLIST_END } from "@/components/jali/jgBehaviors";
import { useContent } from "@/services/content";
import html from "./_raw/tribe.html?raw";

const JaliTribe = () => {
  const content = useContent();
  // Countdown deadline comes from the CMS (falls back to the baked-in default).
  const onReady = useCallback(
    (root: HTMLElement) => {
      const end = Date.parse(content.tribe_countdown_end) || TRIBE_WAITLIST_END;
      const stopTimer = initWaitlistTimer(root, end);
      const stopCarousel = initJcCarousel(root);
      return () => {
        stopTimer?.();
        stopCarousel?.();
      };
    },
    [content],
  );

  return (
    <RawJgPage
      html={html}
      title="The Jali Tribe — A Room For Creators & Entrepreneurs"
      description="An international community of creators and entrepreneurs building profitable businesses. AI tools, coaching, live sessions and physical events."
      cta={{ label: "Join Now", href: "#pricing" }}
      onReady={onReady}
    />
  );
};

export default JaliTribe;
