import { useNavigate } from "react-router-dom";
import "./index.css";

const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    desc: "We design and build bespoke web and enterprise applications from scratch — clean architecture, robust APIs, and maintainable codebases that scale.",
    tags: ["React", "Node.js", "PostgreSQL", "REST / GraphQL"],
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure & DevOps",
    desc: "Full cloud setup on AWS, Azure or GCP with CI/CD pipelines, containerisation, auto-scaling and 99.9% uptime SLAs.",
    tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    icon: "📱",
    title: "Mobile Application Development",
    desc: "Cross-platform iOS and Android apps built with React Native — one codebase, native feel, shipped fast.",
    tags: ["React Native", "Expo", "Firebase", "App Store / Play Store"],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & Compliance",
    desc: "Security audits, penetration testing, GDPR/ISO compliance consulting and ongoing vulnerability management to protect your digital assets.",
    tags: ["OWASP", "Pen Testing", "GDPR", "ISO 27001"],
  },
  {
    icon: "📊",
    title: "Data Analytics & AI Integration",
    desc: "Turn raw data into strategic decisions — dashboards, ML pipelines, predictive models and LLM integrations tailored for your workflow.",
    tags: ["Python", "TensorFlow", "OpenAI API", "Tableau"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design & Prototyping",
    desc: "User-centred design from wireframe to pixel-perfect prototype — optimised for conversion, accessibility and delight.",
    tags: ["Figma", "Prototyping", "A11y", "Design Systems"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "Deep-dive into your goals, constraints and users.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Architecture blueprints, wireframes and technical specs.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile sprints with daily updates and early previews.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Staged rollout, monitoring and performance tuning.",
  },
  {
    step: "05",
    title: "Grow",
    desc: "Ongoing support, feature iterations and scaling.",
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <main className="services">
      {/* ── Hero Band ─────────────────── */}
      <section className="services-hero">
        <h1 className="services-hero-title">
          What <span className="accent-teal">CPSTECH</span> Builds for You
        </h1>
        <p className="services-hero-sub">
          Six focused practice areas. One accountable team. Zero excuses.
        </p>
      </section>

      {/* ── Cards Grid ────────────────── */}
      <section className="services-section" aria-label="Service offerings">
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="service-card">
              <div className="sc-icon">{s.icon}</div>
              <h2 className="sc-title">{s.title}</h2>
              <p className="sc-desc">{s.desc}</p>
              <ul className="sc-tags">
                {s.tags.map((tag) => (
                  <li key={tag} className="sc-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── Process ───────────────────── */}
      <section className="process" aria-label="Our process">
        <h2 className="section-title">
          How We <span className="accent-blue">Work</span>
        </h2>
        <ol className="process-steps">
          {process.map((p) => (
            <li key={p.step} className="process-step">
              <span className="process-num">{p.step}</span>
              <h3 className="process-title">{p.title}</h3>
              <p className="process-desc">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── CTA ───────────────────────── */}
      <section className="services-cta">
        <h2 className="cta-title">Let's Build Something Together</h2>
        <p className="cta-sub">
          Tell us about your project and we'll respond within 24 hours.
        </p>
        <button
          className="btn btn-teal btn-lg"
          onClick={() => navigate("/contact")}
        >
          Start a Project
        </button>
      </section>
    </main>
  );
}

export default Services;
