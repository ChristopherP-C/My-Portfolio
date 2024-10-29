// create function which will return six different sections each containing a title for my project, a corrospoining image, a short description, and a see more button which will bring up a card with a more detailed description and links to both the project and GitHub repository
import { Link, Outlet } from 'react-router-dom';

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
            projectLink: 'NA'
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
            description: 'This prework study guide is my first project ever. It may not be much to look at, but to me it is both a humble reminder of where I started and a testament to how far I have come. It is a simple webpage which I made to help me study for the coding bootcamp I am currently enrolled in.',
            detailedDescription: 'While understandably nothing incredible this being my first project is very special to me. It represents how far I have come and where I started. I do hope to add some functionality to it, such as custom flash cards, larger elarning sections, and turn it into a great learning tool to be used by future coders.',
            gitHubLink: 'https://github.com/ChristopherP-C/Prework-study-Guide',
            projectLink: 'https://christopherp-c.github.io/Prework-study-Guide/'
        },
        {
            title: 'Project 5',
            image: 'src/assets/Godot.png',
            description: 'While I do not yet have a 5th project made, I intend to create a simple 2D game in the future. I hope to be able to use my coding skills and creativity to make something fun and engaging for players to enjoy.',
            detailedDescription: 'I have always wanted to make a game, and intend to continue striving to reach that goal. I have dabbnled in various game engines, and have a few ideas for games I would like to make. I may not have anything here yet, but I hope to fill this project slot soon.',
            gitHubLink: 'NA',
            projectLink: 'NA'
        },
        {
            title: 'Project 6',
            image: 'src/assets/Java.png',
            description: 'I do not currently have any more projects which are in a state I intend to share as of yet, however I intend to change this very soon, I have multiple projects I am working on, and even more ideas for projects to come after that. My goal is to create a portfolio of various projects which can be used to help people, entertain them, or simply make their lives a little easier.',
            detailedDescription: 'I have many ideas for projects I want to make, and while I dont have much here yet, I will soon fill this space with many many accomplishments.',
            gitHubLink: 'NA',
            projectLink: 'NA'
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

            {projects.map((project, index) => (
                <section key={index}>
                    <div>
                        <h2>{project.title}</h2>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                        {project.projectLink !== 'NA' && (
                            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                Visit the deployed project here!
                            </a>
                        ) || (
                            <p>Sorry, this project is not deployed, but please view it on GitHub!</p>)}
                        {project.gitHubLink !== 'NA' && (
                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                Visit the GitHub repository here!
                            </a>
                        ) || (
                            <p>Sorry, this project does not exist yet, but please check back to see more of my progress in the future!</p>)}
                    </div>
                </section>
            ))};

        </div>
    );
};