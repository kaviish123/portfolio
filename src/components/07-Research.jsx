import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaDatabase,
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
              First Author • Machine Learning • Retail Analytics • Not yet published
            </h4>

            <p>
              A paper on forecasting retail sales with ensemble machine
              learning. Using real sales transaction data, we studied how
              customer segments and holidays change daily sales, compared
              Random Forest, XGBoost and LightGBM, and looked at where the
              model's errors came from and which features mattered most.
              Written with Karthik V, Keerthana K and our faculty guide
              Maheswari S at Nandha Engineering College.
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

            {/* Add the "View Research Paper" button back once the updated
                paper (with the final author order) is in public/research/ */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;
