import "./Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Santosh</h2>

        <p>
          Frontend Developer • React • TypeScript
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/santoshs2008s-debug"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/santosh-s-0283763b0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="copyright">
          Made with <FaHeart className="heart" /> by Santosh
        </p>

      </div>

    </footer>
  );
}