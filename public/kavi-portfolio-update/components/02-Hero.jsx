import { motion } from "framer-motion";
import {
  FaAward,
  FaBriefcase,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
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

          <h3>B.E. CSE (Internet of Things), Class of 2027</h3>

          <p>
            I build software and IoT projects. So far that includes a ride-sharing
            app in React Native and Firebase, a website hosted on AWS, PCB layouts
            in KiCad and a sensor-based home automation system on Arduino and ESP8266.
            I code mostly in Java and have solved 300+ problems on LeetCode.
          </p>

          <div className="hero-tags">
            <span>☕ Java & DSA</span>
            <span>🔌 Embedded & IoT</span>
            <span>☁ AWS Cloud</span>
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
              <FaCode className="stat-icon" />
              <h4>LeetCode</h4>
              <p>300+ Solved</p>
            </div>

            <div className="stat-card">
              <FaBriefcase className="stat-icon" />
              <h4>Experience</h4>
              <p>Internship + IoT Training</p>
            </div>

            <div className="stat-card">
              <FaFileAlt className="stat-icon" />
              <h4>Research</h4>
              <p>First Author</p>
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
            <img src="/profile.jpeg" alt="Kavi Ishwarrya S K" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;