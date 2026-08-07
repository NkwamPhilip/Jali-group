import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "The Tribe", to: "/tribe" },
  { name: "For Founders", to: "/founders" },
  { name: "WAMC", to: "/wamc" },
  { name: "Pricing", to: "/pricing" },
  { name: "The Vision", to: "/the-vision" },
  { name: "CB-Live", to: "/live" },
  { name: "About", to: "/about" },
];

interface JaliNavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const JaliNav = ({ theme, onToggleTheme }: JaliNavProps) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          JALI<span>.</span>
        </Link>

        <div className="nav-right">
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={isActive(l.to) ? "active" : ""}>
                {l.name}
              </Link>
            ))}
            <Link to="/tribe" className="nav-cta">
              Join The Tribe
            </Link>
          </div>

          <button
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.name}
          </Link>
        ))}
        <Link to="/tribe" className="cta" onClick={() => setOpen(false)}>
          Join The Tribe
        </Link>
      </div>
    </>
  );
};

export default JaliNav;
