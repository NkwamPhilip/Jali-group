import { Link } from "react-router-dom";

const links = [
  { name: "The Tribe", to: "/tribe" },
  { name: "Pricing", to: "/pricing" },
  { name: "The Vision", to: "/the-vision" },
];

export interface JgCta {
  label: string;
  href: string;
}

const JgNav = ({ cta = { label: "Join The Tribe", href: "/tribe" } }: { cta?: JgCta }) => (
  <nav>
    <div className="wrap nav-inner">
      <Link className="logo" to="/">Jali Group</Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link key={l.to} to={l.to}>{l.name}</Link>
        ))}
        {cta.href.startsWith("#") ? (
          <a className="nav-cta" href={cta.href}>{cta.label}</a>
        ) : (
          <Link className="nav-cta" to={cta.href}>{cta.label}</Link>
        )}
      </div>
    </div>
  </nav>
);

export default JgNav;
