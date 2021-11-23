import ProjectItem from "./ProjectItem";
import "../static/css/projects.css"
import projectList from "../static/data/projectList";

const Projects = () => (
    <div id="project-grid" className="content-wrapper">
        {projectList.map(project =>
            <ProjectItem repoName={project.repo}
                         projectName={project.name}
                         description={project.description}
            />)}
    </div>
)

export default Projects