import { motion } from "framer-motion";
import {
    FaCloud,
    FaFileAlt,
    FaGraduationCap,
    FaLaptopCode,
    FaRocket,
} from "react-icons/fa";
import "./04-Education.css";

const journey = [
  {
    icon: <FaGraduationCap />,
    //year: "2023",
    title: "Started B.E. Computer Science & Engineering (IoT)",
    subtitle: "Nandha Engineering College",
    description:
      "Began my engineering journey with a passion for software development, cloud computing, and emerging technologies.",
  },
  {
    icon: <FaCloud />,
    //year: "2024",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description:
      "Built a strong understanding of cloud concepts, AWS services, security, pricing, and architecture fundamentals.",
  },
  {
    icon: <FaLaptopCode />,
    //year: "2025",
    title: "Elite System & Controls Internship",
    subtitle: "22-Day Internship",
    description:
      "Worked on PCB design using KiCad while gaining practical exposure to engineering workflows and hardware design.",
  },
  {
    icon: <FaFileAlt />,
    //year: "2026",
    title: "Research Publication",
    subtitle: "Sales Forecasting Using AI",
    description:
      "Co-authored a research paper on retail sales forecasting using ensemble machine learning algorithms.",
  },
  {
    icon: <FaRocket />,
    //year: "Present",
    title: "Building Projects & Preparing for Industry",
    subtitle: "Software Engineering Journey",
    description:
      "Continuously improving Java, cloud computing, problem solving, and project development while preparing for internships and full-time opportunities.",
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