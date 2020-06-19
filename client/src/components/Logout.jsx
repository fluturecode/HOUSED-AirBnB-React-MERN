import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../styles/nav.css'

const Logout = () => {
  const history = useHistory()
  const { user, setUser, setLoggedIn } = useContext(AppContext);

  const logOut = async () => {
    const token = localStorage.getItem('token');
    await axios({
      method: 'POST',
      url: `/api/users/logout`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(({ data }) => {
        console.log(data, 'logout response');
        localStorage.removeItem('token');
        setUser({});
        setLoggedIn(false);
        history.push('/')
      })
      .catch(e => console.log(e.message.toString()));
  };
  return (
    <div>
       
    <div className="nav-login">
    <Link to="/howitworks"> How it works</Link>
     <div className="nav-name">
      {user ? <p> Hi, {user.firstName} 😃</p> : null}


      </div>
      
      <button className="btn outline-danger" onClick={logOut}>
      Log out
    </button>

    </div>
  </div>
  );
};

export default Logout;
