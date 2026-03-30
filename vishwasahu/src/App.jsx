import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

/* ── Shared Footer ─────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">Vishwa Sahu &amp; CPSTECH Solutions</p>
      <p className="footer-contact">
        <a href="mailto:vishwa@cpstechsolutions.com">
          vishwa@cpstechsolutions.com
        </a>
        {" · "}
        <a href="tel:+919000000000">+91 90000000000</a>
      </p>
      <div className="footer-socials">
        <a
          href="https://linkedin.com"
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>
        <a
          href="https://x.com"
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
        >
          𝕏
        </a>
        <a
          href="https://github.com"
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          Hub
        </a>
      </div>
      <p className="footer-copy">
        © 2026 Vishwa Sahu &amp; CPSTECH Solutions. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
