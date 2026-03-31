import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons">
        <a href="https://github.com/jehpaliwal" target="_blank" rel="noreferrer" data-cursor="disable" aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jaypaliwal-/"
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/jaypaliwal_?igsh=MWZ0bDlrbDN1bTB6eQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="#contact" data-cursor="disable" aria-label="Contact">
          <HiDocumentText />
        </a>
      </div>

      <a
        href="/JayPaliwal_resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-button"
        data-cursor="disable"
        aria-label="Open resume"
      >
        RESUME <span><HiDocumentText /></span>
      </a>
    </div>
  );
};

export default SocialIcons;
