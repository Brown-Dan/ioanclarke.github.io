import './static/css/app.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Menu from "./components/Menu/Menu";

const App = () => {

    // window.onload = () => {
    //     // const menu = document.getElementById('menu')
    //     const nameBox = document.getElementById('nameContainerContainer');
    //     // if (nameBox !== null) {
    //     //     const introTextContainer = document.querySelector('.typewriter h1')
    //     //     const typewriterAnimationDuration = 2000
    //         // const timeUntilNameBoxNarrows = typewriterAnimationDuration + 400;
    //         // const timeUntilMenuAppears = timeUntilNameBoxNarrows + 1000;
    //
    //         // nameBox.style.width = 100 + '%'
    //         // nameBox.style.borderRight = 'none'
    //         // menu.style.borderLeft = 'none'
    //         // setTimeout(() => {
    //         //     nameBox.style.transition = 'width 1s ease-out'
    //         //     nameBox.style.width = 95 + '%'
    //         //     // nameBox.style.borderRight = '3px solid #E5DFE5'
    //         //
    //         // }, timeUntilNameBoxNarrows)
    //
    //         // setTimeout(() => {
    //         //     introTextContainer.style.animation = 'none'
    //         //     introTextContainer.style.borderRight = '0.1em solid transparent'
    //         // }, typewriterAnimationDuration + 200)
    //
    //         // setTimeout(() => {
    //         //     // menu.style.display = 'flex'
    //         // }, timeUntilMenuAppears)
    //
    //         // setTimeout(() => {
    //         //     menu.style.borderLeft = '3px solid #E5DFE5'
    //         //     nameBox.style.borderRight = 'none'
    //         // }, timeUntilMenuAppears + 1000)
    //
    //     // } else {
    //     //     // menu.style.display = 'flex'
    //     // }
    // }

    const contentBoxClassName = 'contentBox'

    const routes = [
        // {
        //     path: '/home',
        //     name: <Home divClassName={contentBoxClassName}/>
        // },
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
    return (
        <Router>
            <div id="site-wrapper">
                <div id='main'>
                    <Switch>
                        {routes.map((route, i) =>
                            <Route key={i} path={route.path}> {route.name} </Route>)}
                        {/*<Route path='/projects'><Projects/></Route>*/}
                        {/*<Route path='/bio'><Bio/></Route>*/}
                        {/*<Route path='/home'><Home firstTime={firstTime}/></Route>*/}
                        {/*<Route path='/'><Intro/></Route>*/}
                    </Switch>
                </div>
                <Menu/>
            </div>
        </Router>

    )
}

export default App;
