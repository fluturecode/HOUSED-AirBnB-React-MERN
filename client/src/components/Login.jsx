import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Login = ({ history }) => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = e => {
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
      .catch(e => console.log(e.message.toString(), 'Login error'));
  };

  return (
    <form onSubmit={logIn}>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
};

export default Login;
