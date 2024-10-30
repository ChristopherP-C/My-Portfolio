import '../styles/aboutMe.css';

export default function AboutMe() {
    return (
        <div id='body-aboutMe'>
            <h1>About Me</h1>

            <section id='background' className='box2'>
                <div>
                    <h2>
                        My background:
                    </h2>
                </div>
                <div>
                    <p>
                        Ever since a young age I have been interested in technology. Growing up I had limited access to the internet, and so unfortunattely I was unable to truly explore coding to its fullest. However, I still
                        strove to make efforts to learn how I could, by picking up various small books about coding, and using a basic scratch program to learn and practice with, and when I reached highschool, I was finally able to really experience the
                        world of coding. While my school did not offer a class on coding, they did offer what was called a "self-directed study", a program in which a student could choose a subject, study it independently, and have a teacher proctor progress and assign criteria.
                        The particular teacher I chose was a man who had taught C++ previously at a college, and upon hearing my request, he immediatly offered me a copy of one of his old text books, and challenged me to remake a text based game called Hamurabi. The task
                        proved difficult, especially considering I did not have a dedicated computer, apart from an old Chrombook. My only method of compiling was a browser compiler, which meant bugs were tough to fix, and sometime the code itself would dissapear, meaening I would
                        have to start over. Despite these hurdles, I persevered, and created a version of Hamurabi I was proud of, and even started making my own seperate dungeon crawling text based experience. The experience was incredible, and talght me how much patience and dedication
                        coders need. It also taught me that I love coding. I worked hard and saved my money from my job at the time, and eventually built my own desktop, to try and continue pursuing learning. Over the next few years while I had been able to learn how to use certain engines
                        and practice C++, I unfortunately was unable to dedicate the time I could before, especially since I moved out and had lived on my own since my first summer out of highschool. I worked hard over the years to keep ahead of my expenses, and finally found myself in a
                        position where I could take the coding bootcamp offered at the University of Minnesota. My journey thus far has been amazing, and I am earger to see what I can do with the future.
                    </p>
                </div>
            </section>

            <section className='box2' id='facts'>
                <div>
                    <h2>
                        Fun facts:
                    </h2>
                </div>
                <div className='items'>
                    <ul>
                        <li>I enjoy video games, and have been playing since I was three years old when my mother would play Super Mario with me on the original SNES</li>
                        <li>A couple months after moving out I got my first pet, a cat named Caesar.</li>
                        <li>When I have the time and funds, I enjoy dressing up and going to conventions</li>
                    </ul>
                </div>
            </section>

            <section className='box2' id='accomplishments'>
                <div>
                    <h2>
                        Personal accomplishments
                    </h2>
                </div>
                <div className='items'>
                    <ul>
                        <li>Graduated highschool with a 3.5 GPA, a silver honors cord, and an outstanding theater performer award</li>
                        <li>Successfully taught myself C++ to complete my first project within the class deadline</li>
                        <li>Recieved two managerial promotions whithin a year of each other at my second job</li>
                        <li>Completed required additional training to become soldering and forklift certified within my most recent place of employment</li>
                        <li>Survived my cat</li>
                    </ul>
                </div>
            </section>

            <section className='box2' id='knowledge'>
                <div>
                    <h2>
                        What I know:
                    </h2>
                </div>
                <div className='items'>
                    <ul>
                        <li>How to use GitHub to create merge requests, issues, and general repository actions</li>
                        <li>Basics of front end webdesign such as HTML, CSS, and JavaScript</li>
                        <li>Various popular npm packages such as inquirer and React-Router-Dom</li>
                        <li>SQL</li>
                        <li>React</li>
                    </ul>
                </div>
            </section>

            <section id='links'>
                <div>
                    <a href="https://github.com/ChristopherP-C">My GitHub</a>
                    <a href="mailto:christopherp.c.2day@gmail.com">Email me</a>
                </div>
            </section>

        </div>
    );
};