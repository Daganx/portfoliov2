import { Link } from "react-scroll";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          Developed By
          <br /> Dagan Letot
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/letotdagan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/daganx"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Daganx/portfoliov2"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>{" "}
          </li>
        </ul>
        <p>
          2024. DL<br></br>
          <Link to="navigation" smooth={true} duration={1000}>
            Back to Top ↑
          </Link>
        </p>
      </div>
    </>
  );
}
