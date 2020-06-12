import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import Login from './components/Login';

import './App.css';

const App = () => {
  return (
    <AppContextProvider>
      <h1>HOUSED Front End!</h1>
      <Login />
    </AppContextProvider>
  );
};

export default App;
