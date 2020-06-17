import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import Signup from './components/Signup';
import Listings from './components/Listings';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/listings" component={Listings} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};
export default App;
