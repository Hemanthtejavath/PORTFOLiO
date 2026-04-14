import "./contact.css";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineClock,
} from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: HiOutlineMapPin,
    title: "Location",
    hint: "Open for remote opportunities",
    value: "Patna, Bihar, India",
    color: "red",
  },
  {
    icon: HiOutlineEnvelope,
    title: "Email",
    hint: "Respond within 24 hours",
    value: "tejavathhemanth41@gmail.com",
    color: "yellow",
  },
  {
    icon: HiOutlineClock,
    title: "Availability",
    hint: "Immediately available",
    value: "Open to Work",
    color: "blue",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hemanth-tejavath/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/Hemanthtejavath",
  },
  { icon: FaTwitter, label: "Twitter", url: "https://x.com/Hemanth17122004" },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/sonu.since_2005",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("oZAr000wwgZ1OsFcg"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_auz2vbh", // Replace with your Service ID
        "template_crdsg5y", // Replace with your Template ID
        {
          to_email: "tejavathhemanth41@gmail.com",
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      )
      .then(() => {
        alert("✅ Email sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send email. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      {/* Background orbs */}
      <div className="contact__orb contact__orb--left" />
      <div className="contact__orb contact__orb--right" />

      <div className="contact__inner">
        {/* Header */}
        <div className="contact__header">
          <div className="contact__badge">
            <span className="contact__badge-dot" />
            LET'S CONNECT
          </div>
          <h1 className="contact__title">CONTACT</h1>
          <p className="contact__subtitle">
            Have a project in mind? Let's collaborate and build something
            amazing together. I'm always open to discussing new opportunities
            and creative ideas.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact__container">
          {/* LEFT - Info Cards */}
          <div className="contact__left">
            {/* Info Cards */}
            <div className="info-cards">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`info-card info-card--${info.color}`}
                  >
                    <div className="info-card__icon">
                      <IconComponent />
                    </div>
                    <div className="info-card__content">
                      <h3 className="info-card__title">{info.title}</h3>
                      <p className="info-card__hint">{info.hint}</p>
                      <p className="info-card__value">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">✨ CONNECT WITH ME</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.label}
                    >
                      <IconComponent />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="response-card">
              <h3 className="response-title">Response Time</h3>
              <div className="response-item">
                <span>Email Response</span>
                <span className="response-time">24 hours</span>
              </div>
              <div className="response-item">
                <span>Social Media</span>
                <span className="response-time">12 hours</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="contact__right">
            <div className="contact-form-card">
              <div className="form-header">
                <h2 className="form-title">SEND A MESSAGE</h2>
                <p className="form-hint">Direct email communication</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Email Input */}
                <div className="form-group">
                  <label htmlFor="email">Your Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                  />
                </div>

                {/* Message Input */}
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, requirements, timeline..."
                    rows="6"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                <p className="form-note">
                  Email will be sent directly to my Gmail inbox
                </p>
              </form>

              {/* Alternative Contact */}
              <div className="alternative-contact">
                <h4>Alternative Contact Methods</h4>
                <div className="alternative-links">
                  <a
                    href="https://www.linkedin.com/in/hemanth-tejavath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-link"
                  >
                    LinkedIn Message
                  </a>
                  <a
                    href="https://github.com/Hemanthtejavath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-link"
                  >
                    GitHub Issues
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
