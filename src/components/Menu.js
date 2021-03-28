import MenuItem from './MenuItem';

const Menu = () => {
    const menuStyle = {
        // backgroundColor: 'rgb(0, 0, 53)',
        background: 'linear-gradient(to right, rgb(48, 2, 107), 10%, rgb(0, 0, 53))',
        height: '100vh',
        width: '20%',
        float: 'right',
        display: 'none',
        animation: 'growMenu 1s ease-out',
        flexDirection: 'column',
    };

    return (
        <div id='menu' style={menuStyle}>
            <MenuItem link='/home' text='home'/>
            <MenuItem link='/projects' text='projects'/>
            <MenuItem link='/bio' text='bio'/>
        </div>

    );
}

export default Menu;