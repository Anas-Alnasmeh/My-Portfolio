import { HiOutlineArrowUp } from "react-icons/hi2";
import { PROFILE } from "../utils/constants";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="navbar__logo-bracket">{"<"}</span>
            {PROFILE.name}
            <span className="navbar__logo-bracket">{"/>"}</span>
          </span>
          <p className="footer__tagline">{PROFILE.tagline}</p>
        </div>

        <p className="footer__meta">
          © {year} {PROFILE.name}. Built with React &amp; Framer Motion.
        </p>

        <button className="footer__top" onClick={scrollTop} aria-label="Scroll back to top">
          <HiOutlineArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
