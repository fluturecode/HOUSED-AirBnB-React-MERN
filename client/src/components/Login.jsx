import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import '../styles/login.css';

const Login = ({ history }) => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post('/api/users/login', { email, password })
      .then(({ data }) => {
        setUser(data.user);
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        history.push('/');
        // console.log(data, 'response');
        // setUser(data.user);
        // localStorage.setItem('token', data.token);
        // setLoggedIn(true);
        // setEmail('');
        // setPassword('');
      })
      .catch((e) => console.log(e.message.toString(), 'Login error'));
  };

  return (
    <div className="main-login">
      {/* <p className="welcome">Welcome Back!</p> */}
      <div className="second-login">
        <p className="login">LOG IN</p>

        <form className="signinform" onSubmit={logIn}>
          <p className="emailtext">Email</p>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="forgotemail">Forgot your email?</p>
          <p className="passwordtext">Password</p>
          <input
            className="password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="forgotpassword">Forgot your password?</p>
          <button type="submit" className="loginbutton">
            Log In
          </button>
        </form>
        <img src={require('../images/hiw1.png')} alt="cartoon dancers" />
      </div>
    </div>
  );
};

export default Login;
