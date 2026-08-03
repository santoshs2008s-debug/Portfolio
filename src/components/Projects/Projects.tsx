import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "React Calculator",
    description:
      "A modern calculator built using React, TypeScript and Vite. It supports keyboard input, responsive design and smooth user experience.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    status: "Live",
    live: "https://calculator-santho.vercel.app/",
    github: "https://github.com/santoshs2008s-debug/calculator",
  },
  {
    id: "02",
    title: "Personal Portfolio",
    description:
      "A premium Apple-inspired personal portfolio showcasing my skills, projects, certificates and contact details.",
    tech: ["React", "TypeScript", "Framer Motion", "CSS"],
    status: "In Progress",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <p>
          A collection of projects showcasing my frontend development,
          problem-solving skills and passion for building beautiful web
          applications.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <div className="project-top">

              <div className="project-left">
                <span className="project-number">
                  {project.id}
                </span>

                <h3>{project.title}</h3>
              </div>

              <div className="project-status">
                {project.status}
              </div>

            </div>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}