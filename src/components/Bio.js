import profilePic from "../images/profile-pic.jpg";
const Bio = ({divClassName}) => {
    const profilePicStyle = {
        display: 'block',
        margin: 'auto',
        height: '50vh',
        borderRadius: '5vw'
    }
    const divStyle = {
        width: '80%',
        margin: 'auto'
    }

    return (
        <div className={divClassName}>
            <div style={divStyle}>
                <img src={profilePic} style={profilePicStyle} alt="yours truly"/>
            </div>
        </div>

    )
}

export default Bio