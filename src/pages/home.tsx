import useTimeElapsed from '../utils/time';
import monthsElapsed from '../utils/timeMonths';
import '../styles/home.css';

export default function Home() {
    return (
        <div id='home-main'>
            {/* create 3 image placeholders to go above the main header of the page */}
            {/* change placeholder boxes to use standar CSS syntax until bootstrap is installed */}
            <section className="flex flex-row justify-between">

                
                <div id="my-picture">
                    <img src="\assets\MyPicture.jpg" alt="A picture of me" />
                </div>

            </section>

            <section>
                <div>
                    <h1>
                        Hello! I am Christopher James Persaud-Cox, welcome to my portfolio.
                    </h1>
                </div>
                <div id='links'>
                    <a href="https://github.com/ChristopherP-C">Visit my GitHub</a>
                    <a href="mailto:christopherp.c.2day@gmail.com">Email me</a>
                </div>
                <div id="summary">
                    <p>
                        I am a web developer, programmer, and aspiring software engineer currently enrolled in the Univeristy of Minnesota bootcamp program.
                        I am a fast learner and passionate about technology. My goal is to find a company that I can work hard for and grow with for many years.
                    </p>
                </div>
            </section>

            <section id="boxes" className="flex flex-row justify-between">
                <div className='box'>
                    {/* create a box which will display time coding above two values, one based on years the other based on months, which update automatically as time passes */}
                    <div>
                        <h2>
                            Time Coding
                        </h2>
                    </div>
                    <div id='time'>
                        <div id='years'>
                            <h3>Years:</h3> 
                            <p>{useTimeElapsed()}</p>
                        </div>
                        <div id='months'>
                            <h3>Months:</h3> 
                            <p>{monthsElapsed()}</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    {/* create box to go beside the previous box whixh displays current finished projects */}
                    <div>
                        <h2>
                            Projects
                        </h2>
                    </div>
                    <div id='projects'>
                        <h4>Projects Finished:</h4>
                        <p>
                            4
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <div id='title'>
                        <h2>
                            Known languages and technologies
                        </h2>
                    </div>
                    <div id='known'>
                        <p>
                            Javascript, SQL, React, Node .js, HTML, CSS, Git, Bootstrap, and more!
                        </p>
                    </div>
                </div>
            </section>

            <section id='accolades'>
                <div>
                    <h2>
                        Accolades and accomplishments
                    </h2>
                </div>
                <div>
                    <p>
                        I intend to recieve my certificate of completion from the University of Minnesota bootcamp program.
                        I have been in the job force since the age of 14, and since then I have worked in various conditions requiring problem solving and quick thinking,
                        and have been able to move forward in those working environments. I have led a team as a service and kitchen manager, become a certified trainer,
                        and fixed various machines on an assebly floor. I maintained a 3.5 unwieghted GPA in high school, and participated in many extracurricular activities.
                    </p>
                </div>
            </section>
            
        </div>
    );
}