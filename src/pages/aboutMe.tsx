import '../styles/aboutMe.css';

export default function AboutMe() {
    return (
        <div id='body-aboutMe'>

            <section id='background' className='box2'>
                <div>
                    <h2>
                        My path to coding:
                    </h2>
                </div>
                <div>
                    <p>
                        I have always been interested in technology, and I have always enjoyed problem solving. When I was young I studied Scratch offline from one of their books (I didn't have internet as a kid), and when
                        I reached high school I took a self directed study course in C++ to learn how to make games. As I grew older, life got in the way, as it often does, and the summer after high school I moved out to live on my own,
                        but I always kept my fascination and love for coding. Many years of saving later I finally was able to attend the University of Minnesota bootcamp program, an arduous journey
                        that solidified how much I enjoy coding. With the skills I've gained I am now looking to create new and exciting projects, and to continue learning and grow as a developer.
                    </p>
                </div>
            </section>

            <section className='box2' id='facts'>
                <div>
                    <h2>
                        My hobbies include:
                    </h2>
                </div>
                <div className='items'>
                    <ul>
                        <li>Cooking</li>
                        <li>Relaxing with my cats</li>
                        <li>Playing video games with my brother</li>
                    </ul>
                </div>
            </section>

            <section className='box2' id='accomplishments'>
                <div>
                    <h2>
                        Some personal accomplishments of mine are:
                    </h2>
                </div>
                <div className='items'>
                    <ul>
                        <li>Successfully taught myself C++ to complete my first project within a class deadline</li>
                        <li>Recieving an outstanding theater performer award in highschool</li>
                        <li>Recieved two managerial promotions whithin a year of each other at my second job</li>
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