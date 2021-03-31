import { Link } from "react-router-dom";

const MenuItem = ({link, text, imageFile}) => {
    const menuItemStyle = {
        height: '9vh',
        width: '9vh',
        // border: '0.5em solid rgb(0, 0, 40)',
        // border: '0.1em white solid',
        border: '0.1em #D9DCDC solid',
        borderRadius: '3px',
        fontSize: '2em',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        hover: 'color: white',
        margin: '1vh 1vh 0 1vh'
    }

    const iconStyle = {
        height: '100%',
        filter: 'invert(1)'
    }

    return (
        <Link to={link} className="menu-item" style={menuItemStyle}>
            <img src={imageFile} alt='icon' style={iconStyle}/>
        </Link>
        // <a href='#' style={menuItemStyle}>{text}</a>
        // <div style={menuItemStyle}>{text}</div>
    )
}

export default MenuItem;