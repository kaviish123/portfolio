import { motion } from "framer-motion";
import {
    FaAws,
    FaJava,
    FaLaptopCode,
    FaUsers
} from "react-icons/fa";
import "./05-Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SKILLS & STRENGTHS
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Constantly Learning & Improving
        </motion.h2>

        <div className="skills-grid">

          <div className="skill-card">
            <FaJava className="skill-icon" />
            <h3>Programming</h3>

            <ul>
              <li>Java (Learning)</li>
              <li>Problem Solving</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>

          <div className="skill-card">
            <FaAws className="skill-icon" />
            <h3>Cloud</h3>

            <ul>
              <li>AWS Certified Cloud Practitioner</li>
              <li>AWS Fundamentals</li>
              <li>Cloud Concepts</li>
            </ul>
          </div>

          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <h3>Tools</h3>

            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>KiCad</li>
            </ul>
          </div>

          <div className="skill-card">
            <FaUsers className="skill-icon" />
            <h3>Professional Skills</h3>

            <ul>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Continuous Learning</li>
            </ul>
          </div>

        </div>

        <div className="learning-section">

          <h2>🌱 Currently Learning</h2>

          <div className="progress-item">

            <div className="progress-title">
              <span>Java Programming</span>
              <span>Learning</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill java"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>AWS Cloud Services</span>
              <span>Learning</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill aws"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>Artificial Intelligence</span>
              <span>Exploring</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill ai"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>Mobile App Development</span>
              <span>Learning</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill mobile"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;