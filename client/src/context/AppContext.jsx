import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem('token');

  const [search, setSearch] = useState([]);
  const [listings, setListings] = useState([]);

  const handleSearch = (e, history) => {
    e.preventDefault();
    history.push('/listings');
    fetch(`/api/listings/search/${search}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setListings(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
      axios
        .get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          console.log(data);
          setUser(data);
          setLoggedIn(true);
        })
        .catch((e) => console.log(e.message.toString()));
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        search,
        setSearch,
        handleSearch,
        listings
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
