import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./NavBar.css";

const NAV_LINKS = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/projects", label: "projects" },
  { to: "/services", label: "services" },
  { to: "/contacts", label: "contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const { scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <header className={`nav-bar ${scrolled ? "nav-bar--scrolled" : ""}`}>
      <div className="nav-bar__inner">
        <NavLink
          to="/"
          className="nav-bar__logo"
          onClick={() => setOpen(false)}
        >
          <span className="text-glow">Quyết Thành</span>
        </NavLink>

        <nav className={`nav-bar__links ${open ? "nav-bar__links--open" : ""}`}>
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ animationDelay: `${i * 40}ms` }}
              className={({ isActive }) =>
                `nav-bar__link ${isActive ? "nav-bar__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {t(link.label)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-bar__lang">
          <button
            className={`nav-bar__lang-btn ${
              i18n.language === "en" ? "nav-bar__lang-btn--active" : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={`nav-bar__lang-btn ${
              i18n.language === "vi" ? "nav-bar__lang-btn--active" : ""
            }`}
            onClick={() => changeLanguage("vi")}
          >
            VI
          </button>
        </div>

        <button
          className={`nav-bar__toggle ${open ? "nav-bar__toggle--open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav-bar__progress" style={{ width: `${progress}%` }} />
    </header>
  );
}
