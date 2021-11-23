import './static/css/app.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Menu from "./components/Menu/Menu";
import routes from "./static/data/routes"

const App = () => (
    <Router>
        <Switch>
            {routes.map(
                (route, i) =>
                    <Route key={i} path={route.path}> {route.name} </Route>)}
        </Switch>
        <Menu/>
    </Router>
)


export default App;
