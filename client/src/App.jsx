  
import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import Signup from './components/Signup';
import Search from './components/Search';
import Listings from './components/Listings';
import Login from './components/Login';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/listings/:search" component={Listings} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};
export default App;

