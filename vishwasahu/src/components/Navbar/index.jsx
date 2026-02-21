import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setMenuOpen((p) => !p);
  const close = () => setMenuOpen(false);

  const navTo = (path) => {
    close();
    navigate(path);
  };

  return (
    <>
      <nav className="navbar">
        {/* ── Logo ── */}
        <button className="nav-logo-btn" onClick={() => navTo("/")}>
          <img
            src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771358530/ChatGPT_Image_Feb_18_2026_01_31_19_AM_wqyg1p.png"
            alt="CPSTECH Solutions logo"
            className="nav-logo-img"
          />
          <div className="nav-brand">
            <span className="nav-brand-name">Vishwa Sahu</span>
            <span className="nav-brand-company">CPSTECH Solutions</span>
          </div>
        </button>

        {/* ── Desktop links ── */}
        <ul className="nav-links">
          {["/", "/about", "/services", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Services", "Contact"];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
          
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="drawer-overlay" onClick={close}>
          <nav className="drawer" onClick={(e) => e.stopPropagation()}>
            <ul>
              {["/", "/about", "/services", "/contact"].map((path, i) => {
                const labels = ["Home", "About", "Services", "Contact"];
                return (
                  <li key={path}>
                    <button className="drawer-link" onClick={() => navTo(path)}>
                      {labels[i]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
