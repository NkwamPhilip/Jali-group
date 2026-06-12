import { Link } from "react-router-dom";

const JaliFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", marginBottom: "14px" }}>
        <Link to="/">Home</Link>
        <Link to="/tribe">The Tribe</Link>
        <Link to="/founders">For Founders</Link>
        <Link to="/wamc">WAMC</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </p>
      <p>
        © {year} Jali Group. <a href="mailto:support@jaligroup.org">support@jaligroup.org</a>
        {" · "}
        <a href="https://jaligroup.org">jaligroup.org</a>
      </p>
    </footer>
  );
};

export default JaliFooter;
