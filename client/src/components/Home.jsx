import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';
import Listings from './Listings';

const Home = () => {
  return (
    <div className="home">
      <div className="top-img">
        <img src={require('../images/hero1.png')} alt="Man on beach" />
        <p> this is a test</p>
      </div>
      <Search />
      {/* <Listings /> */}
      <div className="simple-steps">
        <h2> It's just 4 simple steps!</h2>

        <div className="all-steps">
          <h1> Step 1</h1>
          <h3> Become part of the family</h3>
          <p> We'll need some basic information</p>
        </div>

        <div className="all-steps">
          {' '}
          <h1> Step 3</h1>
          <h3> Search results designed specifically for you</h3>
          <p> Results that are exactly what you have in mind</p>
        </div>
        <div className="all-steps">
          {' '}
          <h1> Step 4</h1>
          <h3> Confirm and contact host</h3>
          <p> We will connect you and help you finish the process</p>
        </div>
      </div>
      <div className="safety-list">
        <h2> We Take Safety Serious!</h2>
        <div className="safety-steps"> step 1</div>
        <div className="safety-steps"> step 2</div>
        <div className="safety-steps"> step 3</div>
        <div className="safety-steps"> step 4</div>
      </div>
      <div className="become-host">
        <h2> Become a Host!</h2>
        <CustomChatbot />
      </div>
    </div>
  );
};

export default Home;
