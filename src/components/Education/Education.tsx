import "./Education.css";
import { motion } from "framer-motion";
export default function Education() {
  return (
    <motion.section

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

      <h2>Education</h2>

      <div className="education-container">

        <div className="education-card">
          <div className="year">2025 - Present</div>

          <div className="details">
            <h3>B.Tech Computer Science and Engineering</h3>

            <h4>Vellore Institute of Technology (VIT), Vellore</h4>

            <p>
              Currently pursuing my Bachelor's degree in Computer Science and
              Engineering. Learning Full Stack Development, Data Structures &
              Algorithms, Database Management Systems, Operating Systems,
              Computer Networks, Artificial Intelligence, and Software
              Engineering.
            </p>

            <span className="status">Current CGPA: 7.8</span>
          </div>
        </div>

        <div className="education-card">
          <div className="year">2024 - 2025</div>

          <div className="details">
            <h3>Higher Secondary Education (Class XII)</h3>

            <h4>SRI BHARATHI VIDHYASHRAM MATRIC HR.SEC.SCHOOL,ARANI</h4>

            <p>
              Completed Higher Secondary with Bio-MATHS,
              strengthening my foundation in Mathematics, Physics,
              Chemistry.
            </p>

            <span className="status">Percentage: 75.17%</span>
          </div>
        </div>

        <div className="education-card">
          <div className="year">2022 - 2023</div>

          <div className="details">
            <h3>Secondary Education (Class X)</h3>

            <h4>SRI BHARATHI VIDHYASHRAM MATRIC HR.SEC.SCHOOL,ARANI </h4>

            <p>
              Completed Secondary School with excellent academic performance
              while actively participating in technical and extracurricular
              activities.
            </p>

            <span className="status">Percentage: 78.40%</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}