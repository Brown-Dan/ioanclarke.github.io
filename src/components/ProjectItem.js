const ProjectItem = ({projectName, repoName, description}) => {
    const projectItemStyle = {
        backgroundColor: 'rgb(0, 0, 53)',
        // backgroundColor: '#D9DCDC',
        width: '90%',
        height: '90%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        transition: 'transform .5s'
    }

    const descriptionStyle = {
        textAlign: 'center',
        width: '90%'
    }

    return (
        <a href={`https://github.com/ioanclarke/${repoName}`}
           style={projectItemStyle}
           className="project-item"
           target="_blank"
           rel="noopener noreferrer"
        >
            <span>{projectName}</span>
            <span style={descriptionStyle}>{description}</span>
        </a>

    )
}

export default ProjectItem