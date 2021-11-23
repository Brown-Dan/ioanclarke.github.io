import Projects from "../../components/Projects";
import Bio from "../../components/Bio";
import Home from "../../components/Home";

const contentBoxClassName = 'contentBox'

const routes = [
    {
        path: '/projects',
        name: <Projects divClassName={contentBoxClassName}/>
    },
    {
        path: '/bio',
        name: <Bio wrapperClassName={contentBoxClassName}/>
    },
    {
        path: '/',
        name: <Home divClassName={contentBoxClassName}/>
    }
]

export default routes