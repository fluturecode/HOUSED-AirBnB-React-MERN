import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Login from './components/Login';

import './App.css';
import { Navigation } from './components/Navigation';
import Signup from './components/Signup';

const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
      <Login />
      <Signup />
    </AppContextProvider>
  );
};

export default App;
