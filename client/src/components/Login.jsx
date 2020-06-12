import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = () => {
  const { setUser, setLoggedIn } = useContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async (email, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
      data: {
        email,
        password
      }
    });
  };

  return (
    <form onSubmit={(e) => logIn(email, password, e)}>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
};

export default Login;
