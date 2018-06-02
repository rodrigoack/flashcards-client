import React from 'react';

// Components
import LoginButton from './LoginButton';

// Styles
import './Login.css';

const Login = () => (
  <div className="Login">
    <div className="Login-header">
      <h2 className="Login-title">
        Flashcards
      </h2>
      <p className="Login-intro">
        Lorem ipsum dolor sit amet.
      </p>
    </div>
    <div className="Login-buttons">
      <LoginButton />
    </div>
  </div>
)

export default Login;
