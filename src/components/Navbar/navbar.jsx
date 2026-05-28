import { useEffect, useState } from "react";

import {
  HiBars3,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineUser,
  HiXMark,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

import { RiRocketLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./navbar.css";

const navItems = [
  {
    label: "HOME",
    href: "/",
    Icon: HiOutlineHome,
    hint: "Start here",
  },
  {
    label: "ABOUT",
    href: "/about",
    Icon: HiOutlineUser,
    hint: "Know my profile",
  },
  {
    label: "EDUCATION",
    href: "/education",
    Icon: HiOutlineAcademicCap,
    hint: "Academic background",
  },
  {
    label: "PROJECTS",
    href: "/projects",
    Icon: HiOutlineBriefcase,
    hint: "My work & portfolio",
  },
  {
    label: "SKILLS",
    href: "/skills",
    Icon: RiRocketLine,
    hint: "Tech and tools",
  },
  {
    label: "CONTACT",
    href: "/contact",
    Icon: HiOutlineEnvelope,
    hint: "Let us connect",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (href) => {
    setActiveHref(href);
    closeMenu();
  };

  return (
    <>
      <header className="navbar">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <div className="navbar__brand-mark">{"</>"}</div>

          <div className="navbar__brand-copy">
            <span className="navbar__brand-name">HEM@NTH</span>
            <span className="navbar__brand-role">DEVELOPER</span>
          </div>
        </Link>
        <nav className="navbar__desktop-nav" aria-label="Primary navigation">
          <div className="navbar__links">
            {navItems.map(({ label, href, Icon }) => (
              <Link
                to={href}
                className={activeHref === href ? "is-active" : ""}
                key={label}
                onClick={() => handleNavClick(href)}
              >
                <div className="navItem">
                  <Icon />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="navbar__toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </header>
      <div
        className={`mobile-menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />
      <aside
        aria-hidden={!isMenuOpen}
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        id="mobile-menu"
      >
        <div className="mobile-menu__header">
          <div className="mobile-menu__brand">
            <div className="mobile-menu__brand-mark">{"</>"}</div>

            <div className="mobile-menu__brand-copy">
              <span className="mobile-menu__brand-name">HEM@NTH</span>
              <span className="mobile-menu__brand-role">MY PORTFOLIO</span>
            </div>
          </div>

          <button
            aria-label="Close navigation"
            className="mobile-menu__close"
            onClick={closeMenu}
            type="button"
          >
            <HiXMark />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="mobile-menu__nav">
          {navItems.map(({ label, href, Icon, hint }) => (
            <Link
              to={href}
              className={`mobile-menu__nav-item ${
                activeHref === href ? "is-active" : ""
              }`}
              key={label}
              onClick={() => handleNavClick(href)}
            >
              <span className="mobile-menu__nav-icon">
                <Icon />
              </span>

              <span className="mobile-menu__nav-copy">
                <span className="mobile-menu__nav-title">{label}</span>
                <span className="mobile-menu__nav-hint">{hint}</span>
              </span>
            </Link>
          ))}
        </nav>

        <Link className="mobile-menu__cta" to="/contact" onClick={closeMenu}>
          Get In Touch
        </Link>

        <div className="mobile-menu__meta">
          <div className="mobile-menu__meta-item">
            <span className="mobile-menu__meta-icon">
              <HiOutlinePhone />
            </span>

            <span className="mobile-menu__meta-copy">
              <span className="mobile-menu__meta-label">Availability</span>

              <span className="mobile-menu__meta-value">
                Open for freelance and full-time roles
              </span>
            </span>
          </div>

          <div className="mobile-menu__meta-item">
            <span className="mobile-menu__meta-icon">
              <HiOutlineMapPin />
            </span>

            <span className="mobile-menu__meta-copy">
              <span className="mobile-menu__meta-label">Location</span>

              <span className="mobile-menu__meta-value">India</span>
            </span>
          </div>
        </div>

        <div className="mobile-menu__footer">© 2026 Hemanth Portfolio</div>
      </aside>
    </>
  );
};

export default Navbar;
