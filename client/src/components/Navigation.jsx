import React, { useEffect, useContext } from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Logout from './Logout';
import logo from '../images/housed.png';

export const Navigation = () => {
  const { user, loggedIn, setLoggedIn } = useContext(AppContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Housed logo" />
        </div>
      </Link>
      <div className="nav-right">
        {loggedIn ? (
          <Logout />
        ) : (
          <>
            <Link to="/howitworks"> How it works</Link>
            <Link to="/signup"> Sign Up</Link>
            <Link to="/login">
              <i className="far fa-user icon"></i>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
