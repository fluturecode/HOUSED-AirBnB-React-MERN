import React from 'react';
import '../App.css';
import WOW from 'wowjs';

class HowItWorks extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div class="howItWorks">
        <div class="main-img">
          <img
            src={require('../images/Image Verify Info.png')}
            alt="Two people high-fiving"
          />
        </div>
        <div class="steps">
          <ol>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="2s"
            >
              Step 1
            </li>
            <p></p>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="4s"
            >
              Step 2
            </li>
            <p></p>
            <li
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="6s"
            >
              Step 3
            </li>
            <p></p>
          </ol>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
