import "./Certificates.css";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

import aiHackathon from "../../assets/Certificates/ai-hackathon.png";

const certificates = [
  {
    id: "01",
    title: "AI Hackathon",
    issuer: "VIT Vellore",
    date: "February 2026",
    image: aiHackathon,
  },
];

export default function Certificates() {
  return (
    <motion.section
  id="Certificates"
  className="Certificates"
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
      <div className="certificates-header">
        <h2>Certificates</h2>

        <p>
          Certifications and achievements that showcase my learning journey
          and technical skills.
        </p>
      </div>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <motion.div
            key={certificate.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >

            <div className="certificate-icon">
              <FaAward />
            </div>

            <span className="certificate-number">
              {certificate.id}
            </span>

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <span className="certificate-date">
              {certificate.date}
            </span>

            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />
              View Certificate
            </a>

          </motion.div>

        ))}

      </div>
    </motion.section>
  );
}