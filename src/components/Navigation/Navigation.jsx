import { Link } from "react-scroll";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation" id="navigation">
      <h1>DAGAN LETOT</h1>
      <div className="navigation-links">
        <ul>
          <li>
            <Link to="featured-work" smooth={true} duration={1000}>
              WORK
            </Link>
          </li>
          <li>
            <Link to="timeline" smooth={true} duration={1000}>
              TIMELINE
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation-socials">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/letotdagan/" target="newblank">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://www.github.com/daganx" target="newblank">
              GITHUB
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
