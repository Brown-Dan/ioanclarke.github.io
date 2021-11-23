import {Link} from "react-router-dom";

const MenuItem = ({link, text, imageFilename}) => {
    return (
        <div className='menu-item-wrapper'>
            <Link to={link} className="menu-item">
                <img src={imageFilename} alt='icon' className='menu-item-icon'/>
                <div className="menu-link-tooltip">{text}</div>
            </Link>
        </div>

    )
}

export default MenuItem;