import React from 'react';
import '../styles/howItWorks.css';
import WOW from 'wowjs';

class HowItWorks extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="main-hiw">
        <div class="main">
          <img
            className="img-left"
            src={require('../images/hiw2.png')}
            alt="How it works "
          />

          <div class="steps">
            <h1> How It Works</h1>
            <h4>Step 1</h4>
            <p> Search our listings, and select a place.</p>
            <h4>Step 2</h4>
            <p>
              Fill out your profile, add your preferences, and upload your ID.
            </p>
            <h4>Step 3</h4>
            <p>
              Once you are verified, and your host accepts the request, we will
              connect you with you new home.
            </p>
          </div>
          <img
            className="img-right"
            src={require('../images/loginimage.png')}
            alt="how it works"
          />
        </div>
      </div>
    );
  }
}

export default HowItWorks;
