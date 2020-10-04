import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './constants/firebaseConfig.json';

import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);

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
            <Home list={list} setList={setList} user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
