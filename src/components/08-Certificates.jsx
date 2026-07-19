import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./08-Certificates.css";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/aws-certificate.png",
    link: "/aws-certificate.png",
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    image: "/cloudcomputing.png",
    link: "/cloudcomputing.png",
  },
  {
    title: "Elite System & Controls Internship",
    issuer: "Elite System & Controls",
    image: "/internship.png",
    link: "/internship.png",
  },
  {
    title: "Java Programming",
    issuer: "Java Certification",
    image: "/java.png",
    link: "/java.png",
  },
  {
    title: "Infosys Industrial Visit",
    issuer: "Infosys Springboard",
    image: "/infosys.jpeg",
    link: "/infosys.jpeg",
  },
];

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
          Certifications That Strengthened My Skills
        </motion.h2>

        <div className="certificate-grid">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <div className="certificate-content">

                <div className="certificate-icon">
                  <FaAward />
                </div>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;