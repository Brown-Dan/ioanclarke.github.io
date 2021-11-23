import ProjectItem from "./ProjectItem";
import "../static/css/projects.css"
import projects from "../static/data/projects";

const Projects = () => (
    <div id="project-grid" >
        {projects.map(project =>
            <ProjectItem repoName={project.repo}
                         projectName={project.name}
                         description={project.description}
            />)}
    </div>
)

export default Projects