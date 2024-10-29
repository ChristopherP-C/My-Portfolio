import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function MainNav() {
    const currentPage = useLocation().pathname;

    return (
        <header>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>

            </li>
            <li className="nav-item">
                <Link to="/aboutMe"
                className={currentPage === "/aboutMe" ? "nav-link active" : "nav-link"}>
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Projects"
                className={currentPage === "/Projects" ? "nav-link active" : "nav-link"}>
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Contact"
                className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/resume"
                className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                    Resume
                </Link>
            </li>
        </ul>
        </header>
    );
}

export default MainNav;