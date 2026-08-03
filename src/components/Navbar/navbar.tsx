import "./navbar.css";
import profile from "../../assets/profile.webp";
/*import ThemeToggle from "../ThemeToggle/ThemeToggle";*/

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <img
          src={profile}
          alt="Santosh"
          className="nav-profile"
        />

        <h2>Santosh</h2>
      </div>

      <nav className="navbar-right">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#certificates">Certificates</a>
  <a href="#contact">Contact</a>

</nav>

    </header>
  );
}