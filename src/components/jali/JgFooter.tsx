import { Link } from "react-router-dom";

const JgFooter = () => (
  <footer>
    <div className="wrap foot">
      <Link className="logo" to="/">Jali Group</Link>
      <p>
        <a href="mailto:hello@jaliafriq.com">hello@jaliafriq.com</a> ·{" "}
        <a href="https://jaligroup.org">jaligroup.org</a> · © 2026 Jali Group
      </p>
    </div>
  </footer>
);

export default JgFooter;
