import React from 'react';
import '../styles/home.css';
import Search from './Search';
import CustomChatbot from './chatbot/CustomChatbot';
import bgcheck from '../images/bgcheck.png';
import neighborhood from '../images/neighborhood.jpg';
import membericon from '../images/membericon.jpg';

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
        <h2> We Take Safety Seriously!</h2>
        <div className="safety-steps">
          <img src={bgcheck} alt="background check" />
          <i class="fas fa-user-shield icon-2x" />
        </div>

        <div className="safety-steps">
          <img src={neighborhood} alt="neighborhood checks" />
          <i class="fas fa-user-shield icon-2x"></i>
        </div>

        <div className="safety-steps">
          <img src={membericon} alt="Member icons" />
          <i class="fas fa-user-shield icon-2x"></i>
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
