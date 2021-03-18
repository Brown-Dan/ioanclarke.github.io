import { Link } from "react-router-dom";

const MenuItem = ({link, text}) => {
    const menuItemStyle = {
        height: '10vh',
        border: '1px solid black',
        fontSize: '2em',
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <Link to={link} style={menuItemStyle}>{text}</Link>
        // <a href='#' style={menuItemStyle}>{text}</a>
        // <div style={menuItemStyle}>{text}</div>
    )
}

export default MenuItem;