import RawJgPage from "@/components/jali/RawJgPage";
import html from "./_raw/creator-label.html?raw";

const CreatorLabel = () => (
  <RawJgPage
    html={html}
    title="The Jali Creator Label — The Investment Arm of Jali Group"
    description="Built on the Angel Creator Model. We partner with creators to build their business ecosystem, and match entrepreneurs with the creators who will skyrocket their brand."
    cta={{ label: "Join a Waitlist", href: "#apply" }}
  />
);

export default CreatorLabel;
