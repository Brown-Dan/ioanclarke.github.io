import MenuItem from './MenuItem';

const Menu = () => {
    const menuStyle = {
        backgroundColor: '#020C9D',
        height: '100vh',
        width: '20%',
        float: 'right',
        display: 'none',
        animation: 'growMenu 1s ease-out',
        flexDirection: 'column'
    };

    return (
        <div id='menu' style={menuStyle}>
            <MenuItem link='/' text='home'/>
            <MenuItem link='/projects' text='projects'/>
            <MenuItem link='/bio' text='bio'/>
        </div>

    );
}

export default Menu;