import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "The Tribe", to: "/tribe" },
  { name: "WAMC", to: "/wamc" },
  { name: "Masterclass", to: "/cblive" },
  { name: "Pricing", to: "/pricing" },
  { name: "The Vision", to: "/the-vision" },
  { name: "For Founders", to: "/founders" }
];

export interface JgCta {
  label: string;
  href: string;
}

const Cta = ({ cta }: { cta: JgCta }) => {
  if (/^https?:\/\//.test(cta.href)) {
    return (
      <a className="nav-cta" href={cta.href} target="_blank" rel="noopener noreferrer">
        {cta.label}
      </a>
    );
  }
  if (cta.href.startsWith("#")) {
    return <a className="nav-cta" href={cta.href}>{cta.label}</a>;
  }
  return <Link className="nav-cta" to={cta.href}>{cta.label}</Link>;
};

const JgNav = ({ cta = { label: "Join The Tribe", href: "/tribe" } }: { cta?: JgCta }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav>
      <div className="wrap nav-inner">
        <Link className="logo" to="/" onClick={close}>Jali Group</Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.name}</Link>
          ))}
          <Cta cta={cta} />
          <button
            className="jg-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={`jg-mobile${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={close}>{l.name}</Link>
        ))}
      </div>
    </nav>
  );
};

export default JgNav;
