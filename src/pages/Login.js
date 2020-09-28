import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <h1>PANTRY</h1>
      <form>
        <div>
          <label>Email</label>
          <input type='text' />
        </div>
        <div>
          <label>Password</label>
          <input type='password' />
        </div>
        <hr />
        <button>Sign In</button>
        <button>Create Account</button>
      </form>
      <span>PANTRY | Developed by @claytoncook</span>
    </div>
  );
}

export default Login;
