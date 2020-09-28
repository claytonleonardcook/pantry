import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';

function Login() {
  const history = useHistory();
  return (
    <div className="Login">
      <h1>PANTRY</h1>
      <form>
        <div>
          <label>Email</label>
          <input id='email' type='text' />
        </div>
        <div>
          <label>Password</label>
          <input id='password' type='password' />
        </div>
        <hr />
        <button onClick={() => {
          history.push('/home');
        }}>Sign In</button>
        <button onClick={() => {
          console.log(document.querySelector('input#email').value,
            document.querySelector('input#password').value)
        }}>Create Account</button>
      </form>
      <span>PANTRY | Developed by @claytoncook</span>
    </div>
  );
}

export default Login;
