const ProjectItem = ({projectName, repoName}) => {
    const projectItemStyle = {
        backgroundColor: 'rgb(0, 0, 53)',
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

    return (
        <a href={`https://github.com/ioanclarke/${repoName}`}
           style={projectItemStyle}
           className="zoom-on-hover"
           target="_blank"
           rel="noopener noreferrer"
        >
            {projectName}
        </a>

    )
}

export default ProjectItem