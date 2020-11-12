import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Edit from './Edit';

import firebaseConfig from './firebaseConfig.json';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

import './App.scss';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  }, []);

  useEffect(() => {
    if(user) {
      firebase.database().ref(user.uid).on('value', (snapshot) => {
        const value = snapshot.val();
        setList(value || {});
      })
    }
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login user={user} />
          </Route>
          <Route exact path="/home">
            <Home list={list} user={user} />
          </Route>
          <Route exact path='/edit/:key' component={({ match }) => <Edit params={match.params} user={user} list={list}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
