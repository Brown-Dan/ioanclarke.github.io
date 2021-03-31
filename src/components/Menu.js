import MenuItem from './MenuItem';
import homeIcon from '../images/home.png'
import projectIcon from '../images/projects.png'
import bioIcon from '../images/bio.png'

const Menu = () => {
    const menuStyle = {
        backgroundColor: 'rgb(0, 0, 53)',
        // background: 'linear-gradient(to right, rgb(48, 2, 107), 10%, rgb(0, 0, 53))',
        height: '100vh',
        width: '5%',
        float: 'right',
        display: 'none',
        animation: 'growMenu 1s ease-out',
        flexDirection: 'column',
    };

    return (
        <div id='menu' style={menuStyle}>
            <MenuItem link='/home' text='home' imageFile={homeIcon}/>
            <MenuItem link='/projects' text='projects' imageFile={projectIcon}/>
            <MenuItem link='/bio' text='bio' imageFile={bioIcon}/>
        </div>

    );
}

export default Menu;