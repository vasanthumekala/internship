import { useState } from "react";
import "./index.css";

const INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "vishwa@cpstechsolutions.com",
    href: "mailto:vishwa@cpstechsolutions.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 90000000000",
    href: "tel:+919000000000",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Hyderabad, India · Remote Worldwide",
    href: null,
  },
  { icon: "🕐", label: "Response Time", value: "Within 24 hours", href: null },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "X / Twitter", href: "https://x.com", icon: "𝕏" },
  { label: "GitHub", href: "https://github.com", icon: "⌥" },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // In production: POST to your API / email service here
    setSent(true);
  };

  return (
    <main className="contact">
      {/* ── Banner ────────────────────── */}
      <section className="contact-hero">
        <h1 className="contact-hero-title">
          Let's <span className="accent-teal">Connect</span>
        </h1>
        <p className="contact-hero-sub">
          Whether it's a quick question or your next big project — we're here.
        </p>
      </section>

      {/* ── Content Grid ──────────────── */}
      <section className="contact-content">
        {/* Info panel */}
        <aside className="contact-info">
          <h2 className="contact-info-title">Get in Touch</h2>
          <ul className="contact-info-list">
            {INFO.map((item) => (
              <li key={item.label} className="contact-info-item">
                <span className="ci-icon">{item.icon}</span>
                <div>
                  <p className="ci-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="ci-value ci-link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="ci-value">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="contact-socials">
            <p className="ci-label" style={{ marginBottom: "10px" }}>
              Follow Us
            </p>
            <div className="socials-row">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success" role="alert" aria-live="polite">
              <span className="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>
                Thanks for reaching out, {form.name}. We'll reply to{" "}
                <strong>{form.email}</strong> within 24 hours.
              </p>
              <button
                className="btn btn-teal"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h2 className="form-title">Send a Message</h2>

              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Vishwa Sahu"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Project inquiry, partnership, etc."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell us about your project or question…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-blue btn-lg form-submit">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
