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
import "./navbar.css";

const navItems = [
  {
    label: "HOME",
    href: "#home",
    Icon: HiOutlineHome,
    hint: "Start here",
  },
  {
    label: "ABOUT",
    href: "#about",
    Icon: HiOutlineUser,
    hint: "Know my profile",
  },
  {
    label: "EDUCATION",
    href: "#education",
    Icon: HiOutlineAcademicCap,
    hint: "Academic background",
  },
  {
    label: "PROJECTS",
    href: "#projects",
    Icon: HiOutlineBriefcase,
    hint: "My work & portfolio",
  },
  {
    label: "SKILLS",
    href: "#skills",
    Icon: RiRocketLine,
    hint: "Tech and tools",
  },
  {
    label: "CONTACT",
    href: "#contact",
    Icon: HiOutlineEnvelope,
    hint: "Let us connect",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateFromHash = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length) {
      return () => {
        window.removeEventListener("hashchange", updateFromHash);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (href) => {
    setActiveHref(href);
    closeMenu();
  };

  return (
    <>
      <header className="navbar">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <div className="navbar__brand-mark">{"</>"}</div>

          <div className="navbar__brand-copy">
            <span className="navbar__brand-name">HEMAN@TH</span>
            <span className="navbar__brand-role">DEVELOPER</span>
          </div>
        </a>

        <nav className="navbar__desktop-nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {navItems.map(({ label, href, Icon }) => (
              <li
                className={activeHref === href ? "is-active" : ""}
                key={label}
              >
                <a href={href} onClick={() => handleNavClick(href)}>
                  <Icon />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
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
              <span className="mobile-menu__brand-name">HEMAN@TH</span>
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
            <a
              className={`mobile-menu__nav-item ${
                activeHref === href ? "is-active" : ""
              }`}
              href={href}
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
            </a>
          ))}
        </nav>

        <a className="mobile-menu__cta" href="#contact" onClick={closeMenu}>
          Get In Touch
        </a>

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
