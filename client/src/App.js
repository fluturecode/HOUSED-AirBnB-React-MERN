import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import Signup from './pages/Signup';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './components/Footer';
import HowItWorks from './pages/HowItWorks';
import ListingDetails from './components/ListingDetails';
import Confirmation from './pages/Confirmation.js';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howitworks" component={HowItWorks} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/logout" component={Home} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route path="/listings/search/:city" component={Listings} />
          <Route exact path="/listings/:id" component={ListingDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};
export default App;
