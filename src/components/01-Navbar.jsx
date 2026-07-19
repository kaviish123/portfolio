import { FaCode } from "react-icons/fa";
import "./01-Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <div className="logo-box">
          <FaCode />
        </div>

        <div className="logo-text">
          <h2>SK</h2>
          <span>Portfolio</span>
        </div>
      </div>

      <nav>

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#education">Journey</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#research">Research</a>

        <a href="#contact">Contact</a>

      </nav>

    </header>
  );
}

export default Navbar;