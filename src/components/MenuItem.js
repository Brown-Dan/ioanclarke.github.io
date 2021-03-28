import { Link } from "react-router-dom";

const MenuItem = ({link, text}) => {
    const menuItemStyle = {
        height: '10vh',
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
        margin: '1vh 1vw'
    }

    const removeColorStyleOnHover = () => {
        console.log(this)
        console.log('a')
      // this.style.color = null;
    };


    return (
        <Link to={link} className="menu-item" style={menuItemStyle} onMouseOver={removeColorStyleOnHover}>{text}</Link>
        // <a href='#' style={menuItemStyle}>{text}</a>
        // <div style={menuItemStyle}>{text}</div>
    )
}

export default MenuItem;