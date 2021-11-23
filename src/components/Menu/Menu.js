import MenuItem from './MenuItem';
import SocialLink from "./SocialLink";
import IconAttribution from "../IconAttribution";

import "../../static/css/menu.css"

import projectIcon from '../../static/img/projects.png'
import bioIcon from '../../static/img/bio.png'
import githubIcon from '../../static/img/github-thin.png'

const Menu = () => (
    <div id='menu'>
        <MenuItem link='/projects' text='projects' imageFilename={projectIcon}/>

        <MenuItem link='/bio' text='bio' imageFilename={bioIcon}/>

        <SocialLink link="https://github.com/ioanclarke" text='github' imageFilename={githubIcon}/>

        <IconAttribution/>
    </div>
);

export default Menu;