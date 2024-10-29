import useTimeElapsed from '../utils/time';
import monthsElapsed from '../utils/timeMonths';

export default function Home() {
    return (
        <div>
            {/* create 3 image placeholders to go above the main header of the page */}
            {/* change placeholder boxes to use standar CSS syntax until bootstrap is installed */}
            <section className="flex flex-row justify-between">

                <div className="w-1/4 h-24 bg-gray-300"><p>[------------]</p></div>
                <div className="w-1/4 h-24 bg-gray-300"><p>[------------]</p></div>
                <div className="w-1/4 h-24 bg-gray-300"><p>[------------]</p></div>
            </section>

            <section>
                <div>
                    <h1>
                        Hello! I am Christopher James Persaud-Cox, welcome to my portfolio.
                    </h1>
                </div>
                <div>
                    <a href="https://github.com/ChristopherP-C">Visit my GitHub</a>
                    <a href="mailto:christopherp.c.2day@gmail.com">Email me</a>
                </div>
                <div>
                    <p>
                        I am a web developer, programmer, and aspiring software engineer currently enrolled in the Univeristy of Minnesota bootcamp program.
                        I am a fast learner and passionate about technology. My goal is to find a company that I can work hard for and grow with for many years.
                    </p>
                </div>
            </section>

            <section className="flex flex-row justify-between">
                <div>
                    {/* create a box which will display time coding above two values, one based on years the other based on months, which update automatically as time passes */}
                    <div>
                        <h2>
                            Time Coding
                        </h2>
                    </div>
                    <div>
                        <p>
                            Years: {useTimeElapsed()}
                        </p>
                        <p>
                            Months: {monthsElapsed()}
                        </p>
                    </div>
                </div>
                <div>
                    {/* create box to go beside the previous box whixh displays current finished projects */}
                    <div>
                        <h2>
                            Projects
                        </h2>
                    </div>
                    <div>
                        <p>
                            Projects Finished: 0
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>
                            Known languages and technologies
                        </h2>
                    </div>
                    <div>
                        <p>
                            Javascript, SQL, React, Node .js, HTML, CSS, Git, Bootstrap, and more!
                        </p>
                    </div>
                </div>
            </section>

            <section>
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