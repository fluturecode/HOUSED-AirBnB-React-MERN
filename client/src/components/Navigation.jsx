import React, { useEffect, useContext } from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Logout from './Logout';

export const Navigation = () => {
  const { user, loggedIn, setLoggedIn } = useContext(AppContext);

  // remove this useEffect after development
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  console.log(loggedIn);
  console.log(user);
  return (
    <div className="navbar">
      <Link to="/">Housed</Link>
      <div className="nav-right">
        {loggedIn ? (
          <Link to="/users/logout">
            <Logout />
          </Link>
        ) : (
          <>
            <Link to="/howitworks"> How it works</Link>
            <Link to="/signup"> Sign Up</Link>
            <Link to="/login"> Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
};
