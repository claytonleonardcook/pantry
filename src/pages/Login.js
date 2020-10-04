import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
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
      <h1>PANTRY</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <hr />
        <p>{error}</p>
        <button onClick={signIn}>Sign In</button>
        <button onClick={createAccount}>Create Account</button>
      </form>
      <span>PANTRY | Developed by @claytoncook</span>
    </div>
  );
}

export default Login;
