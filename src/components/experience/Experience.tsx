import "./Experience.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaTrophy, FaCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    year: "May 2026 - Present",
    role: "Frontend Development Trainee",
    company: "Online Training Program",
    description:
      "Completed comprehensive online training in Frontend Development, learning HTML, CSS, JavaScript, React, TypeScript, Git, GitHub, Vite, and modern UI development. Applied these skills by building responsive and interactive web applications.",
  },
  {
    icon: <FaCode />,
    year: "2026",
    role: "Frontend Projects",
    company: "Personal Development",
    description:
      "Built real-world frontend applications including a React Calculator and an Apple-inspired Personal Portfolio using React, TypeScript, CSS, and Vite. Deployed projects on Vercel and practiced version control using Git and GitHub.",
  },
  {
    icon: <FaTrophy />,
    year: "2026",
    role: "AI Hackathon Participant",
    company: "VIT Vellore",
    description:
      "Participated in the AI Hackathon at VIT Vellore, collaborating with a team to develop an AI-based solution. Enhanced problem-solving, teamwork, and project presentation skills in a competitive environment.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience"
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
      <div className="experience-header">
        <h2>Experience</h2>

        <p>
          My practical journey through learning, projects and technical
          activities.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">
              <span>{item.year}</span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}