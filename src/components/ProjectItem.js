import "../static/css/projects.css"

const ProjectItem = ({projectName, repoName, description}) => (
    <a href={`https://github.com/ioanclarke/${repoName}`}
       className="project-item"
       target="_blank"
       rel="noopener noreferrer"
    >
        <span>{projectName}</span>
        <span className="project-item-description">{description}</span>
    </a>
)

export default ProjectItem