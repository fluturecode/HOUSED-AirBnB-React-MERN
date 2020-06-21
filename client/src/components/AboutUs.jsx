import React from 'react';
import '../styles/aboutus.css';

export const AboutUs = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img src="img1.jpg" alt="Jane" style="width:100%" />
          <div className="container">
            <h2>Jane Doe</h2>
            <p className="title">CEO &amp; Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="img2.jpg" alt="Mike" style="width:100%" />
          <div className="container">
            <h2>Mike Ross</h2>
            <p className="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="img3.jpg" alt="John" style="width:100%" />
          <div className="container">
            <h2>John Doe</h2>
            <p className="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
