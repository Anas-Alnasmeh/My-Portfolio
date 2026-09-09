import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { NAV_ITEMS } from "../data/nav";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "./navbar.css";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("hero");
          }}
          aria-label="Back to top"
        >
          <span className="navbar__logo-bracket">{"<"}</span>
          AK
          <span className="navbar__logo-bracket">{"/>"}</span>
        </a>

        <nav className="navbar__tabs" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                className={`navbar__tab ${isActive ? "navbar__tab--active" : ""}`}
                onClick={() => handleNavigate(item.id)}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="navbar__tab-dot" aria-hidden="true" />
                <span className="navbar__tab-file">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="navbar__tab-indicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.nav
          id="mobile-menu"
          className="navbar__mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Mobile section navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`navbar__mobile-link ${activeId === item.id ? "navbar__mobile-link--active" : ""}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
              <span className="navbar__mobile-file">{item.file}</span>
            </button>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
