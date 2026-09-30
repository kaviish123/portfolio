import { motion } from "framer-motion";
import {
    FaCloud,
    FaFileAlt,
    FaGraduationCap,
    FaLaptopCode,
    FaMicrochip,
    FaTrophy,
    FaWifi,
} from "react-icons/fa";
import "./04-Education.css";

const journey = [
  {
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Started B.E. CSE (Internet of Things)",
    subtitle: "Nandha Engineering College, Erode",
    description:
      "Joined the Computer Science and Engineering (IoT) program. Current CGPA: 8.3 / 10.",
  },
  {
    icon: <FaTrophy />,
    year: "Mar 2024",
    title: "2nd Runner-up, Language Geek",
    subtitle: "SAMHITA '24, Madras Institute of Technology, Anna University",
    description:
      "Placed in a technical event at a national-level symposium. Also exhibited my Live Portfolio Website at the Innovation Day '24 Project Expo.",
  },
  {
    icon: <FaCloud />,
    year: "2024 to 2025",
    title: "Cloud Computing and Infosys Pragati",
    subtitle: "NPTEL (IIT Kharagpur) and Infosys Springboard",
    description:
      "Completed the 12-week NPTEL Cloud Computing course and the 11-week Infosys Pragati: Path to Future program.",
  },
  {
    icon: <FaWifi />,
    year: "Jun 2025",
    title: "IoT Systems Trainee",
    subtitle: "Nandha InfoTech",
    description:
      "Built a smart home automation system with Arduino, ESP8266 and a DHT11 sensor, controlled remotely through Blynk.",
  },
  {
    icon: <FaMicrochip />,
    year: "Dec 2025",
    title: "PCB and Embedded Design Intern",
    subtitle: "Elite Systems and Controls, Erode",
    description:
      "22-day internship in embedded systems programming and PCB design. Designed schematics and 8 PCB layouts in KiCad.",
  },
  {
    icon: <FaFileAlt />,
    year: "2026",
    title: "First-Author Research Paper",
    subtitle: "Sales Forecasting Using Customer Segments and Holiday Effects",
    description:
      "Wrote a paper on retail sales forecasting with ensemble machine learning. Not yet published.",
  },
  {
    icon: <FaLaptopCode />,
    year: "Now",
    title: "Final Year and Internship Search",
    subtitle: "300+ LeetCode problems solved",
    description:
      "Practising data structures and algorithms in Java and looking for internships in embedded systems and software development.",
  },
];

function Education() {
  return (
    <section className="journey" id="education">
      <div className="container">

        <motion.p
          className="section-title-small"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          MY JOURNEY
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          Every Step Has Shaped My Growth
        </motion.h2>

        <div className="timeline">

          {journey.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.subtitle}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;