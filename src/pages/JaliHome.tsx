import RawJgPage from "@/components/jali/RawJgPage";
import { initSlider } from "@/components/jali/jgBehaviors";
import html from "./_raw/home.html?raw";

const JaliHome = () => (
  <RawJgPage
    html={html}
    title="Jali Group — Build a Profitable Business From Your Story"
    description="Turn who you are and what you know into what brings you money, opportunities, and visibility, consistently. The room where creators and entrepreneurs build."
    cta={{ label: "Join The Tribe", href: "/tribe" }}
    onReady={initSlider}
  />
);

export default JaliHome;
