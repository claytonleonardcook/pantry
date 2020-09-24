import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

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
