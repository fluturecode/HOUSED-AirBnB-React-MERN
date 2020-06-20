import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';

const Home = () => {
  return (
    <div className="home">
      <div className="top-img">
        <img src={require('../images/cozy_room.jpg')} alt="Cozy bedroom" />
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div className="safety-list">
        <h2> We Take Safety Serious!</h2>
        <div className="safety-steps">
          step 1 <i class="fas fa-user-shield icon-2x"></i>
        </div>
        <div className="safety-steps">
          {' '}
          step 2<i class="fas fa-user-shield icon-2x"></i>
        </div>
        <div className="safety-steps">
          {' '}
          step 3<i class="fas fa-user-shield icon-2x"></i>
        </div>
      </div>
      <div className="become-host">
        <h2> Become a Host!</h2>
        <CustomChatbot />
      </div>
    </div>
  );
};

export default Home;
