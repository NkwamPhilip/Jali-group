import { Link } from "react-router-dom";

/**
 * Temporary "Launching Soon" screen shown for every route except the
 * Creator Business Live page while the rest of the site is gated.
 * Controlled by the LAUNCHING_SOON flag in App.tsx.
 */
const ComingSoon = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#FAFAFA",
      fontFamily: "'DM Sans', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px",
    }}
  >
    <div
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "26px",
        letterSpacing: "0.08em",
        marginBottom: "36px",
      }}
    >
      JALI<span style={{ color: "#D97706" }}>.</span>
    </div>

    <div style={{ width: 48, height: 3, background: "#D97706", borderRadius: 2, marginBottom: 28 }} />

    <h1
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(52px, 10vw, 104px)",
        lineHeight: 0.95,
        letterSpacing: "0.01em",
        margin: 0,
      }}
    >
      Launching Soon
    </h1>

    <p
      style={{
        fontSize: "17px",
        color: "rgba(255,255,255,0.6)",
        maxWidth: 470,
        lineHeight: 1.75,
        margin: "20px auto 36px",
      }}
    >
      We're putting the finishing touches on something special. The full Jali Group experience goes live
      shortly.
    </p>

    <Link
      to="/cblive"
      style={{
        display: "inline-block",
        background: "#D97706",
        color: "#000",
        fontWeight: 600,
        fontSize: "15px",
        padding: "16px 42px",
        borderRadius: "8px",
        textDecoration: "none",
        letterSpacing: "0.02em",
      }}
    >
      Creator Business Live — July 4 →
    </Link>

    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "44px" }}>
      <a href="mailto:hello@jaliafriq.com" style={{ color: "#D97706", textDecoration: "none" }}>
        hello@jaliafriq.com
      </a>
    </p>
  </div>
);

export default ComingSoon;
