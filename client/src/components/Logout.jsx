import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/logout.css';

const Logout = () => {
  const history = useHistory();
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
        history.push('/');
      })
      .catch((e) => console.log(e.message.toString()));
  };
  return (
    <div>
      <Link to="/howitworks" className="hiw">
        How it works
      </Link>
      <div className="nav-login">
        {user ? <p> Hi, {user.firstName} 😃</p> : null}

        <button className="logout-btn" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
