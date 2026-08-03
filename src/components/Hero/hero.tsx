import "./hero.css";
import profile from "../../assets/profile.webp";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
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

      {/* Left */}

      <motion.div
        className="hero-content"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <span className="hero-tag">
          👋 Hello, I'm
        </span>

        <h1>
          Santosh
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "TypeScript Developer",
            2000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
        />

        <p>
          Building modern, responsive and scalable web
          applications using React, TypeScript and FastAPI.
        </p>

        <div className="hero-buttons">

          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>

          <a href="#projects" className="btn-secondary">
            View Projects
          </a>

        </div>
        

        <div className="hero-social">

          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="santoshs2008s@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      {/* Right */}

      <motion.div
        className="hero-image-container"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <img
          src={profile}
          alt="Santosh"
          className="hero-image"
        />

      </motion.div>

    </motion.section>
  );
}