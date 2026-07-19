import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaIndustry,
  FaMicrochip
} from "react-icons/fa";
import "./09-Experience.css";

const experiences = [
  {
    icon: <FaMicrochip />,
    title: "Elite System & Controls",
    role: "PCB Design Intern",
    duration: "22-Day Internship",
    description:
      "Completed a 22-day internship where I gained practical experience in PCB design using KiCad. Worked on circuit design concepts, component placement, PCB layout, and engineering workflows while understanding industry practices.",

    skills: [
      "KiCad",
      "PCB Design",
      "Circuit Design",
      "Engineering Workflow",
    ],
  },

  {
    icon: <FaIndustry />,
    title: "Infosys",
    role: "Industrial Visit",
    duration: "4 Days",
    description:
      "Participated in a six-day industrial visit that provided exposure to software development environments, organizational workflows, professional ethics, and real-world IT industry practices.",

    skills: [
      "Industry Exposure",
      "Software Development",
      "Professional Environment",
      "Learning Experience",
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