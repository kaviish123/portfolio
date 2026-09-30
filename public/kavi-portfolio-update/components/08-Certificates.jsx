import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./08-Certificates.css";

const certificates = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training and Certification, 2025",
    image: "/aws-certificate.png",
    link: "/aws-certificate.png",
  },
  {
    title: "Cloud Computing (12-week course)",
    issuer: "NPTEL, IIT Kharagpur, 2024",
    image: "/cloudcomputing.png",
    link: "/cloudcomputing.png",
  },
  {
    title: "Security Engineering for the IoT",
    issuer: "Infosys Springboard, 2025",
    image: "/infosys-iot-security.jpg",
    link: "/infosys-iot-security.jpg",
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy, 2025",
    image: "/cisco-iot.jpg",
    link: "/cisco-iot.jpg",
  },
  {
    title: "Java Programming for Beginners",
    issuer: "Simplilearn SkillUp, 2026",
    image: "/java.png",
    link: "/java.png",
  },
  {
    title: "Pragati: Path to Future, Cohort 3",
    issuer: "Infosys Springboard, 2024 to 2025",
    image: "/infosys.jpeg",
    link: "/infosys.jpeg",
  },
  {
    title: "Internship Certificate",
    issuer: "Elite Systems and Controls, 2026",
    image: "/internship.png",
    link: "/internship.png",
  },
];

const achievements = [
  {
    title: "2nd Runner-up, Language Geek",
    issuer: "SAMHITA '24, Madras Institute of Technology, Anna University",
    image: "/samhita-achievement.jpg",
    link: "/samhita-achievement.jpg",
  },
  {
    title: "Project Expo: Live Portfolio Website",
    issuer: "Innovation Day '24, Nandha Engineering College",
    image: "/innovation-day-expo.jpg",
    link: "/innovation-day-expo.jpg",
  },
];

function CertificateCard({ certificate, index }) {
  return (
    <motion.div
      className="certificate-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 3) * 0.15 }}
      viewport={{ once: true }}
    >
      <img src={certificate.image} alt={certificate.title} loading="lazy" />

      <div className="certificate-content">
        <div className="certificate-icon">
          <FaAward />
        </div>

        <h3>{certificate.title}</h3>

        <p>{certificate.issuer}</p>

        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
          View Certificate
        </a>
      </div>
    </motion.div>
  );
}

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.title} certificate={certificate} index={index} />
          ))}
        </div>

        <motion.h2
          className="section-heading"
          id="achievements"
          style={{ marginTop: "80px" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Competitions
        </motion.h2>

        <div className="certificate-grid">
          {achievements.map((certificate, index) => (
            <CertificateCard key={certificate.title} certificate={certificate} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;