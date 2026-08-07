import RawJgPage from "@/components/jali/RawJgPage";
import html from "./_raw/founders.html?raw";

const CreatorFounder = () => (
  <RawJgPage
    html={html}
    title="The Creator-Founder Service — Jali Group"
    description="A bespoke, done-with-you service for founders. We handle strategy, content, and execution. You show up 4 hours a month and become the authority in your industry."
    cta={{ label: "Book A 30-Minute Call", href: "#book" }}
  />
);

export default CreatorFounder;
