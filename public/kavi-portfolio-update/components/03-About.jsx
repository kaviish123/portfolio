import { motion } from "framer-motion";
import {
    FaCloud,
    FaCode,
    FaFileAlt,
    FaMicrochip,
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
          I'm <strong>Kavi Ishwarrya S K</strong>, a final-year B.E. Computer
          Science and Engineering (Internet of Things) student at Nandha
          Engineering College, Erode, with a CGPA of 8.3. My work sits between
          hardware and software: I have designed PCB layouts, wired up sensors
          and microcontrollers, and also built a mobile app and a cloud-hosted
          website. I'm looking for an internship where I can work on real
          products and learn from experienced engineers.
        </p>

        <div className="about-highlights">

          <div className="highlight-card">
            <FaMicrochip className="highlight-icon" />
            <h3>Embedded & IoT</h3>
            <p>
              Designed 8 PCB layouts in KiCad during my internship and built an
              Arduino and ESP8266 home automation system linked to Blynk.
            </p>
          </div>

          <div className="highlight-card">
            <FaCode className="highlight-icon" />
            <h3>Problem Solving</h3>
            <p>
              Solved 300+ LeetCode problems in Java, including dynamic
              programming, trees and backtracking.
            </p>
          </div>

          <div className="highlight-card">
            <FaFileAlt className="highlight-icon" />
            <h3>Research Paper</h3>
            <p>
              First author of a paper on retail sales forecasting with
              ensemble machine learning (not yet published).
            </p>
          </div>

          <div className="highlight-card">
            <FaCloud className="highlight-icon" />
            <h3>Cloud</h3>
            <p>
              Hosted a website on Amazon S3 and completed AWS Cloud
              Practitioner Essentials and the NPTEL Cloud Computing course.
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