import { motion } from "framer-motion";
import {
    FaAws,
    FaJava,
    FaLaptopCode,
    FaMicrochip,
    FaUsers
} from "react-icons/fa";
import "./05-Skills.css";

const skillGroups = [
  {
    icon: <FaJava className="skill-icon" />,
    title: "Programming",
    items: ["Java", "Python", "C / C++", "SQL and MySQL", "Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    icon: <FaMicrochip className="skill-icon" />,
    title: "Embedded & IoT",
    items: ["Arduino", "ESP8266 (Wi-Fi)", "DHT11 sensors", "Blynk IoT Platform", "KiCad (schematic and PCB)"],
  },
  {
    icon: <FaAws className="skill-icon" />,
    title: "Cloud & Mobile",
    items: ["AWS (S3, EC2, IAM)", "Static website hosting", "React Native and Expo", "Firebase Auth and Firestore"],
  },
  {
    icon: <FaLaptopCode className="skill-icon" />,
    title: "Tools & Core CS",
    items: ["Git & GitHub", "VS Code", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    icon: <FaUsers className="skill-icon" />,
    title: "Professional Skills",
    items: ["Teamwork", "Communication", "Technical Writing", "Problem Solving"],
  },
];

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
          What I Work With
        </motion.h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              {group.icon}
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="learning-section">

          <h2>🌱 Currently Learning</h2>

          <div className="progress-item">

            <div className="progress-title">
              <span>Embedded C and Microcontrollers</span>
              <span>Learning</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill java"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>Advanced DSA in Java</span>
              <span>Practising</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill aws"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>Machine Learning</span>
              <span>Exploring</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill ai"></div>
            </div>

          </div>

          <div className="progress-item">

            <div className="progress-title">
              <span>Cloud Services on AWS</span>
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