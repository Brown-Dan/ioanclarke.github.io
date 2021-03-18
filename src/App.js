import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/Home'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Menu from "./components/Menu";

const App = () => {

    const [firstTime, setFirstTime] = useState(true)

    window.onload = () => {
        console.log('loaded')
        const menu = document.getElementById('menu')
        const nameBox = document.getElementById('nameBox');
        if (nameBox !== null) {
            nameBox.style.width = 100 + '%'
            setTimeout(() =>
                    nameBox.style.width = 80 + '%',
                1000)
            setTimeout(() =>
                    menu.style.display = 'flex',
                2000)
        } else {
            menu.style.display = 'flex'
        }
    }
    const wrapperStyle = {
        backgroundColor: "rgb(0, 0, 53)",
        height: "100vh",
        width: "100vw"
    }

    return (
        <Router>
            <div id="content-wraper" style={wrapperStyle}>
                <div id='main'>
                    <Switch>
                        <Route path='/projects'><Projects/></Route>
                        <Route path='/bio'><Bio/></Route>
                        <Route path='/'><Home firstTime={firstTime}/></Route>
                    </Switch>
                </div>
                <Menu />
            </div>
        </Router>

    )
}

export default App;
