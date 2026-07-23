import { Link } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "The Tribe", to: "/tribe" },
  { name: "Pricing", to: "/pricing" },
  { name: "Fast Track", to: "/fast-track" },
  { name: "Creator Label", to: "/creator-label" },
];

interface JpNavProps {
  cta?: { label: string; href: string };
}

const JpNav = ({ cta = { label: "See Pricing", href: "/pricing" } }: JpNavProps) => (
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

export default JpNav;
