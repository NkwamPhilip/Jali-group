import RawJgPage from "@/components/jali/RawJgPage";
import html from "./_raw/the-vision.html?raw";
import "@/styles/vision.css";

const TheVision = () => (
  <RawJgPage
    html={html}
    title="Jali Group / The Vision"
    description="The most valuable room in the world does not exist yet. Creators have attention and no ownership; entrepreneurs have ownership and no attention. We are building the room where they meet as equals."
    scope="jg-vision"
    chrome={false}
  />
);

export default TheVision;
