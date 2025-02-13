import '../styles/projects.css';
import ProjectCard from '../components/projectCards';
import Project from '../utils/projectData';

export default function Projects() {

    return (
        <div>
            {Project.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};