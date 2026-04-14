import "./footer.css";
import { HiArrowUp } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Main Content */}
        <div className="footer__content">
          {/* Left Section - About */}
          <div className="footer__section footer__about">
            <div className="footer__brand">
              <h3>HEMAN@TH</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer__description">
              Building digital experiences with clean code, modern technologies,
              and a passion for innovation.
            </p>
            <div className="footer__status">
              <span className="status-dot" />
              Available for opportunities
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer__section">
            <h4 className="footer__title">⚡ QUICK NAVIGATION</h4>
            <ul className="footer__links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer__section">
            <h4 className="footer__title">CONNECT</h4>
            <div className="footer__contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:tejavathhemanth41@gmail.com">
                    tejavathhemanth41@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p>Patna, Bihar, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/hemanth-tejavath/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hemanthtejavath"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Hemanth17122004"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/sonu.since_2005"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="footer__top-btn"
          title="Back to top"
        >
          <HiArrowUp />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <div className="footer__left">
          <p>
            © {currentYear} <strong>Hemanth</strong>. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with ❤️ and lots of &lt;/&gt;
          </p>
        </div>

        <div className="footer__right">
          <span className="status-badge">🟢 Open to Opportunities</span>
          <span>•</span>
          <span>v1.0</span>
          <span>•</span>
          <span>Last updated: Apr 2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
