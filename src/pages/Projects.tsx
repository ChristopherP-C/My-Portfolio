// create function which will return six different sections each containing a title for my project, a corrospoining image, a short description, and a see more button which will bring up a card with a more detailed description and links to both the project and GitHub repository
import React, {useState} from 'react';

export default function Projects() {
    // create six sections each containing a title for my project, a corrospoining image, a short description, and a see more button which will bring up a card with a more detailed description and links to both the project and GitHub repository
    const projects = [
        {
            title: 'Write My README',
            image: 'src/assets/Write-my-readme.png',
            description: 'Write-My-README is a project I made which allows users to quickly generate a professional README template. I made it using the inquirer npm package and JavaScript. It is a command line application which I personally use to create README files for my projects.',
            detailedDescription: 'Write-My-README is one of my favorite projects, because of how useful it can be when creating a project. When users run the application they recieve a series of prompts which they can answer to generate a README file, which is then placed in a seperate dist folder to be edited, copied, and used however they see fit.',
            githubLink: 'https://github.com/ChristopherP-C/Write-My-README',
            projectLink: 'NA'
        },
        {
            title: 'Employee Toolbox',
            image: 'src/assets/employee-toolbox.png',
            description: 'The Employee Toolbox is a simple command line application which utilizes SQL to create locally stored databases for tracking employees, salaries, jobs and departments within a company. It serves to present important information quickly and allows wasy manipulation of the data.',
            detailedDescription: 'The Employee Toolbox allows users to create employee information including their name, salary, job, department, and manager. The data can be manipulated, viewed in a variety of ways, and updated as needed. While it is a simple application now, I hope to be able to call upon it as a template to use in a project to make a more complex and useful application in the future.',
            githubLink: 'https://github.com/ChristopherP-C/Employee-Toolbox',
            projectLink: ''
        },
        {
            title: 'FuncTastic',
            image: 'src/assets/FuncTastic.png',
            description: 'FuncTastic, or "Function Checklist", is the first collaborative project I ever made. It serves to provide an easy way to track and manage functions added to your project while coding. It also provides basic troubleshooting tips to try and aid new developers to find and fix common issues quickly.',
            detailedDescription: 'As my first collaborative project, FuncTastic certainly came with its share of learning curves. I learned a lot about working with others, and how to manage a project with multiple contributors. There are many more places I want to go with this project, and I dont see myself leaving it just yet. I believe there is plenty of potential for it to be a useful extension that can help many coders.',
            githubLink: 'https://github.com/ChristopherP-C/function-checklist',
            projectLink: 'https://raeofchey.github.io/function-checklist/'
        },
        {
            title: 'Prework Study Guide',
            image: 'src/assets/Prework-study-guide.png',
            description: 'This prework study guide is my first project ever. It may not be much to look at, but to me it is both a humble reminder of where I started and a testament to how far I have come. It is a simple webpage which I made to help me study for the coding bootcamp I am currently enrolled in.'
        },
        {
            title: 'Project 5',
            image: 'src/assets/Godot.png',
            description: 'While I do not yet have a 5th project made, I intend to create a simple 2D game in the future. I hope to be able to use my coding skills and creativity to make something fun and engaging for players to enjoy.'
        },
        {
            title: 'Project 6',
            image: 'src/assets/Java.png',
            description: 'I do not currently have any more projects which are in a state I intend to share as of yet, however I intend to change this very soon, I have multiple projects I am working on, and even more ideas for projects to come after that. My goal is to create a portfolio of various projects which can be used to help people, entertain them, or simply make their lives a little easier.'
        },
    ]
    
    return (
        <div>
            <h1>My projects</h1>
            <div>
                <p>
                    Below are some projects that I have completed or are currently working on, please feel free to take a look at them
                    and if any catch your eye, click the see more button to learn more and find links to their respective GitHub repositories.
                </p>
            </div>

            <section>
                <div>
                    <h2>Write My README</h2>
                    <img src="src\assets\Write-my-readme.png" alt="Write-My-README example"/>
                    <p>Write-My-README is a project I made which allows users to quickly generate a professional README template.
                        I made it using the inquirer npm package and JavaScript. It is a command line application which I personally use
                        to create README files for my projects.
                    </p>
                    <button onClick={() => setCardContent('project1')}>See More</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>Employee Toolbox</h2>
                    <img src="src\assets\employee-toolbox.png" alt="Employee-Toolbox example"/>
                    <p>The Employee Toolbox is a simple command line application which utilizes SQL to create locally stored databases for tracking employees, salaries, jobs and departments
                        within a company. It serves to present important information quickly and allows wasy manipulation of the data.
                    </p>
                    <button>See More</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>FuncTastic</h2>
                    <img src="src\assets\FuncTastic.png" alt="FuncTastic example"/>
                    <p>FuncTastic, or "Function CHecklist", is the first collaborative project I ever made. It serves to provide an easy way to
                        track and manage functions added to your project while coding. It also provides basic troubleshooting tips to try and aid new developers
                        to find and fix common issues quickly.
                    </p>
                    <button>See More</button>
                </div> 
            </section>

            <section>
                <div>
                    <h2>Prework Study Guide</h2>
                    <img src="src\assets\Prework-study-guide.png" alt="Prework-guide example"/>
                    <p>This prework study guide is my first project ever. It may not be much to look at, but to me it is both a humble reminder of where I started
                        and a testament to how far I have come. It is a simple webpage which I made to help me study for the coding bootcamp I am currently enrolled in.
                    </p>
                    <button>See More</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>Project 5</h2>
                    <img src="src\assets\Godot.png" alt="Project 5"/>
                    <p>While I do not yet have a 5th project made, I intend to create a simple 2D game in the future. I hope to be able to
                        use my coding skills and creativity to make something fun and engaging for players to enjoy.
                    </p>
                    <button>See More</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>Project 6</h2>
                    <img src="src\assets\Java.png" alt="Project 6"/>
                    <p>I do not currently have any more projects which are in a state I intend to share as of yet, however I intend to change this very soon,
                        I have multiple projects I am working on, and even more ideas for projects to come after that. My goal is to create a portfolio of various projects
                        which can be used to help people, entertain them, or simply make their lives a little easier.
                    </p>
                    <button>See More</button>
                </div>
            </section>

        </div>
    );
};