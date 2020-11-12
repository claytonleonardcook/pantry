import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Button, TextField, FormControl, FormGroup } from '@material-ui/core';

import './Login.scss';

function Login({ user }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, [user, history]);

  const signIn = () => firebase.auth().signInWithEmailAndPassword(email, password).catch(err => setError(err.message));
  const createAccount = () => firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => setError(err.message));
  return (
    <div className="Login">
      <FormControl>
        <h1>PANTRY</h1>
        <FormGroup>
          <div>
            <TextField label="Email" variant="outlined" color="primary" value={email} onChange={e => setEmail(e.target.value)} />
            <TextField label="Password" variant="outlined" color="primary" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <span>{error}</span>
          <div>
            <Button variant="contained" color="primary" type="submit" onClick={signIn}>Sign In</Button>
            <br />
            <Button variant="contained" color="primary" onClick={createAccount}>Create Account</Button>
          </div>
        </FormGroup>
        <footer>PANTRY | Developed by @claytoncook</footer>
      </FormControl>
    </div>
  );
}

export default Login;
