import React from 'react';
import '../styles/howItWorks.css';

const homeImage = require('../images/homepage.jpg');
const divStyle = {
  backgroundImage: `url(${homeImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  with: '1200px',
  height: '800px'
};

function HowItWorks() {
  return (
    <div className="main-hiw">
      <div className="background-image" style={divStyle}></div>
      {/* <div class="main">
        <img
          className="img-left"
          src={require('../images/homepage.jpg')}
          alt="How it works "
        /> */}

      <div class="steps">
        <h1> How It Works</h1>
        <h4>Step 1</h4>
        <p>
          {' '}
          Type in a city and the month that you are looking for a place to stay,
          and search our available listings.{' '}
        </p>
        <h4>Step 2</h4>
        <p>
          Select a place, fill out your profile, add your preferences, and
          upload your ID.
        </p>
        <h4>Step 3</h4>
        <p>
          You will receive a confirmation, and we will connect you with your
          host and your new home!
        </p>
      </div>
      <img
        className="img-right"
        src={require('../images/loginimage.png')}
        alt="how it works"
      />
    </div>
  );
}

export default HowItWorks;
