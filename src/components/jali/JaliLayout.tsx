import { ReactNode } from "react";
import SEOHead from "@/components/ui/SEOHead";
import JaliNav from "./JaliNav";
import JaliFooter from "./JaliFooter";
import "@/styles/jali.css";

type Page = "home" | "tribe" | "founders" | "wamc" | "about" | "contact";

interface JaliLayoutProps {
  page: Page;
  children: ReactNode;
  title?: string;
  description?: string;
}

const JaliLayout = ({ page, children, title, description }: JaliLayoutProps) => {
  return (
    <div className={`jali-site page-${page}`}>
      <SEOHead title={title} description={description} />
      <JaliNav />
      {children}
      <JaliFooter />
    </div>
  );
};

export default JaliLayout;
