import "./Skills.css";
import { motion } from "framer-motion";
const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "JavaScript", icon: "🟨", category: "Language" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "FastAPI", icon: "⚡", category: "Backend" },
  { name: "SQL", icon: "🗄️", category: "Database" },
  { name: "Git", icon: "🔧", category: "Tool" },
];

function Skills() {
  return (
   <motion.section
  id="skills"
  className="skills"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

      <div className="skills-header">
        <h2>My Skills</h2>

        <p>
          Technologies I use to build modern, responsive and
          scalable web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.category}</p>

          </div>
        ))}
      </div>

    </motion.section>
  );
}

export default Skills;