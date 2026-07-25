import { motion } from "framer-motion";
import {
  FaAward,
  FaBriefcase,
  FaCloud,
  FaDownload,
  FaEnvelope,
  FaSeedling,
} from "react-icons/fa";
import "./02-Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">👋 Hello, I'm</span>

          <h1>
            Kavi <span>Ishwarrya S K</span>
          </h1>

          <h3>Computer Science & Engineering (IoT) Student</h3>

          <p>
            Passionate about Java, cloud computing, and software development. 
            I enjoy building practical projects, exploring new technologies, and 
            leveraging AI-assisted development tools to accelerate learning, solve problems, 
            and deliver better software solutions.
          </p>

          <div className="hero-tags">
            <span>☁ AWS Certified Cloud Practitioner</span>
            <span>☕ Java Learner</span>
            <span>🚀 Open to Internship Opportunities</span>
          </div>

          <h4 className="hero-quote">
            "Learning today. Building tomorrow."
          </h4>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              <FaEnvelope />
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <FaAward className="stat-icon" />
              <h4>CGPA</h4>
              <p>8.30 / 10</p>
            </div>

            <div className="stat-card">
              <FaCloud className="stat-icon" />
              <h4>AWS</h4>
              <p>Certified</p>
            </div>

            <div className="stat-card">
              <FaBriefcase className="stat-icon" />
              <h4>Internship</h4>
              <p>22 Days</p>
            </div>

            <div className="stat-card">
              <FaSeedling className="stat-icon" />
              <h4>Focus</h4>
              <p>Continuous Learning</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <div className="image-ring">
            <img src="/profile.jpeg" alt="Kavi Ishwarrya" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;