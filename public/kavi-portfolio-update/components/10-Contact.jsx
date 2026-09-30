import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./10-Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          CONTACT
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Build Something Great Together
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          If you have an internship opening in embedded systems, IoT or
          software development, or want to talk about any of my projects,
          email me or reach out on LinkedIn.
        </motion.p>

        <div className="contact-grid">

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3>Get In Touch</h3>

            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:kaviishwarryask@gmail.com">
                kaviishwarryask@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <a href="tel:+918667545331">
                +91 86675 45331
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Erode, Tamil Nadu, India (open to relocation)</span>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/kaviish123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kavi-ishwarrya-s-k-9257b52a3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/s9hXtuAA2E/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>

            </div>

          </motion.div>

          <motion.div
            className="contact-message"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3>Open to Internship Opportunities</h3>

            <p>
              I graduate in 2027 and am looking for an internship (including
              a final-semester internship) or an entry-level role in embedded
              systems, IoT or software development.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              View Resume
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;