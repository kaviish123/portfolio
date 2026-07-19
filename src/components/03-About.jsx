import { motion } from "framer-motion";
import {
    FaCloud,
    FaFileAlt,
    FaGraduationCap,
    FaRocket,
} from "react-icons/fa";
import "./03-About.css";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">ABOUT ME</p>

        <h2>
          Building My Career Through
          <span> Continuous Learning</span>
        </h2>

        <p className="about-description">
          I'm <strong>Kavi Ishwarrya S K</strong>, a Computer Science &
          Engineering (IoT) student with a strong interest in cloud
          computing, software development, and emerging technologies.
          I enjoy turning ideas into practical solutions while constantly
          improving my technical and professional skills through projects,
          certifications, and hands-on experience.
        </p>

        <div className="about-highlights">

          <div className="highlight-card">
            <FaCloud className="highlight-icon" />
            <h3>AWS Certified</h3>
            <p>
              Earned the AWS Certified Cloud Practitioner certification,
              building a strong foundation in cloud technologies.
            </p>
          </div>

          <div className="highlight-card">
            <FaGraduationCap className="highlight-icon" />
            <h3>Academic Excellence</h3>
            <p>
              Maintaining an 8.30 CGPA while continuously improving my
              programming and engineering skills.
            </p>
          </div>

          <div className="highlight-card">
            <FaFileAlt className="highlight-icon" />
            <h3>Research Publication</h3>
            <p>
              Co-authored a research paper focused on AI-driven retail
              sales forecasting using ensemble machine learning models.
            </p>
          </div>

          <div className="highlight-card">
            <FaRocket className="highlight-icon" />
            <h3>Career Goal</h3>
            <p>
              Seeking opportunities where I can contribute, learn from
              experienced professionals, and grow as a software engineer.
            </p>
          </div>

        </div>

        <div className="about-quote">
          <h3>"Learning never stops, and every project is a step toward becoming a better engineer."</h3>
        </div>
      </motion.div>
    </section>
  );
}

export default About;