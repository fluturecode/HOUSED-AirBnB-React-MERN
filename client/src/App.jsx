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
import HowItWorks from './components/HowItWorks';
import Search from './components/Search';
import ListingDetails from './components/ListingDetails';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/listings" component={Listings} />
          <Route path="/listings/search/:city" component={Listings} />
          <Route exact path="/listings/:id" component={ListingDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};
export default App;
