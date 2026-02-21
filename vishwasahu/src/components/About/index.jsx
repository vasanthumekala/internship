import { useNavigate } from "react-router-dom";
import "./index.css";

const skills = [
  { label: "Full-Stack Development", pct: 95 },
  { label: "Cloud Architecture", pct: 88 },
  { label: "Product Strategy", pct: 92 },
  { label: "Team Leadership", pct: 90 },
  { label: "UI/UX Design", pct: 78 },
];

const timeline = [
  {
    year: "2014",
    event: "Started career as a software engineer at a fintech startup",
  },
  {
    year: "2017",
    event: "Led a 20-person engineering team, shipped 3 major products",
  },
  {
    year: "2019",
    event: "Founded CPSTECH Solutions to democratize enterprise tech",
  },
  { year: "2022", event: "Scaled to 50+ clients across 10 countries" },
  { year: "2026", event: "Continuing to build, mentor, and innovate globally" },
];

function About() {
  const navigate = useNavigate();

  return (
    <main className="about">
      {/* ── Header Banner ──────────────── */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            About <span className="accent-teal">Vishwa Sahu</span>
          </h1>
          <p className="about-hero-sub">
            Technologist · Founder · Thought Leader
          </p>
        </div>
      </section>

      {/* ── Story ──────────────────────── */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-photo-wrap">
            <img
              src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771657661/ChatGPT_Image_Feb_21_2026_12_37_07_PM_yq0gww.png"
              alt="Vishwa Sahu — founder of CPSTECH Solutions"
              className="about-photo"
            />
            <span className="about-photo-caption">Sundar Pichai</span>
          </div>
          <div className="about-text">
            <h2 className="section-title-left">
              The Person Behind <span className="accent-blue">the Vision</span>
            </h2>
            <p>
              Vishwa Sahu is a software engineer turned entrepreneur who
              believes that technology, at its core, is about people. Born from
              curiosity and built through discipline, his career spans fintech,
              SaaS, health-tech and enterprise platforms across four continents.
            </p>
            <p>
              In 2019 he founded <strong>CPSTECH Solutions</strong> with a
              simple thesis: most companies don't lack ideas — they lack precise
              execution. CPSTECH became the answer: a technical partner that
              thinks strategically and delivers with engineering excellence.
            </p>
            <p>
              Outside of work, Vishwa mentors early-stage founders, speaks at
              tech conferences, and writes about the intersection of leadership
              and engineering culture.
            </p>
            <button
              className="btn btn-blue"
              onClick={() => navigate("/contact")}
            >
              Work With Me
            </button>
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────── */}
      <section className="about-skills">
        <h2 className="section-title">
          Core <span className="accent-teal">Competencies</span>
        </h2>
        <div className="skills-list">
          {skills.map((s) => (
            <div key={s.label} className="skill-item">
              <div className="skill-header">
                <span className="skill-label">{s.label}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${s.pct}%` }}
                  role="progressbar"
                  aria-valuenow={s.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={s.label}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ───────────────────── */}
      <section className="about-timeline">
        <h2 className="section-title">
          The <span className="accent-blue">Journey</span>
        </h2>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.year} className="timeline-item">
              <span className="timeline-year">{t.year}</span>
              <div className="timeline-dot" aria-hidden="true" />
              <p className="timeline-event">{t.event}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── CPSTECH bloc ────────────────── */}
      <section className="about-company">
        <div className="company-card">
          <img
            src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1771657109/ChatGPT_Image_Feb_21_2026_12_25_22_PM_jdah5p.png"
            alt="CPSTECH Solutions logo"
            className="company-logo"
          />
          <h2 className="company-name">CPSTECH Solutions</h2>
          <p className="company-tagline">Technical Execution Engine</p>
          <p className="company-desc">
            From MVP to enterprise scale, CPSTECH delivers full-stack software,
            cloud infrastructure, and product strategy that actually ships.
            Trusted by 50+ clients worldwide.
          </p>
          <div className="company-stats">
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat">
              <span className="stat-num">10</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-num">7+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
          <button
            className="btn btn-blue"
            onClick={() => navigate("/services")}
          >
            View Services
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
