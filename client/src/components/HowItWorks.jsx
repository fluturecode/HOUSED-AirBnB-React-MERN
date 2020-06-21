import React from 'react';
import '../styles/howItWorks.css';
import WOW from 'wowjs';

class HowItWorks extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div class="main">
        <div class="main-img">
          <img src={require('../images/whitebed.jpg')} alt="Bedroom" />
        </div>
        <div class="steps">
          <ul>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="2s"
            >
              Step 1 - Search our listings, and select a place.
            </li>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="5s"
            >
              Step 2 - Fill out your profile, add your preferences, and upload
              your ID.
            </li>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="8s"
            >
              Step 3 - Once you are verified, and your host accepts the request,
              we will connect you with you new home.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
