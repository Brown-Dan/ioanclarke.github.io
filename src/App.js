import './App.css';
import react, {useState} from 'react'
import NameDisplay from './components/MainDisplay'
import Menu from './components/Menu'
import Home from './components/Home'
import Projects from './components/Projects'
import Bio from './components/Bio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const [firstTime, setFirstTime] = useState(true)

  window.onload = () => {
    const menu = document.getElementById('menu')
    const nameBox = document.getElementById('nameBox')
    setTimeout(() => 
      nameBox.style.width = 80 + '%', 
      1000)
    setTimeout(() => 
      menu.style.display = 'flex', 
      2000)
  }


  return (
    <Router>
      <div id='menu'>
        <Link className='menu-item' to='/' onClick={() => setFirstTime(false)}>home</Link>
        <Link className='menu-item' to='/projects' onClick={() => setFirstTime(false)}>projects</Link>
        <Link className='menu-item' to='/bio' onClick={() => setFirstTime(false)}>bio</Link>
      </div>

      <div id='main'>
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/bio'>
            <Bio />
          </Route>
          <Route path='/'>
            <Home firstTime={firstTime}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
