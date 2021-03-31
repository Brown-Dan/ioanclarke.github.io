import MenuItem from './MenuItem';
import SocialLink from "./SocialLink";
import projectIcon from '../images/projects.png'
import bioIcon from '../images/bio.png'
import githubIcon from '../images/github-thin.png'

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

    const iconSourceStyle = {
        transform: 'rotate(-90deg)',
        whiteSpace: 'nowrap',
        marginTop: '50vh',
        color: 'white',
    }

    const iconLinkStyle = {
        textDecoration: 'none',
        color: 'deepskyblue'
    }

    return (
        <div id='menu' style={menuStyle}>
            {/*<MenuItem link='/home' text='home' imageFile={homeIcon}/>*/}
            <MenuItem link='/projects' text='projects' imageFile={projectIcon}/>
            <MenuItem link='/bio' text='bio' imageFile={bioIcon}/>
            <SocialLink link="https://github.com/ioanclarke" text='github' imageFile={githubIcon}/>
            <span style={iconSourceStyle}>Icons from
                <a href='https://www.iconfinder.com/' style={iconLinkStyle}> Iconfinder</a>
            </span>
        </div>

    );
}

export default Menu;