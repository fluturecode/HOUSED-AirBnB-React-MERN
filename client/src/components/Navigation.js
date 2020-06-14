import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/">Housed</Link>
      <div className="nav-right">
        <Link to="/faq"> How it works</Link>
        <Link to="/signup"> Sign Up</Link>
        <Link to="/login"> Sign In</Link>
      </div>
    </div>
  );
};
