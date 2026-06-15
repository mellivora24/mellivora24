import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contacts", label: "Contacts" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-bar ${scrolled ? "nav-bar--scrolled" : ""}`}>
      <div className="nav-bar__inner">
        <NavLink
          to="/"
          className="nav-bar__logo"
          onClick={() => setOpen(false)}
        >
          <span className="text-glow">Q</span>uyết
          <span className="text-glow">.</span>Thành
        </NavLink>

        <nav className={`nav-bar__links ${open ? "nav-bar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-bar__link ${isActive ? "nav-bar__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav-bar__toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
