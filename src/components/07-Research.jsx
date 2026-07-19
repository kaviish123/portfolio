import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaExternalLinkAlt,
  FaFileAlt,
} from "react-icons/fa";
import "./07-Research.css";

function Research() {
  return (
    <section className="research" id="research">
      <div className="container">
        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          RESEARCH
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Research That Expanded My Perspective
        </motion.h2>

        <motion.div
          className="research-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="research-icon">
            <FaFileAlt />
          </div>

          <div className="research-content">
            <h2>
              Sales Forecasting Using Customer Segments and Holiday Effects
            </h2>

            <h4>
              Co-Author • Machine Learning • Retail Analytics
            </h4>

            <p>
              Co-authored a research paper focused on improving retail sales
              forecasting using ensemble machine learning techniques. The study
              investigates the impact of customer segmentation and holiday
              effects by comparing models such as Random Forest, XGBoost, and
              LightGBM to improve forecasting accuracy and support better
              business decision-making.
            </p>

            <div className="research-topics">
              <span>
                <FaBrain />
                Machine Learning
              </span>

              <span>
                <FaChartLine />
                Sales Forecasting
              </span>

              <span>
                <FaDatabase />
                Ensemble Learning
              </span>
            </div>

            <div className="research-highlights">
              <div>
                <h3>Algorithms</h3>
                <p>Random Forest, XGBoost & LightGBM</p>
              </div>

              <div>
                <h3>Evaluation</h3>
                <p>RMSE, MAE & MAPE Analysis</p>
              </div>

              <div>
                <h3>Contribution</h3>
                <p>Research, Analysis & Technical Writing</p>
              </div>
            </div>

            <a
              href="/research/research_paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="research-btn"
            >
              <FaExternalLinkAlt />
              View Research Paper
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;