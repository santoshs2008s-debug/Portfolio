import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
  id="about"
  className="about"
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>

      <div className="about-header">

        <h2>About Me</h2>

        <p>
          I'm Santosh, a passionate Frontend Developer and
          B.Tech Computer Science student at VIT Vellore.
          I enjoy creating modern, responsive and interactive
          web applications using React, TypeScript and FastAPI.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>B.Tech Computer Science</p>
          <span>VIT Vellore</span>
        </div>

        <div className="about-card">
          <h3>💻 Specialization</h3>
          <p>Frontend Development</p>
          <span>React • TypeScript • FastAPI</span>
        </div>
        <div className="about-card internship-card">

  <h3>
    💼 Internship
  </h3>

  <p>
    Open to Internship Opportunities
  </p>

  <span>
    Actively looking for Frontend & Full-Stack Development roles
  </span>

</div>

        <div className="about-card">
          <h3>📍 Location</h3>
          <p>Tamil Nadu</p>
          <span>India</span>
        </div>

      </div>
    

  

      <div className="resume">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

    </motion.section>
  );
}

export default About;