import profilePic from "../static/img/profile-pic.jpg";
import "../static/css/bio.css"

const Bio = () => (
    <div className="content-wrapper">
        <img src={profilePic} id="profile-pic" alt="yours truly"/>
    </div>

)

export default Bio