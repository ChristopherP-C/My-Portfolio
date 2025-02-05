type Project = {
    title: string,
    image: string,
    summary: string,
    description: string,
    gitHubLink: string,
    projectLink: string    
}

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const { title, image, summary, description, gitHubLink, projectLink } = project;
    return (
        <>
            <section>

                <div>
                    <img src={image} alt={title} />
                </div>

                <div>
                    <h2>{title}</h2>
                </div>

                <div>
                    <p>{summary}</p>
                    <p>{description}</p>
                </div>

                    {projectLink !== 'NA' ? (
                        <>
                            <div>
                                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                    Visit this project!
                                </a>
                            </div>
                            <div>
                                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                                    visit the repository on GitHub
                                </a>
                            </div>
                        </>
                    ) : (
                        <div>
                            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                                This project is not deployed, visit the repository on GitHub
                            </a>
                        </div>
                    )}
            </section>
        </>
    )
}

export default ProjectCard;