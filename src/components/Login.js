import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <div>
        <img src="https://via.placeholder.com/350x150" />
        <div>
          <form>
            <input placeholder="Username" />
            <input placeholder="Password" />
            <button>Login</button>
          </form>
          <a>Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
