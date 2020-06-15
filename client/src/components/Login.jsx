import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = () => {
  const { setUser, setLoggedIn, user } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async (email, password, e) => {
    e.preventDefault();
    await axios({
      method: 'POST',
      url: `/users/login`,
      data: {
        email,
        password
      }
    })
      .then(({ data }) => {
        console.log(data, 'response');
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        setEmail('');
        setPassword('');
      })
      .catch((e) => console.log(e.message.toString(), 'Login error'));
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
