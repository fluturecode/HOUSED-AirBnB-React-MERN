import React from 'react';
import '../App.css';

const HowItWorks = () => {
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
          <li>Step 1</li>
          <p></p>
          <li>Step 2</li>
          <p></p>
          <li>Step 3</li>
          <p></p>
        </ol>
      </div>
    </div>
  );
};

export default HowItWorks;
