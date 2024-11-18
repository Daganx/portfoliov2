import { Link } from "react-scroll";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          Developed By<br></br> Dagan Letot
        </p>
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
          <li>
            <a href="https://github.com/Daganx/portfoliov2" target="newblank">
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
