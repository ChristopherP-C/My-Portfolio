import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div id='home-main'>
            <section className="flex flex-row justify-between">

                
                {/* <div id="my-picture">
                    <img src="\assets\MyPicture.jpg" alt="A picture of me" />
                </div> */}

            </section>

            <section>
                <div>
                    <h1>
                    Hello!
                    </h1>
                    <h1>
                    I am Christopher James Persaud-Cox,
                    </h1>
                    <h1>
                    A full-stack web developer and software enginner.
                    </h1>
                </div>

                <div id='links'>
                    <a href="https://github.com/ChristopherP-C">Visit my GitHub</a>
                    <a href="mailto:christopherp.c.2day@gmail.com">Email me</a>
                </div>
                
                <div id="summary">
                    <p>
                        I am a web developer and software engineer recently graduated from the University of Minnesota coding bootcamp program.
                        I have a passion for learning and problem solving, and I am always looking for new challenges to overcome.
                        My hope is to bring these passions and skills into a team that I can work with for a long time.
                    </p>
                </div>
            </section>

            <section>
                <div>
                    <Link to="/aboutMe">
                        <h3>
                            Learn more about me --{'>'}
                        </h3>
                    </Link>
                </div>
            </section>

            <section>
                <div>

                    <div>
                        <h2>
                            I have experience with:
                        </h2>
                    </div>

                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Typescript</li>
                            <li>Web APIs</li>
                            <li>Git</li>
                            <li>CI/CD</li>
                            <li>Python basics</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <Link to="/Projects">
                        <h3>
                            View my work --{'>'}
                        </h3>
                    </Link>
                </div>
            </section>
            
        </div>
    );
}