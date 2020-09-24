import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
