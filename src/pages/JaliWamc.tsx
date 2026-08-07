import RawJgPage from "@/components/jali/RawJgPage";
import html from "./_raw/wamc.html?raw";

const JaliWamc = () => (
  <RawJgPage
    html={html}
    title="WAMC — The 6-Week Growth Accelerator | Jali Group"
    description="The exact system that took one creator from 1,000 to 800,000+ followers, compressed into a 6-week sprint with a coach in your corner."
    cta={{ label: "Join The Waitlist", href: "#join" }}
  />
);

export default JaliWamc;
