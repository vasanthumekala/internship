import { useNavigate } from "react-router-dom";
import "./index.css";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    desc: "End-to-end software solutions tailored to your unique business needs — from architecture to deployment.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    desc: "Scalable, secure cloud setups on AWS, Azure & GCP with DevOps pipelines and zero-downtime deployments.",
  },
  {
    icon: "📱",
    title: "Mobile & Web Apps",
    desc: "Modern cross-platform apps built with React, React Native and Node.js — fast, beautiful and reliable.",
  },
];

const testimonials = [
  {
    type: "personal",
    quote:
      "Technology is not just a tool — it's a language. When you master it, you can tell any story you want.",
    author: "— Vishwa Sahu",
  },
  {
    type: "client",
    quote:
      "CPSTECH delivered our platform in half the expected time. The quality and communication were outstanding.",
    author: "— Sarah M., Product Director",
  },
  {
    type: "personal",
    quote:
      "Execution without vision is noise. Vision without execution is a dream. We do both.",
    author: "— Vishwa Sahu",
  },
  {
    type: "client",
    quote:
      "Our cloud migration was seamless. The CPSTECH team anticipated every challenge before it became an issue.",
    author: "— Raj K., CTO",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      {/* ── Hero ─────────────────────────── */}
      <section className="hero" aria-label="Hero section">
        {/* Left — Personal */}
        <div className="hero-left">
          <img
            src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771656646/05b91b3f-e933-4a51-bca9-b35da241e03d_nsotj2.jpg"
            alt="Professional photo of Vishwa Sahu"
            className="hero-photo"
          />
          <div className="hero-left-text">
            <h1 className="hero-name">Vishwa Sahu</h1>
            <p className="hero-subtitle">
              Thought Leader in Technology &amp; Innovation
            </p>
            <p className="hero-bio">
              With over a decade of experience bridging vision and execution,
              Vishwa Sahu empowers businesses to harness technology as a
              competitive advantage. Founder, mentor, and relentless innovator.
            </p>
            <button className="btn btn-teal" onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="hero-divider" aria-hidden="true">
          <div className="hero-divider-line" />
          <span className="hero-divider-icon">⚡</span>
          <div className="hero-divider-line" />
        </div>

        {/* Right — Company */}
        <div className="hero-right">
          <img
            src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771657109/ChatGPT_Image_Feb_21_2026_12_25_22_PM_jdah5p.png"
            alt="CPSTECH Solutions company logo"
            className="hero-company-logo"
          />
          <h2 className="hero-company-title">
            Your Technical Execution Engine
          </h2>
          <p className="hero-company-tagline">
            Delivering Scalable Solutions with Precision
          </p>
          <ul className="hero-bullets">
            <li>✅ Agile delivery — on time, every time</li>
            <li>✅ Full-stack expertise across 15+ technologies</li>
            <li>✅ Dedicated teams that scale with your growth</li>
            <li>✅ Transparent communication, zero guesswork</li>
          </ul>
          <button className="btn btn-blue" onClick={() => navigate("/contact")}>
            Get Started
          </button>
        </div>
      </section>

      {/* ── Testimonials ─────────────────── */}
      <section className="testimonials" aria-label="Testimonials">
        <h2 className="section-title">
          Insights &amp; <span className="accent-teal">Success Stories</span>
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`testimonial-card ${
                t.type === "personal" ? "card-teal" : "card-blue"
              }`}
            >
              <blockquote>
                <p className="testimonial-quote">"{t.quote}"</p>
                <footer className="testimonial-author">{t.author}</footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* ── Services Teaser ──────────────── */}
      <section className="services-teaser" aria-label="Featured services">
        <h2 className="section-title">
          <em className="playfair">"We Build What Others Only Plan"</em>
          <br />
          <span>
            Featured <span className="accent-blue">Services</span>
          </span>
        </h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <button
                className="service-link"
                onClick={() => navigate("/services")}
              >
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────── */}
      <section className="cta-banner" aria-label="Call to action">
        <h2 className="cta-title">Ready to Build Something Powerful?</h2>
        <p className="cta-sub">
          Let's turn your vision into a scalable, battle-tested reality.
        </p>
        <button
          className="btn btn-teal btn-lg"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}

export default Home;
