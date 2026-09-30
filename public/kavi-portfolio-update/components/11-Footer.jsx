import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./11-Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>Kavi Ishwarrya S K</h2>

        <p className="footer-tagline">
          Learning today. Building tomorrow.
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#education">Journey</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#research">Research</a>

          <a href="#certificates">Certificates</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/kaviish123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kavi-ishwarrya-s-k-9257b52a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/s9hXtuAA2E/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>

        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Kavi Ishwarrya S K. 
        </p>

      </div>

      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;