import { ReactNode, useState } from "react";
import SEOHead from "@/components/ui/SEOHead";
import JaliNav from "./JaliNav";
import JaliFooter from "./JaliFooter";
import "@/styles/jali.css";

type Page = "home" | "tribe" | "founders" | "wamc" | "about" | "contact";
type Theme = "dark" | "light";

interface JaliLayoutProps {
  page: Page;
  children: ReactNode;
  title?: string;
  description?: string;
}

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem("jali-theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "dark"; // dark is the default
};

const JaliLayout = ({ page, children, title, description }: JaliLayoutProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () =>
    setTheme((t) => {
      const next: Theme = t === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem("jali-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });

  return (
    <div className={`jali-site page-${page}${theme === "light" ? " theme-light" : ""}`}>
      <SEOHead title={title} description={description} />
      <JaliNav theme={theme} onToggleTheme={toggleTheme} />
      {children}
      <JaliFooter />
    </div>
  );
};

export default JaliLayout;
