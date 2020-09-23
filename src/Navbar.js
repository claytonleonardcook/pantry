import React from 'react';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <Router>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Navbar;
