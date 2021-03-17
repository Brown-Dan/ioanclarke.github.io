import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  const MenuItem = ({text, link}) => {
    const menuItemStyle = {
        height: '10vh',
        border: '1px solid black',
        display: 'block'
    }
    return (
        <Link to={link}>{text}</Link>
        // <a href='#' style={menuItemStyle}>{text}</a>
        // <div style={menuItemStyle}>{text}</div>
    )
}

export default MenuItem