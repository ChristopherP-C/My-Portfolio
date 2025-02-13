import { Link, useLocation } from "react-router-dom";
import ResumeModal from "./resumeModal";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';


function MainNav() {
    const currentPage = useLocation().pathname;
    const [showResume, setShowResume] = useState(false);
    
    return (
        <header>
        <ul className="nav nav-tabs">

        <div className="resume-button">
            <Button variant="primary" onClick={() => setShowResume(true)}>View my resume</Button>
            <ResumeModal show={showResume} onHide={() => setShowResume(false)}/>
        </div>
        
            <div className = "nav-list">
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
            </div>
        </ul>


        </header>
    );
}

export default MainNav;