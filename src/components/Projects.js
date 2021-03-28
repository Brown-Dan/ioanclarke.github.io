import ProjectItem from "./ProjectItem";

const Projects = ({divClassName}) => {
    const projectGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        // rowGap: '1vh',
        // columnGap: '1vw',
        placeItems: 'center center'
    }

    const projects = [
        {
            name: 'glide',
            repo: 'glide'
        },
        {
            name: 'pulsemouse',
            repo: 'pulsemouse'
        },
        {
            name: 'ioanhub',

        },
        {
            name: 'overwatch-me',
            repo: 'overwatch-me'
        },
        {
            name: 'smite-me',
            repo: 'smite-me'
        },
        {
            name: 'jobby',
            repo: 'jobby'
        },
        {
            name: 'Overwatch miniwiki',
            repo: 'overwatch-miniwiki'
        },
        {
            name: 'Ow miniwiki builder',
            repo: 'ow-mw-builder'
        }
    ]

    return (
        <div className={divClassName} style={projectGridStyle}>
            {projects.map(project =>
                <ProjectItem repoName={project.repo} projectName={project.name}/>)}
        </div>
    )
}

export default Projects