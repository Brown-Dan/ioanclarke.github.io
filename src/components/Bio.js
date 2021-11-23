import profilePic from "../static/img/profile-pic.jpg";
import "../static/css/bio.css"

const Bio = () => (
    <div id="bio-container">
        <img src={profilePic} id="profile-pic" alt="yours truly"/>
        <p>Hi, I'm Ioan Clarke. I currently work for AutoTrader as a Graduate Software Developer.</p>
        <p>I studied maths at University of Bristol and computer science at Cardiff University.</p>
        <p>My favourite language is Python but I mostly use Java in work at the moment. </p>
    </div>

)

export default Bio