import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
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
      <div className="contact-container">

        <p className="contact-subtitle">
          GET IN TOUCH
        </p>

        <h2 className="contact-title">
          Let's Build Something Amazing Together.
        </h2>

        <p className="contact-description">
          I'm always excited to work on new projects, collaborate with
          developers, and explore internship opportunities in software
          development. Feel free to reach out anytime.
        </p>

        <div className="contact-cards">

          <div className="contact-card">

            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <a href="mailto:santoshs2008s@gmail.com">
              santoshs2008s@gmail.com
            </a>

          </div>

          <div className="contact-card">

            <FaPhoneAlt className="contact-icon" />

            <h3>Phone</h3>

            <a href="tel:+919025245833">
              +91 90252 45833
            </a>

          </div>

          <div className="contact-card">

            <FaMapMarkerAlt className="contact-icon" />

            <h3>Location</h3>

            <p>Tamil Nadu, India</p>

          </div>

          <div className="contact-card">

            <FaGithub className="contact-icon" />

            <h3>GitHub</h3>

            <a
              href="https://github.com/santoshs2008s-debug"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/santoshs2008s-debug
            </a>

          </div>

          <div className="contact-card">

            <FaLinkedin className="contact-icon" />

            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/santosh-s-0283763b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/santosh-s-0283763b0
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  );
}