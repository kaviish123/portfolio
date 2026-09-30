import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaIndustry,
  FaMicrochip,
  FaWifi
} from "react-icons/fa";
import "./09-Experience.css";

const experiences = [
  {
    icon: <FaMicrochip />,
    title: "Elite Systems and Controls, Erode",
    role: "Intern, PCB and Embedded Design",
    duration: "31 Dec 2025 to 21 Jan 2026 (22 days)",
    description:
      "Learned embedded systems programming and PCB design. Designed circuit schematics and 8 PCB layouts in the KiCad PCB Editor, following a three-stage workflow of schematic capture, layout optimisation and design validation.",

    skills: [
      "KiCad",
      "PCB Layout",
      "Schematic Design",
      "Embedded Systems",
    ],
  },

  {
    icon: <FaWifi />,
    title: "Nandha InfoTech",
    role: "Trainee, IoT Systems",
    duration: "Jun 2025 to Jul 2025",
    description:
      "Built a smart home automation system in Embedded C/C++ using an Arduino, an ESP8266 Wi-Fi module and a DHT11 sensor. Connected it to the Blynk IoT platform to monitor and control temperature and humidity remotely, then tested and documented it with the team.",

    skills: [
      "Arduino",
      "ESP8266",
      "Embedded C/C++",
      "Blynk IoT",
    ],
  },

  {
    icon: <FaIndustry />,
    title: "Infosys Springboard",
    role: "Pragati: Path to Future, Cohort 3",
    duration: "Dec 2024 to Mar 2025 (11 weeks)",
    description:
      "An 11-week program with technical coursework and 4 days of on-campus training in communication, teamwork, leadership and problem solving.",

    skills: [
      "Technical Coursework",
      "Communication",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          Practical Learning Beyond The Classroom
        </motion.h2>

        <div className="experience-list">

          {experiences.map((item, index) => (
            <motion.div
              className="experience-card"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >
              <div className="experience-icon">
                {item.icon}
              </div>

              <div className="experience-content">

                <div className="experience-header">

                  <div>

                    <h3>{item.title}</h3>

                    <h4>{item.role}</h4>

                  </div>

                  <span>{item.duration}</span>

                </div>

                <p>{item.description}</p>

                <div className="experience-skills">

                  {item.skills.map((skill) => (
                    <div key={skill}>
                      <FaArrowRight />
                      {skill}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;