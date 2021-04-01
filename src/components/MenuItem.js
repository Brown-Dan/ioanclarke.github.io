import {Link} from "react-router-dom";

const MenuItem = ({link, text, imageFile}) => {
    return (
        <div className='menu-item-wrapper'>
            <Link to={link} className="menu-item">
                <img src={imageFile} alt='icon' className='menu-item-icon'/>
                <div className="pageNameTooltip">{text}</div>
            </Link>
        </div>

    )
}

export default MenuItem;