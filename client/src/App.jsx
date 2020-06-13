import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Login from './components/Login';

import './App.css';
import { Navigation } from './components/Navigation';

const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
      <Login />
    </AppContextProvider>
  );
};

export default App;
